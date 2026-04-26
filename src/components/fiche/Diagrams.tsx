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
