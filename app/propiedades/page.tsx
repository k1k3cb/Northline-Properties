import type { Metadata } from "next";
import Link from "next/link";
import PropertyCatalog from "../components/PropertyCatalog";

export const metadata: Metadata = {
  title: "Catálogo de Propiedades Singulares en Galicia | Northline",
  description:
    "Residencias disponibles en enclaves de costa, pazos señoriales y fincas privadas con salvaguarda patrimonial.",
};

export default function PropiedadesPage() {
  return (
    <main className="w-full pt-20 bg-linen min-h-[calc(100vh-80px)]">
      {/* Cabecera editorial */}
      <section className="w-full bg-linen-deep px-5 md:px-10 lg:px-[72px] py-12">
        <div className="max-w-[1560px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <p className="label-caps tracking-[0.2em] text-dune-deep flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-dune-deep" />
                Archivo Inmobiliario Privado 2025
              </p>
              <h1 className="font-display text-[30px] md:text-[44px] text-atlantic tracking-tight">
                Catálogo de Propiedades Singulares en Galicia
              </h1>
              <p className="text-[18px] text-slate-soft pt-1">
                Residencias disponibles en enclaves de costa, pazos señoriales y fincas
                privadas con salvaguarda patrimonial.
              </p>
            </div>
            <div className="flex items-center gap-6 bg-chalk p-4 rounded-xl shadow-sm self-start lg:self-auto">
              <div>
                <span className="label-caps text-slate-mute block">Catálogo vivo</span>
                <p className="flex items-baseline gap-1.5">
                  <span className="font-display text-[32px] text-atlantic font-medium">6</span>
                  <span className="text-[13px] text-dune-deep">propiedades</span>
                </p>
              </div>
              <div className="w-px h-10 bg-hairline" />
              <div>
                <span className="label-caps text-slate-mute block">Off-Market Desk</span>
                <p className="flex items-baseline gap-1.5">
                  <span className="font-display text-[32px] text-atlantic font-medium">19</span>
                  <span className="text-[13px] text-dune-deep">confidenciales</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section className="w-full px-5 md:px-10 lg:px-[72px] py-10">
        <div className="max-w-[1560px] mx-auto">
          <PropertyCatalog />
        </div>
      </section>

      {/* Banner Private Desk */}
      <section id="private-desk" className="w-full bg-atlantic text-linen px-5 md:px-10 lg:px-[72px] py-16 scroll-mt-20">
        <div className="max-w-[1560px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-dune-pale text-[#281802] label-caps">
              ◈ Protocolo confidencial
            </span>
            <h2 className="font-display text-[30px] md:text-[44px] text-linen">
              ¿Busca una propiedad fuera de mercado?
            </h2>
            <p className="text-[18px] text-[#9aa4ab] max-w-2xl">
              Más del 40% de nuestro catálogo de pazos señoriales, islas privadas y fincas
              vitivinícolas se gestiona con absoluta reserva y no figura en ningún catálogo
              público.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              className="px-6 py-4 rounded-lg bg-dune-pale text-[#281802] hover:bg-dune hover:text-atlantic-ink transition-colors label-caps text-center"
              href="/#contacto"
            >
              Contactar con Private Desk
            </Link>
            <a
              className="px-6 py-4 rounded-lg bg-atlantic-deep hover:bg-linen/10 text-linen transition-colors label-caps text-center"
              href="tel:+34986200450"
            >
              Línea directa: +34 986 200 450
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
