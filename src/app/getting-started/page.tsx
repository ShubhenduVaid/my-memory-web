import Link from "next/link";
import { Shell } from "../_components/Shell";

const REPO = "https://github.com/ShubhenduVaid/my-memory";
const RELEASES = "https://github.com/ShubhenduVaid/my-memory/releases";
const QUICKSTART = "https://github.com/ShubhenduVaid/my-memory/blob/master/docs/QUICKSTART.md";
const INTEGRATIONS = "https://github.com/ShubhenduVaid/my-memory/blob/master/docs/INTEGRATIONS.md";
const DEV = "https://github.com/ShubhenduVaid/my-memory/blob/master/docs/DEVELOPMENT.md";

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="mt-3 overflow-x-auto rounded-xl border border-[rgb(var(--mm-fg)/0.10)] bg-[var(--mm-code-bg)] p-3 text-xs leading-5 text-[rgb(var(--mm-fg)/0.85)] sm:p-4">
      <code>{children}</code>
    </pre>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="min-w-0 rounded-2xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-[rgb(var(--mm-fg))]">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-[rgb(var(--mm-fg)/0.75)]">{children}</div>
    </section>
  );
}

export default function GettingStartedPage() {
  return (
    <Shell>
      <h1 className="text-3xl font-semibold tracking-tight">Getting started</h1>
      <p className="mt-3 max-w-2xl text-[rgb(var(--mm-fg)/0.70)]">
        Two ways to try My Memory: download a build, or run from source.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8">
        <Card title="1) Download (recommended)">
          <p>Grab the latest build from GitHub Releases:</p>
          <div className="mt-3">
            <Link className="block max-w-full break-all underline hover:text-[rgb(var(--mm-fg))]" href={RELEASES} target="_blank" rel="noreferrer">
              {RELEASES}
            </Link>
          </div>
        </Card>

        <Card title="2) Run from source (dev mode)">
          <p>
            Requirements: Node.js 18+ (Node 20+ recommended), npm, Git.
          </p>
          <Code>{`git clone ${REPO}
cd my-memory
npm install
cp .env.example .env
# edit .env (set GEMINI_API_KEY or OPENROUTER_API_KEY)
npm start`}</Code>
          <p className="mt-3">
            Source docs: <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={QUICKSTART} target="_blank" rel="noreferrer">QUICKSTART.md</Link> and{" "}
            <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={DEV} target="_blank" rel="noreferrer">DEVELOPMENT.md</Link>.
          </p>
        </Card>

        <Card title="LLM provider setup">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-medium text-[rgb(var(--mm-fg))]">Gemini</span>: set <code>GEMINI_API_KEY</code>
            </li>
            <li>
              <span className="font-medium text-[rgb(var(--mm-fg))]">OpenRouter</span>: set <code>OPENROUTER_API_KEY</code>
            </li>
            <li>
              <span className="font-medium text-[rgb(var(--mm-fg))]">Ollama (local)</span>: run <code>ollama serve</code>, pull a model, optionally set <code>OLLAMA_MODEL</code>
            </li>
          </ul>
        </Card>

        <Card title="Integrations">
          <p>
            Supported sources: Apple Notes (macOS), Obsidian, Notion, local files.
          </p>
          <div className="mt-3">
            <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={INTEGRATIONS} target="_blank" rel="noreferrer">
              Setup guide (INTEGRATIONS.md)
            </Link>
          </div>
        </Card>

        <Card title="Troubleshooting">
          <ul className="list-disc space-y-2 pl-5">
            <li>Install errors: try a clean install (remove node_modules, reinstall).</li>
            <li>Apple Notes: macOS privacy permissions may be required.</li>
            <li>Ollama: ensure it’s running on localhost and a model is installed.</li>
          </ul>
        </Card>
      </div>
    </Shell>
  );
}
