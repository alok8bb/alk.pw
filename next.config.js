/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        qualities: [75, 95],
    },
    experimental: {
        useTypeScriptCli: true,
    },
};

module.exports = nextConfig;
