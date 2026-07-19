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
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-10">
        <span className="font-mono text-sm text-accent-2">// faq.js</span>
        <h2 className="mt-1 font-mono text-3xl">Common questions</h2>
      </div>

      <div className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
        {FAQS.map((item) => (
          <details key={item.q} className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none">
              {item.q}
              <span className="shrink-0 font-mono text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm text-text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
