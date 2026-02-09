import Link from "next/link";
import { Shell } from "../_components/Shell";

export const revalidate = 3600; // 1 hour

const RELEASES_WEB = "https://github.com/ShubhenduVaid/my-memory/releases";
const RELEASES_API = "https://api.github.com/repos/ShubhenduVaid/my-memory/releases?per_page=20";

type Release = {
  id: number;
  name: string | null;
  tag_name: string;
  html_url: string;
  published_at: string | null;
  prerelease: boolean;
  draft: boolean;
  body: string | null;
};

function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "2-digit" });
}

function snippet(text: string | null, max = 260): string {
  const t = (text || "").trim();
  if (!t) return "";
  return t.length > max ? `${t.slice(0, max)}…` : t;
}

export default async function ChangelogPage() {
  let releases: Release[] = [];
  let error: string | null = null;

  try {
    const res = await fetch(RELEASES_API, {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: { revalidate },
    });

    if (!res.ok) {
      error = `GitHub API error: ${res.status}`;
    } else {
      releases = (await res.json()) as Release[];
    }
  } catch {
    error = "Failed to load release data.";
  }

  return (
    <Shell>
      <h1 className="text-3xl font-semibold tracking-tight">Changelog</h1>
      <p className="mt-3 max-w-2xl text-[rgb(var(--mm-fg)/0.70)]">
        Release notes pulled from GitHub Releases.
      </p>

      <div className="mt-6 text-sm text-[rgb(var(--mm-fg)/0.70)]">
        <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={RELEASES_WEB} target="_blank" rel="noreferrer">
          View all releases ↗
        </Link>
      </div>

      {error && (
        <div className="mt-6 rounded-2xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] p-5 text-sm text-[rgb(var(--mm-fg)/0.70)] sm:mt-8 sm:p-6">
          {error}
        </div>
      )}

      <div className="mt-6 grid gap-3 sm:mt-8">
        {releases
          .filter((r) => !r.draft)
          .slice(0, 12)
          .map((r) => (
            <article key={r.id} className="rounded-2xl border border-[rgb(var(--mm-fg)/0.10)] bg-[rgb(var(--mm-fg)/0.03)] p-5 sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-base font-semibold text-[rgb(var(--mm-fg))]">
                  {r.name || r.tag_name}
                  {r.prerelease ? <span className="ml-2 text-xs text-[rgb(var(--mm-fg)/0.50)]">pre-release</span> : null}
                </div>
                <div className="text-xs text-[rgb(var(--mm-fg)/0.50)]">{formatDate(r.published_at)}</div>
              </div>

              <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-[rgb(var(--mm-fg)/0.70)]">
                {snippet(r.body)}
              </p>

              <div className="mt-4">
                <Link className="underline hover:text-[rgb(var(--mm-fg))]" href={r.html_url} target="_blank" rel="noreferrer">
                  Read full notes ↗
                </Link>
              </div>
            </article>
          ))}
      </div>
    </Shell>
  );
}
