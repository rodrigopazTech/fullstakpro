import React, { useState, useEffect, useRef } from 'react';
import { Check, Shield } from 'lucide-react';
import EnrollmentForm from './EnrollmentForm';
import { trackContact, trackViewContent } from '../lib/fbPixel';
import { trackViewContent as trackGA4ViewContent, trackContact as trackGA4Contact, trackCTAClick } from '../lib/googleAnalytics';

const Pricing = () => {
    const [showEnrollment, setShowEnrollment] = useState(false);
    const [hasTrackedView, setHasTrackedView] = useState(false);
    const sectionRef = useRef(null);

    // Track ViewContent when user scrolls to pricing section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasTrackedView) {
                        trackViewContent('Curso Full Stack - Precios', 999);
                        trackGA4ViewContent('Curso Full Stack - Precios', 999);
                        setHasTrackedView(true);
                    }
                });
            },
            { threshold: 0.3 } // 30% of section visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasTrackedView]);

    return (
        <section id="inscripcion" ref={sectionRef} className="py-12 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-900/10 blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-900/10 blur-[120px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Inversión para tu <span className="text-gradient">Futuro</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Precio especial de lanzamiento para la primera generación 2026.
                    </p>
                </div>

                {/* Enrollment Steps - Clarification requested by user */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="grid md:grid-cols-3 gap-8 text-center relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/50 to-primary-500/0 -z-10"></div>

                        <div className="relative group">
                            <div className="w-16 h-16 mx-auto bg-slate-800 rounded-2xl border border-primary-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/10">
                                <span className="text-2xl font-bold text-primary-400">1</span>
                            </div>
                            <h3 className="text-white font-bold mb-2">Reserva tu Cupo</h3>
                            <p className="text-slate-400 text-sm">Haz clic en inscribirme y completa tus datos en el formulario seguro.</p>
                        </div>

                        <div className="relative group">
                            <div className="w-16 h-16 mx-auto bg-slate-800 rounded-2xl border border-primary-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/10">
                                <span className="text-2xl font-bold text-primary-400">2</span>
                            </div>
                            <h3 className="text-white font-bold mb-2">Realiza el Pago</h3>
                            <p className="text-slate-400 text-sm">Paga con Tarjeta (SI/NO MSI), Efectivo en OXXO o Transferencia vía Mercado Pago.</p>
                        </div>

                        <div className="relative group">
                            <div className="w-16 h-16 mx-auto bg-slate-800 rounded-2xl border border-primary-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/10">
                                <span className="text-2xl font-bold text-primary-400">3</span>
                            </div>
                            <h3 className="text-white font-bold mb-2">Acceso Inmediato</h3>
                            <p className="text-slate-400 text-sm">Recibes confirmación automática y acceso al grupo de WhatsApp de alumnos.</p>
                        </div>
                    </div>

                    {/* Manual Contact Option */}
                    <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            ¿Prefieres pagar por transferencia directa o tienes dudas? <br className="hidden md:block" />
                            <button
                                onClick={() => {
                                    trackContact('WhatsApp');
                                    trackGA4Contact('WhatsApp', 'pricing_section');
                                    window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hola,%20quiero%20inscribirme%20pero%20tengo%20dudas%20sobre...`, '_blank');
                                }}
                                className="text-primary-400 hover:text-primary-300 underline font-medium"
                            >
                                Contáctame por WhatsApp aquí
                            </button>
                        </p>
                    </div>
                </div>

                {/* Single Pricing Card Strategy */}
                <div className="max-w-md mx-auto relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                    <div className="relative glass-card p-8 rounded-2xl border border-primary-500/30">
                        {/* Discount Badge */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
                                🔥 70% OFF - Solo 9 Cupos
                            </div>
                        </div>

                        <div className="text-center mb-8 mt-4">
                            <p className="text-slate-400 line-through text-lg mb-1">Precio Normal: $3,500 MXN</p>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-5xl font-bold text-white tracking-tight">$999</span>
                                <span className="text-xl text-slate-400 font-medium">MXN</span>
                            </div>
                            <p className="text-primary-400 text-sm font-medium mt-2">Pago Único • Acceso de por vida</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Curso Completo (16 Clases en Vivo)",
                                "Grabaciones de por vida",
                                "Soporte Vía WhatsApp (Personalizado)",
                                "Revisión de CV y Portafolio",
                                "Proyecto Real para tu Portafolio",
                                "Surprise Bonus: Docker/Enterprise Env"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    <span className="text-slate-300 text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => {
                                trackCTAClick('Inscribirme Ahora', 'pricing_card');
                                setShowEnrollment(true);
                            }}
                            className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary-500/25 transition-all transform hover:scale-[1.02]"
                        >
                            ¡Inscribirme Ahora!
                        </button>

                        <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 text-xs">
                            <Shield className="w-4 h-4" />
                            <span>Garantía de Satisfacción 7 días</span>
                        </div>
                    </div>
                </div>
            </div>

            <EnrollmentForm 
                isOpen={showEnrollment} 
                onClose={() => setShowEnrollment(false)} 
                plan="Curso Completo Full Stack con SQL Server (16 clases)" 
                price={999} 
            />
        </section>
    );
};

export default Pricing;
