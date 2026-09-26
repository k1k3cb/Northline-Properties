"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

type Msg = { from: "user" | "agent"; text: string; time: string };

export type AskContext = {
  title: string;
  price: string;
  pricePerM2: string;
  energy: string;
  year: string;
  parking: string;
  locationFull: string;
};

const SUGGESTIONS = [
  "¿Cuál es el régimen de costas y la situación registral?",
  "¿Qué IBI y mantenimiento anual tiene la finca?",
  "¿Puedo coordinar visita en helicóptero o transfert?",
  "¿Cómo accedo a planos y al data room técnico?",
];

function now(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function answerFor(q: string, ctx: AskContext): string {
  const t = q.toLowerCase();
  if (/(costa|registr|licencia|deslinde|servidumbre|legal|protecci)/.test(t))
    return `La edificación de ${ctx.title} posee licencia de primera ocupación definitiva (${ctx.year}) y deslinde de costas en firme: ninguna construcción futura interrumpirá la panorámica. La nota simple y el certificado urbanístico están verificados por nuestro gabinete jurídico.`;
  if (/(ibi|coste|mantenimiento|gasto|impuesto|cuota)/.test(t))
    return `Estimación anual para esta propiedad (${ctx.price}, ${ctx.pricePerM2}): IBI + seguro multirriesgo de arquitectura singular + mantenimiento de sistemas, aprox. 6.800–8.500 €/año. Le preparamos el desglose exacto bajo NDA.`;
  if (/(helic|visita|vuelo|transfer|ver|cita|cuando|horario)/.test(t))
    return `Coordinamos visitas privadas invisibles —sin distintivos ni comitivas— con recogida en aeropuerto o helipuerto. Indíqueme dos franjas y Elena Valcárcel le confirma en menos de 4 horas hábiles.`;
  if (/(plano|data room|dataroom|dossier|pdf|memoria|calidade|document)/.test(t))
    return `El dossier completo (planos CAD, memoria de calidades visada, certificado energético ${ctx.energy} y auditoría técnica) se comparte en sala de datos cifrada tras firma de NDA. ¿Le envío la solicitud de acceso?`;
  if (/(precio|negociab|oferta|rebaja|descuento)/.test(t))
    return `El precio de adquisición es ${ctx.price} (${ctx.pricePerM2}). Las propuestas se estudian con prueba de fondos y se presentan al vendedor en 48 h con informe comparativo de la zona.`;
  if (/(parking|garaje|plaza|coche)/.test(t))
    return `Dispone de ${ctx.parking} con preinstalación de carga Wallbox 22 kW y acceso directo a la vivienda.`;
  if (/(dormitor|habitaci|baño|suite|metro|superficie|parcela|jard)/.test(t))
    return `${ctx.title} se ubica en ${ctx.locationFull}. La ficha técnica completa —superficies útiles y construidas, alturas libres y plano de parcela— está en el dossier verificado.`;
  return `He transmitido su consulta a Elena Valcárcel, directora de la propiedad. Si lo prefiere, formalizamos un NDA y le enviamos el inventario completo y las memorias visadas hoy mismo.`;
}

export default function AskAboutProperty({ ctx }: { ctx: AskContext }) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      from: "agent",
      text: `Bienvenido a la ficha privada de ${ctx.title}. Tengo acceso a memorias de calidades, estado registral, costes operativos y agenda de visitas. ¿En qué le ayudo?`,
      time: now(),
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [usedChips, setUsedChips] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, typing]);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean || typing) return;
    setMessages((m) => [...m, { from: "user", text: clean, time: now() }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, { from: "agent", text: answerFor(clean, ctx), time: now() }]);
      setTyping(false);
    }, 700);
  };

  return (
    <div className="rounded-xl bg-chalk shadow-xl overflow-hidden flex flex-col">
      {/* Cabecera concierge */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4 bg-linen-deep/60">
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="w-12 h-12 rounded-full bg-atlantic text-dune-pale font-display text-[18px] flex items-center justify-center shadow-sm">
              EV
            </span>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-700 ring-2 ring-chalk" />
          </div>
          <div>
            <p className="text-[14px] font-semibold text-atlantic leading-tight">Elena Valcárcel</p>
            <p className="text-[13px] text-slate-soft leading-tight">
              Directora de Propiedades Singulares
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <span className="inline-flex items-center gap-1.5 label-caps text-dune-deep">
            <span className="w-2 h-2 rounded-full bg-dune-deep animate-pulse" />
            En línea
          </span>
          <span className="text-[11px] text-slate-mute">Concierge IA</span>
        </div>
      </div>

      {/* Conversación */}
      <div className="px-4 pt-4 max-h-72 overflow-y-auto space-y-3" aria-live="polite">
        {messages.map((m, i) =>
          m.from === "agent" ? (
            <div key={i} className="mr-6 bg-linen-deep rounded-lg p-3 space-y-1 shadow-sm">
              <p className="label-caps text-[10px] text-slate-mute flex justify-between">
                <span>Elena · Concierge</span>
                <span>{m.time}</span>
              </p>
              <p className="text-[13px] leading-5 text-atlantic">{m.text}</p>
            </div>
          ) : (
            <div
              key={i}
              className="ml-8 bg-atlantic text-linen rounded-lg p-3 space-y-1 shadow-sm"
            >
              <p className="label-caps text-[10px] text-[#9aa4ab] flex justify-between">
                <span>Su consulta</span>
                <span>{m.time}</span>
              </p>
              <p className="text-[13px] leading-5">{m.text}</p>
            </div>
          ),
        )}
        {typing && (
          <div className="mr-6 bg-linen-deep rounded-lg p-3 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-dune-deep animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-dune-deep animate-bounce [animation-delay:150ms]" />
            <span className="w-2 h-2 rounded-full bg-dune-deep animate-bounce [animation-delay:300ms]" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Preguntas sugeridas */}
      <div className="px-4 pt-3 space-y-1.5">
        <span className="label-caps text-dune-deep block">Consultas frecuentes</span>
        <div className="flex flex-col gap-1.5">
          {SUGGESTIONS.map((s) => {
            const used = usedChips.includes(s);
            return (
              <button
                key={s}
                type="button"
                disabled={used}
                onClick={() => {
                  setUsedChips((u) => [...u, s]);
                  send(s);
                }}
                className={`text-left px-3 py-2 rounded-lg text-[13px] transition-colors flex items-center justify-between gap-2 group ${
                  used
                    ? "bg-linen-deep/50 text-slate-mute cursor-default"
                    : "bg-linen-deep hover:bg-hairline text-atlantic"
                }`}
              >
                <span>{s}</span>
                <Icon
                  name="next"
                  className={`w-4 h-4 shrink-0 ${used ? "text-slate-line" : "text-slate-mute group-hover:text-atlantic"}`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Entrada libre */}
      <form
        className="p-4"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <div className="relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escriba su consulta sobre la propiedad…"
            aria-label="Escriba su consulta sobre la propiedad"
            className="w-full pl-3.5 pr-11 py-3 rounded-lg bg-linen text-[13px] text-atlantic placeholder:text-slate-mute focus:outline-none focus:ring-1 focus:ring-atlantic shadow-sm"
          />
          <button
            type="submit"
            aria-label="Enviar consulta"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded bg-atlantic text-linen flex items-center justify-center hover:bg-atlantic-deep transition-colors"
          >
            <Icon name="send" className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[12px] text-center text-slate-mute pt-2">
          Respuesta inmediata · NDA disponible para documentación sensible.
        </p>
      </form>
    </div>
  );
}
