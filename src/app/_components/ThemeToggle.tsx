"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "mm-theme";

function readTheme(): Theme {
  const t = document.documentElement.dataset.theme;
  if (t === "dark" || t === "light") return t;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function writeTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    // Storage may be blocked; this still ensures "manual choice wins" within the session.
    (window as unknown as { __mm_theme_user_override?: boolean }).__mm_theme_user_override = true;
  } catch {
    // ignore
  }
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore
  }
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-14a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM4 11a1 1 0 0 1 1 1 1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1Zm18 0a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1ZM6.34 6.34a1 1 0 0 1 1.41 0l.7.7a1 1 0 1 1-1.41 1.41l-.7-.7a1 1 0 0 1 0-1.41Zm10.9 10.9a1 1 0 0 1 1.41 0l.7.7a1 1 0 0 1-1.41 1.41l-.7-.7a1 1 0 0 1 0-1.41ZM6.34 17.66a1 1 0 0 1 0-1.41l.7-.7a1 1 0 1 1 1.41 1.41l-.7.7a1 1 0 0 1-1.41 0Zm10.9-10.9a1 1 0 0 1 0-1.41l.7-.7a1 1 0 1 1 1.41 1.41l-.7.7a1 1 0 0 1-1.41 0Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M21 14.2A7.2 7.2 0 0 1 9.8 3a1 1 0 0 0-1.2 1.2A8.8 8.8 0 1 0 19.8 15.4a1 1 0 0 0 1.2-1.2Z"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return readTheme();
  });

  useEffect(() => {
    const mql = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    if (!mql) return;

    const onChange = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "light" || stored === "dark") return;
      } catch {
        // ignore
      }

      try {
        const w = window as unknown as { __mm_theme_user_override?: boolean };
        if (w.__mm_theme_user_override) return;
      } catch {
        // ignore
      }

      setTheme(mql.matches ? "dark" : "light");
    };

    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    writeTheme(next);
    setTheme(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggle}
      suppressHydrationWarning
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgb(var(--mm-fg)/0.12)] bg-[rgb(var(--mm-fg)/0.05)] text-[rgb(var(--mm-fg)/0.75)] hover:bg-[rgb(var(--mm-fg)/0.08)] hover:text-[rgb(var(--mm-fg))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--mm-fg)/0.25)]"
    >
      <span className="mm-theme-icon-sun">
        <SunIcon />
      </span>
      <span className="mm-theme-icon-moon">
        <MoonIcon />
      </span>
    </button>
  );
}
