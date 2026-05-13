import type { NextConfig } from "next";

/**
 * Configuration Next.js. La section `images.remotePatterns` autorise
 * l'utilisation de `next/image` pour charger des images depuis le bucket S3
 * spécifié (utile pour object.imageUrl pointant vers ce domaine).
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'djangowf.s3.eu-north-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },

  //allowedDevOrigins: ['127.0.0.1'],
};

export default nextConfig;