function normalize(url: string): string {
  // Ensure scheme
  const withScheme = url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `https://${url}`;

  // Remove trailing slash
  return withScheme.replace(/\/+$/, "");
}

/**
 * Returns the canonical base URL for the site.
 *
 * Precedence:
 * 1) NEXT_PUBLIC_SITE_URL (custom domain)
 * 2) VERCEL_URL (auto-provided by Vercel, no scheme)
 * 3) localhost fallback
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit && explicit.trim()) return normalize(explicit.trim());

  const vercel = process.env.VERCEL_URL;
  if (vercel && vercel.trim()) return normalize(vercel.trim());

  return "http://localhost:3000";
}

export function getSiteUrlAsUrl(): URL {
  return new URL(getSiteUrl());
}
