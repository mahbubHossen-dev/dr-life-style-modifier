'use client';

import { dashboardCardsData } from '@/data/data';
import React, { useEffect, useRef } from 'react';
import { createSwapy } from 'swapy';

const SlotLayout = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const swapy = createSwapy(containerRef.current, {
            animation: 'dynamic',
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
    }, []);

    return (
        <div
            ref={containerRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24"
        >
            {dashboardCardsData.map((card, idx) => (
                <div
                    key={idx}
                    className="slot"
                    data-swapy-slot={`slot-${idx}`}
                >
                    <div
                        className="item"
                        data-swapy-item={`item-${idx}`}
                    >
                        <div className={`bg-white shadow-md rounded p-4 flex flex-col text-center`}>
                            <div className={`flex items-center justify-start gap-1 ${card.textColor}`}>
                                <div className={`${card.bgColor} p-2 rounded-full w-10 h-10`}>
                                    {card.icon}
                                </div>
                                <p className='pl-0 lg:pl-2 xl:pl-3'>{card.value}</p>
                                <p className='font-medium text-md xl:pl-6 text-lg'>{card.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SlotLayout;
