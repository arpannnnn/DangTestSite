/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'assets.aceternity.com',
        },
        {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
        },{
            protocol: 'https',
            hostname: 'images.unsplash.com',   
        }, {
            protocol: 'https',
            hostname: 'i.ytimg.com',
        },
        {
            protocol: 'https',
            hostname: 'photo.ntb.gov.np', 
        },
        {
            protocol: 'https',
            hostname: 'plus.unsplash.com',   
        },
        {
            protocol: 'https',
            hostname: 'cdn.gurubaa.com',   
        },]

    },
};

export default nextConfig;
