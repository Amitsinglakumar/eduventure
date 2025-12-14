import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// Extend Express Request type to include user property
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role?: string;
            };
        }
    }
}

// Authentication middleware
export const protect = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            res.status(401).json({ message: 'Not authorized, no token' });
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };

        const user = await User.findById(decoded.userId).select('-password');

        if (!user) {
            res.status(401).json({ message: 'User not found' });
            return;
        }

        req.user = {
            id: decoded.userId,
            role: user.role
        };

        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

// Admin authorization middleware
export const admin = (req: Request, res: Response, next: NextFunction): void => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Access forbidden: admin only' });
    }
};
