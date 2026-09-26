export type FeatureKey =
  | "piscina"
  | "primera-linea"
  | "vinedo"
  | "embarcadero"
  | "passivhaus"
  | "invitados";

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
  area: "rias-baixas" | "coruna" | "santiago";
  areaLabel: string;
  kind: "costa" | "pazo" | "atico" | "finca";
  kindLabel: string;
  priceNum: number;
  bedsNum: number;
  builtNum: number;
  features: FeatureKey[];
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
    area: "rias-baixas",
    areaLabel: "Rías Baixas",
    kind: "costa",
    kindLabel: "Villas de Costa",
    priceNum: 2450000,
    bedsNum: 5,
    builtNum: 620,
    features: ["primera-linea", "piscina", "embarcadero"],
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
    area: "rias-baixas",
    areaLabel: "Rías Baixas",
    kind: "pazo",
    kindLabel: "Pazos & Casas de Piedra",
    priceNum: 3800000,
    bedsNum: 8,
    builtNum: 1150,
    features: ["vinedo", "invitados"],
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
    area: "coruna",
    areaLabel: "A Coruña & Rías Altas",
    kind: "atico",
    kindLabel: "Áticos de Lujo",
    priceNum: 1750000,
    bedsNum: 3,
    builtNum: 310,
    features: [],
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
    area: "coruna",
    areaLabel: "A Coruña & Rías Altas",
    kind: "costa",
    kindLabel: "Villas de Costa",
    priceNum: 2100000,
    bedsNum: 4,
    builtNum: 540,
    features: ["piscina", "passivhaus"],
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
    area: "rias-baixas",
    areaLabel: "Rías Baixas",
    kind: "costa",
    kindLabel: "Villas de Costa",
    priceNum: 2650000,
    bedsNum: 5,
    builtNum: 640,
    features: ["primera-linea", "piscina"],
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
    area: "santiago",
    areaLabel: "Santiago de Compostela",
    kind: "pazo",
    kindLabel: "Pazos & Casas de Piedra",
    priceNum: 1950000,
    bedsNum: 6,
    builtNum: 720,
    features: ["invitados"],
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

export type EditorialCategory = "arquitectura" | "patrimonio" | "rias" | "paisajismo";

export const CATEGORY_LABELS: Record<EditorialCategory, string> = {
  arquitectura: "Arquitectura & Diseño",
  patrimonio: "Patrimonio & Pazos",
  rias: "Guías de Vida",
  paisajismo: "Paisaje & Vid",
};

export type EditorialArticle = {
  slug: string;
  category: EditorialCategory;
  tag: string;
  title: string;
  excerpt: string;
  meta: string;
  readTime: string;
  author: string;
  authorRole: string;
  date: string;
  image: string;
  alt: string;
  featured?: boolean;
  body: string[];
  quote: { text: string; by?: string };
  metrics: { label: string; value: string }[];
};

