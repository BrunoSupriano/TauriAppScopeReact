import React from 'react';
import colors from '../theme/colors';

const Button = ({ children, onClick, className = '', variant = 'primary' }) => {
    const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg";

    const variants = {
        primary: `bg-gradient-to-r from-[${colors.primary.gradientStart}] to-[${colors.primary.gradientEnd}] text-${colors.text.main} hover:shadow-xl hover:shadow-[rgba(118,75,162,0.4)]`,
        secondary: `bg-white text-gray-800 hover:bg-gray-100`,
        glass: `bg-[${colors.glass.bg}] backdrop-blur-md border border-[${colors.glass.border}] text-white hover:bg-[${colors.state.hover}]`
    };

    // Tailwind interpolation with dynamic values can be tricky if not in config or safelist. 
    // Since we added them to config, we can use utility classes if they map directly, 
    // OR we can use inline styles/arbitrary values for precise colors. 
    // To be safe with the 'colors' object imports, we might use arbitrary values in className or style prop.
    // Using standard Tailwind classes where possible is better.

    // Let's use the extended config classes:
    const configVariants = {
        primary: `bg-primary-gradient text-text-main shadow-lg hover:shadow-xl`,
        secondary: `bg-white text-gray-800 hover:bg-gray-100`,
        action: `bg-white text-[#302b63]`,
        glass: `bg-glass-bg border border-glass-border text-text-main hover:bg-state-hover`
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${configVariants[variant] || configVariants.primary} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
