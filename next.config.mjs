/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: 'pics.hiekki.me' }, { hostname: 'hep.gg' }],
    },
};

export default nextConfig;
