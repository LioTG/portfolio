import { useEffect, useRef } from 'react';

/**
 * Custom hook to create a spotlight effect that follows the mouse cursor
 * Updates CSS custom properties --mouse-x and --mouse-y on the element
 */
export const useSpotlight = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Update CSS custom properties with mouse position
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
        };

        // Add event listener
        element.addEventListener('mousemove', handleMouseMove);

        // Cleanup
        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return elementRef;
};
