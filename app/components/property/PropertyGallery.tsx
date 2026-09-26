"use client";

import { useCallback, useEffect, useState } from "react";
import type { GalleryImage } from "../../data";
import Icon from "./Icon";

export default function PropertyGallery({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((cur) =>
        cur === null ? cur : (cur + dir + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  const [hero, ...rest] = images;
  const side = rest.slice(0, 4);

  return (
    <>
      {/* Mobile: carrusel horizontal */}
      <div className="md:hidden -mx-5 px-5 flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            type="button"
            onClick={() => setLightbox(i)}
            className="relative shrink-0 w-[82%] aspect-[4/3] rounded-lg overflow-hidden snap-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-atlantic-ink/70 text-linen label-caps">
              {img.label}
            </span>
          </button>
        ))}
      </div>

      {/* Desktop: grid estilo Airbnb */}
      <div className="hidden md:grid grid-cols-12 gap-1.5 rounded-xl overflow-hidden min-h-[480px] lg:h-[560px]">
        <button
          type="button"
          onClick={() => setLightbox(0)}
          className="group col-span-7 relative overflow-hidden text-left"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.src}
            alt={hero.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-atlantic-ink/60 via-transparent to-transparent opacity-70" />
          <span className="absolute bottom-5 left-5 text-linen">
            <span className="px-2.5 py-1 rounded bg-atlantic-ink/70 label-caps inline-block mb-2">
              Perspectiva Principal
            </span>
            <span className="font-display text-[20px] block">{hero.label}</span>
          </span>
        </button>
        <div className="col-span-5 grid grid-cols-2 gap-1.5">
          {side.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              onClick={() => setLightbox(i + 1)}
              className="group relative overflow-hidden text-left h-full min-h-[150px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-atlantic-ink/0 group-hover:bg-atlantic-ink/20 transition-colors" />
              <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-atlantic-ink/70 text-linen label-caps">
                {img.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <p className="text-[13px] text-slate-soft">
          {images.length} fotografías · recorrido 3D y vídeo dron disponibles bajo NDA
        </p>
        <button
          type="button"
          onClick={() => setLightbox(0)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-chalk border border-hairline hover:bg-linen-deep text-atlantic label-caps shadow-sm transition-colors"
        >
          <Icon name="expand" className="w-4 h-4" />
          <span>Ver las {images.length} fotografías</span>
        </button>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[80] bg-atlantic-ink/95 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Galería de la propiedad"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 md:px-10 py-4 text-linen">
            <p className="label-caps text-dune-pale">
              {lightbox + 1} / {images.length} · {images[lightbox].label}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar galería"
              className="w-10 h-10 rounded-full border border-linen/25 flex items-center justify-center hover:bg-linen/10 transition-colors"
            >
              <Icon name="close" className="w-5 h-5" />
            </button>
          </div>
          <div
            className="flex-1 flex items-center justify-center gap-3 px-4 md:px-16 pb-4 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Foto anterior"
              className="w-11 h-11 shrink-0 rounded-full border border-linen/25 text-linen hidden sm:flex items-center justify-center hover:bg-linen/10 transition-colors"
            >
              <Icon name="prev" className="w-5 h-5" />
            </button>
            <div className="max-h-full max-w-5xl w-full flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={images[lightbox].src}
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Foto siguiente"
              className="w-11 h-11 shrink-0 rounded-full border border-linen/25 text-linen hidden sm:flex items-center justify-center hover:bg-linen/10 transition-colors"
            >
              <Icon name="next" className="w-5 h-5" />
            </button>
          </div>
          <div
            className="px-5 md:px-10 pb-6 flex gap-2 overflow-x-auto no-scrollbar justify-start sm:justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Ver foto ${i + 1}`}
                className={`shrink-0 w-20 h-14 rounded overflow-hidden border-2 transition-all ${
                  i === lightbox ? "border-dune" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          {/* Controles móviles */}
          <div className="sm:hidden px-5 pb-6 flex items-center justify-between">
            <button
              type="button"
              onClick={() => step(-1)}
              className="px-5 py-3 rounded bg-linen/10 text-linen label-caps"
            >
              ← Anterior
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="px-5 py-3 rounded bg-linen/10 text-linen label-caps"
            >
              Siguiente →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
