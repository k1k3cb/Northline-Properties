import Link from "next/link";
import { Logo } from "./Logo";

const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Colecciones",
    links: [
      { label: "Villas de Costa", href: "/propiedades" },
      { label: "Pazos & Casas Históricas", href: "/propiedades" },
      { label: "Áticos Urbanos", href: "/propiedades" },
      { label: "Fincas Singulares", href: "/propiedades" },
    ],
  },
  {
    title: "Destinos en Galicia",
    links: [
      { label: "Rías Baixas", href: "/propiedades" },
      { label: "Costa da Morte", href: "/propiedades" },
      { label: "Vigo & A Coruña", href: "/propiedades" },
      { label: "Santiago de Compostela", href: "/propiedades" },
      { label: "Ribeira Sacra", href: "/propiedades" },
    ],
  },
  {
    title: "Northline",
    links: [
      { label: "Filosofía Editorial", href: "/#filosofia" },
      { label: "Equipo Privado", href: "/#contacto" },
      { label: "Arquitectura & Interiorismo", href: "/cuaderno" },
      { label: "Prensa & Monografías", href: "/cuaderno" },
    ],
  },
  {
    title: "Legal & Criterio",
    links: [
      { label: "Aviso Legal", href: "#" },
      { label: "Política de Privacidad", href: "#" },
      { label: "Gestión de Cookies", href: "#" },
      { label: "Canal Ético Directo", href: "#" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-linen-deep text-[#1a1c1a]">
      <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] pt-20 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16">
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <Logo />
              <p className="text-[15px] leading-6 text-slate-soft max-w-sm">
                Arquitectura noble, refugios de piedra y horizontes atlánticos. Curación privada
                de propiedades singulares en el noroeste ibérico.
              </p>
            </div>
            <div className="pt-2">
              <span className="label-caps text-dune-deep block mb-2">
                Sede Central &amp; Salón Privado
              </span>
              <p className="text-[13px] leading-5 text-slate-soft">
                Plaza de Compostela 14, 36201 Vigo, Pontevedra
                <br />
                Rías Baixas, Galicia (España)
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="p-7 bg-chalk rounded-lg card-shadow">
              <span className="label-caps tracking-[0.2em] text-dune-deep block mb-2">
                Suscripción Privada
              </span>
              <h3 className="font-display text-[32px] leading-10 text-atlantic mb-2">
                El Cuaderno Atlántico
              </h3>
              <p className="text-[15px] text-slate-soft max-w-2xl mb-5">
                Dossier bimensual sobre arquitectura vernácula gallega, patrimonio costero
                protegido e incorporaciones exclusivas off-market.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-xl"
              >
                <input
                  className="flex-1 px-4 py-3 bg-linen text-atlantic text-[13px] rounded focus:outline-none focus:ring-1 focus:ring-atlantic"
                  placeholder="Su dirección de correo profesional"
                  required
                  type="email"
                />
                <button
                  className="px-6 py-3 bg-atlantic text-linen label-caps rounded hover:bg-atlantic-deep transition-colors shrink-0"
                  type="submit"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-hairline">
          {COLS.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="label-caps tracking-[0.16em] text-dune-deep">{col.title}</h4>
              <ul className="space-y-2 text-[13px] text-slate-soft">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link className="hover:text-atlantic transition-colors" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-hairline flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-slate-soft">
          <p>© 2025 Northline Properties S.L. · Colección Inmobiliaria Privada en Galicia</p>
          <p className="label-caps text-dune-deep">Arquitectura Atlántica &amp; Nobleza Pétrea</p>
        </div>
      </div>
    </footer>
  );
}
