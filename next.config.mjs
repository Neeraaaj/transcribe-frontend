/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'media.licdn.com',
              pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 't3.ftcdn.net',
                pathname: '**',
              },
              {
                protocol: 'https',
                hostname: 'fosspost.org',
                pathname: '**',
              },
          ],
    }
};

export default nextConfig;
