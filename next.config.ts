// next.config.ts
import type { NextConfig } from "next";

const repoName = "al-fath-game";

const nextConfig: NextConfig = {
  output: "export",           
  images: { unoptimized: true },  
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
