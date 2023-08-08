import { Route } from "wouter";
import { Home } from "./pages/Home";
import { Posts } from "./pages/Posts";
import { useAtom } from "jotai";
import { themeAtom } from "./utils/theme";
import { useEffect } from "react";

function App() {
    const [theme, setTheme] = useAtom(themeAtom);
    useEffect(() => {
        setTheme(theme);
    }, []);

    return (
        <div className="mx-auto flex flex-col min-h-screen max-w-[872px] gap-9 p-4 md:gap-20 md:py-16 ">
            <Route path="/" component={Home} />
            <Route path="/posts" component={Posts} />
        </div>
    );
}

export default App;
