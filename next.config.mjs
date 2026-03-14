/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const hasBasePath = basePath && basePath !== "/";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: hasBasePath ? basePath : undefined,
  assetPrefix: hasBasePath ? `${basePath.replace(/\/$/, "")}/` : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
