/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/daily-barakah',
        destination: 'https://daily-barakah.vercel.app/daily-barakah',
      },
      {
        source: '/daily-barakah/:path*',
        destination: 'https://daily-barakah.vercel.app/daily-barakah/:path*',
      },
    ]
  },
};

export default nextConfig;