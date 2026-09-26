export type Property = {
  slug: string;
  tag: string;
  tagStyle: "dark" | "gold" | "pale";
  locationShort: string;
  zone: string;
  title: string;
  desc: string;
  price: string;
  specs: { value: string; label: string }[];
  image: string;
  alt: string;
};

export const properties: Property[] = [
  {
    slug: "villa-atlantica-cabo-home",
    tag: "En Venta · Frente al Mar",
    tagStyle: "dark",
    locationShort: "Cangas do Morrazo",
    zone: "Rías Baixas",
    title: "Villa Atlántica en Cabo Home",
    desc: "Privilegiada primera línea acantilada con acceso privado a cala y vistas directas al Parque Nacional Illas Atlánticas.",
    price: "2.450.000 €",
    specs: [
      { value: "5", label: "Hab" },
      { value: "6", label: "Baños" },
      { value: "620", label: "m²" },
      { value: "2.800", label: "Parcela" },
    ],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    alt: "Villa moderna de granito frente al Atlántico en Cabo Home",
  },
  {
    slug: "pazo-barroco-s-xviii",
    tag: "Histórico Singular",
    tagStyle: "gold",
    locationShort: "Cambados",
    zone: "Val do Salnés",
    title: "Pazo Barroco del S. XVIII",
    desc: "Joya catalogada con hórreo monumental de doce claros, bodega activa y 4 hectáreas de Albariño.",
    price: "3.800.000 €",
    specs: [
      { value: "8", label: "Hab" },
      { value: "7", label: "Baños" },
      { value: "1.150", label: "m²" },
      { value: "4.2 Ha", label: "Viñedo" },
    ],
    image:
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=1200&auto=format&fit=crop",
    alt: "Pazo histórico de piedra con viñedo en Galicia",
  },
  {
    slug: "atico-duplex-darsena",
    tag: "Exclusiva Urbana",
    tagStyle: "dark",
    locationShort: "A Coruña",
    zone: "Ciudad Vieja",
    title: "Ático Dúplex en la Dársena",
    desc: "Rehabilitación integral de firma nacional, terraza perimetral y chimenea suspendida sobre el puerto.",
    price: "1.750.000 €",
    specs: [
      { value: "3", label: "Hab" },
      { value: "4", label: "Baños" },
      { value: "310", label: "m²" },
      { value: "65 m²", label: "Terraza" },
    ],
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    alt: "Ático luminoso con ventanales sobre el puerto",
  },
  {
    slug: "residencia-granito-cristal",
    tag: "Nueva Construcción",
    tagStyle: "pale",
    locationShort: "Oleiros Costa",
    zone: "Golfo Ártabro",
    title: "Residencia de Granito & Cristal",
    desc: "Geometría pura y eficiencia A+ pasiva con piscina climatizada de piedra y orientación sur.",
    price: "2.100.000 €",
    specs: [
      { value: "4", label: "Hab" },
      { value: "5", label: "Baños" },
      { value: "540", label: "m²" },
      { value: "1.950", label: "Parcela" },
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    alt: "Villa contemporánea de granito con piscina infinita",
  },
  {
    slug: "villa-mirador-das-cies",
    tag: "Primera Línea",
    tagStyle: "dark",
    locationShort: "Cabo Home · Cangas",
    zone: "Villa de Costa Atlántica",
    title: "Villa Mirador das Cíes",
    desc: "Prisma de granito gallego y vidrio estructural sobre el acantilado, mirador perpetuo a las Islas Atlánticas.",
    price: "2.650.000 €",
    specs: [
      { value: "5", label: "Habs" },
      { value: "6", label: "Baños" },
      { value: "640", label: "m²" },
      { value: "3.200", label: "m² fin." },
    ],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    alt: "Villa al atardecer sobre acantilado atlántico",
  },
  {
    slug: "casa-senorial-ulla",
    tag: "Casa de Piedra Noble",
    tagStyle: "gold",
    locationShort: "Val de Ulla · Santiago",
    zone: "Casa Señorial Campestre",
    title: "Casa Señorial Gallega Restaurada",
    desc: "Hórreo monumental, lareira con campana de granito y pabellón de invitados en finca de 1,5 hectáreas.",
    price: "1.950.000 €",
    specs: [
      { value: "6", label: "Habs" },
      { value: "6", label: "Baños" },
      { value: "720", label: "m²" },
      { value: "15.000", label: "m² fin." },
    ],
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
    alt: "Casa señorial de piedra con jardín histórico",
  },
];

export type Article = {
  tag: string;
  meta: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
};

export const articles: Article[] = [
  {
    tag: "Arquitectura",
    meta: "Lectura 5 min · Por Arq. Mateo Salgado",
    title: "La reinterpretación del granito gallego en la vivienda contemporánea",
    desc: "Cómo los estudios de vanguardia transforman la nobleza pétrea en volúmenes ingrávidos con aislamiento pasivo.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
    alt: "Detalle arquitectónico de hormigón y piedra",
  },
  {
    tag: "Estilo de Vida",
    meta: "Lectura 7 min · Cuaderno Rías Baixas",
    title: "Guía de calas secretas y fondeaderos protegidos en las Rías Baixas",
    desc: "Recorrido íntimo por arenales inaccesibles entre Vigo y Aldán, ideales para la navegación a vela en calma.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    alt: "Cala turquesa del Atlántico gallego",
  },
  {
    tag: "Patrimonio",
    meta: "Lectura 8 min · Por Lucía Castro",
    title: "Rehabilitar un pazo: armonía entre memoria e innovación energética",
    desc: "Geotermia, corcho gallego y domótica oculta respetando la sillería de los siglos XVII y XVIII.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    alt: "Patio de piedra de pazo restaurado",
  },
];
