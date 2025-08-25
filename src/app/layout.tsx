import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Alok',
    description: 'Personal website of Alok',
    openGraph: {
        title: 'Alok',
        images: [
            {
                url: '/og_image.svg',
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
        title: 'Alok',
        images: ['/og_image.svg'],
        site: '@alok8bb',
        creator: '@alok8bb',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`${inter.className} ${geistMono.variable} h-full antialiased`}
            >
                <div className="mx-auto flex min-h-screen max-w-3xl flex-col bg-background px-4 py-8">
                    {children}
                </div>
            </body>
        </html>
    );
}
