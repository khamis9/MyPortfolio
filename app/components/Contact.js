import InquiryForm from "./InquiryForm";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface/40 px-6 py-14 sm:py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="font-mono text-sm text-accent-2">// contact.js</span>
        <h2 className="mt-1 font-mono text-3xl sm:text-4xl">
          Got an idea? <span className="text-accent">Let&apos;s make it real.</span>
        </h2>
        <p className="mt-3 text-text-muted">
          Tell me what you&apos;re building, and I&apos;ll follow up to set up a quick call.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <InquiryForm />
      </div>
    </section>
  );
}
