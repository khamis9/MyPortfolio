const GITHUB_USER = "khamis9";

// Fetches repos + aggregates language stats. Cached & revalidated by Next.js.
export async function getGithubData() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 3600 }, // refresh once an hour
  });

  if (!res.ok) {
    return { repos: [], languages: [] };
  }

  const all = await res.json();
  if (!Array.isArray(all)) return { repos: [], languages: [] };

  const repos = all
    .filter((r) => !r.fork && !r.private)
    .sort((a, b) => (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at)))
    .slice(0, 6)
    .map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage,
      language: r.language,
      stars: r.stargazers_count,
      updated: r.pushed_at,
    }));

  // Aggregate language usage across all non-fork repos for the skills section
  const counts = {};
  all.filter((r) => !r.fork && r.language).forEach((r) => {
    counts[r.language] = (counts[r.language] || 0) + 1;
  });
  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
  const languages = Object.entries(counts)
    .map(([name, count]) => ({ name, pct: Math.round((count / total) * 100) }))
    .sort((a, b) => b.pct - a.pct)
    .slice(0, 6);

  return { repos, languages };
}
