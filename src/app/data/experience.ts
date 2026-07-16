export type Experience = {
    year: string;
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    link?: string;
};

export const experiences: Experience[] = [
    {
        year: '2024',
        position: 'Full-Stack Developer',
        company: 'Paystream Finance',
        startDate: '03/24',
        endDate: '08/25',
        link: 'https://paystream.finance',
    },
    {
        year: '2024',
        position: 'Software Developer',
        company: '株式会社HumAIn',
        startDate: '10/24',
        endDate: '02/25',
    },
    {
        year: '2022',
        position: 'Freelance Engineer',
        company: 'Full-stack, Blockchain, Bots',
        startDate: '2022',
        endDate: '2024',
    },
];
