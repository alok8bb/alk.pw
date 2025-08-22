'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Component() {
    return (
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col overflow-hidden bg-background px-4 py-8">
            <Navbar />
            <main className="flex flex-1 flex-col gap-10">
                <section className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold text-white">
                        Alok Pawar
                    </h1>
                    <p className="text-gray">
                        20 y.o self-taught software engineer and computer
                        science student interested in blockchain and future of
                        finance/engineering.
                    </p>
                </section>

                <section className="text-md flex flex-col gap-3">
                    <h1 className="font-semibold">projects</h1>
                    <div className="text-gray">
                        <p>hi</p>
                        <p>hello</p>
                    </div>
                </section>

                <section className="flex flex-col gap-3">
                    <h1 className="text-md font-semibold">communities</h1>
                    <div className="text-gray">
                        <p>hi</p>
                        <p>hello</p>
                    </div>
                </section>

                <section className="flex flex-col gap-3">
                    <h1 className="text-md font-semibold">experience</h1>
                    <div className="text-gray">
                        <p>hi</p>
                        <p>hello</p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
