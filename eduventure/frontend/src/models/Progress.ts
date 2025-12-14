// ============================================
// PROGRESS MODEL
// ============================================

export interface Progress {
    user_id: string;
    course_id: string;
    module_progress: ModuleProgress[];
    total_time_spent: number; // minutes
    last_updated: Date;
    quiz_scores: QuizScore[];
    achievements_unlocked: string[];
}

export interface ModuleProgress {
    module_id: string;
    lesson_progress: LessonProgress[];
    completed: boolean;
    completion_date?: Date;
}

export interface LessonProgress {
    lesson_id: string;
    completed: boolean;
    completion_date?: Date;
    time_spent: number; // minutes
    attempts: number;
    score?: number; // for quizzes
}

export interface QuizScore {
    quiz_id: string;
    score: number;
    max_score: number;
    percentage: number;
    attempted_at: Date;
    passed: boolean;
}

export interface LearningAnalytics {
    total_courses_enrolled: number;
    total_courses_completed: number;
    total_time_spent: number;
    average_quiz_score: number;
    learning_streak: number;
    most_active_category: string;
    weekly_activity: WeeklyActivity[];
}

export interface WeeklyActivity {
    date: string;
    time_spent: number; // minutes
    lessons_completed: number;
}

export class ProgressModel {
    /**
     * Calculate overall progress percentage
     */
    static calculateOverallProgress(progress: Progress): number {
        const totalLessons = progress.module_progress.reduce(
            (total, module) => total + module.lesson_progress.length,
            0
        );
        const completedLessons = progress.module_progress.reduce(
            (total, module) => total + module.lesson_progress.filter(l => l.completed).length,
            0
        );
        return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
    }

    /**
     * Calculate average quiz score
     */
    static calculateAverageQuizScore(quizScores: QuizScore[]): number {
        if (quizScores.length === 0) return 0;
        const totalPercentage = quizScores.reduce((sum, quiz) => sum + quiz.percentage, 0);
        return totalPercentage / quizScores.length;
    }

    /**
     * Check if module is completed
     */
    static isModuleCompleted(moduleProgress: ModuleProgress): boolean {
        return moduleProgress.lesson_progress.every(lesson => lesson.completed);
    }

    /**
     * Get completion rate for a specific time period
     */
    static getCompletionRate(weeklyActivity: WeeklyActivity[]): number {
        const daysWithActivity = weeklyActivity.filter(day => day.lessons_completed > 0).length;
        return weeklyActivity.length > 0 ? (daysWithActivity / weeklyActivity.length) * 100 : 0;
    }

    /**
     * Format time spent as human-readable string
     */
    static formatTimeSpent(minutes: number): string {
        if (minutes < 60) {
            return `${Math.round(minutes)} min`;
        } else if (minutes < 1440) {
            const hours = Math.floor(minutes / 60);
            const mins = Math.round(minutes % 60);
            return `${hours}h ${mins}m`;
        } else {
            const days = Math.floor(minutes / 1440);
            const hours = Math.floor((minutes % 1440) / 60);
            return `${days}d ${hours}h`;
        }
    }
}
