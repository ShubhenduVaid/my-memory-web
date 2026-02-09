"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5 1.5 1.5 0 0 1 18.5 8h-13A1.5 1.5 0 0 1 4 6.5Zm0 5.5A1.5 1.5 0 0 1 5.5 10.5h13A1.5 1.5 0 0 1 20 12a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 12Zm1.5 5.5A1.5 1.5 0 0 0 4 18.5 1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5h-13Z"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M18.3 5.7a1 1 0 0 1 0 1.4L13.4 12l4.9 4.9a1 1 0 1 1-1.4 1.4L12 13.4l-4.9 4.9a1 1 0 1 1-1.4-1.4l4.9-4.9-4.9-4.9a1 1 0 0 1 1.4-1.4L12 10.6l4.9-4.9a1 1 0 0 1 1.4 0Z"
      />
    </svg>
  );
}

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const rid = useId();
  const panelId = `mm-mobile-menu-${rid}`;
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgb(var(--mm-fg)/0.12)] bg-[rgb(var(--mm-fg)/0.05)] text-[rgb(var(--mm-fg)/0.75)] hover:bg-[rgb(var(--mm-fg)/0.08)] hover:text-[rgb(var(--mm-fg))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--mm-fg)/0.25)] lg:hidden"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-full overflow-y-auto overscroll-contain border-l border-[rgb(var(--mm-fg)/0.12)] bg-[rgb(var(--mm-bg))] shadow-2xl sm:w-[19rem] sm:max-w-[85vw]"
          >
            <div className="flex items-center justify-between border-b border-[rgb(var(--mm-fg)/0.10)] px-4 py-3">
              <div className="text-sm font-semibold text-[rgb(var(--mm-fg))]">Menu</div>
              <button
                type="button"
                aria-label="Close menu"
                ref={closeButtonRef}
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[rgb(var(--mm-fg)/0.12)] bg-[rgb(var(--mm-fg)/0.05)] text-[rgb(var(--mm-fg)/0.75)] hover:bg-[rgb(var(--mm-fg)/0.08)] hover:text-[rgb(var(--mm-fg))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--mm-fg)/0.25)]"
              >
                <CloseIcon />
              </button>
            </div>

            <nav className="flex flex-col p-3">
              {links.map((l) => {
                const isActive = !l.external && pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noreferrer" : undefined}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "rounded-xl px-4 py-3 text-sm font-medium text-[rgb(var(--mm-fg))]",
                      isActive ? "bg-[rgb(var(--mm-fg)/0.06)]" : "hover:bg-[rgb(var(--mm-fg)/0.05)]",
                    ].join(" ")}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                    {l.external ? <span className="ml-1 text-[rgb(var(--mm-fg)/0.45)]">↗</span> : null}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>,
        document.body,
        )
        : null}
    </>
  );
}
