import { Request, Response } from "express";
import { getTransporter } from "../config/smtp.ts";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Plain-text version of rich message for multipart/alternative */
function htmlToPlainText(html: string): string {
  let t = html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/div>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  t = t.replace(/\n{3,}/g, "\n\n").trim();
  return t;
}

/**
 * TipTap HTML in email: strip risky bits; keep basic formatting Gmail understands.
 */
function sanitizeMessageForEmailHtml(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed.includes("<")) {
    return escapeHtml(trimmed).replace(/\n/g, "<br>");
  }
  let s = trimmed;
  s = s.replace(/<script\b[\s\S]*?<\/script>/gi, "");
  s = s.replace(/<style\b[\s\S]*?<\/style>/gi, "");
  s = s.replace(/\s+on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, "");
  s = s.replace(/\bhref\s*=\s*(["']?)\s*javascript:[^"'>\s]*/gi, 'href=$1#');
  s = s.replace(/\bsrc\s*=\s*(["']?)\s*javascript:[^"'>\s]*/gi, 'src=$1#');
  s = s.replace(/<(\/?)(iframe|object|embed|form|input|button|textarea|select|meta|link|base|svg)\b[^>]*>/gi, "");
  s = s.replace(/<\/?(table|tr|td|tbody|thead|th|caption|colgroup|body|html|head)\b[^>]*>/gi, "");
  return s;
}

// ─── Branded HTML Email Template (table-first for Gmail / mobile) ───────────
function buildHtmlEmail(name: string, email: string, subject: string, message: string): string {
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit", timeZoneName: "short",
  });

  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);
  const messageHtml = sanitizeMessageForEmailHtml(message);
  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${subject}`)}`;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>New Inquiry — TechnoSpyre</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#0e0e0e;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0e0e0e;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#131313;border:1px solid #2a2a2a;">
          <!-- Header: wordmark -->
          <tr>
            <td align="center" style="padding:28px 20px 20px 20px;background-color:#1a1a2e;">
              <p style="margin:0 0 4px 0;font-family:Segoe UI,Arial,sans-serif;font-size:28px;line-height:1.15;font-weight:800;color:#ffffff;letter-spacing:0.06em;">TechnoSpyre</p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin-top:16px;">
                <tr>
                  <td style="background-color:rgba(164,230,255,0.12);border:1px solid rgba(164,230,255,0.35);border-radius:999px;padding:8px 18px;">
                    <span style="font-family:Segoe UI,Arial,sans-serif;font-size:11px;font-weight:700;color:#a4e6ff;letter-spacing:0.12em;text-transform:uppercase;">New inquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Title -->
          <tr>
            <td align="center" style="padding:20px 24px 8px 24px;font-family:Segoe UI,Arial,sans-serif;">
              <h1 style="margin:0;font-size:24px;line-height:1.25;font-weight:800;color:#e4e2e1;">Someone wants to <span style="color:#a4e6ff;">connect.</span></h1>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:0 24px 24px 24px;font-family:Segoe UI,Arial,sans-serif;">
              <p style="margin:12px 0 0 0;font-size:15px;line-height:1.65;color:#bbc9cf;">A new inquiry was sent from the TechnoSpyre contact form. Details are below.</p>
            </td>
          </tr>
          <!-- Full-width name -->
          <tr>
            <td style="padding:0 20px 12px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
                <tr>
                  <td style="padding:18px 20px;font-family:Segoe UI,Arial,sans-serif;">
                    <p style="margin:0 0 6px 0;font-size:10px;font-weight:700;color:#6b8a95;letter-spacing:0.15em;text-transform:uppercase;">Full name</p>
                    <p style="margin:0;font-size:17px;font-weight:700;color:#e4e2e1;word-break:break-word;">${safeName}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Full-width email -->
          <tr>
            <td style="padding:0 20px 12px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
                <tr>
                  <td style="padding:18px 20px;font-family:Segoe UI,Arial,sans-serif;">
                    <p style="margin:0 0 6px 0;font-size:10px;font-weight:700;color:#6b8a95;letter-spacing:0.15em;text-transform:uppercase;">Email</p>
                    <p style="margin:0;font-size:15px;font-weight:700;word-break:break-all;">
                      <a href="mailto:${encodeURIComponent(email)}" style="color:#a4e6ff;text-decoration:none;">${escapeHtml(email)}</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Subject -->
          <tr>
            <td style="padding:0 20px 12px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);">
                <tr>
                  <td style="padding:18px 20px;font-family:Segoe UI,Arial,sans-serif;">
                    <p style="margin:0 0 6px 0;font-size:10px;font-weight:700;color:#6b8a95;letter-spacing:0.15em;text-transform:uppercase;">Topic</p>
                    <p style="margin:0;font-size:17px;font-weight:700;color:#e4e2e1;">${safeSubject}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Message (rich HTML from editor, sanitized) -->
          <tr>
            <td style="padding:0 20px 20px 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-left:3px solid #a4e6ff;">
                <tr>
                  <td style="padding:20px;font-family:Segoe UI,Arial,sans-serif;">
                    <p style="margin:0 0 12px 0;font-size:10px;font-weight:700;color:#a4e6ff;letter-spacing:0.15em;text-transform:uppercase;">Message</p>
                    <div style="margin:0;font-size:15px;line-height:1.75;color:#bbc9cf;">${messageHtml}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- CTA -->
          <tr>
            <td align="center" style="padding:8px 20px 28px 20px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                <tr>
                  <td align="center" bgcolor="#a4e6ff" style="background-color:#7dd3fc;border-radius:999px;">
                    <a href="${escapeHtml(replyHref)}" style="display:inline-block;padding:14px 28px;font-family:Segoe UI,Arial,sans-serif;font-size:15px;font-weight:800;color:#0c4a6e;text-decoration:none;">Reply to ${safeName}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:20px 24px 28px 24px;border-top:1px solid #2a2a2a;font-family:Segoe UI,Arial,sans-serif;">
              <p style="margin:0 0 6px 0;font-size:13px;font-weight:700;color:#e4e2e1;">TechnoSpyre</p>
              <p style="margin:0;font-size:11px;color:#6b8a95;">hello@technospyre.com · technospyre.com</p>
              <p style="margin:14px 0 0 0;font-size:10px;color:#6b8a95;">${escapeHtml(timestamp)}</p>
              <p style="margin:14px 0 0 0;font-size:11px;color:#4a5568;line-height:1.6;">This message was sent by the TechnoSpyre contact form. Use the reply button to respond to ${safeName}.</p>
            </td>
          </tr>
          <tr>
            <td style="height:4px;line-height:4px;font-size:4px;background-color:#00d1ff;">&nbsp;</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Controller ─────────────────────────────────────────────────────────────
export const handleContactForm = async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = getTransporter();

    if (transporter) {
      const mailOptions = {
        from: `"TechnoSpyre Portal" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_TO || "kinghasnain911@gmail.com",
        replyTo: email,
        subject: `✦ New Inquiry: ${subject} — from ${name}`,
        text: `New inquiry from ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${htmlToPlainText(message)}`,
        html: buildHtmlEmail(name, email, subject, message),
      };

      await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully to ${process.env.SMTP_TO || "kinghasnain911@gmail.com"}`);
      return res.json({ success: true });
    } else {
      // Fallback for development
      console.log("--- SIMULATED SMTP EMAIL (HTML) ---");
      console.log(`To: ${process.env.SMTP_TO || "kinghasnain911@gmail.com"}`);
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("------------------------------------");

      await new Promise(resolve => setTimeout(resolve, 1000));

      return res.json({
        success: true,
        message: "Email simulated successfully (add SMTP_USER/PASS to .env for real sending)",
      });
    }
  } catch (err) {
    console.error("SMTP Error:", err);
    return res.status(500).json({ error: "Failed to send email via SMTP" });
  }
};

