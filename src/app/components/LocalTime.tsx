'use client';

import { useEffect, useState } from 'react';

function getBhopalTime() {
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
        const updateTime = () => setCurrentTime(getBhopalTime());

        updateTime();
        const interval = window.setInterval(updateTime, 60_000);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <p className="text-subtle min-w-44 text-xs tabular-nums">
            <time>{currentTime ?? '--:-- --'}</time> · Bhopal, India
        </p>
    );
}
