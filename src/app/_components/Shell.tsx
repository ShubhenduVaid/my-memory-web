import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-14">{children}</main>
      <footer className="border-t border-white/10 py-8 text-sm text-white/50">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} My Memory</div>
          <div className="text-white/40">Built with Next.js</div>
        </div>
      </footer>
    </div>
  );
}
