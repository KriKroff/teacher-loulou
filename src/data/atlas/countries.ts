/**
 * Atlas — the 197 countries Louise must place on a world map
 * (193 UN members + Vatican, Palestine, Kosovo, Taiwan), grouped in 6 zones.
 *
 * `iso` is the ISO 3166-1 numeric code used by Natural Earth / world-atlas;
 * Kosovo has none and is matched by its Natural Earth name instead.
 */

export type ZoneId =
  | "europe"
  | "afrique"
  | "asie"
  | "amerique-nord"
  | "amerique-sud"
  | "oceanie";

export type MapId = ZoneId | "monde";

export interface Country {
  /** Stable id (ISO alpha-3, "XKX" for Kosovo) */
  id: string;
  /** Natural Earth numeric id, or name when it has none */
  iso: string;
  /** Display name, without article */
  name: string;
  /** Article used in sentences ("Où est la France ?"); "" when none */
  article: "le" | "la" | "l'" | "les" | "";
  zone: ZoneId;
  /** Other accepted spellings / official names */
  aliases?: string[];
  /** Shown in learn mode: "aussi appelé…" */
  alsoKnownAs?: string;
}

export interface ZoneInfo {
  id: MapId;
  name: string;
  emoji: string;
  /** Tailwind gradient used on cards */
  gradient: string;
}

export const ZONES: ZoneInfo[] = [
  { id: "europe", name: "Europe", emoji: "🏰", gradient: "from-sky-400 to-blue-600" },
  { id: "afrique", name: "Afrique", emoji: "🦁", gradient: "from-amber-400 to-orange-600" },
  { id: "asie", name: "Asie", emoji: "🐉", gradient: "from-rose-400 to-red-600" },
  { id: "amerique-nord", name: "Amérique du Nord et centrale", emoji: "🗽", gradient: "from-violet-400 to-purple-600" },
  { id: "amerique-sud", name: "Amérique du Sud", emoji: "🦜", gradient: "from-emerald-400 to-green-600" },
  { id: "oceanie", name: "Océanie", emoji: "🐨", gradient: "from-cyan-400 to-teal-600" },
];

export const WORLD: ZoneInfo = {
  id: "monde",
  name: "Monde entier",
  emoji: "🌍",
  gradient: "from-indigo-500 to-fuchsia-600",
};

export const ALL_MAPS: ZoneInfo[] = [...ZONES, WORLD];

export function getZoneInfo(id: string): ZoneInfo | undefined {
  return ALL_MAPS.find((z) => z.id === id);
}

