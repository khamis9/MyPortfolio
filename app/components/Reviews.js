import { getSupabase } from "@/lib/supabase";
import ReviewForm from "./ReviewForm";

async function getReviews() {
  const supabase = getSupabase();
  if (!supabase) return { reviews: [], configured: false };

  const { data, error } = await supabase
    .from("reviews")
    .select("id, name, role, rating, message, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) return { reviews: [], configured: true };
  return { reviews: data, configured: true };
}

export default async function Reviews() {
  const { reviews, configured } = await getReviews();

  return (
    <section id="reviews" className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-10">
        <span className="font-mono text-sm text-accent-2">// reviews.js</span>
        <h2 className="mt-1 font-mono text-3xl">Reviews</h2>
      </div>

      {!configured && (
        <p className="mb-8 rounded-lg border border-border bg-surface p-4 font-mono text-sm text-text-muted">
          Reviews aren&apos;t connected yet. Add your Supabase keys in <code>.env.local</code> (see README.md) to turn this on.
        </p>
      )}

      {configured && reviews.length === 0 && (
        <p className="mb-8 font-mono text-text-muted">No reviews yet. Be the first to leave one below.</p>
      )}

      {reviews.length > 0 && (
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {reviews.map((r) => (
            <div key={r.id} className="rounded-xl border border-border bg-surface p-5">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-3xl leading-none text-accent-2 opacity-60">&ldquo;</span>
                <span className="tracking-widest text-accent">
                  {"★".repeat(r.rating)}
                  <span className="text-border">{"★".repeat(5 - r.rating)}</span>
                </span>
              </div>
              <p className="mb-3 text-[0.95rem]">{r.message}</p>
              <p className="font-mono text-sm text-text-muted">
                {r.name}
                {r.role && <span className="opacity-70"> · {r.role}</span>}
              </p>
            </div>
          ))}
        </div>
      )}

      <ReviewForm />
    </section>
  );
}
