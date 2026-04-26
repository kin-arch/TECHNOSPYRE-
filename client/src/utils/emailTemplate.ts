/**
 * Utility to build the branded HTML email template in the frontend.
 * Reconstructed from the previous server controller.
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeMessage(raw: string): string {
  // Simple cleanup for the rich text content
  return raw.trim().replace(/<script\b[\s\S]*?<\/script>/gi, "");
}

export function buildHtmlEmail(name: string, email: string, subject: string, message: string): string {
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit", timeZoneName: "short",
  });

  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);
  const messageHtml = sanitizeMessage(message);
  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${subject}`)}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Inquiry — TechnoSpyre</title>
</head>
<body style="margin:0;padding:0;background-color:#0e0e0e; font-family: sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0e0e0e;">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#131313;border:1px solid #2a2a2a;">
          <!-- Header -->
          <tr>
            <td align="center" style="padding:28px 20px;background-color:#1a1a2e;">
              <p style="margin:0;font-size:28px;font-weight:800;color:#ffffff;letter-spacing:0.06em;">TechnoSpyre</p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td align="center" style="padding:20px 24px;">
              <h1 style="margin:0;font-size:24px;color:#e4e2e1;">Someone wants to <span style="color:#a4e6ff;">connect.</span></h1>
              <p style="margin:12px 0 0 0;font-size:15px;color:#bbc9cf;">A new inquiry was sent from the TechnoSpyre contact form.</p>
            </td>
          </tr>
          <!-- Details -->
          <tr>
            <td style="padding:0 20px 12px 20px;">
              <div style="background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08); padding:18px;">
                <p style="margin:0 0 6px 0;font-size:10px;font-weight:700;color:#6b8a95;text-transform:uppercase;">Full name</p>
                <p style="margin:0;font-size:17px;font-weight:700;color:#e4e2e1;">${safeName}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:0 20px 12px 20px;">
              <div style="background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08); padding:18px;">
                <p style="margin:0 0 6px 0;font-size:10px;font-weight:700;color:#6b8a95;text-transform:uppercase;">Email</p>
                <p style="margin:0;font-size:15px;font-weight:700;"><a href="mailto:${email}" style="color:#a4e6ff;text-decoration:none;">${email}</a></p>
              </div>
            </td>
          </tr>
          <!-- Message -->
          <tr>
            <td style="padding:0 20px 20px 20px;">
              <div style="background-color:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08); border-left:3px solid #a4e6ff; padding:20px;">
                <p style="margin:0 0 12px 0;font-size:10px;font-weight:700;color:#a4e6ff;text-transform:uppercase;">Message</p>
                <div style="margin:0;font-size:15px;line-height:1.75;color:#bbc9cf;">${messageHtml}</div>
              </div>
            </td>
          </tr>
          <!-- Reply CTA -->
          <tr>
            <td align="center" style="padding:8px 20px 28px 20px;">
              <a href="${replyHref}" style="display:inline-block;padding:14px 28px;background-color:#7dd3fc;border-radius:999px;font-size:15px;font-weight:800;color:#0c4a6e;text-decoration:none;">Reply to ${safeName}</a>
            </td>
          </tr>
          <!-- Footer -->
          <tr style="border-top:1px solid #2a2a2a;">
            <td style="padding:20px 24px;font-size:11px;color:#6b8a95;">
              <p style="margin:0;">TechnoSpyre · hello@technospyre.com</p>
              <p style="margin:8px 0 0 0;">${timestamp}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
