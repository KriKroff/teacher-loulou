import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  // basePath will be set to "/teacher-loulou" for GitHub Pages in CI
  // Locally, we don't need it
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true, // Required for static export
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
