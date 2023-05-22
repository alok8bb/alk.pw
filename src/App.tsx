import "./App.css";
import { NavBar } from "./components/Navbar";
import { ContactPage } from "./components/pages/contact";
import { HomePage } from "./components/pages/home";
import { ProjectsPage } from "./components/pages/projects";
import { css } from "@emotion/css";

function App() {
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
