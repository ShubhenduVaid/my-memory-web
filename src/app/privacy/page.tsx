import Link from "next/link";
import { Shell } from "../_components/Shell";

const SECURITY_URL = "https://github.com/ShubhenduVaid/my-memory/blob/master/SECURITY.md";

export default function PrivacyPage() {
  return (
    <Shell>
      <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>

      <p className="mt-3 max-w-2xl text-white/70">
        My Memory is local-first. Notes are indexed and cached on your machine.
        Depending on the LLM provider you choose, parts of your query and selected snippets may be sent
        to that provider.
      </p>

      <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm leading-6 text-white/75">
        <ul className="list-disc space-y-2 pl-5">
          <li>Index + cache live locally.</li>
          <li>API keys live locally.</li>
          <li>Hosted LLM providers may process query/snippets (provider-dependent).</li>
          <li>Local providers (e.g. Ollama) are best for privacy.</li>
        </ul>
        <div>
          Full details live in <Link className="underline hover:text-white" href={SECURITY_URL} target="_blank" rel="noreferrer">SECURITY.md</Link>.
        </div>
      </div>
    </Shell>
  );
}
