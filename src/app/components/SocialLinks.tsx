'use client';

import { useEffect, useState } from 'react';

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/alok8bb',
        path: 'M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.36-3.9-1.36-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.41-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z',
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/alok8bb',
        path: 'M5.37 21.55H1.05V7.65h4.32v13.9ZM3.21 5.75A2.5 2.5 0 1 1 3.21.74a2.5 2.5 0 0 1 0 5.01Zm18.34 15.8h-4.31v-6.77c0-1.61-.03-3.69-2.25-3.69-2.25 0-2.6 1.76-2.6 3.57v6.89H8.08V7.65h4.14v1.9h.06c.57-1.09 1.98-2.25 4.08-2.25 4.37 0 5.18 2.88 5.18 6.62v7.63Z',
    },
    {
        label: 'Discord',
        href: 'https://discord.com/users/832617945535479860',
        path: 'M20.32 4.37a19.8 19.8 0 0 0-4.93-1.52 13.7 13.7 0 0 0-.63 1.29 18.4 18.4 0 0 0-5.52 0 13.4 13.4 0 0 0-.64-1.29c-1.73.3-3.39.82-4.93 1.53C.55 9.05-.29 13.61.13 18.1a19.9 19.9 0 0 0 6.04 3.05c.49-.66.92-1.36 1.29-2.1-.71-.27-1.39-.6-2.04-.98.17-.13.34-.26.5-.39a14.2 14.2 0 0 0 12.16 0c.16.13.33.27.5.39-.65.38-1.33.71-2.04.98.37.74.8 1.44 1.29 2.1a19.8 19.8 0 0 0 6.04-3.05c.49-5.2-.84-9.72-3.55-13.73ZM8.02 15.33c-1.18 0-2.15-1.08-2.15-2.41s.95-2.42 2.15-2.42c1.2 0 2.17 1.09 2.15 2.42 0 1.33-.95 2.41-2.15 2.41Zm7.96 0c-1.18 0-2.15-1.08-2.15-2.41s.95-2.42 2.15-2.42c1.2 0 2.17 1.09 2.15 2.42 0 1.33-.95 2.41-2.15 2.41Z',
    },
    {
        label: 'Telegram',
        href: 'https://t.me/broken_vortex',
        path: 'M23.9 2.18 20.28 21.2c-.27 1.34-.98 1.67-1.99 1.04l-5.51-4.06-2.66 2.56c-.29.29-.54.54-1.11.54l.4-5.62L19.63 6.4c.44-.4-.1-.62-.69-.23L6.31 14.12.87 12.42c-1.18-.37-1.2-1.18.25-1.75L22.4 2.47c.99-.36 1.85.23 1.5-.29Z',
    },
] as const;

export default function SocialLinks() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => setAnimate(true));

        return () => window.cancelAnimationFrame(frame);
    }, []);

    return (
        <span
            className="social-links"
            aria-label="Social profiles"
            data-animate={animate ? 'true' : undefined}
        >
            {socialLinks.map((social) => (
                <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="social-link"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="social-link-icon"
                    >
                        <path d={social.path} />
                    </svg>
                </a>
            ))}
        </span>
    );
}
