import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password, ageGroup } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword, ageGroup });
        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        res.status(201).json({ token, user: { id: user._id, username, points: user.points } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, username: user.username, points: user.points, badges: user.badges } });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const guestLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body;

        // Create a guest user with minimal data
        const guestEmail = `${name}@guest.eduventure.local`;
        const hashedPassword = await bcrypt.hash('guest-password', 10);

        // Check if guest already exists
        let user = await User.findOne({ email: guestEmail });

        if (!user) {
            // Create new guest user
            user = new User({
                username: name,
                email: guestEmail,
                password: hashedPassword,
                role: 'guest',
                ageGroup: 'primary'
            });
            await user.save();
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '24h' });
        res.json({
            token,
            user: {
                id: user._id,
                name: user.username,
                level: user.level,
                totalXP: user.xp,
                streak: user.streak,
                badges: user.badges,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Guest login error:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};
