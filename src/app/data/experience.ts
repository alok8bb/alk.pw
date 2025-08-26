export type Experience = {
    company: string;
    position: string;
    period: string;
    link?: string;
};

export const experiences: Experience[] = [
    {
        company: 'paystream finance',
        position: 'full-stack developer',
        period: 'Mar 2024 - Aug 2025',
        link: 'https://paystream.finance',
    },
    {
        company: '株式会社HumAIn',
        position: 'software developer',
        period: 'Oct 2024 - Feb 2025',
    },
    {
        company: 'freelance engineer',
        position: 'full-stack, blockchain, bots',
        period: '2022 - 2024',
    },
];
