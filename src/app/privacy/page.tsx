import Link from "next/link";
import { Shell } from "../_components/Shell";

const SECURITY_URL = "https://github.com/ShubhenduVaid/my-memory/blob/master/SECURITY.md";

export default function PrivacyPage() {
  return (
    <Shell>
      <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>

      <p className="mt-3 max-w-2xl text-[rgb(var(--mm-fg)/0.70)]">
        My Memory is local-first. Notes are indexed and cached on your machine.
        Depending on the LLM provider you choose, parts of your query and selected snippets may be sent
        to that provider.
      </p>

      <div className="mt-6 space-y-4 rounded-2xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] p-5 text-sm leading-6 text-[rgb(var(--mm-fg)/0.75)] sm:mt-8 sm:p-6">
        <ul className="list-disc space-y-2 pl-5">
          <li>Index + cache live locally.</li>
          <li>API keys live locally.</li>
          <li>Hosted LLM providers may process query/snippets (provider-dependent).</li>
          <li>Local providers (e.g. Ollama) are best for privacy.</li>
        </ul>
        <div>
          Full details live in <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={SECURITY_URL} target="_blank" rel="noreferrer">SECURITY.md</Link>.
        </div>
      </div>
    </Shell>
  );
}
