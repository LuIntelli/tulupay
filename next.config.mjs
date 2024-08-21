/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "http://137.184.144.44:6000",
  },
  images: {
    domains: ['137.184.144.44:6000'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '137.184.144.44',
         port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
