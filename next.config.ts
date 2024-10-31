import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.instagram.com',
        port: '', // Puedes dejarlo vacío si no estás usando un puerto específico
        pathname: '/**', // Esto permite acceder a todas las rutas de imágenes
      },
    ],
  },
};

export default nextConfig;
