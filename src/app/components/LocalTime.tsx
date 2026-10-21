'use client';

import { useEffect, useState } from 'react';

function getHyderabadTime() {
    return new Date()
        .toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        })
        .toLowerCase();
}

export default function LocalTime() {
    const [currentTime, setCurrentTime] = useState<string | null>(null);

    useEffect(() => {
        const updateTime = () => setCurrentTime(getHyderabadTime());

        updateTime();
        const interval = window.setInterval(updateTime, 60_000);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <p className="text-subtle text-center text-xs tabular-nums sm:min-w-44 sm:text-left">
            <time>{currentTime ?? '--:-- --'}</time> · Hyderabad, India
        </p>
    );
}
