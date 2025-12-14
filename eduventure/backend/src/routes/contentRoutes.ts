import express from 'express';
import {
    getContentByType,
    getContentByCategory,
    getContentById,
    createContent,
    updateContent,
    deleteContent
} from '../controllers/contentController';
import { protect, admin } from '../middleware/auth';

const router = express.Router();

// Public routes (no auth required)
router.get('/type/:type', getContentByType);
router.get('/category/:category', getContentByCategory);
router.get('/:id', getContentById);

// Protected routes (require authentication)
router.post('/', protect, admin, createContent);
router.put('/:id', protect, admin, updateContent);
router.delete('/:id', protect, admin, deleteContent);

export default router;
