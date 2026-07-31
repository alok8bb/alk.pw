'use client';

import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

function getCurrentTheme(): Theme {
    return document.documentElement.dataset.theme === 'light'
        ? 'light'
        : 'dark';
}

export default function ThemeToggle() {
    function toggleTheme() {
        const next = getCurrentTheme() === 'dark' ? 'light' : 'dark';

        document.documentElement.dataset.theme = next;

        try {
            window.localStorage.setItem('theme', next);
        } catch {}
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            title="Toggle color theme"
            className="theme-toggle text-muted hover:text-accent focus-visible:outline-accent inline-flex h-10 w-10 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2"
        >
            <Moon
                aria-hidden="true"
                className="theme-icon-moon h-4 w-4"
                strokeWidth={1.75}
            />
            <Sun
                aria-hidden="true"
                className="theme-icon-sun h-4 w-4"
                strokeWidth={1.75}
            />
        </button>
    );
}
