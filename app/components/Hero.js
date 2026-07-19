"use client";

import { useEffect, useState } from "react";

const COMMAND = "whoami";
const OUTPUT = "Hussein Khamis, Full-Stack Developer";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      i += 1;
      setTyped(COMMAND.slice(0, i));
      if (i >= COMMAND.length) {
        clearInterval(typeTimer);
        setTimeout(() => setShowOutput(true), 300);
      }
    }, 110);
    return () => clearInterval(typeTimer);
  }, []);

  return (
    <section className="flex min-h-[92vh] items-center justify-center px-6 pb-12 pt-16">
      <div className="w-full max-w-xl text-center">
        <div className="mb-10 overflow-hidden rounded-xl border border-border bg-surface text-left shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-xs text-text-muted">hussein@portfolio: ~</span>
          </div>
          <div className="min-h-[70px] px-5 py-4 font-mono text-[0.95rem]">
            <div>
              <span className="font-bold text-accent-2">➜</span>{" "}
              <span className="text-accent">~</span>{" "}
              <span>{typed}</span>
              <span className="animate-blink text-accent">▌</span>
            </div>
            {showOutput && (
              <div className="mt-2 text-text-muted">{OUTPUT}</div>
            )}
          </div>
        </div>

        <h1 className="mb-1 font-mono text-4xl font-extrabold tracking-tight sm:text-5xl">
          Hussein Khamis
        </h1>
        <p className="mb-4 font-mono text-lg text-accent">Full-Stack Developer</p>
        <p className="mx-auto mb-8 max-w-md text-text-muted">
          I build things end to end, from the database up to the pixels you click on.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
          >
            View projects
          </a>
          <a
            href="/cv.pdf"
            download="Hussein_Khamis_CV.pdf"
            className="rounded-lg border border-border px-6 py-3 font-semibold transition-colors hover:bg-surface"
          >
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}
