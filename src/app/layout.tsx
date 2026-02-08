import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://github.com/ShubhenduVaid/my-memory"
  ),
  openGraph: {
    title: "My Memory",
    description: "Search your notes by meaning, not keywords — across Apple Notes, Obsidian, Notion, and local files.",
    type: "website",
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
