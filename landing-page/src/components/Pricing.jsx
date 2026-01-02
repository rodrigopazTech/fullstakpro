import React, { useState } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { Check, ShieldCheck, Lock, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import EnrollmentForm from './EnrollmentForm';
import { trackContact } from '../lib/fbPixel';

// Initialize with your Public Key
initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY || 'APP_USR-6322cdfa-2f10-4238-b206-b04599c35109', { locale: 'es-MX' });

const Pricing = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState({ name: '', price: 0 });

    const handleOpenForm = (name, price) => {
        setSelectedPlan({ name, price });
        setIsFormOpen(true);
    };

    const handleWhatsAppLink = (plan) => {
        trackContact('WhatsApp'); // Track Contact event
        const message = encodeURIComponent(`Hola, estoy interesado en el plan "${plan}" y me gustaría recibir el link de pago.`);
        window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <section id="inscripcion" className="py-24 relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Invierte en tu <span className="text-gradient">Futuro</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Selecciona el plan que mejor se adapte a ti. Comienza con el primer módulo o adquiere el programa completo con descuento.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Module 1 Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col"
                    >
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-300">Módulo 1: Fundamentos</h3>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold text-white">$399</span>
                                <span className="ml-2 text-slate-500">MXN</span>
                            </div>
                            <p className="text-sm text-green-400 mt-2 font-medium">Oferta Especial de Introducción</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {['Acceso a 4 Clases en vivo', 'Grabaciones de por vida', 'Soporte vía WhatsApp', 'Materiales y recursos', 'Bonus Docker (si completas)'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-4">
                            <button
                                onClick={() => handleOpenForm("Módulo 1", 399)}
                                className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-primary-500/25 transition-all hover:scale-105"
                            >
                                Inscribirme Ahora
                            </button>

                            <button
                                onClick={() => handleWhatsAppLink("Módulo 1")}
                                className="w-full py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                            >
                                <Smartphone className="w-4 h-4" />
                                Pedir link por WhatsApp
                            </button>
                        </div>
                    </motion.div>

                    {/* Full Course Card */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-2xl border border-primary-500/30 bg-gradient-to-b from-[#151B2B] to-[#0B0F19] relative overflow-hidden flex flex-col shadow-2xl shadow-primary-900/20"
                    >
                        <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            RECOMENDADO
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white">Curso Completo</h3>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold text-white">$1,800</span>
                                <span className="ml-2 text-slate-500">MXN</span>
                            </div>
                            <p className="text-sm text-primary-400 mt-2 font-medium">Ahorras pagando todo junto</p>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {['Acceso a las 16 Clases', 'Proyecto Integrador Revisado', 'Certificado de Finalización', 'Todas las grabaciones', 'Asesoría 1 a 1 (2 sesiones)', 'Bonus Docker Incluido'].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3 text-white text-sm">
                                    <Check className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-4">
                            <button
                                onClick={() => handleOpenForm("Curso Completo", 1800)}
                                className="w-full py-4 bg-white hover:bg-slate-200 text-slate-900 rounded-xl font-bold text-lg shadow-lg transition-all hover:scale-105"
                            >
                                Inscribirme Ahora
                            </button>

                            <button
                                onClick={() => handleWhatsAppLink("Curso Completo")}
                                className="w-full py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
                            >
                                <Smartphone className="w-4 h-4" />
                                Pedir link por WhatsApp
                            </button>
                        </div>
                    </motion.div>
                </div>

                <EnrollmentForm
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                    plan={selectedPlan.name}
                    price={selectedPlan.price}
                />

                <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 text-slate-500 opacity-80">
                    <div className="flex items-center justify-center gap-2">
                        <Lock className="w-5 h-5" />
                        <span className="text-sm font-medium">Pagos Seguros vía Mercado Pago</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <ShieldCheck className="w-5 h-5" />
                        <span className="text-sm font-medium">Garantía de Satisfacción (100% Devolución)</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Smartphone className="w-5 h-5" />
                        <span className="text-sm font-medium">Tarjeta, OXXO, 12 MSI</span>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <span className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-bold animate-pulse">
                        Fecha límite de inscripción: Viernes 23 de Enero
                    </span>
                </div>

                {/* TEMPORARY TEST BUTTON - HIDDEN FOR PRODUCTION
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => handleOpenForm("Producto de Prueba", 20)}
                        className="px-6 py-2 bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 rounded-lg text-sm font-bold hover:bg-yellow-500/30 transition-colors"
                    >
                        [TEST] Pagar $20 MXN (Preferencia Dinámica)
                    </button>
                </div>
                */}

                <p className="text-center text-xs text-slate-600 mt-8">
                    Al realizar el pago recibirás automáticamente el acceso a la primera clase y al material.
                </p>
            </div>
        </section >
    );
};

export default Pricing;
