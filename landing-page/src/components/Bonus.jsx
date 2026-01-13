import React from 'react';
import { Container, PlayCircle, Server } from 'lucide-react';

const Bonus = () => {
    return (
        <section id="bonus" className="py-12 md:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-900/10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass-card rounded-3xl p-8 md:p-12 border border-blue-500/20 overflow-hidden relative">

                    {/* Decorative background logo */}
                    <div className="absolute -right-20 -bottom-20 opacity-5">
                        <Container className="w-96 h-96" />
                    </div>

                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <span className="text-blue-400 text-sm font-bold tracking-wider uppercase">Bonus Sorpresa</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            <span className="text-blue-400">Entornos Reales</span> de Producción
                        </h2>

                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Al finalizar el Módulo 1, desbloquearás una Masterclass exclusiva donde aprenderás cómo las grandes empresas despliegan sus aplicaciones. Una habilidad que te diferenciará del 90% de los juniors.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6 mb-10 text-left">
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                                    <Container className="w-5 h-5" />
                                </div>
                                <h4 className="text-white font-bold mb-1">Docker</h4>
                                <p className="text-xs text-slate-400">Contenerización básica</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                                    <Server className="w-5 h-5" />
                                </div>
                                <h4 className="text-white font-bold mb-1">VPS</h4>
                                <p className="text-xs text-slate-400">Configuración de servidor</p>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-3">
                                    <span className="font-mono font-bold">SSL</span>
                                </div>
                                <h4 className="text-white font-bold mb-1">Seguridad</h4>
                                <p className="text-xs text-slate-400">Certificados HTTPS reales</p>
                            </div>
                        </div>

                        <a href="#inscripcion" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/25">
                            <PlayCircle className="w-5 h-5" />
                            Quiero desbloquear este Bonus
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bonus;
