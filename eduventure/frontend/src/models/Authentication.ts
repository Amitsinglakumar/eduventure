// ============================================
// AUTHENTICATION MODEL
// ============================================

export interface User {
    id: string;
    email: string;
    username: string;
    password_hash?: string;
    created_at: Date;
    last_login: Date;
    profile: UserProfile;
    settings: UserSettings;
}

export interface UserProfile {
    avatar_url: string;
    bio: string;
    learning_streak: number;
    total_points: number;
    current_level: number;
    badges: string[];
    achievements: Achievement[];
}

export interface UserSettings {
    theme: 'cyberpunk' | 'classic';
    notifications_enabled: boolean;
    sound_enabled: boolean;
    language: string;
    timezone: string;
}

export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlocked_at: Date;
}

export interface LoginCredentials {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface RegisterData {
    username: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

export interface AuthResponse {
    success: boolean;
    user?: User;
    token?: string;
    error?: string;
}

export interface PasswordValidationResult {
    isValid: boolean;
    errors: string[];
    strength: 'weak' | 'medium' | 'strong' | 'very-strong';
}

// ============================================
// AUTHENTICATION MODEL CLASS
// ============================================

export class AuthenticationModel {
    /**
     * Validate email format using regex
     */
    static validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    }

    /**
     * Validate password strength and requirements
     * Requirements:
     * - Minimum 8 characters
     * - At least one uppercase letter
     * - At least one number
     * - At least one special character
     */
    static validatePassword(password: string): PasswordValidationResult {
        const errors: string[] = [];
        let strength: 'weak' | 'medium' | 'strong' | 'very-strong' = 'weak';

        // Check minimum length
        if (password.length < 8) {
            errors.push('Min 8 characters');
        }

        // Check uppercase
        if (!/[A-Z]/.test(password)) {
            errors.push('Needs uppercase');
        }

        // Check number
        if (!/[0-9]/.test(password)) {
            errors.push('Needs number');
        }

        // Check special character
        if (!/[^a-zA-Z0-9]/.test(password)) {
            errors.push('Needs special char');
        }

        // Calculate strength
        let strengthScore = 0;
        if (password.length >= 8) strengthScore++;
        if (password.length >= 12) strengthScore++;
        if (/[A-Z]/.test(password)) strengthScore++;
        if (/[a-z]/.test(password)) strengthScore++;
        if (/[0-9]/.test(password)) strengthScore++;
        if (/[^a-zA-Z0-9]/.test(password)) strengthScore++;

        if (strengthScore <= 2) strength = 'weak';
        else if (strengthScore <= 4) strength = 'medium';
        else if (strengthScore <= 5) strength = 'strong';
        else strength = 'very-strong';

        return {
            isValid: errors.length === 0,
            errors,
            strength
        };
    }

    /**
     * Validate username
     * Requirements:
     * - Minimum 3 characters
     * - Maximum 20 characters
     * - Only alphanumeric and underscores
     */
    static validateUsername(username: string): { isValid: boolean; error?: string } {
        if (username.length < 3) {
            return { isValid: false, error: 'Username must be at least 3 characters' };
        }

        if (username.length > 20) {
            return { isValid: false, error: 'Username must be less than 20 characters' };
        }

        if (!/^[a-zA-Z0-9_]+$/.test(username)) {
            return { isValid: false, error: 'Username can only contain letters, numbers, and underscores' };
        }

        return { isValid: true };
    }

    /**
     * Validate registration data
     */
    static validateRegistration(data: RegisterData): { isValid: boolean; errors: Record<string, string> } {
        const errors: Record<string, string> = {};

        // Validate username
        const usernameValidation = this.validateUsername(data.username);
        if (!usernameValidation.isValid) {
            errors.username = usernameValidation.error!;
        }

        // Validate email
        if (!this.validateEmail(data.email)) {
            errors.email = 'Invalid email format';
        }

        // Validate password
        const passwordValidation = this.validatePassword(data.password);
        if (!passwordValidation.isValid) {
            errors.password = passwordValidation.errors.join(', ');
        }

        // Validate confirm password
        if (data.confirmPassword && data.password !== data.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
    }

    /**
     * Sanitize user input
     */
    static sanitizeInput(input: string): string {
        return input.trim().replace(/[<>]/g, '');
    }

    /**
     * Hash password (client-side - for demo purposes)
     * In production, use bcrypt on server-side
     */
    static async hashPassword(password: string): Promise<string> {
        // This is a simple hash for demo purposes
        // In production, use bcrypt on the server-side
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    /**
     * Generate default user profile
     */
    static createDefaultProfile(): UserProfile {
        return {
            avatar_url: '/assets/avatars/default.png',
            bio: '',
            learning_streak: 0,
            total_points: 0,
            current_level: 1,
            badges: [],
            achievements: []
        };
    }

    /**
     * Generate default user settings
     */
    static createDefaultSettings(): UserSettings {
        return {
            theme: 'cyberpunk',
            notifications_enabled: true,
            sound_enabled: true,
            language: 'en',
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
    }

    /**
     * Create guest user
     */
    static createGuestUser(): User {
        return {
            id: 'guest',
            email: 'guest@eduventure.com',
            username: 'Guest',
            created_at: new Date(),
            last_login: new Date(),
            profile: this.createDefaultProfile(),
            settings: this.createDefaultSettings()
        };
    }
}
