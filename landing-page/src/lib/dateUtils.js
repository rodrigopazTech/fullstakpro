/**
 * Utilidades para manejo de fechas UTC → Hora Local (México)
 * 
 * Backend (Supabase, Mercado Pago, n8n) trabajan en UTC
 * Frontend convierte a la zona horaria del usuario
 */

// Zona horaria de México
export const MEXICO_TIMEZONE = 'America/Mexico_City';

/**
 * Convierte una fecha UTC a hora local de México
 * @param {string|Date} utcDate - Fecha en UTC (ISO string o Date)
 * @param {object} options - Opciones de formato
 * @returns {string} Fecha formateada en hora local
 */
export const formatToMexicoTime = (utcDate, options = {}) => {
  if (!utcDate) return '';
  
  const date = new Date(utcDate);
  
  const defaultOptions = {
    timeZone: MEXICO_TIMEZONE,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    ...options
  };
  
  return date.toLocaleString('es-MX', defaultOptions);
};

/**
 * Convierte fecha UTC a formato corto (solo fecha)
 * @param {string|Date} utcDate - Fecha en UTC
 * @returns {string} Fecha en formato "31 dic 2025"
 */
export const formatDateShort = (utcDate) => {
  if (!utcDate) return '';
  
  return new Date(utcDate).toLocaleDateString('es-MX', {
    timeZone: MEXICO_TIMEZONE,
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

/**
 * Convierte fecha UTC a formato largo con hora
 * @param {string|Date} utcDate - Fecha en UTC
 * @returns {string} Fecha en formato "31 de diciembre de 2025, 17:30"
 */
export const formatDateTimeLong = (utcDate) => {
  if (!utcDate) return '';
  
  return new Date(utcDate).toLocaleString('es-MX', {
    timeZone: MEXICO_TIMEZONE,
    dateStyle: 'long',
    timeStyle: 'short'
  });
};

/**
 * Convierte fecha UTC a formato relativo ("hace 5 minutos")
 * @param {string|Date} utcDate - Fecha en UTC
 * @returns {string} Tiempo relativo
 */
export const formatRelativeTime = (utcDate) => {
  if (!utcDate) return '';
  
  const date = new Date(utcDate);
  const now = new Date();
  const diffMs = now - date;
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);
  
  if (diffSecs < 60) return 'hace un momento';
  if (diffMins < 60) return `hace ${diffMins} minuto${diffMins > 1 ? 's' : ''}`;
  if (diffHours < 24) return `hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`;
  if (diffDays < 7) return `hace ${diffDays} día${diffDays > 1 ? 's' : ''}`;
  
  return formatDateShort(utcDate);
};

/**
 * Obtiene solo la hora en formato 12h
 * @param {string|Date} utcDate - Fecha en UTC
 * @returns {string} Hora en formato "5:30 PM"
 */
export const formatTimeOnly = (utcDate) => {
  if (!utcDate) return '';
  
  return new Date(utcDate).toLocaleTimeString('es-MX', {
    timeZone: MEXICO_TIMEZONE,
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
};

/**
 * Convierte hora local de México a UTC para enviar al backend
 * @param {Date} localDate - Fecha en hora local
 * @returns {string} Fecha en formato ISO UTC
 */
export const localToUTC = (localDate) => {
  return new Date(localDate).toISOString();
};

/**
 * Formatea fecha de pago de Mercado Pago
 * @param {string} mpDate - Fecha de MP (viene en UTC)
 * @returns {string} Fecha formateada para mostrar
 */
export const formatPaymentDate = (mpDate) => {
  if (!mpDate) return 'Pendiente';
  return formatDateTimeLong(mpDate);
};

// Ejemplo de uso:
// import { formatToMexicoTime, formatPaymentDate } from '../lib/dateUtils';
// 
// const payment_date = "2025-12-31T23:17:40Z"; // UTC desde Supabase
// console.log(formatPaymentDate(payment_date)); // "31 de diciembre de 2025, 17:17"
