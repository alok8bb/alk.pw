import { PageContainer } from "./container";
import { css } from "@emotion/css";

export const HomePage = () => {
    return (
        <PageContainer id="home">
            <div
                className={css`
                    display: flex;
                    align-items: start;
                    justify-content: start;
                    flex-direction: column;
                `}
            >
                <img
                    src="https://i.imgur.com/Hfwrgof.jpg"
                    className={css`
                        border-radius: 50%;
                        width: 150px;
                        height: 150px;
                        object-fit: cover;
                    `}
                />
                <h1
                    className={css`
                        text-transform: uppercase;
                        font-family: "Montserrat", monospace;
                        color: #e9f8f9;
                        letter-spacing: 4px;
                        font-size: 2.5rem;
                    `}
                >
                    Alok Pawar
                </h1>
                <p
                    className={css`
                        text-decoration: underline;
                        letter-spacing: 1px;
                        font-size: 18px;
                        font-weight: 600;
                    `}
                >
                    Student & Programmer
                </p>
            </div>
            <div
                className={css`
                    margin-top: 10px;
                `}
            >
                <p className={css``}>
                    Hey there! I'm an 18 year old CSE student at LNCTE Bhpoal. I
                    am a passionate programmer and tech-enthusiast interested in
                    networking, low-level and systems programming. I am
                    proficient in a number of programming languages and
                    frameworks, including Rust, Typescript, and Kotlin.
                    <br />
                    <br />I started exploring programming and delved into the
                    Linux world back in 2020. Since then, I've learned a lot and
                    developed a keen interest in building web back-ends and
                    working on related projects.
                    <br />
                    <br />
                    Scroll down to see my projects and contact information!
                </p>
            </div>
        </PageContainer>
    );
};
