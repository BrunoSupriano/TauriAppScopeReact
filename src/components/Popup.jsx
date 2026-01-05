import React, { useEffect, useState } from 'react';


const Popup = ({ isOpen, onClose, title, children }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), 300); // Wait for animation
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!visible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={onClose}
        >
            <div
                className={`bg-glass-popup border border-glass-popupBorder backdrop-blur-xl rounded-2xl p-8 w-full max-w-md text-center shadow-glass-popup transform transition-all duration-300 ${isOpen ? 'scale-100 translate-y-0' : 'scale-90 translate-y-4'}`}
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-white">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-white/70 hover:text-white text-2xl leading-none transition-colors"
                    >
                        &times;
                    </button>
                </div>
                <div className="text-text-muted mb-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popup;
