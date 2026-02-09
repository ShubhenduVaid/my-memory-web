import Link from "next/link";
import { Shell } from "../_components/Shell";

const REPO = "https://github.com/ShubhenduVaid/my-memory";
const RELEASES = "https://github.com/ShubhenduVaid/my-memory/releases";
const INTEGRATIONS = "https://github.com/ShubhenduVaid/my-memory/blob/master/docs/INTEGRATIONS.md";
const DEV = "https://github.com/ShubhenduVaid/my-memory/blob/master/docs/DEVELOPMENT.md";

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-xl border border-[rgb(var(--mm-fg)/0.10)] bg-[var(--mm-code-bg)] p-3 text-xs leading-5 text-[rgb(var(--mm-fg)/0.85)] sm:p-4">
      <code>{children}</code>
    </pre>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="min-w-0 rounded-2xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-[rgb(var(--mm-fg))]">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-[rgb(var(--mm-fg)/0.75)]">{children}</div>
    </section>
  );
}

function JsonLdHowTo() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Run My Memory from source (dev mode)",
    description: "Clone the repo, install dependencies, configure .env, and start the Electron app.",
    step: [
      { "@type": "HowToStep", name: "Clone", text: "git clone …" },
      { "@type": "HowToStep", name: "Install", text: "npm install" },
      { "@type": "HowToStep", name: "Configure", text: "cp .env.example .env" },
      { "@type": "HowToStep", name: "Run", text: "npm start" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function DevelopersPage() {
  return (
    <Shell>
      <JsonLdHowTo />

      <h1 className="text-3xl font-semibold tracking-tight">Developers</h1>
      <p className="mt-3 max-w-2xl text-[rgb(var(--mm-fg)/0.70)]">
        Fast path to try it locally, plus links to deeper docs.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8">
        <Section title="Recommended: download a build">
          <p>
            If you just want to try the app, download a build from Releases:
          </p>
          <div className="mt-3">
            <Link className="block max-w-full break-all underline hover:text-[rgb(var(--mm-fg))]" href={RELEASES} target="_blank" rel="noreferrer">
              {RELEASES}
            </Link>
          </div>
        </Section>

        <Section title="Run from source (dev mode)">
          <p>
            Requirements: Node.js 20+ (recommended), npm, and Git.
          </p>
          <Code>{`git clone ${REPO}
cd my-memory
npm install
cp .env.example .env
# edit .env (set GEMINI_API_KEY or OPENROUTER_API_KEY)
npm start`}</Code>
          <p className="mt-3">
            For a full development guide see: <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={DEV} target="_blank" rel="noreferrer">DEVELOPMENT.md</Link>
          </p>
        </Section>

        <Section title="Integrations">
          <p>
            Apple Notes (macOS only), Obsidian vaults, Notion pages, and local folders.
          </p>
          <div className="mt-3">
            <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={INTEGRATIONS} target="_blank" rel="noreferrer">
              INTEGRATIONS.md
            </Link>
          </div>
        </Section>

        <Section title="What to do if something fails">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Native deps / install issues: try a clean install (remove node_modules and reinstall).
            </li>
            <li>
              Apple Notes permissions: macOS may require granting relevant privacy permissions.
            </li>
            <li>
              Ollama: ensure it is running on localhost and a model is pulled.
            </li>
          </ul>
        </Section>
      </div>
    </Shell>
  );
}
