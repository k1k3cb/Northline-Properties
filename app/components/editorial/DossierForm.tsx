"use client";

import { useState } from "react";

export default function DossierForm({ dark = false }: { dark?: boolean }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-lg font-semibold text-[14px] ${dark ? "bg-chalk text-atlantic" : "bg-dune-pale text-atlantic"}`}>
        <span aria-hidden>✓</span>
        <span>Suscrito — recibirá el próximo dossier</span>
      </p>
    );
  }

  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-2xl"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        className={`flex-1 px-5 py-3.5 rounded-lg text-[13px] focus:outline-none ${
          dark
            ? "bg-atlantic-deep/80 text-linen placeholder:text-slate-mute focus:ring-1 focus:ring-dune"
            : "bg-linen text-atlantic placeholder:text-slate-mute focus:ring-1 focus:ring-atlantic"
        }`}
        placeholder="Introduzca su correo electrónico personal o profesional"
        required
        type="email"
        aria-label="Correo electrónico"
      />
      <button
        className="px-8 py-3.5 rounded-lg bg-dune-pale text-[#281802] label-caps hover:bg-dune hover:text-atlantic-ink transition-colors shrink-0"
        type="submit"
      >
        Solicitar dossier
      </button>
    </form>
  );
}
