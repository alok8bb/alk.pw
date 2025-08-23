'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Component() {
    const getAge = () => {
        const birthDate = new Date(2004, 10, 25);
        const today = new Date();
        const diffTime = today.getTime() - birthDate.getTime();
        const age = diffTime / (1000 * 60 * 60 * 24 * 365.25);
        return age.toFixed(1);
    };

    return (
        <div className="mx-auto flex min-h-screen max-w-3xl flex-col overflow-hidden bg-background px-4 py-8">
            <Navbar />
            <main className="flex flex-1 flex-col gap-10">
                <section className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold text-white">
                        Alok Pawar
                    </h1>
                    <p className="text-gray">
                        {getAge()} y.o self-taught software engineer and computer
                        science student interested in blockchain and future of
                        finance/engineering.
                    </p>
                    <span className="font-semibold">open to work</span>

                    <div className="flex gap-8">
                        <p>email</p>
                        <p>twitter(x)</p>
                        <p>github</p>
                        <p>telegram</p>
                    </div>
                </section>

                <section className="text-md flex flex-col gap-3">
                    <h1 className="font-semibold">projects</h1>
                    <div className="ml-8 flex flex-col gap-2 text-gray">
                        <div>
                            <p className="text-white">cloneit</p>
                            <span>
                                a cli tool to download specific github files and
                                directories
                            </span>
                        </div>

                        <div>
                            <p className="text-white">payra</p>
                            <span>
                                solana program that enables small groups to
                                split expenses and manage shared funds
                            </span>
                        </div>

                        <div>
                            <p className="text-white">blockback</p>
                            <span>
                                crowdfunding dapp with solidity and reactjs
                            </span>
                        </div>
                    </div>
                </section>

                {/* <section className="flex flex-col gap-3">
                    <h1 className="text-md font-semibold">communities</h1>
                    <div className="text-gray">
                        <p>member @ superteamin</p>
                        <p>member @ athenfoss</p>
                        <p>builder grad @ solana-turbin3</p>
                    </div>
                </section> */}

                <section className="flex flex-col gap-3">
                    <h1 className="text-md font-semibold">experience</h1>
                    <div className="ml-8 flex flex-col gap-2 text-gray">
                        <div className="flex">
                            <div className="w-1/2">
                                <p className="text-white">paystream finance</p>
                                <span>full-stack developer</span>
                            </div>
                            <div className="w-1/2 text-sm">
                                <span>Mar 2024 - Aug 2025</span>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/2">
                                <p className="text-white">humAIn</p>
                                <span>software developer</span>
                            </div>
                            <div className="w-1/2 text-sm">
                                <span>Oct 2024 - Feb 2025</span>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/2">
                                <p className="text-white">freelance engineer</p>
                                <span>full-stack, blockchain, bots</span>
                            </div>
                            <div className="w-1/2 text-sm">
                                <span>2022 - 2024</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
