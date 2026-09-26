"use client";

import { useState } from "react";

export default function ContactForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <div>
        <label className="block label-caps text-[#cfd6da] mb-1">Nombre y Apellidos</label>
        <input
          className="w-full px-4 py-2.5 rounded bg-atlantic-deep text-linen text-[13px] placeholder:text-slate-mute focus:outline-none focus:ring-1 focus:ring-dune"
          placeholder="p. ej. Carlos Méndez de Vigo"
          required
          type="text"
        />
      </div>
      <div>
        <label className="block label-caps text-[#cfd6da] mb-1">Correo Electrónico Directo</label>
        <input
          className="w-full px-4 py-2.5 rounded bg-atlantic-deep text-linen text-[13px] placeholder:text-slate-mute focus:outline-none focus:ring-1 focus:ring-dune"
          placeholder="carlos@despacho.com"
          required
          type="email"
        />
      </div>
      <div>
        <label className="block label-caps text-[#cfd6da] mb-1">Enclave de Preferencia</label>
        <select
          className="w-full px-4 py-2.5 rounded bg-atlantic-deep text-linen text-[13px] focus:outline-none focus:ring-1 focus:ring-dune appearance-none cursor-pointer"
          defaultValue="Rías Baixas (Vigo, Cangas, Baiona)"
        >
          <option>Rías Baixas (Vigo, Cangas, Baiona)</option>
          <option>Sanxenxo &amp; Val do Salnés</option>
          <option>A Coruña &amp; Costa de Oleiros</option>
          <option>Pazo Histórico (cualquier ubicación gallega)</option>
          <option>Ribeira Sacra / Viñedos</option>
        </select>
      </div>
      <div className="flex items-center gap-2 pt-1">
        <input id="nda" required type="checkbox" className="accent-[#C2A683] w-4 h-4 cursor-pointer" />
        <label htmlFor="nda" className="text-[13px] text-[#cfd6da] cursor-pointer">
          Acepto cláusula de confidencialidad mutua y tratamiento de datos.
        </label>
      </div>
      <button
        className="w-full py-3 mt-1 rounded bg-dune-deep hover:bg-dune hover:text-atlantic-ink text-linen label-caps transition-colors font-semibold shadow-md"
        type="submit"
      >
        {done ? "Mandato activado — le contactaremos" : "Activar Mandato de Búsqueda"}
      </button>
      {done && (
        <p className="text-[13px] text-dune-pale">
          Gracias por su interés. Un socio director de Northline contactará con usted de forma
          estrictamente confidencial.
        </p>
      )}
    </form>
  );
}
