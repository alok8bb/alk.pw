import type { Metadata } from 'next';
import { Instrument_Serif, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const instrumentSerif = Instrument_Serif({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-instrument-serif',
    display: 'swap',
});

const fontVariables = [inter.variable, instrumentSerif.variable].join(' ');

export const metadata: Metadata = {
    metadataBase: new URL('https://alk.pw'),
    title: 'Alok Pawar — Software Engineer',
    description:
        'Software engineer working across web, mobile, and blockchain systems.',
    openGraph: {
        title: 'Alok Pawar — Software Engineer',
        description:
            'Software engineer working across web, mobile, and blockchain systems.',
        images: [
            {
                url: '/og_image.png',
                width: 1200,
                height: 630,
                alt: 'Alok Pawar',
            },
        ],
        url: 'https://alk.pw',
        type: 'website',
        siteName: 'alk.pw',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Alok Pawar — Software Engineer',
        description:
            'Software engineer working across web, mobile, and blockchain systems.',
        images: ['/og_image.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="h-full"
            data-theme="dark"
            suppressHydrationWarning
        >
            <head>
                <Script id="theme-init" strategy="beforeInteractive">
                    {`let theme;
                    try {
                        theme = localStorage.getItem('theme');
                    } catch {}
                    if (theme === 'light' || theme === 'dark') {
                        document.documentElement.dataset.theme = theme;
                    }`}
                </Script>
            </head>
            <body className={`${fontVariables} h-full antialiased`}>
                <div className="mx-auto flex min-h-screen max-w-[50rem] flex-col px-6 py-12 sm:py-16">
                    {children}
                </div>
                <Script
                    id="plausible-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`,
                    }}
                />
                <Script
                    data-domain="alk.pw"
                    strategy="lazyOnload"
                    src="https://analytics.alk.pw/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
                />
            </body>
        </html>
    );
}
