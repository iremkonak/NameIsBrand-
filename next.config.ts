import type { NextConfig } from "next";

function getSupabaseConnectSources() {
  const configuredUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  try {
    if (configuredUrl) {
      const url = new URL(configuredUrl);
      return [`https://${url.host}`, `wss://${url.host}`];
    }
  } catch {
    // Fall back to Supabase wildcard sources below.
  }

  return ["https://*.supabase.co", "wss://*.supabase.co"];
}

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ── Performance: compress responses ────────────────────────────────────────
  compress: true,

  // ── Performance: optimize images ───────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // ── Security & Performance: HTTP response headers ──────────────────────────
  async headers() {
    return [
      {
        // Applied to all routes
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js requires unsafe-eval in dev
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              `connect-src 'self' ${getSupabaseConnectSources().join(" ")}`,
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
      {
        // Long-cache for static assets
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // No-cache for admin pages (always fresh)
        source: "/admin(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate",
          },
          { key: "Pragma", value: "no-cache" },
        ],
      },
    ];
  },

  // ── Performance: bundle optimisation ──────────────────────────────────────
  experimental: {
    optimizePackageImports: ["@supabase/supabase-js"],
  },
};

export default nextConfig;
