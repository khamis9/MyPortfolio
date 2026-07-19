const STEPS = [
  {
    n: "01",
    title: "Discovery call",
    body: "We talk through what you need, walk through the rough edges, and figure out if it's a fit. No charge, no pressure.",
  },
  {
    n: "02",
    title: "Design & build",
    body: "I scope it, share progress as I go, and flag anything that changes the plan early rather than at the end.",
  },
  {
    n: "03",
    title: "Launch & handoff",
    body: "Shipped, documented, and handed off cleanly. Available for questions after launch.",
  },
];

export default function Process() {
  return (
    <div className="mt-14">
      <h3 className="mb-5 font-mono text-xl font-bold">How I work</h3>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className="rounded-xl border border-border bg-surface p-6">
            <span className="font-mono text-sm text-text-muted">{s.n}</span>
            <h4 className="mt-2 font-mono font-bold text-accent">{s.title}</h4>
            <p className="mt-2 text-sm text-text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
