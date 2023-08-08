import { WritableAtom, atom } from "jotai";

function changeTheme(theme: Theme) {
    if (theme == "light") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

function getSavedTheme(): Theme {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        return "dark";
    } else {
        return "light";
    }
}

export type Theme = "light" | "dark";

export const baseThemeAtom = atom(getSavedTheme() || "light");
export const themeAtom: WritableAtom<Theme, [Theme], void> = atom(
    (get) => get(baseThemeAtom),
    (get, set, value) => {
        set(baseThemeAtom, value);
        localStorage.setItem("theme", value);
        changeTheme(get(baseThemeAtom));
    }
);
