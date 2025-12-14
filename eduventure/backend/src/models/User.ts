import mongoose, { Document, Model } from 'mongoose';

// Interface for User document with methods
interface IUser extends Document {
    name?: string;
    username?: string;
    email?: string;
    password: string;
    role: 'user' | 'admin' | 'guest';
    isGuest?: boolean;
    xp: number;
    totalXP?: number;
    level: number;
    streak: number;
    badges: string[];
    lastActivityDate: Date;
    selectedBoard: string | null;
    selectedGrade: string | null;
    selectedStream: string | null;
    completedStories: string[];
    careerInterests: string[];
    ageGroup: 'kindergarten' | 'primary' | 'secondary';
    levels: Array<{ subject: string; level: number; completed: boolean }>;
    points: number;
    createdAt: Date;
    updatedAt: Date;

    // Methods
    addXP(amount: number): { leveledUp: boolean; newLevel?: number; currentXp?: number };
    updateStreak(): number;
}

const userSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String, unique: true, sparse: true },
    email: { type: String, unique: true, sparse: true },  // sparse allows multiple null/undefined
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin', 'guest'], default: 'user' },
    isGuest: { type: Boolean, default: false },

    // Gamification Fields
    xp: { type: Number, default: 0, min: 0 },
    totalXP: { type: Number, default: 0, min: 0 },  // Alias for xp
    level: { type: Number, default: 1, min: 1 },
    streak: { type: Number, default: 0, min: 0 },
    badges: [String],
    lastActivityDate: { type: Date, default: Date.now },

    // Module Preferences
    selectedBoard: { type: String, enum: ['cbse', 'icse', 'state'], default: null },
    selectedGrade: { type: String, default: null },
    selectedStream: { type: String, default: null },

    // Progress Tracking
    completedStories: [String],
    careerInterests: [String],

    // Legacy Fields
    ageGroup: { type: String, enum: ['kindergarten', 'primary', 'secondary'], default: 'primary' },
    levels: [{ subject: String, level: Number, completed: Boolean }],
    points: { type: Number, default: 0 },

    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

// Virtual field to calculate next level XP
userSchema.virtual('nextLevelXp').get(function () {
    return this.level * 500; // 500 XP per level
});

// Method to add XP and check for level up
userSchema.methods.addXP = function (amount: number) {
    this.xp += amount;
    const nextLevelXp = this.level * 500;

    if (this.xp >= nextLevelXp) {
        this.level += 1;
        return { leveledUp: true, newLevel: this.level };
    }
    return { leveledUp: false, currentXp: this.xp };
};

// Method to update streak
userSchema.methods.updateStreak = function () {
    const today = new Date();
    const lastActivity = new Date(this.lastActivityDate);
    const diffDays = Math.floor((today.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
        // Consecutive day
        this.streak += 1;
    } else if (diffDays > 1) {
        // Streak broken
        this.streak = 1;
    }
    // If same day, don't change streak

    this.lastActivityDate = today;
    return this.streak;
};

export default mongoose.model<IUser>('User', userSchema);
