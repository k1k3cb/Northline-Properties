import Link from "next/link";
import HeroSearch from "./components/HeroSearch";
import ContactForm from "./components/ContactForm";
import PropertyCard from "./components/PropertyCard";
import { properties, articles } from "./data";

export default function Home() {
  const featured = properties.slice(0, 4);

  return (
    <main className="w-full pt-20 bg-linen min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full" id="inicio">
        {/* HERO */}
        <section className="relative w-full -mt-20 overflow-hidden bg-atlantic-ink">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop')",
            }}
            role="img"
            aria-label="Villa de granito frente al Atlántico gallego al atardecer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-atlantic-ink via-atlantic-ink/40 to-atlantic-ink/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-atlantic-ink/80 via-transparent to-atlantic-ink/30" />

          <div className="relative z-10 max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] pt-40 md:pt-48 pb-20 md:pb-24 min-h-[92vh] flex flex-col justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen/10 backdrop-blur-md text-linen label-caps">
                <span className="w-1.5 h-1.5 rounded-full bg-dune-pale animate-pulse" />
                Colección Privada 2025
              </span>
              <span className="hidden sm:inline-block text-slate-line label-caps">
                · Rías Baixas &amp; Costa Atlántica
              </span>
            </div>

            <div className="max-w-4xl space-y-4 my-auto pt-12 pb-8">
              <p className="label-caps tracking-[0.25em] text-dune-pale">
                Patrimonio Singular · Rías Baixas · Norte Ibérico
              </p>
              <h1 className="font-display text-[38px] md:text-[64px] leading-[46px] md:leading-[76px] text-linen tracking-tight text-balance">
                Arquitectura serena frente al Atlántico gallego.
              </h1>
              <p className="text-[18px] leading-[30px] text-[#dbdad7] max-w-2xl font-light">
                Selección curada de propiedades singulares, pazos históricos y villas
                contemporáneas erigidas en los enclaves más codiciados de Galicia.
              </p>
            </div>

            <HeroSearch />
          </div>
        </section>

        {/* 01 DESTACADAS */}
        <section className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] py-20 w-full" id="propiedades">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <span className="label-caps text-dune-deep tracking-[0.25em] block">
                01 / 04 · Selección Primaria
              </span>
              <h2 className="font-display text-[30px] md:text-[44px] leading-tight text-atlantic tracking-tight">
                Refugios de piedra, luz y marea
              </h2>
              <p className="text-[15px] text-slate-soft max-w-xl">
                Arquitectura noble y emplazamientos irrepetibles catalogados según nuestro
                estricto protocolo de serenidad y valor patrimonial.
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-[14px] font-medium uppercase tracking-wider text-atlantic hover:text-dune-deep transition-colors shrink-0 pb-1"
              href="#propiedades"
            >
              <span>Ver todas las propiedades (38)</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <PropertyCard key={p.slug} p={p} />
            ))}
          </div>

          {/* Catálogo extendido */}
          <div className="mt-16 pt-10 border-t border-hairline">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
              <div>
                <p className="label-caps text-dune-deep tracking-[0.2em]">
                  Archivo Inmobiliario Privado 2025
                </p>
                <h3 className="font-display text-[24px] md:text-[32px] text-atlantic mt-1">
                  Catálogo de Propiedades Singulares en Galicia
                </h3>
              </div>
              <div className="flex items-center gap-6 text-[13px] text-slate-soft">
                <span>
                  <strong className="font-display text-[22px] text-atlantic">38</strong>{" "}
                  propiedades
                </span>
                <span className="w-px h-8 bg-hairline" />
                <span>
                  <strong className="font-display text-[22px] text-atlantic">19</strong>{" "}
                  confidenciales
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.slice(2).map((p) => (
                <PropertyCard key={p.slug} p={p} />
              ))}
            </div>
          </div>
        </section>

        {/* 02 FILOSOFÍA */}
        <section className="w-full bg-linen-deep py-20" id="filosofia">
          <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg bg-hairline relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                    alt="Detalle de granito gallego y carpintería de roble"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-atlantic-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-5 rounded bg-linen/90 backdrop-blur-md shadow-md">
                    <span className="label-caps text-dune-deep block mb-1">Materia Noble</span>
                    <p className="font-display text-[22px] text-atlantic">
                      Granito silvestre &amp; Roble atlántico
                    </p>
                    <p className="text-[13px] text-slate-soft mt-1">
                      Integración en el paisaje y durabilidad intergeneracional.
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block absolute -bottom-6 -right-6 bg-atlantic text-linen p-5 rounded shadow-xl max-w-xs">
                  <p className="label-caps text-dune-pale mb-1">Protocolo Privado</p>
                  <p className="text-[13px] text-[#dbdad7]">
                    Acceso directo a fondos de patrimonio off-market protegidos en Galicia.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-7 lg:pl-4">
                <div className="space-y-2">
                  <span className="label-caps text-dune-deep tracking-[0.25em] block">
                    02 / 04 · Filosofía Northline
                  </span>
                  <h2 className="font-display text-[30px] md:text-[44px] text-atlantic tracking-tight leading-tight">
                    El valor de lo discreto y la devoción por la autenticidad.
                  </h2>
                  <p className="text-[18px] text-slate-soft font-light max-w-2xl">
                    Operamos con la convicción de que las mejores propiedades no necesitan
                    estridencias. Entendemos el territorio desde su arquitectura vernácula y el
                    sosiego de sus costas.
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  {[
                    {
                      n: "01",
                      t: "Acceso a Mercado Privado (Off-market)",
                      d: "Más del 45% de nuestras transacciones se gestionan bajo estricta confidencialidad, conectando vendedores selectos con compradores singulares.",
                    },
                    {
                      n: "02",
                      t: "Rigor Arquitectónico & Jurídico",
                      d: "Arquitectos superiores y juristas especializados en patrimonio histórico, Ley de Costas y rehabilitación patrimonial en Galicia.",
                    },
                    {
                      n: "03",
                      t: "Relación de Confianza Duradera",
                      d: "Asesoramiento llave en mano: selección estratégica, dirección de arte en reformas, licencias y paisajismo autóctono.",
                    },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="flex gap-4 items-start p-5 rounded-xl bg-chalk shadow-sm hover:shadow-md transition-shadow"
                    >
                      <span className="font-display text-[28px] text-dune-deep shrink-0 leading-none">
                        {item.n}
                      </span>
                      <div>
                        <h3 className="font-display text-[22px] text-atlantic">{item.t}</h3>
                        <p className="text-[15px] text-slate-soft mt-1">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-8 text-atlantic">
                  {[
                    ["160M €+", "Activos Gestionados"],
                    ["45%", "Ventas Off-Market"],
                    ["100%", "Auditoría Técnica"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <span className="font-display text-[28px] block">{v}</span>
                      <span className="label-caps text-slate-soft">{l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 CUADERNO */}
        <section className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] py-20 w-full" id="cuaderno">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <span className="label-caps text-dune-deep tracking-[0.25em] block">
                03 / 04 · Cuaderno Atlántico
              </span>
              <h2 className="font-display text-[30px] md:text-[44px] text-atlantic tracking-tight">
                Ensayos de arquitectura y vida norteña
              </h2>
              <p className="text-[15px] text-slate-soft max-w-xl">
                Monografías sobre el habitar atlántico, restauración patrimonial y patrimonio
                paisajístico de Galicia.
              </p>
            </div>
            <Link
              className="inline-flex items-center gap-2 text-[14px] font-medium uppercase tracking-wider text-atlantic hover:text-dune-deep transition-colors shrink-0 pb-1"
              href="#cuaderno"
            >
              <span>Explorar todos los ensayos</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((a) => (
              <article key={a.title} className="group img-zoom flex flex-col gap-4">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-linen-deep shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.image} alt={a.alt} loading="lazy" className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-linen/90 backdrop-blur-md text-atlantic label-caps">
                    {a.tag}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="label-caps text-slate-mute">{a.meta}</p>
                  <h3 className="font-display text-[22px] leading-[30px] text-atlantic group-hover:text-dune-deep transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-[13px] text-slate-soft clamp-3">{a.desc}</p>
                </div>
                <a
                  className="inline-flex items-center gap-1 text-[14px] font-medium text-atlantic group-hover:text-dune-deep transition-colors pt-1"
                  href="#cuaderno"
                >
                  <span className="underline underline-offset-4">Leer artículo completo</span>
                  <span aria-hidden>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* 04 MAPA */}
        <section className="w-full bg-[#e9e8e5] py-20">
          <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px]">
            <div className="max-w-3xl mb-12 space-y-2">
              <span className="label-caps text-dune-deep tracking-[0.25em] block">
                04 / 04 · Cartografía Inmobiliaria
              </span>
              <h2 className="font-display text-[30px] md:text-[44px] text-atlantic tracking-tight">
                Micro-enclaves singulares del noroeste ibérico
              </h2>
              <p className="text-[18px] text-slate-soft font-light">
                Propiedades en localizaciones con protección paisajística, microclimas marítimos
                benignos y conectividad ágil.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-7 bg-chalk rounded-xl p-5 shadow-md flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-display text-[22px] text-atlantic">
                    Galicia Atlántica &amp; Territorios Curados
                  </p>
                  <span className="label-caps text-slate-mute hidden sm:inline-block">
                    6 Zonas Prioritarias
                  </span>
                </div>
                <div
                  className="w-full h-[400px] lg:h-[440px] bg-cover bg-center rounded-lg relative overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1568607689150-17e625c1586e?q=80&w=1600&auto=format&fit=crop')",
                  }}
                  role="img"
                  aria-label="Mapa de la costa gallega con enclaves señalados"
                >
                  <div className="absolute inset-0 bg-atlantic-ink/15" />
                  <div className="absolute top-[60%] left-[28%] bg-atlantic text-linen px-3 py-1.5 rounded shadow-lg label-caps">
                    Rías Baixas (18 Villas)
                  </div>
                  <div className="absolute top-[22%] left-[40%] bg-linen text-atlantic px-3 py-1.5 rounded shadow-lg label-caps">
                    A Coruña &amp; Oleiros (9)
                  </div>
                  <div className="absolute top-[42%] left-[46%] bg-linen text-atlantic px-3 py-1.5 rounded shadow-lg label-caps hidden sm:block">
                    Santiago (5 Pazos)
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-linen/90 backdrop-blur-md px-4 py-2.5 rounded flex items-center justify-between">
                    <span className="text-[13px] font-medium text-atlantic">
                      Búsqueda cartográfica georreferenciada
                    </span>
                    <span className="label-caps text-slate-mute">EPSG:25829</span>
                  </div>
                </div>
                <div className="pt-3 flex flex-wrap items-center justify-between gap-2 text-[13px] text-slate-soft">
                  <span>Prospección privada en helicóptero o catamarán disponible.</span>
                  <a className="label-caps text-atlantic hover:text-dune-deep transition-colors" href="#contacto">
                    Solicitar Estudio de Zona →
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-4">
                {[
                  {
                    k: "Enclave Referente · 18 Villas",
                    t: "Rías Baixas: Vigo, Baiona & Sanxenxo",
                    d: "Microclima templado, náutica de primer nivel y cercanía a Portugal.",
                    v: "Valor medio: 2.2M €",
                  },
                  {
                    k: "Cosmopolitismo Costero · 9 Activos",
                    t: "A Coruña & Costa de Oleiros",
                    d: "Dinamismo cultural del norte y calas residenciales de Mera y Dexo.",
                    v: "Valor medio: 1.8M €",
                  },
                  {
                    k: "Patrimonio Histórico · 11 Fincas",
                    t: "Salnés, Santiago & Ribeira Sacra",
                    d: "Viñedos en bancal y pazos de sillería para residencia o bodega boutique.",
                    v: "Valor medio: 3.4M €",
                  },
                ].map((e) => (
                  <div key={e.t} className="p-5 rounded-xl bg-chalk shadow-sm space-y-2">
                    <p className="label-caps text-dune-deep">{e.k}</p>
                    <h3 className="font-display text-[22px] text-atlantic">{e.t}</h3>
                    <p className="text-[13px] text-slate-soft">{e.d}</p>
                    <p className="label-caps text-slate-mute pt-1">
                      {e.v} ·{" "}
                      <a href="#propiedades" className="text-atlantic underline underline-offset-2">
                        Ver catálogo local
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 05 CONTACTO */}
        <section className="w-full bg-atlantic-ink text-linen py-20" id="contacto">
          <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-linen/10 text-dune-pale label-caps">
                  Servicio Exclusivo a Compradores
                </span>
                <h2 className="font-display text-[30px] md:text-[44px] tracking-tight text-linen">
                  ¿Busca un refugio atlántico irrepetible fuera de mercado?
                </h2>
                <p className="text-[18px] text-[#dbdad7] font-light max-w-2xl">
                  Nuestros directores privados conciertan encuentros en Vigo o de forma
                  confidencial en Madrid, Londres y Ginebra.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-linen text-atlantic hover:bg-[#dbdad7] label-caps transition-colors shadow-md"
                    href="tel:+34986200450"
                  >
                    <span aria-hidden>✆</span>
                    <span>Llamar al Director Privado</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-atlantic text-linen border border-linen/15 hover:bg-linen/10 label-caps transition-colors"
                    href="#contacto"
                  >
                    <span aria-hidden>▦</span>
                    <span>Concertar Cita Confidencial</span>
                  </a>
                </div>
                <dl className="grid grid-cols-3 gap-6 pt-4 max-w-xl">
                  {[
                    ["68%", "Off-Market"],
                    ["€180M+", "Transaccionado"],
                    ["14 Días", "Auditoría Media"],
                  ].map(([v, l]) => (
                    <div key={l}>
                      <dt className="font-display text-[28px] text-linen">{v}</dt>
                      <dd className="label-caps text-[#9aa4ab]">{l}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-5 bg-atlantic p-7 rounded-xl shadow-2xl space-y-4">
                <div>
                  <span className="label-caps text-dune-pale block">Registro de Búsqueda a Medida</span>
                  <h3 className="font-display text-[22px] text-linen">Canal Privado de Mandato</h3>
                  <p className="text-[13px] text-[#dbdad7]">
                    Reciba fichas técnicas protegidas antes de su presentación general.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
