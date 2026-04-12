import { Request, Response } from "express";
import { getTransporter } from "../config/smtp.ts";

// ─── Branded HTML Email Template ────────────────────────────────────────────
function buildHtmlEmail(name: string, email: string, subject: string, message: string): string {
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit", timeZoneName: "short",
  });

  const escapedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Inquiry — TechnoSpyre</title>
  <!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#0e0e0e;font-family:'Segoe UI',Arial,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0e0e0e;min-height:100vh;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Card container -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);background-color:#131313;box-shadow:0 25px 80px rgba(0,0,0,0.6);">

          <!-- ── HERO HEADER ── -->
          <tr>
            <td style="padding:0;background:linear-gradient(135deg,#131313 0%,#1a1a2e 50%,#131313 100%);position:relative;">
              <!-- Background image overlay -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0;position:relative;">
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80"
                      alt="TechnoSpyre network background"
                      width="600"
                      style="width:100%;height:220px;object-fit:cover;display:block;opacity:0.25;filter:grayscale(30%);"
                    />
                    <!-- Gradient overlay on image -->
                    <div style="position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom,rgba(19,19,19,0.4) 0%,rgba(19,19,19,0.85) 80%,#131313 100%);"></div>
                    <!-- Logo + brand centered on image -->
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="position:absolute;top:0;left:0;right:0;bottom:0;">
                      <tr>
                        <td align="center" valign="middle" style="padding:30px 40px;">
                          <!-- Logo mark -->
                          <div style="width:56px;height:56px;background:linear-gradient(135deg,#a4e6ff,#00d1ff);border-radius:14px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:16px;box-shadow:0 0 30px rgba(164,230,255,0.4);">
                            <span style="font-size:26px;font-weight:900;color:#003543;letter-spacing:-1px;line-height:1;">T</span>
                          </div>
                          <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;">TECHNOSPYRE</div>
                          <div style="font-size:11px;font-weight:600;color:#a4e6ff;letter-spacing:5px;text-transform:uppercase;">INQUIRY NOTIFICATION</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── SUBJECT BADGE ── -->
          <tr>
            <td align="center" style="padding:28px 40px 0 40px;">
              <div style="display:inline-block;background:linear-gradient(135deg,rgba(164,230,255,0.12),rgba(0,209,255,0.08));border:1px solid rgba(164,230,255,0.25);border-radius:100px;padding:8px 20px;">
                <span style="font-size:11px;font-weight:700;color:#a4e6ff;letter-spacing:4px;text-transform:uppercase;">&#9679; New Inquiry Received</span>
              </div>
            </td>
          </tr>

          <!-- ── HERO TEXT ── -->
          <tr>
            <td align="center" style="padding:16px 40px 32px 40px;">
              <h1 style="margin:0 0 12px 0;font-size:32px;font-weight:800;color:#e4e2e1;line-height:1.2;letter-spacing:-0.5px;">
                Someone wants to <span style="color:#a4e6ff;">connect.</span>
              </h1>
              <p style="margin:0;font-size:15px;color:#bbc9cf;line-height:1.7;max-width:420px;">
                A new inquiry has been submitted through the TechnoSpyre contact portal. Review the details below and follow up promptly.
              </p>
            </td>
          </tr>

          <!-- ── DIVIDER ── -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:linear-gradient(to right,transparent,rgba(164,230,255,0.3),transparent);"></div>
            </td>
          </tr>

          <!-- ── SENDER INFO CARDS ── -->
          <tr>
            <td style="padding:32px 40px 0 40px;">
              <p style="margin:0 0 16px 0;font-size:11px;font-weight:700;color:#a4e6ff;letter-spacing:4px;text-transform:uppercase;">Sender Details</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Name card -->
                  <td width="48%" style="padding-right:8px;vertical-align:top;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;overflow:hidden;">
                      <tr>
                        <td style="padding:20px 20px 8px 20px;">
                          <div style="width:32px;height:32px;background:linear-gradient(135deg,rgba(164,230,255,0.2),rgba(0,209,255,0.1));border:1px solid rgba(164,230,255,0.2);border-radius:8px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px;">
                            <!-- person icon -->
                            <span style="font-size:14px;color:#a4e6ff;">&#128100;</span>
                          </div>
                          <p style="margin:0 0 4px 0;font-size:10px;font-weight:600;color:#6b8a95;letter-spacing:3px;text-transform:uppercase;">Full Name</p>
                          <p style="margin:0;font-size:16px;font-weight:700;color:#e4e2e1;word-break:break-word;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="height:4px;background:linear-gradient(to right,#a4e6ff,#00d1ff);border-radius:0 0 14px 14px;"></td>
                      </tr>
                    </table>
                  </td>
                  <!-- Email card -->
                  <td width="48%" style="padding-left:8px;vertical-align:top;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;overflow:hidden;">
                      <tr>
                        <td style="padding:20px 20px 8px 20px;">
                          <div style="width:32px;height:32px;background:linear-gradient(135deg,rgba(209,188,255,0.2),rgba(112,0,255,0.1));border:1px solid rgba(209,188,255,0.2);border-radius:8px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px;">
                            <span style="font-size:14px;color:#d1bcff;">&#9993;</span>
                          </div>
                          <p style="margin:0 0 4px 0;font-size:10px;font-weight:600;color:#6b8a95;letter-spacing:3px;text-transform:uppercase;">Email Address</p>
                          <p style="margin:0;font-size:14px;font-weight:700;color:#d1bcff;word-break:break-all;">
                            <a href="mailto:${email}" style="color:#d1bcff;text-decoration:none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="height:4px;background:linear-gradient(to right,#d1bcff,#7000ff);border-radius:0 0 14px 14px;"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── SUBJECT ROW ── -->
          <tr>
            <td style="padding:16px 40px 0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;overflow:hidden;">
                <tr>
                  <td style="padding:20px 24px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td valign="middle" style="padding-right:14px;">
                          <div style="width:40px;height:40px;background:linear-gradient(135deg,rgba(164,230,255,0.15),rgba(0,209,255,0.08));border:1px solid rgba(164,230,255,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;">
                            <span style="font-size:18px;">&#9881;</span>
                          </div>
                        </td>
                        <td valign="middle">
                          <p style="margin:0 0 2px 0;font-size:10px;font-weight:600;color:#6b8a95;letter-spacing:3px;text-transform:uppercase;">Inquiry Topic</p>
                          <p style="margin:0;font-size:17px;font-weight:700;color:#e4e2e1;">${subject}</p>
                        </td>
                        <td valign="middle" align="right">
                          <div style="background:linear-gradient(135deg,rgba(164,230,255,0.15),rgba(0,209,255,0.08));border:1px solid rgba(164,230,255,0.2);padding:6px 14px;border-radius:100px;">
                            <span style="font-size:11px;font-weight:700;color:#a4e6ff;letter-spacing:2px;text-transform:uppercase;">ACTIVE</span>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── MESSAGE BLOCK ── -->
          <tr>
            <td style="padding:16px 40px 0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:14px;overflow:hidden;border-left:3px solid #a4e6ff;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 14px 0;font-size:10px;font-weight:700;color:#a4e6ff;letter-spacing:4px;text-transform:uppercase;">&#128172; Message</p>
                    <p style="margin:0;font-size:15px;color:#bbc9cf;line-height:1.85;white-space:pre-line;">${escapedMessage}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── REPLY CTA ── -->
          <tr>
            <td align="center" style="padding:36px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="background:linear-gradient(135deg,#a4e6ff,#00d1ff);border-radius:100px;box-shadow:0 0 30px rgba(164,230,255,0.35);">
                    <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" style="display:inline-block;padding:16px 40px;font-size:15px;font-weight:800;color:#003543;text-decoration:none;letter-spacing:0.5px;white-space:nowrap;">
                      &#8599;&#65039; Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── STATS ROW ── -->
          <tr>
            <td style="padding:0 40px 32px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:rgba(164,230,255,0.04);border:1px solid rgba(164,230,255,0.1);border-radius:14px;">
                <tr>
                  <td align="center" style="padding:20px;border-right:1px solid rgba(255,255,255,0.06);" width="33%">
                    <p style="margin:0 0 4px 0;font-size:22px;font-weight:800;color:#a4e6ff;">24/7</p>
                    <p style="margin:0;font-size:10px;color:#6b8a95;letter-spacing:2px;text-transform:uppercase;">Support</p>
                  </td>
                  <td align="center" style="padding:20px;border-right:1px solid rgba(255,255,255,0.06);" width="33%">
                    <p style="margin:0 0 4px 0;font-size:22px;font-weight:800;color:#d1bcff;">12+</p>
                    <p style="margin:0;font-size:10px;color:#6b8a95;letter-spacing:2px;text-transform:uppercase;">Tech Nodes</p>
                  </td>
                  <td align="center" style="padding:20px;" width="33%">
                    <p style="margin:0 0 4px 0;font-size:22px;font-weight:800;color:#a4e6ff;">&lt;2hr</p>
                    <p style="margin:0;font-size:10px;color:#6b8a95;letter-spacing:2px;text-transform:uppercase;">Response</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── DIVIDER ── -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background:linear-gradient(to right,transparent,rgba(255,255,255,0.08),transparent);"></div>
            </td>
          </tr>

          <!-- ── FOOTER ── -->
          <tr>
            <td style="padding:28px 40px 36px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 4px 0;font-size:13px;font-weight:700;color:#e4e2e1;">TechnoSpyre Inc.</p>
                    <p style="margin:0;font-size:11px;color:#6b8a95;">hello@technospyre.io &nbsp;|&nbsp; technospyre.io</p>
                  </td>
                  <td align="right" valign="top">
                    <p style="margin:0;font-size:10px;color:#6b8a95;letter-spacing:1px;">${timestamp}</p>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top:16px;">
                    <p style="margin:0;font-size:11px;color:#4a5568;line-height:1.6;">
                      This notification was automatically generated by the TechnoSpyre contact portal. Do not reply directly to this email — use the reply button above to respond to ${name}.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── BOTTOM ACCENT BAR ── -->
          <tr>
            <td style="height:4px;background:linear-gradient(to right,#7000ff,#a4e6ff,#00d1ff);"></td>
          </tr>

        </table>
        <!-- /Card container -->

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
        text: `New inquiry from ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`,
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

