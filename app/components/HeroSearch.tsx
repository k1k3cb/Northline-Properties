"use client";

import { useState } from "react";

export default function HeroSearch() {
  const [sent, setSent] = useState(false);

  return (
    <div className="w-full bg-linen/95 backdrop-blur-2xl rounded-lg shadow-2xl p-5 md:p-7">
      <form
        className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          window.setTimeout(() => setSent(false), 2500);
        }}
      >
        {[
          { label: "Ubicación", options: ["Rías Baixas (Vigo, Baiona, Sanxenxo)", "A Coruña & Oleiros", "Santiago de Compostela", "Ribeira Sacra"] },
          { label: "Tipología", options: ["Villas de costa", "Pazos & Casas señoriales", "Áticos de diseño", "Fincas vitivinícolas"] },
          { label: "Rango de Valor", options: ["1.200.000 € - 2.500.000 €", "1.200.000 € - 10.000.000 €+", "Pazos Singulares (> 4.000.000 €)"] },
        ].map((f) => (
          <div key={f.label} className="space-y-1.5">
            <label className="block label-caps text-dune-deep">{f.label}</label>
            <div className="relative flex items-center bg-linen-deep rounded px-3 py-2.5">
              <select
                className="w-full bg-transparent text-[13px] text-atlantic focus:outline-none appearance-none cursor-pointer pr-6"
                defaultValue={f.options[0]}
              >
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <span aria-hidden className="absolute right-3 text-slate-mute pointer-events-none">
                ▾
              </span>
            </div>
          </div>
        ))}

        <div className="flex items-center gap-2">
          <button
            className="w-full h-[46px] inline-flex items-center justify-center gap-2 bg-atlantic text-linen rounded hover:bg-atlantic-deep transition-colors duration-200 px-6 label-caps shadow-md"
            type="submit"
          >
            <span aria-hidden>◈</span>
            <span>{sent ? "Búsqueda lista (38)" : "Explorar Colección (38)"}</span>
          </button>
        </div>
      </form>
      <div className="mt-4 pt-3 border-t border-hairline flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-soft text-[13px]">
        <span className="label-caps text-slate-mute">Tendencias:</span>
        <a className="hover:text-atlantic transition-colors" href="#propiedades">
          Cabo Home Primera Línea
        </a>
        <span className="text-slate-line">·</span>
        <a className="hover:text-atlantic transition-colors" href="#propiedades">
          Viñedos D.O. Albariño
        </a>
        <span className="text-slate-line">·</span>
        <a className="hover:text-atlantic transition-colors" href="#propiedades">
          Vistas a las Islas Cíes
        </a>
        <span className="text-slate-line">·</span>
        <a className="hover:text-atlantic transition-colors" href="#propiedades">
          Áticos Dársena A Coruña
        </a>
      </div>
    </div>
  );
}
