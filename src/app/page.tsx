import Link from "next/link";
import { Shell } from "./_components/Shell";

const REPO_URL = "https://github.com/ShubhenduVaid/my-memory";
const RELEASES_URL = "https://github.com/ShubhenduVaid/my-memory/releases";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.05)] px-3 py-1 text-xs text-[rgb(var(--mm-fg)/0.80)]">
      {children}
    </span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-[rgb(var(--mm-fg))]">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-[rgb(var(--mm-fg)/0.75)]">{children}</div>
    </section>
  );
}

function JsonLdSoftware() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "My Memory",
      applicationCategory: "ProductivityApplication",
      operatingSystem: ["macOS", "Windows", "Linux"],
      description:
        "Search your notes by meaning, not keywords — across Apple Notes (macOS), Obsidian, Notion, and local files.",
      isAccessibleForFree: true,
      license: "https://opensource.org/licenses/MIT",
      codeRepository: "https://github.com/ShubhenduVaid/my-memory",
      downloadUrl: "https://github.com/ShubhenduVaid/my-memory/releases",
      creator: {
        "@type": "Person",
        name: "Shubhendu Vaid",
        url: "https://github.com/ShubhenduVaid",
      },
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "USD",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "My Memory",
      url: "https://github.com/ShubhenduVaid/my-memory",
      description:
        "My Memory is an open-source desktop app for semantic search across your notes.",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function Home() {
  return (
    <Shell>
      <JsonLdSoftware />
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-2">
          <Badge>Local-first</Badge>
          <Badge>macOS • Windows • Linux</Badge>
          <Badge>Apple Notes (macOS)</Badge>
          <Badge>Obsidian • Notion • Local Files</Badge>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Find anything in your notes — even when you don’t remember the words.
        </h1>

        <p className="max-w-2xl text-base leading-7 text-[rgb(var(--mm-fg)/0.70)]">
          My Memory is a desktop app that adds semantic search across your note sources.
          One hotkey to search Apple Notes, Obsidian vaults, Notion pages, and local folders.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/getting-started"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--mm-cta-bg)] px-5 py-3 text-sm font-semibold text-[var(--mm-cta-fg)] hover:bg-[var(--mm-cta-bg-hover)]"
          >
            Get started
          </Link>
          <Link
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--mm-fg)/0.15)] bg-[rgb(var(--mm-fg)/0.05)] px-5 py-3 text-sm font-semibold text-[rgb(var(--mm-fg))] hover:bg-[rgb(var(--mm-fg)/0.10)]"
          >
            View source
          </Link>
          <Link
            href={RELEASES_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--mm-fg)/0.10)] bg-transparent px-5 py-3 text-sm font-semibold text-[rgb(var(--mm-fg)/0.80)] hover:bg-[rgb(var(--mm-fg)/0.05)]"
          >
            Releases ↗
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
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
            <li>
              <span className="font-medium text-[rgb(var(--mm-fg))]">Apple Notes</span> (macOS only)
            </li>
            <li>
              <span className="font-medium text-[rgb(var(--mm-fg))]">Obsidian</span> (vault folders)
            </li>
            <li>
              <span className="font-medium text-[rgb(var(--mm-fg))]">Notion</span> (integration + shared pages)
            </li>
            <li>
              <span className="font-medium text-[rgb(var(--mm-fg))]">Local files</span> (folders, recursive)
            </li>
          </ul>
        </Section>

        <Section title="Docs snapshot (fast)">
          <p>
            If you want a quick path, start with the Getting started page. The full docs live in the main repo.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <Link className="underline hover:text-[rgb(var(--mm-fg))]" href="/getting-started">
              Getting started
            </Link>
            <Link className="underline hover:text-[rgb(var(--mm-fg))]" href="/developers">
              Developer quickstart
            </Link>
            <Link className="underline hover:text-[rgb(var(--mm-fg))]" href="/docs">
              Full docs (GitHub)
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
    </Shell>
  );
}
