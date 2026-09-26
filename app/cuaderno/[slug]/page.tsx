import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { editorialArticles, getArticle, CATEGORY_LABELS } from "../../data";
import { SaveButton, ShareButton } from "../../components/property/PropertyActions";
import DossierForm from "../../components/editorial/DossierForm";

export async function generateStaticParams() {
  return editorialArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return { title: "Ensayo no encontrado · Northline" };
  return { title: `${a.title} | Cuaderno Atlántico · Northline`, description: a.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const related = editorialArticles.filter((x) => x.slug !== slug).slice(0, 3);
  const initials = a.author.replace(/^(Arq\.|Estudio)\s+/, "").charAt(0);

  return (
    <main className="w-full pt-20 bg-linen min-h-[calc(100vh-80px)]">
      {/* Migas */}
      <div className="w-full bg-linen-deep/70 py-3">
        <div className="max-w-[960px] mx-auto px-5 md:px-10 flex flex-wrap items-center justify-between gap-2">
          <nav aria-label="Ruta de navegación" className="flex items-center gap-2 label-caps text-slate-soft">
            <Link className="hover:text-atlantic transition-colors" href="/">Inicio</Link>
            <span className="text-slate-line">/</span>
            <Link className="hover:text-atlantic transition-colors" href="/cuaderno">Cuaderno Editorial</Link>
            <span className="text-slate-line">/</span>
            <span className="text-atlantic font-semibold">{CATEGORY_LABELS[a.category]}</span>
          </nav>
          <span className="label-caps text-slate-mute">{a.date}</span>
        </div>
      </div>

      <article className="w-full max-w-[960px] mx-auto px-5 md:px-10 pt-10 pb-16">
        {/* Cabecera */}
        <header className="space-y-4">
          <p className="flex flex-wrap items-center gap-3 label-caps text-dune-deep">
            <Link href="/cuaderno" className="hover:underline">← Volver al cuaderno</Link>
            <span className="text-slate-line">·</span>
            <span>{a.meta}</span>
            <span className="text-slate-line">·</span>
            <span className="text-slate-soft">{a.readTime}</span>
          </p>
          <h1 className="font-display text-[30px] md:text-[44px] leading-tight text-atlantic tracking-tight text-balance">
            {a.title}
          </h1>
          <p className="text-[18px] leading-[30px] text-slate-soft">{a.excerpt}</p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 pb-6 border-b border-hairline">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-dune-pale flex items-center justify-center text-[#281802] font-display font-semibold">
                {initials}
              </span>
              <div>
                <p className="text-[14px] font-medium text-atlantic">{a.author}</p>
                <p className="text-[13px] text-slate-soft">{a.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShareButton title={a.title} />
              <SaveButton title={a.title} />
            </div>
          </div>
        </header>

        {/* Hero */}
        <figure className="mt-8 rounded-xl overflow-hidden shadow-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={a.image} alt={a.alt} className="w-full aspect-[16/9] object-cover" />
          <figcaption className="px-5 py-3 bg-chalk text-[13px] text-slate-soft flex items-center justify-between">
            <span>{a.alt}</span>
            <span className="label-caps text-dune-deep whitespace-nowrap ml-4">{a.tag}</span>
          </figcaption>
        </figure>

        {/* Cuerpo */}
        <div className="mt-8 space-y-5 text-[17px] leading-[30px] text-atlantic">
          <p className="text-[20px] leading-[34px] font-light">{a.body[0]}</p>
          {a.body.slice(1, -1).map((p, i) => (
            <p key={i} className="text-slate-soft">{p}</p>
          ))}
          <blockquote className="my-8 pl-5 py-4 bg-linen-deep/70 rounded-lg">
            <p className="font-display italic text-[22px] leading-[32px] text-atlantic">
              «{a.quote.text}»
            </p>
            {a.quote.by && <cite className="label-caps text-dune-deep not-italic">{a.quote.by}</cite>}
          </blockquote>
          <p className="text-slate-soft">{a.body[a.body.length - 1]}</p>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          {a.metrics.map((m) => (
            <div key={m.label} className="bg-chalk border border-hairline p-4 rounded-lg text-center shadow-sm">
              <span className="label-caps text-dune-deep block">{m.label}</span>
              <span className="font-display text-[20px] text-atlantic">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Firma */}
        <div className="mt-8 p-6 bg-chalk rounded-xl shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="w-14 h-14 rounded-full bg-atlantic text-dune-pale font-display text-[22px] flex items-center justify-center shrink-0">
            {initials}
          </span>
          <div className="flex-1">
            <p className="text-[14px] font-semibold text-atlantic">{a.author}</p>
            <p className="text-[13px] text-slate-soft">{a.authorRole} · {a.date}</p>
          </div>
          <Link
            href="/cuaderno"
            className="px-5 py-2.5 rounded-lg border border-atlantic text-atlantic label-caps hover:bg-linen-deep transition-colors shrink-0"
          >
            Más ensayos
          </Link>
        </div>
      </article>

      {/* Relacionados */}
      <section className="w-full bg-linen-deep/60 py-14">
        <div className="max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px]">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="font-display text-[24px] md:text-[32px] text-atlantic">
              Seguir explorando el cuaderno
            </h2>
            <Link className="label-caps text-atlantic hover:text-dune-deep transition-colors shrink-0" href="/cuaderno">
              Índice completo →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/cuaderno/${r.slug}`}
                className="group bg-chalk rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden bg-linen-deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={r.image}
                    alt={r.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <span className="label-caps text-dune-deep">{CATEGORY_LABELS[r.category]} · {r.readTime}</span>
                  <h3 className="font-display text-[20px] leading-[28px] text-atlantic group-hover:text-dune-deep transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-[13px] text-slate-soft">Por {r.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Suscripción */}
      <section className="w-full max-w-[1560px] mx-auto px-5 md:px-10 lg:px-[72px] py-14">
        <div className="bg-atlantic-ink text-linen rounded-xl p-7 md:p-10 flex flex-col lg:flex-row lg:items-center gap-6 justify-between">
          <div className="max-w-xl">
            <span className="label-caps text-dune-pale">Suscripción editorial privada</span>
            <h2 className="font-display text-[24px] md:text-[32px] mt-1">
              Reciba el próximo ensayo antes de su publicación.
            </h2>
          </div>
          <DossierForm dark />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: a.title,
            description: a.excerpt,
            author: { "@type": "Person", name: a.author },
            datePublished: a.date,
            image: a.image,
          }),
        }}
      />
    </main>
  );
}
