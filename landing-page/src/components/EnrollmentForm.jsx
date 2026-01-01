import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { Wallet } from '@mercadopago/sdk-react';

const EnrollmentForm = ({ isOpen, onClose, plan, price }) => {
    const [step, setStep] = useState('form'); // form, creating_preference, payment, error
    const [loading, setLoading] = useState(false);
    const [preferenceId, setPreferenceId] = useState(null);
    const [enrollmentId, setEnrollmentId] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '52',
        age: '',
    });
    const [error, setError] = useState('');

    // URL de la Edge Function de Supabase
    const EDGE_FUNCTION_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-preference`;

    const resetForm = () => {
        setStep('form');
        setPreferenceId(null);
        setEnrollmentId(null);
        setError('');
        setFormData({ name: '', email: '', phone: '', countryCode: '52', age: '' });
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // PASO 1: Guardar en Supabase y obtener el ID
            const { data: enrollmentData, error: insertError } = await supabase
                .from('enrollments')
                .insert([
                    {
                        full_name: formData.name,
                        email: formData.email,
                        phone: `${formData.countryCode}${formData.phone.replace(/\D/g, '')}`,  // Guarda con código de país, solo números
                        age: parseInt(formData.age),
                        course_plan: plan,
                        price: price,
                        status: 'pending_payment',
                        created_at: new Date().toISOString()
                    }
                ])
                .select()
                .single();

            if (insertError) {
                console.error('Error guardando enrollment:', insertError);
                throw new Error('No se pudieron guardar tus datos. Intenta de nuevo.');
            }

            const newEnrollmentId = enrollmentData.id;
            setEnrollmentId(newEnrollmentId);
            console.log('Enrollment creado con ID:', newEnrollmentId);

            // PASO 2: Crear preferencia dinámica en Mercado Pago
            setStep('creating_preference');

            const response = await fetch(EDGE_FUNCTION_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({
                    enrollment_id: newEnrollmentId,
                    title: plan,
                    price: price,
                    email: formData.email,
                    payer_name: formData.name
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error creando preferencia:', errorData);
                throw new Error(errorData.error || 'Error al crear la preferencia de pago');
            }

            const { preference_id } = await response.json();
            console.log('Preferencia creada:', preference_id);

            setPreferenceId(preference_id);
            setStep('payment');

        } catch (err) {
            console.error('Error en el proceso:', err);
            setError(err.message || 'Hubo un error. Por favor intenta de nuevo.');
            setStep('error');
        } finally {
            setLoading(false);
        }
    };

    const handleRetry = () => {
        setStep('form');
        setError('');
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
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
                    <button onClick={handleClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    <AnimatePresence mode="wait">
                        {/* PASO 1: Formulario */}
                        {step === 'form' && (
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
                                    <div className="flex gap-2">
                                        <select
                                            value={formData.countryCode}
                                            onChange={e => setFormData({ ...formData, countryCode: e.target.value })}
                                            className="bg-[#0B0F19] border border-slate-700 rounded-lg px-3 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors w-28"
                                        >
                                            <option value="52">🇲🇽 +52</option>
                                            <option value="1">🇺🇸 +1</option>
                                            <option value="54">🇦🇷 +54</option>
                                            <option value="55">🇧🇷 +55</option>
                                            <option value="56">🇨🇱 +56</option>
                                            <option value="57">🇨🇴 +57</option>
                                            <option value="51">🇵🇪 +51</option>
                                            <option value="58">🇻🇪 +58</option>
                                            <option value="593">🇪🇨 +593</option>
                                            <option value="34">🇪🇸 +34</option>
                                        </select>
                                        <input
                                            type="tel"
                                            required
                                            className="flex-1 bg-[#0B0F19] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                            placeholder="10 dígitos sin espacios"
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                        />
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">Recibirás confirmación por WhatsApp</p>
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
                        )}

                        {/* PASO 2: Creando preferencia */}
                        {step === 'creating_preference' && (
                            <motion.div
                                key="creating"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-8"
                            >
                                <Loader2 className="w-12 h-12 text-primary-500 animate-spin mx-auto mb-4" />
                                <p className="text-white font-medium">Preparando tu pago...</p>
                                <p className="text-slate-400 text-sm mt-2">Esto solo tomará un momento</p>
                            </motion.div>
                        )}

                        {/* PASO 3: Mostrar Wallet para pago */}
                        {step === 'payment' && preferenceId && (
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
                                    <div className="custom-wallet-container min-h-[50px]">
                                        <Wallet 
                                            initialization={{ preferenceId: preferenceId, redirectMode: 'self' }} 
                                            customization={{ texts: { valueProp: 'security_safety' } }} 
                                        />
                                    </div>
                                </div>

                                <p className="text-xs text-slate-500">
                                    ID de inscripción: <code className="bg-slate-800 px-2 py-1 rounded">{enrollmentId}</code>
                                </p>

                                <button onClick={() => setStep('form')} className="text-sm text-slate-500 hover:text-white underline">
                                    Volver a editar datos
                                </button>
                            </motion.div>
                        )}

                        {/* PASO ERROR */}
                        {step === 'error' && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center space-y-6 py-4"
                            >
                                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
                                    <AlertCircle className="w-8 h-8 text-red-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">Ocurrió un error</h4>
                                    <p className="text-slate-400 text-sm">{error}</p>
                                </div>

                                <button
                                    onClick={handleRetry}
                                    className="w-full bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 rounded-xl transition-all"
                                >
                                    Intentar de nuevo
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
