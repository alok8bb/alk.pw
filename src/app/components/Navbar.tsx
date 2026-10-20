'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const links = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/more', label: 'More' },
] as const;

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="mb-16 flex min-h-10 items-center justify-end gap-2">
            <nav
                aria-label="Primary navigation"
                className="border-outline bg-surface-low rounded-full border p-1"
            >
                <ul className="flex items-center gap-0.5">
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
                                    className={`focus-visible:outline-accent inline-flex min-h-8 items-center rounded-full px-3 text-xs font-medium transition-colors duration-100 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${
                                        isActive
                                            ? 'bg-foreground text-background'
                                            : 'text-muted hover:bg-surface-high hover:text-foreground'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <ThemeToggle />
        </header>
    );
}
