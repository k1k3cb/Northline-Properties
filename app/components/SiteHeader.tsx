"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { label: "Inicio", href: "#inicio", active: true },
  { label: "Propiedades", href: "#propiedades", active: false },
  { label: "Servicios Exclusivos", href: "#filosofia", active: false },
  { label: "Cuaderno Editorial", href: "#cuaderno", active: false },
  { label: "Nosotros", href: "#contacto", active: false },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-linen/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] flex items-center justify-between gap-6">
        <Link href="#inicio" aria-label="Northline inicio">
          <Logo />
        </Link>

        <nav className="hidden xl:flex items-center gap-7" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`text-[13px] uppercase tracking-[0.12em] transition-colors duration-200 ${
                item.active
                  ? "text-atlantic font-semibold"
                  : "text-slate-soft hover:text-atlantic font-medium"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden sm:flex items-center gap-2 label-caps text-slate-soft">
            <button type="button" className="text-atlantic font-semibold">
              ES
            </button>
            <span className="text-slate-line">/</span>
            <button type="button" className="hover:text-atlantic transition-colors">
              EN
            </button>
          </div>
          <a
            className="hidden lg:flex items-center gap-2 text-[14px] text-slate-soft hover:text-atlantic transition-colors tracking-tight"
            href="tel:+34986200450"
          >
            <span aria-hidden className="text-dune-deep text-[18px] leading-none">
              ✆
            </span>
            <span>+34 986 200 450</span>
          </a>
          <a
            className="hidden sm:inline-flex items-center px-4 py-2.5 rounded bg-linen-deep text-atlantic hover:bg-hairline label-caps transition-colors duration-200"
            href="#contacto"
          >
            Solicitar Valoración
          </a>
          <span className="w-8 h-8 rounded-full bg-atlantic hidden sm:flex items-center justify-center shrink-0 text-linen text-sm">
            ○
          </span>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menú"
            className="xl:hidden w-10 h-10 rounded border border-hairline flex items-center justify-center text-atlantic"
          >
            <span aria-hidden className="text-xl leading-none">
              {open ? "×" : "≡"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="xl:hidden border-t border-hairline bg-linen px-5 py-4 flex flex-col gap-1"
          aria-label="Móvil"
        >
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-[13px] uppercase tracking-[0.12em] text-atlantic border-b border-linen-deep last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded bg-atlantic text-linen label-caps"
          >
            Solicitar Valoración
          </a>
        </nav>
      )}
    </header>
  );
}
