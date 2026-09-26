"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { properties, type FeatureKey } from "../data";
import PropertyCard from "./PropertyCard";

const AREAS = [
  { id: "all", label: "Todas las ubicaciones" },
  { id: "rias-baixas", label: "Rías Baixas" },
  { id: "coruna", label: "A Coruña & Rías Altas" },
  { id: "santiago", label: "Santiago de Compostela" },
] as const;

const KINDS = [
  { id: "all", label: "Todas las tipologías" },
  { id: "costa", label: "Villas de Costa" },
  { id: "pazo", label: "Pazos & Casas de Piedra" },
  { id: "atico", label: "Áticos de Lujo" },
  { id: "finca", label: "Fincas & Viñedos" },
] as const;

const PRICES = [
  { id: "all", label: "Cualquier rango de precio" },
  { id: "lt2", label: "Hasta 2.000.000 €" },
  { id: "mid", label: "2.000.000 € – 2.700.000 €" },
  { id: "gt27", label: "Más de 2.700.000 €" },
] as const;

const BEDS = [
  { id: "all", label: "Cualquiera" },
  { id: "3", label: "3+ suites" },
  { id: "4", label: "4+ suites" },
  { id: "5", label: "5+ suites" },
  { id: "6", label: "6+ suites" },
] as const;

const SORTS = [
  { id: "rec", label: "Recomendadas por Northline" },
  { id: "desc", label: "Precio: mayor a menor" },
  { id: "asc", label: "Precio: menor a mayor" },
  { id: "built", label: "Superficie construida" },
] as const;

const NOTABLES: { id: FeatureKey; label: string; glyph: string }[] = [
  { id: "piscina", label: "Piscina infinity", glyph: "≋" },
  { id: "primera-linea", label: "Primera línea de mar", glyph: "≈" },
  { id: "vinedo", label: "Viñedo / Bodega", glyph: "❧" },
  { id: "embarcadero", label: "Embarcadero privado", glyph: "⚓" },
  { id: "passivhaus", label: "Certificación Passivhaus", glyph: "❋" },
  { id: "invitados", label: "Casa de invitados", glyph: "⌂" },
];

function inPrice(priceNum: number, range: string): boolean {
  if (range === "lt2") return priceNum < 2000000;
  if (range === "mid") return priceNum >= 2000000 && priceNum <= 2700000;
  if (range === "gt27") return priceNum > 2700000;
  return true;
}

