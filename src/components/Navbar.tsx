import { css } from "@emotion/css";

interface NavListProps {
    link: string;
    title: string;
}

const NavList: React.FC<NavListProps> = ({ link, title }) => {
    return (
        <li>
            <a href={link}>{title}</a>
        </li>
    );
};

export const NavBar = () => {
    return (
        <ul
            className={css`
                height: 50px;
            `}
        >
            <NavList link="https://google.com" title="Home" />
            <NavList link="https://google.com" title="Contacts" />
            <NavList link="https://google.com" title="About" />
        </ul>
    );
};
