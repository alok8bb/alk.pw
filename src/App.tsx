import { useEffect } from "react";
import "./App.css";
import { NavBar } from "./components/Navbar";
import { ContactPage } from "./components/pages/contact";
import { HomePage } from "./components/pages/home";
import { ProjectsPage } from "./components/pages/projects";
import { css } from "@emotion/css";

let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            document
                .getElementById("nav-" + entry.target.id)
                ?.classList.toggle("selected", entry.isIntersecting);
        });
    },
    {
        threshold: 0.7,
        rootMargin: "0px",
        root: null,
    }
);

function App() {
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        sections.forEach((section) => {
            observer.observe(section);
        }, []);
    });

    return (
        <>
            <NavBar />
            <div
                className={css`
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                `}
            >
                <HomePage />
                <ProjectsPage />
                <ContactPage />
            </div>
        </>
    );
}

export default App;
