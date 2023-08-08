export const PostCard = () => {
    return (
        <a className="flex md:w-1/2 flex-col gap-2 rounded-md border border-zinc-400 dark:border-zinc-700 p-4 cursor-pointer transition-all hover:-translate-y-2">
            <div className="flex flex-row justify-between gap-2 text-zinc-900 dark:text-zinc-100">
                <h5 className="truncate text-lg">
                    Dual booting Windows with Arch linux with this thing
                </h5>
                <p>10/07/2023</p>
            </div>
            <p className="line-clamp-3 text-zinc-800 dark:text-zinc-300 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                labore eum optio iste asperiores doloribus animi a sit facere
            </p>
        </a>
    );
};

export const ProjectCard = () => {
    return (
        <a className="flex w-1/2 flex-col gap-2 rounded-md border p-4 cursor-pointer transition-all hover:-translate-y-2">
            <div className="flex flex-row justify-between gap-2"></div>
        </a>
    );
};
