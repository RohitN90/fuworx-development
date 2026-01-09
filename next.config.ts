import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["http://localhost:3000"],
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/services/digitalService",
        permanent: true, // 308 status code
      },
      {
        source: "/about",
        destination: "/about/aboutUs",
        permanent: true, // 308 status code
      },
    ];
  },
};

export default nextConfig;
