import colors from './src/theme/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./index.html"
    ],
    theme: {
        extend: {
            colors: {
                primary: colors.primary,
                text: colors.text,
                glass: colors.glass,
                state: colors.state,
            },
            backgroundImage: {
                'primary-gradient': `linear-gradient(135deg, ${colors.primary.gradientStart} 0%, ${colors.primary.gradientEnd} 100%)`,
                'mesh-gradient': `radial-gradient(circle at 50% 50%, rgba(118, 75, 162, 0.4), transparent 60%), radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.4), transparent 40%)`,
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'glass-popup': '0 20px 50px rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [],
}
