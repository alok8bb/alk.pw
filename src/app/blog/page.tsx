import Chip from '../components/Chip';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="flex flex-1 flex-col gap-6">
                {/* Header */}
                <section className="flex flex-col gap-2">
                    <div>
                        <h1 className="text-2xl font-semibold text-white">Brokenstack</h1>
                        <p className='text-gray'>blog & notes by alok</p>
                    </div>
                </section>

                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <Chip isActive={true}>all</Chip>
                        <Chip isActive={false}>general</Chip>
                        <Chip isActive={false}>life</Chip>
                    </div>
                    <div>
                        <div className="relative w-full sm:w-72">
                            <input
                                placeholder="Search"
                                aria-label="Search posts"
                                className="w-full rounded-md border bg-transparent px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-black border-gray"
                                type="text"
                                inputMode="search"
                            />
                            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border px-1 text-[10px] opacity-50">
                                /
                            </span>
                        </div>
                    </div>
                </div>

                {/* Blog List */}
                <section>
                    <div>
                        <h2 className="text-xl font-semibold">
                            Actions & Blinks on Solana
                        </h2>
                        <p className='text-md'>actions and blinks explained</p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
