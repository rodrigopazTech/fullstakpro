import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Smartphone, Bot, User, Loader2 } from 'lucide-react';
import { trackContact } from '../lib/fbPixel';

// URL del webhook de n8n para el chatbot web
const N8N_CHATBOT_WEBHOOK = import.meta.env.VITE_N8N_CHATBOT_WEBHOOK || 'https://n8n.rodrigopaz.space/webhook/chatbot-web';

const WhatsAppIcon = ({ className }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M17.472 14.382C17.153 14.078 15.905 13.565 15.809 13.559C15.932 13.784 16.035 14.088 15.655 14.542C15.228 15.051 14.73 15.021 14.332 14.869C12.396 14.131 9.94698 12.164 9.07198 10.879C8.94898 10.697 8.32998 9.771 8.86898 9.133C9.07698 8.887 9.27898 8.641 9.53998 8.441C9.69298 8.324 9.87198 8.163 9.45698 7.152C9.03298 6.12 8.71898 5.393 8.36998 5.385C7.99598 5.378 7.64098 5.405 7.14398 5.669C6.54198 5.989 5.86998 6.88 5.88598 8.368C5.90698 10.033 7.02598 11.967 8.14098 13.238C11.523 17.087 15.286 17.801 16.485 17.266C17.202 16.946 17.458 15.69 17.701 15.118C17.896 14.659 17.808 14.704 17.472 14.382ZM12.006 2C6.48798 2 2 6.488 2 12.006C2 13.766 2.47398 15.424 3.32498 16.865L2.35698 21.056L6.72198 19.996C8.26198 21.258 10.061 22.012 12.006 22.012C17.525 22.012 22.012 17.524 22.012 12.006C22.012 6.488 17.525 2 12.006 2Z" />
    </svg>
);

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState('selection'); // selection, chat (removed form)
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId] = useState(() => `web_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleRedirect = () => {
        // Track Contact event for WhatsApp redirect
        trackContact('WhatsApp-ChatWidget');
        // Redirection to WhatsApp
        window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hola,%20me%20interesa%20el%20curso%20Full%20Stack.`, '_blank');
        setIsOpen(false);
    };

    // Scroll to pricing section
    const scrollToPricing = () => {
        setIsOpen(false);
        const pricingSection = document.getElementById('inscripcion');
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleStartChat = () => {
        // Track Contact event when user starts chatbot interaction
        trackContact('Chatbot-Web');
        // Initialize chat with welcome message - NO form required
        setMessages([
            {
                id: 1,
                type: 'bot',
                text: `¡Hola! 👋 Soy FullStackBot, tu asistente virtual.\n\nPuedo ayudarte con información sobre:\n• Contenido y tecnologías del curso\n• Precios y planes de pago\n• Horarios y calendario\n• Requisitos previos\n\n💡 Cuando estés listo para inscribirte, haz clic en "Reservar mi Cupo" o en las tarjetas de precios.\n\n¿Qué te gustaría saber?`,
                timestamp: new Date()
            }
        ]);
        setMode('chat');
    };

    const sendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        const userMessage = {
            id: messages.length + 1,
            type: 'user',
            text: inputMessage,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentMessage = inputMessage;
        setInputMessage('');
        setIsLoading(true);

        try {
            const response = await fetch(N8N_CHATBOT_WEBHOOK, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    source: 'web',
                    sessionId: sessionId,
                    user: {
                        name: 'Visitante',
                        phone: ''
                    },
                    message: currentMessage,
                    timestamp: Date.now()
                })
            });

            if (response.ok) {
                const data = await response.json();
                const botMessage = {
                    id: messages.length + 2,
                    type: 'bot',
                    text: data.response || data.output || 'Lo siento, hubo un error. Por favor intenta de nuevo.',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, botMessage]);
            } else {
                throw new Error('Error en la respuesta');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            // Fallback response when n8n is not available
            const fallbackMessage = {
                id: messages.length + 2,
                type: 'bot',
                text: '⚠️ El chatbot está en mantenimiento. Por favor contáctanos por WhatsApp para una respuesta inmediata.',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, fallbackMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
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
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <Bot className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white">FullStackBot</h3>
                                    <p className="text-primary-100 text-xs flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        {mode === 'chat' ? 'En línea' : 'Disponible'}
                                    </p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="bg-[#0B0F19]">
                            {/* Mode: Selection */}
                            {mode === 'selection' && (
                                <div className="p-6 space-y-4">
                                    <p className="text-slate-300 text-sm mb-4">¡Hola! 👋 ¿Cómo prefieres contactarnos?</p>

                                    <button
                                        onClick={handleStartChat}
                                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-all border border-primary-500/20"
                                    >
                                        <Bot className="w-5 h-5" />
                                        <div className="text-left">
                                            <div className="font-bold text-sm">Chat con IA</div>
                                            <div className="text-xs opacity-80">Respuesta instantánea 24/7</div>
                                        </div>
                                    </button>

                                    <button
                                        onClick={handleRedirect}
                                        className="w-full flex items-center gap-3 p-4 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20"
                                    >
                                        <Smartphone className="w-5 h-5" />
                                        <div className="text-left">
                                            <div className="font-bold text-sm">WhatsApp</div>
                                            <div className="text-xs opacity-80">Hablar con Rodrigo</div>
                                        </div>
                                    </button>

                                    <button
                                        onClick={scrollToPricing}
                                        className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 hover:from-yellow-500/30 hover:to-orange-500/30 transition-all border border-yellow-500/20"
                                    >
                                        <span className="text-sm font-medium">🎓 Ver Precios y Reservar</span>
                                    </button>
                                </div>
                            )}

                            {/* Mode: Chat - Direct without form */}
                            {mode === 'chat' && (
                                <div className="flex flex-col h-[400px]">
                                    {/* Messages Area */}
                                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                        {messages.map((msg) => (
                                            <div
                                                key={msg.id}
                                                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div className={`flex items-end gap-2 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'user' ? 'bg-primary-600' : 'bg-slate-700'
                                                        }`}>
                                                        {msg.type === 'user' ? (
                                                            <User className="w-3 h-3 text-white" />
                                                        ) : (
                                                            <Bot className="w-3 h-3 text-primary-400" />
                                                        )}
                                                    </div>
                                                    <div className={`rounded-2xl px-4 py-2.5 ${msg.type === 'user'
                                                            ? 'bg-primary-600 text-white rounded-br-sm'
                                                            : 'bg-slate-800 text-slate-200 rounded-bl-sm'
                                                        }`}>
                                                        <p className="text-sm whitespace-pre-line">{msg.text}</p>
                                                        <p className={`text-[10px] mt-1 ${msg.type === 'user' ? 'text-primary-200' : 'text-slate-500'
                                                            }`}>
                                                            {formatTime(msg.timestamp)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Loading indicator */}
                                        {isLoading && (
                                            <div className="flex justify-start">
                                                <div className="flex items-end gap-2">
                                                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
                                                        <Bot className="w-3 h-3 text-primary-400" />
                                                    </div>
                                                    <div className="bg-slate-800 rounded-2xl rounded-bl-sm px-4 py-3">
                                                        <div className="flex items-center gap-1">
                                                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                                            <span className="w-2 h-2 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div ref={messagesEndRef} />
                                    </div>

                                    {/* Input Area */}
                                    <div className="p-4 border-t border-slate-800">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={inputMessage}
                                                onChange={(e) => setInputMessage(e.target.value)}
                                                onKeyPress={handleKeyPress}
                                                placeholder="Escribe tu pregunta..."
                                                disabled={isLoading}
                                                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors disabled:opacity-50"
                                            />
                                            <button
                                                onClick={sendMessage}
                                                disabled={isLoading || !inputMessage.trim()}
                                                className="w-10 h-10 rounded-xl bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors"
                                            >
                                                {isLoading ? (
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                ) : (
                                                    <Send className="w-5 h-5" />
                                                )}
                                            </button>
                                        </div>
                                        {/* Quick action button */}
                                        <button
                                            onClick={scrollToPricing}
                                            className="w-full mt-3 py-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-400 text-xs hover:from-yellow-500/20 hover:to-orange-500/20 transition-colors border border-yellow-500/20"
                                        >
                                            🎓 ¿Listo para inscribirte? Ver precios
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-lg shadow-[#25D366]/30 flex items-center justify-center text-white relative"
            >
                {isOpen ? <X className="w-6 h-6" /> : <WhatsAppIcon className="w-7 h-7" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0B0F19] animate-pulse"></span>
                )}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
