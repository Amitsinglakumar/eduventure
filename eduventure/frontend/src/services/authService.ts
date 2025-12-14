// ============================================
// AUTHENTICATION SERVICE
// ============================================

import axios from 'axios';
import { LoginCredentials, RegisterData, AuthResponse, User } from '../models/Authentication';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const authService = {
    /**
     * Login user
     */
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/login`, {
                email: credentials.email,
                password: credentials.password
            });

            return {
                success: true,
                user: response.data.user,
                token: response.data.token
            };
        } catch (error: any) {
            return {
                success: false,
                error: error.response?.data?.message || 'Login failed. Please try again.'
            };
        }
    },

    /**
     * Register new user
     */
    async register(data: RegisterData): Promise<AuthResponse> {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/register`, {
                username: data.username,
                email: data.email,
                password: data.password
            });

            return {
                success: true,
                user: response.data.user,
                token: response.data.token
            };
        } catch (error: any) {
            return {
                success: false,
                error: error.response?.data?.message || 'Registration failed. Please try again.'
            };
        }
    },

    /**
     * Verify JWT token
     */
    async verifyToken(token: string): Promise<{ valid: boolean; user?: User }> {
        try {
            const response = await axios.get(`${API_BASE_URL}/auth/verify`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            return {
                valid: true,
                user: response.data.user
            };
        } catch (error) {
            return {
                valid: false
            };
        }
    },

    /**
     * Logout user (server-side token invalidation if needed)
     */
    async logout(token: string): Promise<void> {
        try {
            await axios.post(`${API_BASE_URL}/auth/logout`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.error('Logout error:', error);
        }
    },

    /**
     * Request password reset
     */
    async requestPasswordReset(email: string): Promise<{ success: boolean; message: string }> {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/forgot-password`, { email });
            return {
                success: true,
                message: response.data.message
            };
        } catch (error: any) {
            return {
                success: false,
                message: error.response?.data?.message || 'Failed to send reset email'
            };
        }
    },

    /**
     * Reset password with token
     */
    async resetPassword(token: string, newPassword: string): Promise<{ success: boolean; message: string }> {
        try {
            const response = await axios.post(`${API_BASE_URL}/auth/reset-password`, {
                token,
                password: newPassword
            });
            return {
                success: true,
                message: response.data.message
            };
        } catch (error: any) {
            return {
                success: false,
                message: error.response?.data?.message || 'Failed to reset password'
            };
        }
    }
};
