'use client';

import {
    useEffect,
    useRef,
    type CSSProperties,
    type PointerEvent,
    type ReactNode,
} from 'react';

type CompanyShineProps = {
    children: ReactNode;
    variant: 'paystream' | 'humain' | 'independent';
};

type ShineStyle = CSSProperties & {
    '--company-shine-x': string;
};

export default function CompanyShine({ children, variant }: CompanyShineProps) {
    const shineRef = useRef<HTMLSpanElement>(null);

    function setShinePosition(clientX: number) {
        const element = shineRef.current;
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const position = ((clientX - rect.left) / rect.width) * 100;
        const clampedPosition = Math.min(100, Math.max(0, position));

        element.style.setProperty('--company-shine-x', `${clampedPosition}%`);
    }

    useEffect(() => {
        function handlePointerMove(event: globalThis.PointerEvent) {
            setShinePosition(event.clientX);
        }

        window.addEventListener('pointermove', handlePointerMove, {
            passive: true,
        });

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);

    function updateShine(event: PointerEvent<HTMLSpanElement>) {
        setShinePosition(event.clientX);
    }

    return (
        <span
            ref={shineRef}
            className={`company-shine company-shine-${variant}`}
            onPointerMove={updateShine}
            style={{ '--company-shine-x': '50%' } as ShineStyle}
        >
            {children}
        </span>
    );
}
