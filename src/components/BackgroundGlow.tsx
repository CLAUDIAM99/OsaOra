"use client";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {/* Lavender glow top-center */}
      <div
        className="absolute -top-[40%] left-1/2 h-[80vw] w-[80vw] -translate-x-1/2 rounded-full bg-osa-lavender/20 blur-[80px] sm:h-[60vw] sm:w-[60vw]"
        style={{ maxWidth: "900px" }}
      />
      {/* Peach glow right */}
      <div
        className="absolute -right-[20%] top-[30%] h-[50vw] w-[50vw] rounded-full bg-osa-accent/15 blur-[70px] sm:h-[40vw] sm:w-[40vw]"
        style={{ maxWidth: "500px" }}
      />
      {/* Rose glow bottom-left */}
      <div
        className="absolute -left-[15%] bottom-[10%] h-[45vw] w-[45vw] rounded-full bg-osa-secondary/15 blur-[60px] sm:h-[35vw] sm:w-[35vw]"
        style={{ maxWidth: "400px" }}
      />
    </div>
  );
}