export const editorialArticles: EditorialArticle[] = [
  {
    slug: "poetica-del-granito",
    category: "arquitectura",
    tag: "Monografía de Portada",
    title:
      "La poética del granito: cómo la arquitectura gallega contemporánea redefine el lujo a través del silencio",
    excerpt:
      "Un recorrido por las nuevas viviendas unifamiliares integradas en la Costa da Morte y las Rías Baixas: piedra cortada al hilo, roble oscuro y cobijo ancestral frente a los temporales.",
    meta: "Arquitectura & Territorio",
    readTime: "8 min de lectura",
    author: "Arq. Martiño Sanjurjo",
    authorRole: "Equipo Editorial Northline",
    date: "Otoño 2025",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    alt: "Villa de granito integrada en el acantilado frente al Atlántico",
    featured: true,
    body: [
      "Hay un momento, al caer la tarde sobre la Costa da Morte, en que la piedra parece respirar. La luz oblicua del Atlántico recorre los muros de granito y revela cada golpe de puntero, cada decisión del cantero. Las nuevas viviendas que nuestro equipo ha documentado este año entienden ese lenguaje y lo hablan con fluidez contemporánea.",
      "El verdadero lujo en Galicia no radica en la opulencia ruidosa, sino en abrir una ventana al océano y escuchar únicamente el viento y la resaca. Los estudios que lideran esta corriente —talleres pequeños, de nombre casi secreto— trabajan con tres materiales y una obsesión: granito del país cortado al hilo, carpinterías invisibles de roble oscuro y vidrio estructural que desaparece.",
      "La lección técnica es igualmente serena: muros de gran inercia térmica que amortiguan los temporales de invierno, cubiertas vegetales que devuelven el perfil al monte y sistemas de aerotermia ocultos que permiten certificar Passivhaus sin renunciar a un solo paño de piedra vista. El silencio, aquí, también se calcula.",
      "Visitar estas casas es comprender que habitar el litoral ibérico puede ser un acto de contención. Frente al ruido del mercado global del lujo, el granito gallego propone otra medida del valor: la permanencia. Una casa que envejece bien es una casa que ya era antigua el día de su estreno.",
    ],
    quote: {
      text: "El verdadero lujo en Galicia no radica en la opulencia ruidosa, sino en abrir una ventana al océano y escuchar únicamente el viento y la resaca.",
    },
    metrics: [
      { label: "Cantería", value: "Granito Silvestre" },
      { label: "Ubicación", value: "Cabo Home" },
      { label: "Eficiencia", value: "Passivhaus A+" },
    ],
  },
  {
    slug: "guia-rias-baixas-ons-morrazo",
    category: "rias",
    tag: "Guías de Vida en las Rías",
    title: "Guía confidencial de las Rías Baixas: fondear en Ons y las calas secretas de O Morrazo",
    excerpt:
      "De Barra a Nerga, los fondeaderos más protegidos del viento del norte, tabernas con descarga directa de nécora y cartografía de navegación costera.",
    meta: "O Morrazo & Parque Nacional Illas Atlánticas",
    readTime: "6 min de lectura",
    author: "Xaime Regueira",
    authorRole: "Fotografía náutica · Cuaderno Rías Baixas",
    date: "Verano 2025",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    alt: "Cala de arena blanca y aguas turquesas en las Rías Baixas",
    body: [
      "Quien navega las Rías Baixas aprende pronto una geografía que no figura en las cartas comerciales: la ensenada que solo se abre con marea alta, la taberna a la que se llega por un sendero de tojos, la piedra que marca el través exacto para fondear en siete metros de arena limpia.",
      "Nuestro recorrido comienza en Barra y desciende hacia Nerga, Viñó y la cara resguardada de Ons. Son fondeaderos protegidos del nordés, con tenederos de arena donde el ancla muerde a la primera. Al atardecer, las bateas dibujan una geometría callada y el agua devuelve el color del cielo sin intermediarios.",
      "La gastronomía sigue la misma lógica de proximidad: nécora y percebe con descarga directa, albariños servidos a la temperatura exacta de la bodega y una sobremesa que no entiende de prisas. Anotamos cada casa con coordenadas, calado mínimo y la hora en que conviene levar para alcanzar la siguiente cala con luz.",
    ],
    quote: {
      text: "El mejor plano de las Rías Baixas no se compra: se hereda de quien las ha navegado toda la vida.",
    },
    metrics: [
      { label: "Calas", value: "14 fondeaderos" },
      { label: "Calado mín.", value: "2,5 metros" },
      { label: "Temporada", value: "Mayo – Octubre" },
    ],
  },
  {
    slug: "rehabilitacion-pazos-patrimonio",
    category: "patrimonio",
    tag: "Patrimonio & Pazos",
    title:
      "Rehabilitación de pazos históricos: normativa de patrimonio, eficiencia energética y respeto a la cantería",
    excerpt:
      "El delicado equilibrio entre la protección de la Dirección Xeral de Patrimonio, la aerotermia oculta y los aislamientos de cal viva.",
    meta: "Arquitectura Histórica & Normativa",
    readTime: "11 min de lectura",
    author: "Lucía Prado",
    authorRole: "Consello de Patrimonio · Colaboradora Northline",
    date: "Primavera 2025",
    image:
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=1200&auto=format&fit=crop",
    alt: "Pazo de piedra con jardín histórico y viñedo",
    body: [
      "Rehabilitar un pazo es negociar con tres siglos a la vez. La sillería del XVIII impone su ley, la Dirección Xeral de Patrimonio vigila cada apertura y el confort contemporáneo exige lo que la piedra nunca prometió: estanqueidad, inercia controlada y silencio térmico.",
      "La buena práctica que documentamos en Vedra, Padrón y Cambados sigue un protocolo claro. Primero, lectura arqueológica del edificio: fases, aparejos, carpinterías originales. Después, dictamen estructural y de humedades con un año entero de monitorización. Solo entonces se dibuja la intervención.",
      "Las soluciones que mejor envejecen son las reversibles: aislamientos de cal viva y corcho gallego por el interior, soleras radiantes sobre el enlosado original, aerotermia y geotermia enterradas fuera del campo visual del conjunto. La domótica viaja por canalizaciones vistas de latón, honestas y desmontables.",
      "El resultado, cuando se hace bien, no parece una rehabilitación: parece que el pazo siempre supo guardar el calor y esconder la luz. Esa es la medida del éxito en patrimonio — que la intervención se vuelva invisible y la memoria, habitable.",
    ],
    quote: {
      text: "En patrimonio, la mejor intervención es la que dentro de cincuenta años nadie sabrá fechar.",
    },
    metrics: [
      { label: "Seguimiento", value: "12 meses" },
      { label: "Aislamiento", value: "Cal + corcho" },
      { label: "Clima", value: "Geotermia oculta" },
    ],
  },
  {
    slug: "luz-invierno-atlantico",
    category: "arquitectura",
    tag: "Arquitectura & Diseño",
    title: "La luz de invierno en el Atlántico: diseño pasivo y grandes superficies vidriadas",
    excerpt:
      "Capturar la radiación oblicua de los meses fríos sin perder hermeticidad: vidrios con argón y aleros calculados para la latitud 42° Norte.",
    meta: "Bioarquitectura & Clima",
    readTime: "5 min de lectura",
    author: "Estudio Arq. David Freire",
    authorRole: "Colaborador · Cuaderno Atlántico",
    date: "Invierno 2025",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    alt: "Interior cálido con gran ventanal sobre el Atlántico en invierno",
    body: [
      "En la latitud 42° Norte, el sol de diciembre entra bajo y horizontal, como una linterna rasante. Bien capturada, esa radiación calienta los suelos de piedra durante horas; mal gestionada, deslumbra y se escapa por el mismo vidrio por el que entró.",
      "La estrategia pasiva que aplicamos en Oleiros y Cangas combina tres gestos: orientación sur-suroeste con aleros calculados al milímetro, vidrios triples con gas argón y carpinterías de marco oculto que eliminan los puentes térmicos del aluminio convencional.",
      "El tercer gesto es el más gallego de todos: la lareira contemporánea. Una chimenea cerrada de alto rendimiento que convierte las tardes de temporal en el mejor argumento de venta de la casa — el fuego, la lluvia en el vidrio y el océano al fondo.",
    ],
    quote: {
      text: "Diseñar para el invierno atlántico es diseñar para la luz más hermosa del año.",
    },
    metrics: [
      { label: "Latitud", value: "42° Norte" },
      { label: "Vidrio", value: "Triple + argón" },
      { label: "Aporte solar", value: "3,2 kWh/m²·día" },
    ],
  },
  {
    slug: "vinedos-salnes-origen",
    category: "paisajismo",
    tag: "Paisajismo & Flora Autóctona",
    title: "Viñedos de autor en O Salnés: invertir en bodegas boutique con denominación de origen",
    excerpt:
      "El sábrego granítico y el microclima marino producen los blancos más longevos del panorama internacional. Claves para adquirir parrales centenarios.",
    meta: "Inversión Agrícola & Tradición Vitivinícola",
    readTime: "9 min de lectura",
    author: "Álvaro Mouriño",
    authorRole: "Sumiller & Asesor Agrario",
    date: "Vendimia 2025",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop",
    alt: "Viñedo en parral sobre suelo granítico al atardecer",
    body: [
      "El valle de O Salnés guarda un secreto a voces: su suelo de sábrego —granito descompuesto— y la brisa marina diaria componen uno de los terroirs blancos más singulares de Europa. Los albariños de parral viejo envejecen con una dignidad que pocos blancos atlánticos alcanzan.",
      "Invertir aquí exige leer el paisaje: orientación que esquive las heladas de fondo de valle, edad real de las cepas —el pergolado tradicional supera con frecuencia los sesenta años—, derechos de plantación y, sobre todo, agua. Una finca sin manantial propio es una promesa a medias.",
      "Las bodegas boutique familiares, con producciones de 10.000 a 40.000 botellas, combinan rentabilidad agraria con un activo inmobiliario singular: casco histórico rehabilitable, hórreo y, a menudo, vistas abiertas a la ría. Nuestro gabinete acompaña la adquisición con auditoría agronómica y urbanística conjunta.",
    ],
    quote: {
      text: "Un parral centenario no se compra por hectáreas: se compra por vendimias futuras.",
    },
    metrics: [
      { label: "Suelo", value: "Sábrego granítico" },
      { label: "D.O.", value: "Rías Baixas" },
      { label: "Cepas", value: "+60 años" },
    ],
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

/** Selección para la portada (se deriva del cuaderno para no duplicar). */
export const articles: Article[] = editorialArticles
  .filter((a) => !a.featured)
  .slice(0, 3)
  .map((a) => ({
    tag: a.tag,
    meta: `${a.readTime} · ${a.author}`,
    title: a.title,
    desc: a.excerpt,
    image: a.image,
    alt: a.alt,
  }));

export function getArticle(slug: string): EditorialArticle | undefined {
  return editorialArticles.find((a) => a.slug === slug);
}
