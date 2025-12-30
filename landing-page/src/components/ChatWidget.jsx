import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Smartphone } from 'lucide-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState('selection'); // selection, form, chat
    const [formData, setFormData] = useState({ name: '', phone: '' });

    const handleRedirect = () => {
        // Redirection to WhatsApp
        window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hola,%20me%20interesa%20el%20curso%20Full%20Stack.`, '_blank');
        setIsOpen(false);
    };

    const handleStartChat = (e) => {
        e.preventDefault();
        // Simulation of n8n webhook call
        console.log('Sending data to n8n:', formData);
        alert(`Te contactaremos pronto ${formData.name}. (Simulación n8n)`);
        setIsOpen(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-80 md:w-96 glass-card rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                    >
                        <div className="bg-primary-600 p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">Asistente Virtual</h3>
                                    <p className="text-primary-100 text-xs">Conectado</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 bg-[#0B0F19]">
                            {mode === 'selection' && (
                                <div className="space-y-4">
                                    <p className="text-slate-300 text-sm mb-4">¡Hola! ¿Cómo prefieres contactarnos?</p>

                                    <button
                                        onClick={handleRedirect}
                                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20"
                                    >
                                        <Smartphone className="w-5 h-5" />
                                        <div className="text-left">
                                            <div className="font-bold text-sm">WhatsApp App</div>
                                            <div className="text-xs opacity-80">Abrir aplicación directamente</div>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setMode('form')}
                                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-all border border-primary-500/20"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        <div className="text-left">
                                            <div className="font-bold text-sm">Chat en la Web</div>
                                            <div className="text-xs opacity-80">Iniciar conversación aquí</div>
                                        </div>
                                    </button>
                                </div>
                            )}

                            {mode === 'form' && (
                                <form onSubmit={handleStartChat} className="space-y-4">
                                    <p className="text-slate-300 text-xs mb-4">Por favor ingresa tus datos para identificarte.</p>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 mb-1">Nombre Completo</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                            placeholder="Juan Pérez"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-medium text-slate-500 mb-1">Número de WhatsApp</label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                            placeholder="+52 123..."
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>

                                    <div className="flex gap-2 mt-4">
                                        <button
                                            type="button"
                                            onClick={() => setMode('selection')}
                                            className="flex-1 py-2 rounded-lg bg-slate-800 text-slate-400 text-sm hover:bg-slate-700 font-medium"
                                        >
                                            Volver
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 py-2 rounded-lg bg-primary-600 text-white text-sm hover:bg-primary-500 font-bold"
                                        >
                                            Iniciar
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-blue-600 shadow-lg shadow-primary-500/30 flex items-center justify-center text-white"
            >
                {isOpen ? <X /> : <MessageCircle className="w-7 h-7" />}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
