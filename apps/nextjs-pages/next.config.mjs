/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Transpile workspace packages so Next bundles them with webpack instead of
  // treating them as external CJS. The markdown section depends on ESM-only
  // packages (unified, remark-*, rehype-*); without this, Next fails with
  // "ESM packages need to be imported" (import-esm-externals).
  transpilePackages: ["@stackshift-ui/react", "@stackshift-ui/markdown"],
  webpack: (config, { isServer }) => {
    // The markdown section depends on ESM-only packages (unified, remark-*,
    // rehype-*). Next's server build resolves package `main` (CJS) first, and
    // the CJS build require()s those ESM deps — which webpack cannot do. Prefer
    // the `module` (ESM) field on the server so the ESM build is used instead.
    if (isServer) {
      config.resolve.mainFields = ["module", "main"];
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