export const COUNTRIES: Country[] = [
  // ── Europe (46) ──────────────────────────────────────────────
  { id: "ALB", iso: "008", name: "Albanie", article: "l'", zone: "europe" },
  { id: "DEU", iso: "276", name: "Allemagne", article: "l'", zone: "europe" },
  { id: "AND", iso: "020", name: "Andorre", article: "l'", zone: "europe" },
  { id: "AUT", iso: "040", name: "Autriche", article: "l'", zone: "europe" },
  { id: "BEL", iso: "056", name: "Belgique", article: "la", zone: "europe" },
  { id: "BLR", iso: "112", name: "Biélorussie", article: "la", zone: "europe", aliases: ["Bélarus", "Belarus"], alsoKnownAs: "Bélarus" },
  { id: "BIH", iso: "070", name: "Bosnie-Herzégovine", article: "la", zone: "europe", aliases: ["Bosnie"] },
  { id: "BGR", iso: "100", name: "Bulgarie", article: "la", zone: "europe" },
  { id: "CYP", iso: "196", name: "Chypre", article: "", zone: "europe" },
  { id: "HRV", iso: "191", name: "Croatie", article: "la", zone: "europe" },
  { id: "DNK", iso: "208", name: "Danemark", article: "le", zone: "europe" },
  { id: "ESP", iso: "724", name: "Espagne", article: "l'", zone: "europe" },
  { id: "EST", iso: "233", name: "Estonie", article: "l'", zone: "europe" },
  { id: "FIN", iso: "246", name: "Finlande", article: "la", zone: "europe" },
  { id: "FRA", iso: "250", name: "France", article: "la", zone: "europe" },
  { id: "GRC", iso: "300", name: "Grèce", article: "la", zone: "europe" },
  { id: "HUN", iso: "348", name: "Hongrie", article: "la", zone: "europe" },
  { id: "IRL", iso: "372", name: "Irlande", article: "l'", zone: "europe" },
  { id: "ISL", iso: "352", name: "Islande", article: "l'", zone: "europe" },
  { id: "ITA", iso: "380", name: "Italie", article: "l'", zone: "europe" },
  { id: "XKX", iso: "Kosovo", name: "Kosovo", article: "le", zone: "europe" },
  { id: "LVA", iso: "428", name: "Lettonie", article: "la", zone: "europe" },
  { id: "LIE", iso: "438", name: "Liechtenstein", article: "le", zone: "europe" },
  { id: "LTU", iso: "440", name: "Lituanie", article: "la", zone: "europe" },
  { id: "LUX", iso: "442", name: "Luxembourg", article: "le", zone: "europe" },
  { id: "MKD", iso: "807", name: "Macédoine du Nord", article: "la", zone: "europe", aliases: ["Macédoine"] },
  { id: "MLT", iso: "470", name: "Malte", article: "", zone: "europe" },
  { id: "MDA", iso: "498", name: "Moldavie", article: "la", zone: "europe", aliases: ["Moldova"] },
  { id: "MCO", iso: "492", name: "Monaco", article: "", zone: "europe" },
  { id: "MNE", iso: "499", name: "Monténégro", article: "le", zone: "europe" },
  { id: "NOR", iso: "578", name: "Norvège", article: "la", zone: "europe" },
  { id: "NLD", iso: "528", name: "Pays-Bas", article: "les", zone: "europe" },
  { id: "POL", iso: "616", name: "Pologne", article: "la", zone: "europe" },
  { id: "PRT", iso: "620", name: "Portugal", article: "le", zone: "europe" },
  { id: "ROU", iso: "642", name: "Roumanie", article: "la", zone: "europe" },
  { id: "GBR", iso: "826", name: "Royaume-Uni", article: "le", zone: "europe" },
  { id: "RUS", iso: "643", name: "Russie", article: "la", zone: "europe" },
  { id: "SMR", iso: "674", name: "Saint-Marin", article: "", zone: "europe" },
  { id: "SRB", iso: "688", name: "Serbie", article: "la", zone: "europe" },
  { id: "SVK", iso: "703", name: "Slovaquie", article: "la", zone: "europe" },
  { id: "SVN", iso: "705", name: "Slovénie", article: "la", zone: "europe" },
  { id: "SWE", iso: "752", name: "Suède", article: "la", zone: "europe" },
  { id: "CHE", iso: "756", name: "Suisse", article: "la", zone: "europe" },
  { id: "CZE", iso: "203", name: "Tchéquie", article: "la", zone: "europe", aliases: ["République tchèque"], alsoKnownAs: "République tchèque" },
  { id: "UKR", iso: "804", name: "Ukraine", article: "l'", zone: "europe" },
  { id: "VAT", iso: "336", name: "Vatican", article: "le", zone: "europe" },

  // ── Afrique (54) ─────────────────────────────────────────────
  { id: "ZAF", iso: "710", name: "Afrique du Sud", article: "l'", zone: "afrique" },
  { id: "DZA", iso: "012", name: "Algérie", article: "l'", zone: "afrique" },
  { id: "AGO", iso: "024", name: "Angola", article: "l'", zone: "afrique" },
  { id: "BEN", iso: "204", name: "Bénin", article: "le", zone: "afrique" },
  { id: "BWA", iso: "072", name: "Botswana", article: "le", zone: "afrique" },
  { id: "BFA", iso: "854", name: "Burkina Faso", article: "le", zone: "afrique", aliases: ["Burkina"] },
  { id: "BDI", iso: "108", name: "Burundi", article: "le", zone: "afrique" },
  { id: "CMR", iso: "120", name: "Cameroun", article: "le", zone: "afrique" },
  { id: "CPV", iso: "132", name: "Cap-Vert", article: "le", zone: "afrique", aliases: ["Cabo Verde"] },
  { id: "CAF", iso: "140", name: "Centrafrique", article: "la", zone: "afrique", aliases: ["République centrafricaine"], alsoKnownAs: "République centrafricaine" },
  { id: "COM", iso: "174", name: "Comores", article: "les", zone: "afrique" },
  { id: "COG", iso: "178", name: "Congo", article: "le", zone: "afrique", aliases: ["République du Congo", "Congo-Brazzaville", "Congo Brazzaville"], alsoKnownAs: "Congo-Brazzaville" },
  { id: "COD", iso: "180", name: "République démocratique du Congo", article: "la", zone: "afrique", aliases: ["RD Congo", "RDC", "Congo-Kinshasa", "Congo Kinshasa"], alsoKnownAs: "RDC ou Congo-Kinshasa" },
  { id: "CIV", iso: "384", name: "Côte d'Ivoire", article: "la", zone: "afrique" },
  { id: "DJI", iso: "262", name: "Djibouti", article: "", zone: "afrique" },
  { id: "EGY", iso: "818", name: "Égypte", article: "l'", zone: "afrique" },
  { id: "ERI", iso: "232", name: "Érythrée", article: "l'", zone: "afrique" },
  { id: "SWZ", iso: "748", name: "Eswatini", article: "l'", zone: "afrique", aliases: ["Swaziland"], alsoKnownAs: "Swaziland" },
  { id: "ETH", iso: "231", name: "Éthiopie", article: "l'", zone: "afrique" },
  { id: "GAB", iso: "266", name: "Gabon", article: "le", zone: "afrique" },
  { id: "GMB", iso: "270", name: "Gambie", article: "la", zone: "afrique" },
  { id: "GHA", iso: "288", name: "Ghana", article: "le", zone: "afrique" },
  { id: "GIN", iso: "324", name: "Guinée", article: "la", zone: "afrique", aliases: ["Guinée-Conakry"] },
  { id: "GNB", iso: "624", name: "Guinée-Bissau", article: "la", zone: "afrique" },
  { id: "GNQ", iso: "226", name: "Guinée équatoriale", article: "la", zone: "afrique" },
  { id: "KEN", iso: "404", name: "Kenya", article: "le", zone: "afrique" },
  { id: "LSO", iso: "426", name: "Lesotho", article: "le", zone: "afrique" },
  { id: "LBR", iso: "430", name: "Liberia", article: "le", zone: "afrique", aliases: ["Libéria"] },
  { id: "LBY", iso: "434", name: "Libye", article: "la", zone: "afrique" },
  { id: "MDG", iso: "450", name: "Madagascar", article: "", zone: "afrique" },
  { id: "MWI", iso: "454", name: "Malawi", article: "le", zone: "afrique" },
  { id: "MLI", iso: "466", name: "Mali", article: "le", zone: "afrique" },
  { id: "MAR", iso: "504", name: "Maroc", article: "le", zone: "afrique" },
  { id: "MUS", iso: "480", name: "Maurice", article: "", zone: "afrique", aliases: ["Île Maurice"], alsoKnownAs: "l'île Maurice" },
  { id: "MRT", iso: "478", name: "Mauritanie", article: "la", zone: "afrique" },
  { id: "MOZ", iso: "508", name: "Mozambique", article: "le", zone: "afrique" },
  { id: "NAM", iso: "516", name: "Namibie", article: "la", zone: "afrique" },
  { id: "NER", iso: "562", name: "Niger", article: "le", zone: "afrique" },
  { id: "NGA", iso: "566", name: "Nigeria", article: "le", zone: "afrique", aliases: ["Nigéria"] },
  { id: "UGA", iso: "800", name: "Ouganda", article: "l'", zone: "afrique" },
  { id: "RWA", iso: "646", name: "Rwanda", article: "le", zone: "afrique" },
  { id: "STP", iso: "678", name: "Sao Tomé-et-Principe", article: "", zone: "afrique", aliases: ["São Tomé-et-Príncipe", "Sao Tomé"] },
  { id: "SEN", iso: "686", name: "Sénégal", article: "le", zone: "afrique" },
  { id: "SYC", iso: "690", name: "Seychelles", article: "les", zone: "afrique" },
  { id: "SLE", iso: "694", name: "Sierra Leone", article: "la", zone: "afrique" },
  { id: "SOM", iso: "706", name: "Somalie", article: "la", zone: "afrique" },
  { id: "SDN", iso: "729", name: "Soudan", article: "le", zone: "afrique" },
  { id: "SSD", iso: "728", name: "Soudan du Sud", article: "le", zone: "afrique" },
  { id: "TZA", iso: "834", name: "Tanzanie", article: "la", zone: "afrique" },
  { id: "TCD", iso: "148", name: "Tchad", article: "le", zone: "afrique" },
  { id: "TGO", iso: "768", name: "Togo", article: "le", zone: "afrique" },
  { id: "TUN", iso: "788", name: "Tunisie", article: "la", zone: "afrique" },
  { id: "ZMB", iso: "894", name: "Zambie", article: "la", zone: "afrique" },
  { id: "ZWE", iso: "716", name: "Zimbabwe", article: "le", zone: "afrique" },

  // ── Asie (48) ────────────────────────────────────────────────
  { id: "AFG", iso: "004", name: "Afghanistan", article: "l'", zone: "asie" },
  { id: "SAU", iso: "682", name: "Arabie saoudite", article: "l'", zone: "asie", aliases: ["Arabie"] },
  { id: "ARM", iso: "051", name: "Arménie", article: "l'", zone: "asie" },
  { id: "AZE", iso: "031", name: "Azerbaïdjan", article: "l'", zone: "asie" },
  { id: "BHR", iso: "048", name: "Bahreïn", article: "", zone: "asie" },
  { id: "BGD", iso: "050", name: "Bangladesh", article: "le", zone: "asie" },
  { id: "BTN", iso: "064", name: "Bhoutan", article: "le", zone: "asie" },
  { id: "MMR", iso: "104", name: "Birmanie", article: "la", zone: "asie", aliases: ["Myanmar"], alsoKnownAs: "Myanmar" },
  { id: "BRN", iso: "096", name: "Brunei", article: "", zone: "asie", aliases: ["Brunéi"] },
  { id: "KHM", iso: "116", name: "Cambodge", article: "le", zone: "asie" },
  { id: "CHN", iso: "156", name: "Chine", article: "la", zone: "asie" },
  { id: "PRK", iso: "408", name: "Corée du Nord", article: "la", zone: "asie" },
  { id: "KOR", iso: "410", name: "Corée du Sud", article: "la", zone: "asie" },
  { id: "ARE", iso: "784", name: "Émirats arabes unis", article: "les", zone: "asie", aliases: ["EAU", "Émirats"] },
  { id: "GEO", iso: "268", name: "Géorgie", article: "la", zone: "asie" },
  { id: "IND", iso: "356", name: "Inde", article: "l'", zone: "asie" },
  { id: "IDN", iso: "360", name: "Indonésie", article: "l'", zone: "asie" },
  { id: "IRQ", iso: "368", name: "Irak", article: "l'", zone: "asie", aliases: ["Iraq"] },
  { id: "IRN", iso: "364", name: "Iran", article: "l'", zone: "asie" },
  { id: "ISR", iso: "376", name: "Israël", article: "", zone: "asie" },
  { id: "JPN", iso: "392", name: "Japon", article: "le", zone: "asie" },
  { id: "JOR", iso: "400", name: "Jordanie", article: "la", zone: "asie" },
  { id: "KAZ", iso: "398", name: "Kazakhstan", article: "le", zone: "asie" },
  { id: "KGZ", iso: "417", name: "Kirghizistan", article: "le", zone: "asie", aliases: ["Kirghizstan"] },
  { id: "KWT", iso: "414", name: "Koweït", article: "le", zone: "asie" },
  { id: "LAO", iso: "418", name: "Laos", article: "le", zone: "asie" },
  { id: "LBN", iso: "422", name: "Liban", article: "le", zone: "asie" },
  { id: "MYS", iso: "458", name: "Malaisie", article: "la", zone: "asie", aliases: ["Malaysia"] },
  { id: "MDV", iso: "462", name: "Maldives", article: "les", zone: "asie" },
  { id: "MNG", iso: "496", name: "Mongolie", article: "la", zone: "asie" },
  { id: "NPL", iso: "524", name: "Népal", article: "le", zone: "asie" },
  { id: "OMN", iso: "512", name: "Oman", article: "", zone: "asie" },
  { id: "UZB", iso: "860", name: "Ouzbékistan", article: "l'", zone: "asie" },
  { id: "PAK", iso: "586", name: "Pakistan", article: "le", zone: "asie" },
  { id: "PSE", iso: "275", name: "Palestine", article: "la", zone: "asie" },
  { id: "PHL", iso: "608", name: "Philippines", article: "les", zone: "asie" },
  { id: "QAT", iso: "634", name: "Qatar", article: "le", zone: "asie" },
  { id: "SGP", iso: "702", name: "Singapour", article: "", zone: "asie" },
  { id: "LKA", iso: "144", name: "Sri Lanka", article: "le", zone: "asie" },
  { id: "SYR", iso: "760", name: "Syrie", article: "la", zone: "asie" },
  { id: "TJK", iso: "762", name: "Tadjikistan", article: "le", zone: "asie" },
  { id: "TWN", iso: "158", name: "Taïwan", article: "", zone: "asie" },
  { id: "THA", iso: "764", name: "Thaïlande", article: "la", zone: "asie" },
  { id: "TLS", iso: "626", name: "Timor oriental", article: "le", zone: "asie", aliases: ["Timor-Leste", "Timor"] },
  { id: "TKM", iso: "795", name: "Turkménistan", article: "le", zone: "asie" },
  { id: "TUR", iso: "792", name: "Turquie", article: "la", zone: "asie" },
  { id: "VNM", iso: "704", name: "Vietnam", article: "le", zone: "asie", aliases: ["Viêt Nam", "Viet Nam"] },
  { id: "YEM", iso: "887", name: "Yémen", article: "le", zone: "asie" },

  // ── Amérique du Nord et centrale (23) ────────────────────────
  { id: "ATG", iso: "028", name: "Antigua-et-Barbuda", article: "", zone: "amerique-nord", aliases: ["Antigua"] },
  { id: "BHS", iso: "044", name: "Bahamas", article: "les", zone: "amerique-nord" },
  { id: "BRB", iso: "052", name: "Barbade", article: "la", zone: "amerique-nord" },
  { id: "BLZ", iso: "084", name: "Belize", article: "le", zone: "amerique-nord" },
  { id: "CAN", iso: "124", name: "Canada", article: "le", zone: "amerique-nord" },
  { id: "CRI", iso: "188", name: "Costa Rica", article: "le", zone: "amerique-nord" },
  { id: "CUB", iso: "192", name: "Cuba", article: "", zone: "amerique-nord" },
  { id: "DMA", iso: "212", name: "Dominique", article: "la", zone: "amerique-nord" },
  { id: "DOM", iso: "214", name: "République dominicaine", article: "la", zone: "amerique-nord" },
  { id: "SLV", iso: "222", name: "Salvador", article: "le", zone: "amerique-nord", aliases: ["El Salvador"] },
  { id: "USA", iso: "840", name: "États-Unis", article: "les", zone: "amerique-nord", aliases: ["USA", "États-Unis d'Amérique"] },
  { id: "GRD", iso: "308", name: "Grenade", article: "la", zone: "amerique-nord" },
  { id: "GTM", iso: "320", name: "Guatemala", article: "le", zone: "amerique-nord" },
  { id: "HTI", iso: "332", name: "Haïti", article: "", zone: "amerique-nord" },
  { id: "HND", iso: "340", name: "Honduras", article: "le", zone: "amerique-nord" },
  { id: "JAM", iso: "388", name: "Jamaïque", article: "la", zone: "amerique-nord" },
  { id: "MEX", iso: "484", name: "Mexique", article: "le", zone: "amerique-nord" },
  { id: "NIC", iso: "558", name: "Nicaragua", article: "le", zone: "amerique-nord" },
  { id: "PAN", iso: "591", name: "Panama", article: "le", zone: "amerique-nord" },
  { id: "KNA", iso: "659", name: "Saint-Christophe-et-Niévès", article: "", zone: "amerique-nord", aliases: ["Saint-Kitts-et-Nevis", "Saint Kitts"], alsoKnownAs: "Saint-Kitts-et-Nevis" },
  { id: "LCA", iso: "662", name: "Sainte-Lucie", article: "", zone: "amerique-nord" },
  { id: "VCT", iso: "670", name: "Saint-Vincent-et-les-Grenadines", article: "", zone: "amerique-nord", aliases: ["Saint-Vincent"] },
  { id: "TTO", iso: "780", name: "Trinité-et-Tobago", article: "", zone: "amerique-nord", aliases: ["Trinidad-et-Tobago", "Trinité"] },

  // ── Amérique du Sud (12) ─────────────────────────────────────
  { id: "ARG", iso: "032", name: "Argentine", article: "l'", zone: "amerique-sud" },
  { id: "BOL", iso: "068", name: "Bolivie", article: "la", zone: "amerique-sud" },
  { id: "BRA", iso: "076", name: "Brésil", article: "le", zone: "amerique-sud" },
  { id: "CHL", iso: "152", name: "Chili", article: "le", zone: "amerique-sud" },
  { id: "COL", iso: "170", name: "Colombie", article: "la", zone: "amerique-sud" },
  { id: "ECU", iso: "218", name: "Équateur", article: "l'", zone: "amerique-sud" },
  { id: "GUY", iso: "328", name: "Guyana", article: "le", zone: "amerique-sud" },
  { id: "PRY", iso: "600", name: "Paraguay", article: "le", zone: "amerique-sud" },
  { id: "PER", iso: "604", name: "Pérou", article: "le", zone: "amerique-sud" },
  { id: "SUR", iso: "740", name: "Suriname", article: "le", zone: "amerique-sud", aliases: ["Surinam"] },
  { id: "URY", iso: "858", name: "Uruguay", article: "l'", zone: "amerique-sud" },
  { id: "VEN", iso: "862", name: "Venezuela", article: "le", zone: "amerique-sud", aliases: ["Vénézuela"] },

  // ── Océanie (14) ─────────────────────────────────────────────
  { id: "AUS", iso: "036", name: "Australie", article: "l'", zone: "oceanie" },
  { id: "FJI", iso: "242", name: "Fidji", article: "les", zone: "oceanie", aliases: ["Îles Fidji"] },
  { id: "KIR", iso: "296", name: "Kiribati", article: "les", zone: "oceanie" },
  { id: "MHL", iso: "584", name: "Îles Marshall", article: "les", zone: "oceanie", aliases: ["Marshall"] },
  { id: "FSM", iso: "583", name: "Micronésie", article: "la", zone: "oceanie", aliases: ["États fédérés de Micronésie"] },
  { id: "NRU", iso: "520", name: "Nauru", article: "", zone: "oceanie" },
  { id: "NZL", iso: "554", name: "Nouvelle-Zélande", article: "la", zone: "oceanie" },
  { id: "PLW", iso: "585", name: "Palaos", article: "les", zone: "oceanie", aliases: ["Palau"] },
  { id: "PNG", iso: "598", name: "Papouasie-Nouvelle-Guinée", article: "la", zone: "oceanie", aliases: ["Papouasie"] },
  { id: "SLB", iso: "090", name: "Îles Salomon", article: "les", zone: "oceanie", aliases: ["Salomon"] },
  { id: "WSM", iso: "882", name: "Samoa", article: "les", zone: "oceanie" },
  { id: "TON", iso: "776", name: "Tonga", article: "les", zone: "oceanie" },
  { id: "TUV", iso: "798", name: "Tuvalu", article: "les", zone: "oceanie" },
  { id: "VUT", iso: "548", name: "Vanuatu", article: "le", zone: "oceanie" },
];

