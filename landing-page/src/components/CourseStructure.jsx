import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Database, Server, Code, Layout } from 'lucide-react';

const modules = [
    {
        id: 1,
        title: "Módulo 1: Fundamentos del Backend",
        icon: <Server className="w-6 h-6" />,
        desc: "Domina la arquitectura web y tu primera conexión PHP.",
        classes: ["Arquitectura Cliente-Servidor", "Introducción a PHP", "Variables y Estructuras", "Conexión a Datos (PDO)"]
    },
    {
        id: 2,
        title: "Módulo 2: Maestría SQL Server",
        icon: <Database className="w-6 h-6" />,
        desc: "Diseña bases de datos relacionales robustas.",
        classes: ["Fundamentos SQL", "Consultas Avanzadas", "Joins y Relaciones", "Procedimientos Almacenados"]
    },
    {
        id: 3,
        title: "Módulo 3: JavaScript Moderno",
        icon: <Code className="w-6 h-6" />,
        desc: "Interactividad dinámica y manipulación del DOM.",
        classes: ["Sintaxis y Variables", "DOM & Eventos", "Async / Await", "Fetch API & JSON"]
    },
    {
        id: 4,
        title: "Módulo 4: UI & Proyecto Final",
        icon: <Layout className="w-6 h-6" />,
        desc: "Estilos profesionales y despliegue.",
        classes: ["CSS3 Moderno", "Bootstrap Framework", "Proyecto Integrador", "Despliegue y Hosting"]
    }
];

const CourseStructure = () => {
    const [activeModule, setActiveModule] = useState(1);

    return (
        <section id="temario" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Estructura del <span className="text-gradient">Programa</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        16 Clases intensivas diseñadas para llevarte desde cero a experto.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        {modules.map((module) => (
                            <motion.div
                                key={module.id}
                                onClick={() => setActiveModule(module.id)}
                                className={`p-6 rounded-xl cursor-pointer transition-all border ${activeModule === module.id ? 'bg-primary-500/10 border-primary-500' : 'glass-card border-white/5 hover:bg-white/5'}`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-lg ${activeModule === module.id ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-400'}`}>
                                            {module.icon}
                                        </div>
                                        <div>
                                            <h3 className={`font-bold text-lg ${activeModule === module.id ? 'text-white' : 'text-slate-300'}`}>{module.title}</h3>
                                            <p className="text-sm text-slate-500">{module.desc}</p>
                                        </div>
                                    </div>
                                    <ChevronDown className={`transform transition-transform ${activeModule === module.id ? 'rotate-180 text-primary-500' : 'text-slate-600'}`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-purple-500/10 blur-3xl opacity-30" />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeModule}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative glass-card p-8 rounded-2xl h-full border border-white/10"
                            >
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-sm">{activeModule}</span>
                                    Detalle del Módulo
                                </h3>
                                <ul className="space-y-4">
                                    {modules[modules.findIndex(m => m.id === activeModule)].classes.map((clase, idx) => (
                                        <li key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 group p-2 hover:bg-white/5 rounded-lg transition-colors">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary-500/20 group-hover:text-primary-400 transition-colors">
                                                <span className="text-xs font-bold">Clase {(activeModule - 1) * 4 + idx + 1}</span>
                                            </div>
                                            <span className="text-base sm:text-lg text-slate-300 group-hover:text-white transition-colors">{clase}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-6 border-t border-white/5">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 text-green-400 text-sm">
                                        ✨ Incluye ejercicios prácticos y revisión de código
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseStructure;
