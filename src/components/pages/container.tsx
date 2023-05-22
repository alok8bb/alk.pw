import { css } from "@emotion/css";

interface Props {
    children: React.ReactNode;
}

export const PageContainer: React.FC<Props> = ({ children }) => {
    return (
        <section
            className={css`
                height: 100vh;
                width: 50%;
                scroll-snap-align: start;
                scroll-snap-stop: normal;
                display: flex;
                flex-direction: column;
                justify-content: center;
            `}
        >
            {children}
        </section>
    );
};
