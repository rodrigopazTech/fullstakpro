import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { XCircle, ArrowLeft, RefreshCw, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const PagoFallido = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});

    useEffect(() => {
        setPaymentInfo({
            paymentId: searchParams.get('payment_id'),
            status: searchParams.get('status'),
            externalReference: searchParams.get('external_reference'),
        });
    }, [searchParams]);

    const handleWhatsApp = () => {
        const message = encodeURIComponent(
            `Hola, tuve un problema con mi pago. ID de operación: ${paymentInfo.paymentId || 'N/A'}`
        );
        window.open(`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-[#151B2B] rounded-2xl p-8 text-center border border-red-500/20"
            >
                <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <XCircle className="w-10 h-10 text-red-400" />
                </div>

                <h1 className="text-2xl font-bold mb-2">Pago Rechazado</h1>
                <p className="text-slate-400 mb-6">
                    Hubo un problema al procesar tu pago. No te preocupes, no se realizó ningún cargo.
                </p>

                {paymentInfo.paymentId && (
                    <div className="bg-[#0B0F19] rounded-lg p-4 mb-6 text-left">
                        <p className="text-sm text-slate-500 mb-1">ID de Operación</p>
                        <p className="font-mono text-sm text-slate-300">#{paymentInfo.paymentId}</p>
                    </div>
                )}

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6 text-left">
                    <p className="text-yellow-400 text-sm font-medium mb-1">Posibles causas:</p>
                    <ul className="text-slate-400 text-sm space-y-1">
                        <li>• Fondos insuficientes</li>
                        <li>• Datos de tarjeta incorrectos</li>
                        <li>• Límite de crédito excedido</li>
                        <li>• Tarjeta bloqueada por el banco</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <Link
                        to="/#inscripcion"
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-6 rounded-xl transition-all"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Intentar de nuevo
                    </Link>

                    <button
                        onClick={handleWhatsApp}
                        className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded-xl transition-all"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Contactar por WhatsApp
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

export default PagoFallido;
