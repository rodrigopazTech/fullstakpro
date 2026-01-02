import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Server, Layout } from 'lucide-react';
import instructorImage from '../assets/instructor.png';

const Instructor = () => {
    return (
        <section id="instructor" className="py-24 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-1">
                            {/* Placeholder for instructor image - for now using a gradient/abstract representation based on user instructions to avoid placeholders but without an actual image provided */}
                            {/* Instructor Image */}
                            <div className="aspect-[4/5] bg-slate-800 relative overflow-hidden group">
                                <img
                                    src={instructorImage}
                                    alt="Rodrigo Paz"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90" />

                                <div className="relative h-full flex flex-col justify-end p-8 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">Rodrigo Paz</h3>
                                    <p className="text-primary-400 font-mono text-sm mb-6">@rodrigopaztech</p>
                                    <p className="text-slate-300 text-sm italic">
                                        "Pasión por enseñar programación de manera práctica, conectando los puntos que la teoría olvida."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary-500/20 rounded-2xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Conoce a tu <span className="text-gradient">Instructor</span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            <strong className="text-white">Rodrigo Paz</strong> es un Desarrollador Web Full-Stack con experiencia en la creación de aplicaciones escalables. Su enfoque pedagógico se centra en la práctica real y en eliminar la brecha entre el aprendizaje académico y las necesidades de la industria.
                        </p>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2 inline-block">
                                Especialidades
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: <Globe className="w-5 h-5" />, text: "PHP Backend Development" },
                                    { icon: <Database className="w-5 h-5" />, text: "SQL Server Administration" },
                                    { icon: <Code className="w-5 h-5" />, text: "JavaScript Frontend" },
                                    { icon: <Smartphone className="w-5 h-5" />, text: "Responsive Web Design" },
                                    { icon: <Layout className="w-5 h-5" />, text: "Bootstrap Framework" }, // Layout needs import
                                    { icon: <Server className="w-5 h-5" />, text: "Docker & DevOps" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                        <div className="text-primary-400">
                                            {item.icon}
                                        </div>
                                        <span className="text-slate-300 text-sm font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Layout was missing in imports above, adding a local specific icon or fixing import


export default Instructor;
