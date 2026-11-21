import { DiagramFrame } from "../Diagrams";
import { ConnectedDiagram, DiagramNode } from "./ConnectedDiagram";
import { Frise } from "./Frise";

// ── Technologie 3e — L'évolution des objets techniques ───────────────────────
// HTML-first diagrams: text is real HTML (keeps its size, wraps), lines are
// computed from the boxes' positions. Checked with `npm run check-diagrams`.

interface LigneeData {
  id: string;
  name: string;
  /** May contain soft hyphens (­) to break very long words on phones. */
  principe: string;
  objets: string[];
}

/**
 * Single words may be hyphenated when they don't fit (very narrow phones);
 * multi-word lines never are, so ordinary lines stay unbroken for DYS readers.
 */
const hyph = (text: string) => (text.includes(" ") ? "" : "hyphens-auto");

/** Family on top, arrows down to each lineage: 2 columns on phones, one row from `sm`. */
function FamilleLigneesTree({ famille, fonction, lignees }: { famille: string; fonction: string; lignees: LigneeData[] }) {
  const desktopCols = lignees.length >= 4 ? "sm:grid-cols-4" : lignees.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <ConnectedDiagram
      edges={lignees.map((l) => ({ from: "famille", to: l.id }))}
      ariaLabel={`Famille « ${famille} » (fonction d'usage : ${fonction}). ${lignees
        .map((l) => `Lignée ${l.name}, principe ${l.principe.replace(/­/g, "")} : ${l.objets.join(", puis ")}`)
        .join(". ")}.`}
    >
      <DiagramNode id="famille" className="mx-auto mb-9 max-w-sm rounded-xl border-2 border-blue-500 bg-blue-50 px-3 py-2 text-center">
        <p className="text-base font-extrabold leading-snug text-blue-900">FAMILLE : {famille}</p>
        <p className="text-[0.8125rem] leading-snug text-blue-900">
          Fonction d&apos;usage : <b>{fonction}</b>
        </p>
      </DiagramNode>
      <div className={`grid grid-cols-2 gap-x-2 gap-y-10 sm:gap-x-3 ${desktopCols}`}>
        {lignees.map((l) => (
          <DiagramNode
            key={l.id}
            id={l.id}
            className="rounded-xl border-2 border-emerald-500 bg-emerald-50 px-1.5 py-2 text-center [overflow-wrap:break-word] sm:px-2"
          >
            <p className="text-[0.6875rem] font-bold uppercase tracking-wider text-emerald-700">Lignée</p>
            <p className={`text-sm font-extrabold leading-tight text-emerald-800 ${hyph(l.name)}`}>{l.name}</p>
            <p className="mt-1 text-xs italic leading-snug text-warm-700">{l.principe}</p>
            <div className="mt-1.5 text-[0.8125rem] font-semibold leading-snug text-warm-900">
              {l.objets.map((o, i) => (
                <div key={o} className={hyph(o)}>
                  {i > 0 && (
                    <div className="text-emerald-700" aria-hidden>
                      ↓
                    </div>
                  )}
                  {o}
                </div>
              ))}
            </div>
          </DiagramNode>
        ))}
      </div>
    </ConnectedDiagram>
  );
}

export function FamilleEclairageDiagram() {
  return (
    <DiagramFrame
      title="Une famille, quatre lignées : les objets d'éclairage"
      caption="Changer de principe technique = rupture technologique = naissance d'une nouvelle lignée."
    >
      <FamilleLigneesTree
        famille="les objets d'éclairage"
        fonction="éclairer, produire de la lumière"
        lignees={[
          { id: "combustion", name: "combustion", principe: "une flamme", objets: ["Bougie", "lampe à pétrole", "bec de gaz"] },
          { id: "incandescence", name: "incandescence", principe: "filament chauffé par le courant électrique", objets: ["Ampoule classique", "halogène"] },
          { id: "fluorescence", name: "fluorescence", principe: "décharge électrique dans un gaz", objets: ["Tube néon", "fluocompacte"] },
          { id: "led", name: "LED", principe: "électro­luminescence d'un semi-conducteur", objets: ["Ampoule LED", "ruban LED"] },
        ]}
      />
    </DiagramFrame>
  );
}

export function FamilleCommunicationDiagram() {
  return (
    <DiagramFrame
      title="Autre exemple : la famille « communiquer à distance »"
      caption="Même besoin (communiquer à distance), deux principes techniques : le fil ou les ondes radio."
    >
      <FamilleLigneesTree
        famille="communiquer"
        fonction="communiquer à distance"
        lignees={[
          { id: "filaire", name: "filaire", principe: "signal électrique dans un fil", objets: ["Télégraphe (1837)", "téléphone fixe (1876)", "fax (1966)"] },
          { id: "sans-fil", name: "sans fil", principe: "ondes radio (réseau mobile)", objets: ["Téléphone mobile (1983)", "smartphone (2007)"] },
        ]}
      />
    </DiagramFrame>
  );
}

