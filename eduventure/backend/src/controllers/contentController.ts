import { Request, Response } from 'express';
import Content from '../models/Content';

// Get content by type
export const getContentByType = async (req: Request, res: Response) => {
    try {
        const { type } = req.params;
        const { category, limit = 20 } = req.query;

        const query: any = { type, isPublished: true };

        if (category) {
            query.category = category;
        }

        const content = await Content.find(query)
            .limit(Number(limit))
            .sort({ createdAt: -1 })
            .select('-__v');

        res.json({
            success: true,
            count: content.length,
            data: content
        });
    } catch (error) {
        console.error('Error fetching content by type:', error);
        res.status(500).json({ error: 'Failed to fetch content' });
    }
};

// Get content by category
export const getContentByCategory = async (req: Request, res: Response) => {
    try {
        const { category } = req.params;
        const { type, limit = 20 } = req.query;

        const query: any = { category, isPublished: true };

        if (type) {
            query.type = type;
        }

        const content = await Content.find(query)
            .limit(Number(limit))
            .sort({ createdAt: -1 })
            .select('-__v');

        res.json({
            success: true,
            count: content.length,
            data: content
        });
    } catch (error) {
        console.error('Error fetching content by category:', error);
        res.status(500).json({ error: 'Failed to fetch content' });
    }
};

// Get single content by ID
export const getContentById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const content = await Content.findById(id).select('-__v');

        if (!content) {
            return res.status(404).json({ error: 'Content not found' });
        }

        // Increment view count
        content.viewCount += 1;
        await content.save();

        res.json({
            success: true,
            data: content
        });
    } catch (error) {
        console.error('Error fetching content:', error);
        res.status(500).json({ error: 'Failed to fetch content' });
    }
};

// Create new content (Admin only)
export const createContent = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const contentData = req.body;

        if (!userId) {
            return res.status(401).json({ error: 'Not authenticated' });
        }

        // Add author
        contentData.author = userId;

        const content = new Content(contentData);
        await content.save();

        res.status(201).json({
            success: true,
            message: 'Content created successfully',
            data: content
        });
    } catch (error) {
        console.error('Error creating content:', error);
        res.status(500).json({ error: 'Failed to create content' });
    }
};

// Update content (Admin only)
export const updateContent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const content = await Content.findByIdAndUpdate(
            id,
            { $set: updates },
            { new: true, runValidators: true }
        );

        if (!content) {
            return res.status(404).json({ error: 'Content not found' });
        }

        res.json({
            success: true,
            message: 'Content updated successfully',
            data: content
        });
    } catch (error) {
        console.error('Error updating content:', error);
        res.status(500).json({ error: 'Failed to update content' });
    }
};

// Delete content (Admin only)
export const deleteContent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const content = await Content.findByIdAndDelete(id);

        if (!content) {
            return res.status(404).json({ error: 'Content not found' });
        }

        res.json({
            success: true,
            message: 'Content deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting content:', error);
        res.status(500).json({ error: 'Failed to delete content' });
    }
};
