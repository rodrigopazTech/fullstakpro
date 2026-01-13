import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Clock } from 'lucide-react';
import { trackContact } from '../lib/fbPixel';

const Hero = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date('2026-01-24T09:00:00-06:00'); // Jan 24, 2026 9:00 AM CST
            const difference = targetDate - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 md:pt-20 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20">
                                <span className="flex h-2 w-2 rounded-full bg-primary-400 animate-pulse"></span>
                                <span className="text-primary-300 text-sm font-medium">Masterclass: 24 de Enero, 2026</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                                <span className="text-red-400 text-sm font-bold">¡Últimos 9 lugares!</span>
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-6">
                            Añade <span className="text-gradient-primary">Full Stack</span> a tu CV y sube tu salario
                        </h1>

                        <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                            Domina <strong>PHP, SQL Server y JavaScript</strong> construyendo proyectos reales. Además, aprende a usar <strong>IA para programar</strong> más rápido.
                        </p>

                        {/* Countdown Timer */}
                        <div className="mb-8 p-4 rounded-xl bg-slate-900/50 border border-white/10 max-w-md">
                            <div className="flex items-center gap-2 mb-3 text-slate-300 text-sm font-medium">
                                <Clock className="w-4 h-4 text-primary-400" />
                                <span>Tu propósito 2026 inicia en:</span>
                            </div>
                            <div className="grid grid-cols-4 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Días</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Hrs</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Min</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Seg</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a href="#inscripcion" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary-500/25 transition-all hover:scale-105 inline-block text-center flex-1 sm:flex-none">
                                Reservar mi Cupo
                            </a>
                            <a
                                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hola,%20quisiera%20más%20información%20del%20curso.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackContact('WhatsApp')}
                                className="px-8 py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] rounded-xl font-medium text-lg transition-all inline-block text-center flex-1 sm:flex-none"
                            >
                                Chat en WhatsApp
                            </a>
                        </div>

                        <div className="mt-4 flex sm:hidden justify-center">
                            <a href="#temario" className="text-slate-400 text-sm underline hover:text-white transition-colors">Ver Temario Completo</a>
                        </div>
                        <div className="hidden sm:block mt-2">
                            <a href="#temario" className="text-slate-500 hover:text-white text-sm transition-colors">o ver temario completo ↓</a>
                        </div>

                        <div className="mt-10 flex items-center gap-6 text-slate-500 text-sm">
                            <div className="flex -space-x-4">
                                {[
                                    { id: 1, initial: 'JS' },
                                    { id: 2, initial: 'MR' },
                                    { id: 3, initial: 'AL' },
                                    { id: 4, initial: 'CP' }
                                ].map((user) => (
                                    <div key={user.id} className="w-10 h-10 rounded-full border-2 border-[#0B0F19] bg-slate-700 flex items-center justify-center text-xs text-white font-medium">
                                        {user.initial}
                                    </div>
                                ))}
                            </div>
                            <p>Únete a otros estudiantes</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 glass-card p-6 rounded-2xl border-white/10 shadow-2xl">
                            <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-2 text-xs text-slate-500">server.php — root</span>
                            </div>
                            <div className="space-y-3 font-mono text-sm leading-relaxed">
                                <div className="flex gap-2">
                                    <span className="text-pink-400">class</span>
                                    <span className="text-yellow-300">CursoFullStack</span>
                                    <span className="text-white">{`{`}</span>
                                </div>
                                <div className="pl-4 flex gap-2">
                                    <span className="text-blue-400">public</span>
                                    <span className="text-green-400">$tecnologias</span>
                                    <span className="text-white">= [</span>
                                </div>
                                <div className="pl-8 text-cyan-300">'SQL Server',</div>
                                <div className="pl-8 text-cyan-300">'PHP',</div>
                                <div className="pl-8 text-cyan-300">'JavaScript',</div>
                                <div className="pl-8 text-cyan-300">'Bootstrap'</div>
                                <div className="pl-4 text-white">];</div>
                                <div className="pl-4 flex gap-2">
                                    <span className="text-blue-400">public</span>
                                    <span className="text-green-400">$objetivo</span>
                                    <span className="text-white">=</span>
                                    <span className="text-orange-300">"Sube tu Salario";</span>
                                </div>
                                <div className="text-white">{`}`}</div>
                            </div>
                        </div>

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -top-10 -right-10 p-4 glass-card rounded-2xl bg-[#0f172a]/90 text-blue-400"
                        >
                            <Database className="w-8 h-8" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                            className="absolute -bottom-10 -left-10 p-4 glass-card rounded-2xl bg-[#0f172a]/90 text-purple-400"
                        >
                            <Server className="w-8 h-8" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
