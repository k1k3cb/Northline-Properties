"use client";

import { useState } from "react";
import Link from "next/link";
import {
  editorialArticles,
  CATEGORY_LABELS,
  type EditorialArticle,
  type EditorialCategory,
} from "../../data";

const FILTERS: { id: EditorialCategory | "all"; label: string }[] = [
  { id: "all", label: "Todos los ensayos" },
  { id: "arquitectura", label: "Arquitectura & Diseño" },
  { id: "patrimonio", label: "Patrimonio & Pazos" },
  { id: "rias", label: "Guías de Vida" },
  { id: "paisajismo", label: "Paisaje & Vid" },
];

function ArticleCard({ a, wide }: { a: EditorialArticle; wide?: boolean }) {
  return (
    <article className="group bg-chalk rounded-xl p-5 md:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="space-y-4">
        <Link
          href={`/cuaderno/${a.slug}`}
          className={`relative block overflow-hidden rounded-lg aspect-[16/9] bg-linen-deep`}
          aria-label={`Leer: ${a.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={a.image}
            alt={a.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute top-4 left-4 bg-linen/90 backdrop-blur-md px-3 py-1 rounded-lg label-caps text-dune-deep">
            {CATEGORY_LABELS[a.category]}
          </span>
          <span className="absolute bottom-4 right-4 bg-atlantic/80 backdrop-blur-md text-linen px-2.5 py-1 rounded-lg label-caps">
            {a.readTime.split(" ")[0]} {a.readTime.split(" ")[1]}
          </span>
        </Link>
        <div className="space-y-2">
          <span className="label-caps text-slate-mute block">{a.meta}</span>
          <h3
            className={`font-display text-atlantic tracking-tight group-hover:text-dune-deep transition-colors ${
              wide ? "text-[24px] md:text-[32px] leading-tight" : "text-[22px] leading-[30px]"
            }`}
          >
            <Link href={`/cuaderno/${a.slug}`}>{a.title}</Link>
          </h3>
          <p className="text-[15px] text-slate-soft leading-relaxed clamp-2">{a.excerpt}</p>
        </div>
      </div>
      <div className="pt-4 flex items-center justify-between gap-2">
        <span className="text-[13px] text-slate-soft truncate">
          Por {a.author} · {a.date}
        </span>
        <Link
          className="label-caps text-atlantic hover:text-dune-deep inline-flex items-center gap-1 transition-colors shrink-0"
          href={`/cuaderno/${a.slug}`}
        >
          <span>Leer</span>
          <span aria-hidden>↗</span>
        </Link>
      </div>
    </article>
  );
}

export default function EditorialIndex() {
  const [filter, setFilter] = useState<EditorialCategory | "all">("all");
  const featured = editorialArticles.find((a) => a.featured) ?? editorialArticles[0];
  const rest = editorialArticles.filter((a) => a.slug !== featured.slug);
  const visible = filter === "all" ? rest : rest.filter((a) => a.category === filter);

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar ensayos por tema">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2.5 rounded-lg label-caps transition-all duration-300 ${
                active
                  ? "bg-atlantic text-linen"
                  : "bg-[#e9e8e5] text-slate-soft hover:text-atlantic"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Portada */}
      {(filter === "all" || featured.category === filter) && (
        <article className="mt-8 bg-chalk rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            <Link
              href={`/cuaderno/${featured.slug}`}
              className="lg:col-span-7 relative min-h-[320px] lg:min-h-full overflow-hidden group block"
              aria-label={`Leer: ${featured.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <span className="absolute top-6 left-6 flex items-center gap-2 bg-linen/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg label-caps text-atlantic">
                <span className="w-2 h-2 rounded-full bg-dune-deep" />
                {featured.tag}
              </span>
            </Link>
            <div className="lg:col-span-5 p-7 lg:p-10 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <p className="label-caps text-dune-deep flex items-center justify-between">
                  <span>{featured.meta}</span>
                  <span>{featured.readTime}</span>
                </p>
                <h2 className="font-display text-[30px] lg:text-[44px] leading-tight text-atlantic tracking-tight">
                  <Link href={`/cuaderno/${featured.slug}`} className="hover:text-dune-deep transition-colors">
                    {featured.title}
                  </Link>
                </h2>
                <blockquote className="bg-linen-deep/70 py-3 px-4 rounded-lg">
                  <p className="font-display italic text-[18px] text-atlantic leading-relaxed">
                    «{featured.quote.text}»
                  </p>
                </blockquote>
                <p className="text-[15px] text-slate-soft leading-relaxed clamp-3">
                  {featured.excerpt}
                </p>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {featured.metrics.map((m) => (
                    <div key={m.label} className="bg-linen-deep p-2 rounded-lg">
                      <span className="label-caps text-dune-deep block">{m.label}</span>
                      <span className="text-[14px] font-semibold text-atlantic">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-full bg-dune-pale flex items-center justify-center text-[#281802] font-display font-semibold">
                    {featured.author.replace(/^(Arq\.|Estudio)\s+/, "").charAt(0)}
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-atlantic">{featured.author}</p>
                    <p className="text-[13px] text-slate-soft">{featured.authorRole}</p>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-atlantic text-linen label-caps hover:bg-atlantic-deep transition-colors"
                  href={`/cuaderno/${featured.slug}`}
                >
                  <span>Leer ensayo</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Índice */}
      <div className="py-8 flex items-center justify-between">
        <p className="flex items-center gap-3">
          <span className="label-caps tracking-[0.2em] text-dune-deep">Índice temático</span>
          <span className="h-1.5 w-1.5 rounded-full bg-dune" />
          <span className="text-[13px] text-slate-soft" aria-live="polite">
            {visible.length} {visible.length === 1 ? "artículo" : "artículos"} seleccionado
            {visible.length === 1 ? "" : "s"}
          </span>
        </p>
        <span className="hidden sm:inline-block label-caps text-slate-mute">Colección 2025</span>
      </div>

      {visible.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((a, i) => (
            <div key={a.slug} className={i % 3 === 0 ? "md:col-span-1" : ""}>
              <ArticleCard a={a} />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl bg-chalk border border-hairline p-12 text-center">
          <p className="font-display text-[24px] text-atlantic">Sin ensayos en esta sección todavía</p>
          <button
            type="button"
            onClick={() => setFilter("all")}
            className="mt-4 px-6 py-3 rounded bg-atlantic text-linen label-caps hover:bg-atlantic-deep transition-colors"
          >
            Ver todos los ensayos
          </button>
        </div>
      )}
    </div>
  );
}
