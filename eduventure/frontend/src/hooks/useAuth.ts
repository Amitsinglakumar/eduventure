// ============================================
// AUTHENTICATION HOOK
// ============================================

import { useState, useEffect, useCallback } from 'react';
import { User, AuthState } from '../models/Authentication';
import { AuthController } from '../controllers/AuthController';

export const useAuth = () => {
    const [authState, setAuthState] = useState<AuthState>({
        isAuthenticated: false,
        user: null,
        token: null,
        loading: true,
        error: null
    });

    const authController = new AuthController();

    // Initialize auth state from storage
    useEffect(() => {
        const initializeAuth = async () => {
            const token = authController.getToken();
            const user = authController.getCurrentUser();

            if (token && user) {
                // Verify token is still valid
                const verification = await authController.verifyToken(token);

                if (verification.valid) {
                    setAuthState({
                        isAuthenticated: true,
                        user: verification.user || user,
                        token,
                        loading: false,
                        error: null
                    });
                } else {
                    // Token expired, clear auth
                    await authController.logout();
                    setAuthState({
                        isAuthenticated: false,
                        user: null,
                        token: null,
                        loading: false,
                        error: null
                    });
                }
            } else {
                setAuthState({
                    isAuthenticated: false,
                    user: null,
                    token: null,
                    loading: false,
                    error: null
                });
            }
        };

        initializeAuth();
    }, []);

    const login = useCallback(async (email: string, password: string, rememberMe: boolean = false) => {
        setAuthState(prev => ({ ...prev, loading: true, error: null }));

        const result = await authController.login({ email, password, rememberMe });

        if (result.success && result.user && result.token) {
            setAuthState({
                isAuthenticated: true,
                user: result.user,
                token: result.token,
                loading: false,
                error: null
            });
            return { success: true };
        } else {
            setAuthState(prev => ({
                ...prev,
                loading: false,
                error: result.error || 'Login failed'
            }));
            return { success: false, error: result.error };
        }
    }, []);

    const register = useCallback(async (username: string, email: string, password: string) => {
        setAuthState(prev => ({ ...prev, loading: true, error: null }));

        const result = await authController.register({ username, email, password });

        if (result.success && result.user && result.token) {
            setAuthState({
                isAuthenticated: true,
                user: result.user,
                token: result.token,
                loading: false,
                error: null
            });
            return { success: true };
        } else {
            setAuthState(prev => ({
                ...prev,
                loading: false,
                error: result.error || 'Registration failed'
            }));
            return { success: false, error: result.error };
        }
    }, []);

    const logout = useCallback(async () => {
        await authController.logout();
        setAuthState({
            isAuthenticated: false,
            user: null,
            token: null,
            loading: false,
            error: null
        });
    }, []);

    const loginAsGuest = useCallback(async () => {
        setAuthState(prev => ({ ...prev, loading: true, error: null }));

        const result = await authController.loginAsGuest();

        if (result.success && result.user) {
            setAuthState({
                isAuthenticated: true,
                user: result.user,
                token: result.token || 'guest-token',
                loading: false,
                error: null
            });
            return { success: true };
        }

        return { success: false };
    }, []);

    return {
        ...authState,
        login,
        register,
        logout,
        loginAsGuest
    };
};

export default useAuth;
