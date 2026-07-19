import Principles from "./Principles";
import Process from "./Process";

const SERVICES = [
  {
    icon: "◆",
    title: "Full-stack web apps",
    body: "End-to-end builds: data model, backend, and a frontend that feels obvious to use.",
  },
  {
    icon: "▲",
    title: "APIs & backend systems",
    body: "REST/JSON APIs, auth, and integrations designed to hold up under real traffic.",
  },
  {
    icon: "●",
    title: "Database design",
    body: "Schemas and queries that stay fast and sane as the data grows.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-10">
        <span className="font-mono text-sm text-accent-2">// services.js</span>
        <h2 className="mt-1 font-mono text-3xl">What I do</h2>
        <p className="mt-2 text-text-muted">
          The kinds of projects I take on, how I build them, and how we&apos;d work together.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.title} className="rounded-xl border border-border bg-surface p-6">
            <span className="text-2xl text-accent">{s.icon}</span>
            <h3 className="mt-3 font-mono font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <Principles />
      <Process />
    </section>
  );
}
