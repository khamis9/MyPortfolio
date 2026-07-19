const PRINCIPLES = [
  {
    title: "Security",
    body: "Auth, input handling, and secrets are treated as first-class, not an afterthought.",
  },
  {
    title: "Performance",
    body: "Pages load fast and queries stay efficient as data grows, not just in the demo.",
  },
  {
    title: "Code quality",
    body: "Code that the next person, often future me, can read and change without fear.",
  },
  {
    title: "Communication",
    body: "Clear updates on progress and blockers, so there are no surprises at launch.",
  },
];

export default function Principles() {
  return (
    <div className="mt-14">
      <h3 className="mb-1 font-mono text-xl font-bold">How I build</h3>
      <p className="mb-5 text-sm text-text-muted">The things I don&apos;t compromise on.</p>

      <div className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
        {PRINCIPLES.map((p) => (
          <div key={p.title} className="grid grid-cols-1 gap-1 p-5 sm:grid-cols-[160px_1fr] sm:gap-6">
            <span className="font-mono font-bold text-accent">{p.title}</span>
            <span className="text-sm text-text-muted">{p.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
