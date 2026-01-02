import React from 'react';
import { Container, PlayCircle } from 'lucide-react';

const Bonus = () => {
    return (
        <section id="bonus" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-900/10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass-card rounded-3xl p-8 md:p-12 border border-blue-500/20 overflow-hidden relative">

                    {/* Decorative background logo */}
                    <div className="absolute -right-20 -bottom-20 opacity-5">
                        <Container className="w-96 h-96" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                                <span className="text-blue-400 text-sm font-bold tracking-wider uppercase">Bonus Exclusivo</span>
                            </div>

                            <h2 className="text-4xl font-bold mb-6">
                                Domina <span className="text-blue-400">Docker</span> para tus despliegues
                            </h2>

                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Aunque el curso no requiere Docker, entenderlo te diferenciará como profesional. Te regalo una <strong>Masterclass en Video</strong> donde te explico qué es, cómo funciona y cómo usarlo para contenerizar tus aplicaciones Full Stack.
                            </p>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3 text-slate-400">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                                    Disponible al finalizar el Módulo 1
                                </li>
                                <li className="flex items-center gap-3 text-slate-400">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                                    Aprende a crear contenedores eficientes
                                </li>
                                <li className="flex items-center gap-3 text-slate-400">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">✓</div>
                                    Prepara tu entorno para producción
                                </li>
                            </ul>

                            <a href="#inscripcion" className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all">
                                <PlayCircle className="w-5 h-5" />
                                Quiero este Bonus
                            </a>
                        </div>

                        <div className="relative">
                            <div className="aspect-video bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/5 transition-colors"></div>
                                <Container className="w-20 h-20 text-blue-500/50 mb-4" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                        <PlayCircle className="w-8 h-8 text-white fill-current" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-sm text-slate-500 mt-4">Vista previa del contenido</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bonus;
