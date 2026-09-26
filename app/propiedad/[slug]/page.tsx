import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties, getPropertyDetail } from "../../data";
import PropertyGallery from "../../components/property/PropertyGallery";
import AskAboutProperty from "../../components/property/AskAboutProperty";
import FloorPlanTabs from "../../components/property/FloorPlanTabs";
import VisitCard from "../../components/property/VisitCard";
import { SaveButton, ShareButton } from "../../components/property/PropertyActions";
import PropertyCard from "../../components/PropertyCard";
import Icon from "../../components/property/Icon";

export async function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getPropertyDetail(slug);
  if (!d) return { title: "Propiedad no encontrada · Northline" };
  return {
    title: `${d.title} · ${d.locationShort} — ${d.price} | Northline Properties`,
    description: d.desc,
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getPropertyDetail(slug);
  if (!d) notFound();

  const similar = properties.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="w-full pt-20 bg-linen min-h-[calc(100vh-80px)]">
      {/* Migas + estado */}
      <div className="w-full bg-linen-deep/70 py-3">
        <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] flex flex-wrap items-center justify-between gap-2">
          <nav
            aria-label="Ruta de navegación"
            className="flex items-center gap-2 label-caps text-slate-soft"
          >
            <Link className="hover:text-atlantic transition-colors" href="/">
              Inicio
            </Link>
            <span className="text-slate-line">/</span>
            <Link className="hover:text-atlantic transition-colors" href="/#propiedades">
              {d.zone}
            </Link>
            <span className="text-slate-line">/</span>
            <span className="text-atlantic font-semibold">{d.title}</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="label-caps text-slate-mute">Ref. {d.ref}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-dune" />
            <span className="label-caps text-dune-deep font-medium">{d.updated}</span>
          </div>
        </div>
      </div>

      {/* Cabecera editorial */}
      <section className="w-full pt-8 pb-6">
        <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px]">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded bg-atlantic text-linen label-caps">
              {d.status}
            </span>
            {d.badges.map((b, i) => (
              <span
                key={b}
                className={`px-3 py-1 rounded label-caps ${
                  i === 0
                    ? "bg-dune-pale text-[#281802]"
                    : "bg-linen-deep text-slate-soft"
                }`}
              >
                {b}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2">
              <p className="label-caps text-dune-deep tracking-[0.2em]">{d.zone}</p>
              <h1 className="font-display text-[30px] md:text-[44px] text-atlantic tracking-tight">
                {d.title}
              </h1>
              <p className="text-[18px] leading-[30px] text-slate-soft max-w-3xl">{d.desc}</p>
              <p className="flex items-center gap-2 text-[14px] text-dune-deep pt-1">
                <Icon name="pin" className="w-[18px] h-[18px]" />
                <span>{d.locationFull}</span>
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col lg:items-end gap-3">
              <div className="lg:text-right">
                <span className="label-caps tracking-[0.2em] text-slate-mute block mb-0.5">
                  Precio de adquisición
                </span>
                <p className="font-display text-[38px] md:text-[44px] text-atlantic font-light leading-none">
                  {d.price}
                </p>
                <span className="text-[13px] text-slate-mute">
                  {d.priceNote} · {d.pricePerM2}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <ShareButton title={d.title} />
                <SaveButton title={d.title} />
                <a
                  href="#visita"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-atlantic text-linen label-caps hover:bg-atlantic-deep transition-colors shadow-sm"
                >
                  <Icon name="download" className="w-4 h-4" />
                  <span>Dossier PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="w-full pb-4" aria-label="Galería de la propiedad">
        <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px]">
          <PropertyGallery images={d.gallery} />
        </div>
      </section>

      {/* Cuerpo: contenido + rail sticky */}
      <section className="w-full py-10">
        <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Columna izquierda */}
            <div className="lg:col-span-8 flex flex-col gap-12 min-w-0">
              {/* Datos clave */}
              <div className="p-6 md:p-7 bg-chalk rounded-xl shadow-sm">
                <h2 className="label-caps tracking-[0.2em] text-dune-deep mb-5">
                  Ficha técnica principal
                </h2>
                <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6">
                  {d.facts.map((f) => (
                    <div key={f.label} className="space-y-1">
                      <dt className="flex items-center gap-1.5 label-caps text-dune-deep">
                        <Icon name={f.icon} className="w-[18px] h-[18px]" />
                        {f.label}
                      </dt>
                      <dd className="font-display text-[22px] text-atlantic leading-tight">
                        {f.value}
                      </dd>
                      <dd className="text-[13px] text-slate-soft">{f.sub}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Descripción editorial */}
              <div className="space-y-4">
                <span className="label-caps tracking-[0.2em] text-dune-deep">
                  01 / Memoria arquitectónica
                </span>
                <h2 className="font-display text-[24px] md:text-[32px] text-atlantic">
                  La consagración del granito atlántico y el mar abierto
                </h2>
                <div className="space-y-4 text-[18px] leading-[30px] text-atlantic max-w-none">
                  {d.editorial.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <blockquote className="p-6 bg-linen-deep rounded-xl">
                  <p className="font-display text-[22px] italic text-atlantic mb-2">
                    “{d.quote.text}”
                  </p>
                  <cite className="label-caps text-dune-deep not-italic">
                    — {d.quote.author}
                  </cite>
                </blockquote>
              </div>

              {/* Amenities */}
              <div className="space-y-4">
                <span className="label-caps tracking-[0.2em] text-dune-deep">
                  02 / Equipamiento & comodidades
                </span>
                <h2 className="font-display text-[24px] md:text-[32px] text-atlantic">
                  Dotación técnica al más alto estándar internacional
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {d.amenities.map((a) => (
                    <div
                      key={a.title}
                      className="flex items-start gap-3 p-5 bg-chalk rounded-xl shadow-sm"
                    >
                      <span className="w-10 h-10 rounded-lg bg-linen-deep flex items-center justify-center shrink-0 text-atlantic">
                        <Icon name={a.icon} className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="text-[14px] font-semibold text-atlantic">{a.title}</h3>
                        <p className="text-[13px] text-slate-soft mt-0.5">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plano */}
              <div className="space-y-4">
                <span className="label-caps tracking-[0.2em] text-dune-deep">
                  03 / Distribución espacial
                </span>
                <h2 className="font-display text-[24px] md:text-[32px] text-atlantic">
                  Planos arquitectónicos
                </h2>
                <FloorPlanTabs />
              </div>

              {/* Mapa */}
              <div className="space-y-4">
                <span className="label-caps tracking-[0.2em] text-dune-deep">
                  04 / Entorno & conectividad
                </span>
                <h2 className="font-display text-[24px] md:text-[32px] text-atlantic">
                  {d.locationShort} · la serenidad de la Galicia atlántica
                </h2>
                <div className="w-full h-80 rounded-xl overflow-hidden shadow-sm border border-hairline bg-linen-deep">
                  <iframe
                    title={`Mapa de ubicación de ${d.title}`}
                    src={d.mapEmbed}
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
                <p className="text-[13px] text-slate-soft flex items-center gap-2">
                  <Icon name="pin" className="w-4 h-4 text-dune-deep" />
                  {d.mapNote} Coordenadas verificadas en dossier · acceso exacto tras NDA.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {d.pois.map((poi) => (
                    <div key={poi.title} className="p-5 bg-linen-deep rounded-lg">
                      <span className="font-display text-[22px] text-atlantic">{poi.value}</span>
                      <h3 className="text-[14px] font-medium text-atlantic mt-1">{poi.title}</h3>
                      <p className="text-[13px] text-slate-soft">{poi.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rail derecho sticky */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
              <AskAboutProperty
                ctx={{
                  title: d.title,
                  price: d.price,
                  pricePerM2: d.pricePerM2,
                  energy: d.facts[5].value,
                  year: d.facts[3].value,
                  parking: d.facts[4].value,
                  locationFull: d.locationFull,
                }}
              />
              <VisitCard title={d.title} price={d.price} />
              <div className="p-4 bg-linen-deep rounded-xl flex items-center gap-3">
                <span className="text-dune-deep">
                  <Icon name="shield" className="w-7 h-7" />
                </span>
                <div>
                  <h3 className="text-[14px] font-semibold text-atlantic">
                    Propiedad Verificada Northline
                  </h3>
                  <p className="text-[13px] text-slate-soft">
                    Due diligence técnico, registral y urbanístico completado.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Similares */}
      <section className="w-full py-16 bg-linen-deep/50">
        <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
            <div className="space-y-1">
              <span className="label-caps tracking-[0.2em] text-dune-deep">
                Colección Atlántica
              </span>
              <h2 className="font-display text-[24px] md:text-[32px] text-atlantic">
                Otras propiedades singulares en Galicia
              </h2>
              <p className="text-[15px] text-slate-soft max-w-xl">
                Selección curada con el mismo rigor arquitectónico y salvaguarda patrimonial.
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 label-caps text-atlantic hover:text-dune-deep transition-colors self-start md:self-auto"
              href="/#propiedades"
            >
              <span>Explorar catálogo completo</span>
              <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similar.map((p) => (
              <PropertyCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Datos estructurados SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: d.title,
            description: d.desc,
            url: `https://northline-properties.es/propiedad/${d.slug}`,
            address: {
              "@type": "PostalAddress",
              streetAddress: d.locationFull,
              addressRegion: "Galicia",
              addressCountry: "ES",
            },
            offers: {
              "@type": "Offer",
              price: d.price,
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </main>
  );
}
