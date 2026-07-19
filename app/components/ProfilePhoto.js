"use client";

export default function ProfilePhoto() {
  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[180px] overflow-hidden rounded-2xl border border-border bg-surface/50 sm:mx-0">
      <img
        src="/my_pic.png"
        alt="Hussein Khamis"
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextSibling.style.display = "flex";
        }}
      />
      <div className="absolute inset-0 hidden items-center justify-center font-mono text-5xl font-extrabold text-accent">
        HK
      </div>
    </div>
  );
}
