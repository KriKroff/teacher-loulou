"use client";

import Link from "next/link";

interface Props {
  quizSlug: string;
  level: string;
  subject: string;
}

// ─── Color palettes per section ──────────────────────────────────────────────
const SECTION_COLORS = [
  { border: "#0E7490", bg: "#E0F5FA", text: "#0E7490", label: "cyan" },    // 1 – États matière
  { border: "#1A5FA8", bg: "#E3EEF9", text: "#1A5FA8", label: "blue" },    // 2 – Propriétés gaz
  { border: "#6B3FA0", bg: "#EEE6F8", text: "#6B3FA0", label: "purple" },  // 3 – Composition de l'air
  { border: "#1A7A52", bg: "#E2F4EC", text: "#1A7A52", label: "green" },   // 4 – Pression atmosphérique
  { border: "#B85C00", bg: "#FDF0E3", text: "#B85C00", label: "orange" },  // 5 – Masse d'un gaz
  { border: "#8B4A2B", bg: "#F8E9DC", text: "#8B4A2B", label: "brown" },   // 6 – Déplacement eau
  { border: "#6E5A3D", bg: "#F6F0E4", text: "#6E5A3D", label: "sand" },     // 7 – Mots-clés
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({
  index,
  emoji,
  title,
}: {
  index: number;
  emoji: string;
  title: string;
}) {
  const c = SECTION_COLORS[index];
  return (
    <div
      style={{
        borderLeft: `5px solid ${c.border}`,
        backgroundColor: c.bg,
        padding: "14px 18px",
        borderRadius: "0 12px 12px 0",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: c.text,
          marginBottom: "2px",
        }}
      >
        {emoji} Partie {index + 1}
      </div>
      <div
        style={{
          fontSize: "20px",
          fontWeight: 800,
          color: c.text,
          lineHeight: 1.2,
        }}
      >
        {title}
      </div>
    </div>
  );
}

function Retenir({
  color,
  children,
}: {
  color: { border: string; bg: string; text: string };
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderLeft: `4px solid ${color.border}`,
        backgroundColor: color.bg,
        borderRadius: "0 10px 10px 0",
        padding: "12px 16px",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: color.text,
          marginBottom: "4px",
        }}
      >
        💡 À RETENIR
      </div>
      <div style={{ fontSize: "14px", color: "#2D2D2D", lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

function ColoredTable({
  headers,
  rows,
  headerBg,
  headerText,
}: {
  headers: string[];
  rows: string[][];
  headerBg: string;
  headerText: string;
}) {
  return (
    <div style={{ overflowX: "auto", marginTop: "16px", marginBottom: "16px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  backgroundColor: headerBg,
                  color: headerText,
                  padding: "10px 14px",
                  textAlign: "left",
                  fontWeight: 700,
                  borderBottom: `2px solid ${headerText}`,
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{ backgroundColor: ri % 2 === 0 ? "#FAFAFA" : "#FFFFFF" }}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: "10px 14px",
                    borderBottom: "1px solid #E8E0D8",
                    color: "#2D2D2D",
                    verticalAlign: "top",
                  }}
                  dangerouslySetInnerHTML={{ __html: cell }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NavBanner({ quizHref }: { quizHref: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "8px",
      }}
    >
      <Link
        href={quizHref}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: "#0E7490",
          color: "#FFFFFF",
          padding: "10px 20px",
          borderRadius: "12px",
          fontWeight: 700,
          fontSize: "14px",
          textDecoration: "none",
        }}
      >
        📝 Passer au quiz →
      </Link>
    </div>
  );
}

// ─── Diagramme états de la matière ───────────────────────────────────────────

function EtatsMatiereSchema() {
  const states = [
    {
      emoji: "🧊",
      name: "Solide",
      color: "#0E7490",
      bg: "#E0F5FA",
      desc: "Volume et forme fixes",
      particles: "Particules très serrées et ordonnées",
    },
    {
      emoji: "💧",
      name: "Liquide",
      color: "#1A5FA8",
      bg: "#E3EEF9",
      desc: "Volume fixe, forme variable",
      particles: "Particules proches mais mobiles",
    },
    {
      emoji: "💨",
      name: "Gaz",
      color: "#6B3FA0",
      bg: "#EEE6F8",
      desc: "Volume et forme variables",
      particles: "Particules espacées et libres",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "12px",
        marginBottom: "16px",
      }}
    >
      {states.map((s) => (
        <div
          key={s.name}
          style={{
            borderLeft: `4px solid ${s.color}`,
            backgroundColor: s.bg,
            borderRadius: "0 12px 12px 0",
            padding: "14px 16px",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              lineHeight: 1,
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            {s.emoji}
          </div>
          <div
            style={{
              fontWeight: 800,
              color: s.color,
              fontSize: "16px",
              textAlign: "center",
              marginBottom: "6px",
            }}
          >
            {s.name}
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "#2D2D2D",
              fontWeight: 600,
              textAlign: "center",
              marginBottom: "6px",
            }}
          >
            {s.desc}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#555",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {s.particles}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Schéma déplacement d'eau ─────────────────────────────────────────────────

function DeplacementEauSchema() {
  const steps = [
    {
      num: "1",
      icon: "🧪",
      title: "Préparer",
      text: "Remplir un tube à essais d'eau. Le retourner dans une cuve remplie d'eau.",
    },
    {
      num: "2",
      icon: "⚗️",
      title: "Réaction",
      text: "Déclencher la réaction chimique qui produit le gaz.",
    },
    {
      num: "3",
      icon: "🌬️",
      title: "Acheminer",
      text: "Un tuyau amène le gaz produit jusqu'au tube retourné.",
    },
    {
      num: "4",
      icon: "💧",
      title: "Collecter",
      text: "Le gaz entre par le bas et chasse l'eau hors du tube. Le gaz s'accumule dans le tube.",
    },
  ];

  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "10px",
        }}
      >
        {steps.map((s, i) => (
          <div
            key={s.num}
            style={{
              backgroundColor: i % 2 === 0 ? "#E2F4EC" : "#E0F5FA",
              borderRadius: "12px",
              padding: "14px",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                textAlign: "center",
                marginBottom: "6px",
              }}
            >
              {s.icon}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "6px",
              }}
            >
              <span
                style={{
                  backgroundColor: "#1A7A52",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {s.num}
              </span>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "14px",
                  color: "#1A7A52",
                }}
              >
                {s.title}
              </span>
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "#2D2D2D",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompositionAirSchema() {
  const parts = [
    {
      name: "Diazote (N₂)",
      percent: "78 %",
      width: "78%",
      color: "#1A5FA8",
      bg: "#E3EEF9",
    },
    {
      name: "Dioxygène (O₂)",
      percent: "21 %",
      width: "21%",
      color: "#1A7A52",
      bg: "#E2F4EC",
    },
    {
      name: "Autres gaz (argon, CO₂...)",
      percent: "1 %",
      width: "1%",
      color: "#B85C00",
      bg: "#FDF0E3",
    },
  ];

  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        style={{
          backgroundColor: "#FAFAFA",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          height: "32px",
          border: "1px solid #E8E0D8",
        }}
      >
        {parts.map((p) => (
          <div
            key={p.name}
            style={{
              width: p.width,
              backgroundColor: p.color,
              minWidth: p.width === "1%" ? "8px" : undefined,
            }}
            aria-label={`${p.name}: ${p.percent}`}
          />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "10px",
          marginTop: "12px",
        }}
      >
        {parts.map((p) => (
          <div
            key={`${p.name}-legend`}
            style={{
              backgroundColor: p.bg,
              borderLeft: `4px solid ${p.color}`,
              borderRadius: "0 10px 10px 0",
              padding: "10px 12px",
            }}
          >
            <div style={{ fontWeight: 800, color: p.color, fontSize: "14px" }}>
              {p.percent}
            </div>
            <div style={{ fontSize: "13px", color: "#2D2D2D", lineHeight: 1.5 }}>
              {p.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PressionSchema() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "12px",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          backgroundColor: "#E2F4EC",
          borderLeft: "4px solid #1A7A52",
          borderRadius: "0 12px 12px 0",
          padding: "14px 16px",
        }}
      >
        <div style={{ fontSize: "24px", marginBottom: "6px" }}>🌍</div>
        <div style={{ fontWeight: 800, color: "#1A7A52", fontSize: "15px", marginBottom: "6px" }}>
          Pression atmosphérique
        </div>
        <p style={{ fontSize: "13px", margin: 0, lineHeight: 1.6 }}>
          C&apos;est la force exercée par l&apos;air de l&apos;atmosphère sur toutes les surfaces.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#FDF0E3",
          borderLeft: "4px solid #B85C00",
          borderRadius: "0 12px 12px 0",
          padding: "14px 16px",
        }}
      >
        <div style={{ fontSize: "24px", marginBottom: "6px" }}>📉</div>
        <div style={{ fontWeight: 800, color: "#B85C00", fontSize: "15px", marginBottom: "6px" }}>
          Variation avec l&apos;altitude
        </div>
        <p style={{ fontSize: "13px", margin: 0, lineHeight: 1.6 }}>
          Plus on monte en altitude, plus la pression atmosphérique diminue car il y a moins d&apos;air au-dessus.
        </p>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function PCMasseGazFiche({ quizSlug, level, subject }: Props) {
  const quizHref = `/${level}/${subject}/${quizSlug}`;

  return (
    <div
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        fontFamily: "inherit",
        color: "#2D2D2D",
        lineHeight: 1.8,
      }}
    >
      {/* ── Titre ── */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#0E7490",
            marginBottom: "4px",
          }}
        >
          ⚗️ Chapitre IV — Physique-Chimie 4ème
        </div>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 900,
            color: "#2D2D2D",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          La masse d&apos;un gaz
        </h1>
        <p style={{ fontSize: "14px", color: "#666", marginTop: "6px" }}>
          Fiche de révision complète — 7 parties
        </p>
      </div>

      {/* ── Nav banner ── */}
      <NavBanner quizHref={quizHref} />

      {/* ══════════════════════════════════════════════════
          PARTIE 1 — Les états de la matière
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader index={0} emoji="🔬" title="Les états de la matière" />

        <p style={{ fontSize: "15px", marginBottom: "12px" }}>
          La matière peut exister sous <strong>trois états physiques</strong>{" "}
          différents. Un même corps (comme l&apos;eau) peut changer d&apos;état
          selon la température et la pression.
        </p>

        <EtatsMatiereSchema />

        <Retenir color={SECTION_COLORS[0]}>
          <strong>3 états : solide (forme et volume fixes) → liquide (volume fixe, forme variable) → gaz (volume et forme variables).</strong>
          <br />
          L&apos;eau en est le meilleur exemple : glace ❄️ / eau liquide 💧 / vapeur d&apos;eau 💨
        </Retenir>

        <ColoredTable
          headerBg={SECTION_COLORS[0].bg}
          headerText={SECTION_COLORS[0].text}
          headers={["État", "Forme", "Volume", "Compressible ?"]}
          rows={[
            ["<strong>Solide</strong>", "Fixe", "Fixe", "Non"],
            ["<strong>Liquide</strong>", "Variable (prend la forme du récipient)", "Fixe", "Pratiquement non"],
            ["<strong>Gaz</strong>", "Variable (occupe tout l'espace)", "Variable", "Oui, facilement"],
          ]}
        />
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 2 — Les propriétés des gaz
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader index={1} emoji="💨" title="Les propriétés des gaz" />

        <p style={{ fontSize: "15px", marginBottom: "12px" }}>
          Les gaz ont des propriétés très particulières qui les distinguent des
          solides et des liquides.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "12px",
            marginBottom: "16px",
          }}
        >
          {[
            {
              icon: "🗜️",
              title: "Compressibilité",
              text: "On peut réduire le volume d'un gaz en augmentant la pression. C'est ce principe qui permet de remplir les bouteilles de plongée ou les pneus.",
            },
            {
              icon: "🌊",
              title: "Expansibilité",
              text: "Un gaz se dilate pour occuper tout l'espace disponible. Si on ouvre un flacon de parfum, les molécules se répandent dans toute la pièce.",
            },
            {
              icon: "⚖️",
              title: "Masse",
              text: "Comme toute la matière, l'air et les gaz ont une masse. On peut peser un gaz avec une balance très précise.",
            },
          ].map((prop) => (
            <div
              key={prop.title}
              style={{
                backgroundColor: "#E3EEF9",
                borderLeft: "4px solid #1A5FA8",
                borderRadius: "0 12px 12px 0",
                padding: "14px 16px",
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "6px" }}>
                {prop.icon}
              </div>
              <div
                style={{
                  fontWeight: 800,
                  color: "#1A5FA8",
                  fontSize: "15px",
                  marginBottom: "6px",
                }}
              >
                {prop.title}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2D2D2D",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {prop.text}
              </p>
            </div>
          ))}
        </div>

        <Retenir color={SECTION_COLORS[1]}>
          <strong>Un gaz est compressible + expansible + a une masse.</strong>
          <br />
          Un liquide est incompressible mais prend la forme de son récipient.
          Un solide est incompressible et garde sa forme.
        </Retenir>
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 3 — Composition de l'air
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader index={2} emoji="🌬️" title="La composition de l'air" />

        <p style={{ fontSize: "15px", marginBottom: "12px" }}>
          L&apos;air est un <strong>mélange de gaz</strong>. Il ne contient pas
          que du dioxygène.
        </p>

        <CompositionAirSchema />

        <ColoredTable
          headerBg={SECTION_COLORS[2].bg}
          headerText={SECTION_COLORS[2].text}
          headers={["Gaz principal", "Proportion", "Rôle"]}
          rows={[
            [
              "<strong>Diazote (N₂)</strong>",
              "≈ 78 %",
              "Gaz majoritaire de l'air, peu réactif.",
            ],
            [
              "<strong>Dioxygène (O₂)</strong>",
              "≈ 21 %",
              "Indispensable à la respiration et à la combustion.",
            ],
            [
              "<strong>Autres gaz</strong>",
              "≈ 1 %",
              "Argon, CO₂, vapeur d'eau... en petites quantités.",
            ],
          ]}
        />

        <Retenir color={SECTION_COLORS[2]}>
          <strong>L&apos;air n&apos;est pas un corps pur.</strong>
          <br />
          C&apos;est un mélange composé surtout de diazote (78 %) et de
          dioxygène (21 %).
        </Retenir>
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 4 — La pression atmosphérique
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader index={3} emoji="🧭" title="La pression atmosphérique" />

        <p style={{ fontSize: "15px", marginBottom: "12px" }}>
          La pression atmosphérique correspond à la force exercée par l&apos;air
          sur les objets. Au niveau de la mer, elle vaut environ 1 bar.
        </p>

        <PressionSchema />

        <ColoredTable
          headerBg={SECTION_COLORS[3].bg}
          headerText={SECTION_COLORS[3].text}
          headers={["Unité", "Équivalence", "Utilisation courante"]}
          rows={[
            ["<strong>bar</strong>", "1 bar", "Valeur pratique en physique-chimie scolaire"],
            ["<strong>pascal (Pa)</strong>", "1 bar = 100 000 Pa", "Unité SI de pression"],
            ["<strong>hectopascal (hPa)</strong>", "1 bar = 1000 hPa", "Météo (pression atmosphérique)"],
          ]}
        />

        <Retenir color={SECTION_COLORS[3]}>
          <strong>Conversions à connaître :</strong>
          <br />
          1 bar = 100 000 Pa = 1000 hPa
          <br />
          1013 hPa ≈ 1,013 bar (pression atmosphérique moyenne)
        </Retenir>
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 5 — La masse d'un gaz
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader index={4} emoji="⚖️" title="La masse d'un gaz" />

        <p style={{ fontSize: "15px", marginBottom: "12px" }}>
          Comme toute la matière, <strong>l&apos;air est pesant</strong>. Dans
          les conditions standard de température et de pression, la masse de
          l&apos;air peut être mesurée.
        </p>

        {/* Conditions standard highlight */}
        <div
          style={{
            backgroundColor: "#EEE6F8",
            borderRadius: "16px",
            padding: "20px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#6B3FA0",
              marginBottom: "12px",
            }}
          >
            📐 Conditions standard
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "12px 20px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
            >
              <div style={{ fontSize: "28px" }}>🌡️</div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "20px",
                  color: "#6B3FA0",
                }}
              >
                25 °C
              </div>
              <div style={{ fontSize: "12px", color: "#666" }}>Température</div>
            </div>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "12px 20px",
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
              }}
            >
              <div style={{ fontSize: "28px" }}>🔵</div>
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "20px",
                  color: "#6B3FA0",
                }}
              >
                1 bar
              </div>
              <div style={{ fontSize: "12px", color: "#666" }}>Pression</div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#6B3FA0",
              color: "white",
              borderRadius: "12px",
              padding: "14px 20px",
              fontSize: "20px",
              fontWeight: 900,
              letterSpacing: "0.02em",
            }}
          >
            1 litre d&apos;air ≈ 1,3 g
          </div>
        </div>

        <p style={{ fontSize: "14px", marginBottom: "12px" }}>
          Cette valeur s&apos;appelle la <strong>masse volumique</strong> de
          l&apos;air. Elle indique la masse d&apos;un litre de gaz dans des
          conditions données.
        </p>

          <Retenir color={SECTION_COLORS[4]}>
          <strong>Formule :</strong> masse = masse volumique × volume
          <br />
          Exemple : 3 L d&apos;air = 3 × 1,3 g = <strong>3,9 g</strong>
          <br />
          <br />
          <strong>Important :</strong> la masse volumique dépend de la
          température et de la pression. On précise toujours les conditions !
        </Retenir>

        <ColoredTable
          headerBg={SECTION_COLORS[4].bg}
          headerText={SECTION_COLORS[4].text}
          headers={["Volume d'air", "Calcul", "Masse"]}
          rows={[
            ["1 L", "1 × 1,3 g", "<strong>1,3 g</strong>"],
            ["2 L", "2 × 1,3 g", "<strong>2,6 g</strong>"],
            ["5 L", "5 × 1,3 g", "<strong>6,5 g</strong>"],
            ["10 L", "10 × 1,3 g", "<strong>13 g</strong>"],
          ]}
        />
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 6 — La technique du déplacement d'eau
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader
          index={5}
          emoji="🧪"
          title="La technique du déplacement d'eau"
        />

        <p style={{ fontSize: "15px", marginBottom: "16px" }}>
          Pour récupérer un gaz produit lors d&apos;une réaction chimique, on
          utilise la technique du <strong>déplacement d&apos;eau</strong>. Le
          gaz chasse l&apos;eau hors d&apos;un tube retourné dans une cuve.
        </p>

        <DeplacementEauSchema />

        <Retenir color={SECTION_COLORS[5]}>
          <strong>Technique du déplacement d&apos;eau :</strong> tube rempli d&apos;eau → retourné dans cuve → gaz entre par le bas → chasse l&apos;eau → gaz collecté dans le tube.
          <br />
          <br />
          ✅ Avantages : permet de <strong>collecter</strong> et de{" "}
          <strong>mesurer le volume</strong> du gaz produit.
        </Retenir>

        {/* Matériel nécessaire */}
        <div
          style={{
            backgroundColor: "#E2F4EC",
            borderRadius: "12px",
            padding: "16px",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: "#1A7A52",
              marginBottom: "10px",
              fontSize: "14px",
            }}
          >
            🔧 Matériel nécessaire
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              fontSize: "14px",
              lineHeight: 2,
              color: "#2D2D2D",
            }}
          >
            <li>Un erlenmeyer ou un tube à dégagement (pour la réaction)</li>
            <li>Un tuyau souple (pour acheminer le gaz)</li>
            <li>Une cuve remplie d&apos;eau</li>
            <li>
              Un tube à essais (ou éprouvette graduée) rempli d&apos;eau et
              retourné dans la cuve
            </li>
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 7 — Mots-clés
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader index={6} emoji="📖" title="Les mots-clés à connaître" />

        <Retenir color={SECTION_COLORS[6]}>
          <strong>Masse volumique ≠ masse.</strong> La masse volumique est la
          masse <em>par litre</em>. La masse totale dépend du volume.
        </Retenir>

        <ColoredTable
          headerBg={SECTION_COLORS[6].bg}
          headerText={SECTION_COLORS[6].text}
          headers={["Mot-clé", "Définition"]}
          rows={[
            [
              "<strong>Matière</strong>",
              "Tout ce qui a une masse et occupe un espace.",
            ],
            [
              "<strong>État physique</strong>",
              "Forme sous laquelle existe la matière : solide, liquide ou gazeux.",
            ],
            [
              "<strong>Gaz</strong>",
              "État de la matière sans forme ni volume propre. Les molécules sont très espacées.",
            ],
            [
              "<strong>Compressibilité</strong>",
              "Propriété d'un gaz : son volume peut être réduit en augmentant la pression.",
            ],
            [
              "<strong>Masse volumique</strong>",
              "Masse d'un litre de gaz dans des conditions données. Unité : g/L.",
            ],
            [
              "<strong>Conditions standard</strong>",
              "Conditions de référence : température = 25 °C, pression = 1 bar.",
            ],
            [
              "<strong>Déplacement d'eau</strong>",
              "Technique pour collecter un gaz : le gaz chasse l'eau d'un tube retourné dans une cuve.",
            ],
            [
              "<strong>Pression</strong>",
              "Force exercée par un gaz sur les parois de son récipient. Unité : bar ou Pa.",
            ],
          ]}
        />
      </section>

      {/* ── Bottom nav banner ── */}
      <NavBanner quizHref={quizHref} />
    </div>
  );
}
