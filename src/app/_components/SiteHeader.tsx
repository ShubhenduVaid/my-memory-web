import Link from "next/link";
import { MobileMenu, type NavLink } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";

const REPO_URL = "https://github.com/ShubhenduVaid/my-memory";

export function SiteHeader() {
  const links: NavLink[] = [
    { href: "/getting-started", label: "Getting started" },
    { href: "/download", label: "Download" },
    { href: "/developers", label: "Developers" },
    { href: "/docs", label: "Docs" },
    { href: "/faq", label: "FAQ" },
    { href: "/changelog", label: "Changelog" },
    { href: "/privacy", label: "Privacy" },
    { href: REPO_URL, label: "GitHub", external: true },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-bg)/0.70)] backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.05)] sm:h-9 sm:w-9" />
          <div className="leading-tight">
            <Link href="/" className="text-sm font-semibold text-[rgb(var(--mm-fg))]">
              My Memory
            </Link>
            <div className="hidden text-xs text-[rgb(var(--mm-fg)/0.60)] sm:block">Search your notes by meaning</div>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden items-center gap-4 text-sm text-[rgb(var(--mm-fg)/0.75)] lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                className="hover:text-[rgb(var(--mm-fg))]"
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <MobileMenu links={links} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
