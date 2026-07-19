"use client";

import { useState } from "react";

const SITEMAP = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const [phoneOpen, setPhoneOpen] = useState(false);

  return (
    <footer className="border-t border-border px-6 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 font-mono text-sm sm:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <span className="text-2xl font-bold tracking-wide text-accent">hkhamis</span>
          <p className="mt-3 max-w-[32ch] text-base text-text-muted">
            Full-stack developer, Beirut · Remote. Building things end to end.
          </p>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-text-muted">Sitemap</span>
          <ul className="mt-4 flex flex-col gap-2.5">
            {SITEMAP.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-text-muted hover:text-text">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-text-muted">Contact</span>
          <ul className="mt-4 flex flex-col gap-2.5">
            <li>
              <a href="mailto:khamishussein2003@gmail.com" className="text-text-muted hover:text-text">
                khamishussein2003@gmail.com
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setPhoneOpen(true)}
                className="text-text-muted hover:text-text"
              >
                +961 81 396 666
              </button>
            </li>
            <li>
              <a
                href="https://github.com/khamis9"
                target="_blank"
                rel="noopener"
                className="text-text-muted hover:text-text"
              >
                github.com/khamis9
              </a>
            </li>
            <li>
              <a href="/cv.pdf" download="Hussein_Khamis_CV.pdf" className="text-text-muted hover:text-text">
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-5xl border-t border-border pt-6 font-mono text-xs text-text-muted">
        Built by Hussein Khamis · © {new Date().getFullYear()}
      </p>

      {phoneOpen && (
        <div
          className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setPhoneOpen(false)}
        >
          <div
            className="animate-modal-in flex w-72 flex-col gap-2.5 rounded-xl border border-border bg-surface p-6 shadow-[0_0_40px_-8px_var(--accent)]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-1 font-mono text-sm text-text-muted">Reach +961 81 396 666 via:</p>
            <a
              href="tel:+96181396666"
              className="rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-center font-semibold transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              Call
            </a>
            <a
              href="https://wa.me/96181396666"
              target="_blank"
              rel="noopener"
              className="rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-center font-semibold transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              WhatsApp
            </a>
            <a
              href="sms:+96181396666"
              className="rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-center font-semibold transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              SMS
            </a>
            <button
              type="button"
              onClick={() => setPhoneOpen(false)}
              className="mt-1 text-sm text-text-muted hover:text-text"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
