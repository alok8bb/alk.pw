'use client';

import React from 'react';

const Navbar = () => {
    return (
        <header className="flex flex-col sm:flex-row justify-end items-center my-12 w-full">
            <div className='flex gap-4 justify-end'>
                <button>home</button>
                <button>blog</button>
                <button>more</button>
            </div>
        </header>
    );
};

export default Navbar;
