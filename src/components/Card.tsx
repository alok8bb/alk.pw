import { css } from "@emotion/css";

export interface ProjectProps {
    name: string;
    link: string;
    description: string;
    tags: string[];
}

export const Card: React.FC<ProjectProps> = ({
    name,
    link,
    description,
    tags,
}) => {
    return (
        <div
            className={css`
                width: 230px;
                height: 120px;
                background-color: #121212;
                margin: 10px;
                margin-top: 20px;
                padding: 20px;
                display: flex;
                border-radius: 10px;

                @media only screen and (max-width: 470px) {
                    width: auto;
                }

                &:hover {
                    background-color: #1e1e1e;
                }
            `}
        >
            <a
                href={link}
                target="_blank"
                className={css`
                    display: block;
                    width: 100%;
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    flex-direction: column;
                `}
            >
                <h3
                    className={css`
                        color: #e9f8f9;
                    `}
                >
                    {name}
                </h3>
                <p
                    className={css`
                        font-size: 1rem;
                        color: #ffffffbe;
                    `}
                >
                    {description}
                </p>
                <div
                    className={css`
                        justify-self: end;
                        display: flex;
                        gap: 10px;
                        margin-top: auto;
                        align-self: flex-end;
                    `}
                >
                    {tags.map((tag) => {
                        return (
                            <p
                                className={css`
                                    font-size: 0.8rem;
                                    color: #ffffffb6;
                                `}
                            >
                                #{tag}
                            </p>
                        );
                    })}
                </div>
            </a>
        </div>
    );
};
