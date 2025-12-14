import { Request, Response } from 'express';
import { generateContent } from '../services/geminiService';

export const getAIContent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { topic, ageGroup } = req.body;
        if (!topic) {
            res.status(400).json({ message: 'Topic is required' });
            return;
        }
        const content = await generateContent(topic, ageGroup || 'primary');
        res.json({ content });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ message: 'AI generation failed', error });
    }
};
