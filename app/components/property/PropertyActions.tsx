"use client";

import { useState } from "react";
import Icon from "./Icon";

export function SaveButton({ title }: { title: string }) {
  const [saved, setSaved] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setSaved((v) => !v)}
      aria-pressed={saved}
      title={`Guardar ${title} como favorito`}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg label-caps transition-colors shadow-sm ${
        saved
          ? "bg-dune-pale text-atlantic"
          : "bg-linen-deep hover:bg-hairline text-atlantic"
      }`}
    >
      <Icon name="bookmark" className="w-4 h-4" />
      <span>{saved ? "Guardado" : "Favorito"}</span>
    </button>
  );
}

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      title={`Compartir ${title}`}
      onClick={() => {
        const url = window.location.href;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url).catch(() => {});
        }
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }}
      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-linen-deep hover:bg-hairline text-atlantic label-caps transition-colors shadow-sm"
    >
      <Icon name="share" className="w-4 h-4" />
      <span>{copied ? "¡Enlace copiado!" : "Compartir"}</span>
    </button>
  );
}
