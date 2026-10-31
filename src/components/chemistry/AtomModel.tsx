/**
 * Simple atom / ion model, drawn like in French 3e textbooks:
 * a nucleus labelled "Z+" inside a dotted electron cloud with one dot per electron.
 * Pure SVG — usable from MDX fiches and from quiz questions.
 */

interface AtomModelProps {
  /** Atomic number = number of protons (shown as "Z+" in the nucleus). */
  z: number;
  /** Number of electrons drawn around the nucleus. */
  electrons: number;
  /** Optional caption under the drawing. */
  label?: string;
  /** Rendered width/height in px (default 160). */
  size?: number;
  /** Color of the nucleus (default warm grey). */
  nucleusColor?: string;
}

const CENTER = 100;

function electronPositions(n: number): { x: number; y: number }[] {
  if (n <= 0) return [];
  // One ring up to 8 electrons, otherwise two rings (≈ 40 % inside)
  const rings = n <= 8 ? [n] : [Math.round(n * 0.4), n - Math.round(n * 0.4)];
  const radii = rings.length === 1 ? [58] : [50, 74];
  const points: { x: number; y: number }[] = [];
  rings.forEach((count, ringIdx) => {
    const offset = ringIdx * (Math.PI / count) - Math.PI / 2;
    for (let i = 0; i < count; i++) {
      const angle = offset + (2 * Math.PI * i) / count;
      points.push({
        x: CENTER + radii[ringIdx] * Math.cos(angle),
        y: CENTER + radii[ringIdx] * Math.sin(angle),
      });
    }
  });
  return points;
}

export function AtomModel({ z, electrons, label, size = 160, nucleusColor = "#E7E5E4" }: AtomModelProps) {
  const points = electronPositions(electrons);
  return (
    <figure className="inline-flex flex-col items-center gap-1">
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        role="img"
        aria-label={`Noyau ${z}+ entouré de ${electrons} électron${electrons > 1 ? "s" : ""}`}
        className="max-w-full"
      >
        <defs>
          <radialGradient id="atom-cloud" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFF7ED" stopOpacity="0.5" />
          </radialGradient>
        </defs>
        <circle cx={CENTER} cy={CENTER} r={92} fill="url(#atom-cloud)" stroke="#78716C" strokeWidth="2" strokeDasharray="2 5" strokeLinecap="round" />
        <circle cx={CENTER} cy={CENTER} r={30} fill={nucleusColor} stroke="#44403C" strokeWidth="2.5" />
        <text x={CENTER} y={CENTER + 7} textAnchor="middle" fontSize="20" fontWeight="800" fill="#2D2D2D">
          {z}+
        </text>
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={5} fill="#1C1917" />
        ))}
      </svg>
      {label && <figcaption className="text-center text-sm font-bold text-warm-800">{label}</figcaption>}
    </figure>
  );
}
