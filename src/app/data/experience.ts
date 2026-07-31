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
            'Worked across most of the product as it moved from lending and borrowing into LP and delta-neutral trading tools, covering product UI, backend systems and deployments.',
        startDate: '2024-03',
        endDate: '2025-08',
        link: 'https://paystream.finance',
    },
    {
        position: 'Developer',
        company: '株式会社HumAIn',
        description:
            'Worked mainly on the frontend for a private healthcare product, building product screens and components while touching the backend where needed.',
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
