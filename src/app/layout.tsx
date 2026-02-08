import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
