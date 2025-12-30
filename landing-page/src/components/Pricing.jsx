import React, { useState } from 'react';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { Check, ShieldCheck, Lock, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import EnrollmentForm from './EnrollmentForm';

// Initialize with your Public Key
initMercadoPago('APP_USR-6322cdfa-2f10-4238-b206-b04599c35109', { locale: 'es-MX' });

const Pricing = () => {
    // These IDs should come from your Mercado Pago Dashboard
    const preferenceIds = {
        module1: '3102488590-c69c1329-227c-40ae-88e4-f95042c980a0',
        fullCourse: '3102488590-3d63d0b5-2bed-448d-be3c-750eb6da3540'
    };

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState({ name: '', price: 0, preferenceId: '' });

    const handleOpenForm = (name, price, preferenceId) => {
        setSelectedPlan({ name, price, preferenceId });
        setIsFormOpen(true);
    };

    const handleWhatsAppLink = (plan) => {
        const message = encodeURIComponent(`Hola, estoy interesado en el plan "${plan}" y me gustaría recibir el link de pago.`);
        window.open(`https://wa.me/521234567890?text=${message}`, '_blank');
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
                                onClick={() => handleOpenForm("Módulo 1", 399, preferenceIds.module1)}
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
                                onClick={() => handleOpenForm("Curso Completo", 1800, preferenceIds.fullCourse)}
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
                    preferenceId={selectedPlan.preferenceId}
                />

                <div className="mt-12 flex justify-center gap-8 text-slate-500 grayscale opacity-60">
                    <div className="flex items-center gap-2">
                        <Lock className="w-5 h-5" />
                        <span className="text-sm font-medium">Pagos Seguros vía Mercado Pago</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5" />
                        <span className="text-sm font-medium">Garantía de Satisfacción</span>
                    </div>
                </div>

                <p className="text-center text-xs text-slate-600 mt-8">
                    Al realizar el pago recibirás automáticamente el acceso a la primera clase y al material.
                </p>
            </div>
        </section >
    );
};

export default Pricing;
