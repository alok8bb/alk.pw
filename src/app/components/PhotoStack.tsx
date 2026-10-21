'use client';

import {
    LazyMotion,
    MotionConfig,
    m,
    useMotionValue,
    useSpring,
} from 'motion/react';
import Image from 'next/image';
import {
    type MouseEvent as ReactMouseEvent,
    type PointerEvent as ReactPointerEvent,
    useEffect,
    useRef,
    useState,
} from 'react';

type StackCard = {
    photo: number;
    instance: number;
};

const initialOrder: StackCard[] = [
    { photo: 0, instance: 0 },
    { photo: 1, instance: 1 },
    { photo: 2, instance: 2 },
];

const photos = [
    {
        src: '/photo-stack/portrait-laptop.jpg',
        label: 'Alok pictured on a laptop screen',
    },
    {
        src: '/photo-stack/rainy-window-code.jpg',
        label: 'coding beside a rainy window',
    },
    {
        src: '/photo-stack/porsche-full-car.jpg',
        label: 'a white Porsche on a city street',
    },
] as const;

const restingPositions = [
    { x: 0, y: 0, rotate: 0 },
    { x: 7, y: 3, rotate: 5 },
    { x: -6, y: 6, rotate: -6 },
];

const spreadPositions = [
    { x: 0, y: -6, rotate: 0 },
    { x: 14, y: 3, rotate: 7 },
    { x: -14, y: 7, rotate: -8 },
];

const hoverSpring = {
    stiffness: 500,
    damping: 20,
    mass: 0.8,
};

const loadMotionFeatures = () =>
    import('./photoStackMotionFeatures').then((module) => module.default);

