import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kulaa.studio" }],
        destination: "https://kulaa.studio/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
