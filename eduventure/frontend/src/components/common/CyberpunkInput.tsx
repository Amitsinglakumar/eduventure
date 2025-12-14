import React, { useState } from 'react';
import { motion } from '

-motion';
import './CyberpunkInput.css';

interface CyberpunkInputProps {
    label?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number';
    value: string;
    onChange: (value: string) => void;
    error?: string;
    icon?: React.ReactNode;
    required?: boolean;
    disabled?: boolean;
    name?: string;
    autoComplete?: string;
    className?: string;
}

export const CyberpunkInput: React.FC<CyberpunkInputProps> = ({
    label,
    placeholder,
    type = 'text',
    value,
    onChange,
    error,
    icon,
    required = false,
    disabled = false,
    name,
    autoComplete,
    className = ''
}) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.div
            className={`cyberpunk-input-group ${className}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {label && (
                <label className="cyberpunk-input__label">
                    {label}
                    {required && <span className="required">*</span>}
                </label>
            )}

            <div
                className={`cyberpunk-input-wrapper ${isFocused ? 'focused' : ''} ${error ? 'error' : ''
                    } ${disabled ? 'disabled' : ''}`}
            >
                {icon && <span className="cyberpunk-input__icon">{icon}</span>}

                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="cyberpunk-input__field"
                    disabled={disabled}
                    autoComplete={autoComplete}
                    required={required}
                />

                {isFocused && (
                    <motion.div
                        className="cyberpunk-input__cursor"
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity }}
                    />
                )}
            </div>

            {error && (
                <motion.p
                    className="cyberpunk-input__error"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <span className="error-icon">⚠</span> {error}
                </motion.p>
            )}
        </motion.div>
    );
};

export default CyberpunkInput;
