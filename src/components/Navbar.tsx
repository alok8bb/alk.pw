export const NavBar = () => {
    return (
        <header className="z-40 flex w-full flex-col gap-2 md:flex-row md:justify-between">
            <a className="hover:text-neutral-100" href="mailto:alok@alk.pw">
                alok@alk.pw
            </a>
            <nav role="navigation">
                <ul className="flex flex-row gap-2" role="list">
                    <li>
                        <a
                            className="hover:text-neutral-100 text-netural-100"
                            href="/"
                        >
                            Home
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a
                            className="hover:text-neutral-100 text-netural-100"
                            href="/posts"
                        >
                            Posts
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a
                            className="hover:text-neutral-100 text-netural-100"
                            href="/projects"
                        >
                            Projects
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
