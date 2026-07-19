const PROJECTS = [
  {
    name: "Ma3akBand",
    url: "https://github.com/khamis9/Ma3akBand",
    description:
      "A React Native health-monitoring app that pairs with an ESP32 wearable over BLE, streaming live BPM, GSR, and motion data, and alerting a paired support partner if something looks off.",
    tags: ["React Native", "Expo", "Supabase", "BLE"],
  },
  {
    name: "proxy-caching-server",
    url: "https://github.com/khamis9/proxy-caching-server",
    description:
      "A multithreaded HTTP proxy built from raw Python sockets, with TTL/LRU response caching, host and keyword filtering, HTTPS tunneling via CONNECT, and a password-protected admin dashboard for live cache and log control.",
    tags: ["Python", "Sockets", "Caching"],
  },
  {
    name: "NextThursday",
    url: "https://github.com/khamis9/NextThursday",
    description:
      "A full-stack task manager: an Express, Prisma, and PostgreSQL API behind JWT auth, paired with a React Native app that adds location-tagged tasks, an interactive map, a calendar view, and reminders.",
    tags: ["React Native", "Express", "PostgreSQL", "Prisma"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-10">
        <span className="font-mono text-sm text-accent-2">// projects.js</span>
        <h2 className="mt-1 font-mono text-3xl">Built &amp; shipped</h2>
        <p className="mt-2 text-text-muted">
          A few of the ones I&apos;m proudest of. More on{" "}
          <a href="https://github.com/khamis9" target="_blank" rel="noopener" className="text-accent-2 hover:underline">
            github.com/khamis9
          </a>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener"
            className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-1 hover:border-accent-2"
          >
            <span className="font-mono font-bold text-accent">{project.name}</span>
            <span className="flex-1 text-sm text-text-muted">{project.description}</span>
            <span className="flex flex-wrap items-center gap-2 font-mono text-xs">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-surface-2 px-2.5 py-1 text-text-muted">
                  {tag}
                </span>
              ))}
            </span>
            <span className="text-sm font-semibold text-accent-2">View project →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
