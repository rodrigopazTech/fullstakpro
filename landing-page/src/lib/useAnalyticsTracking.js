import { useEffect, useRef } from 'react';
import { trackScrollDepth } from './googleAnalytics';

/**
 * Custom hook to track scroll depth milestones
 * Tracks when user scrolls to 25%, 50%, 75%, and 90% of the page
 */
export const useScrollTracking = () => {
    const trackedMilestones = useRef(new Set());

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / docHeight) * 100);

            const milestones = [25, 50, 75, 90];

            milestones.forEach((milestone) => {
                if (scrollPercent >= milestone && !trackedMilestones.current.has(milestone)) {
                    trackedMilestones.current.add(milestone);
                    trackScrollDepth(milestone);
                }
            });
        };

        // Debounce scroll handler for performance
        let timeoutId;
        const debouncedHandleScroll = () => {
            if (timeoutId) {
                cancelAnimationFrame(timeoutId);
            }
            timeoutId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', debouncedHandleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
            if (timeoutId) {
                cancelAnimationFrame(timeoutId);
            }
        };
    }, []);
};

/**
 * Custom hook to track time on page
 * Sends events at 30s, 60s, 120s, 300s intervals
 */
export const useTimeOnPage = () => {
    useEffect(() => {
        const intervals = [30, 60, 120, 300]; // seconds
        const timeouts = [];
        const trackedIntervals = new Set();

        intervals.forEach((seconds) => {
            const timeout = setTimeout(() => {
                if (!trackedIntervals.has(seconds)) {
                    trackedIntervals.add(seconds);
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'time_on_page', {
                            seconds_on_page: seconds,
                            page_path: window.location.pathname,
                        });
                        console.log(`[GA4] Time on page: ${seconds}s`);
                    }
                }
            }, seconds * 1000);
            timeouts.push(timeout);
        });

        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, []);
};

export default useScrollTracking;
