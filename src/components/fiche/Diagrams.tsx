import { AtomModel } from "@/components/chemistry/AtomModel";

function DiagramFrame({
  title,
  caption,
  children,
}: {
  title: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="my-5 rounded-2xl border border-warm-200 bg-gradient-to-br from-white via-orange-50/30 to-cyan-50/40 p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold text-warm-800 sm:text-base">{title}</h3>
        <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-warm-500">
          Schema
        </span>
      </div>
      <div className="overflow-hidden rounded-xl bg-white/75 p-2 sm:p-3">{children}</div>
      {caption && (
        <figcaption className="mt-3 text-center text-xs italic text-warm-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function ArrowLabel({
  x,
  y,
  children,
}: {
  x: number;
  y: number;
  children: React.ReactNode;
}) {
  return (
    <text x={x} y={y} textAnchor="middle" fontSize="13" fontWeight="700" fill="#44403C">
      {children}
    </text>
  );
}

export function StateChangesDiagram() {
  return (
    <DiagramFrame
      title="Les changements d'etat"
      caption="Les fleches rouges correspondent a un chauffage, les bleues a un refroidissement."
    >
      <svg viewBox="0 0 860 420" className="h-auto w-full" role="img" aria-label="Schema des changements d'etat entre solide, liquide et gaz">
        <defs>
          <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#F97316" />
          </marker>
          <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0EA5E9" />
          </marker>
        </defs>

        <rect x="50" y="135" width="190" height="116" rx="30" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="3" />
        <rect x="335" y="135" width="190" height="116" rx="30" fill="#DCFCE7" stroke="#34D399" strokeWidth="3" />
        <rect x="620" y="135" width="190" height="116" rx="30" fill="#FED7AA" stroke="#FB923C" strokeWidth="3" />

        <text x="145" y="187" textAnchor="middle" fontSize="32" fontWeight="700" fill="#1E3A8A">Solide</text>
        <text x="145" y="220" textAnchor="middle" fontSize="18" fill="#1E40AF">forme fixe</text>
        <text x="145" y="244" textAnchor="middle" fontSize="18" fill="#1E40AF">volume fixe</text>

        <text x="430" y="187" textAnchor="middle" fontSize="32" fontWeight="700" fill="#166534">Liquide</text>
        <text x="430" y="220" textAnchor="middle" fontSize="18" fill="#15803D">forme variable</text>
        <text x="430" y="244" textAnchor="middle" fontSize="18" fill="#15803D">volume fixe</text>

        <text x="715" y="187" textAnchor="middle" fontSize="32" fontWeight="700" fill="#9A3412">Gaz</text>
        <text x="715" y="220" textAnchor="middle" fontSize="18" fill="#C2410C">forme variable</text>
        <text x="715" y="244" textAnchor="middle" fontSize="18" fill="#C2410C">volume variable</text>

        <line x1="240" y1="165" x2="335" y2="165" stroke="#F97316" strokeWidth="6" markerEnd="url(#arrow-red)" />
        <ArrowLabel x={287} y={148}>Fusion</ArrowLabel>
        <line x1="335" y1="215" x2="240" y2="215" stroke="#0EA5E9" strokeWidth="6" markerEnd="url(#arrow-blue)" />
        <ArrowLabel x={287} y={268}>Solidification</ArrowLabel>

        <line x1="525" y1="165" x2="620" y2="165" stroke="#F97316" strokeWidth="6" markerEnd="url(#arrow-red)" />
        <ArrowLabel x={572} y={148}>Vaporisation</ArrowLabel>
        <line x1="620" y1="215" x2="525" y2="215" stroke="#0EA5E9" strokeWidth="6" markerEnd="url(#arrow-blue)" />
        <ArrowLabel x={572} y={268}>Liquefaction</ArrowLabel>

        <path d="M 170 128 C 200 40, 670 40, 710 128" fill="none" stroke="#F97316" strokeWidth="6" markerEnd="url(#arrow-red)" />
        <ArrowLabel x={440} y={52}>Sublimation</ArrowLabel>

        <path d="M 705 255 C 690 332, 220 332, 155 255" fill="none" stroke="#0EA5E9" strokeWidth="6" markerEnd="url(#arrow-blue)" />
        <ArrowLabel x={440} y={396}>Condensation solide</ArrowLabel>

        <rect x="250" y="300" width="380" height="50" rx="22" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="2.5" />
        <text x="440" y="331" textAnchor="middle" fontSize="16" fontWeight="700" fill="#9A3412">
          A retenir en priorite : fusion, solidification, vaporisation, liquefaction
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function CircuitComparisonDiagram() {
  return (
    <DiagramFrame
      title="Circuits electriques"
      caption="En serie, tout est sur une seule boucle. En derivation, chaque branche a son propre chemin."
    >
      <svg viewBox="0 0 820 380" className="h-auto w-full" role="img" aria-label="Comparaison entre un circuit en serie et un circuit en derivation">
        <rect x="24" y="20" width="360" height="336" rx="28" fill="#F5F3FF" stroke="#C4B5FD" strokeWidth="3" />
        <rect x="436" y="20" width="360" height="336" rx="28" fill="#ECFEFF" stroke="#67E8F9" strokeWidth="3" />

        <text x="204" y="60" textAnchor="middle" fontSize="26" fontWeight="700" fill="#6D28D9">Circuit en serie</text>
        <text x="616" y="60" textAnchor="middle" fontSize="26" fontWeight="700" fill="#0F766E">Circuit en derivation</text>

        <path d="M 128 278 H 100 V 110 H 150 M 172 110 H 228 M 270 110 H 324 V 278 H 100" fill="none" stroke="#44403C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="150" y1="90" x2="150" y2="130" stroke="#44403C" strokeWidth="4" />
        <line x1="168" y1="82" x2="168" y2="138" stroke="#44403C" strokeWidth="6" />
        <circle cx="249" cy="110" r="22" fill="white" stroke="#7C3AED" strokeWidth="4" />
        <path d="M 235 124 L 263 96 M 235 96 L 263 124" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />

        <text x="204" y="316" textAnchor="middle" fontSize="18" fontWeight="700" fill="#5B21B6">Une seule boucle</text>
        <text x="204" y="338" textAnchor="middle" fontSize="16" fill="#5B21B6">{"Si un element s'arrete,"}</text>
        <text x="204" y="358" textAnchor="middle" fontSize="16" fill="#5B21B6">{"tout le circuit s'arrete"}</text>

        <path d="M 530 220 H 530 V 110 H 558" fill="none" stroke="#44403C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="558" y1="90" x2="558" y2="130" stroke="#44403C" strokeWidth="4" />
        <line x1="578" y1="82" x2="578" y2="138" stroke="#44403C" strokeWidth="6" />
        <path d="M 578 110 H 700 V 220" fill="none" stroke="#44403C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 530 155 H 600" fill="none" stroke="#44403C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 644 155 H 700" fill="none" stroke="#44403C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 530 220 H 600" fill="none" stroke="#44403C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 644 220 H 700" fill="none" stroke="#44403C" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="622" cy="155" r="22" fill="white" stroke="#0891B2" strokeWidth="4" />
        <path d="M 608 169 L 636 141 M 608 141 L 636 169" stroke="#0891B2" strokeWidth="4" strokeLinecap="round" />
        <circle cx="622" cy="220" r="22" fill="white" stroke="#0891B2" strokeWidth="4" />
        <path d="M 608 234 L 636 206 M 608 206 L 636 234" stroke="#0891B2" strokeWidth="4" strokeLinecap="round" />

        <text x="616" y="270" textAnchor="middle" fontSize="18" fontWeight="700" fill="#115E59">Plusieurs branches</text>
        <text x="616" y="300" textAnchor="middle" fontSize="16" fill="#115E59">{"Une branche peut s'arreter"}</text>
        <text x="616" y="320" textAnchor="middle" fontSize="16" fill="#115E59">sans couper les autres</text>
      </svg>
    </DiagramFrame>
  );
}

export function OhmsTriangleDiagram() {
  return (
    <DiagramFrame
      title="Triangle magique de la loi d'Ohm"
      caption="Cache la grandeur que tu cherches : si U est cache, il reste R x I. Si R ou I est cache, il reste une division."
    >
      <svg viewBox="0 0 520 340" className="h-auto w-full" role="img" aria-label="Triangle magique de la loi d Ohm avec U en haut, R et I en bas">
        <path d="M 260 30 L 90 290 H 430 Z" fill="#FFF7ED" stroke="#FB923C" strokeWidth="5" />
        <line x1="175" y1="160" x2="345" y2="160" stroke="#FB923C" strokeWidth="5" />
        <line x1="260" y1="30" x2="260" y2="290" stroke="#FB923C" strokeWidth="5" />

        <text x="260" y="125" textAnchor="middle" fontSize="68" fontWeight="800" fill="#C2410C">U</text>
        <text x="175" y="245" textAnchor="middle" fontSize="60" fontWeight="800" fill="#15803D">R</text>
        <text x="345" y="245" textAnchor="middle" fontSize="60" fontWeight="800" fill="#2563EB">I</text>

        <rect x="95" y="300" width="330" height="24" rx="12" fill="#FFEDD5" />
        <text x="260" y="317" textAnchor="middle" fontSize="15" fontWeight="700" fill="#9A3412">
          U = R x I   |   R = U / I   |   I = U / R
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function HormonalControlDiagram() {
  return (
    <DiagramFrame
      title="Controle hormonal"
      caption="Le cerveau commande les gonades. Les gonades produisent ensuite les hormones qui agissent sur le corps."
    >
      <svg viewBox="0 0 860 380" className="h-auto w-full" role="img" aria-label="Schema du controle hormonal de la reproduction">
        <defs>
          <marker id="arrow-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#57534E" />
          </marker>
        </defs>

        <rect x="305" y="28" width="250" height="82" rx="26" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3" />
        <text x="430" y="68" textAnchor="middle" fontSize="32" fontWeight="700" fill="#92400E">Hypophyse</text>
        <text x="430" y="93" textAnchor="middle" fontSize="17" fill="#B45309">glande du cerveau</text>

        <path d="M 430 110 V 145" stroke="#57534E" strokeWidth="6" markerEnd="url(#arrow-dark)" />
        <path d="M 430 145 H 220" stroke="#57534E" strokeWidth="6" markerEnd="url(#arrow-dark)" />
        <path d="M 430 145 H 640" stroke="#57534E" strokeWidth="6" markerEnd="url(#arrow-dark)" />

        <text x="430" y="135" textAnchor="middle" fontSize="16" fontWeight="700" fill="#44403C">
          {"Hormones envoyees par l'hypophyse"}
        </text>

        <rect x="70" y="165" width="300" height="84" rx="28" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="3" />
        <rect x="490" y="165" width="300" height="84" rx="28" fill="#FCE7F3" stroke="#F472B6" strokeWidth="3" />

        <text x="220" y="206" textAnchor="middle" fontSize="30" fontWeight="700" fill="#1D4ED8">Testicules</text>
        <text x="220" y="230" textAnchor="middle" fontSize="18" fill="#2563EB">garcon</text>
        <text x="640" y="206" textAnchor="middle" fontSize="30" fontWeight="700" fill="#BE185D">Ovaires</text>
        <text x="640" y="230" textAnchor="middle" fontSize="18" fill="#DB2777">fille</text>

        <path d="M 220 249 V 286" stroke="#2563EB" strokeWidth="6" markerEnd="url(#arrow-dark)" />
        <path d="M 640 249 V 286" stroke="#DB2777" strokeWidth="6" markerEnd="url(#arrow-dark)" />

        <rect x="50" y="292" width="340" height="58" rx="22" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2.5" />
        <rect x="470" y="292" width="340" height="58" rx="22" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="2.5" />
        <text x="220" y="319" textAnchor="middle" fontSize="17" fontWeight="700" fill="#1D4ED8">
          Testosterone
        </text>
        <text x="220" y="340" textAnchor="middle" fontSize="17" fontWeight="700" fill="#1D4ED8">
          puberte masculine
        </text>
        <text x="640" y="319" textAnchor="middle" fontSize="17" fontWeight="700" fill="#BE185D">
          Oestrogenes
        </text>
        <text x="640" y="340" textAnchor="middle" fontSize="17" fontWeight="700" fill="#BE185D">
          puberte feminine + cycle
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function FemaleCycleDiagram() {
  return (
    <DiagramFrame
      title="Cycle feminin"
      caption="Jour 1 = debut des regles. L'ovulation arrive environ 14 jours avant les prochaines regles."
    >
      <svg viewBox="0 0 920 360" className="h-auto w-full" role="img" aria-label="Frise simple du cycle feminin sur 28 jours">
        <line x1="90" y1="245" x2="830" y2="245" stroke="#78716C" strokeWidth="7" strokeLinecap="round" />

        <rect x="80" y="155" width="135" height="60" rx="22" fill="#FFE4E6" stroke="#FB7185" strokeWidth="3" />
        <rect x="240" y="155" width="260" height="60" rx="22" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="3" />
        <rect x="520" y="140" width="120" height="90" rx="24" fill="#DCFCE7" stroke="#4ADE80" strokeWidth="3" />
        <rect x="660" y="155" width="180" height="60" rx="22" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="3" />

        <text x="148" y="191" textAnchor="middle" fontSize="18" fontWeight="700" fill="#BE123C">J1-J5 Regles</text>
        <text x="370" y="186" textAnchor="middle" fontSize="17" fontWeight="700" fill="#92400E">J6-J13</text>
        <text x="370" y="208" textAnchor="middle" fontSize="17" fontWeight="700" fill="#92400E">Endometre se reforme</text>
        <text x="580" y="183" textAnchor="middle" fontSize="18" fontWeight="700" fill="#166534">J14</text>
        <text x="580" y="206" textAnchor="middle" fontSize="18" fontWeight="700" fill="#166534">Ovulation</text>
        <text x="750" y="186" textAnchor="middle" fontSize="17" fontWeight="700" fill="#1D4ED8">J15-J28</text>
        <text x="750" y="208" textAnchor="middle" fontSize="17" fontWeight="700" fill="#1D4ED8">Attente</text>

        <circle cx="90" cy="245" r="12" fill="#E11D48" />
        <circle cx="580" cy="245" r="12" fill="#16A34A" />
        <circle cx="830" cy="245" r="12" fill="#2563EB" />

        <text x="90" y="282" textAnchor="middle" fontSize="16" fontWeight="700" fill="#9F1239">Jour 1</text>
        <text x="580" y="282" textAnchor="middle" fontSize="16" fontWeight="700" fill="#166534">Jour 14 env.</text>
        <text x="830" y="282" textAnchor="middle" fontSize="16" fontWeight="700" fill="#1D4ED8">Jour 28</text>

        <path d="M 580 120 C 650 50, 760 50, 820 110" fill="none" stroke="#FB7185" strokeWidth="4" strokeDasharray="8 6" />
        <text x="630" y="58" fontSize="16" fontWeight="700" fill="#BE123C">
          Ovulation = environ 14 jours avant les prochaines regles
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function SpermPathDiagram() {
  return (
    <DiagramFrame
      title="Trajet des spermatozoides"
      caption="Le sperme n'est pas un organe : c'est le melange des spermatozoides avec le liquide seminal."
    >
      <svg viewBox="0 0 980 270" className="h-auto w-full" role="img" aria-label="Schema du trajet des spermatozoides de la fabrication a la sortie">
        <defs>
          <marker id="arrow-flow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0F766E" />
          </marker>
        </defs>

        <rect x="30" y="88" width="150" height="82" rx="28" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="3" />
        <rect x="220" y="88" width="150" height="82" rx="28" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="3" />
        <rect x="410" y="88" width="150" height="82" rx="28" fill="#DCFCE7" stroke="#4ADE80" strokeWidth="3" />
        <rect x="600" y="88" width="180" height="82" rx="28" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="3" />
        <rect x="820" y="88" width="130" height="82" rx="28" fill="#FCE7F3" stroke="#F472B6" strokeWidth="3" />

        <text x="105" y="122" textAnchor="middle" fontSize="20" fontWeight="700" fill="#1D4ED8">Testicule</text>
        <text x="105" y="145" textAnchor="middle" fontSize="14" fill="#2563EB">fabrication</text>
        <text x="295" y="122" textAnchor="middle" fontSize="20" fontWeight="700" fill="#0369A1">Epididyme</text>
        <text x="295" y="145" textAnchor="middle" fontSize="14" fill="#0284C7">maturation</text>
        <text x="485" y="122" textAnchor="middle" fontSize="20" fontWeight="700" fill="#15803D">Canal deferent</text>
        <text x="485" y="145" textAnchor="middle" fontSize="14" fill="#16A34A">transport</text>
        <text x="690" y="119" textAnchor="middle" fontSize="20" fontWeight="700" fill="#B45309">Prostate +</text>
        <text x="690" y="143" textAnchor="middle" fontSize="20" fontWeight="700" fill="#B45309">vesicules</text>
        <text x="885" y="122" textAnchor="middle" fontSize="20" fontWeight="700" fill="#BE185D">Uretre</text>
        <text x="885" y="145" textAnchor="middle" fontSize="14" fill="#DB2777">sortie</text>

        <path d="M 180 129 H 220" stroke="#0F766E" strokeWidth="6" markerEnd="url(#arrow-flow)" />
        <path d="M 370 129 H 410" stroke="#0F766E" strokeWidth="6" markerEnd="url(#arrow-flow)" />
        <path d="M 560 129 H 600" stroke="#0F766E" strokeWidth="6" markerEnd="url(#arrow-flow)" />
        <path d="M 780 129 H 820" stroke="#0F766E" strokeWidth="6" markerEnd="url(#arrow-flow)" />

        <text x="490" y="225" textAnchor="middle" fontSize="18" fontWeight="700" fill="#0F766E">
          Sperme = spermatozoides + liquide seminal
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function MetropoleOrganisationDiagram() {
  return (
    <DiagramFrame
      title="Organisation d'une métropole"
      caption="Trois zones concentriques reliées au monde par des axes de communication"
    >
      <svg
        viewBox="0 0 800 680"
        className="h-auto w-full"
        role="img"
        aria-label="Schéma de l'organisation d'une métropole : CBD au centre, centre-ville autour, périphéries à l'extérieur, reliées au monde par des axes de communication"
      >
        <defs>
          {/* Zone gradients */}
          <radialGradient id="gPeri" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#d1fae5" />
            <stop offset="100%" stopColor="#6ee7b7" />
          </radialGradient>
          <radialGradient id="gCentre" cx="50%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#fff7ed" />
            <stop offset="100%" stopColor="#fdba74" />
          </radialGradient>
          <radialGradient id="gCBD" cx="38%" cy="32%" r="70%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </radialGradient>
          {/* Outer glow on périphéries */}
          <filter id="fGlow" x="-8%" y="-8%" width="116%" height="116%">
            <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#34d39940" />
          </filter>
          {/* Axis line glow */}
          <filter id="fLine" x="-20%" y="-200%" width="140%" height="500%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#94a3b840" />
          </filter>
          {/* Open arrowhead — orient auto rotates it */}
          <marker id="mArr" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">
            <path d="M2,2 L10,6 L2,10" fill="none" stroke="#64748b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
        </defs>

        {/* ── Background (cream) ──────────────────────────────── */}
        <rect width="800" height="680" fill="#fffbf7" />

        {/* ── Zone 3: Périphéries ─────────────────────────────── */}
        <circle cx="400" cy="342" r="268" fill="url(#gPeri)" stroke="#34d399" strokeWidth="2" filter="url(#fGlow)" />

        {/* ── Zone 2: Centre-ville ────────────────────────────── */}
        <circle cx="400" cy="342" r="178" fill="url(#gCentre)" stroke="#fb923c" strokeWidth="2" />

        {/* ── Zone 1: CBD ─────────────────────────────────────── */}
        <circle cx="400" cy="342" r="78" fill="url(#gCBD)" stroke="#3b82f6" strokeWidth="2.5" />

        {/* ── CBD labels ──────────────────────────────────────── */}
        <text x="400" y="325" textAnchor="middle" fontSize="22" fontWeight="800" fill="white" opacity="0.97">CBD</text>
        <text x="400" y="346" textAnchor="middle" fontSize="10.5" fontWeight="500" fill="#dbeafe" letterSpacing="0.4">Central Business District</text>
        <text x="400" y="364" textAnchor="middle" fontSize="10" fill="#bfdbfe">banques · gratte-ciels</text>

        {/* ── Centre-ville label (inside orange ring) ──────────── */}
        <text x="400" y="216" textAnchor="middle" fontSize="15" fontWeight="700" fill="#7c2d12">Centre-ville</text>
        <text x="400" y="233" textAnchor="middle" fontSize="10" fill="#9a3412">commerces · culture · services</text>

        {/* ── Périphéries label (inside green ring) ────────────── */}
        <text x="400" y="116" textAnchor="middle" fontSize="15" fontWeight="700" fill="#065f46">Périphéries</text>
        <text x="400" y="133" textAnchor="middle" fontSize="10" fill="#047857">industrie · commerce · logement</text>

        {/* ── Communication axes ──────────────────────────────── */}

        {/* Right → Route */}
        <line x1="672" y1="342" x2="734" y2="342" stroke="#94a3b8" strokeWidth="1.8" markerEnd="url(#mArr)" filter="url(#fLine)" />
        <rect x="738" y="330" width="54" height="24" rx="12" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
        <text x="765" y="346" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#475569">Route</text>

        {/* Left ← Train */}
        <line x1="128" y1="342" x2="66" y2="342" stroke="#94a3b8" strokeWidth="1.8" markerEnd="url(#mArr)" filter="url(#fLine)" />
        <rect x="8" y="330" width="54" height="24" rx="12" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
        <text x="35" y="346" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#475569">Train</text>

        {/* Top ↑ Aéroport */}
        <line x1="400" y1="74" x2="400" y2="30" stroke="#94a3b8" strokeWidth="1.8" markerEnd="url(#mArr)" filter="url(#fLine)" />
        <rect x="347" y="6" width="106" height="22" rx="11" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
        <text x="400" y="21" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#475569">Aéroport ✈</text>

        {/* Bottom ↓ Port */}
        <line x1="400" y1="610" x2="400" y2="650" stroke="#94a3b8" strokeWidth="1.8" markerEnd="url(#mArr)" filter="url(#fLine)" />
        <rect x="366" y="654" width="68" height="22" rx="11" fill="white" stroke="#cbd5e1" strokeWidth="1.5" />
        <text x="400" y="669" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#475569">⚓ Port</text>
      </svg>
    </DiagramFrame>
  );
}

// ── Frise chronologique EC Histoire 4e ───────────────────────────────────────

export function FriseHistoire4eEC() {
  const VW = 1440;
  const VH = 248;
  const X0 = 80;
  const X1 = 1390;
  const SPAN_W = X1 - X0;
  const MIN_YR = 1715;
  const SPAN_YR = 199; // 1914 - 1715
  const AX = 140; // axis y
  const BAND_TOP = 8;
  const BAND_H = 36;

  const x = (yr: number) => X0 + ((yr - MIN_YR) / SPAN_YR) * SPAN_W;

  const eras = [
    { from: 1715, to: 1789, label: "Les Lumières", fill: "#DBEAFE", stroke: "#93C5FD", tx: "#1D4ED8" },
    { from: 1789, to: 1815, label: "Révolution & Empire", fill: "#FED7AA", stroke: "#FDBA74", tx: "#9A3412" },
    { from: 1815, to: 1820, label: null, fill: "#F5F5F4", stroke: "#D6D3D1", tx: "#78716C" },
    { from: 1820, to: 1870, label: "1ʳᵉ Rév. industrielle", fill: "#EDE9FE", stroke: "#C4B5FD", tx: "#5B21B6" },
    { from: 1870, to: 1914, label: "2ᵉ Rév. industrielle", fill: "#DCFCE7", stroke: "#86EFAC", tx: "#065F46" },
  ];

  // Events above axis — label appears ABOVE tick top
  const above = [
    { yr: 1750, label: "Encyclopédie", tickH: 50, dot: "#3B82F6" },
    { yr: 1789, label: "🏰 Bastille · DDHC", tickH: 65, dot: "#F97316", bold: true },
    { yr: 1804, label: "Empire napoléonien", tickH: 40, dot: "#78716C" },
    { yr: 1815, label: "Waterloo", tickH: 26, dot: "#78716C" },
  ];

  // Events below axis — label appears BELOW tick bottom
  const below = [
    { yr: 1760, label: "Rév. Ind. Angleterre", tickH: 32, dot: "#8B5CF6" },
    { yr: 1820, label: "Rév. Ind. France", tickH: 40, dot: "#8B5CF6" },
    { yr: 1848, label: "Manifeste communiste", tickH: 50, dot: "#DC2626", bold: true },
    { yr: 1864, label: "Droit de grève", tickH: 28, dot: "#065F46" },
    { yr: 1884, label: "Syndicats légaux", tickH: 38, dot: "#065F46" },
    { yr: 1906, label: "Repos hebdo", tickH: 26, dot: "#065F46" },
  ];

  const decades = [1720, 1740, 1760, 1780, 1800, 1820, 1840, 1860, 1880, 1900];
  const eraEdges = [1715, 1789, 1815, 1870, 1914];

  return (
    <figure className="my-5 rounded-2xl border border-warm-200 bg-gradient-to-br from-white via-orange-50/30 to-cyan-50/40 p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold text-warm-800 sm:text-base">Frise chronologique — XVIIIᵉ au XIXᵉ siècle</h3>
        <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-warm-500">
          Scroll →
        </span>
      </div>
      <div className="overflow-x-auto rounded-xl bg-white/80 pb-2 pt-3 px-1">
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          width={VW}
          height={VH}
          style={{ minWidth: 900, display: "block" }}
          role="img"
          aria-label="Frise chronologique : des Lumières (1715) à la révolution industrielle (1914)"
        >
          {/* Era color bands */}
          {eras.map((era) => {
            const ex = x(era.from);
            const ew = x(era.to) - ex;
            const midX = ex + ew / 2;
            const fontSize = ew > 160 ? 12 : ew > 80 ? 10 : 0;
            return (
              <g key={era.from}>
                <rect x={ex} y={BAND_TOP} width={ew} height={BAND_H} fill={era.fill} stroke={era.stroke} strokeWidth="1.5" />
                {era.label && fontSize > 0 && (
                  <text x={midX} y={BAND_TOP + BAND_H / 2 + 4.5} textAnchor="middle" fontSize={fontSize} fontWeight="700" fill={era.tx}>
                    {era.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Vertical era dividers (full height, subtle) */}
          {[1789, 1815, 1820, 1870].map((yr) => (
            <line key={yr} x1={x(yr)} y1={BAND_TOP} x2={x(yr)} y2={VH - 10} stroke="#D6D3D1" strokeWidth="1" strokeDasharray="4 3" />
          ))}

          {/* Main axis */}
          <line x1={X0 - 4} y1={AX} x2={X1 - 8} y2={AX} stroke="#44403C" strokeWidth="3" strokeLinecap="round" />
          {/* Arrow tip */}
          <polygon points={`${X1},${AX} ${X1 - 11},${AX - 5} ${X1 - 11},${AX + 5}`} fill="#44403C" />

          {/* Decade tick marks + labels */}
          {decades.map((yr) => (
            <g key={yr}>
              <line x1={x(yr)} y1={AX - 5} x2={x(yr)} y2={AX + 5} stroke="#A8A29E" strokeWidth="1.5" />
              <text x={x(yr)} y={AX + 17} textAnchor="middle" fontSize="10" fill="#A8A29E">{yr}</text>
            </g>
          ))}

          {/* Era edge year labels (bold, on axis) */}
          {eraEdges.map((yr) => (
            <text key={yr} x={x(yr)} y={AX + 17} textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#44403C">{yr}</text>
          ))}

          {/* Events ABOVE axis */}
          {above.map((ev) => {
            const ex = x(ev.yr);
            const top = AX - ev.tickH;
            return (
              <g key={ev.yr}>
                <line x1={ex} y1={top} x2={ex} y2={AX - 5} stroke={ev.dot} strokeWidth={ev.bold ? 2.2 : 1.8} />
                <circle cx={ex} cy={AX} r={ev.bold ? 5 : 3.5} fill={ev.dot} />
                {/* White bg behind label for legibility over era bands */}
                <rect
                  x={ex - 72}
                  y={top - 17}
                  width={144}
                  height={16}
                  rx={4}
                  fill="white"
                  opacity="0.85"
                />
                <text
                  x={ex}
                  y={top - 4}
                  textAnchor="middle"
                  fontSize={ev.bold ? 12.5 : 11.5}
                  fontWeight={ev.bold ? "800" : "600"}
                  fill="#1C1917"
                >
                  {ev.label}
                </text>
              </g>
            );
          })}

          {/* Events BELOW axis */}
          {below.map((ev) => {
            const ex = x(ev.yr);
            const bottom = AX + ev.tickH;
            return (
              <g key={ev.yr}>
                <line x1={ex} y1={AX + 5} x2={ex} y2={bottom} stroke={ev.dot} strokeWidth={ev.bold ? 2.2 : 1.8} />
                <circle cx={ex} cy={AX} r={ev.bold ? 5 : 3.5} fill={ev.dot} />
                <rect
                  x={ex - 72}
                  y={bottom + 2}
                  width={144}
                  height={16}
                  rx={4}
                  fill="white"
                  opacity="0.85"
                />
                <text
                  x={ex}
                  y={bottom + 15}
                  textAnchor="middle"
                  fontSize={ev.bold ? 12.5 : 11.5}
                  fontWeight={ev.bold ? "800" : "600"}
                  fill="#1C1917"
                >
                  {ev.label}
                </text>
              </g>
            );
          })}

          {/* Year labels on the events themselves */}
          {above.map((ev) => (
            <text key={`yr-${ev.yr}`} x={x(ev.yr)} y={AX - ev.tickH - 20} textAnchor="middle" fontSize="10" fill="#78716C">{ev.yr}</text>
          ))}
          {below.map((ev) => (
            <text key={`yr-${ev.yr}`} x={x(ev.yr)} y={AX + ev.tickH + 30} textAnchor="middle" fontSize="10" fill="#78716C">{ev.yr}</text>
          ))}
        </svg>
      </div>
    </figure>
  );
}

export function CommerceTriangulaireDiagram() {
  return (
    <DiagramFrame
      title="Le commerce triangulaire — XVIIIᵉ siècle"
      caption="Trois flux commerciaux entre l'Europe, l'Afrique et les Amériques"
    >
      <svg
        viewBox="0 0 800 500"
        className="h-auto w-full"
        role="img"
        aria-label="Schéma du commerce triangulaire entre l'Europe, l'Afrique et les Amériques"
      >
        <defs>
          <radialGradient id="ct-sea" cx="45%" cy="55%" r="70%">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.65" />
          </radialGradient>
          <linearGradient id="ct-eu-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF9C3" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>
          <linearGradient id="ct-af-g" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D1FAE5" />
            <stop offset="100%" stopColor="#065F46" />
          </linearGradient>
          <linearGradient id="ct-am-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEDD5" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>
          <marker id="ct-m1" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
            <path d="M0,0 L9,3.5 L0,7 Z" fill="#92400E" />
          </marker>
          <marker id="ct-m2" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
            <path d="M0,0 L9,3.5 L0,7 Z" fill="#1E3A8A" />
          </marker>
          <marker id="ct-m3" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto">
            <path d="M0,0 L9,3.5 L0,7 Z" fill="#14532D" />
          </marker>
        </defs>

        <style>{`
          @media (prefers-reduced-motion: reduce) { .ct-boat { display: none; } }
        `}</style>

        {/* Ocean */}
        <rect width="800" height="500" fill="url(#ct-sea)" rx="8" />
        {/* Subtle wave lines */}
        <path d="M240,235 Q295,223 350,235 Q405,247 460,235 Q510,223 560,235" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
        <path d="M220,305 Q280,293 340,305 Q400,317 460,305 Q515,293 565,305" fill="none" stroke="white" strokeWidth="1" opacity="0.18" />
        <path d="M240,385 Q295,373 350,385 Q405,397 450,385" fill="none" stroke="white" strokeWidth="1" opacity="0.14" />
        <path d="M230,150 Q285,138 340,150 Q395,162 445,150" fill="none" stroke="white" strokeWidth="1" opacity="0.18" />

        {/* ── AMERICAS (simplified silhouette, Atlantic coast facing right) ── */}
        <path
          d="M 196,72 C 210,65 220,82 218,108 C 216,130 205,150 192,168
             C 180,185 165,200 155,218 C 143,235 133,252 127,268
             C 115,285 105,312 104,342 C 104,372 110,400 120,425
             C 130,445 143,460 155,460 C 168,458 182,446 186,425
             C 192,400 192,370 185,342 C 178,315 168,288 158,268
             C 148,248 140,228 138,212 C 136,198 138,182 145,168
             C 152,154 162,142 170,128 C 178,115 184,98 184,82
             C 184,72 190,67 196,72 Z"
          fill="url(#ct-am-g)" stroke="#9A3412" strokeWidth="2"
        />

        {/* ── EUROPE (Western Europe + Iberian Peninsula) ── */}
        <path
          d="M 530,75 C 565,55 620,58 648,82
             C 660,98 658,125 640,148
             C 625,165 605,175 585,178
             C 568,180 552,175 540,165
             C 525,155 512,148 505,158
             C 495,168 488,185 490,205
             C 492,220 502,228 520,225
             C 538,222 558,215 572,202
             C 582,192 584,178 578,168
             C 572,158 562,152 555,148
             C 545,145 535,138 528,128
             C 522,115 518,95 522,82
             C 524,76 527,72 530,75 Z"
          fill="url(#ct-eu-g)" stroke="#78350F" strokeWidth="2"
        />

        {/* ── AFRICA (triangular, widest at top, tip pointing south) ── */}
        <path
          d="M 490,218 C 555,202 610,202 658,228
             C 668,250 666,280 650,310
             C 638,335 622,358 608,380
             C 592,402 575,425 560,448
             C 545,460 530,462 518,455
             C 502,445 488,425 480,398
             C 472,368 472,335 476,305
             C 480,278 483,255 485,235
             C 487,225 488,220 490,218 Z"
          fill="url(#ct-af-g)" stroke="#065F46" strokeWidth="2"
        />

        {/* ── Continent labels ── */}
        <text x="153" y="184" textAnchor="middle" fontSize="12" fontWeight="800" fill="white">Amériques</text>
        <text x="590" y="112" textAnchor="middle" fontSize="12" fontWeight="800" fill="#78350F">Europe</text>
        <text x="572" y="320" textAnchor="middle" fontSize="12" fontWeight="800" fill="#052e16">Afrique</text>

        {/* ── Port city markers ── */}
        <circle cx="530" cy="142" r="4.5" fill="#DC2626" stroke="white" strokeWidth="1.5" />
        <text x="520" y="134" textAnchor="end" fontSize="8.5" fontWeight="700" fill="white">Nantes</text>
        <circle cx="480" cy="295" r="4.5" fill="#DC2626" stroke="white" strokeWidth="1.5" />
        <text x="470" y="292" textAnchor="end" fontSize="8.5" fontWeight="700" fill="white">Gorée</text>
        <circle cx="156" cy="218" r="4.5" fill="#DC2626" stroke="white" strokeWidth="1.5" />
        <text x="168" y="214" textAnchor="start" fontSize="8.5" fontWeight="700" fill="white">Antilles</text>

        {/* ── Trade routes ── */}

        {/* Route ① Europe → Africa */}
        <path id="ct-r1"
          d="M 527,165 C 462,210 442,260 477,305"
          fill="none" stroke="#92400E" strokeWidth="3" strokeDasharray="8 4"
          markerEnd="url(#ct-m1)"
        />

        {/* Route ② Africa → Americas (Middle Passage) */}
        <path id="ct-r2"
          d="M 477,330 C 388,392 270,378 177,278"
          fill="none" stroke="#1E3A8A" strokeWidth="3" strokeDasharray="8 4"
          markerEnd="url(#ct-m2)"
        />

        {/* Route ③ Americas → Europe */}
        <path id="ct-r3"
          d="M 184,160 C 268,90 408,76 523,128"
          fill="none" stroke="#14532D" strokeWidth="3" strokeDasharray="8 4"
          markerEnd="url(#ct-m3)"
        />

        {/* ── Route labels ── */}
        <rect x="382" y="218" width="155" height="34" rx="6" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.2" opacity="0.96" />
        <text x="460" y="232" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#92400E">① armes · textiles · alcool</text>
        <text x="460" y="246" textAnchor="middle" fontSize="8.5" fill="#78350F">Europe → Afrique</text>

        <rect x="268" y="388" width="172" height="34" rx="6" fill="#DBEAFE" stroke="#1E3A8A" strokeWidth="1.2" opacity="0.96" />
        <text x="354" y="402" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#1E3A8A">② esclaves (~12 millions)</text>
        <text x="354" y="416" textAnchor="middle" fontSize="8.5" fill="#1E3A8A">«Passage du milieu»</text>

        <rect x="268" y="62" width="176" height="34" rx="6" fill="#DCFCE7" stroke="#14532D" strokeWidth="1.2" opacity="0.96" />
        <text x="356" y="76" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#14532D">③ sucre · café · coton · tabac</text>
        <text x="356" y="90" textAnchor="middle" fontSize="8.5" fill="#14532D">Amériques → Europe</text>

        {/* ── Animated boats ── */}

        {/* Boat ① Europe → Africa */}
        <g className="ct-boat">
          <animateMotion dur="7s" repeatCount="indefinite" begin="0s" rotate="auto">
            <mpath href="#ct-r1" />
          </animateMotion>
          <path d="M -14,5 C -11,9 11,9 14,5 L 11,0 L -11,0 Z" fill="#92400E" />
          <line x1="0" y1="0" x2="0" y2="-14" stroke="#5D4037" strokeWidth="1.5" />
          <path d="M 1,0 L 1,-13 L 12,-5 Z" fill="#FEF9C3" stroke="#CA8A04" strokeWidth="0.6" />
          <path d="M -1,0 L -1,-13 L -10,-5 Z" fill="#FFFBEB" stroke="#CA8A04" strokeWidth="0.6" />
        </g>

        {/* Boat ② Africa → Americas (slave ship, dark hull) */}
        <g className="ct-boat">
          <animateMotion dur="11s" repeatCount="indefinite" begin="3.5s" rotate="auto">
            <mpath href="#ct-r2" />
          </animateMotion>
          <path d="M -14,5 C -11,9 11,9 14,5 L 11,0 L -11,0 Z" fill="#1E3A8A" />
          <line x1="0" y1="0" x2="0" y2="-14" stroke="#1E40AF" strokeWidth="1.5" />
          <path d="M 1,0 L 1,-13 L 12,-5 Z" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="0.6" />
          <path d="M -1,0 L -1,-13 L -10,-5 Z" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="0.6" />
        </g>

        {/* Boat ③ Americas → Europe */}
        <g className="ct-boat">
          <animateMotion dur="11s" repeatCount="indefinite" begin="7s" rotate="auto">
            <mpath href="#ct-r3" />
          </animateMotion>
          <path d="M -14,5 C -11,9 11,9 14,5 L 11,0 L -11,0 Z" fill="#14532D" />
          <line x1="0" y1="0" x2="0" y2="-14" stroke="#166534" strokeWidth="1.5" />
          <path d="M 1,0 L 1,-13 L 12,-5 Z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="0.6" />
          <path d="M -1,0 L -1,-13 L -10,-5 Z" fill="#F0FDF4" stroke="#16A34A" strokeWidth="0.6" />
        </g>
      </svg>
    </DiagramFrame>
  );
}

export function ChainesCausesHistoireEC() {
  const nodes = [
    {
      title: "Lumières (XVIIIᵉ)",
      consequence: "idées de liberté et d'égalité",
      fill: "#DBEAFE", stroke: "#93C5FD", tx: "#1E3A8A", arrow: "#3B82F6",
    },
    {
      title: "Révolution française (1789)",
      consequence: "fin de l'Ancien Régime · droits civils",
      fill: "#FED7AA", stroke: "#FB923C", tx: "#7C2D12", arrow: "#F97316",
    },
    {
      title: "Empire napoléonien (1804–1815)",
      consequence: "diffusion du Code civil en Europe",
      fill: "#FEF3C7", stroke: "#FCD34D", tx: "#78350F", arrow: "#EAB308",
    },
    {
      title: "Révolution industrielle (XIXᵉ)",
      consequence: "nouvelle misère ouvrière",
      fill: "#EDE9FE", stroke: "#C4B5FD", tx: "#4C1D95", arrow: "#8B5CF6",
    },
    {
      title: "Luttes sociales (1864–1906)",
      consequence: "premières lois sociales ✓",
      fill: "#DCFCE7", stroke: "#6EE7B7", tx: "#064E3B", arrow: null,
    },
  ];

  const NODE_H = 44;
  const GAP = 20;
  const STEP = NODE_H + GAP;
  const VW = 360;
  const NODE_X = 10;
  const NODE_W = 340;
  const VH = nodes.length * NODE_H + (nodes.length - 1) * GAP + 16;

  return (
    <figure className="my-5 rounded-2xl border border-warm-200 bg-gradient-to-br from-white via-orange-50/30 to-cyan-50/40 p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-sm font-bold text-warm-800 sm:text-base">Chaîne de causalités — XVIIIᵉ au XIXᵉ siècle</h3>
        <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-warm-500">
          Schéma
        </span>
      </div>
      <div className="overflow-hidden rounded-xl bg-white/75 p-2 sm:p-3">
        <svg
          viewBox={`0 0 ${VW} ${VH}`}
          className="h-auto w-full"
          role="img"
          aria-label="Chaîne de causalités : des Lumières aux luttes sociales"
        >
          <style>{`
            @media (prefers-reduced-motion: reduce) { .caus-arr { animation: none !important; } }
            .caus-arr { animation: caus-fade 2.4s ease-in-out infinite; }
            @keyframes caus-fade { 0%,100%{opacity:.45} 50%{opacity:1} }
          `}</style>

          {nodes.map((n, i) => {
            const ny = 10 + i * STEP;
            const cx = VW / 2;
            const nextTop = ny + STEP;

            return (
              <g key={i}>
                <rect x={NODE_X} y={ny} width={NODE_W} height={NODE_H} rx={10}
                  fill={n.fill} stroke={n.stroke} strokeWidth="1.8" />
                <text x={cx} y={ny + 16} textAnchor="middle" fontSize="12.5" fontWeight="800" fill={n.tx}>
                  {n.title}
                </text>
                <text x={cx} y={ny + 33} textAnchor="middle" fontSize="10" fill={n.tx} opacity="0.75" fontStyle="italic">
                  ↳ {n.consequence}
                </text>

                {n.arrow && (
                  <g className="caus-arr">
                    <line x1={cx} y1={ny + NODE_H + 3} x2={cx} y2={nextTop - 9}
                      stroke={n.arrow} strokeWidth="2" strokeLinecap="round" />
                    <polygon
                      points={`${cx},${nextTop - 2} ${cx - 6},${nextTop - 11} ${cx + 6},${nextTop - 11}`}
                      fill={n.arrow}
                    />
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </figure>
  );
}

// ──────────────────────────────────────────────
// MATHÉMATIQUES — Géométrie
// ──────────────────────────────────────────────

export function PythagoreDiagram() {
  return (
    <DiagramFrame title="Triangle rectangle ABC (angle droit en A)">
      <svg viewBox="0 0 280 230" width="280" height="230">
        <polygon points="40,185 225,185 40,40" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2.5" />
        <polyline points="40,163 62,163 62,185" fill="none" stroke="#3B82F6" strokeWidth="2" />
        <text x="22" y="200" fontSize="15" fontWeight="bold" fill="#1D4ED8">A</text>
        <text x="232" y="193" fontSize="15" fontWeight="bold" fill="#1D4ED8">B</text>
        <text x="22" y="36" fontSize="15" fontWeight="bold" fill="#1D4ED8">C</text>
        <text x="132" y="202" textAnchor="middle" fontSize="13" fill="#374151">AB</text>
        <text x="20" y="116" textAnchor="middle" fontSize="13" fill="#374151">AC</text>
        <text x="152" y="108" fontSize="13" fill="#DC2626" fontWeight="bold">BC</text>
        <text x="132" y="124" fontSize="11" fill="#DC2626" textAnchor="middle">(hypoténuse)</text>
        <rect x="30" y="208" width="220" height="20" fill="#DBEAFE" rx="4" />
        <text x="140" y="223" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">
          BC² = AB² + AC²
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function ThalesDiagram() {
  return (
    <DiagramFrame title="Théorème de Thalès — AB // MN">
      <svg viewBox="0 0 350 255" width="350" height="255">
        <line x1="175" y1="20" x2="45" y2="220" stroke="#9CA3AF" strokeWidth="1.5" />
        <line x1="175" y1="20" x2="305" y2="220" stroke="#9CA3AF" strokeWidth="1.5" />
        <line x1="108" y1="110" x2="242" y2="110" stroke="#3B82F6" strokeWidth="2.5" />
        <line x1="45" y1="220" x2="305" y2="220" stroke="#3B82F6" strokeWidth="2.5" />
        <line x1="172" y1="103" x2="178" y2="117" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="169" y1="213" x2="175" y2="227" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="175" cy="20" r="4" fill="#1D4ED8" />
        <circle cx="108" cy="110" r="4" fill="#1D4ED8" />
        <circle cx="242" cy="110" r="4" fill="#1D4ED8" />
        <circle cx="45" cy="220" r="4" fill="#1D4ED8" />
        <circle cx="305" cy="220" r="4" fill="#1D4ED8" />
        <text x="182" y="22" fontSize="14" fontWeight="bold" fill="#1D4ED8">O</text>
        <text x="90" y="107" fontSize="14" fontWeight="bold" fill="#1D4ED8">A</text>
        <text x="248" y="107" fontSize="14" fontWeight="bold" fill="#1D4ED8">B</text>
        <text x="28" y="224" fontSize="14" fontWeight="bold" fill="#1D4ED8">M</text>
        <text x="310" y="224" fontSize="14" fontWeight="bold" fill="#1D4ED8">N</text>
        <rect x="60" y="236" width="230" height="16" fill="#DBEAFE" rx="3" />
        <text x="175" y="249" textAnchor="middle" fontSize="12" fill="#1D4ED8" fontWeight="bold">
          OA/OM = OB/ON = AB/MN
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function CubeDiagram() {
  return (
    <DiagramFrame title="Cube de côté a">
      <svg viewBox="0 0 220 210" width="220" height="195">
        <rect x="40" y="80" width="100" height="100" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
        <polygon points="40,80 80,45 180,45 140,80" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="2" />
        <polygon points="140,80 180,45 180,145 140,180" fill="#93C5FD" stroke="#3B82F6" strokeWidth="2" />
        <line x1="40" y1="180" x2="80" y2="145" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,3" />
        <line x1="80" y1="45" x2="80" y2="145" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,3" />
        <line x1="80" y1="145" x2="180" y2="145" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x="85" y="170" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1D4ED8">a</text>
        <text x="185" y="120" fontSize="14" fontWeight="bold" fill="#1D4ED8">a</text>
        <text x="105" y="40" fontSize="14" fontWeight="bold" fill="#1D4ED8">a</text>
        <text x="110" y="200" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#374151">V = a³</text>
      </svg>
    </DiagramFrame>
  );
}

export function PaveDroitDiagram() {
  return (
    <DiagramFrame title="Pavé droit (L × l × h)">
      <svg viewBox="0 0 240 205" width="240" height="205">
        <rect x="30" y="80" width="130" height="100" fill="#F0FDF4" stroke="#22C55E" strokeWidth="2" />
        <polygon points="30,80 70,45 200,45 160,80" fill="#BBF7D0" stroke="#22C55E" strokeWidth="2" />
        <polygon points="160,80 200,45 200,145 160,180" fill="#86EFAC" stroke="#22C55E" strokeWidth="2" />
        <line x1="30" y1="180" x2="70" y2="145" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,3" />
        <line x1="70" y1="45" x2="70" y2="145" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,3" />
        <line x1="70" y1="145" x2="200" y2="145" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x="88" y="173" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#15803D">L</text>
        <text x="205" y="118" fontSize="14" fontWeight="bold" fill="#15803D">h</text>
        <text x="195" y="165" fontSize="14" fontWeight="bold" fill="#15803D">l</text>
        <text x="120" y="197" textAnchor="middle" fontSize="12" fill="#374151">V = L × l × h</text>
      </svg>
    </DiagramFrame>
  );
}

export function PyramideDiagram() {
  // 3D perspective: E=apex, A=hidden back-right, B=front-left, C=front-right, D=back-right visible
  // Approximate coords matching a standard 3D pyramide illustration
  // E(140,18) apex, B(42,148) left, C(118,192) front, D(248,160) right, A(170,108) hidden
  const E = "140,18";
  const B = "42,148";
  const C = "118,192";
  const D = "248,160";
  const A = "170,108"; // hidden vertex

  // Foot of height on base (centroid approx)
  const footX = 145;
  const footY = 155;

  return (
    <DiagramFrame title="Pyramide à base carrée">
      <svg viewBox="0 0 300 250" width="300" height="250">
        {/* Base square ABCD — visible edges B-C, C-D, B-D visible; A-B, A-D dashed */}
        <polygon points={`${B} ${C} ${D} ${A}`} fill="#FEF3C7" stroke="#7C2D12" strokeWidth="2" />
        {/* Hidden edges from A */}
        <line x1="170" y1="108" x2="42" y2="148" stroke="#7C2D12" strokeWidth="1.5" strokeDasharray="5,3" />
        <line x1="170" y1="108" x2="248" y2="160" stroke="#7C2D12" strokeWidth="1.5" strokeDasharray="5,3" />
        {/* Lateral faces — colored */}
        {/* E-B face (left, orange) */}
        <polygon points={`${E} ${B} ${C}`} fill="#FED7AA" stroke="#F97316" strokeWidth="0" opacity="0.55" />
        {/* E-C face (front, teal) */}
        <polygon points={`${E} ${C} ${D}`} fill="#99F6E4" stroke="#14B8A6" strokeWidth="0" opacity="0.55" />
        {/* E-D face (right, red) — slightly less visible */}
        <polygon points={`${E} ${D} ${A}`} fill="#FECACA" stroke="#EF4444" strokeWidth="0" opacity="0.45" />
        {/* E-A face (back, hidden) */}
        <polygon points={`${E} ${A} ${B}`} fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0" opacity="0.3" />
        {/* Colored lateral edges */}
        <line x1="140" y1="18" x2="42" y2="148" stroke="#F97316" strokeWidth="2.5" />
        <line x1="140" y1="18" x2="118" y2="192" stroke="#14B8A6" strokeWidth="2.5" />
        <line x1="140" y1="18" x2="248" y2="160" stroke="#EF4444" strokeWidth="2.5" />
        {/* Hidden edge E-A dashed */}
        <line x1="140" y1="18" x2="170" y2="108" stroke="#9CA3AF" strokeWidth="1.5" strokeDasharray="5,3" />
        {/* Visible base edges */}
        <line x1="42" y1="148" x2="118" y2="192" stroke="#7C2D12" strokeWidth="2" />
        <line x1="118" y1="192" x2="248" y2="160" stroke="#7C2D12" strokeWidth="2" />
        <line x1="42" y1="148" x2="170" y2="108" stroke="#7C2D12" strokeWidth="2" />
        <line x1="248" y1="160" x2="170" y2="108" stroke="#7C2D12" strokeWidth="2" />
        {/* Height h — dashed blue from apex to foot */}
        <line x1="140" y1="18" x2={footX} y2={footY} stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6,3" />
        <circle cx={footX} cy={footY} r="3" fill="#3B82F6" />
        {/* Right angle marker at foot */}
        <polyline points={`${footX},${footY - 10} ${footX + 10},${footY - 10} ${footX + 10},${footY}`} fill="none" stroke="#3B82F6" strokeWidth="1.5" />
        {/* Vertex labels */}
        <circle cx="140" cy="18" r="4" fill="#1E3A8A" />
        <text x="147" y="14" fontSize="14" fontWeight="bold" fill="#1E3A8A">E</text>
        <text x="22" y="152" fontSize="13" fontWeight="bold" fill="#7C2D12">B</text>
        <text x="110" y="208" fontSize="13" fontWeight="bold" fill="#7C2D12">C</text>
        <text x="252" y="164" fontSize="13" fontWeight="bold" fill="#7C2D12">D</text>
        <text x="173" y="106" fontSize="13" fontWeight="bold" fill="#9CA3AF">A</text>
        {/* h label */}
        <text x="153" y="95" fontSize="13" fontWeight="bold" fill="#3B82F6">h</text>
        {/* Formula */}
        <rect x="40" y="215" width="220" height="30" fill="#FEF3C7" rx="4" />
        <text x="150" y="228" textAnchor="middle" fontSize="11" fill="#92400E">Abase = côté²</text>
        <text x="150" y="242" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400E">V = (Abase × h) / 3</text>
      </svg>
    </DiagramFrame>
  );
}

export function ConeDiagram() {
  return (
    <DiagramFrame title="Cône de révolution">
      <svg viewBox="0 0 240 310" width="240" height="310">
        <ellipse cx="120" cy="175" rx="80" ry="25" fill="#FDF4FF" stroke="#A855F7" strokeWidth="2" />
        <line x1="120" y1="30" x2="40" y2="175" stroke="#A855F7" strokeWidth="2" />
        <line x1="120" y1="30" x2="200" y2="175" stroke="#A855F7" strokeWidth="2" />
        <line x1="120" y1="30" x2="120" y2="175" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="6,3" />
        <line x1="120" y1="175" x2="200" y2="175" stroke="#7E22CE" strokeWidth="1.5" strokeDasharray="4,3" />
        <polyline points="120,155 132,155 132,175" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <circle cx="120" cy="30" r="4" fill="#7E22CE" />
        <text x="128" y="26" fontSize="14" fontWeight="bold" fill="#7E22CE">S</text>
        <text x="126" y="110" fontSize="14" fontWeight="bold" fill="#7E22CE">h</text>
        <text x="155" y="167" fontSize="14" fontWeight="bold" fill="#7E22CE">r</text>
        <text x="45" y="92" fontSize="13" fill="#7E22CE" fontStyle="italic">g</text>
        <text x="28" y="108" fontSize="11" fill="#7E22CE">(génératrice)</text>
        {/* Formula box */}
        <rect x="10" y="208" width="220" height="94" fill="#FAE8FF" rx="4" />
        <text x="120" y="223" textAnchor="middle" fontSize="11" fill="#7E22CE">Abase = π × r²</text>
        <line x1="20" y1="229" x2="220" y2="229" stroke="#D8B4FE" strokeWidth="0.8" />
        <text x="120" y="243" textAnchor="middle" fontSize="11" fill="#7E22CE">Alat = π × r × g</text>
        <line x1="20" y1="249" x2="220" y2="249" stroke="#D8B4FE" strokeWidth="0.8" />
        <text x="120" y="263" textAnchor="middle" fontSize="11" fill="#7E22CE">V = (Abase × h) / 3</text>
        <line x1="20" y1="269" x2="220" y2="269" stroke="#D8B4FE" strokeWidth="0.8" />
        <text x="120" y="284" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7E22CE">V = (π × r² × h) / 3</text>
        <text x="120" y="298" textAnchor="middle" fontSize="10" fill="#9333EA">g = √(r² + h²)  (Pythagore)</text>
      </svg>
    </DiagramFrame>
  );
}

export function PatronPyramideDiagram() {
  // Cross layout: center square ABCD, 4 colored triangles unfolded around it
  // Square: B(92,92) top-left, A(208,92) top-right, D(208,208) bottom-right, C(92,208) bottom-left
  // Labels match 3D diagram: A=back-right, B=front-left, C=front-right, D=back-left (visual coherence)
  return (
    <DiagramFrame title="Patron d'une pyramide à base carrée">
      <svg viewBox="0 0 310 310" width="310" height="310">
        {/* Center base square ABCD */}
        <rect x="92" y="92" width="116" height="116" fill="#FEF3C7" stroke="#7C2D12" strokeWidth="2.5" />
        {/* Right-angle markers at 4 corners of base */}
        <polyline points="92,108 108,108 108,92" fill="none" stroke="#7C2D12" strokeWidth="1.5" />
        <polyline points="192,92 192,108 208,108" fill="none" stroke="#7C2D12" strokeWidth="1.5" />
        <polyline points="208,192 192,192 192,208" fill="none" stroke="#7C2D12" strokeWidth="1.5" />
        <polyline points="108,208 108,192 92,192" fill="none" stroke="#7C2D12" strokeWidth="1.5" />
        {/* Top triangle (B-A edge) — orange */}
        <polygon points="92,92 208,92 150,25" fill="#FED7AA" stroke="#F97316" strokeWidth="2" />
        {/* Left triangle (B-C edge) — teal */}
        <polygon points="92,92 92,208 25,150" fill="#99F6E4" stroke="#14B8A6" strokeWidth="2" />
        {/* Bottom triangle (C-D edge) — blue */}
        <polygon points="92,208 208,208 150,275" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="2" />
        {/* Right triangle (A-D edge) — red */}
        <polygon points="208,92 208,208 275,150" fill="#FECACA" stroke="#EF4444" strokeWidth="2" />
        {/* Base label */}
        <text x="150" y="153" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#7C2D12">Base</text>
        {/* Face labels */}
        <text x="150" y="52" textAnchor="middle" fontSize="11" fill="#F97316" fontWeight="bold">face</text>
        <text x="150" y="262" textAnchor="middle" fontSize="11" fill="#3B82F6" fontWeight="bold">face</text>
        <text x="43" y="153" textAnchor="middle" fontSize="11" fill="#14B8A6" fontWeight="bold">face</text>
        <text x="257" y="153" textAnchor="middle" fontSize="11" fill="#EF4444" fontWeight="bold">face</text>
        {/* Vertex labels */}
        <text x="76" y="89" fontSize="12" fontWeight="bold" fill="#7C2D12">B</text>
        <text x="210" y="89" fontSize="12" fontWeight="bold" fill="#7C2D12">A</text>
        <text x="210" y="218" fontSize="12" fontWeight="bold" fill="#7C2D12">D</text>
        <text x="76" y="218" fontSize="12" fontWeight="bold" fill="#7C2D12">C</text>
      </svg>
    </DiagramFrame>
  );
}

export function PatronConeDiagram() {
  // Left: full dashed circle (radius g) with sector highlighted and θ angle
  // Right: base disk (radius r), separate, clearly colored
  return (
    <DiagramFrame title="Patron d'un cône">
      <svg viewBox="0 0 345 215" width="345" height="215">
        {/* ── FULL CIRCLE (radius g) — dashed ── */}
        <circle cx="100" cy="108" r="80" fill="none" stroke="#C084FC" strokeWidth="1.5" strokeDasharray="5,3" />

        {/* ── SECTOR (face latérale, 120°, opens right) ── */}
        {/* P1 = (140, 39), P2 = (140, 177), arc through (180, 108) */}
        <path d="M 100,108 L 140,39 A 80,80 0 0,1 140,177 Z" fill="#FAE8FF" stroke="#A855F7" strokeWidth="2" />

        {/* ── g radii (dashed) ── */}
        <line x1="100" y1="108" x2="140" y2="39" stroke="#7E22CE" strokeWidth="1.5" strokeDasharray="5,3" />
        <line x1="100" y1="108" x2="140" y2="177" stroke="#7E22CE" strokeWidth="1.5" strokeDasharray="5,3" />

        {/* ── g labels ── */}
        <text x="105" y="68" fontSize="12" fill="#7E22CE" fontWeight="bold" fontStyle="italic">g</text>
        <text x="105" y="155" fontSize="12" fill="#7E22CE" fontWeight="bold" fontStyle="italic">g</text>

        {/* ── Angle θ arc at center S, radius 22 ── */}
        {/* arc from (-60°) to (+60°): P1_small=(111,89), P2_small=(111,127) */}
        <path d="M 111,89 A 22,22 0 0,1 111,127" fill="none" stroke="#9333EA" strokeWidth="1.5" />
        <text x="128" y="112" fontSize="12" fill="#9333EA" fontWeight="bold">θ</text>

        {/* ── S dot and label ── */}
        <circle cx="100" cy="108" r="3" fill="#7E22CE" />
        <text x="84" y="105" fontSize="12" fontWeight="bold" fill="#7E22CE">S</text>

        {/* ── "Face latérale" inside sector ── */}
        <text x="152" y="120" textAnchor="middle" fontSize="10" fill="#7E22CE">Face</text>
        <text x="152" y="132" textAnchor="middle" fontSize="10" fill="#7E22CE">latérale</text>

        {/* ── "arc = 2πr" below the arc ── */}
        <text x="100" y="200" textAnchor="middle" fontSize="10" fill="#A855F7" fontWeight="bold">arc = 2πr</text>

        {/* ── BASE DISK (radius r) ── */}
        <circle cx="220" cy="108" r="40" fill="#CCFBF1" stroke="#0D9488" strokeWidth="2" />
        {/* r line (dashed) */}
        <line x1="223" y1="108" x2="263" y2="108" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="4,2" />
        <text x="237" y="103" fontSize="12" fill="#0D9488" fontWeight="bold">r</text>
        {/* Labels */}
        <text x="223" y="127" textAnchor="middle" fontSize="11" fill="#0D9488">Base</text>
        <text x="223" y="140" textAnchor="middle" fontSize="10" fill="#0D9488">(disque)</text>
      </svg>
    </DiagramFrame>
  );
}

// ──────────────────────────────────────────────
// MATHÉMATIQUES — Algèbre (Proportionnalité)
// ──────────────────────────────────────────────

export function ProportionnaliteGraphiquesDiagram() {
  // Three small side-by-side graphs:
  // 1. Green: proportional (straight line through origin)
  // 2. Orange: not proportional (line NOT through origin, affine)
  // 3. Red: not proportional (not a straight line, curve)
  // Each graph has axes, label, and a colored tick or cross

  const W = 96; // width of each graph box
  const H = 90; // height of each graph box
  const gap = 14; // gap between graphs
  const ox = 12; // origin x inside each box
  const oy = H - 12; // origin y inside each box (bottom-left)

  // Helper: translate to absolute coords for graph i (0,1,2)
  const gx = (i: number, x: number) => i * (W + gap) + x;

  return (
    <DiagramFrame title="Situations proportionnelles">
      <svg viewBox="0 0 340 140" width="340" height="140">
        {/* ── Graph 1: Proportional ── */}
        {/* Background */}
        <rect x={gx(0,0)} y="0" width={W} height={H} fill="#F0FDF4" rx="4" stroke="#86EFAC" strokeWidth="1" />
        {/* Axes */}
        <line x1={gx(0,ox)} y1="4" x2={gx(0,ox)} y2={oy} stroke="#374151" strokeWidth="1.5" />
        <line x1={gx(0,ox)} y1={oy} x2={gx(0,W-4)} y2={oy} stroke="#374151" strokeWidth="1.5" />
        {/* Arrow tips */}
        <polygon points={`${gx(0,ox)},4 ${gx(0,ox-3)},10 ${gx(0,ox+3)},10`} fill="#374151" />
        <polygon points={`${gx(0,W-4)},${oy} ${gx(0,W-10)},${oy-3} ${gx(0,W-10)},${oy+3}`} fill="#374151" />
        {/* Line through origin — proportional */}
        <line x1={gx(0,ox)} y1={oy} x2={gx(0,W-8)} y2="12" stroke="#16A34A" strokeWidth="2.5" />
        {/* Origin dot */}
        <circle cx={gx(0,ox)} cy={oy} r="3" fill="#16A34A" />
        {/* ✓ badge */}
        <circle cx={gx(0,W-12)} cy="12" r="9" fill="#16A34A" />
        <text x={gx(0,W-12)} y="16" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">✓</text>
        {/* Label */}
        <text x={gx(0,W/2)} y={H+14} textAnchor="middle" fontSize="10" fill="#15803D" fontWeight="bold">Proportionnel</text>
        <text x={gx(0,W/2)} y={H+25} textAnchor="middle" fontSize="9" fill="#15803D">passe par (0;0)</text>

        {/* ── Graph 2: Affine (not through origin) ── */}
        <rect x={gx(1,0)} y="0" width={W} height={H} fill="#FFF7ED" rx="4" stroke="#FDBA74" strokeWidth="1" />
        <line x1={gx(1,ox)} y1="4" x2={gx(1,ox)} y2={oy} stroke="#374151" strokeWidth="1.5" />
        <line x1={gx(1,ox)} y1={oy} x2={gx(1,W-4)} y2={oy} stroke="#374151" strokeWidth="1.5" />
        <polygon points={`${gx(1,ox)},4 ${gx(1,ox-3)},10 ${gx(1,ox+3)},10`} fill="#374151" />
        <polygon points={`${gx(1,W-4)},${oy} ${gx(1,W-10)},${oy-3} ${gx(1,W-10)},${oy+3}`} fill="#374151" />
        {/* Line NOT through origin (starts at y-intercept above origin) */}
        <line x1={gx(1,ox)} y1={oy-22} x2={gx(1,W-8)} y2="14" stroke="#EA580C" strokeWidth="2.5" />
        {/* Highlight: the line does NOT pass through origin */}
        <circle cx={gx(1,ox)} cy={oy} r="4" fill="white" stroke="#EA580C" strokeWidth="2" />
        {/* ✗ badge */}
        <circle cx={gx(1,W-12)} cy="12" r="9" fill="#EA580C" />
        <text x={gx(1,W-12)} y="16" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">✗</text>
        <text x={gx(1,W/2)} y={H+14} textAnchor="middle" fontSize="10" fill="#C2410C" fontWeight="bold">Non proportionnel</text>
        <text x={gx(1,W/2)} y={H+25} textAnchor="middle" fontSize="9" fill="#C2410C">ne passe pas par (0;0)</text>

        {/* ── Graph 3: Curve (not a straight line) ── */}
        <rect x={gx(2,0)} y="0" width={W} height={H} fill="#FFF1F2" rx="4" stroke="#FCA5A5" strokeWidth="1" />
        <line x1={gx(2,ox)} y1="4" x2={gx(2,ox)} y2={oy} stroke="#374151" strokeWidth="1.5" />
        <line x1={gx(2,ox)} y1={oy} x2={gx(2,W-4)} y2={oy} stroke="#374151" strokeWidth="1.5" />
        <polygon points={`${gx(2,ox)},4 ${gx(2,ox-3)},10 ${gx(2,ox+3)},10`} fill="#374151" />
        <polygon points={`${gx(2,W-4)},${oy} ${gx(2,W-10)},${oy-3} ${gx(2,W-10)},${oy+3}`} fill="#374151" />
        {/* Curved line (quadratic — not straight) */}
        <path
          d={`M ${gx(2,ox)},${oy} Q ${gx(2,ox+20)},${oy-15} ${gx(2,ox+40)},${oy-45} T ${gx(2,W-8)},10`}
          fill="none"
          stroke="#DC2626"
          strokeWidth="2.5"
        />
        {/* ✗ badge */}
        <circle cx={gx(2,W-12)} cy="12" r="9" fill="#DC2626" />
        <text x={gx(2,W-12)} y="16" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">✗</text>
        <text x={gx(2,W/2)} y={H+14} textAnchor="middle" fontSize="10" fill="#B91C1C" fontWeight="bold">Non proportionnel</text>
        <text x={gx(2,W/2)} y={H+25} textAnchor="middle" fontSize="9" fill="#B91C1C">pas une droite</text>
      </svg>
    </DiagramFrame>
  );
}

// ── Français 3e — Cri de liberté, résister à l'oppression ───────────────────

const CRI_LIBERTE_STEPS = [
  { n: 1, emoji: "⛓️", work: "Hugo", genre: "roman", answer: "Montrer la souffrance de l'homme privé de liberté", card: "border-purple-300 bg-purple-50", text: "text-purple-800" },
  { n: 2, emoji: "🎭", work: "Antigone", genre: "théâtre", answer: "Dire non au pouvoir", card: "border-rose-300 bg-rose-50", text: "text-rose-800" },
  { n: 3, emoji: "✒️", work: "Minerai noir", genre: "poème", answer: "Dénoncer et appeler à la révolte", card: "border-amber-300 bg-amber-50", text: "text-amber-800" },
  { n: 4, emoji: "📷", work: "Serra Pelada", genre: "photo", answer: "Faire voir l'exploitation", card: "border-cyan-300 bg-cyan-50", text: "text-cyan-800" },
];

/** Chapter thread: the problématique and how each séance answers it. `current` highlights séances. */
export function CriLiberteChapitreDiagram({ current = [] }: { current?: number[] }) {
  return (
    <DiagramFrame
      title="Le fil du chapitre"
      caption="Chaque séance apporte une réponse différente à la même question."
    >
      <div className="mb-3 rounded-xl bg-warm-800 p-3 text-center text-sm font-bold text-white">
        Comment les écrivains expriment-ils la réflexion et le désir de liberté face à l&apos;oppression ?
      </div>
      <div className="grid grid-cols-2 gap-2">
        {CRI_LIBERTE_STEPS.map((s) => {
          const active = current.includes(s.n);
          return (
            <div
              key={s.n}
              className={`rounded-xl border-2 p-2 ${s.card} ${current.length > 0 && !active ? "opacity-50" : ""} ${active ? "ring-2 ring-offset-1 ring-warm-500" : ""}`}
            >
              <div className={`text-xs font-bold uppercase ${s.text}`}>
                Séance {s.n} · {s.genre}
              </div>
              <div className="font-extrabold text-warm-800">
                {s.emoji} {s.work}
              </div>
              <div className="text-sm text-warm-700">{s.answer}</div>
            </div>
          );
        })}
      </div>
    </DiagramFrame>
  );
}

export function ImplacableDecompositionDiagram() {
  const parts = [
    { piece: "im", role: "préfixe", sens: "« ne pas »", color: "border-rose-400 bg-rose-50 text-rose-800" },
    { piece: "plac", role: "radical", sens: "latin placare : apaiser", color: "border-blue-400 bg-blue-50 text-blue-800" },
    { piece: "able", role: "suffixe", sens: "« qu'on peut »", color: "border-emerald-400 bg-emerald-50 text-emerald-800" },
  ];
  return (
    <DiagramFrame title="Décomposer « implacable »" caption="Chaque morceau du mot apporte un bout du sens.">
      <div className="grid grid-cols-3 gap-2">
        {parts.map((p) => (
          <div key={p.piece} className={`rounded-xl border-2 p-2 text-center ${p.color}`}>
            <div className="text-2xl font-extrabold">{p.piece}</div>
            <div className="text-xs font-bold uppercase">{p.role}</div>
            <div className="mt-1 text-sm text-warm-800">{p.sens}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-full border-2 border-orange-300 bg-orange-50 px-3 py-2 text-center font-bold text-orange-800">
        implacable = qu&apos;on ne peut pas apaiser
      </div>
    </DiagramFrame>
  );
}

export function DoubleCaptiviteDiagram() {
  return (
    <DiagramFrame
      title="La double prison du condamné"
      caption="« Mon corps est aux fers dans un cachot, mon esprit est en prison dans une idée. »"
    >
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border-2 border-stone-300 bg-stone-50 p-3 text-center">
          <div className="text-3xl">🔒</div>
          <div className="font-extrabold text-warm-800">Le corps</div>
          <div className="text-sm text-warm-700">« aux fers dans un cachot »</div>
        </div>
        <div className="rounded-xl border-2 border-purple-300 bg-purple-50 p-3 text-center">
          <div className="text-3xl">🧠</div>
          <div className="font-extrabold text-purple-800">L&apos;esprit</div>
          <div className="text-sm text-warm-700">« en prison dans une idée »</div>
        </div>
      </div>
      <div className="mt-2 rounded-xl border-2 border-rose-300 bg-rose-50 p-2 text-center text-sm font-bold text-rose-800">
        = une captivité mentale : il ne peut plus penser qu&apos;à sa mort
      </div>
    </DiagramFrame>
  );
}

export function AntigoneCreonDiagram() {
  return (
    <DiagramFrame title="Antigone contre Créon" caption="Chacun défend ses valeurs : elles sont argumentées et légitimes.">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border-2 border-rose-300 bg-rose-50 p-3">
          <div className="font-extrabold text-rose-800">👧 Antigone</div>
          <ul className="mt-1 list-disc pl-4 text-sm text-warm-800">
            <li>défend l&apos;intérêt <strong>familial</strong></li>
            <li>refuse le <strong>compromis</strong></li>
            <li>reste <strong>calme</strong></li>
          </ul>
        </div>
        <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-3">
          <div className="font-extrabold text-blue-800">👑 Créon</div>
          <ul className="mt-1 list-disc pl-4 text-sm text-warm-800">
            <li>défend la <strong>responsabilité du royaume</strong></li>
            <li>veut maintenir l&apos;<strong>ordre</strong></li>
            <li>devient <strong>violent</strong></li>
          </ul>
        </div>
      </div>
      <div className="mt-2 rounded-xl border-2 border-amber-300 bg-amber-50 p-2 text-center text-sm text-amber-900">
        Point commun : <strong>têtus</strong>, ils ne veulent pas s&apos;écouter.
      </div>
    </DiagramFrame>
  );
}

const MINERAI_NOIR_ROWS = [
  { image: "« corps noir », « chair noire », « minerai noir »", sens: "le peuple africain traité comme une matière qu'on exploite" },
  { image: "« peuple dévalisé », « peuple défriché »", sens: "un peuple volé, dominé et exploité" },
  { image: "« le vacarme des pioches »", sens: "un grand nombre d'esclaves qui travaillent" },
];

export function MineraiNoirMetaphoreDiagram() {
  return (
    <DiagramFrame title="Ce que disent les images du poème" caption="Le peuple noir est présenté comme une mine qu'on exploite.">
      <div className="space-y-2">
        {MINERAI_NOIR_ROWS.map((row) => (
          <div key={row.image} className="rounded-xl border-2 border-amber-300 bg-amber-50 p-2">
            <div className="font-bold text-warm-800">⛏️ {row.image}</div>
            <div className="text-sm text-warm-700">➜ {row.sens}</div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

const ANTIGONE_FRISE = [
  { emoji: "📢", title: "Prologue", text: "On apprend qu'Antigone va mourir." },
  { emoji: "🌅", title: "La Nourrice", text: "Antigone rentre à l'aube, en cachette." },
  { emoji: "💛", title: "Ismène", text: "Elle a peur et refuse d'aider." },
  { emoji: "💙", title: "Hémon", text: "Antigone lui fait ses adieux." },
  { emoji: "💂", title: "Le Garde", text: "Le corps de Polynice a été recouvert." },
  { emoji: "🎭", title: "Le Chœur", text: "La tragédie est lancée." },
  { emoji: "⛓️", title: "L'arrestation", text: "Antigone est prise près du corps." },
  { emoji: "⚔️", title: "Antigone / Créon", text: "Elle refuse tout compromis. Il la condamne.", inClass: true },
  { emoji: "🙏", title: "Hémon et Créon", text: "Hémon supplie son père, en vain." },
  { emoji: "📨", title: "Le Messager", text: "Antigone, Hémon et Eurydice sont morts." },
  { emoji: "🃏", title: "La fin", text: "Créon reste seul. « Et voilà. »" },
];

export function AntigoneFriseDiagram() {
  return (
    <DiagramFrame title="La pièce en 11 étapes" caption="⭐ = la scène étudiée en classe.">
      <ol className="relative ml-3 border-l-4 border-rose-200">
        {ANTIGONE_FRISE.map((step, i) => (
          <li key={step.title} className="mb-2 ml-5 last:mb-0">
            <span
              className={`absolute -left-[14px] flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${
                step.inClass ? "bg-amber-500" : "bg-rose-400"
              }`}
            >
              {i + 1}
            </span>
            <div className={`rounded-lg border-2 px-2 py-1 ${step.inClass ? "border-amber-400 bg-amber-50" : "border-rose-100 bg-white"}`}>
              <span className="font-bold text-warm-800">
                {step.emoji} {step.title} {step.inClass && "⭐"}
              </span>
              <span className="text-sm text-warm-700"> — {step.text}</span>
            </div>
          </li>
        ))}
      </ol>
    </DiagramFrame>
  );
}

const CLASSES_VARIABLES = [
  { emoji: "🏷️", name: "Nom", ex: "maison, Paris" },
  { emoji: "👉", name: "Déterminant", ex: "le, ces, mon" },
  { emoji: "🔁", name: "Pronom", ex: "il, qui, le mien" },
  { emoji: "🎨", name: "Adjectif qualificatif", ex: "bleu, joli" },
  { emoji: "⚡", name: "Verbe", ex: "être, partir" },
];

const CLASSES_INVARIABLES = [
  { emoji: "🎚️", name: "Adverbe", ex: "lentement, très" },
  { emoji: "🔗", name: "Préposition", ex: "à, de, pour, sans" },
  { emoji: "🧷", name: "Conjonction", ex: "mais, quand, si" },
  { emoji: "😮", name: "Interjection", ex: "Oh ! Hélas !" },
  { emoji: "💥", name: "Onomatopée", ex: "Boum ! Plouf !" },
];

export function ClassesGrammaticalesDiagram() {
  const column = (
    title: string,
    subtitle: string,
    items: typeof CLASSES_VARIABLES,
    tone: "rose" | "blue"
  ) => (
    <div
      className={`rounded-xl border-2 p-2 ${
        tone === "rose" ? "border-rose-300 bg-rose-50" : "border-blue-300 bg-blue-50"
      }`}
    >
      <div className={`font-extrabold ${tone === "rose" ? "text-rose-800" : "text-blue-800"}`}>{title}</div>
      <div className="mb-2 text-xs text-warm-600">{subtitle}</div>
      <ul className="space-y-1">
        {items.map((c) => (
          <li key={c.name} className="rounded-lg bg-white/80 px-2 py-1">
            <span className="font-bold text-warm-800">
              {c.emoji} {c.name}
            </span>
            <span className="block text-xs italic text-warm-600">{c.ex}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <DiagramFrame title="Les 10 classes grammaticales" caption="5 classes variables, 5 classes invariables.">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {column("✏️ Mots variables", "Ils changent : genre, nombre, personne, temps…", CLASSES_VARIABLES, "rose")}
        {column("🧱 Mots invariables", "Ils ne changent jamais d'orthographe.", CLASSES_INVARIABLES, "blue")}
      </div>
    </DiagramFrame>
  );
}

const PHRASE_MONA: { word: string; nature: string; color: string }[] = [
  { word: "Tous", nature: "dét.", color: "bg-amber-100 border-amber-400" },
  { word: "les", nature: "dét.", color: "bg-amber-100 border-amber-400" },
  { word: "proches", nature: "adj.", color: "bg-green-100 border-green-400" },
  { word: "amis", nature: "nom", color: "bg-rose-100 border-rose-400" },
  { word: "de", nature: "prép.", color: "bg-blue-100 border-blue-400" },
  { word: "Mona", nature: "nom", color: "bg-rose-100 border-rose-400" },
  { word: "sont arrivés", nature: "verbe", color: "bg-purple-100 border-purple-400" },
  { word: "hier,", nature: "adv.", color: "bg-cyan-100 border-cyan-400" },
  { word: "pour", nature: "prép.", color: "bg-blue-100 border-blue-400" },
  { word: "lui", nature: "pron.", color: "bg-orange-100 border-orange-400" },
  { word: "souhaiter", nature: "verbe", color: "bg-purple-100 border-purple-400" },
  { word: "joyeusement", nature: "adv.", color: "bg-cyan-100 border-cyan-400" },
  { word: "son", nature: "dét.", color: "bg-amber-100 border-amber-400" },
  { word: "anniversaire.", nature: "nom", color: "bg-rose-100 border-rose-400" },
];

export function PhraseMonaDiagram() {
  return (
    <DiagramFrame title="Une phrase, toutes les classes" caption="Chaque couleur = une classe grammaticale.">
      <div className="flex flex-wrap gap-1.5">
        {PHRASE_MONA.map((w, i) => (
          <div key={i} className={`rounded-lg border-2 px-2 py-1 text-center ${w.color}`}>
            <div className="font-bold text-warm-800">{w.word}</div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-warm-600">{w.nature}</div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

// ─── Physique-chimie 3e — L'atome et les ions ───────────────────────────────

const CARBON_NUCLEUS: { x: number; y: number; kind: "p" | "n" }[] = [
  { x: 0, y: 0, kind: "p" }, { x: 9, y: -4, kind: "n" }, { x: -9, y: 3, kind: "n" },
  { x: 4, y: 9, kind: "p" }, { x: -4, y: -9, kind: "p" }, { x: 10, y: 6, kind: "p" },
  { x: -10, y: -6, kind: "n" }, { x: 2, y: -12, kind: "n" }, { x: -2, y: 12, kind: "n" },
  { x: 13, y: -10, kind: "p" }, { x: -13, y: 10, kind: "p" }, { x: -15, y: -1, kind: "n" },
];

export function AtomeStructureDiagram() {
  const cx = 135;
  const cy = 130;
  const polar = (r: number, deg: number) => ({
    x: cx + r * Math.cos((deg * Math.PI) / 180),
    y: cy + r * Math.sin((deg * Math.PI) / 180),
  });
  // 2 electrons on the inner ring, 4 on the outer ring
  const electrons = [polar(55, -90), polar(55, 90), polar(95, -40), polar(95, 40), polar(95, 140), polar(95, 220)];
  return (
    <DiagramFrame
      title="L'atome de carbone : un noyau + des électrons"
      caption="Schéma non à l'échelle : en vrai, le noyau serait 100 000 fois plus petit que l'atome !"
    >
      <svg viewBox="0 0 440 280" className="mx-auto w-full max-w-lg" role="img" aria-label="Atome de carbone : noyau de 6 protons et 6 neutrons, 6 électrons autour">
        <circle cx={cx} cy={cy} r={118} fill="#FFF7ED" stroke="#78716C" strokeWidth="2" strokeDasharray="2 6" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r={55} fill="none" stroke="#D6D3D1" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r={95} fill="none" stroke="#D6D3D1" strokeWidth="1.5" />
        {CARBON_NUCLEUS.map((n, i) => (
          <circle key={i} cx={cx + n.x * 1.1} cy={cy + n.y * 1.1} r={7} fill={n.kind === "p" ? "#EF4444" : "#3B82F6"} stroke="#fff" strokeWidth="1.5" />
        ))}
        {electrons.map((e, i) => (
          <circle key={i} cx={e.x} cy={e.y} r={6} fill="#1C1917" />
        ))}
        {/* labels */}
        <line x1={cx + 20} y1={cy - 6} x2={268} y2={112} stroke="#44403C" strokeWidth="1.5" />
        <text x={272} y={110} fontSize="15" fontWeight="800" fill="#B91C1C">Noyau (+)</text>
        <text x={272} y={128} fontSize="13" fill="#44403C">protons + neutrons</text>
        <line x1={electrons[2].x + 6} y1={electrons[2].y - 3} x2={268} y2={42} stroke="#44403C" strokeWidth="1.5" />
        <text x={272} y={40} fontSize="15" fontWeight="800" fill="#1C1917">Électrons (−)</text>
        <text x={272} y={58} fontSize="13" fill="#44403C">ils bougent autour</text>
        <text x={272} y={200} fontSize="15" fontWeight="800" fill="#57534E">Du vide partout !</text>
        <text x={272} y={218} fontSize="13" fill="#44403C">= structure lacunaire</text>
        {/* legend */}
        <circle cx={20} cy={270} r={6} fill="#EF4444" />
        <text x={30} y={274} fontSize="13" fill="#44403C">proton (+)</text>
        <circle cx={130} cy={270} r={6} fill="#3B82F6" />
        <text x={140} y={274} fontSize="13" fill="#44403C">neutron (neutre)</text>
        <circle cx={280} cy={270} r={6} fill="#1C1917" />
        <text x={290} y={274} fontSize="13" fill="#44403C">électron (−)</text>
      </svg>
    </DiagramFrame>
  );
}

export function NotationNoyauDiagram() {
  return (
    <DiagramFrame title="Lire l'écriture du noyau" caption="Exemple : le carbone 12 → 6 protons et 12 − 6 = 6 neutrons.">
      <svg viewBox="0 0 420 200" className="mx-auto w-full max-w-md" role="img" aria-label="Notation A en haut à gauche, Z en bas à gauche du symbole">
        <text x={198} y={135} fontSize="96" fontWeight="800" fill="#2D2D2D" fontFamily="serif">C</text>
        <text x={186} y={78} fontSize="34" fontWeight="800" fill="#7C3AED" textAnchor="end">12</text>
        <text x={186} y={150} fontSize="34" fontWeight="800" fill="#0891B2" textAnchor="end">6</text>
        <line x1={140} y1={66} x2={90} y2={40} stroke="#7C3AED" strokeWidth="2" />
        <text x={10} y={26} fontSize="15" fontWeight="800" fill="#7C3AED">A = nombre de nucléons</text>
        <text x={10} y={44} fontSize="12" fill="#44403C">(protons + neutrons)</text>
        <line x1={160} y1={150} x2={100} y2={175} stroke="#0891B2" strokeWidth="2" />
        <text x={10} y={180} fontSize="15" fontWeight="800" fill="#0891B2">Z = numéro atomique</text>
        <text x={10} y={196} fontSize="12" fill="#44403C">(nombre de protons)</text>
        <line x1={250} y1={100} x2={300} y2={100} stroke="#44403C" strokeWidth="2" />
        <text x={306} y={96} fontSize="15" fontWeight="800" fill="#2D2D2D">X = symbole</text>
        <text x={306} y={114} fontSize="12" fill="#44403C">de l&apos;élément</text>
      </svg>
    </DiagramFrame>
  );
}

function IonArrow({ text, sub }: { text: string; sub: string }) {
  return (
    <div className="flex flex-col items-center px-1 text-center">
      <span className="whitespace-nowrap text-xs font-bold text-warm-700">{text}</span>
      <span className="text-3xl font-black leading-none text-warm-700">→</span>
      <span className="whitespace-nowrap text-[11px] text-warm-500">{sub}</span>
    </div>
  );
}

export function FormationIonsDiagram() {
  return (
    <DiagramFrame title="Comment se forme un ion ?" caption="Le noyau ne change jamais : seuls les électrons partent ou arrivent.">
      <div className="space-y-4">
        <div className="rounded-xl border-2 border-red-200 bg-red-50/60 p-2">
          <p className="mb-1 text-center text-sm font-extrabold text-red-800">Cation : l&apos;atome PERD des électrons</p>
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-3">
            <AtomModel z={13} electrons={13} size={120} label="Atome Al (13 e⁻)" />
            <IonArrow text="perd 3 e⁻" sub="13 − 3 = 10 e⁻" />
            <AtomModel z={13} electrons={10} size={120} label="Ion Al³⁺ (10 e⁻)" />
          </div>
        </div>
        <div className="rounded-xl border-2 border-sky-200 bg-sky-50/60 p-2">
          <p className="mb-1 text-center text-sm font-extrabold text-sky-800">Anion : l&apos;atome GAGNE des électrons</p>
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-3">
            <AtomModel z={17} electrons={17} size={120} label="Atome Cl (17 e⁻)" />
            <IonArrow text="gagne 1 e⁻" sub="17 + 1 = 18 e⁻" />
            <AtomModel z={17} electrons={18} size={120} label="Ion Cl⁻ (18 e⁻)" />
          </div>
        </div>
      </div>
    </DiagramFrame>
  );
}

const ION_TESTS: { ion: string; name: string; reagent: string; color: string; result: string; dark?: boolean }[] = [
  { ion: "Cl⁻", name: "chlorure", reagent: "nitrate d'argent", color: "#F5F5F4", result: "blanc → noircit à la lumière", dark: true },
  { ion: "Cu²⁺", name: "cuivre II", reagent: "soude", color: "#3B82F6", result: "bleu" },
  { ion: "Fe²⁺", name: "fer II", reagent: "soude", color: "#4D7C0F", result: "vert" },
  { ion: "Fe³⁺", name: "fer III", reagent: "soude", color: "#C2410C", result: "rouille" },
];

export function TestsIonsDiagram() {
  return (
    <DiagramFrame title="Les tests d'identification des ions" caption="Quelques gouttes de réactif → un précipité (solide) d'une couleur précise apparaît.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {ION_TESTS.map((t) => (
          <div key={t.ion} className="flex flex-col items-center rounded-xl bg-white p-2 text-center">
            <div className="text-xl font-extrabold text-warm-800">{t.ion}</div>
            <div className="mb-1 text-xs text-warm-500">ion {t.name}</div>
            <svg viewBox="0 0 60 130" width="52" height="112" aria-hidden="true">
              <path d="M10 4 V105 a20 20 0 0 0 40 0 V4" fill="#E0F2FE" fillOpacity="0.5" stroke="#57534E" strokeWidth="3" />
              <path d="M12 40 V105 a18 18 0 0 0 36 0 V40 Z" fill="#E0F2FE" />
              {/* precipitate flakes */}
              <path d="M12 85 Q22 78 30 86 T48 84 V105 a18 18 0 0 1 -36 0 Z" fill={t.color} stroke={t.dark ? "#A8A29E" : "none"} strokeWidth="1.5" />
              <circle cx="22" cy="70" r="3" fill={t.color} stroke={t.dark ? "#A8A29E" : "none"} />
              <circle cx="38" cy="62" r="2.5" fill={t.color} stroke={t.dark ? "#A8A29E" : "none"} />
              <circle cx="30" cy="75" r="2" fill={t.color} stroke={t.dark ? "#A8A29E" : "none"} />
            </svg>
            <div className="mt-1 text-[11px] text-warm-600">+ {t.reagent}</div>
            <div className="text-sm font-bold text-warm-800">{t.result}</div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  );
}

// ─── SVT 3e — Génétique ─────────────────────────────────────────────────────

/** Simple side-view mouse. */
function Mouse({ x, y, fill, scale = 1 }: { x: number; y: number; fill: string; scale?: number }) {
  const stroke = fill === "#1C1917" ? "#1C1917" : "#78716C";
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-26 6 Q-46 10 -50 -4" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <ellipse cx={0} cy={0} rx={26} ry={15} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <circle cx={20} cy={-8} r={10} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <circle cx={16} cy={-18} r={6} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <circle cx={24} cy={-9} r={1.8} fill={fill === "#1C1917" ? "#FFF" : "#1C1917"} />
    </g>
  );
}

/** Cell drawn as a circle with an optional nucleus. */
function Cell({ x, y, r = 20, nucleus, nucleusFill = "#57534E" }: { x: number; y: number; r?: number; nucleus: boolean; nucleusFill?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill="#FEF3C7" stroke="#A8A29E" strokeWidth="1.5" />
      {nucleus && <circle cx={x} cy={y} r={r * 0.38} fill={nucleusFill} />}
    </g>
  );
}

export function TransfertNoyauDiagram() {
  return (
    <DiagramFrame
      title="L'expérience du transfert de noyau (souris)"
      caption="Le souriceau a le pelage de la souris qui a donné le NOYAU, pas celui de la souris qui a donné le reste de la cellule."
    >
      <svg viewBox="-14 0 534 250" className="mx-auto w-full max-w-2xl" role="img" aria-label="Le noyau d'une cellule de souris blanche est placé dans une cellule-œuf sans noyau de souris noire. La mère porteuse noire donne naissance à un souriceau blanc.">
        <defs>
          <marker id="arrTN" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#44403C" />
          </marker>
        </defs>
        {/* Row 1: white mouse */}
        <Mouse x={55} y={55} fill="#FFFFFF" />
        <text x={45} y={92} textAnchor="middle" fontSize="12" fontWeight="700" fill="#44403C">souris blanche</text>
        <line x1={92} y1={50} x2={128} y2={50} stroke="#44403C" strokeWidth="1.8" markerEnd="url(#arrTN)" />
        <Cell x={155} y={50} nucleus nucleusFill="#E5E7EB" />
        <circle cx={155} cy={50} r={7.6} fill="none" stroke="#57534E" strokeWidth="1.5" />
        <text x={155} y={86} textAnchor="middle" fontSize="11" fill="#44403C">on prélève</text>
        <text x={155} y={99} textAnchor="middle" fontSize="11" fontWeight="700" fill="#B91C1C">le noyau</text>
        <path d="M178 46 Q215 40 232 90" fill="none" stroke="#B91C1C" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#arrTN)" />

        {/* Row 2: black mouse */}
        <Mouse x={55} y={170} fill="#1C1917" />
        <text x={45} y={207} textAnchor="middle" fontSize="12" fontWeight="700" fill="#44403C">souris noire</text>
        <line x1={92} y1={165} x2={128} y2={165} stroke="#44403C" strokeWidth="1.8" markerEnd="url(#arrTN)" />
        <Cell x={155} y={165} nucleus={false} />
        <text x={155} y={201} textAnchor="middle" fontSize="11" fill="#44403C">cellule-œuf</text>
        <text x={155} y={214} textAnchor="middle" fontSize="11" fontWeight="700" fill="#44403C">sans noyau</text>
        <path d="M178 160 Q215 160 232 135" fill="none" stroke="#44403C" strokeWidth="1.8" markerEnd="url(#arrTN)" />

        {/* New egg cell */}
        <Cell x={258} y={112} r={24} nucleus nucleusFill="#E5E7EB" />
        <circle cx={258} cy={112} r={9.1} fill="none" stroke="#57534E" strokeWidth="1.5" />
        <text x={258} y={152} textAnchor="middle" fontSize="11" fontWeight="700" fill="#44403C">nouvelle</text>
        <text x={258} y={165} textAnchor="middle" fontSize="11" fontWeight="700" fill="#44403C">cellule-œuf</text>
        <line x1={286} y1={112} x2={330} y2={112} stroke="#44403C" strokeWidth="1.8" markerEnd="url(#arrTN)" />

        {/* Surrogate mother */}
        <Mouse x={378} y={112} fill="#1C1917" scale={1.1} />
        <text x={370} y={152} textAnchor="middle" fontSize="11" fill="#44403C">mère porteuse</text>
        <text x={370} y={165} textAnchor="middle" fontSize="11" fill="#44403C">(noire)</text>
        <line x1={418} y1={112} x2={448} y2={112} stroke="#44403C" strokeWidth="1.8" markerEnd="url(#arrTN)" />

        {/* Baby */}
        <Mouse x={482} y={115} fill="#FFFFFF" scale={0.7} />
        <text x={482} y={145} textAnchor="middle" fontSize="12" fontWeight="800" fill="#B91C1C">souriceau</text>
        <text x={482} y={159} textAnchor="middle" fontSize="12" fontWeight="800" fill="#B91C1C">BLANC</text>

        <rect x={180} y={222} width={330} height={24} rx={8} fill="#FEF2F2" stroke="#FCA5A5" />
        <text x={345} y={239} textAnchor="middle" fontSize="12.5" fontWeight="700" fill="#991B1B">
          L&apos;information héréditaire est dans le noyau.
        </text>
      </svg>
    </DiagramFrame>
  );
}

/** One chromosome drawn as two arms joined at the centromere. */
function ChromosomeRod({
  x,
  y,
  h,
  w = 9,
  fill,
  band,
}: {
  x: number;
  y: number;
  h: number;
  w?: number;
  fill: string;
  band?: { at: number; color: string };
}) {
  const p = Math.round(h * 0.38);
  const q = h - p - 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={p} rx={w / 2} fill={fill} />
      <rect x={x + w * 0.3} y={y + p - 1} width={w * 0.4} height={4} fill={fill} />
      <rect x={x} y={y + p + 2} width={w} height={q} rx={w / 2} fill={fill} />
      {band && <rect x={x} y={y + h * band.at} width={w} height={Math.max(3, w * 0.35)} fill={band.color} />}
    </g>
  );
}

const KARYO_SIZES: Record<string, number> = {
  "1": 62, "2": 60, "3": 52, "4": 50, "5": 48, "6": 46, "7": 43, "8": 40, "9": 39, "10": 38,
  "11": 38, "12": 37, "13": 31, "14": 30, "15": 29, "16": 27, "17": 25, "18": 23,
  "19": 18, "20": 19, "21": 13, "22": 14, X: 42, Y: 17,
};

export function CaryotypeDiagram({
  sexe = "homme",
  trisomie21 = false,
}: {
  sexe?: "homme" | "femme";
  trisomie21?: boolean;
}) {
  const rows: string[][] = [
    ["1", "2", "3", "4", "5"],
    ["6", "7", "8", "9", "10", "11", "12"],
    ["13", "14", "15", "16", "17", "18"],
    ["19", "20", "21", "22", "XY"],
  ];
  const rowTop = [10, 100, 172, 232];
  const rowMax = [62, 46, 31, 42];
  const slot = 62;
  const total = trisomie21 ? 47 : 46;
  const title = trisomie21
    ? sexe === "homme"
      ? "Caryotype d'un garçon atteint de trisomie 21"
      : "Caryotype d'une fille atteinte de trisomie 21"
    : sexe === "homme"
      ? "Caryotype simplifié d'un homme"
      : "Caryotype simplifié d'une femme";
  return (
    <DiagramFrame
      title={title}
      caption={
        trisomie21
          ? "3 chromosomes n° 21 au lieu de 2 → 47 chromosomes au total."
          : "Les chromosomes sont rangés par paires, à peu près du plus grand au plus petit. La dernière paire = chromosomes sexuels."
      }
    >
      <svg viewBox="0 0 460 326" className="mx-auto w-full max-w-lg" role="img" aria-label={`${title} : ${total} chromosomes rangés en paires numérotées de 1 à 22, puis la paire sexuelle.`}>
        {rows.map((row, ri) => {
          const startX = (460 - row.length * slot) / 2;
          return row.map((id, ci) => {
            const cx = startX + ci * slot + slot / 2;
            const isSex = id === "XY";
            const pair: { label: string; h: number; fill: string }[] = isSex
              ? sexe === "homme"
                ? [
                    { label: "X", h: KARYO_SIZES.X, fill: "#A855F7" },
                    { label: "Y", h: KARYO_SIZES.Y, fill: "#3B82F6" },
                  ]
                : [
                    { label: "X", h: KARYO_SIZES.X, fill: "#A855F7" },
                    { label: "X", h: KARYO_SIZES.X, fill: "#A855F7" },
                  ]
              : Array.from({ length: id === "21" && trisomie21 ? 3 : 2 }, () => ({
                  label: id,
                  h: KARYO_SIZES[id],
                  fill: id === "21" && trisomie21 ? "#EF4444" : "#F59E0B",
                }));
            const w = 8;
            const gap = 3;
            const groupW = pair.length * w + (pair.length - 1) * gap;
            const midY = rowTop[ri] + rowMax[ri] / 2;
            return (
              <g key={`${ri}-${id}`}>
                {isSex && <rect x={cx - 24} y={rowTop[ri] - 6} width={48} height={rowMax[ri] + 30} rx={8} fill="#F3E8FF" />}
                {id === "21" && trisomie21 && <rect x={cx - 20} y={rowTop[ri] - 6} width={40} height={rowMax[ri] + 30} rx={8} fill="#FEE2E2" />}
                {pair.map((c, k) => (
                  <ChromosomeRod key={k} x={cx - groupW / 2 + k * (w + gap)} y={midY - c.h / 2} h={c.h} w={w} fill={c.fill} />
                ))}
                <text x={cx} y={rowTop[ri] + rowMax[ri] + 16} textAnchor="middle" fontSize="12" fontWeight="700" fill="#44403C">
                  {isSex ? (sexe === "homme" ? "X  Y" : "X  X") : id}
                </text>
              </g>
            );
          });
        })}
        <text x={230} y={318} textAnchor="middle" fontSize="13" fontWeight="800" fill="#2D2D2D">
          {trisomie21 ? "47 chromosomes" : "46 chromosomes = 23 paires"}
        </text>
      </svg>
    </DiagramFrame>
  );
}

export function PaireChromosomesAllelesDiagram() {
  return (
    <DiagramFrame
      title="Gène et allèles sur une paire de chromosomes"
      caption="Le gène est au même endroit sur les 2 chromosomes de la paire. Mais il peut exister en versions différentes : les allèles."
    >
      <svg viewBox="0 0 440 240" className="mx-auto w-full max-w-md" role="img" aria-label="Une paire de chromosomes. Le gène du facteur Rhésus est au même endroit sur chaque chromosome : allèle Rh+ sur l'un, allèle Rh− sur l'autre.">
        <ChromosomeRod x={150} y={20} h={190} w={26} fill="#FCD34D" band={{ at: 0.62, color: "#16A34A" }} />
        <ChromosomeRod x={230} y={20} h={190} w={26} fill="#FCD34D" band={{ at: 0.62, color: "#16A34A" }} />
        {/* gene label */}
        <line x1={150} y1={142} x2={95} y2={142} stroke="#16A34A" strokeWidth="2" />
        <text x={90} y={130} textAnchor="end" fontSize="14" fontWeight="800" fill="#15803D">GÈNE</text>
        <text x={90} y={147} textAnchor="end" fontSize="12" fill="#44403C">du facteur</text>
        <text x={90} y={162} textAnchor="end" fontSize="12" fill="#44403C">Rhésus</text>
        {/* alleles */}
        <text x={163} y={232} textAnchor="middle" fontSize="15" fontWeight="800" fill="#B91C1C">Rh+</text>
        <text x={243} y={232} textAnchor="middle" fontSize="15" fontWeight="800" fill="#1D4ED8">Rh−</text>
        <line x1={256} y1={142} x2={300} y2={142} stroke="#44403C" strokeWidth="2" />
        <text x={306} y={130} fontSize="14" fontWeight="800" fill="#2D2D2D">2 ALLÈLES</text>
        <text x={306} y={147} fontSize="12" fill="#44403C">= 2 versions</text>
        <text x={306} y={162} fontSize="12" fill="#44403C">du même gène</text>
        <text x={203} y={14} textAnchor="middle" fontSize="12" fontWeight="700" fill="#57534E">une paire de chromosomes</text>
      </svg>
    </DiagramFrame>
  );
}

function NestCard({ step, title, text, children }: { step: string; title: string; text: string; children: React.ReactNode }) {
  return (
    <div className="flex w-[46%] flex-col items-center rounded-xl border-2 border-emerald-200 bg-emerald-50/60 p-2 text-center sm:w-auto sm:flex-1">
      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">{step}</span>
      <svg viewBox="0 0 80 70" width="80" height="70" aria-hidden="true">{children}</svg>
      <span className="text-sm font-extrabold text-warm-900">{title}</span>
      <span className="text-[11px] leading-snug text-warm-600">{text}</span>
    </div>
  );
}

export function GenomeEmboitementDiagram() {
  return (
    <DiagramFrame
      title="Du génome à l'allèle"
      caption="Le génome est dans les chromosomes, qui portent les gènes. Chaque gène peut exister en plusieurs versions : les allèles."
    >
      <div className="flex flex-wrap items-stretch justify-center gap-2">
        <NestCard step="1" title="Génome" text="tous les gènes, dans le noyau de chaque cellule">
          <circle cx={40} cy={35} r={30} fill="#FEF3C7" stroke="#A8A29E" strokeWidth="1.5" />
          <circle cx={40} cy={35} r={14} fill="#FDE68A" stroke="#A16207" strokeWidth="1.5" />
          {[[-6, -4], [3, -6], [-2, 4], [6, 3]].map(([dx, dy], i) => (
            <rect key={i} x={40 + dx} y={35 + dy} width={2.5} height={7} rx={1} fill="#B45309" transform={`rotate(${i * 40} ${40 + dx} ${35 + dy})`} />
          ))}
        </NestCard>
        <NestCard step="2" title="Chromosomes" text="46 chez l'humain, 23 paires">
          <ChromosomeRod x={26} y={6} h={58} w={11} fill="#F59E0B" />
          <ChromosomeRod x={43} y={6} h={58} w={11} fill="#F59E0B" />
        </NestCard>
        <NestCard step="3" title="Gène" text="un morceau de chromosome → un caractère">
          <ChromosomeRod x={34} y={6} h={58} w={12} fill="#F59E0B" band={{ at: 0.65, color: "#16A34A" }} />
          <line x1={46} y1={45} x2={62} y2={45} stroke="#16A34A" strokeWidth="2" />
          <circle cx={66} cy={45} r={4} fill="#16A34A" />
        </NestCard>
        <NestCard step="4" title="Allèles" text="les versions d'un même gène">
          <ChromosomeRod x={22} y={6} h={58} w={11} fill="#F59E0B" band={{ at: 0.65, color: "#DC2626" }} />
          <ChromosomeRod x={47} y={6} h={58} w={11} fill="#F59E0B" band={{ at: 0.65, color: "#2563EB" }} />
        </NestCard>
      </div>
    </DiagramFrame>
  );
}

type PedPerson = { x: number; y: number; sex: "h" | "f"; on: boolean; label?: string };

function PedSymbol({ p, onColor }: { p: PedPerson; onColor: string }) {
  const s = 26;
  const fill = p.on ? onColor : "#FFFFFF";
  return (
    <g>
      {p.sex === "h" ? (
        <rect x={p.x - s / 2} y={p.y - s / 2} width={s} height={s} fill={fill} stroke="#2D2D2D" strokeWidth="2" />
      ) : (
        <circle cx={p.x} cy={p.y} r={s / 2} fill={fill} stroke="#2D2D2D" strokeWidth="2" />
      )}
      {p.label && (
        <text x={p.x} y={p.y + 30} textAnchor="middle" fontSize="11" fill="#44403C">
          {p.label}
        </text>
      )}
    </g>
  );
}

export function ArbrePTCDiagram() {
  const on = "#7C3AED";
  const gm: PedPerson = { x: 150, y: 40, sex: "f", on: false, label: "grand-mère" };
  const gp: PedPerson = { x: 250, y: 40, sex: "h", on: true, label: "grand-père" };
  const mere: PedPerson = { x: 200, y: 125, sex: "f", on: false, label: "mère" };
  const pere: PedPerson = { x: 100, y: 125, sex: "h", on: true, label: "père" };
  const e1: PedPerson = { x: 70, y: 210, sex: "h", on: false, label: "fils" };
  const e2: PedPerson = { x: 150, y: 210, sex: "f", on: false, label: "fille" };
  const e3: PedPerson = { x: 230, y: 210, sex: "f", on: true, label: "fille" };
  const line = { stroke: "#2D2D2D", strokeWidth: 2 };
  return (
    <DiagramFrame
      title="Arbre généalogique : la sensibilité au PTC"
      caption="Le PTC est une substance au goût amer (comme dans le chou). Certaines personnes le sentent, d'autres non."
    >
      <svg viewBox="0 0 460 250" className="mx-auto w-full max-w-lg" role="img" aria-label="Arbre sur 3 générations : grand-mère insensible et grand-père sensible ; leur fille insensible, unie à un homme sensible ; leurs trois enfants : un fils insensible, une fille insensible, une fille sensible.">
        {/* generation labels */}
        <text x={8} y={44} fontSize="14" fontWeight="800" fill="#57534E">I</text>
        <text x={8} y={129} fontSize="14" fontWeight="800" fill="#57534E">II</text>
        <text x={8} y={214} fontSize="14" fontWeight="800" fill="#57534E">III</text>
        {/* unions */}
        <line x1={163} y1={40} x2={237} y2={40} {...line} />
        <line x1={113} y1={125} x2={187} y2={125} {...line} />
        {/* descent I → mère */}
        <line x1={200} y1={40} x2={200} y2={112} {...line} />
        {/* descent II → children */}
        <line x1={150} y1={125} x2={150} y2={168} {...line} />
        <line x1={70} y1={168} x2={230} y2={168} {...line} />
        <line x1={70} y1={168} x2={70} y2={197} {...line} />
        <line x1={150} y1={168} x2={150} y2={197} {...line} />
        <line x1={230} y1={168} x2={230} y2={197} {...line} />
        {[gm, gp, mere, pere, e1, e2, e3].map((p, i) => (
          <PedSymbol key={i} p={p} onColor={on} />
        ))}
        {/* legend */}
        <g transform="translate(300 20)">
          <rect x={0} y={0} width={152} height={176} rx={10} fill="#FAFAF9" stroke="#E7E5E4" />
          <rect x={12} y={12} width={18} height={18} fill="#FFF" stroke="#2D2D2D" strokeWidth="2" />
          <text x={38} y={26} fontSize="12" fill="#2D2D2D">homme</text>
          <circle cx={21} cy={48} r={9} fill="#FFF" stroke="#2D2D2D" strokeWidth="2" />
          <text x={38} y={52} fontSize="12" fill="#2D2D2D">femme</text>
          <rect x={12} y={66} width={18} height={18} fill={on} stroke="#2D2D2D" strokeWidth="2" />
          <text x={38} y={80} fontSize="12" fontWeight="700" fill={on}>sensible au PTC</text>
          <rect x={12} y={92} width={18} height={18} fill="#FFF" stroke="#2D2D2D" strokeWidth="2" />
          <text x={38} y={106} fontSize="12" fill="#2D2D2D">insensible</text>
          <line x1={10} y1={128} x2={32} y2={128} {...line} />
          <text x={38} y={132} fontSize="12" fill="#2D2D2D">union</text>
          <path d="M21 146 V156 M12 156 H30 M12 156 V166 M30 156 V166" fill="none" {...line} />
          <text x={38} y={162} fontSize="12" fill="#2D2D2D">enfants</text>
        </g>
      </svg>
    </DiagramFrame>
  );
}

/** Multi-line SVG label: first line bold title, then body lines. */
function MapLabel({ x, y, title, lines, color }: { x: number; y: number; title: string; lines: string[]; color: string }) {
  return (
    <text x={x} y={y} fontSize="12" fill="#44403C">
      <tspan x={x} fontSize="14" fontWeight="800" fill={color}>
        {title}
      </tspan>
      {lines.map((l, i) => (
        <tspan key={i} x={x} dy={15}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

/** Dashed "zoom" lines from a small frame to the next, larger frame. */
function ZoomLines({ from, to }: { from: [number, number, number, number]; to: [number, number, number] }) {
  const [fx, fy, fw, fh] = from;
  const [tx, ty, tw] = to;
  return (
    <g stroke="#A8A29E" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
      <rect x={fx} y={fy} width={fw} height={fh} rx={4} stroke="#DC2626" strokeDasharray="none" strokeWidth="2" />
      <line x1={fx} y1={fy + fh} x2={tx} y2={ty} />
      <line x1={fx + fw} y1={fy + fh} x2={tx + tw} y2={ty} />
    </g>
  );
}

const NUCLEUS_RODS: { x: number; y: number; h: number; r: number; fill: string }[] = [
  { x: 78, y: 545, h: 46, r: -20, fill: "#F59E0B" },
  { x: 92, y: 548, h: 46, r: -14, fill: "#F59E0B" },
  { x: 130, y: 520, h: 38, r: 25, fill: "#FB923C" },
  { x: 143, y: 524, h: 38, r: 31, fill: "#FB923C" },
  { x: 170, y: 565, h: 32, r: 70, fill: "#FBBF24" },
  { x: 172, y: 580, h: 32, r: 76, fill: "#FBBF24" },
  { x: 70, y: 610, h: 28, r: 60, fill: "#FDBA74" },
  { x: 78, y: 622, h: 28, r: 66, fill: "#FDBA74" },
  { x: 125, y: 612, h: 24, r: -40, fill: "#A855F7" },
  { x: 138, y: 612, h: 14, r: -34, fill: "#3B82F6" },
];

const HELIX_TOP = 815;
const HELIX_X = 300;

function helixPath(phase: number) {
  return Array.from({ length: 41 }, (_, i) => {
    const y = HELIX_TOP + i * 3.5;
    const x = HELIX_X + 12 * Math.sin(i / 4 + phase);
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
}

/**
 * One-page "map" of the chapter vocabulary: zooms from the individual down to
 * the DNA, placing each glossary word where it belongs.
 */
export function CarteGenetiqueDiagram() {
  return (
    <DiagramFrame
      title="La carte du chapitre : où se trouve chaque mot ?"
      caption="On zoome de plus en plus : individu → cellule → noyau → chromosomes → gène → allèles → ADN."
    >
      <svg viewBox="0 0 360 970" className="mx-auto w-full max-w-sm" role="img" aria-label="Schéma en 4 zooms. 1 : un individu et son phénotype. 2 : une cellule avec membrane, cytoplasme et noyau. 3 : le noyau contient les chromosomes, l'ensemble des gènes forme le génome. 4 : une paire de chromosomes, un gène au même endroit sur les deux, avec deux allèles Rh+ et Rh− ; un chromosome est fait d'ADN.">
        {(
          [
            [14, 26, "1"],
            [14, 262, "2"],
            [14, 492, "3"],
            [14, 728, "4"],
          ] as const
        ).map(([x, y, n]) => (
          <g key={n}>
            <circle cx={x} cy={y - 5} r={11} fill="#065F46" />
            <text x={x} y={y} textAnchor="middle" fontSize="13" fontWeight="800" fill="#FFFFFF">
              {n}
            </text>
          </g>
        ))}

        {/* 1 — Individual */}
        <g fill="#FDE68A" stroke="#78716C" strokeWidth="1.5">
          <circle cx={100} cy={45} r={20} />
          <path d="M72 75 Q100 64 128 75 L136 140 L120 140 L118 100 L116 190 L102 190 L100 135 L98 190 L84 190 L82 100 L80 140 L64 140 Z" />
        </g>
        <circle cx={93} cy={42} r={2.5} fill="#1D4ED8" />
        <circle cx={107} cy={42} r={2.5} fill="#1D4ED8" />
        <path d="M82 36 Q100 14 118 36" fill="none" stroke="#92400E" strokeWidth="5" strokeLinecap="round" />
        <MapLabel x={200} y={40} title="INDIVIDU" color="#065F46" lines={["Son PHÉNOTYPE =", "ses caractères", "observables (yeux,", "cheveux, groupe", "sanguin…)"]} />
        <ZoomLines from={[118, 112, 16, 16]} to={[40, 230, 200]} />

        {/* 2 — Cell */}
        <circle cx={140} cy={330} r={88} fill="#FEF3C7" stroke="#A16207" strokeWidth="4" />
        <circle cx={140} cy={330} r={32} fill="#FDE68A" stroke="#A16207" strokeWidth="2" />
        {[[-10, -8, 20], [6, -12, -30], [-4, 6, 60], [10, 4, 10]].map(([dx, dy, r], i) => (
          <rect key={i} x={140 + dx} y={330 + dy} width={3} height={10} rx={1.5} fill="#B45309" transform={`rotate(${r} ${140 + dx} ${330 + dy})`} />
        ))}
        <line x1={222} y1={300} x2={238} y2={290} stroke="#44403C" strokeWidth="1.5" />
        <MapLabel x={242} y={280} title="Membrane" color="#A16207" lines={["l'enveloppe"]} />
        <line x1={195} y1={350} x2={238} y2={340} stroke="#44403C" strokeWidth="1.5" />
        <MapLabel x={242} y={335} title="Cytoplasme" color="#A16207" lines={["l'intérieur"]} />
        <line x1={160} y1={335} x2={238} y2={392} stroke="#44403C" strokeWidth="1.5" />
        <MapLabel x={242} y={392} title="NOYAU" color="#B91C1C" lines={["contient l'info", "héréditaire"]} />
        <ZoomLines from={[124, 314, 32, 32]} to={[30, 470, 220]} />

        {/* 3 — Nucleus */}
        <circle cx={130} cy={580} r={100} fill="#FFFBEB" stroke="#A16207" strokeWidth="3" />
        {NUCLEUS_RODS.map((c, i) => (
          <g key={i} transform={`rotate(${c.r} ${c.x} ${c.y})`}>
            <ChromosomeRod x={c.x} y={c.y - c.h / 2} h={c.h} w={9} fill={c.fill} />
          </g>
        ))}
        <MapLabel x={240} y={505} title="Chromosomes" color="#B45309" lines={["filaments", "du noyau", "46 = 23 paires", "(XX ou XY)"]} />
        <MapLabel x={240} y={595} title="GÉNOME" color="#065F46" lines={["tous les gènes", "de tous les", "chromosomes"]} />
        <MapLabel x={240} y={665} title="Caryotype" color="#57534E" lines={["= les ranger", "par paires"]} />
        <ZoomLines from={[66, 518, 42, 52]} to={[90, 728, 90]} />

        {/* 4 — Chromosome pair, gene, alleles, DNA */}
        <ChromosomeRod x={95} y={730} h={200} w={24} fill="#F59E0B" band={{ at: 0.62, color: "#DC2626" }} />
        <ChromosomeRod x={150} y={730} h={200} w={24} fill="#F59E0B" band={{ at: 0.62, color: "#2563EB" }} />
        <text x={107} y={952} textAnchor="middle" fontSize="13" fontWeight="800" fill="#DC2626">Rh+</text>
        <text x={162} y={952} textAnchor="middle" fontSize="13" fontWeight="800" fill="#2563EB">Rh−</text>
        <MapLabel x={8} y={800} title="GÈNE" color="#15803D" lines={["même place", "sur les 2"]} />
        <line x1={60} y1={840} x2={93} y2={856} stroke="#16A34A" strokeWidth="2" />
        <line x1={176} y1={858} x2={196} y2={884} stroke="#44403C" strokeWidth="1.5" />
        <MapLabel x={190} y={900} title="2 ALLÈLES" color="#7C3AED" lines={["versions", "du gène"]} />
        {/* DNA zoom */}
        <rect x={150} y={750} width={24} height={20} rx={4} fill="none" stroke="#DC2626" strokeWidth="2" />
        <line x1={174} y1={750} x2={HELIX_X - 18} y2={HELIX_TOP} stroke="#A8A29E" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1={174} y1={770} x2={HELIX_X - 18} y2={HELIX_TOP + 140} stroke="#A8A29E" strokeWidth="1.5" strokeDasharray="4 4" />
        {Array.from({ length: 12 }, (_, i) => {
          const t = (i * 11.5 + 5) / 3.5;
          const y = HELIX_TOP + i * 11.5 + 5;
          return <line key={i} x1={HELIX_X + 12 * Math.sin(t / 4)} y1={y} x2={HELIX_X + 12 * Math.sin(t / 4 + Math.PI)} y2={y} stroke="#86EFAC" strokeWidth="2" />;
        })}
        <path d={helixPath(0)} fill="none" stroke="#16A34A" strokeWidth="3" />
        <path d={helixPath(Math.PI)} fill="none" stroke="#0E7490" strokeWidth="3" />
        <MapLabel x={240} y={745} title="ADN" color="#0E7490" lines={["la molécule", "du chromosome"]} />
      </svg>
    </DiagramFrame>
  );
}
