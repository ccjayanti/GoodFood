/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https', // Protocol of the domain (e.g., 'https')
          hostname: 'ik.imagekit.io', // Your external image domain
          port: '', // Optional: Add if the domain uses a specific port
          pathname: '**', // Allow all paths under this domain
        },
      ],
    },
  };
  
  export default nextConfig;