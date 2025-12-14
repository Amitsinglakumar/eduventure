import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: [
            'story',          // Kindergarten stories
            'poem',           // Kindergarten poems
            'exam',           // Competitive exam content
            'ar-model',       // AR/VR 3D models
            'article',        // Communication skills articles
            'video',          // Educational videos
            'lesson',         // Subject lessons
            'quiz'            // Practice quizzes
        ]
    },
    category: {
        type: String,
        required: true,
        // Examples: 'kindergarten', 'secondary-cbse', 'jee', 'science-model', etc.
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
        // Flexible structure for different content types
        // For stories: { pages: [{text, image}] }
        // For exams: { questions: [{question, options, answer}] }
        // For AR: { modelUrl, metadata }
    },
    metadata: {
        difficulty: {
            type: String,
            enum: ['beginner', 'intermediate', 'advanced'],
            default: 'beginner'
        },
        duration: {
            type: Number, // in minutes
            default: 10
        },
        tags: [String],
        subject: String,
        grade: String,
        board: String,
        xpReward: {
            type: Number,
            default: 50
        }
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    viewCount: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

// Indexes for better query performance
contentSchema.index({ type: 1, category: 1 });
contentSchema.index({ 'metadata.subject': 1, 'metadata.grade': 1 });
contentSchema.index({ isPublished: 1 });

export default mongoose.model('Content', contentSchema);
