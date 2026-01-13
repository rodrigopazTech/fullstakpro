// Google Analytics 4 Helper Functions
// Measurement ID: G-LYJP6EVXC4

/**
 * Helper function to send events to GA4
 * @param {string} eventName - Name of the event
 * @param {object} params - Event parameters
 */
const sendGA4Event = (eventName, params = {}) => {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, params);
        console.log(`[GA4] Event sent: ${eventName}`, params);
    } else {
        console.warn('[GA4] gtag not available');
    }
};

/**
 * Track page view - useful for SPA navigation
 * @param {string} pagePath - Path of the page
 * @param {string} pageTitle - Title of the page
 */
export const trackPageView = (pagePath, pageTitle) => {
    sendGA4Event('page_view', {
        page_path: pagePath,
        page_title: pageTitle,
    });
};

/**
 * Track scroll depth milestones
 * @param {number} percentage - Scroll percentage (25, 50, 75, 90, 100)
 */
export const trackScrollDepth = (percentage) => {
    sendGA4Event('scroll_depth', {
        percent_scrolled: percentage,
        page_path: window.location.pathname,
    });
};

/**
 * Track ViewContent event - when user views pricing section
 * @param {string} contentName - Name of the content being viewed
 * @param {number} value - Value of the content (price)
 */
export const trackViewContent = (contentName, value) => {
    sendGA4Event('view_item', {
        currency: 'MXN',
        value: value,
        items: [{
            item_name: contentName,
            item_category: 'Curso',
            price: value,
            currency: 'MXN',
        }]
    });
};

/**
 * Track CTA Click - when user clicks any call-to-action button
 * @param {string} ctaName - Name/text of the CTA button
 * @param {string} location - Where the CTA is located (hero, pricing, sticky, etc.)
 */
export const trackCTAClick = (ctaName, location) => {
    sendGA4Event('cta_click', {
        cta_name: ctaName,
        cta_location: location,
        page_path: window.location.pathname,
    });
};

/**
 * Track InitiateCheckout event - when user opens enrollment form
 * @param {string} plan - Plan name
 * @param {number} price - Price of the plan
 */
export const trackInitiateCheckout = (plan, price) => {
    sendGA4Event('begin_checkout', {
        currency: 'MXN',
        value: price,
        items: [{
            item_name: plan,
            item_category: 'Curso Full Stack',
            price: price,
            currency: 'MXN',
            quantity: 1,
        }]
    });
};

/**
 * Track Lead event - when user submits form data
 * @param {string} plan - Plan name
 * @param {number} price - Price value
 */
export const trackLead = (plan, price) => {
    sendGA4Event('generate_lead', {
        currency: 'MXN',
        value: price,
        lead_source: 'enrollment_form',
        content_name: plan,
    });
};

/**
 * Track form submission (more detailed than lead)
 * @param {string} formName - Name of the form
 * @param {boolean} success - Whether submission was successful
 */
export const trackFormSubmission = (formName, success) => {
    sendGA4Event('form_submit', {
        form_name: formName,
        form_success: success,
        page_path: window.location.pathname,
    });
};

/**
 * Track Purchase event - when payment is successful
 * @param {string} plan - Plan name
 * @param {number} price - Price paid
 * @param {string} transactionId - Payment/transaction ID
 * @param {string} paymentMethod - Payment method used
 */
export const trackPurchase = (plan, price, transactionId, paymentMethod = 'mercadopago') => {
    sendGA4Event('purchase', {
        transaction_id: transactionId,
        value: price,
        currency: 'MXN',
        payment_type: paymentMethod,
        items: [{
            item_name: plan,
            item_category: 'Curso Full Stack',
            price: price,
            currency: 'MXN',
            quantity: 1,
        }]
    });
};

/**
 * Track Contact event - when user initiates WhatsApp contact
 * @param {string} method - Contact method (WhatsApp, Email, etc.)
 * @param {string} context - Context of the contact (hero, pricing, support, etc.)
 */
export const trackContact = (method = 'WhatsApp', context = 'general') => {
    sendGA4Event('contact', {
        contact_method: method,
        contact_context: context,
        page_path: window.location.pathname,
    });
};

/**
 * Track video engagement
 * @param {string} videoTitle - Title of the video
 * @param {string} action - Action taken (play, pause, complete, etc.)
 * @param {number} percentWatched - Percentage of video watched
 */
export const trackVideoEngagement = (videoTitle, action, percentWatched = 0) => {
    sendGA4Event('video_engagement', {
        video_title: videoTitle,
        video_action: action,
        video_percent: percentWatched,
    });
};

/**
 * Track FAQ interaction
 * @param {string} question - The FAQ question clicked
 * @param {boolean} opened - Whether the FAQ was opened or closed
 */
export const trackFAQInteraction = (question, opened) => {
    sendGA4Event('faq_interaction', {
        faq_question: question,
        faq_action: opened ? 'open' : 'close',
    });
};

/**
 * Track payment failure for debugging
 * @param {string} errorType - Type of payment error
 * @param {string} paymentMethod - Payment method that failed
 */
export const trackPaymentFailure = (errorType, paymentMethod = 'mercadopago') => {
    sendGA4Event('payment_failed', {
        error_type: errorType,
        payment_method: paymentMethod,
    });
};

/**
 * Track modal/popup interactions
 * @param {string} modalName - Name of the modal
 * @param {string} action - Action (open, close, submit)
 */
export const trackModalInteraction = (modalName, action) => {
    sendGA4Event('modal_interaction', {
        modal_name: modalName,
        modal_action: action,
    });
};

/**
 * Track user timing for performance monitoring
 * @param {string} category - Timing category (e.g., 'JS Load', 'API Response')
 * @param {string} variable - Timing variable name
 * @param {number} value - Time in milliseconds
 */
export const trackTiming = (category, variable, value) => {
    sendGA4Event('timing_complete', {
        name: variable,
        value: value,
        event_category: category,
    });
};

/**
 * Track external link clicks
 * @param {string} url - The external URL clicked
 * @param {string} linkText - Text of the link
 */
export const trackExternalLink = (url, linkText) => {
    sendGA4Event('external_link_click', {
        link_url: url,
        link_text: linkText,
        page_path: window.location.pathname,
    });
};
