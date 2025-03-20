import type { NextConfig } from "next";
const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: "export",
    basePath: "/metal-roofing",
    assetPrefix: "/metal-roofing/",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
