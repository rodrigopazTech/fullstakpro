import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const questions = [
        {
            q: "¿Necesito saber programar?",
            a: "No es obligatorio, pero ayuda. El curso está diseñado para principiantes, aunque avanza a un ritmo constante."
        },
        {
            q: "¿Puedo tomar solo un módulo?",
            a: "Sí, cada módulo tiene precio individual. Sin embargo, recomendamos empezar desde el Módulo 1 para tener bases sólidas."
        },
        {
            q: "¿Qué pasa si no puedo asistir a una clase?",
            a: "Todas las clases quedan grabadas y tienes acceso de por vida a ellas para que puedas repasar cuando quieras."
        },
        {
            q: "¿Dan certificado?",
            a: "Sí, al completar el curso completo (16 clases) recibes un certificado digital de finalización."
        },
        {
            q: "¿Hay meses sin intereses?",
            a: "Sí, dependiendo de tu banco puedes pagar hasta en 12 meses sin intereses a través de Mercado Pago."
        },
        {
            q: "¿En qué horario son las clases?",
            a: "Sábados de 9:00 AM a 10:00 AM hora de Ciudad de México. La clase puede extenderse hasta 1.5 horas si el tema lo requiere."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-6">
                        <HelpCircle className="w-3 h-3" />
                        Dudas Comunes
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Preguntas <span className="text-gradient">Frecuentes</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {questions.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={`border ${activeIndex === index ? 'border-primary-500/50 bg-slate-800/50' : 'border-white/5 bg-slate-900/50'} rounded-xl overflow-hidden transition-all duration-300`}
                        >
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`font-medium text-lg ${activeIndex === index ? 'text-primary-300' : 'text-slate-300'}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-primary-400' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
