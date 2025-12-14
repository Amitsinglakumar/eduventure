// ============================================
// ANIMATION UTILITIES
// ============================================

/**
 * Framer Motion animation variants for common patterns
 */

// Container with staggered children
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

// Individual items
export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20
        }
    },
    exit: {
        opacity: 0,
        y: -20
    }
};

// Slide in from left
export const slideInVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    },
    exit: {
        opacity: 0,
        x: 60,
        transition: { duration: 0.4 }
    }
};

// Slide in from right
export const slideInRightVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    },
    exit: {
        opacity: 0,
        x: -60,
        transition: { duration: 0.4 }
    }
};

// Glow effect on hover
export const glowVariants = {
    initial: {
        boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)'
    },
    hover: {
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.5)',
        transition: { duration: 0.3 }
    },
    tap: {
        scale: 0.95
    }
};

// Title animations
export const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' }
    }
};

// Fade in
export const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.4 }
    }
};

// Scale in
export const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            type: 'spring',
            stiffness: 120,
            damping: 15
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8
    }
};

// Neon pulse
export const neonPulseVariants = {
    initial: {
        filter: 'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
    },
    animate: {
        filter: [
            'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))',
            'drop-shadow(0 0 30px rgba(0, 255, 255, 0.8))',
            'drop-shadow(0 0 10px rgba(0, 255, 255, 0.5))'
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};

// Card hover
export const cardHoverVariants = {
    initial: {
        y: 0,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)'
    },
    hover: {
        y: -8,
        boxShadow: '0 12px 32px rgba(0, 255, 255, 0.3)',
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20
        }
    }
};

// Page transition
export const pageTransitionVariants = {
    initial: {
        opacity: 0,
        x: -20
    },
    enter: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: {
            duration: 0.3
        }
    }
};

// Modal
export const modalVariants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: -100
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: 'spring',
            duration: 0.5,
            bounce: 0.3
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        y: 100,
        transition: {
            duration: 0.3
        }
    }
};

// Backdrop
export const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
};

// Stagger list
export const staggerListVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

// List item
export const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    }
};

/**
 * Helper function to create custom spring animation
 */
export const springAnimation = (stiffness: number = 100, damping: number = 20) => ({
    type: 'spring' as const,
    stiffness,
    damping
});

/**
 * Helper function for custom duration animation
 */
export const durationAnimation = (duration: number = 0.3, ease: string = 'easeOut') => ({
    duration,
    ease
});
