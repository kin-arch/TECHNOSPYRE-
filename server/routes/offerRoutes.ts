import { Router } from 'express';
import { getOffer, updateOffer } from '../controllers/offerController.ts';
import { verifyAdmin } from '../middleware/authMiddleware.ts';

const router = Router();

// GET /api/offer  - public (used by frontend to read live offer)
router.get('/', getOffer);

// PUT /api/offer  - protected (admin only)
router.put('/', verifyAdmin, updateOffer);

export default router;