export default function PropertyCatalog() {
  const [area, setArea] = useState<string>("all");
  const [kind, setKind] = useState<string>("all");
  const [price, setPrice] = useState<string>("all");
  const [beds, setBeds] = useState<string>("all");
  const [sort, setSort] = useState<string>("rec");
  const [notables, setNotables] = useState<FeatureKey[]>([]);
  const [view, setView] = useState<"grid" | "map">("grid");

  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const p of properties) m[p.area] = (m[p.area] ?? 0) + 1;
    return m;
  }, []);

  const filtered = useMemo(() => {
    const list = properties.filter(
      (p) =>
        (area === "all" || p.area === area) &&
        (kind === "all" || p.kind === kind) &&
        inPrice(p.priceNum, price) &&
        (beds === "all" || p.bedsNum >= Number(beds)) &&
        notables.every((f) => p.features.includes(f)),
    );
    if (sort === "desc") return [...list].sort((a, b) => b.priceNum - a.priceNum);
    if (sort === "asc") return [...list].sort((a, b) => a.priceNum - b.priceNum);
    if (sort === "built") return [...list].sort((a, b) => b.builtNum - a.builtNum);
    return list;
  }, [area, kind, price, beds, notables, sort]);

  const toggleNotable = (f: FeatureKey) =>
    setNotables((cur) => (cur.includes(f) ? cur.filter((x) => x !== f) : [...cur, f]));

  const clearAll = () => {
    setArea("all");
    setKind("all");
    setPrice("all");
    setBeds("all");
    setSort("rec");
    setNotables([]);
  };

  const hasFilters =
    area !== "all" || kind !== "all" || price !== "all" || beds !== "all" || notables.length > 0;

  const selectCls =
    "w-full appearance-none bg-chalk pl-3 pr-8 py-2.5 rounded-lg text-atlantic text-[14px] focus:outline-none focus:ring-1 focus:ring-atlantic cursor-pointer";

  return (
    <div>
      {/* Tabs de ubicación */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar" role="tablist" aria-label="Filtrar por ubicación">
        {AREAS.map((a) => {
          const active = area === a.id;
          const n = a.id === "all" ? properties.length : (counts[a.id] ?? 0);
          return (
            <button
              key={a.id}
              role="tab"
              aria-selected={active}
              type="button"
              onClick={() => setArea(a.id)}
              className={`px-4 py-2 rounded-lg text-[14px] font-medium whitespace-nowrap transition-colors ${
                active
                  ? "bg-atlantic text-linen"
                  : "bg-linen-deep text-slate-soft hover:text-atlantic hover:bg-hairline"
              }`}
            >
              {a.label} ({n})
            </button>
          );
        })}
      </div>

      {/* Consola de filtros */}
      <div className="mt-4 rounded-xl bg-chalk border border-hairline p-4 md:p-5 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
          <div className="lg:col-span-3">
            <label htmlFor="f-kind" className="label-caps text-slate-mute block mb-1.5">Tipología</label>
            <div className="relative">
              <select id="f-kind" className={selectCls} value={kind} onChange={(e) => setKind(e.target.value)}>
                {KINDS.map((k) => (
                  <option key={k.id} value={k.id}>{k.label}</option>
                ))}
              </select>
              <span aria-hidden className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-mute pointer-events-none">▾</span>
            </div>
          </div>
          <div className="lg:col-span-3">
            <label htmlFor="f-price" className="label-caps text-slate-mute block mb-1.5">Inversión estimada</label>
            <div className="relative">
              <select id="f-price" className={selectCls} value={price} onChange={(e) => setPrice(e.target.value)}>
                {PRICES.map((k) => (
                  <option key={k.id} value={k.id}>{k.label}</option>
                ))}
              </select>
              <span aria-hidden className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-mute pointer-events-none">▾</span>
            </div>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="f-beds" className="label-caps text-slate-mute block mb-1.5">Dormitorios</label>
            <div className="relative">
              <select id="f-beds" className={selectCls} value={beds} onChange={(e) => setBeds(e.target.value)}>
                {BEDS.map((k) => (
                  <option key={k.id} value={k.id}>{k.label}</option>
                ))}
              </select>
              <span aria-hidden className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-mute pointer-events-none">▾</span>
            </div>
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="f-sort" className="label-caps text-slate-mute block mb-1.5">Criterio editorial</label>
            <div className="relative">
              <select id="f-sort" className={selectCls} value={sort} onChange={(e) => setSort(e.target.value)}>
                {SORTS.map((k) => (
                  <option key={k.id} value={k.id}>{k.label}</option>
                ))}
              </select>
              <span aria-hidden className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-mute pointer-events-none">▾</span>
            </div>
          </div>
          <div className="lg:col-span-2">
            <span className="label-caps text-slate-mute block mb-1.5">Formato visual</span>
            <div className="flex items-center bg-linen-deep p-1 rounded-lg" role="group" aria-label="Formato visual">
              <button
                type="button"
                aria-pressed={view === "grid"}
                onClick={() => setView("grid")}
                className={`flex-1 py-1.5 px-2 rounded text-center label-caps transition-all ${view === "grid" ? "bg-atlantic text-linen" : "text-slate-soft hover:text-atlantic"}`}
              >
                ❏ Catálogo
              </button>
              <button
                type="button"
                aria-pressed={view === "map"}
                onClick={() => setView("map")}
                className={`flex-1 py-1.5 px-2 rounded text-center label-caps transition-all ${view === "map" ? "bg-atlantic text-linen" : "text-slate-soft hover:text-atlantic"}`}
              >
                ◈ Mapa
              </button>
            </div>
          </div>
        </div>

        {/* Filtros notables */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-linen-deep no-scrollbar">
          <span className="label-caps text-dune-deep shrink-0 mr-1">Filtros notables:</span>
          {NOTABLES.map((n) => {
            const on = notables.includes(n.id);
            return (
              <button
                key={n.id}
                type="button"
                aria-pressed={on}
                onClick={() => toggleNotable(n.id)}
                className={`px-3 py-1.5 rounded-full text-[14px] font-medium flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                  on ? "bg-atlantic text-linen" : "bg-linen-deep hover:bg-hairline text-atlantic"
                }`}
              >
                <span aria-hidden className={on ? "text-dune-pale" : "text-dune-deep"}>{n.glyph}</span>
                <span>{n.label}</span>
              </button>
            );
          })}
          {hasFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="label-caps text-dune-deep hover:underline ml-auto shrink-0 px-2"
            >
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* Estado */}
      <div className="flex flex-wrap items-center justify-between gap-2 py-6">
        <p className="text-[14px] text-slate-soft" aria-live="polite">
          Presentando <strong className="text-atlantic">{filtered.length}</strong> de{" "}
          <strong className="text-atlantic">{properties.length}</strong> residencias con riguroso
          estándar arquitectónico
        </p>
        <span className="label-caps text-dune-deep">✓ Inspección técnica certificada</span>
      </div>

      {/* Vista mapa */}
      {view === "map" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-8 h-[420px] rounded-xl overflow-hidden border border-hairline shadow-sm bg-linen-deep">
            <iframe
              title="Mapa de propiedades en Galicia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-9.4%2C42.1%2C-7.9%2C43.6&layer=mapnik&marker=42.75%2C-8.65"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-4 bg-chalk rounded-xl border border-hairline p-5 space-y-2 max-h-[420px] overflow-y-auto">
            <span className="label-caps text-dune-deep">Localización guiada</span>
            <h3 className="font-display text-[22px] text-atlantic">Navegación territorial por ría</h3>
            {filtered.map((p) => (
              <Link
                key={p.slug}
                href={`/propiedad/${p.slug}`}
                className="w-full flex items-center justify-between gap-2 p-2.5 bg-linen-deep rounded-lg hover:bg-hairline transition-colors"
              >
                <span className="text-[14px] font-medium text-atlantic">{p.title}</span>
                <span className="label-caps text-dune-deep whitespace-nowrap">{p.price}</span>
              </Link>
            ))}
            {filtered.length === 0 && (
              <p className="text-[14px] text-slate-soft">Sin resultados para esta combinación.</p>
            )}
          </div>
        </div>
      )}

      {/* Grid */}
      {view === "grid" && (
        <>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <PropertyCard key={p.slug} p={p} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl bg-chalk border border-hairline p-12 text-center space-y-3">
              <p className="font-display text-[24px] text-atlantic">
                Ninguna residencia coincide con esa combinación
              </p>
              <p className="text-[15px] text-slate-soft max-w-md mx-auto">
                Nuestro Private Desk gestiona 19 activos confidenciales fuera de catálogo que
                podrían ajustarse a su búsqueda.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={clearAll}
                  className="px-6 py-3 rounded bg-atlantic text-linen label-caps hover:bg-atlantic-deep transition-colors"
                >
                  Limpiar filtros
                </button>
                <a
                  href="#private-desk"
                  className="px-6 py-3 rounded border border-atlantic text-atlantic label-caps hover:bg-linen-deep transition-colors"
                >
                  Consultar Private Desk
                </a>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
