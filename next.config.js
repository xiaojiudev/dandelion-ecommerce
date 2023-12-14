/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['randomuser.me', 'pixahive.com', 'res.cloudinary.com'],
    },
    reactStrictMode: false,
    env: {
        NEXT_PUBLIC_API_URI: process.env.NEXT_PUBLIC_API_URI,
        BACKEND_PUBLIC_API_URI: process.env.BACKEND_PUBLIC_API_URI,
    }

}

module.exports = nextConfig
