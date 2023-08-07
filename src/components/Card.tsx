export const PostCard = () => {
    return (
        <a className="flex w-1/2 flex-col gap-2 rounded-md border p-4 cursor-pointer transition-all hover:-translate-y-2">
            <div className="flex flex-row justify-between gap-2">
                <p className="truncate">
                    Dual booting Windows with Arch linux with this thing
                </p>
                <p>10/07/2023</p>
            </div>
            <p className="truncate">
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
