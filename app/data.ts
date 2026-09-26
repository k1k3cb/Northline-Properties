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

/* ------------------------------------------------------------------ */
/* Ficha individual: detalle enriquecido                               */
/* ------------------------------------------------------------------ */

export type GalleryImage = { src: string; alt: string; label: string };

export type AmenityIcon =
  | "pool"
  | "wine"
  | "home"
  | "spa"
  | "shield"
  | "leaf"
  | "garage"
  | "bolt";

export type Amenity = { icon: AmenityIcon; title: string; desc: string };

export type KeyFactIcon = "bed" | "bath" | "area" | "year" | "parking" | "energy";

export type PropertyDetail = {
  status: "En Venta" | "Alquiler";
  ref: string;
  updated: string;
  locationFull: string;
  pricePerM2: string;
  priceNote: string;
  badges: string[];
  facts: { icon: KeyFactIcon; label: string; value: string; sub: string }[];
  gallery: GalleryImage[];
  editorial: string[];
  quote: { text: string; author: string };
  amenities: Amenity[];
  mapEmbed: string;
  mapNote: string;
  pois: { value: string; title: string; desc: string }[];
};

const INTERIORS: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    alt: "Salón de doble altura con chimenea de granito y vidrio al océano",
    label: "Salón & Atardecer",
  },
  {
    src: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=1200&auto=format&fit=crop",
    alt: "Cocina de autor con isla de piedra y carpintería oscura",
    label: "Cocina de Autor",
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
    alt: "Suite principal con cama baja de roble y terraza al mar",
    label: "Suite Principal",
  },
  {
    src: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=1200&auto=format&fit=crop",
    alt: "Piscina infinita fundiéndose con el horizonte atlántico",
    label: "Piscina Infinito",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1200&auto=format&fit=crop",
    alt: "Baño en piedra con bañera exenta y luz natural",
    label: "Baño Suite",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Detalle de granito y madera de roble en el interior",
    label: "Materia Noble",
  },
];

const SHARED_AMENITIES: Amenity[] = [
  {
    icon: "pool",
    title: "Piscina Infinita Climatizada",
    desc: "Lámina de 18×4 m en piedra basáltica, cubierta retráctil y cloración salina.",
  },
  {
    icon: "wine",
    title: "Cava de Vinos Subterránea",
    desc: "Capacidad para 850 botellas con temperatura y humedad controladas.",
  },
  {
    icon: "home",
    title: "Domótica Integral KNX",
    desc: "Iluminación circadiana, clima zonificado y sonido integrado.",
  },
  {
    icon: "spa",
    title: "Wellness Suite & Spa",
    desc: "Sauna de cedro rojo, hammam en caliza y zona fitness con vistas al mar.",
  },
  {
    icon: "shield",
    title: "Seguridad & Privacidad",
    desc: "Perímetro con cámaras térmicas, doble acceso cerrado y control de accesos.",
  },
  {
    icon: "leaf",
    title: "Paisajismo Sostenible",
    desc: "Flora autóctona resistente al salitre y aljibe pluvial de 45.000 litros.",
  },
];

function osmEmbed(lat: number, lng: number): string {
  const d = 0.06;
  const bbox = `${lng - d}%2C${lat - d / 2}%2C${lng + d}%2C${lat + d / 2}`;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}

const COORDS: Record<string, { lat: number; lng: number; note: string }> = {
  "villa-atlantica-cabo-home": {
    lat: 42.257,
    lng: -8.896,
    note: "Costa da Vela · acceso rodado restringido y camino privado con portón.",
  },
  "pazo-barroco-s-xviii": {
    lat: 42.513,
    lng: -8.812,
    note: "Val do Salnés · finca amurallada con acceso propio entre viñedos.",
  },
  "atico-duplex-darsena": {
    lat: 43.371,
    lng: -8.396,
    note: "Ciudad Vieja · portal con ascensor directo y plaza de garaje.",
  },
  "residencia-granito-cristal": {
    lat: 43.337,
    lng: -8.352,
    note: "Oleiros Costa · urbanización tranquila a 300 m de la playa.",
  },
  "villa-mirador-das-cies": {
    lat: 42.251,
    lng: -8.903,
    note: "Cabo Home · promontorio privado sobre el Parque Nacional Illas Atlánticas.",
  },
  "casa-senorial-ulla": {
    lat: 42.812,
    lng: -8.512,
    note: "Val de Ulla · finca de 1,5 Ha con robledal y acceso por pista propia.",
  },
};

const META: Record<
  string,
  {
    status: PropertyDetail["status"];
    ref: string;
    locationFull: string;
    pricePerM2: string;
    badges: string[];
    beds: string;
    baths: string;
    year: string;
    parking: string;
    energy: string;
  }
