import type { Metadata } from "next";
import EditorialIndex from "../components/editorial/EditorialIndex";
import DossierForm from "../components/editorial/DossierForm";

export const metadata: Metadata = {
  title: "Cuaderno Editorial Atlántico | Northline",
  description:
    "Ensayos sobre arquitectura contemporánea, patrimonio histórico gallego, gastronomía de las rías y el arte de habitar el noroeste peninsular.",
};

const TOMOS = [
  {
    glyph: "❧",
    title: "Tomo I: «La Piedra que Respira»",
    desc: "140 páginas sobre el granito gris en la costa de Noia y Muros.",
  },
  {
    glyph: "◈",
    title: "Tomo II: «Camellias del Ulla y Jardines Históricos»",
    desc: "Catálogo botánico de especies centenarias en pazos de Vedra y Padrón.",
  },
];

export default function CuadernoPage() {
  return (
    <main className="w-full pt-20 bg-linen min-h-[calc(100vh-80px)]">
      {/* Cabecera */}
      <section className="w-full max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] pt-12 pb-6">
        <div className="max-w-3xl space-y-2">
          <p className="flex items-center gap-3 label-caps text-dune-deep tracking-[0.25em]">
            <span>Volumen IV · Cuaderno N° 12</span>
            <span className="w-8 h-px bg-slate-line" />
            <span className="text-slate-soft">Otoño / Invierno</span>
          </p>
          <h1 className="font-display text-[30px] md:text-[44px] text-atlantic tracking-tight">
            Cuaderno Editorial Atlántico
          </h1>
          <p className="text-[18px] text-slate-soft max-w-2xl pt-1">
            Ensayos sobre arquitectura contemporánea, patrimonio histórico gallego,
            gastronomía de las rías y el arte de habitar el noroeste peninsular.
          </p>
        </div>
      </section>

      {/* Índice + portada */}
      <section className="w-full max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] pb-16">
        <EditorialIndex />
      </section>

      {/* Archivo impreso */}
      <section className="w-full bg-linen-deep py-16">
        <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="label-caps tracking-[0.25em] text-dune-deep block">
              Cuadernos de archivo · Descarga confidencial
            </span>
            <h2 className="font-display text-[30px] lg:text-[44px] text-atlantic tracking-tight leading-tight">
              Documentos monográficos en papel verjurado
            </h2>
            <p className="text-[15px] text-slate-soft leading-relaxed">
              Cada semestre, Northline publica un dossier impreso de tirada limitada (500
              ejemplares numerados) con planos originales, botánica costera y ensayos
              patrimoniales sin publicidad comercial.
            </p>
            <div className="space-y-3 pt-1">
              {TOMOS.map((t) => (
                <div key={t.title} className="flex items-start gap-3 p-3 rounded-lg bg-chalk">
                  <span aria-hidden className="text-dune-deep text-xl mt-0.5">{t.glyph}</span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-atlantic">{t.title}</h3>
                    <p className="text-[13px] text-slate-soft">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative max-w-lg w-full">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1200&auto=format&fit=crop"
                  alt="Ejemplar encuadernado del Cuaderno Atlántico sobre mesa de granito"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-atlantic-ink/70 via-transparent to-transparent flex flex-col justify-end p-7 text-linen">
                  <span className="label-caps text-dune-pale">Edición limitada 2025</span>
                  <span className="font-display text-[22px]">Edición impresa anual N° 04</span>
                  <span className="text-[13px] text-[#dbdad7]">
                    Papel Munken Pure 150 g · Encuadernación en lino crudo
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-chalk p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3 max-w-xs">
                <span aria-hidden className="text-dune-deep text-3xl">✓</span>
                <div>
                  <span className="label-caps text-atlantic font-semibold block">
                    Ejemplares numerados
                  </span>
                  <span className="text-[13px] text-slate-soft">
                    Distribución exclusiva a propietarios y suscriptores privados
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suscripción */}
      <section className="w-full max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] py-16">
        <div className="bg-atlantic-ink text-linen rounded-xl p-7 md:p-12 relative overflow-hidden">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-atlantic/40 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="label-caps tracking-[0.25em] text-dune-pale">
              Suscripción editorial privada
            </span>
            <h2 className="font-display text-[24px] md:text-[44px] tracking-tight">
              Reciba trimestralmente nuestro dossier encuadernado de adquisiciones y
              pensamiento arquitectónico.
            </h2>
            <p className="text-[18px] text-[#9aa4ab] leading-relaxed">
              Una selección serena de las mejores propiedades atlánticas, ensayos de firmas
              invitadas y guías territoriales reservadas a nuestro círculo íntimo.
            </p>
            <div className="pt-1">
              <DossierForm dark />
            </div>
            <div className="flex flex-wrap items-center gap-5 text-[13px] text-[#cfd6da] pt-1">
              {["Edición digital inmediata", "Envío postal certificado sin coste", "Privacidad bajo secreto profesional"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span aria-hidden className="text-dune-pale">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
