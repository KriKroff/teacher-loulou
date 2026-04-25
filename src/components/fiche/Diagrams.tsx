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
      <svg viewBox="0 0 760 360" className="h-auto w-full" role="img" aria-label="Schema des changements d'etat entre solide, liquide et gaz">
        <defs>
          <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#F97316" />
          </marker>
          <marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0EA5E9" />
          </marker>
        </defs>

        <rect x="40" y="120" width="170" height="100" rx="28" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="3" />
        <rect x="295" y="120" width="170" height="100" rx="28" fill="#DCFCE7" stroke="#34D399" strokeWidth="3" />
        <rect x="550" y="120" width="170" height="100" rx="28" fill="#FED7AA" stroke="#FB923C" strokeWidth="3" />

        <text x="125" y="164" textAnchor="middle" fontSize="28" fontWeight="700" fill="#1E3A8A">Solide</text>
        <text x="125" y="195" textAnchor="middle" fontSize="16" fill="#1E40AF">forme fixe</text>
        <text x="125" y="215" textAnchor="middle" fontSize="16" fill="#1E40AF">volume fixe</text>

        <text x="380" y="164" textAnchor="middle" fontSize="28" fontWeight="700" fill="#166534">Liquide</text>
        <text x="380" y="195" textAnchor="middle" fontSize="16" fill="#15803D">forme variable</text>
        <text x="380" y="215" textAnchor="middle" fontSize="16" fill="#15803D">volume fixe</text>

        <text x="635" y="164" textAnchor="middle" fontSize="28" fontWeight="700" fill="#9A3412">Gaz</text>
        <text x="635" y="195" textAnchor="middle" fontSize="16" fill="#C2410C">forme variable</text>
        <text x="635" y="215" textAnchor="middle" fontSize="16" fill="#C2410C">volume variable</text>

        <line x1="210" y1="145" x2="295" y2="145" stroke="#F97316" strokeWidth="5" markerEnd="url(#arrow-red)" />
        <ArrowLabel x={252} y={130}>Fusion</ArrowLabel>
        <line x1="295" y1="195" x2="210" y2="195" stroke="#0EA5E9" strokeWidth="5" markerEnd="url(#arrow-blue)" />
        <ArrowLabel x={252} y={235}>Solidification</ArrowLabel>

        <line x1="465" y1="145" x2="550" y2="145" stroke="#F97316" strokeWidth="5" markerEnd="url(#arrow-red)" />
        <ArrowLabel x={507} y={130}>Vaporisation</ArrowLabel>
        <line x1="550" y1="195" x2="465" y2="195" stroke="#0EA5E9" strokeWidth="5" markerEnd="url(#arrow-blue)" />
        <ArrowLabel x={507} y={235}>Liquefaction</ArrowLabel>

        <path d="M 145 115 C 165 35, 595 35, 615 115" fill="none" stroke="#F97316" strokeWidth="5" markerEnd="url(#arrow-red)" />
        <ArrowLabel x={380} y={42}>Sublimation</ArrowLabel>
        <path d="M 615 225 C 590 315, 170 315, 145 225" fill="none" stroke="#0EA5E9" strokeWidth="5" markerEnd="url(#arrow-blue)" />
        <ArrowLabel x={380} y={335}>Condensation solide</ArrowLabel>

        <rect x="250" y="265" width="260" height="44" rx="18" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="2" />
        <text x="380" y="292" textAnchor="middle" fontSize="16" fontWeight="700" fill="#9A3412">
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
      <svg viewBox="0 0 760 330" className="h-auto w-full" role="img" aria-label="Comparaison entre un circuit en serie et un circuit en derivation">
        <rect x="18" y="18" width="324" height="294" rx="24" fill="#F5F3FF" stroke="#C4B5FD" strokeWidth="3" />
        <rect x="418" y="18" width="324" height="294" rx="24" fill="#ECFEFF" stroke="#67E8F9" strokeWidth="3" />

        <text x="180" y="52" textAnchor="middle" fontSize="24" fontWeight="700" fill="#6D28D9">Circuit en serie</text>
        <text x="580" y="52" textAnchor="middle" fontSize="24" fontWeight="700" fill="#0F766E">Circuit en derivation</text>

        <path d="M 70 240 H 90 V 95 H 125 M 155 95 H 215 M 245 95 H 305 V 240 H 70" fill="none" stroke="#44403C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="125" y1="78" x2="125" y2="112" stroke="#44403C" strokeWidth="4" />
        <line x1="140" y1="70" x2="140" y2="120" stroke="#44403C" strokeWidth="6" />
        <circle cx="230" cy="95" r="20" fill="white" stroke="#7C3AED" strokeWidth="4" />
        <path d="M 217 108 L 243 82 M 217 82 L 243 108" stroke="#7C3AED" strokeWidth="4" strokeLinecap="round" />
        <circle cx="180" cy="95" r="7" fill="#F59E0B" />
        <circle cx="195" cy="95" r="7" fill="#F59E0B" />

        <text x="180" y="272" textAnchor="middle" fontSize="16" fill="#5B21B6">Une seule boucle</text>
        <text x="180" y="294" textAnchor="middle" fontSize="16" fill="#5B21B6">
          {"Si la lampe s'arrete, tout s'arrete"}
        </text>

        <path d="M 470 240 H 490 V 95 H 525 M 555 95 H 640 V 240 H 470" fill="none" stroke="#44403C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="525" y1="78" x2="525" y2="112" stroke="#44403C" strokeWidth="4" />
        <line x1="540" y1="70" x2="540" y2="120" stroke="#44403C" strokeWidth="6" />
        <path d="M 555 95 V 140 H 640 M 555 190 H 640 V 95" fill="none" stroke="#44403C" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="597" cy="140" r="18" fill="white" stroke="#0891B2" strokeWidth="4" />
        <path d="M 585 151 L 609 129 M 585 129 L 609 151" stroke="#0891B2" strokeWidth="4" strokeLinecap="round" />
        <circle cx="597" cy="190" r="18" fill="white" stroke="#0891B2" strokeWidth="4" />
        <path d="M 585 201 L 609 179 M 585 179 L 609 201" stroke="#0891B2" strokeWidth="4" strokeLinecap="round" />

        <text x="580" y="272" textAnchor="middle" fontSize="16" fill="#115E59">Plusieurs branches</text>
        <text x="580" y="294" textAnchor="middle" fontSize="16" fill="#115E59">
          {"Une branche peut s'arreter sans couper les autres"}
        </text>
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
      <svg viewBox="0 0 760 330" className="h-auto w-full" role="img" aria-label="Schema du controle hormonal de la reproduction">
        <defs>
          <marker id="arrow-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#57534E" />
          </marker>
        </defs>

        <rect x="255" y="24" width="250" height="72" rx="24" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="3" />
        <text x="380" y="58" textAnchor="middle" fontSize="30" fontWeight="700" fill="#92400E">Hypophyse</text>
        <text x="380" y="82" textAnchor="middle" fontSize="16" fill="#B45309">glande du cerveau</text>

        <path d="M 380 96 V 130" stroke="#57534E" strokeWidth="5" markerEnd="url(#arrow-dark)" />

        <rect x="60" y="145" width="260" height="72" rx="24" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="3" />
        <rect x="440" y="145" width="260" height="72" rx="24" fill="#FCE7F3" stroke="#F472B6" strokeWidth="3" />

        <text x="190" y="178" textAnchor="middle" fontSize="28" fontWeight="700" fill="#1D4ED8">Testicules</text>
        <text x="190" y="200" textAnchor="middle" fontSize="16" fill="#2563EB">garcon</text>
        <text x="570" y="178" textAnchor="middle" fontSize="28" fontWeight="700" fill="#BE185D">Ovaires</text>
        <text x="570" y="200" textAnchor="middle" fontSize="16" fill="#DB2777">fille</text>

        <path d="M 320 182 H 440" stroke="#57534E" strokeWidth="5" markerEnd="url(#arrow-dark)" />
        <path d="M 440 182 H 320" stroke="#57534E" strokeWidth="5" markerEnd="url(#arrow-dark)" />

        <text x="380" y="170" textAnchor="middle" fontSize="15" fontWeight="700" fill="#44403C">
          {"hormones envoyees par l'hypophyse"}
        </text>

        <path d="M 190 217 V 254" stroke="#2563EB" strokeWidth="5" markerEnd="url(#arrow-dark)" />
        <path d="M 570 217 V 254" stroke="#DB2777" strokeWidth="5" markerEnd="url(#arrow-dark)" />

        <rect x="45" y="255" width="290" height="48" rx="20" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
        <rect x="425" y="255" width="290" height="48" rx="20" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="2" />
        <text x="190" y="284" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1D4ED8">
          {"Testosterone -> puberte masculine"}
        </text>
        <text x="570" y="284" textAnchor="middle" fontSize="18" fontWeight="700" fill="#BE185D">
          {"Oestrogenes -> puberte feminine + cycle"}
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
      <svg viewBox="0 0 760 320" className="h-auto w-full" role="img" aria-label="Frise simple du cycle feminin sur 28 jours">
        <line x1="70" y1="210" x2="690" y2="210" stroke="#78716C" strokeWidth="6" strokeLinecap="round" />

        <rect x="70" y="135" width="110" height="50" rx="18" fill="#FFE4E6" stroke="#FB7185" strokeWidth="3" />
        <rect x="190" y="135" width="210" height="50" rx="18" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="3" />
        <rect x="410" y="120" width="95" height="80" rx="22" fill="#DCFCE7" stroke="#4ADE80" strokeWidth="3" />
        <rect x="515" y="135" width="175" height="50" rx="18" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="3" />

        <text x="125" y="166" textAnchor="middle" fontSize="18" fontWeight="700" fill="#BE123C">J1-J5 Regles</text>
        <text x="295" y="166" textAnchor="middle" fontSize="18" fontWeight="700" fill="#92400E">J6-J13 Endometre se reforme</text>
        <text x="458" y="167" textAnchor="middle" fontSize="18" fontWeight="700" fill="#166534">J14 Ovulation</text>
        <text x="603" y="166" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1D4ED8">J15-J28 Attente</text>

        <circle cx="70" cy="210" r="10" fill="#E11D48" />
        <circle cx="458" cy="210" r="10" fill="#16A34A" />
        <circle cx="690" cy="210" r="10" fill="#2563EB" />

        <text x="70" y="240" textAnchor="middle" fontSize="15" fontWeight="700" fill="#9F1239">Jour 1</text>
        <text x="458" y="240" textAnchor="middle" fontSize="15" fontWeight="700" fill="#166534">Jour 14 env.</text>
        <text x="690" y="240" textAnchor="middle" fontSize="15" fontWeight="700" fill="#1D4ED8">Jour 28</text>

        <path d="M 458 96 C 520 48, 620 48, 675 96" fill="none" stroke="#FB7185" strokeWidth="4" strokeDasharray="8 6" />
        <text x="570" y="62" textAnchor="middle" fontSize="16" fontWeight="700" fill="#BE123C">
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
      <svg viewBox="0 0 760 240" className="h-auto w-full" role="img" aria-label="Schema du trajet des spermatozoides de la fabrication a la sortie">
        <defs>
          <marker id="arrow-flow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#0F766E" />
          </marker>
        </defs>

        <rect x="20" y="75" width="125" height="72" rx="24" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="3" />
        <rect x="165" y="75" width="125" height="72" rx="24" fill="#E0F2FE" stroke="#38BDF8" strokeWidth="3" />
        <rect x="310" y="75" width="125" height="72" rx="24" fill="#DCFCE7" stroke="#4ADE80" strokeWidth="3" />
        <rect x="455" y="75" width="145" height="72" rx="24" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="3" />
        <rect x="620" y="75" width="120" height="72" rx="24" fill="#FCE7F3" stroke="#F472B6" strokeWidth="3" />

        <text x="82" y="107" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1D4ED8">Testicule</text>
        <text x="82" y="128" textAnchor="middle" fontSize="13" fill="#2563EB">fabrication</text>
        <text x="227" y="107" textAnchor="middle" fontSize="18" fontWeight="700" fill="#0369A1">Epididyme</text>
        <text x="227" y="128" textAnchor="middle" fontSize="13" fill="#0284C7">maturation</text>
        <text x="372" y="107" textAnchor="middle" fontSize="18" fontWeight="700" fill="#15803D">Canal deferent</text>
        <text x="372" y="128" textAnchor="middle" fontSize="13" fill="#16A34A">transport</text>
        <text x="527" y="107" textAnchor="middle" fontSize="18" fontWeight="700" fill="#B45309">Prostate +</text>
        <text x="527" y="128" textAnchor="middle" fontSize="18" fontWeight="700" fill="#B45309">vesicules</text>
        <text x="680" y="107" textAnchor="middle" fontSize="18" fontWeight="700" fill="#BE185D">Uretre</text>
        <text x="680" y="128" textAnchor="middle" fontSize="13" fill="#DB2777">sortie</text>

        <path d="M 145 111 H 165" stroke="#0F766E" strokeWidth="5" markerEnd="url(#arrow-flow)" />
        <path d="M 290 111 H 310" stroke="#0F766E" strokeWidth="5" markerEnd="url(#arrow-flow)" />
        <path d="M 435 111 H 455" stroke="#0F766E" strokeWidth="5" markerEnd="url(#arrow-flow)" />
        <path d="M 600 111 H 620" stroke="#0F766E" strokeWidth="5" markerEnd="url(#arrow-flow)" />

        <text x="380" y="192" textAnchor="middle" fontSize="18" fontWeight="700" fill="#0F766E">
          Sperme = spermatozoides + liquide seminal
        </text>
      </svg>
    </DiagramFrame>
  );
}
