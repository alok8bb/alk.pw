export type Project = {
    title: string;
    description: string;
    tags: string[];
    live?: string;
    source: string;
    image?: string;
};

export const projects: Project[] = [
    {
        title: 'cloneit',
        description:
            ' a cli tool to download specific github files and directories',
        tags: ['rust', 'cli'],
        live: 'https://github.com/alok8bb/cloneit',
        source: 'https://github.com/alok8bb/cloneit',
        image: 'https://get.alk.pw/screenshots/cloneit.png',
    },
    {
        title: 'payra',
        description:
            'solana program that enables small groups to split expenses and manage shared funds',
        tags: ['solana', 'rust'],
        live: 'https://solscan.io/account/pAYrAkZHxebd89ojqt8pu9fBF8HWfiAcdqs8QFzk6dt?cluster=devnet',
        source: 'https://github.com/alok8bb/payra',
        image: 'https://github.com/alok8bb/payra/raw/main/screenshots/preview.png',
    },
    {
        title: 'BlockBack',
        description: 'A crowdfunding dapp with solidity and reactjs',
        tags: ['solidity', 'nextjs'],
        live: 'https://blockback.alk.pw',
        source: 'https://github.com/alok8bb/blockback',
        image: 'https://github.com/alok8bb/BlockBack/raw/main/media/home-out.png',
    },
    {
        title: 'Solaris Board',
        description: 'web dashboard for essential things - solana blockchain',
        tags: ['@solana/web3.js', 'nextjs'],
        live: 'https://solaris-board.alk.pw',
        source: 'https://github.com/alok8bb/solaris-board',
        image: 'https://github.com/alok8bb/solaris-board/raw/main/screenshots/dashboard.png',
    },
];
