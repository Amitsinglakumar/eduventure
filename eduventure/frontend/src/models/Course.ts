// ============================================
// COURSE MODEL
// ============================================

export interface Course {
    id: string;
    title: string;
    description: string;
    category: CourseCategory;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    thumbnail_url: string;
    duration_minutes: number;
    modules: CourseModule[];
    instructor: Instructor;
    rating: number;
    total_enrollments: number;
    tags: string[];
    created_at: Date;
    updated_at: Date;
}

export interface CourseModule {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
    order: number;
    duration_minutes: number;
}

export interface Lesson {
    id: string;
    title: string;
    type: 'video' | 'text' | 'quiz' | 'interactive';
    content_url?: string;
    duration_minutes: number;
    order: number;
    completed?: boolean;
}

export interface Instructor {
    id: string;
    name: string;
    avatar_url: string;
    bio: string;
    rating: number;
}

export type CourseCategory =
    | 'kindergarten'
    | 'secondary'
    | 'higher-education'
    | 'competitive-exams'
    | 'communication'
    | 'ar-learning'
    | 'career';

export interface CourseEnrollment {
    user_id: string;
    course_id: string;
    enrolled_at: Date;
    progress: number; // percentage
    completed: boolean;
    completed_at?: Date;
    last_accessed: Date;
}

export class CourseModel {
    /**
     * Calculate total course duration
     */
    static getTotalDuration(course: Course): number {
        return course.modules.reduce((total, module) => total + module.duration_minutes, 0);
    }

    /**
     * Calculate course completion percentage
     */
    static calculateProgress(course: Course): number {
        const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0);
        const completedLessons = course.modules.reduce(
            (total, module) => total + module.lessons.filter(l => l.completed).length,
            0
        );
        return totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
    }

    /**
     * Get next lesson to take
     */
    static getNextLesson(course: Course): { module: CourseModule; lesson: Lesson } | null {
        for (const module of course.modules) {
            const nextLesson = module.lessons.find(lesson => !lesson.completed);
            if (nextLesson) {
                return { module, lesson: nextLesson };
            }
        }
        return null;
    }

    /**
     * Check if course is completed
     */
    static isCompleted(course: Course): boolean {
        return this.calculateProgress(course) === 100;
    }
}
