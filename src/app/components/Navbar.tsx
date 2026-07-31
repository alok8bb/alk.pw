'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/more', label: 'More' },
] as const;

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="mb-16 flex min-h-10 items-center justify-end">
            <nav aria-label="Primary navigation">
                <ul className="flex items-center gap-2 sm:gap-4">
                    {links.map((link) => {
                        const isActive =
                            link.href === '/'
                                ? pathname === '/'
                                : pathname.startsWith(link.href);

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`focus-visible:outline-accent inline-flex min-h-10 items-center px-1 text-sm transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${
                                        isActive
                                            ? 'text-foreground decoration-outline underline underline-offset-4'
                                            : 'text-muted hover:text-foreground'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
