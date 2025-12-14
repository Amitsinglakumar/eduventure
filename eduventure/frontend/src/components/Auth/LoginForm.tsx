import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import CyberpunkInput from '../common/CyberpunkInput';
import NeonButton from '../common/NeonButton';
import GlassCard from '../common/GlassCard';
import { AuthController } from '../../controllers/AuthController';
import { AuthenticationModel } from '../../models/Authentication';
import { containerVariants, itemVariants } from '../../utils/animations';
import './LoginForm.css';

interface LoginFormProps {
    onSuccess: (user: any) => void;
    onRegisterClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
    onSuccess,
    onRegisterClick
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const authController = new AuthController();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setFieldErrors({});
        setLoading(true);

        try {
            // Validate inputs
            const newErrors: Record<string, string> = {};

            if (!email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!AuthenticationModel.validateEmail(email)) {
                newErrors.email = 'Invalid email format';
            }

            if (!password.trim()) {
                newErrors.password = 'Password is required';
            }

            if (Object.keys(newErrors).length > 0) {
                setFieldErrors(newErrors);
                setLoading(false);
                return;
            }

            // Call controller
            const result = await authController.login({
                email,
                password,
                rememberMe
            });

            if (result.success) {
                onSuccess(result.user);
            } else {
                setError(result.error || 'Login failed');
            }
        } catch (err: any) {
            setError('An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlassCard className="login-form" glowColor="cyan">
            <form onSubmit={handleLogin} className="login-form__content">
                <motion.h2
                    className="login-form__title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="glitch neon-text-cyan" data-text="SIGN IN">
                        SIGN IN
                    </span>
                </motion.h2>

                <motion.p
                    className="login-form__subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    ACCESS THE NEURAL NETWORK
                </motion.p>

                {error && (
                    <motion.div
                        className="login-form__error-alert"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <span className="error-icon">⚠</span>
                        {error}
                    </motion.div>
                )}

                <motion.div
                    className="login-form__inputs"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <CyberpunkInput
                            label="Email Address"
                            placeholder="your@email.com"
                            type="email"
                            name="email"
                            value={email}
                            onChange={setEmail}
                            icon={<Mail size={18} />}
                            error={fieldErrors.email}
                            required
                            autoComplete="email"
                        />
                    </motion.div>

                    <motion.div variants={itemVariants} className="password-input-container">
                        <CyberpunkInput
                            label="Password"
                            placeholder="••••••••"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={password}
                            onChange={setPassword}
                            icon={<Lock size={18} />}
                            error={fieldErrors.password}
                            required
                            autoComplete="current-password"
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="login-form__options"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="checkbox-input"
                        />
                        <span className="checkbox-custom" />
                        <span className="checkbox-text">Remember me</span>
                    </label>
                    <a href="#forgot" className="forgot-password-link">
                        Forgot password?
                    </a>
                </motion.div>

                <motion.div
                    className="login-form__button-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <NeonButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={loading}
                        disabled={loading}
                        fullWidth
                    >
                        {loading ? 'AUTHENTICATING...' : 'INITIATE LOGIN'}
                    </NeonButton>
                </motion.div>

                <motion.div
                    className="login-form__divider"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <span>OR</span>
                </motion.div>

                <motion.div
                    className="login-form__footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <p className="login-form__text">
                        No account yet?{' '}
                        <button
                            type="button"
                            onClick={onRegisterClick}
                            className="register-link"
                        >
                            Create one now
                        </button>
                    </p>
                </motion.div>
            </form>
        </GlassCard>
    );
};

export default LoginForm;
