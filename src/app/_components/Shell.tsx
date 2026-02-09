import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[rgb(var(--mm-bg))] text-[rgb(var(--mm-fg))]">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">{children}</main>
      <footer className="border-t border-[rgb(var(--mm-fg)/0.10)] py-8 text-sm text-[rgb(var(--mm-fg)/0.50)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div>© {new Date().getFullYear()} My Memory</div>
          <div className="text-[rgb(var(--mm-fg)/0.40)]">Built with Next.js</div>
        </div>
      </footer>
    </div>
  );
}
