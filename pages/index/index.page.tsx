import { PostCard, ProjectCard } from "../../components/Card";
import { NavBar } from "../../components/Navbar";
import { SectionHeader } from "../../components/Section";
import { SocialLinks } from "../../components/SocialLinks";

export { Page };

const Page = () => {
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

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </section>

                <footer className="flex gap-6 flex-col">
                    <hr className="border-dashed border-zinc-800 dark:border-zinc-400"></hr>
                    <div className="flex flex-row justify-between">
                        <p>© 2023 by Alok Pawar</p>
                        <a href="">Updated on 20 Aug 2023</a>
                    </div>
                </footer>
            </div>
        </>
    );
};
