import { css } from "@emotion/css";

interface Props {
    id: string;
    children: React.ReactNode;
}

export const PageContainer: React.FC<Props> = ({ children, id }) => {
    return (
        <section
            id={id}
            className={css`
                height: 100vh;
                width: 50%;
                scroll-snap-align: start;
                scroll-snap-stop: normal;
                display: flex;
                flex-direction: column;
                justify-content: center;
                scroll-margin-left: 20%;

                @media only screen and (max-width: 480px) {
                    width: 90%;
                }
            `}
        >
            {children}
        </section>
    );
};
