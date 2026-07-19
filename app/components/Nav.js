"use client";

import { useState } from "react";

const TABS = [
  { href: "#about", label: "about.js" },
  { href: "#projects", label: "projects.js" },
  { href: "#skills", label: "skills.js" },
  { href: "#services", label: "services.js" },
  { href: "#reviews", label: "reviews.js" },
  { href: "#faq", label: "faq.js" },
  { href: "#contact", label: "contact.js" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-6 border-b border-border bg-bg/85 px-4 backdrop-blur-md sm:px-8">
      <span className="font-mono font-bold tracking-wide text-accent">hkhamis</span>

      <nav className="ml-2 hidden flex-1 gap-1 lg:flex">
        {TABS.map((t) => (
          <a
            key={t.href}
            href={t.href}
            className="flex items-center gap-2 rounded-t-lg border border-transparent px-3.5 py-2 font-mono text-sm text-text-muted transition-colors hover:bg-surface hover:text-text"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-text-muted" />
            {t.label}
          </a>
        ))}
      </nav>

      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="ml-auto flex flex-col gap-1 p-2 lg:hidden"
      >
        <span className="h-0.5 w-5 bg-text" />
        <span className="h-0.5 w-5 bg-text" />
        <span className="h-0.5 w-5 bg-text" />
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-14 flex flex-col gap-1 border-b border-border bg-bg p-2 lg:hidden">
          {TABS.map((t) => (
            <a
              key={t.href}
              href={t.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3.5 py-2 font-mono text-sm text-text-muted hover:bg-surface hover:text-text"
            >
              {t.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
