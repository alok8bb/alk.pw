import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function More() {
    return (
        <>
            <Navbar />
            <main className="flex-1">
                <div className="flex flex-col gap-2 text-white">
                    <img
                        src="/hkg-night-sky.jpg"
                        alt="hkg-night-sky"
                        className="h-80 w-full object-cover"
                    />
                    <p>
                        I started learning coding in March 2020. Around the same
                        time I tried installing ubuntu, failed and that's how I
                        got into Linux. I picked up C++, then Python then moved
                        on to Android development and tried a lot of other technologies.
                    </p>
                    <p>
                        What started as just experimenting slowly turned into
                        something I wanted to do seriously. Linux and
                        open-source became a big part of my life, and later I
                        got into blockchain and crypto. Been enjoying it since.
                    </p>
                    <p>
                        Outside of that, I like city skylines (Hong Kong is a
                        favorite), Formula 1, anime and sci-fi movies.
                    </p>
                    <p>Here's what I use:</p>
                    <div>
                        <div className="space-y-2">
                            <div>
                                <h2 className="text-md font-semibold">
                                    main laptop
                                </h2>
                                <ul className="list-inside list-disc">
                                    <li>MacBook Pro 16"</li>
                                    <li>24 GB RAM</li>
                                    <li>1 TB SSD</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-md font-semibold">pc</h2>
                                <ul className="list-inside list-disc">
                                    <li>GPU: AMD Radeon RX 6750 XT</li>
                                    <li>Motherboard: MSI Pro A620M-E</li>
                                    <li>RAM: 32 GB (16×2) DDR5 6000 MHz</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-md font-semibold">
                                    others
                                </h2>
                                <ul className="list-inside list-disc">
                                    <li>Mouse: Logitech G304</li>
                                    <li>Keyboard: ND75</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <p>I'll add more stuff later! gn</p>
                </div>
            </main>
            <Footer />
        </>
    );
}
