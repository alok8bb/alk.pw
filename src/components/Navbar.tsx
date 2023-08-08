import { useAtom } from "jotai";
import { themeAtom } from "../utils/theme";
import { Sun, Moon } from "./Icons";

export const NavBar = () => {
    const [theme, setTheme] = useAtom(themeAtom);
    return (
        <header className="z-40 flex w-full justify-between gap-2 md:flex-row md:justify-between">
            <a className="hover:text-neutral-100" href="mailto:alok@alk.pw">
                alok@alk.pw
            </a>
            <nav role="navigation">
                <ul className="flex flex-row gap-2" role="list">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/posts">Posts</a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="/about">About</a>
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
