import Link from "next/link";

const REPO_URL = "https://github.com/ShubhenduVaid/my-memory";
const RELEASES_URL = "https://github.com/ShubhenduVaid/my-memory/releases";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-white/75">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">My Memory</div>
              <div className="text-xs text-white/60">Search your notes by meaning</div>
            </div>
          </div>

          <nav className="flex items-center gap-4 text-sm text-white/75">
            <Link className="hover:text-white" href={RELEASES_URL} target="_blank" rel="noreferrer">
              Download
            </Link>
            <Link className="hover:text-white" href={REPO_URL} target="_blank" rel="noreferrer">
              GitHub
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            <Badge>Local-first</Badge>
            <Badge>macOS • Windows • Linux</Badge>
            <Badge>Apple Notes (macOS)</Badge>
            <Badge>Obsidian • Notion • Local Files</Badge>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Find anything in your notes — even when you don’t remember the words.
          </h1>

          <p className="max-w-2xl text-base leading-7 text-white/70">
            My Memory is a desktop app that adds semantic search across your note sources.
            One hotkey to search Apple Notes, Obsidian vaults, Notion pages, and local folders.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={RELEASES_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Download (Releases)
            </Link>
            <Link
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              View source
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Section title="Privacy & data flow">
            <ul className="list-disc space-y-2 pl-5">
              <li>Notes are indexed and cached locally.</li>
              <li>API keys live locally (your machine).</li>
              <li>Hosted LLMs may receive your query + selected snippets depending on provider.</li>
              <li>For best privacy, use a local provider (e.g. Ollama).</li>
            </ul>
          </Section>

          <Section title="Integrations">
            <ul className="list-disc space-y-2 pl-5">
              <li><span className="font-medium text-white">Apple Notes</span> (macOS only)</li>
              <li><span className="font-medium text-white">Obsidian</span> (vault folders)</li>
              <li><span className="font-medium text-white">Notion</span> (integration + shared pages)</li>
              <li><span className="font-medium text-white">Local files</span> (folders, recursive)</li>
            </ul>
          </Section>

          <Section title="For contributors">
            <p>
              This repo is just the website. The desktop app lives in the main repository.
              If you want to contribute to the app, start here:
            </p>
            <div className="mt-3">
              <Link className="underline hover:text-white" href={REPO_URL} target="_blank" rel="noreferrer">
                {REPO_URL}
              </Link>
            </div>
          </Section>

          <Section title="Roadmap">
            <p>
              Short-term: reduce time-to-try, improve onboarding, and make releases frictionless.
              Medium-term: better source health diagnostics + smarter previews.
            </p>
          </Section>
        </div>

        <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-white/50">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} My Memory</div>
            <div className="flex gap-4">
              <Link className="hover:text-white" href={REPO_URL} target="_blank" rel="noreferrer">
                GitHub
              </Link>
              <Link className="hover:text-white" href={RELEASES_URL} target="_blank" rel="noreferrer">
                Releases
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
