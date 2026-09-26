"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function VisitCard({ title, price }: { title: string; price: string }) {
  const [sent, setSent] = useState(false);
  const [nda, setNda] = useState(true);

  return (
    <div id="visita" className="rounded-xl bg-atlantic text-linen p-6 shadow-xl space-y-4 scroll-mt-28">
      <div>
        <span className="label-caps text-dune-pale block">Visita privada · {price}</span>
        <h3 className="font-display text-[22px] text-linen mt-1">Solicitar visita presencial</h3>
        <p className="text-[13px] text-[#cfd6da] mt-1">
          Visitas invisibles, sin distintivos. Recogida en aeropuerto o helipuerto.
        </p>
      </div>

      {sent ? (
        <div className="rounded-lg bg-atlantic-deep p-4 flex items-start gap-3">
          <span className="w-9 h-9 rounded-full bg-dune-pale text-atlantic flex items-center justify-center shrink-0">
            <Icon name="check" className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[14px] font-semibold">Solicitud registrada</p>
            <p className="text-[13px] text-[#cfd6da]">
              Elena Valcárcel le propondrá dos franjas para {title} en menos de 4 horas hábiles.
            </p>
          </div>
        </div>
      ) : (
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              required
              placeholder="Nombre y apellidos"
              aria-label="Nombre y apellidos"
              className="px-4 py-2.5 rounded-lg bg-atlantic-deep text-linen text-[13px] placeholder:text-slate-mute focus:outline-none focus:ring-1 focus:ring-dune"
            />
            <input
              required
              type="tel"
              placeholder="+34 600 000 000"
              aria-label="Teléfono"
              className="px-4 py-2.5 rounded-lg bg-atlantic-deep text-linen text-[13px] placeholder:text-slate-mute focus:outline-none focus:ring-1 focus:ring-dune"
            />
          </div>
          <input
            required
            type="email"
            placeholder="Correo electrónico"
            aria-label="Correo electrónico"
            className="w-full px-4 py-2.5 rounded-lg bg-atlantic-deep text-linen text-[13px] placeholder:text-slate-mute focus:outline-none focus:ring-1 focus:ring-dune"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              aria-label="Fecha preferente"
              className="px-4 py-2.5 rounded-lg bg-atlantic-deep text-linen text-[13px] focus:outline-none focus:ring-1 focus:ring-dune [color-scheme:dark]"
            />
            <select
              aria-label="Franja horaria"
              className="px-4 py-2.5 rounded-lg bg-atlantic-deep text-linen text-[13px] focus:outline-none focus:ring-1 focus:ring-dune"
              defaultValue="Mañana (10–13 h)"
            >
              <option>Mañana (10–13 h)</option>
              <option>Tarde (16–19 h)</option>
              <option>Atardecer (19–21 h)</option>
            </select>
          </div>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={nda}
              onChange={(e) => setNda(e.target.checked)}
              className="mt-1 accent-[#C2A683] w-4 h-4"
            />
            <span className="text-[13px] text-[#cfd6da]">
              Firmar NDA previo y recibir el dossier verificado en sala de datos cifrada.
            </span>
          </label>
          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-dune-pale hover:bg-dune text-atlantic-ink label-caps font-semibold transition-colors shadow-md"
          >
            Solicitar visita privada
          </button>
        </form>
      )}

      <div className="rounded-lg bg-atlantic-deep p-3.5 flex items-center justify-between text-[13px]">
        <span className="text-[#cfd6da]">Llamada confidencial directa</span>
        <a href="tel:+34986200450" className="font-semibold text-linen hover:text-dune-pale transition-colors">
          +34 986 200 450
        </a>
      </div>
      <p className="text-[12px] text-center text-[#9aa4ab]">
        {nda || sent ? "Protocolo NDA blindado · SafeGuard Northline" : "Sin compromiso · respuesta en 4 h hábiles"}
      </p>
    </div>
  );
}