/**
 * Common confusions: answers that are "not wrong, but not the country".
 * Shown as a gentle hint instead of a plain error.
 */
export const NEAR_MISSES: Record<string, { countryId: string; hint: string }> = {
  angleterre: { countryId: "GBR", hint: "L'Angleterre n'est qu'une partie du Royaume-Uni." },
  ecosse: { countryId: "GBR", hint: "L'Écosse fait partie du Royaume-Uni." },
  "pays de galles": { countryId: "GBR", hint: "Le pays de Galles fait partie du Royaume-Uni." },
  "grande bretagne": { countryId: "GBR", hint: "La Grande-Bretagne est l'île principale du Royaume-Uni." },
  hollande: { countryId: "NLD", hint: "La Hollande n'est qu'une région des Pays-Bas." },
};

/** Territories drawn on the map but never asked (not independent countries). */
export const TERRITORY_NAMES: Record<string, string> = {
  "304": "Groenland (territoire du Danemark)",
  "732": "Sahara occidental (territoire disputé)",
  "630": "Porto Rico (territoire des États-Unis)",
  "540": "Nouvelle-Calédonie (France)",
  "258": "Polynésie française (France)",
  "238": "Îles Malouines (Royaume-Uni)",
  "234": "Îles Féroé (Danemark)",
  "060": "Bermudes (Royaume-Uni)",
  "010": "Antarctique",
  "831": "Guernesey (Royaume-Uni)",
  "832": "Jersey (Royaume-Uni)",
  "833": "Île de Man (Royaume-Uni)",
  "016": "Samoa américaines (États-Unis)",
  "316": "Guam (États-Unis)",
  "580": "Îles Mariannes du Nord (États-Unis)",
  "876": "Wallis-et-Futuna (France)",
  "184": "Îles Cook (Nouvelle-Zélande)",
  "570": "Niue (Nouvelle-Zélande)",
  "136": "Îles Caïmans (Royaume-Uni)",
  "796": "Îles Turques-et-Caïques (Royaume-Uni)",
  "533": "Aruba (Pays-Bas)",
  "531": "Curaçao (Pays-Bas)",
  "666": "Saint-Pierre-et-Miquelon (France)",
  "260": "Terres australes françaises (France)",
};

export const COUNTRY_BY_ID: Record<string, Country> = Object.fromEntries(
  COUNTRIES.map((c) => [c.id, c])
);

export function countriesOf(map: MapId): Country[] {
  return map === "monde" ? COUNTRIES : COUNTRIES.filter((c) => c.zone === map);
}

/** "la France", "l'Italie", "Cuba" */
export function withArticle(c: Country): string {
  if (!c.article) return c.name;
  return c.article === "l'" ? `l'${c.name}` : `${c.article} ${c.name}`;
}
