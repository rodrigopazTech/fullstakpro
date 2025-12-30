import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B0F19]/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-primary-500/10 rounded-lg">
                            <Code2 className="w-6 h-6 text-primary-400" />
                        </div>
                        <span className="text-xl font-display font-bold text-white">
                            FullStack<span className="text-primary-400">Pro</span>
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#hero" className="hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                            <a href="#temario" className="hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Temario</a>
                            <a href="#calendario" className="hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Calendario</a>
                            <a href="#bonus" className="hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Bonus Docker</a>
                            <a href="#inscripcion" className="bg-white text-slate-900 px-5 py-2 rounded-full font-medium hover:bg-slate-200 transition-colors">
                                Inscribirme
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden glass-card mx-4 mt-2 rounded-xl p-4 space-y-2 border border-white/10"
                >
                    <a href="#hero" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">Inicio</a>
                    <a href="#temario" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">Temario</a>
                    <a href="#calendario" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">Calendario</a>
                    <a href="#bonus" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/5">Bonus Docker</a>
                    <a href="#inscripcion" className="block w-full mt-4 bg-primary-500 text-white px-5 py-3 rounded-lg font-bold text-center">
                        Inscribirme
                    </a>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
