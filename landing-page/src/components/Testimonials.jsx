import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import studentCarlos from '../assets/student_carlos.jpg';
import studentAna from '../assets/student_ana.jpg';
import studentMiguel from '../assets/student_miguel.jpg';

const testimonials = [
    {
        id: 1,
        name: "Carlos Mendoza",
        role: "Frontend Dev Jr.",
        company: "Freelance",
        image: studentCarlos,
        content: "El módulo de JavaScript moderno me abrió los ojos. Entendí por fin cómo manipular el DOM y usar Fetch API para conectar con el backend. Justo lo que necesitaba.",
        rating: 5
    },
    {
        id: 2,
        name: "Ana Sofía López",
        role: "Analista de Datos",
        company: "Tech Solutions",
        image: studentAna,
        content: "Increíble la profundidad con SQL Server. Aprendí a hacer Triggers y Stored Procedures que automatizan todo mi trabajo actual. Vale cada peso.",
        rating: 5
    },
    {
        id: 3,
        name: "Miguel Ángel Torres",
        role: "Backend Developer",
        company: "Startup Local",
        image: studentMiguel,
        content: "PHP siempre se me hizo difícil hasta que vi la clase de PDO y POO aquí. Conectarlo con SQL Server fue súper sencillo con la guía de Rodrigo.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonios" className="py-12 md:py-24 relative overflow-hidden bg-slate-900/50">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium mb-6">
                        <Star className="w-3 h-3 fill-yellow-400" />
                        Resultados Reales
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Lo que dicen nuestros <span className="text-gradient">Alumnos</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Únete a cientos de estudiantes que ya están cambiando su carrera profesional.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-2xl border border-white/5 relative group"
                        >
                            <div className="absolute top-6 right-6 text-slate-700 group-hover:text-primary-500/20 transition-colors">
                                <Quote className="w-8 h-8" />
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary-500/30">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-primary-600 rounded-full p-1">
                                        <Star className="w-3 h-3 text-white fill-white" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                                    <p className="text-slate-400 text-xs">{testimonial.role} @ {testimonial.company}</p>
                                </div>
                            </div>

                            <div className="mb-4 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed">
                                "{testimonial.content}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
