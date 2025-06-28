import { useEffect } from 'react';
import { createSwapy } from 'swapy';

export const useSwapy = (containerRef, options = {}) => {
    useEffect(() => {
        if (!containerRef.current) return;

        const swapy = createSwapy(containerRef.current, {
            animation: 'dynamic',
            ...options,
        });

        swapy.onBeforeSwap((event) => {
            console.log('beforeSwap', event);
            return true;
        });

        swapy.onSwapStart((event) => {
            console.log('start', event);
        });

        swapy.onSwap((event) => {
            console.log('swap', event);
        });

        swapy.onSwapEnd((event) => {
            console.log('swap end:', event);
        });

        return () => {
            swapy.destroy();
        };
    }, [containerRef, options]);
};
