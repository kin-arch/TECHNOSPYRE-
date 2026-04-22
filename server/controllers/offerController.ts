import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const offerFilePath = path.join(__dirname, '../data/offer.json');

export const getOffer = (req: Request, res: Response): void => {
  try {
    const raw = fs.readFileSync(offerFilePath, 'utf-8');
    const offer = JSON.parse(raw);
    res.json(offer);
  } catch (err) {
    res.status(500).json({ message: 'Failed to read offer data.' });
  }
};

export const updateOffer = (req: Request, res: Response): void => {
  try {
    const updatedOffer = req.body;

    if (!updatedOffer || typeof updatedOffer !== 'object') {
      res.status(400).json({ message: 'Invalid offer data.' });
      return;
    }

    // Read existing data and merge
    const raw = fs.readFileSync(offerFilePath, 'utf-8');
    const existing = JSON.parse(raw);
    const merged = { ...existing, ...updatedOffer };

    fs.writeFileSync(offerFilePath, JSON.stringify(merged, null, 2), 'utf-8');
    res.json({ message: 'Offer updated successfully.', offer: merged });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update offer data.' });
  }
};
