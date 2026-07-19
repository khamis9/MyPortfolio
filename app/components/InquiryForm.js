"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
          website: data.get("website"), // honeypot
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-xl flex-col gap-3.5">
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
          name="email"
          type="email"
          placeholder="Your email"
          required
          maxLength={120}
          className="min-w-[180px] flex-1 rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 focus:outline-2 focus:outline-accent-2"
        />
      </div>

      <input
        name="company"
        type="text"
        placeholder="Company / project name (optional)"
        maxLength={60}
        className="rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 focus:outline-2 focus:outline-accent-2"
      />

      {/* Honeypot field — hidden from real users, catches simple bots */}
      <input
        name="website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px]"
        aria-hidden="true"
      />

      <textarea
        name="message"
        rows={4}
        placeholder="What are you trying to build?"
        required
        maxLength={1000}
        className="resize-y rounded-lg border border-border bg-surface-2 px-3.5 py-2.5 focus:outline-2 focus:outline-accent-2"
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-lg bg-accent px-6 py-3 font-semibold text-on-accent transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "ok" && (
        <p className="font-mono text-sm text-accent-2">Thanks, I&apos;ll get back to you soon.</p>
      )}
      {status === "error" && <p className="font-mono text-sm text-red-400">{errorMsg}</p>}
    </form>
  );
}
