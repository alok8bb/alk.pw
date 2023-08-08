import { PostCard } from "../components/Card";
import { NavBar } from "../components/Navbar";
import { SectionHeader } from "../components/Section";
import { SocialLinks } from "../components/SocialLinks";

export const Home = () => {
    return (
        <>
            <NavBar />
            <div className="flex flex-col gap-16 md:gap-20">
                <article className="flex flex-col gap-8">
                    <h1 className="text-5xl font-bold tracking-wide">
                        Alok Pawar
                    </h1>
                    <h2 className="max-w-[70ch] leading-6 text-zinc-800 dark:text-zinc-400">
                        Hey there! I'm an 18 y.o Computer Science Student from
                        India. I am a passionate programmer and tech-enthusiast
                        interested in networking, low-level and systems
                        programming.
                    </h2>
                    <SocialLinks />
                </article>
                <section className="flex flex-col gap-8">
                    <SectionHeader title="Latest Posts" button_link="/posts" />
                    <div className="flex flex-col gap-4 md:flex-row w-full">
                        <PostCard />
                        <PostCard />
                    </div>
                </section>
                <section className="flex flex-col gap-8">
                    <SectionHeader
                        title="Highlighted Projects"
                        button_link="https://github.com/alok8bb"
                    />
                    <div className="flex flex-col gap-2 md:flex-row w-full"></div>
                </section>
            </div>
        </>
    );
};
