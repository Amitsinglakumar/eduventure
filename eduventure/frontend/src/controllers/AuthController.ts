// ============================================
// AUTHENTICATION CONTROLLER
// ============================================

import { AuthenticationModel, LoginCredentials, RegisterData, AuthResponse, User } from '../models/Authentication';
import { authService } from '../services/authService';

export class AuthController {
    /**
     * Handle user login
     */
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        try {
            // Validate email
            if (!AuthenticationModel.validateEmail(credentials.email)) {
                return {
                    success: false,
                    error: 'Invalid email format'
                };
            }

            // Validate password exists
            if (!credentials.password || credentials.password.trim().length === 0) {
                return {
                    success: false,
                    error: 'Password is required'
                };
            }

            // Sanitize inputs
            const sanitizedCredentials = {
                email: AuthenticationModel.sanitizeInput(credentials.email),
                password: credentials.password,
                rememberMe: credentials.rememberMe
            };

            // Call API
            const response = await authService.login(sanitizedCredentials);

            if (!response.success) {
                return response;
            }

            // Store token based on remember me preference
            if (sanitizedCredentials.rememberMe) {
                localStorage.setItem('authToken', response.token!);
                localStorage.setItem('user', JSON.stringify(response.user));
            } else {
                sessionStorage.setItem('authToken', response.token!);
                sessionStorage.setItem('user', JSON.stringify(response.user));
            }

            return {
                success: true,
                user: response.user,
                token: response.token
            };
        } catch (error: any) {
            console.error('Login error:', error);
            return {
                success: false,
                error: error.message || 'An unexpected error occurred during login'
            };
        }
    }

    /**
     * Handle user registration
     */
    async register(userData: RegisterData): Promise<AuthResponse> {
        try {
            // Validate registration data
            const validation = AuthenticationModel.validateRegistration(userData);

            if (!validation.isValid) {
                const errorMessage = Object.values(validation.errors).join('. ');
                return {
                    success: false,
                    error: errorMessage
                };
            }

            // Sanitize inputs
            const sanitizedData = {
                username: AuthenticationModel.sanitizeInput(userData.username),
                email: AuthenticationModel.sanitizeInput(userData.email),
                password: userData.password
            };

            // Call API
            const response = await authService.register(sanitizedData);

            if (!response.success) {
                return response;
            }

            // Store auth data
            sessionStorage.setItem('authToken', response.token!);
            sessionStorage.setItem('user', JSON.stringify(response.user));

            return {
                success: true,
                user: response.user,
                token: response.token
            };
        } catch (error: any) {
            console.error('Registration error:', error);
            return {
                success: false,
                error: error.message || 'An unexpected error occurred during registration'
            };
        }
    }

    /**
     * Handle user logout
     */
    async logout(): Promise<{ success: boolean }> {
        try {
            const token = this.getToken();

            if (token) {
                await authService.logout(token);
            }

            // Clear all auth data
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            sessionStorage.removeItem('authToken');
            sessionStorage.removeItem('user');

            return { success: true };
        } catch (error) {
            console.error('Logout error:', error);
            // Still clear local data even if API call fails
            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            sessionStorage.removeItem('authToken');
            sessionStorage.removeItem('user');

            return { success: true };
        }
    }

    /**
     * Verify authentication token
     */
    async verifyToken(token: string): Promise<{ valid: boolean; user?: User }> {
        try {
            const result = await authService.verifyToken(token);
            return result;
        } catch (error) {
            console.error('Token verification error:', error);
            return { valid: false };
        }
    }

    /**
     * Get current auth token from storage
     */
    getToken(): string | null {
        return localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    }

    /**
     * Get current user from storage
     */
    getCurrentUser(): User | null {
        const userStr = localStorage.getItem('user') || sessionStorage.getItem('user');
        if (userStr) {
            try {
                return JSON.parse(userStr);
            } catch (error) {
                console.error('Error parsing user data:', error);
                return null;
            }
        }
        return null;
    }

    /**
     * Check if user is authenticated
     */
    isAuthenticated(): boolean {
        return this.getToken() !== null;
    }

    /**
     * Request password reset
     */
    async requestPasswordReset(email: string): Promise<{ success: boolean; message: string }> {
        if (!AuthenticationModel.validateEmail(email)) {
            return {
                success: false,
                message: 'Invalid email format'
            };
        }

        return await authService.requestPasswordReset(email);
    }

    /**
     * Reset password
     */
    async resetPassword(token: string, newPassword: string): Promise<{ success: boolean; message: string }> {
        const validation = AuthenticationModel.validatePassword(newPassword);

        if (!validation.isValid) {
            return {
                success: false,
                message: validation.errors.join('. ')
            };
        }

        return await authService.resetPassword(token, newPassword);
    }

    /**
     * Login as guest (demo mode)
     */
    async loginAsGuest(): Promise<AuthResponse> {
        const guestUser = AuthenticationModel.createGuestUser();

        // Store guest data
        sessionStorage.setItem('authToken', 'guest-token');
        sessionStorage.setItem('user', JSON.stringify(guestUser));

        return {
            success: true,
            user: guestUser,
            token: 'guest-token'
        };
    }
}
