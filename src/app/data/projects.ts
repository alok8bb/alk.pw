export type Project = {
    title: string;
    description: string;
    tags: string[];
    category: string;
    year: string;
    live?: string;
    source: string;
    image?: string;
};

export const projects: Project[] = [
    {
        title: 'Sova Screener',
        description: 'Web dashboard for essential things',
        tags: ['@solana/web3.js', 'nextjs'],
        category: 'Web3',
        year: '2024',
        live: 'https://sovascreener.com',
        source: 'https://github.com/alok8bb/solaris-board',
    },
    {
        title: 'Payra',
        description:
            'Solana program for splitting expenses and managing shared funds',
        tags: ['solana', 'rust'],
        category: 'Solana',
        year: '2024',
        live: 'https://solscan.io/account/pAYrAkZHxebd89ojqt8pu9fBF8HWfiAcdqs8QFzk6dt?cluster=devnet',
        source: 'https://github.com/alok8bb/payra',
    },
    {
        title: 'Paladin',
        description:
            'Group management bot for crypto/token communities',
        tags: ['typescript', 'telegram', 'bot'],
        category: 'Bot',
        year: '2023',
        source: 'https://github.com/alok8bb/paladin',
        live: 'https://t.me/paladin_beta_bot',
    },
    {
        title: 'Cloneit',
        description:
            'CLI tool to download specific GitHub files and directories',
        tags: ['rust', 'cli'],
        category: 'CLI',
        year: '2022',
        live: 'https://github.com/alok8bb/cloneit',
        source: 'https://github.com/alok8bb/cloneit',
    },
    {
        title: 'BlockBack',
        description: 'A crowdfunding dapp with Solidity and React',
        tags: ['solidity', 'nextjs'],
        category: 'Web3',
        year: '2022',
        live: 'https://blockback.alk.pw',
        source: 'https://github.com/alok8bb/blockback',
    },
];
