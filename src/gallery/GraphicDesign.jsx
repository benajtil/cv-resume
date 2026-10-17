import React, { useEffect, useMemo, useRef, useState } from "react";

const modules = import.meta.glob(
  "../assets/album/GraphicDesign/**/*.{png,jpg,jpeg,gif,webp,svg,avif}",
  { eager: true },
);

export default function GraphicDesign() {
  const images = useMemo(() => {
    return Object.entries(modules)
      .map(([path, mod]) => {
        const src = mod?.default ?? mod;
        const name = path.split("/").pop() ?? "Untitled";
        return { src, name };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const [active, setActive] = useState(null); // {src, name, i}
  const [isLoaded, setIsLoaded] = useState(false);

  // entrance animation
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  // lightbox: esc + arrows
  useEffect(() => {
    if (!active) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const prev = () => {
    if (!active) return;
    const i = (active.i - 1 + images.length) % images.length;
    setActive({ ...images[i], i });
  };

  const next = () => {
    if (!active) return;
    const i = (active.i + 1) % images.length;
    setActive({ ...images[i], i });
  };

  // deterministic "random" vibe per image
  const vibe = (i) => {
    // small variation but stable across refresh
    const r = ((i * 9301 + 49297) % 233280) / 233280; // pseudo-random 0..1
    const rotate = (r * 6 - 3).toFixed(2); // -3..+3 deg
    const y = Math.round(r * 10); // 0..10px
    const glow = Math.round(r * 360); // hue-ish
    return { rotate, y, glow };
  };

  return (
    <main className="min-h-screen px-5 sm:px-8 py-14 text-[var(--foreground)] bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Graphic Design
            </h1>
            <p className="opacity-70 mt-2">
              Scroll-driven gallery wall • {images.length} works • Click any to
              view
            </p>
          </div>

          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm opacity-80">
              Masonry
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm opacity-80">
              Lightbox
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm opacity-80">
              Hover motion
            </span>
          </div>
        </div>

        {images.length === 0 ? (
          <p className="opacity-70">
            No images found. Put files in{" "}
            <code>src/assets/album/GraphicDesign/</code>.
          </p>
        ) : (
          <>
            {/* Masonry columns */}
            <div
              className={[
                "columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]",
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2",
                "transition-all duration-700",
              ].join(" ")}
            >
              {images.map(({ src, name }, i) => {
                const s = vibe(i);

                return (
                  <figure
                    key={src}
                    className="mb-6 break-inside-avoid"
                    style={{
                      transform: `translateY(${s.y}px) rotate(${s.rotate}deg)`,
                    }}
                  >
                    <HoverTiltCard
                      glow={s.glow}
                      onClick={() => setActive({ src, name, i })}
                    >
                      <img
                        src={src}
                        alt={name}
                        loading="lazy"
                        className="w-full h-auto object-contain select-none"
                        draggable={false}
                      />
                    </HoverTiltCard>

                    <figcaption className="mt-2 text-sm opacity-70 truncate">
                      {name}
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            <div className="h-12" />
          </>
        )}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* top controls */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-white/80 text-sm truncate max-w-[70%]">
                {active.name}
              </div>
              <button
                onClick={() => setActive(null)}
                className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm"
              >
                Close
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
              <div className="absolute -inset-10 opacity-35 blur-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
              <img
                src={active.src}
                alt={active.name}
                className="relative w-full max-h-[80vh] object-contain bg-black/20"
                draggable={false}
              />
            </div>

            {/* bottom controls */}
            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                onClick={prev}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm"
              >
                ← Prev
              </button>

              <div className="text-white/60 text-sm">
                {active.i + 1} / {images.length}
              </div>

              <button
                onClick={next}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm"
              >
                Next →
              </button>
            </div>

            <p className="mt-2 text-white/40 text-xs">
              Tip: Use ← → keys, Esc to close
            </p>
          </div>
        </div>
      )}

      {/* subtle floating background blobs */}
      <FloatingBlobs />
    </main>
  );
}

/* ---------- Fancy card with hover tilt + glow ---------- */
function HoverTiltCard({ children, onClick, glow = 200 }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({ transform: "perspective(900px)" });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const rx = (y / r.height - 0.5) * -8; // tilt up/down
    const ry = (x / r.width - 0.5) * 10; // tilt left/right

    setStyle({
      transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`,
    });
  };

  const onLeave = () => {
    setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
      className="group w-full text-left"
      style={style}
    >
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl transition-transform duration-200">
        {/* glow */}
        <div
          className="absolute -inset-10 opacity-25 blur-2xl"
          style={{
            background: `conic-gradient(from 180deg, hsla(${glow},90%,60%,.8), hsla(${
              (glow + 80) % 360
            },90%,60%,.8), hsla(${(glow + 160) % 360},90%,60%,.8))`,
          }}
        />

        {/* shimmer overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute -inset-[40%] rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-[shine_1.2s_ease-out]" />
        </div>

        <div className="relative">
          {children}
          {/* bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />
        </div>
      </div>

      <style>{`
        @keyframes shine {
          from { transform: translateX(-40%); }
          to   { transform: translateX(40%); }
        }
      `}</style>
    </button>
  );
}

/* ---------- Background blobs (subtle motion) ---------- */
function FloatingBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-25 bg-pink-500 animate-[floatA_10s_ease-in-out_infinite]" />
      <div className="absolute top-40 -right-28 w-[520px] h-[520px] rounded-full blur-3xl opacity-20 bg-cyan-500 animate-[floatB_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-120px] left-1/3 w-[560px] h-[560px] rounded-full blur-3xl opacity-15 bg-purple-500 animate-[floatC_14s_ease-in-out_infinite]" />

      <style>{`
        @keyframes floatA { 0%,100%{ transform: translate(0,0)} 50%{ transform: translate(40px,30px)} }
        @keyframes floatB { 0%,100%{ transform: translate(0,0)} 50%{ transform: translate(-35px,25px)} }
        @keyframes floatC { 0%,100%{ transform: translate(0,0)} 50%{ transform: translate(25px,-30px)} }
      `}</style>
    </div>
  );
}
