'use client';

import React, { useState, useEffect } from 'react';
import { experiences } from './data/experience';
import { projects } from './data/projects';

type ContributionDay = { date: string; count: number; level: number };

function SectionHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {children}
            </h2>
            <div className="mt-3 h-px bg-outline" />
        </div>
    );
}

const LEVELS = [
    'bg-white/[0.04]',
    'bg-white/[0.1]',
    'bg-white/[0.2]',
    'bg-white/[0.35]',
    'bg-white/[0.55]',
];

function CommitGrid() {
    const [weeks, setWeeks] = useState<ContributionDay[][]>([]);

    useEffect(() => {
        fetch('/api/contributions')
            .then((res) => res.json())
            .then((data: { contributions: ContributionDay[] }) => {
                const grouped: ContributionDay[][] = [];
                let week: ContributionDay[] = [];
                for (const day of data.contributions) {
                    const dow = new Date(day.date).getDay();
                    if (dow === 0 && week.length > 0) {
                        grouped.push(week);
                        week = [];
                    }
                    week.push(day);
                }
                if (week.length > 0) grouped.push(week);
                setWeeks(grouped);
            })
            .catch(() => {});
    }, []);

    if (weeks.length === 0) return null;

    return (
        <div className="grid w-full gap-[3px]" style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}>
            {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((day, di) => (
                        <div
                            key={di}
                            title={`${day.date}: ${day.count} contribution${day.count !== 1 ? 's' : ''}`}
                            className={`aspect-square w-full rounded-[2px] ${LEVELS[day.level]}`}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function Home() {
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const update = () => {
            setCurrentTime(
                new Date()
                    .toLocaleString('en-IN', {
                        timeZone: 'Asia/Kolkata',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                    })
                    .toLowerCase()
            );
        };
        update();
        const interval = setInterval(update, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Hero */}
            <section className="mt-8 mb-20">
                <h1 className="text-[2rem] font-semibold leading-tight text-white">
                    Alok Pawar
                </h1>
                <p className="mt-1.5 text-sm tracking-wide text-muted">
                    Software Engineer
                </p>

                <div className="mt-8 max-w-[540px] space-y-4 leading-[1.7] text-muted">
                    <p>
                        I am a self-taught software engineer and computer
                        science student focused on blockchain and the future of
                        finance and engineering.
                    </p>
                    <p>
                        Previously built full-stack products at{' '}
                        <a
                            href="https://paystream.finance"
                            target="_blank"
                            className="text-white"
                        >
                            Paystream Finance
                        </a>
                        . Before that, developed software at{' '}
                        <span className="text-white">株式会社HumAIn</span>,
                        working across frontend and backend systems.
                    </p>
                    <p>
                        I enjoy building highly polished, performant products
                        and exploring the intersection of decentralized systems
                        and real-world utility.
                    </p>
                    <p>
                        You can reach me at{' '}
                        <a
                            href="mailto:alok8bb@gmail.com"
                            className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white/60"
                        >
                            alok8bb@gmail.com
                        </a>{' '}
                        or on{' '}
                        <a
                            href="https://github.com/alok8bb"
                            target="_blank"
                            className="text-white underline decoration-white/30 underline-offset-2 hover:decoration-white/60"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>
            </section>

            {/* Work */}
            <section className="mb-20">
                <SectionHeader>Work</SectionHeader>
                <div className="flex flex-col">
                    {experiences.map((exp, i) => (
                        <div key={i}>
                            {/* Role row */}
                            <div className="flex items-baseline py-3">
                                <span className="w-20 shrink-0 text-sm text-muted">
                                    {i === 0 ||
                                    experiences[i - 1].year !== exp.year
                                        ? exp.year
                                        : ''}
                                </span>
                                <span className="flex-1 text-sm font-medium text-white">
                                    {exp.position}
                                </span>
                                <span className="text-sm text-muted">
                                    {exp.endDate === 'Present'
                                        ? 'Present'
                                        : exp.endDate}
                                </span>
                            </div>
                            {/* Company row */}
                            <div className="flex items-baseline pb-3">
                                <span className="w-20 shrink-0" />
                                <div className="flex-1">
                                    {exp.link ? (
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            className="text-sm text-white/70 hover:text-white"
                                        >
                                            {exp.company}
                                        </a>
                                    ) : (
                                        <span className="text-sm text-white/70">
                                            {exp.company}
                                        </span>
                                    )}
                                </div>
                                <span className="text-sm text-muted">
                                    {exp.startDate}
                                </span>
                            </div>
                            {i < experiences.length - 1 && (
                                <div className="h-px bg-outline" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="mb-20">
                <SectionHeader>Projects</SectionHeader>
                <div className="flex flex-col">
                    {projects.map((project, i) => (
                        <a
                            key={i}
                            href={project.source}
                            target="_blank"
                            className="group flex items-baseline py-3"
                        >
                            <span className="w-20 shrink-0 text-sm text-muted">
                                {i === 0 ||
                                projects[i - 1].year !== project.year
                                    ? project.year
                                    : ''}
                            </span>
                            <span className="flex-1 text-sm font-medium text-white group-hover:text-white/70">
                                {project.title}
                            </span>
                            <span className="text-sm text-muted">
                                {project.category}
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Commit Activity */}
            <section className="mb-20">
                <SectionHeader>Commit Activity</SectionHeader>
                <CommitGrid />
            </section>

            {/* Footer */}
            <footer>
                <div className="h-px bg-outline" />
                <div className="flex items-center justify-between py-6">
                    <span className="text-sm text-muted">
                        {currentTime && <>{currentTime} in Bhopal, India</>}
                    </span>
                    <div className="flex gap-5 text-sm text-muted">
                        <a
                            href="https://x.com/alok8bb"
                            target="_blank"
                            className="hover:text-white"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://github.com/alok8bb"
                            target="_blank"
                            className="hover:text-white"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://github.com/alok8bb/alk.pw"
                            target="_blank"
                            className="underline decoration-white/30 underline-offset-2 hover:text-white hover:decoration-white/60"
                        >
                            Source
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
