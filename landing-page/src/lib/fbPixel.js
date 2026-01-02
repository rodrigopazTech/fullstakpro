// Facebook Pixel Helper Functions
// Pixel ID: 858676670091463

/**
 * Track ViewContent event - when user views pricing section
 */
export const trackViewContent = (contentName, value, currency = 'MXN') => {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'ViewContent', {
            content_name: contentName,
            content_category: 'Curso',
            value: value,
            currency: currency
        });
    }
};

/**
 * Track InitiateCheckout event - when user opens enrollment form
 */
export const trackInitiateCheckout = (plan, price, currency = 'MXN') => {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'InitiateCheckout', {
            content_name: plan,
            content_category: 'Curso Full Stack',
            value: price,
            currency: currency,
            num_items: 1
        });
    }
};

/**
 * Track Lead event - when user submits form data
 */
export const trackLead = (plan, price, currency = 'MXN') => {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: plan,
            content_category: 'Curso Full Stack',
            value: price,
            currency: currency
        });
    }
};

/**
 * Track Purchase event - when payment is successful
 */
export const trackPurchase = (plan, price, paymentId, currency = 'MXN') => {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Purchase', {
            content_name: plan,
            content_category: 'Curso Full Stack',
            value: price,
            currency: currency,
            content_type: 'product',
            transaction_id: paymentId
        });
    }
};

/**
 * Track Contact event - when user initiates WhatsApp contact
 */
export const trackContact = (method = 'WhatsApp') => {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Contact', {
            content_name: 'Consulta Curso Full Stack',
            method: method
        });
    }
};
