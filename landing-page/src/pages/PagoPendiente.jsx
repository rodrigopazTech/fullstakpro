import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const PagoPendiente = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});

    useEffect(() => {
        setPaymentInfo({
            paymentId: searchParams.get('payment_id'),
            status: searchParams.get('status'),
            externalReference: searchParams.get('external_reference'),
            paymentType: searchParams.get('payment_type'),
        });
    }, [searchParams]);

    const handleWhatsApp = () => {
        const message = encodeURIComponent(
            `Hola, mi pago está pendiente. ID de operación: ${paymentInfo.paymentId || 'N/A'}`
        );
        window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-[#151B2B] rounded-2xl p-8 text-center border border-yellow-500/20"
            >
                <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-10 h-10 text-yellow-400" />
                </div>

                <h1 className="text-2xl font-bold mb-2">Pago Pendiente</h1>
                <p className="text-slate-400 mb-6">
                    Tu pago está siendo procesado. Te notificaremos cuando se confirme.
                </p>

                {paymentInfo.paymentId && (
                    <div className="bg-[#0B0F19] rounded-lg p-4 mb-6 text-left">
                        <p className="text-sm text-slate-500 mb-1">ID de Operación</p>
                        <p className="font-mono text-sm text-slate-300">#{paymentInfo.paymentId}</p>
                    </div>
                )}

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6 text-left">
                    <p className="text-blue-400 text-sm font-medium mb-2">¿Qué sigue?</p>
                    <ul className="text-slate-400 text-sm space-y-2">
                        <li className="flex items-start gap-2">
                            <Mail className="w-4 h-4 mt-0.5 text-blue-400" />
                            <span>Recibirás un correo cuando el pago se confirme</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Clock className="w-4 h-4 mt-0.5 text-blue-400" />
                            <span>Los pagos en OXXO pueden tardar hasta 24 horas</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <button
                        onClick={handleWhatsApp}
                        className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Consultar estado por WhatsApp
                    </button>

                    <Link
                        to="/"
                        className="w-full inline-flex items-center justify-center gap-2 text-slate-400 hover:text-white py-2 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver al inicio
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default PagoPendiente;
