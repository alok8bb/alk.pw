import { useAtom } from "jotai";
import { themeAtom } from "../utils/theme";
import { Sun, Moon } from "./Icons";

export const NavBar = () => {
    const [theme, setTheme] = useAtom(themeAtom);
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
                            About
                        </a>
                    </li>
                </ul>
            </nav>
            <div
                onClick={() => {
                    setTheme(theme == "light" ? "dark" : "light");
                }}
                className="hover:cursor-pointer"
            >
                {theme == "light" ? <Sun /> : <Moon />}
            </div>
        </header>
    );
};
