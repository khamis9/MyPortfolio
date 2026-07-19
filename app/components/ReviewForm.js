"use client";

import { useState } from "react";

export default function ReviewForm() {
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          role: data.get("role"),
          rating,
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("ok");
      form.reset();
      setRating(5);
      // Refresh so the new review shows up in the server-rendered list above.
      window.location.reload();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <div className="w-full rounded-xl border border-border bg-surface p-7">
      <h3 className="font-mono text-xl">Leave a review</h3>
      <p className="mt-1 text-text-muted">Worked with me? Drop a note and it goes live right away.</p>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3.5">
        <div className="flex flex-wrap gap-3">
          <input
            name="name"
            type="text"
            placeholder="Your name"
            required
            maxLength={60}
            className="min-w-[180px] flex-1 rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 focus:outline-2 focus:outline-accent-2"
          />
          <input
            name="role"
            type="text"
            placeholder="Role / company (optional)"
            maxLength={60}
            className="min-w-[180px] flex-1 rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 focus:outline-2 focus:outline-accent-2"
          />
        </div>

        {/* Honeypot field — hidden from real users, catches simple bots */}
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="absolute -left-[9999px]"
          aria-hidden="true"
        />

        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              className={`text-2xl transition-colors ${n <= rating ? "text-accent" : "text-border"}`}
            >
              ★
            </button>
          ))}
        </div>

        <textarea
          name="message"
          rows={4}
          placeholder="Your review"
          required
          maxLength={500}
          className="resize-y rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 focus:outline-2 focus:outline-accent-2"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-accent px-6 py-3 font-semibold text-on-accent transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "sending" ? "Submitting…" : "Submit review"}
        </button>

        {status === "ok" && (
          <p className="font-mono text-sm text-accent-2">Thanks! Your review is live.</p>
        )}
        {status === "error" && (
          <p className="font-mono text-sm text-red-400">{errorMsg}</p>
        )}
      </form>
    </div>
  );
}
