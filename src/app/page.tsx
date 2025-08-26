'use client';

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { projects } from './data/projects';
import { experiences } from './data/experience';

export default function Component() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [hoveredExperience, setHoveredExperience] = useState<string | null>(null);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    const socialLinks = [
        { name: 'email', href: 'mailto:alok8bb@gmail.com' },
        { name: 'twitter', href: 'https://x.com/alok8bb' },
        { name: 'github', href: 'https://github.com/alok8bb' },
        { name: 'telegram', href: 'https://t.me/broken_vortex' },
    ];

    const getAge = () => {
        const birthDate = new Date(2004, 10, 25);
        const today = new Date();
        const diffTime = today.getTime() - birthDate.getTime();
        const age = diffTime / (1000 * 60 * 60 * 24 * 365.25);
        return age.toFixed(1);
    };

    return (
        <>
            <Navbar />
            <main className="flex flex-1 flex-col gap-10">
                <section className="flex flex-col gap-4">
                    <h1 className="text-3xl font-semibold text-white">
                        Alok Pawar
                    </h1>
                    <p className="text-gray">
                        {getAge()} y.o self-taught software engineer and
                        computer science student interested in blockchain and
                        future of finance/engineering.
                    </p>
                    <span className="font-semibold">open to work</span>

                    <div 
                        className="flex gap-8 text-gray"
                        onMouseLeave={() => setHoveredLink(null)}
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                className={`transition-all duration-300 hover:cursor-pointer hover:text-white ${
                                    hoveredLink && hoveredLink !== link.name 
                                        ? 'opacity-30' 
                                        : 'opacity-100'
                                }`}
                                href={link.href}
                                target="_blank"
                                onMouseEnter={() => setHoveredLink(link.name)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </section>

                <section className="text-md flex flex-col gap-3">
                    <h1 className="font-semibold">projects</h1>
                    <div 
                        className="ml-8 flex flex-col gap-2 text-gray"
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                        {projects.map((project) => (
                            <a 
                                key={project.title}
                                href={project.source} 
                                target="_blank"
                                className={`transition-opacity duration-300 ${
                                    hoveredProject && hoveredProject !== project.title 
                                        ? 'opacity-30' 
                                        : 'opacity-100'
                                }`}
                                onMouseEnter={() => setHoveredProject(project.title)}
                            >
                                <p className="text-white">
                                    {project.title.toLowerCase()}
                                </p>
                                <span>{project.description.toLowerCase()}</span>
                            </a>
                        ))}
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
                    <div 
                        className="ml-8 flex flex-col gap-2 text-gray"
                        onMouseLeave={() => setHoveredExperience(null)}
                    >
                        {experiences.map((experience) => (
                            <div 
                                key={experience.company}
                                className={`flex transition-opacity duration-300 ${
                                    hoveredExperience && hoveredExperience !== experience.company 
                                        ? 'opacity-30' 
                                        : 'opacity-100'
                                }`}
                                onMouseEnter={() => setHoveredExperience(experience.company)}
                            >
                                <div className="w-1/2 flex flex-col">
                                    {experience.link ? (
                                        <a
                                            className="text-white hover:cursor-pointer"
                                            href={experience.link}
                                            target="_blank"
                                        >
                                            {experience.company}
                                        </a>
                                    ) : (
                                        <p className="text-white">{experience.company}</p>
                                    )}
                                    <span>{experience.position}</span>
                                </div>
                                <div className="w-1/2 text-sm">
                                    <span>{experience.period}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
