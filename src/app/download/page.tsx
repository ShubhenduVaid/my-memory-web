import Link from "next/link";
import { Shell } from "../_components/Shell";

const RELEASES_URL = "https://github.com/ShubhenduVaid/my-memory/releases";
const REPO_URL = "https://github.com/ShubhenduVaid/my-memory";

export default function DownloadPage() {
  return (
    <Shell>
      <h1 className="text-3xl font-semibold tracking-tight">Download</h1>
      <p className="mt-3 max-w-2xl text-[rgb(var(--mm-fg)/0.70)]">
        My Memory is currently distributed via GitHub Releases.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
        <div className="rounded-2xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] p-5 sm:p-6">
          <h2 className="text-lg font-semibold">GitHub Releases</h2>
          <p className="mt-2 text-sm leading-6 text-[rgb(var(--mm-fg)/0.70)]">
            Download the latest macOS/Windows/Linux build.
          </p>
          <Link
            href={RELEASES_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-[var(--mm-cta-bg)] px-5 py-3 text-sm font-semibold text-[var(--mm-cta-fg)] hover:bg-[var(--mm-cta-bg-hover)]"
          >
            Open Releases
          </Link>
        </div>

        <div className="rounded-2xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] p-5 sm:p-6">
          <h2 className="text-lg font-semibold">From source</h2>
          <p className="mt-2 text-sm leading-6 text-[rgb(var(--mm-fg)/0.70)]">
            Prefer to run in dev mode? Clone the repo and start locally.
          </p>
          <Link
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-xl border border-[rgb(var(--mm-fg)/0.15)] bg-[rgb(var(--mm-fg)/0.05)] px-5 py-3 text-sm font-semibold text-[rgb(var(--mm-fg))] hover:bg-[rgb(var(--mm-fg)/0.10)]"
          >
            View repo
          </Link>
        </div>
      </div>
    </Shell>
  );
}
