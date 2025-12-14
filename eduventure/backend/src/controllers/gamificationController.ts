import { Request, Response } from 'express';
import User from '../models/User';

// Get user gamification stats
export const getStats = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        const user = await User.findById(userId).select('username xp level streak badges lastActivityDate');

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const nextLevelXp = user.level * 500;
        const progress = (user.xp / nextLevelXp) * 100;

        res.json({
            username: user.username,
            xp: user.xp,
            level: user.level,
            nextLevelXp,
            progress: Math.round(progress),
            streak: user.streak,
            badges: user.badges || [],
            badgeCount: user.badges?.length || 0
        });
    } catch (error) {
        console.error('Error fetching gamification stats:', error);
        res.status(500).json({ error: 'Failed to fetch stats' });
    }
};

// Award XP to user
export const awardXP = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const { amount, reason } = req.body;

        if (!userId) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        if (!amount || amount <= 0) {
            return res.status(400).json({ error: 'Invalid XP amount' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const result = user.addXP(amount);
        await user.save();

        res.json({
            message: `Awarded ${amount} XP for ${reason || 'activity'}`,
            ...result,
            currentXp: user.xp,
            currentLevel: user.level
        });
    } catch (error) {
        console.error('Error awarding XP:', error);
        res.status(500).json({ error: 'Failed to award XP' });
    }
};

// Update user streak
export const updateStreak = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const newStreak = user.updateStreak();
        await user.save();

        res.json({
            message: 'Streak updated',
            streak: newStreak,
            lastActivityDate: user.lastActivityDate
        });
    } catch (error) {
        console.error('Error updating streak:', error);
        res.status(500).json({ error: 'Failed to update streak' });
    }
};

// Award badge to user
export const awardBadge = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const { badgeName } = req.body;

        if (!userId) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        if (!badgeName) {
            return res.status(400).json({ error: 'Badge name required' });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        if (!user.badges.includes(badgeName)) {
            user.badges.push(badgeName);
            await user.save();
        }

        res.json({
            message: `Badge "${badgeName}" awarded!`,
            badges: user.badges
        });
    } catch (error) {
        console.error('Error awarding badge:', error);
        res.status(500).json({ error: 'Failed to award badge' });
    }
};
