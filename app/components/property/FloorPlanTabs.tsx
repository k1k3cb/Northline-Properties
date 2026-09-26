"use client";

import { useState } from "react";

type Room = {
  x: number;
  y: number;
  w: number;
  h: number;
  name: string;
  sub: string;
  terrace?: boolean;
  vertical?: boolean;
};

type Floor = { id: string; tab: string; title: string; area: string; rooms: Room[] };

const FLOORS: Floor[] = [
  {
    id: "principal",
    tab: "Planta Principal",
    title: "Planta 00 · Recepción, Salón & Porche",
    area: "280 m² útiles",
    rooms: [
      { x: 50, y: 40, w: 360, h: 200, name: "Gran Salón con Chimenea", sub: "92.4 m² · H. libre: 3.40 m" },
      { x: 420, y: 40, w: 220, h: 120, name: "Cocina de Autor", sub: "38.6 m² · Isla central" },
      { x: 420, y: 170, w: 220, h: 70, name: "Suite Invitados I", sub: "28.0 m² · Baño privado" },
      { x: 50, y: 250, w: 460, h: 70, name: "Terraza Volada Atlántica (68 m²)", sub: "", terrace: true },
      { x: 650, y: 40, w: 100, h: 280, name: "Zaguán & Ascensor", sub: "", vertical: true },
    ],
  },
  {
    id: "alta",
    tab: "Planta Alta",
    title: "Planta 01 · 4 Master Suites & Mirador",
    area: "210 m² útiles",
    rooms: [
      { x: 50, y: 40, w: 300, h: 130, name: "Master Suite Mirador", sub: "54.2 m² · Vestidor + baño" },
      { x: 360, y: 40, w: 140, h: 130, name: "Suite II", sub: "26.8 m²" },
      { x: 510, y: 40, w: 130, h: 130, name: "Suite III", sub: "24.5 m²" },
      { x: 50, y: 180, w: 300, h: 60, name: "Biblioteca Galería", sub: "31.0 m² · Roble macizo" },
      { x: 360, y: 180, w: 280, h: 60, name: "Terraza Mirador (42 m²)", sub: "", terrace: true },
      { x: 650, y: 40, w: 100, h: 200, name: "Distribuidor", sub: "", vertical: true },
    ],
  },
  {
    id: "spa",
    tab: "Jardín & Spa",
    title: "Planta −01 · Wellness, Cava & Garaje",
    area: "150 m² útiles",
    rooms: [
      { x: 50, y: 40, w: 250, h: 140, name: "Spa: Sauna + Hammam", sub: "48.0 m² · Piedra caliza" },
      { x: 310, y: 40, w: 180, h: 140, name: "Cava Subterránea", sub: "26.4 m² · 850 botellas" },
      { x: 500, y: 40, w: 140, h: 140, name: "Fitness", sub: "22.0 m² · Vistas al mar" },
      { x: 50, y: 190, w: 330, h: 90, name: "Garaje 4 plazas", sub: "84.0 m² · 2× Wallbox 22 kW" },
      { x: 390, y: 190, w: 250, h: 90, name: "Jardín Botánico", sub: "", terrace: true },
      { x: 650, y: 40, w: 100, h: 240, name: "Núcleo Técnico", sub: "", vertical: true },
    ],
  },
] ;

export default function FloorPlanTabs() {
  const [active, setActive] = useState<string>(FLOORS[0].id);
  const floor = FLOORS.find((f) => f.id === active) ?? FLOORS[0];

  return (
    <div className="p-5 md:p-7 bg-chalk rounded-xl shadow-sm space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-display text-[22px] text-atlantic" aria-live="polite">
            {floor.title}
          </span>
          <span className="px-2 py-0.5 rounded bg-linen-deep label-caps text-dune-deep">
            {floor.area}
          </span>
        </div>
        <div className="inline-flex p-1 bg-linen-deep rounded-lg gap-1 self-start" role="tablist">
          {FLOORS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={active === f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={`px-3 py-1.5 rounded label-caps transition-colors ${
                active === f.id
                  ? "bg-atlantic text-linen shadow-sm"
                  : "text-slate-soft hover:text-atlantic"
              }`}
            >
              {f.tab}
            </button>
          ))}
        </div>
      </div>

      <div className="relative bg-linen rounded-lg p-4 overflow-x-auto">
        <svg
          key={floor.id}
          className="w-full h-auto min-w-[620px] text-atlantic"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 800 380"
          role="img"
          aria-label={`Plano esquemático: ${floor.title}`}
        >
          <rect height="300" width="720" x="40" y="30" strokeWidth="2" />
          {floor.rooms.map((r) => (
            <g key={r.name}>
              <rect
                x={r.x}
                y={r.y}
                width={r.w}
                height={r.h}
                strokeWidth="1.2"
                strokeDasharray={r.terrace ? undefined : "2 2"}
                className={r.terrace ? "text-dune-deep" : "text-slate-mute"}
              />
              {r.vertical ? (
                <text
                  fontSize="12"
                  stroke="none"
                  fill="currentColor"
                  transform={`rotate(90 ${r.x + 15} 120)`}
                  x={r.x + 15}
                  y={120}
                  className="uppercase tracking-widest"
                >
                  {r.name}
                </text>
              ) : (
                <>
                  <text x={r.x + 15} y={r.y + 42} fontSize={r.terrace ? 14 : 16} stroke="none" fill={r.terrace ? "#9A7B56" : "currentColor"}>
                    {r.name}
                  </text>
                  {r.sub && (
                    <text x={r.x + 15} y={r.y + 62} fontSize="11" stroke="none" fill="currentColor" opacity="0.6">
                      {r.sub}
                    </text>
                  )}
                </>
              )}
            </g>
          ))}
          <line x1="40" x2="760" y1="350" y2="350" strokeWidth="1" className="text-slate-line" />
          <text x="370" y="368" fontSize="11" stroke="none" fill="currentColor" opacity="0.7">
            Longitud fachada: 32.40 m
          </text>
        </svg>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-slate-soft">
        <span className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-atlantic inline-block" /> Estructura granito
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-dune inline-block" /> Terrazas abiertas
          </span>
        </span>
        <a className="text-dune-deep font-medium hover:underline" href="#visita">
          Descargar planos CAD/DWG en dossier ↗
        </a>
      </div>
    </div>
  );
}
