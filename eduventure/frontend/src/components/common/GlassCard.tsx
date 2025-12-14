import React from 'react';
import { motion } from 'framer-motion';
import { cardHoverVariants } from '../../utils/animations';
import './GlassCard.css';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    animate?: boolean;
    glowColor?: 'cyan' | 'magenta' | 'pink' | 'green' | 'purple';
    onClick?: () => void;
    hoverable?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className = '',
    animate = true,
    glowColor = 'cyan',
    onClick,
    hoverable = true
}) => {
    const MotionComponent = motion.div;

    return (
        <MotionComponent
            className={`glass-card glass-card--${glowColor} ${onClick ? 'glass-card--clickable' : ''} ${className}`}
            initial={animate ? { opacity: 0, y: 20 } : {}}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={animate ? { duration: 0.6 } : {}}
            variants={hoverable ? cardHoverVariants : {}}
            whileHover={hoverable ? 'hover' : {}}
            onClick={onClick}
        >
            <div className="glass-card__overlay" />
            {children}
            <div className="glass-card__border-glow" />
        </MotionComponent>
    );
};

export default GlassCard;
