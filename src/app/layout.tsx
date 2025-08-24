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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <head>
                <meta name="title" content="Alok" />
                <meta name="description" content="Programmer, Web & Web3" />
                <meta name="author" content="Alok" />
                <meta property="og:title" content="Alok" />
                <meta
                    property="og:description"
                    content="Programmer, Web & Web3"
                />
                <meta property="og:image" content="https://alk.pw/og.svg" />
                <meta property="og:url" content="https://alk.pw" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="alk.pw" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Alok" />
                <meta
                    name="twitter:description"
                    content="Programmer, Web & Web3"
                />
                <meta name="twitter:image" content="https://alk.pw/og.svg" />
                <meta name="twitter:site" content="@alok8bb" />
            </head>
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
