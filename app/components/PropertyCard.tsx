"use client";

import { useState } from "react";
import type { Property } from "../data";

function tagClasses(style: Property["tagStyle"]) {
  if (style === "gold") return "bg-dune-deep text-linen";
  if (style === "pale") return "bg-dune-pale text-[#281802]";
  return "bg-atlantic/85 backdrop-blur-md text-linen";
}

export default function PropertyCard({ p }: { p: Property }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="group img-zoom bg-chalk rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-linen-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.image} alt={p.alt} loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          <span className={`px-2.5 py-1 rounded label-caps ${tagClasses(p.tagStyle)}`}>
            {p.tag}
          </span>
        </div>
        <button
          aria-label="Guardar propiedad"
          aria-pressed={saved}
          type="button"
          onClick={() => setSaved((v) => !v)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-colors shadow-sm ${
            saved ? "bg-dune-pale text-atlantic" : "bg-linen/90 hover:bg-chalk text-atlantic"
          }`}
        >
          <span aria-hidden className="text-[16px] leading-none">
            {saved ? "♥" : "♡"}
          </span>
        </button>
        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-linen/90 backdrop-blur-sm text-atlantic label-caps">
          {p.locationShort}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between gap-5">
        <div className="space-y-2">
          <span className="label-caps text-dune-deep block">{p.zone}</span>
          <h3 className="font-display text-[22px] leading-[30px] text-atlantic group-hover:text-dune-deep transition-colors">
            {p.title}
          </h3>
          <p className="text-[13px] leading-5 text-slate-soft clamp-2">{p.desc}</p>
        </div>

        <div className="space-y-3 pt-1">
          <div className="font-display text-[26px] text-atlantic">{p.price}</div>
          <div className="grid grid-cols-4 gap-1 p-2 rounded bg-linen-deep text-center text-[13px] text-slate-soft">
            {p.specs.map((s) => (
              <div key={s.label + s.value}>
                <span className="block font-semibold text-atlantic">{s.value}</span>
                <span className="text-[10px] uppercase tracking-[0.12em] font-semibold">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
          <a
            className="w-full py-2.5 inline-flex items-center justify-center gap-1 text-center label-caps text-atlantic bg-linen hover:bg-hairline rounded transition-colors"
            href="#contacto"
          >
            <span>Consultar Dossier</span>
            <span aria-hidden>›</span>
          </a>
        </div>
      </div>
    </article>
  );
}
