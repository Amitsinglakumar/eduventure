import React from 'react';
import { motion } from 'framer-motion';
import { glowVariants } from '../../utils/animations';
import './NeonButton.css';

interface NeonButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
}

export const NeonButton: React.FC<NeonButtonProps> = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    icon,
    fullWidth = false,
    className = ''
}) => {
    return (
        <motion.button
            type={type}
            className={`neon-button neon-button--${variant} neon-button--${size} ${fullWidth ? 'neon-button--full' : ''} ${className}`}
            onClick={onClick}
            disabled={disabled || loading}
            initial="initial"
            whileHover={!disabled && !loading ? "hover" : "initial"}
            whileTap={!disabled && !loading ? "tap" : "initial"}
            variants={glowVariants}
        >
            <span className="neon-button__content">
                {loading ? (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="neon-button__spinner"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" strokeDasharray="12 40" />
                        </svg>
                    </motion.div>
                ) : (
                    <>
                        {icon && <span className="neon-button__icon">{icon}</span>}
                        {children}
                    </>
                )}
            </span>
            <span className="neon-button__glow" />
        </motion.button>
    );
};

export default NeonButton;
