'use client';

import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date());
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer>
            <span className='text-gray text-sm'>{currentTime?.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            }).toUpperCase()}</span>
        </footer>
    );
};

export default Footer;
