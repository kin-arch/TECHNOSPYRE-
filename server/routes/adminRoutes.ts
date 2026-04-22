import { Router } from 'express';
import { adminLogin, verifyToken } from '../controllers/adminAuthController.ts';
import { verifyAdmin } from '../middleware/authMiddleware.ts';

const router = Router();

// POST /api/admin/login
router.post('/login', adminLogin);

// GET /api/admin/verify  (requires valid token)
router.get('/verify', verifyAdmin, verifyToken);

export default router;
