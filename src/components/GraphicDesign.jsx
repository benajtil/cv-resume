import { useEffect, useMemo, useRef, useState } from "react";

const files = import.meta.glob(
  "../assets/album/GraphicDesign/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    import: "default",
  },
);

export default function GraphicDesignSlideshow() {
  const images = useMemo(() => Object.values(files), []);
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  // autoplay
  useEffect(() => {
    if (!images.length) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2800);

    return () => clearInterval(timer.current);
  }, [images.length]);

  // pause on hover
  const pause = () => timer.current && clearInterval(timer.current);
  const resume = () => {
    if (!images.length) return;
    pause();
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2800);
  };

  if (!images.length)
    return <div className="text-white/70">No images found.</div>;

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  // show 3 “stacked” cards for cool depth
  const a = images[index];
  const b = images[(index + 1) % images.length];
  const c = images[(index + 2) % images.length];

  return (
    <section className="w-full">
      <div className="flex items-end justify-between gap-3 mb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Graphic Design
          </h2>
          <p className="text-white/60 text-sm">
            Auto slideshow • {index + 1}/{images.length}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prev}
            className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm backdrop-blur"
          >
            Prev
          </button>
          <button
            onClick={next}
            className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm backdrop-blur"
          >
            Next
          </button>
        </div>
      </div>

      <div
        onMouseEnter={pause}
        onMouseLeave={resume}
        className="relative w-full max-w-4xl mx-auto"
      >
        {/* glow background */}
        <div className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-40 bg-gradient-to-r from-gray-400 to-gray-100" />

        {/* stacked cards */}
        <div className="relative rounded-[2rem] p-4 md:p-6 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
          <div className="relative aspect-[16/10] w-full">
            {/* 3rd card */}
            <img
              src={c}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-40 scale-[0.92] translate-y-6"
              draggable={false}
            />
            {/* 2nd card */}
            <img
              src={b}
              alt=""
              className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-60 scale-[0.96] translate-y-3"
              draggable={false}
            />
            {/* active card */}
            <img
              key={a}
              src={a}
              alt={`Design ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl
                         animate-[fadeIn_.45s_ease-out]"
              draggable={false}
            />

            {/* overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            {/* bottom chip */}
            <div className="absolute bottom-3 left-3 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-black/40 text-white text-xs border border-white/10 backdrop-blur">
                Branding / Visuals
              </span>
              <span className="px-3 py-1 rounded-full bg-black/40 text-white text-xs border border-white/10 backdrop-blur">
                Auto-scroll
              </span>
            </div>
          </div>

          {/* dots */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={[
                  "h-2.5 rounded-full transition-all",
                  i === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/35 hover:bg-white/55",
                ].join(" ")}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* keyframes */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: .4; transform: scale(.985); }
            to   { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </div>
    </section>
  );
}
