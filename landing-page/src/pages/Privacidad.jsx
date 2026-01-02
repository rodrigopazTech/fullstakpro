import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const Privacidad = () => {
    return (
        <div className="min-h-screen bg-[#0B0F19] text-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Volver al inicio
                </Link>

                <div className="flex items-center gap-3 mb-8">
                    <Shield className="w-8 h-8 text-primary-400" />
                    <h1 className="text-3xl font-bold">Política de Privacidad</h1>
                </div>

                <div className="prose prose-invert prose-slate max-w-none space-y-6">
                    <p className="text-slate-400">
                        Última actualización: 2 de Enero de 2026
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Información que Recopilamos</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Al inscribirte en nuestro curso, recopilamos la siguiente información personal:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
                            <li>Nombre completo</li>
                            <li>Dirección de correo electrónico</li>
                            <li>Número de teléfono/WhatsApp</li>
                            <li>Edad</li>
                            <li>Información de pago (procesada de forma segura por Mercado Pago)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Uso de la Información</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Utilizamos tu información para:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
                            <li>Procesar tu inscripción y pagos</li>
                            <li>Enviarte materiales del curso y accesos</li>
                            <li>Comunicarnos contigo sobre el curso vía WhatsApp o email</li>
                            <li>Enviarte recordatorios de clases y actualizaciones</li>
                            <li>Mejorar nuestros servicios educativos</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. Cookies y Tecnologías de Seguimiento</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Utilizamos el Meta Pixel (Facebook Pixel) para:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
                            <li>Medir la efectividad de nuestra publicidad</li>
                            <li>Entender cómo los usuarios interactúan con nuestro sitio</li>
                            <li>Mostrar anuncios relevantes a personas interesadas en educación tecnológica</li>
                        </ul>
                        <p className="text-slate-300 leading-relaxed mt-3">
                            Puedes optar por no recibir anuncios personalizados visitando la 
                            <a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline ml-1">
                                configuración de anuncios de Facebook
                            </a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Protección de Datos</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Implementamos medidas de seguridad para proteger tu información:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
                            <li>Conexiones encriptadas (HTTPS)</li>
                            <li>Procesamiento de pagos seguro a través de Mercado Pago</li>
                            <li>Acceso restringido a datos personales</li>
                            <li>Almacenamiento seguro en servidores de Supabase</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Compartir Información</h2>
                        <p className="text-slate-300 leading-relaxed">
                            No vendemos ni compartimos tu información personal con terceros, excepto:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
                            <li>Mercado Pago: para procesar pagos</li>
                            <li>Plataformas de email: para enviarte comunicaciones del curso</li>
                            <li>Cuando sea requerido por ley</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Tus Derechos</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Tienes derecho a:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
                            <li>Acceder a tus datos personales</li>
                            <li>Rectificar información incorrecta</li>
                            <li>Solicitar la eliminación de tus datos</li>
                            <li>Oponerte al procesamiento de tus datos</li>
                            <li>Retirar tu consentimiento en cualquier momento</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Retención de Datos</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Conservamos tu información mientras seas alumno activo y durante el período necesario 
                            para cumplir con obligaciones legales. Puedes solicitar la eliminación de tus datos 
                            contactándonos directamente.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Contacto</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Para cualquier consulta sobre privacidad o para ejercer tus derechos, contáctanos:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 space-y-2 mt-3">
                            <li>Email: rodrigo@rodrigopaz.space</li>
                            <li>WhatsApp: Disponible en nuestra página principal</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mt-8 mb-4">9. Cambios a esta Política</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Podemos actualizar esta política ocasionalmente. Te notificaremos sobre cambios 
                            significativos publicando la nueva política en esta página con una fecha de 
                            actualización revisada.
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-3 px-6 rounded-xl transition-all"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Privacidad;