export default function PhotoStack() {
    const [order, setOrder] = useState(initialOrder);
    const [leavingCard, setLeavingCard] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isTouchExpanded, setIsTouchExpanded] = useState(false);
    const stackRef = useRef<HTMLButtonElement>(null);
    const stackBounds = useRef<DOMRect | null>(null);
    const cycleLock = useRef(false);
    const nextInstance = useRef(initialOrder.length);
    const isSpread = isHovered || isFocused || isTouchExpanded;
    const stackDimensions = isHovered
        ? {
              width: '17.5rem',
              height: '13.125rem',
              left: '-3.5rem',
              top: '-2.625rem',
          }
        : isFocused || isTouchExpanded
          ? {
                width: '12.5rem',
                height: '9.375rem',
                left: '-1rem',
                top: '-0.75rem',
            }
          : {
                width: '10.5rem',
                height: '7.875rem',
                left: '0rem',
                top: '0rem',
            };
    const tiltX = useMotionValue(0);
    const tiltY = useMotionValue(0);
    const smoothTiltX = useSpring(tiltX, hoverSpring);
    const smoothTiltY = useSpring(tiltY, hoverSpring);

    useEffect(() => {
        if (!isTouchExpanded) return;

        const collapseWhenTappingAway = (event: PointerEvent) => {
            if (!stackRef.current?.contains(event.target as Node)) {
                setIsTouchExpanded(false);
                setIsFocused(false);
                stackRef.current?.blur();
            }
        };

        document.addEventListener('pointerdown', collapseWhenTappingAway);
        return () =>
            document.removeEventListener(
                'pointerdown',
                collapseWhenTappingAway
            );
    }, [isTouchExpanded]);

    const cyclePhotos = () => {
        if (cycleLock.current) return;
        cycleLock.current = true;
        setLeavingCard(order[0].instance);
    };

    const handlePointerUp = (event: ReactPointerEvent<HTMLButtonElement>) => {
        if (event.button !== 0) return;

        const isTouch =
            event.pointerType === 'touch' || event.pointerType === 'pen';

        if (isTouch && !isTouchExpanded) {
            setIsTouchExpanded(true);
            return;
        }

        cyclePhotos();
    };

    const handleClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
        // Pointer interactions are handled on pointerup so tablet taps do not
        // depend on a browser-generated compatibility click. detail === 0 is
        // retained for keyboard and assistive-technology activation.
        if (event.detail === 0) cyclePhotos();
    };

    const handlePointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
        if (event.pointerType !== 'mouse') return;

        const bounds = stackBounds.current;
        if (!bounds) return;

        const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
        const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

        tiltX.set(vertical * -10);
        tiltY.set(horizontal * 10);
    };

    const resetTilt = () => {
        stackBounds.current = null;
        tiltX.set(0);
        tiltY.set(0);
    };

    const finishCycle = (card: StackCard) => {
        if (!cycleLock.current) return;

        setOrder((currentOrder) => {
            if (currentOrder[0].instance !== card.instance) {
                return currentOrder;
            }

            return [
                ...currentOrder.slice(1),
                {
                    photo: card.photo,
                    instance: nextInstance.current++,
                },
            ];
        });
        setLeavingCard((current) =>
            current === card.instance ? null : current
        );
        cycleLock.current = false;
    };

    return (
        <LazyMotion features={loadMotionFeatures} strict>
            <MotionConfig reducedMotion="never">
                <button
                    ref={stackRef}
                    type="button"
                    className="photo-stack"
                    aria-label={`Shuffle photo stack. Photo ${order[0].photo + 1} of 3, ${photos[order[0].photo].label}, is currently on top.`}
                    aria-expanded={isSpread}
                    onClick={handleClick}
                    onPointerUp={handlePointerUp}
                    onPointerEnter={(event) => {
                        if (event.pointerType !== 'mouse') return;
                        stackBounds.current =
                            event.currentTarget.getBoundingClientRect();
                        setIsHovered(true);
                    }}
                    onPointerMove={handlePointerMove}
                    onPointerLeave={(event) => {
                        if (event.pointerType !== 'mouse') return;
                        setIsHovered(false);
                        resetTilt();
                    }}
                    onFocus={(event) => {
                        setIsFocused(
                            event.currentTarget.matches(':focus-visible')
                        );
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                        resetTilt();
                    }}
                >
                    <m.span
                        className="photo-stack-plane"
                        style={{
                            rotateX: smoothTiltX,
                            rotateY: smoothTiltY,
                        }}
                        animate={stackDimensions}
                        transition={{
                            type: 'spring',
                            stiffness: 380,
                            damping: 30,
                            mass: 0.75,
                        }}
                    >
                        {[...order].reverse().map((card) => {
                            const depth = order.indexOf(card);
                            const isLeaving = leavingCard === card.instance;

                            return (
                                <m.span
                                    key={card.instance}
                                    className={`photo-stack-card photo-stack-card-${card.photo + 1}`}
                                    style={{ zIndex: 3 - depth }}
                                    initial={false}
                                    animate={
                                        isLeaving
                                            ? 'leaving'
                                            : isSpread
                                              ? 'spread'
                                              : 'rest'
                                    }
                                    variants={{
                                        leaving: {
                                            x: 28,
                                            y: -3,
                                            rotate: 5,
                                            scale: 1.015,
                                            opacity: 1,
                                        },
                                        spread: {
                                            ...spreadPositions[depth],
                                            scale: 1,
                                            opacity: 1,
                                        },
                                        rest: {
                                            ...restingPositions[depth],
                                            scale: 1,
                                            opacity: 1,
                                        },
                                    }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: isLeaving ? 600 : 320,
                                        damping: isLeaving ? 34 : 22,
                                        mass: isLeaving ? 0.55 : 0.8,
                                        bounce: isLeaving ? 0.05 : 0.12,
                                        delay: isLeaving
                                            ? 0
                                            : isSpread
                                              ? depth * 0.025
                                              : (2 - depth) * 0.018,
                                    }}
                                    onAnimationComplete={(definition) => {
                                        if (definition === 'leaving') {
                                            finishCycle(card);
                                        }
                                    }}
                                >
                                    <span className="photo-stack-image-wrap">
                                        <Image
                                            src={photos[card.photo].src}
                                            alt=""
                                            fill
                                            draggable={false}
                                            quality={100}
                                            sizes={
                                                depth === 0
                                                    ? '(min-width: 768px) 480px, 0px'
                                                    : '(min-width: 768px) 240px, 0px'
                                            }
                                            className="photo-stack-image"
                                        />
                                        <span className="photo-stack-image-shade" />
                                    </span>
                                </m.span>
                            );
                        })}
                    </m.span>
                </button>
            </MotionConfig>
        </LazyMotion>
    );
}
