import { css } from "@emotion/css";

interface LinkProps {
    link: string;
    title: string;
    selected: boolean;
}

const StyledLink: React.FC<LinkProps> = ({ link, title, selected }) => {
    return (
        <a
            href={link}
            className={css`
                text-decoration: none;
                color: ${selected ? "#e9f8f9" : "#4f5050"};
                font-family: "Roboto Mono", monospace;
                font-weight: 550;
                letter-spacing: 1px;
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
                `}
            >
                <StyledLink link="#home" title="Home" selected={true} />
                <VerticalLine />
                <StyledLink
                    link="#projects"
                    title="Projects"
                    selected={false}
                />
                <VerticalLine />
                <StyledLink link="#contact" title="Contact" selected={false} />
            </nav>
        </div>
    );
};
