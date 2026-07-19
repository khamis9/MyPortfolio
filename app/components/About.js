import ProfilePhoto from "./ProfilePhoto";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-10">
        <span className="font-mono text-sm text-accent-2">// about.js</span>
        <h2 className="mt-1 font-mono text-3xl">About</h2>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[180px_1fr]">
        <ProfilePhoto />

        <div className="text-center sm:text-left">
          <p className="mb-4 text-text-muted">
            I&apos;m a full-stack developer who likes taking a project from a rough idea to
            something people actually use, planning the data model, wiring up the backend,
            and polishing the interface until it feels obvious.
          </p>
          <p className="mb-4 text-text-muted">
            I graduated with a degree in Computer Science from Haigazian University, and
            outside of coursework I like picking projects that stretch past typical web dev:
            wearable health tech, low-level networking, mobile apps with a real backend behind
            them. It keeps me honest about what &quot;full-stack&quot; actually means.
          </p>
          <p className="mb-4 text-text-muted">
            Most of my work lives on GitHub, where I ship, break, and fix things in the open.
            Scroll down for a live feed of what I&apos;ve been building.
          </p>
          <a
            href="https://github.com/khamis9"
            target="_blank"
            rel="noopener"
            className="font-semibold text-accent-2 hover:underline"
          >
            See all repos on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
