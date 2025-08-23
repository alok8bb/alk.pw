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
        <footer className='flex justify-between items-center'>
            <span className='text-gray text-sm'>{currentTime?.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
            }).toUpperCase()}</span>

            {/* Some form of game or activity here */}
            <span className="text-md text-gray hover:scale-150 transition-all duration-200 hover:cursor-pointer">👾</span>
        </footer>
    );
};

export default Footer;
