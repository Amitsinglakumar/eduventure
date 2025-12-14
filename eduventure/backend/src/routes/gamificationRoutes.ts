import express from 'express';
import { getStats, awardXP, updateStreak, awardBadge } from '../controllers/gamificationController';
import { protect } from '../middleware/auth';

const router = express.Router();

// All routes require authentication
router.use(protect);

// GET /api/gamification/stats - Get user gamification stats
router.get('/stats', getStats);

// POST /api/gamification/award-xp - Award XP to user
router.post('/award-xp', awardXP);

// POST /api/gamification/update-streak - Update user streak
router.post('/update-streak', updateStreak);

// POST /api/gamification/award-badge - Award badge to user
router.post('/award-badge', awardBadge);

export default router;
