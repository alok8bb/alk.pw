export type Experience = {
    position: string;
    company: string;
    description: string;
    startDate: string;
    endDate: string;
    link?: string;
};

export const experiences: Experience[] = [
    {
        position: 'Product Developer',
        company: 'Paystream Finance',
        description:
            'Worked across the frontend, backend, and blockchain integrations of a financial product.',
        startDate: '2024-03',
        endDate: '2025-08',
        link: 'https://paystream.finance',
    },
    {
        position: 'Developer',
        company: '株式会社HumAIn',
        description:
            'Worked on the frontend and backend, and designed specialized UI components for a web application.',
        startDate: '2024-10',
        endDate: '2025-02',
    },
    {
        position: 'Freelance Engineer',
        company: 'Independent',
        description:
            'Built web products, blockchain integrations, and automation bots for independent clients.',
        startDate: '2022',
        endDate: '2024',
    },
];
