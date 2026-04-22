import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// Hash of admin password stored at startup
let adminPasswordHash: string = '';

// On module load, hash the password from env
(async () => {
  const raw = process.env.ADMIN_PASSWORD || 'admin@technospyre2026';
  adminPasswordHash = await bcrypt.hash(raw, 10);
})();

export const adminLogin = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body as { username: string; password: string };

  const expectedUsername = process.env.ADMIN_USERNAME || 'admin';
  const expectedPassword = process.env.ADMIN_PASSWORD || 'admin@technospyre2026';

  if (!username || !password) {
    res.status(400).json({ message: 'Username and password are required.' });
    return;
  }

  const usernameMatch = username === expectedUsername;
  const passwordMatch = await bcrypt.compare(password, adminPasswordHash).catch(() => password === expectedPassword);

  if (!usernameMatch || !passwordMatch) {
    res.status(401).json({ message: 'Invalid credentials.' });
    return;
  }

  const secret = process.env.JWT_SECRET || 'fallback_secret';
  const token = jwt.sign({ username }, secret, { expiresIn: '24h' });

  res.json({ token, username, message: 'Login successful.' });
};

export const verifyToken = (req: Request, res: Response): void => {
  // If this endpoint is reached, the token is already verified by middleware
  res.json({ valid: true, message: 'Token is valid.' });
};
