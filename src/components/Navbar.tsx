import { css } from "@emotion/css";

interface LinkProps {
    link: string;
    title: string;
    id: string;
}

const StyledLink: React.FC<LinkProps> = ({ link, title, id }) => {
    return (
        <a
            id={id}
            href={link}
            className={css`
                text-decoration: none;
                font-family: "Roboto Mono", monospace;
                letter-spacing: 1px;
                color: #4f5050;
            `}
        >
            {title}
        </a>
    );
};

const VerticalLine = () => {
    return (
        <div
            className={css`
                height: 90px;
                border-left: 1px solid #4f5050;
            `}
        ></div>
    );
};

export const NavBar = () => {
    return (
        <div
            className={css`
                height: 100vh;
                display: flex;
                align-items: center;
                margin-left: 10%;

                @media only screen and (max-width: 480px) {
                    display: none;
                }
            `}
        >
            <nav
                className={css`
                    position: fixed;
                    display: flex;
                    flex-direction: column;
                    height: 40%;
                    justify-content: space-evenly;
                    align-items: center;

                    .selected {
                        color: #e9f8f9;
                        font-weight: bold;
                    }
                `}
            >
                <StyledLink id="nav-home" link="#home" title="Home" />
                <VerticalLine />
                <StyledLink
                    id="nav-projects"
                    link="#projects"
                    title="Projects"
                />
                <VerticalLine />
                <StyledLink id="nav-contact" link="#contact" title="Contact" />
            </nav>
        </div>
    );
};
