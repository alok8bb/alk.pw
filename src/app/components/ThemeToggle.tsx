'use client';

import { Moon, Sun } from 'lucide-react';
import type { MouseEvent, PointerEvent } from 'react';

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

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        // Pointer input is handled on pointerup for reliable tablet taps.
        // Keyboard and assistive-technology clicks report detail === 0.
        if (event.detail === 0) toggleTheme();
    }

    function handlePointerUp(event: PointerEvent<HTMLButtonElement>) {
        if (event.button === 0) toggleTheme();
    }

    return (
        <button
            type="button"
            onPointerUp={handlePointerUp}
            onClick={handleClick}
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
