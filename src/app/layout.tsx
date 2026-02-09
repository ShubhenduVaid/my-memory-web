import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { getSiteUrlAsUrl } from "../lib/siteUrl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "My Memory",
    template: "%s · My Memory",
  },
  description: "Search your notes by meaning, not keywords — across Apple Notes, Obsidian, Notion, and local files.",
  metadataBase: getSiteUrlAsUrl(),
  openGraph: {
    title: "My Memory",
    description:
      "Search your notes by meaning, not keywords — across Apple Notes, Obsidian, Notion, and local files.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Memory",
    description:
      "Semantic search across Apple Notes, Obsidian, Notion, and local files.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function () {
            try {
              var key = "mm-theme";
              var root = document.documentElement;
              var stored = null;
              try { stored = localStorage.getItem(key); } catch (e) {}
              var hasStored = stored === "light" || stored === "dark";

              var mql = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
              var systemTheme = function () { return mql && mql.matches ? "dark" : "light"; };

              root.dataset.theme = hasStored ? stored : systemTheme();

              // Used when storage is unavailable: once the user toggles, stop syncing to system.
              window.__mm_theme_user_override = false;

              // If no explicit preference is stored, follow the system theme (including changes).
              if (!hasStored && mql) {
                var onChange = function () {
                  try {
                    if (window.__mm_theme_user_override) return;
                    var now = null;
                    try { now = localStorage.getItem(key); } catch (e2) {}
                    if (now === "light" || now === "dark") return;
                    root.dataset.theme = systemTheme();
                  } catch (e3) {}
                };

                if (mql.addEventListener) mql.addEventListener("change", onChange);
                else if (mql.addListener) mql.addListener(onChange);
              }
            } catch (e) {}
          })();
        `}</Script>
        {children}
      </body>
    </html>
  );
}
