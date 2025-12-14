import React, { useRef, useEffect } from 'react';
import './AuthAnimation.css';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
}

export const AuthAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        const particles: Particle[] = [];
        const colors = ['#00ffff', '#ff00ff', '#ff006e', '#00ff41'];

        // Create particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        // Animation loop
        const animate = () => {
            // Fade trail effect
            ctx.fillStyle = 'rgba(10, 14, 39, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                // Update position
                p.x += p.speedX;
                p.y += p.speedY;

                // Wrap around edges
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                // Draw particle
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Draw glow
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
                gradient.addColorStop(0, p.color + hexToAlpha(p.opacity * 0.5));
                gradient.addColorStop(1, p.color + '00');
                ctx.fillStyle = gradient;
                ctx.fillRect(p.x - p.size * 4, p.y - p.size * 4, p.size * 8, p.size * 8);
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            resizeCanvas();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Helper function to convert opacity to hex alpha
    const hexToAlpha = (opacity: number): string => {
        const alpha = Math.round(opacity * 255);
        return alpha.toString(16).padStart(2, '0');
    };

    return (
        <div className="auth-animation">
            <canvas ref={canvasRef} className="auth-animation__canvas" />
            <div className="auth-animation__overlay" />
            <div className="auth-animation__grid" />
        </div>
    );
};

export default AuthAnimation;
