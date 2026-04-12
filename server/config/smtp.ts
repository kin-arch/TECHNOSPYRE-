import nodemailer from "nodemailer";

// Lazy getter — reads env vars at call time, not at module load time.
// This avoids the ESM hoisting issue where imports run before dotenv.config().
export const getTransporter = () => {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
};
