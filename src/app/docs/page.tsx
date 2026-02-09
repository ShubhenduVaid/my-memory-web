import Link from "next/link";
import { Shell } from "../_components/Shell";

const BASE = "https://github.com/ShubhenduVaid/my-memory";

const links = [
  { label: "Integrations", href: `${BASE}/blob/master/docs/INTEGRATIONS.md` },
  { label: "Architecture", href: `${BASE}/blob/master/docs/ARCHITECTURE.md` },
  { label: "Development", href: `${BASE}/blob/master/docs/DEVELOPMENT.md` },
  { label: "Roadmap", href: `${BASE}/blob/master/docs/ROADMAP.md` },
  { label: "Security", href: `${BASE}/blob/master/SECURITY.md` },
];

export default function DocsPage() {
  return (
    <Shell>
      <h1 className="text-3xl font-semibold tracking-tight">Docs</h1>
      <p className="mt-3 max-w-2xl text-[rgb(var(--mm-fg)/0.70)]">
        The docs live in the main repository. These links jump you straight in.
      </p>

      <div className="mt-6 grid gap-3 sm:mt-8">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] px-4 py-3 text-sm text-[rgb(var(--mm-fg)/0.80)] hover:bg-[rgb(var(--mm-fg)/0.06)] sm:px-5 sm:py-4"
          >
            <span className="font-medium text-[rgb(var(--mm-fg))]">{l.label}</span>
            <span className="text-[rgb(var(--mm-fg)/0.40)]">↗</span>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
