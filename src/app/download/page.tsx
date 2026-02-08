import Link from "next/link";
import { Shell } from "../_components/Shell";

const RELEASES_URL = "https://github.com/ShubhenduVaid/my-memory/releases";
const REPO_URL = "https://github.com/ShubhenduVaid/my-memory";

export default function DownloadPage() {
  return (
    <Shell>
      <h1 className="text-3xl font-semibold tracking-tight">Download</h1>
      <p className="mt-3 max-w-2xl text-white/70">
        My Memory is currently distributed via GitHub Releases.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold">GitHub Releases</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Download the latest macOS/Windows/Linux build.
          </p>
          <Link
            href={RELEASES_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            Open Releases
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-lg font-semibold">From source</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Prefer to run in dev mode? Clone the repo and start locally.
          </p>
          <Link
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            View repo
          </Link>
        </div>
      </div>
    </Shell>
  );
}
