// next.config.ts
import type { NextConfig } from "next";

// Set this on Vercel → Project Settings → Environment Variables
// e.g. STRAPI_ASSET_HOST=cms.aaitek.com  (no protocol)
const assetHost = process.env.STRAPI_ASSET_HOST;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // ✅ Local Strapi (dev)
      { protocol: "http", hostname: "localhost", port: "1337", pathname: "/uploads/**" },

      // ✅ Prod Strapi (Vercel) — allowed only if you set STRAPI_ASSET_HOST
      ...(assetHost
        ? [{ protocol: "https" as const, hostname: assetHost, pathname: "/uploads/**" }]
        : []),
    ],
  },
};

export default nextConfig;
