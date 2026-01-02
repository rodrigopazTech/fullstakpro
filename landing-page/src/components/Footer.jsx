import React from 'react';
import { Code2, Github, Twitter, Linkedin, Mail, Smartphone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0B0F19] border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-slate-800 rounded-lg">
                            <Code2 className="w-6 h-6 text-slate-400" />
                        </div>
                        <span className="text-xl font-display font-bold text-white">
                            FullStack<span className="text-slate-500">Pro</span>
                        </span>
                    </div>

                    <div className="text-slate-500 text-sm text-center md:text-right">
                        <p>&copy; 2026 Rodrigo Paz. Todos los derechos reservados.</p>
                        <p className="mt-2">Desarrollado con React + Tailwind + Amor por el código.</p>
                    </div>

                    <div className="flex gap-4">
                        <a href="https://wa.me/525622293752" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-green-500 hover:text-white transition-all" title="WhatsApp">
                            <Smartphone className="w-5 h-5" />
                        </a>
                        <a href="mailto:contacto@rodrigopaz.space" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-red-500 hover:text-white transition-all" title="Email">
                            <Mail className="w-5 h-5" />
                        </a>
                        <a href="https://github.com/rodrigopazTech" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-white hover:text-black transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.tiktok.com/@rodrigopaztech" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-black hover:text-white transition-all">
                            <span className="font-bold text-xs">TT</span>
                        </a>
                        <a href="https://www.linkedin.com/in/rodrigo-paz-code/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
