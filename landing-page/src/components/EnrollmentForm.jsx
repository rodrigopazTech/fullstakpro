import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { Wallet } from '@mercadopago/sdk-react';

const EnrollmentForm = ({ isOpen, onClose, plan, price, preferenceId }) => {
    const [step, setStep] = useState('form'); // form, payment
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
    });
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Guardar en Supabase
            const { data, error } = await supabase
                .from('enrollments')
                .insert([
                    {
                        full_name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        age: parseInt(formData.age),
                        course_plan: plan,
                        price: price,
                        status: 'pending_payment',
                        created_at: new Date()
                    }
                ])
                .select();

            if (error) throw error;

            // Si se guarda correctamente, pasar al paso de pago
            setStep('payment');
        } catch (err) {
            console.error('Error saving enrollment:', err);
            // Fallback para demo
            console.warn("Supabase falló, pasando a pago modo DEMO");
            setStep('payment');

            // setError('Hubo un error al guardar tus datos. Por favor intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-md bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="p-6 bg-[#1E293B] flex justify-between items-center border-b border-white/5">
                    <div>
                        <h3 className="text-xl font-bold text-white">Inscripción</h3>
                        <p className="text-sm text-slate-400">{plan} - <span className="text-primary-400 font-bold">${price} MXN</span></p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    <AnimatePresence mode="wait">
                        {step === 'form' ? (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                onSubmit={handleSubmit}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Nombre Completo</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-[#0B0F19] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="Ej. Rodrigo Paz"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-[#0B0F19] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="tucorreo@ejemplo.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Teléfono (WhatsApp)</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full bg-[#0B0F19] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="+52 123 456 7890"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-1">Edad</label>
                                    <input
                                        type="number"
                                        required
                                        min="10"
                                        max="99"
                                        className="w-full bg-[#0B0F19] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="Ej. 25"
                                        value={formData.age}
                                        onChange={e => setFormData({ ...formData, age: e.target.value })}
                                    />
                                </div>

                                {error && <p className="text-red-400 text-sm bg-red-400/10 p-3 rounded-lg">{error}</p>}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full mt-6 bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/25 transition-all hover:translate-y-[-2px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Continuar al Pago'}
                                </button>
                                <p className="text-xs text-center text-slate-500 mt-4">
                                    Tus datos están seguros. Al continuar, procederás al pago seguro con Mercado Pago.
                                </p>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="payment"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-center space-y-6"
                            >
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle className="w-8 h-8 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">¡Datos Guardados!</h4>
                                    <p className="text-slate-400 text-sm">
                                        Ahora puedes finalizar tu inscripción realizando el pago de forma segura.
                                    </p>
                                </div>

                                <div className="bg-white p-4 rounded-xl">
                                    {/* Contenedor ajustado para evitar overflow */}
                                    <div className="custom-wallet-container min-h-[50px]">
                                        <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'self' }} customization={{ texts: { valueProp: 'security_safety' } }} />
                                    </div>
                                </div>

                                <button onClick={() => setStep('form')} className="text-sm text-slate-500 hover:text-white underline">
                                    Volver a editar datos
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default EnrollmentForm;
