export const PostCard = () => {
    return (
        <a className="flex md:w-1/2 flex-col gap-2 rounded-md border border-zinc-400 dark:border-zinc-700 p-4 cursor-pointer transition-all hover:-translate-y-2">
            <div className="flex flex-row justify-between gap-2 text-zinc-900 dark:text-zinc-300">
                <div>
                    <h5 className="line-clamp-2 text-base md:text-lg">
                        Dual booting Windows with Arch linux with this thing
                    </h5>
                    <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400">
                        10 Aug 2023
                    </p>
                </div>
            </div>
            <p className="line-clamp-2 text-sm md:text-base text-zinc-600 dark:text-zinc-400 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                labore eum optio iste asperiores doloribus animi a sit facere
            </p>
        </a>
    );
};

export const ProjectCard = () => {
    return (
        <a className="flex md:w-full flex-col gap-2 rounded-md border border-zinc-400 dark:border-zinc-700 p-4 transition-all hover:-translate-y-2">
            <div className="flex flex-col flex-wrap justify-between gap-2 text-zinc-900 dark:text-zinc-300">
                <div className="flex flex-row justify-between">
                    <h5 className="text-base md:text-lg font-semibold tracking-wide truncate">
                        cloneit
                    </h5>
                </div>
                <p className=" text-zinc-600 dark:text-zinc-400">
                    A cli tool to download specific GitHub directories and files
                </p>
                <div className="flex flex-row gap-3 justify-between text-zinc-600 dark:text-zinc-400 tracking-wide">
                    <div className="flex flex-row gap-3">
                        <p>#rust</p>
                        <p>#cli</p>
                    </div>
                    <div className="text-sm flex gap-3">
                        <a
                            href=""
                            className="hover:cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-200"
                        >
                            Live Demo
                        </a>
                        <a
                            href=""
                            className="hover:cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-200"
                        >
                            Source
                        </a>
                    </div>
                </div>
            </div>
        </a>
    );
};
