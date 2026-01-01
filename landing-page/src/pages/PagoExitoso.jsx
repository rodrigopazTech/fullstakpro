import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const PagoExitoso = () => {
    const [searchParams] = useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});

    useEffect(() => {
        // Extraer información del pago de los query params
        setPaymentInfo({
            paymentId: searchParams.get('payment_id'),
            status: searchParams.get('status'),
            externalReference: searchParams.get('external_reference'),
            paymentType: searchParams.get('payment_type'),
        });
    }, [searchParams]);

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md w-full bg-[#151B2B] rounded-2xl p-8 text-center border border-green-500/20"
            >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                </div>

                <h1 className="text-2xl font-bold mb-2">¡Pago Exitoso!</h1>
                <p className="text-slate-400 mb-6">
                    Tu inscripción ha sido confirmada. Recibirás un correo con los detalles de acceso.
                </p>

                {paymentInfo.paymentId && (
                    <div className="bg-[#0B0F19] rounded-lg p-4 mb-6 text-left">
                        <p className="text-sm text-slate-500 mb-1">ID de Operación</p>
                        <p className="font-mono text-sm text-slate-300">#{paymentInfo.paymentId}</p>
                    </div>
                )}

                <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                        <Mail className="w-4 h-4 text-primary-400" />
                        <span>Revisa tu correo para los accesos</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300 text-sm">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span>Las clases inician el 3 de Enero</span>
                    </div>
                </div>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-6 rounded-xl transition-all"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </Link>
            </motion.div>
        </div>
    );
};

export default PagoExitoso;
