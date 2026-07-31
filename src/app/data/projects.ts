export type Project = {
    title: string;
    description: string;
    tags: string[];
    category: string;
    year: string;
    featured: boolean;
    live?: string;
    source: string;
    image?: string;
};

export const projects: Project[] = [
    {
        title: 'Sova Screener',
        description:
            'A dashboard for Solana prices, news, learning resources, and trading tools.',
        tags: ['Next.js', 'TypeScript', 'Solana'],
        category: 'Web3',
        year: '2024',
        featured: false,
        live: 'https://sovascreener.com',
        source: 'https://github.com/alok8bb/solaris-board',
    },
    {
        title: 'Payra',
        description:
            'A shared-expense program with token contributions, group proposals, voting, and settlement on Solana.',
        tags: ['Rust', 'Anchor', 'Solana'],
        category: 'Solana',
        year: '2024',
        featured: true,
        live: 'https://solscan.io/account/pAYrAkZHxebd89ojqt8pu9fBF8HWfiAcdqs8QFzk6dt?cluster=devnet',
        source: 'https://github.com/alok8bb/payra',
    },
    {
        title: 'Paladin',
        description:
            'A multi-chain Telegram bot for token-gated communities, with wallet verification, governance, analytics, and AI assistance.',
        tags: ['TypeScript', 'Telegram', 'Ethereum', 'Solana'],
        category: 'Bot',
        year: '2023',
        featured: true,
        source: 'https://github.com/alok8bb/paladin',
        live: 'https://t.me/paladin_beta_bot',
    },
    {
        title: 'Cloneit',
        description:
            'An open-source CLI for downloading individual GitHub files or directories without cloning an entire repository.',
        tags: ['Rust', 'CLI', 'Open source'],
        category: 'CLI',
        year: '2022',
        featured: true,
        live: 'https://github.com/alok8bb/cloneit',
        source: 'https://github.com/alok8bb/cloneit',
    },
    {
        title: 'BlockBack',
        description: 'A crowdfunding dapp with Solidity and React',
        tags: ['solidity', 'nextjs'],
        category: 'Web3',
        year: '2022',
        featured: false,
        live: 'https://blockback.alk.pw',
        source: 'https://github.com/alok8bb/blockback',
    },
];
