const STATS = [
  { value: "8+", label: "Public repos shipped" },
  { value: "Full-stack", label: "Frontend to backend" },
  { value: "Open", label: "Available for freelance work" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-16">
      <div className="grid grid-cols-1 gap-5 rounded-xl border border-border bg-surface p-6 sm:grid-cols-3">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-mono text-2xl font-bold text-accent sm:text-3xl">{s.value}</div>
            <div className="mt-1 text-xs text-text-muted sm:text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
