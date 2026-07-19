const LANGUAGES = [
  "PHP",
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "C++",
  "C#",
  "HTML5",
  "CSS",
  "React Native",
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
      <div className="mb-10">
        <span className="font-mono text-sm text-accent-2">// skills.js</span>
        <h2 className="mt-1 font-mono text-2xl sm:text-3xl">Skills</h2>
        <p className="mt-2 text-text-muted">Languages I use across my repos</p>
      </div>

      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="flex flex-wrap gap-3">
          {LANGUAGES.map((lang) => (
            <div key={lang} className="skill-chip rounded-lg border border-border bg-surface-2 px-5 py-3 font-mono text-sm">
              {lang}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
