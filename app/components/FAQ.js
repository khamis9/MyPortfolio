"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What's your typical timeline?",
    a: "Depends on scope. A focused feature can be days, a full build is usually weeks. I'll give a real estimate after the discovery call.",
  },
  {
    q: "What do you charge?",
    a: "Projects start around $200 to $300 as a base, then the final number depends on scope, timeline, and complexity. I'll give you a clear quote after the discovery call, no surprise costs.",
  },
  {
    q: "Do you work with clients outside Lebanon?",
    a: "Yes, I work remotely with clients anywhere, async-friendly with regular check-ins.",
  },
  {
    q: "What's your tech stack?",
    a: "It differs from each project. I lean on JavaScript and TypeScript most, React and Node especially, but I've also shipped things in PHP and Laravel, Python, and native mobile with React Native. I'd rather use the right tool for what you're building than force everything through one stack.",
  },
  {
    q: "How do we get started?",
    a: "Reach out through the form below or email me directly, and I'll follow up to set up a quick call.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
      <div className="mb-10">
        <span className="font-mono text-sm text-accent-2">// faq.js</span>
        <h2 className="mt-1 font-mono text-2xl sm:text-3xl">Common questions</h2>
      </div>

      <div className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="p-5">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 text-left font-semibold"
              >
                {item.q}
                <span
                  className={`shrink-0 font-mono text-accent transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className="faq-panel grid"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="pt-3 text-sm text-text-muted">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
