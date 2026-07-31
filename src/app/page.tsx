import type { ReactNode } from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/api';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { experiences } from './data/experience';
import { projects } from './data/projects';

const monthYearFormatter = new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
});

const shortMonthYearFormatter = new Intl.DateTimeFormat('en', {
    month: 'short',
    year: '2-digit',
    timeZone: 'UTC',
});

function formatMonthYear(value: string) {
    if (value === 'present') return 'Present';
    if (/^\d{4}$/.test(value)) return value;

    return monthYearFormatter.format(new Date(`${value}-01T00:00:00Z`));
}

function formatShortMonthYear(value: string) {
    if (value === 'present') return 'Present';
    if (/^\d{4}$/.test(value)) return value;

    const [month, year] = shortMonthYearFormatter
        .format(new Date(`${value}-01T00:00:00Z`))
        .split(' ');

    return `${month} '${year}`;
}

function formatPostDate(value: string) {
    return monthYearFormatter.format(new Date(`${value}T00:00:00Z`));
}

function SectionHeader({
    children,
    action,
}: {
    children: ReactNode;
    action?: ReactNode;
}) {
    return (
        <header className="mb-2 flex min-h-11 items-center">
            <h2 className="text-foreground flex-1 text-xs font-semibold tracking-[0.18em] uppercase">
                {children}
            </h2>
            {action}
        </header>
    );
}

const metaColumnClasses =
    'text-subtle/80 shrink-0 pt-1 text-right text-xs tabular-nums';

export default async function Home() {
    const posts = await getAllPosts();
    const featuredProjects = projects.filter((project) => project.featured);
    const featuredNotes = posts
        .filter((post) => post.category.toLowerCase() === 'tech')
        .slice(0, 3);

    return (
        <>
            <Navbar />

            <main>
                <section className="mb-20">
                    <h1 className="text-foreground text-4xl leading-tight font-bold">
                        Alok Pawar
                    </h1>
                    <p className="text-muted mt-2 text-sm leading-6">
                        <span className="text-foreground font-bold">
                            Developer
                        </span>
                        . Bhopal, IN 🇮🇳
                    </p>

                    <div className="text-muted mt-6 max-w-[35rem] space-y-4 text-sm leading-7">
                        <p>
                            I'm a developer with over 4 years of experience
                            building software for web, android and blockchain. I
                            have worked with Go, Rust, Python, TypeScript and
                            various languages and frameworks.
                        </p>
                        <p>
                            I have also spent a lot of time tinkering with linux
                            back in the day. Currently finance, blockchains and
                            consumer applications excite me the most.
                        </p>
                        <p>
                            You can reach me by{' '}
                            <a
                                href="mailto:alok8bb@gmail.com"
                                className="text-foreground decoration-outline hover:text-accent hover:decoration-accent focus-visible:outline-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
                                Email
                            </a>{' '}
                            or find me on{' '}
                            <a
                                href="https://t.me/broken_vortex"
                                target="_blank"
                                rel="noreferrer"
                                className="text-foreground decoration-outline hover:text-accent hover:decoration-accent focus-visible:outline-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
                                Telegram
                            </a>
                            .
                        </p>
                    </div>
                </section>

                <section id="writing" className="mb-20 scroll-mt-8">
                    <SectionHeader
                        action={
                            <Link
                                href="/blog"
                                className="text-muted decoration-outline hover:text-accent hover:decoration-accent focus-visible:outline-accent inline-flex min-h-10 items-center text-xs underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
                                All posts
                            </Link>
                        }
                    >
                        Writing
                    </SectionHeader>

                    <div className="mt-1 space-y-4">
                        {featuredNotes.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.id}`}
                                className="group focus-visible:outline-accent flex gap-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 sm:gap-6"
                            >
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-foreground group-hover:text-accent group-hover:decoration-accent w-fit text-[0.95rem] leading-6 font-semibold underline decoration-transparent underline-offset-4 transition-colors duration-100 motion-reduce:transition-none">
                                        {post.title}
                                    </h3>
                                    {post.description ? (
                                        <p className="text-muted mt-1 max-w-[29rem] text-sm leading-6">
                                            {post.description}
                                        </p>
                                    ) : null}
                                </div>
                                <span className={metaColumnClasses}>
                                    {formatPostDate(post.pubDate)}
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section id="experience" className="mb-20 scroll-mt-8">
                    <SectionHeader>Experience</SectionHeader>

                    <div className="mt-1 space-y-5">
                        {experiences.map((experience) => (
                            <article
                                key={`${experience.company}-${experience.position}`}
                                className="flex gap-4 py-2 sm:gap-6"
                            >
                                <div className="min-w-0 flex-1">
                                    <h3 className="text-foreground text-[0.95rem] leading-6 font-semibold">
                                        {experience.position}{' '}
                                        <span className="text-muted font-normal">
                                            at{' '}
                                            {experience.link ? (
                                                <a
                                                    href={experience.link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="decoration-outline hover:text-accent hover:decoration-accent focus-visible:outline-accent ml-1 inline-flex items-center gap-1.5 align-middle underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                                                >
                                                    {experience.company ===
                                                    'Paystream Finance' ? (
                                                        <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded-[5px] align-middle">
                                                            <img
                                                                src="/logo/paystream.jpg"
                                                                alt=""
                                                                width={16}
                                                                height={16}
                                                                className="block h-full w-full object-cover"
                                                            />
                                                        </span>
                                                    ) : null}
                                                    <span>
                                                        {experience.company}
                                                    </span>
                                                </a>
                                            ) : (
                                                experience.company
                                            )}
                                        </span>
                                    </h3>
                                    <p className="text-muted mt-2 max-w-[35rem] text-sm leading-6">
                                        {experience.description}
                                    </p>
                                </div>
                                <p
                                    className={`${metaColumnClasses} whitespace-nowrap`}
                                >
                                    {formatShortMonthYear(
                                        experience.startDate
                                    )}{' '}
                                    -{' '}
                                    {formatShortMonthYear(experience.endDate)}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="work" className="mb-20 scroll-mt-8">
                    <SectionHeader
                        action={
                            <a
                                href="https://github.com/alok8bb?tab=repositories"
                                target="_blank"
                                rel="noreferrer"
                                className="text-muted decoration-outline hover:text-accent hover:decoration-accent focus-visible:outline-accent inline-flex min-h-10 items-center text-xs underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                            >
                                More projects
                            </a>
                        }
                    >
                        Selected work
                    </SectionHeader>

                    <div className="mt-1 space-y-4">
                        {featuredProjects.map((project) => (
                            <article
                                key={project.title}
                                className="flex gap-4 py-2 sm:gap-6"
                            >
                                <div className="min-w-0 flex-1">
                                    <a
                                        href={project.live ?? project.source}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-foreground hover:text-accent hover:decoration-accent focus-visible:outline-accent w-fit text-[0.95rem] leading-6 font-semibold underline decoration-transparent underline-offset-4 transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
                                    >
                                        {project.title}
                                    </a>
                                    <p className="text-muted mt-1 max-w-[31rem] text-sm leading-6">
                                        {project.description}
                                    </p>
                                </div>
                                <span className={metaColumnClasses}>
                                    {project.year}
                                </span>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
