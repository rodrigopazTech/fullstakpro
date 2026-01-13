import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackCTAClick } from '../lib/googleAnalytics';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the Hero section (approx 600px)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 w-full z-40 bg-[#0B0F19]/95 backdrop-blur-lg border-t border-white/10 p-4 pb-8" // pb-8 to account for safe area on some iphones
                >
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-400 line-through">Normal: $3,500</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-xl font-bold text-white">$999</span>
                                <span className="text-xs text-primary-400 font-bold">MXN</span>
                            </div>
                        </div>
                        <a
                            href="#inscripcion"
                            onClick={() => trackCTAClick('Reservar Cupo', 'sticky_cta')}
                            className="flex-1 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-6 rounded-xl text-center shadow-lg shadow-primary-500/20"
                        >
                            Reservar Cupo
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
