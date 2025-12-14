import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from '../components/Auth/LoginForm';
import AuthAnimation from '../components/Auth/AuthAnimation';
import { slideInVariants, slideInRightVariants } from '../utils/animations';
import '../styles/cyberpunk.css';
import '../styles/animations.css';
import '../styles/glassmorphism.css';
import './AuthView.css';

export const AuthView: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleSuccess = (user: any) => {
        console.log('Authentication successful:', user);
        // Redirect to dashboard
        window.location.href = '/dashboard';
    };

    return (
        <div className="auth-view">
            <AuthAnimation />

            <div className="auth-container">
                <motion.div
                    className="auth-header"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="auth-brand">
                        <span className="glitch holographic" data-text="EDUVENTURE">
                            EDUVENTURE
                        </span>
                    </h1>
                    <p className="auth-tagline cyberpunk-subtitle">
                        NEXT GENERATION LEARNING PLATFORM
                    </p>
                </motion.div>

                <div className="auth-forms">
                    <AnimatePresence mode="wait">
                        {isLogin ? (
                            <motion.div
                                key="login"
                                variants={slideInVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <LoginForm
                                    onSuccess={handleSuccess}
                                    onRegisterClick={() => setIsLogin(false)}
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="register"
                                variants={slideInRightVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {/* RegisterForm will be here - for now showing a placeholder */}
                                <div style={{ textAlign: 'center', color: 'var(--color-text-primary)' }}>
                                    <p>Register form coming soon...</p>
                                    <button
                                        onClick={() => setIsLogin(true)}
                                        style={{
                                            background: 'none',
                                            border: '2px solid var(--color-neon-cyan)',
                                            color: 'var(--color-neon-cyan)',
                                            padding: '12px 24px',
                                            cursor: 'pointer',
                                            marginTop: '20px'
                                        }}
                                    >
                                        Back to Login
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div
                    className="auth-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p>© 2024 EduVenture. All rights reserved.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default AuthView;
