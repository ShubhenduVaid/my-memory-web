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
      <p className="mt-3 max-w-2xl text-white/70">
        The docs live in the main repository. These links jump you straight in.
      </p>

      <div className="mt-8 grid gap-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/80 hover:bg-white/[0.06]"
          >
            <span className="font-medium text-white">{l.label}</span>
            <span className="text-white/40">↗</span>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
