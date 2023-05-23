import { Card, ProjectProps } from "../Card";
import { PageContainer } from "./container";
import { css } from "@emotion/css";

let projects: ProjectProps[] = [
    {
        name: "cloneit",
        link: "https://github.com/alok8bb/cloneit",
        description: "a cli tool to download specific GitHub directories",
        tags: ["rust", "cli"],
    },
    {
        name: "okiba",
        link: "https://github.com/okiba-org",
        description: "a minimal pastebin",
        tags: ["react.js", "node"],
    },
    {
        name: "tg-weather",
        link: "https://github.com/alok8bb/tg-weather",
        description: "inline weather bot for telegram",
        tags: ["node", "telegram"],
    },
    {
        name: "dummy",
        link: "https://dummy",
        description: "dummy",
        tags: ["node", "telegram"],
    },
    {
        name: "dummy",
        link: "https://dummy",
        description: "dummy",
        tags: ["node", "telegram"],
    },
    {
        name: "dummy",
        link: "https://dummy",
        description: "dummy",
        tags: ["node", "telegram"],
    },
];

export const ProjectsPage = () => {
    return (
        <PageContainer id="projects">
            <h1
                className={css`
                    visibility: hidden;
                    margin: 10px;
                    font-weight: bold;
                    font-size: 2rem;
                    @media screen and (max-width: 470px) {
                        visibility: visible;
                    }
                `}
            >
                Personal Projects
            </h1>
            <div
                className={css`
                    display: grid;
                    width: 100%;
                    grid-template-columns: repeat(3, 1fr);

                    @media only screen and (max-width: 470px) {
                        max-height: 60%;
                        overflow-x: scroll;
                        grid-template-columns: 1fr;
                    }
                `}
            >
                {projects.map((project) => {
                    return (
                        <Card
                            name={project.name}
                            link={project.link}
                            description={project.description}
                            tags={project.tags}
                        />
                    );
                })}
            </div>
        </PageContainer>
    );
};
