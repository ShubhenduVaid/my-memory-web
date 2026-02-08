import Link from "next/link";

const REPO_URL = "https://github.com/ShubhenduVaid/my-memory";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5" />
          <div className="leading-tight">
            <Link href="/" className="text-sm font-semibold text-white">
              My Memory
            </Link>
            <div className="text-xs text-white/60">Search your notes by meaning</div>
          </div>
        </div>

        <nav className="flex items-center gap-4 text-sm text-white/75">
          <Link className="hover:text-white" href="/download">
            Download
          </Link>
          <Link className="hover:text-white" href="/developers">
            Developers
          </Link>
          <Link className="hover:text-white" href="/docs">
            Docs
          </Link>
          <Link className="hover:text-white" href="/faq">
            FAQ
          </Link>
          <Link className="hover:text-white" href="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-white" href={REPO_URL} target="_blank" rel="noreferrer">
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}