> = {
  "villa-atlantica-cabo-home": {
    status: "En Venta",
    ref: "NL-2025-031",
    locationFull: "Cabo Home, Cangas do Morrazo, Pontevedra · Rías Baixas",
    pricePerM2: "3.950 €/m²",
    badges: ["Exclusiva Northline", "Frente al Mar · Primera Línea", "Costa da Vela"],
    beds: "5 en suite",
    baths: "6 completos",
    year: "2021",
    parking: "4 plazas",
    energy: "Clase A",
  },
  "pazo-barroco-s-xviii": {
    status: "En Venta",
    ref: "NL-2025-018",
    locationFull: "Cambados, Val do Salnés, Pontevedra · Rías Baixas",
    pricePerM2: "3.300 €/m²",
    badges: ["Bien Catalogado", "Viñedo D.O. Rías Baixas", "Hórreo Monumental"],
    beds: "8 + servicio",
    baths: "7 completos",
    year: "S. XVIII · rehab. 2019",
    parking: "6 plazas",
    energy: "Clase C*",
  },
  "atico-duplex-darsena": {
    status: "En Venta",
    ref: "NL-2025-042",
    locationFull: "Ciudad Vieja, A Coruña · Golfo Ártabro",
    pricePerM2: "5.645 €/m²",
    badges: ["Exclusiva Urbana", "Terraza Perimetral", "Puerto Deportivo"],
    beds: "3 en suite",
    baths: "4 completos",
    year: "2022",
    parking: "2 plazas",
    energy: "Clase B",
  },
  "residencia-granito-cristal": {
    status: "En Venta",
    ref: "NL-2025-027",
    locationFull: "Oleiros Costa, A Coruña · Golfo Ártabro",
    pricePerM2: "3.890 €/m²",
    badges: ["Nueva Construcción", "Passivhaus A+", "Piscina Climatizada"],
    beds: "4 en suite",
    baths: "5 completos",
    year: "2023",
    parking: "3 plazas",
    energy: "Clase A+",
  },
  "villa-mirador-das-cies": {
    status: "En Venta",
    ref: "NL-2025-084",
    locationFull: "Cabo Home, Cangas do Morrazo, Pontevedra · Rías Baixas",
    pricePerM2: "4.140 €/m²",
    badges: ["Exclusiva Northline", "Frente al Mar · Primera Línea", "Costa da Vela"],
    beds: "5 en suite",
    baths: "6 completos",
    year: "2023",
    parking: "4 plazas",
    energy: "Clase A+",
  },
  "casa-senorial-ulla": {
    status: "En Venta",
    ref: "NL-2025-055",
    locationFull: "Val de Ulla, Santiago de Compostela · A Coruña",
    pricePerM2: "2.710 €/m²",
    badges: ["Piedra Noble", "Robledal Protegido", "Pabellón Invitados"],
    beds: "6 + servicio",
    baths: "6 completos",
    year: "S. XIX · rehab. 2020",
    parking: "5 plazas",
    energy: "Clase D*",
  },
};

export function getPropertyDetail(slug: string): (Property & PropertyDetail) | undefined {
  const base = properties.find((p) => p.slug === slug);
  if (!base) return undefined;
  const meta = META[slug];
  const coords = COORDS[slug] ?? { lat: 42.5, lng: -8.5, note: "" };
  const idx = properties.indexOf(base);
  const gallery: GalleryImage[] = [
    { src: base.image, alt: base.alt, label: "Perspectiva Principal" },
    ...[0, 1, 2, 3].map((k) => INTERIORS[(idx * 2 + k) % INTERIORS.length]),
  ];

  return {
    ...base,
    status: meta.status,
    ref: meta.ref,
    updated: "Actualizado hace 2 días",
    locationFull: meta.locationFull,
    pricePerM2: meta.pricePerM2,
    priceNote: "Impuestos y gastos no incluidos",
    badges: meta.badges,
    facts: [
      { icon: "bed", label: "Suites", value: meta.beds, sub: "Con vestidor privado" },
      { icon: "bath", label: "Baños", value: meta.baths, sub: "+ aseo de cortesía" },
      {
        icon: "area",
        label: "Superficie",
        value: `${base.specs[2].value} m² const.`,
        sub: "Memoria de calidades verificada",
      },
      { icon: "year", label: "Construcción", value: meta.year, sub: "Estudio Arq. Atlántico" },
      { icon: "parking", label: "Garaje", value: meta.parking, sub: "Tomas Wallbox 22 kW" },
      { icon: "energy", label: "Certificación", value: meta.energy, sub: "Aerotermia & geotermia" },
    ],
    gallery,
    editorial: [
      `${base.title} redefine el arquetipo de la vivienda residencial en la costa gallega: renuncia al ornamento superfluo para entablar un diálogo contundente con el Atlántico, con muros de granito rubio del país y voladizos que parecen emerger de la propia roca viva.`,
      `La orientación de los pabellones habitables garantiza una iluminación rasante constante y protección pasiva ante los vientos de suroeste característicos de las rías. Las carpinterías de marco oculto disuelven los límites entre el interior y la inmensidad del océano, proyectando la vivienda hacia un horizonte que, en días claros, alcanza las siluetas escarpadas del Parque Nacional Illas Atlánticas.`,
    ],
    quote: {
      text: "Buscábamos una arquitectura telúrica: que la casa no estuviese construida sobre el paisaje, sino que fuese la prolongación geométrica de la propia costa.",
      author: "Alberto Souto · Arquitecto Principal del Proyecto",
    },
    amenities: SHARED_AMENITIES,
    mapEmbed: osmEmbed(coords.lat, coords.lng),
    mapNote: coords.note,
    pois: [
      {
        value: "25 min",
        title: "Aeropuerto de Vigo (VGO)",
        desc: "Conexiones directas con Madrid, Barcelona y Londres.",
      },
      {
        value: "8 min",
        title: "Real Club Náutico",
        desc: "Amarres disponibles para esloras de hasta 24 m.",
      },
      {
        value: "15 min",
        title: "Gastronomía Michelin",
        desc: "Acceso a los laureados templos del marisco gallego.",
      },
    ],
  };
}

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