export function FriseEclairageDiagram() {
  return (
    <DiagramFrame title="Inventions, innovations et ruptures : la frise de l'éclairage">
      <Frise
        start={1850}
        end={2020}
        events={[
          { year: 1853, label: "Lampe à pétrole", kind: "repere" },
          { year: 1879, label: "Ampoule Edison", kind: "rupture" },
          { year: 1938, label: "Tube fluorescent", kind: "rupture" },
          { year: 1959, label: "Halogène", kind: "innovation" },
          { year: 1980, label: "Fluocompacte", kind: "innovation" },
          { year: 1993, label: "LED blanche", kind: "rupture" },
          { year: 2012, label: "Fin ampoules classiques (UE)", kind: "repere" },
        ]}
      />
      <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-warm-700">
        <span>
          <b className="text-orange-700">●</b> <b>Rupture</b> : nouveau principe technique, nouvelle lignée
        </span>
        <span>
          <b className="text-blue-700">●</b> <b>Innovation</b> : amélioration dans une lignée existante
        </span>
        <span>
          <b className="text-stone-600">●</b> <b>Repère</b> historique
        </span>
      </div>
    </DiagramFrame>
  );
}

const PILIERS = [
  { name: "SOCIAL", hint: "les personnes", color: "#B45309", fill: "#FDE68A" },
  { name: "ÉCONOMIQUE", hint: "l'argent", color: "#15803D", fill: "#BBF7D0" },
  { name: "ENVIRONNEMENTAL", hint: "la planète", color: "#166534", fill: "#86EFAC" },
];

function Pilier({ p, align }: { p: (typeof PILIERS)[number]; align: string }) {
  return (
    <div className={align}>
      <p className="text-[0.8125rem] font-extrabold tracking-wide" style={{ color: p.color }}>
        {p.name}
      </p>
      <p className="text-xs text-warm-700">{p.hint}</p>
    </div>
  );
}

/**
 * Venn diagram: the circles are drawn (no text inside the SVG); pillar names
 * are HTML around the drawing, the intersections are listed underneath, so
 * nothing shrinks or overlaps on a narrow phone.
 */
export function DeveloppementDurableDiagram() {
  const [social, eco, env] = PILIERS;
  return (
    <DiagramFrame title="Les 3 piliers du développement durable" caption="Un objet est « durable » quand il respecte les trois en même temps.">
      <div className="mx-auto max-w-sm" role="img" aria-label="Trois cercles qui se croisent : social, économique, environnemental. Social et économique : équitable. Social et environnemental : vivable. Économique et environnemental : viable. Au centre : durable.">
        <div className="flex items-end justify-between gap-2" aria-hidden>
          <Pilier p={social} align="text-left" />
          <Pilier p={eco} align="text-right" />
        </div>
        <div className="relative mx-auto w-full max-w-[280px]" aria-hidden>
          <svg viewBox="0 0 300 260" className="block w-full">
            <circle cx={110} cy={95} r={80} fill={social.fill} fillOpacity="0.6" stroke={social.color} strokeWidth="2.5" />
            <circle cx={190} cy={95} r={80} fill={eco.fill} fillOpacity="0.6" stroke={eco.color} strokeWidth="2.5" />
            <circle cx={150} cy={165} r={80} fill={env.fill} fillOpacity="0.6" stroke={env.color} strokeWidth="2.5" />
          </svg>
          <span className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-800 px-2.5 py-0.5 text-xs font-extrabold text-white">
            DURABLE
          </span>
        </div>
        <div aria-hidden>
          <Pilier p={env} align="text-center" />
        </div>
        <ul className="mt-3 space-y-1 text-[0.8125rem] text-warm-900" aria-hidden>
          <li>
            <b style={{ color: social.color }}>Social</b> + <b style={{ color: eco.color }}>économique</b> → <b>équitable</b>
          </li>
          <li>
            <b style={{ color: social.color }}>Social</b> + <b style={{ color: env.color }}>environnemental</b> → <b>vivable</b>
          </li>
          <li>
            <b style={{ color: eco.color }}>Économique</b> + <b style={{ color: env.color }}>environnemental</b> → <b>viable</b>
          </li>
        </ul>
      </div>
    </DiagramFrame>
  );
}
