import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const setup = [
    {
        label: 'Main laptop',
        details: 'MacBook Pro 16″ · 24 GB RAM · 1 TB SSD',
    },
    {
        label: 'Desktop',
        details:
            'AMD Radeon RX 6750 XT · MSI Pro A620M-E · 32 GB (16×2) DDR5 6000 MHz',
    },
    {
        label: 'Peripherals',
        details: 'Logitech G304 mouse · ND75 keyboard',
    },
] as const;

export default function More() {
    return (
        <>
            <Navbar />
            <main className="flex-1">
                <section className="mb-12">
                    <h1 className="hero-name text-foreground text-5xl leading-none">
                        More
                    </h1>
                    <p className="text-muted mt-2 text-sm leading-6">
                        A few things beyond work.
                    </p>
                </section>

                <div>
                    <section className="text-muted space-y-4 text-sm leading-7">
                        <p>
                            I started learning coding in March 2020. Around the
                            same time I tried installing Ubuntu, failed, and
                            that&apos;s how I got into Linux. I picked up C++,
                            then Python, then moved on to Android development
                            and tried a lot of other technologies.
                        </p>
                        <p>
                            What started as just experimenting slowly turned
                            into something I wanted to do seriously. Linux and
                            open-source became a big part of my life, and later
                            I got into blockchain and crypto. Been enjoying it
                            since.
                        </p>
                        <p>
                            Outside of that, I like city skylines (Hong Kong is
                            a favorite), Formula 1, anime and sci-fi movies.
                        </p>
                    </section>

                    <section className="mt-12">
                        <header className="mb-2 flex min-h-11 items-center">
                            <h2 className="section-heading text-foreground text-sm leading-5">
                                Setup
                            </h2>
                        </header>

                        <div className="space-y-4">
                            {setup.map((item) => (
                                <article key={item.label} className="py-2">
                                    <h3 className="text-foreground text-[0.95rem] leading-6 font-semibold">
                                        {item.label}
                                    </h3>
                                    <p className="text-muted mt-1 text-sm leading-6">
                                        {item.details}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <p className="text-subtle mt-12 text-xs leading-6">
                        I&apos;ll add more stuff later! gn
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
