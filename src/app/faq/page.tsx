import Link from "next/link";
import { Shell } from "../_components/Shell";

const REPO = "https://github.com/ShubhenduVaid/my-memory";
const RELEASES = "https://github.com/ShubhenduVaid/my-memory/releases";
const SECURITY = "https://github.com/ShubhenduVaid/my-memory/blob/master/SECURITY.md";

const faqs = [
  {
    q: "What is My Memory?",
    a: "My Memory is a desktop app for semantic search across your notes — Apple Notes (macOS), Obsidian, Notion, and local files — from one search bar.",
  },
  {
    q: "Is My Memory local-first?",
    a: "Yes. Notes are indexed and cached locally. Your API keys are stored locally (on your machine).",
  },
  {
    q: "Do my notes get sent to an AI provider?",
    a: "It depends on your chosen LLM provider. With hosted providers (Gemini/OpenRouter), parts of your query and selected snippets may be sent to the provider. With a local provider (e.g. Ollama), requests can stay on your machine.",
  },
  {
    q: "How do I install it?",
    a: "Download a build from GitHub Releases (recommended), or run from source in dev mode.",
  },
  {
    q: "Which platforms are supported?",
    a: "macOS, Windows, and Linux. Apple Notes integration is macOS-only.",
  },
  {
    q: "Where is the documentation?",
    a: "Docs live in the main GitHub repository, under /docs.",
  },
];

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FaqPage() {
  return (
    <Shell>
      <JsonLd />

      <h1 className="text-3xl font-semibold tracking-tight">FAQ</h1>
      <p className="mt-3 max-w-2xl text-[rgb(var(--mm-fg)/0.70)]">
        Short, direct answers for new users and for answer engines.
      </p>

      <div className="mt-6 grid gap-3 sm:mt-8">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-2xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] p-5 sm:p-6"
          >
            <h2 className="text-base font-semibold text-[rgb(var(--mm-fg))]">{f.q}</h2>
            <p className="mt-2 text-sm leading-6 text-[rgb(var(--mm-fg)/0.70)]">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] p-5 text-sm text-[rgb(var(--mm-fg)/0.70)] sm:mt-10 sm:p-6">
        Useful links: <br />
        <div className="mt-3 flex flex-col gap-2">
          <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={RELEASES} target="_blank" rel="noreferrer">
            Releases
          </Link>
          <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={SECURITY} target="_blank" rel="noreferrer">
            SECURITY.md
          </Link>
          <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={REPO} target="_blank" rel="noreferrer">
            Main repository
          </Link>
        </div>
      </div>
    </Shell>
  );
}
