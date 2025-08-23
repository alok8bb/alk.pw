'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <header className="flex flex-col sm:flex-row justify-end items-center my-12">
            <div className='flex gap-4 justify-end text-gray'>
                <a 
                    className={`hover:text-white hover:cursor-pointer transition-all duration-300 ${pathname === '/' ? 'text-white' : ''}`} 
                    href="/"
                >
                    home
                </a>
                <a 
                    className={`hover:text-white hover:cursor-pointer transition-all duration-300 ${pathname === '/blog' ? 'text-white' : ''}`} 
                    href="/blog"
                >
                    blog
                </a>
                <a 
                    className={`hover:text-white hover:cursor-pointer transition-all duration-300 ${pathname === '/more' ? 'text-white' : ''}`} 
                    href="/more"
                >
                    more
                </a>
            </div>
        </header>
    );
};

export default Navbar;
