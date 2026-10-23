"use client";

export default function ScrollHint({ variant }: { variant?: "cream" }) {
  return (
    <button
      type="button"
      aria-label="Scroll down"
      className={variant === "cream" ? "scroll-hint scroll-hint--cream" : "scroll-hint"}
      onClick={(e) => {
        const next = e.currentTarget.closest("section")?.nextElementSibling;
        next?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span className="scroll-hint-text">Scroll down</span>
      <span className="scroll-hint-arrow">↓</span>
    </button>
  );
}
