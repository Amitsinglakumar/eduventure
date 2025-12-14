// ============================================
// USER MODEL
// ============================================

import { UserProfile, UserSettings } from './Authentication';

export interface User {
    id: string;
    email: string;
    username: string;
    created_at: Date;
    last_login: Date;
    profile: UserProfile;
    settings: UserSettings;
}

export interface UserUpdate {
    username?: string;
    email?: string;
    profile?: Partial<UserProfile>;
    settings?: Partial<UserSettings>;
}

export interface UserStats {
    total_courses_enrolled: number;
    total_courses_completed: number;
    total_time_spent: number; // in minutes
    average_progress: number; // percentage
    current_streak: number; // days
    longest_streak: number; // days
}

export class UserModel {
    /**
     * Calculate user level based on points
     */
    static calculateLevel(points: number): number {
        return Math.floor(points / 1000) + 1;
    }

    /**
     * Calculate points needed for next level
     */
    static pointsForNextLevel(currentPoints: number): number {
        const currentLevel = this.calculateLevel(currentPoints);
        const nextLevelPoints = currentLevel * 1000;
        return nextLevelPoints - currentPoints;
    }

    /**
     * Calculate progress to next level (percentage)
     */
    static levelProgress(points: number): number {
        const currentLevel = this.calculateLevel(points);
        const previousLevelPoints = (currentLevel - 1) * 1000;
        const nextLevelPoints = currentLevel * 1000;
        const progress = ((points - previousLevelPoints) / (nextLevelPoints - previousLevelPoints)) * 100;
        return Math.min(100, Math.max(0, progress));
    }

    /**
     * Check if user maintains learning streak
     */
    static checkStreak(lastLogin: Date): boolean {
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - lastLogin.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays <= 1; // Streak continues if logged in within 1 day
    }

    /**
     * Update user streak
     */
    static updateStreak(user: User): User {
        const streakActive = this.checkStreak(user.last_login);

        return {
            ...user,
            profile: {
                ...user.profile,
                learning_streak: streakActive ? user.profile.learning_streak + 1 : 1
            },
            last_login: new Date()
        };
    }
}
