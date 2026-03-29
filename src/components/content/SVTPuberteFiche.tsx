"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

interface Props {
  quizSlug: string;
  level: string;
  subject: string;
}

// ─── Color palettes per section ─────────────────────────────────────────────
const SECTION_COLORS = [
  { border: "#6B3FA0", bg: "#EEE6F8", text: "#6B3FA0", label: "purple" },   // 1
  { border: "#1A5FA8", bg: "#E3EEF9", text: "#1A5FA8", label: "blue" },     // 2
  { border: "#1A7A52", bg: "#E2F4EC", text: "#1A7A52", label: "green" },    // 3
  { border: "#B85C00", bg: "#FDF0E3", text: "#B85C00", label: "orange" },   // 4
  { border: "#6B3FA0", bg: "#EEE6F8", text: "#6B3FA0", label: "purple" },   // 5
  { border: "#1A5FA8", bg: "#E3EEF9", text: "#1A5FA8", label: "blue" },     // 6
  { border: "#B85C00", bg: "#FDF0E3", text: "#B85C00", label: "orange" },   // 7
];

// ─── Sub-components ──────────────────────────────────────────────────────────

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
          backgroundColor: "#6B3FA0",
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

// ─── Cycle wheel ─────────────────────────────────────────────────────────────

const CYCLE_PHASES = [
  { startDay: 1,  endDay: 5,  color: "#C53030", emoji: "🩸", label: "Règles",       detail: "J1–J5" },
  { startDay: 6,  endDay: 13, color: "#C05621", emoji: "📈", label: "Folliculaire", detail: "J6–J13" },
  { startDay: 14, endDay: 14, color: "#276749", emoji: "🥚", label: "Ovulation",    detail: "J14" },
  { startDay: 15, endDay: 28, color: "#2B6CB0", emoji: "⏳", label: "Lutéale",      detail: "J15–J28" },
];

function CycleWheel() {
  const cx = 160, cy = 160;
  const outerR = 118, innerR = 72, labelR = 145;
  const total = 28;
  const deg = 360 / total;

  const toXY = (angleDeg: number, r: number) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const arcPath = (startDay: number, endDay: number) => {
    const a1 = (startDay - 1) * deg;
    const a2 = endDay * deg;
    const large = a2 - a1 > 180 ? 1 : 0;
    const p1 = toXY(a1, outerR), p2 = toXY(a2, outerR);
    const p3 = toXY(a2, innerR), p4 = toXY(a1, innerR);
    return `M${p1.x.toFixed(1)} ${p1.y.toFixed(1)} A${outerR} ${outerR} 0 ${large} 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} L${p3.x.toFixed(1)} ${p3.y.toFixed(1)} A${innerR} ${innerR} 0 ${large} 0 ${p4.x.toFixed(1)} ${p4.y.toFixed(1)}Z`;
  };

  // Day tick marks every 7 days
  const ticks = [1, 7, 14, 21];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0 8px" }}>
      <svg viewBox="0 0 320 320" style={{ width: "100%", maxWidth: "280px" }} aria-label="Roue du cycle menstruel">
        {/* Phase arcs */}
        {CYCLE_PHASES.map((p) => (
          <path key={p.label} d={arcPath(p.startDay, p.endDay)} fill={p.color} stroke="white" strokeWidth="2.5" />
        ))}

        {/* Tick marks + day labels */}
        {ticks.map((day) => {
          const angle = (day - 1) * deg;
          const tick1 = toXY(angle, outerR + 2);
          const tick2 = toXY(angle, outerR + 10);
          const lbl   = toXY(angle, labelR);
          return (
            <g key={day}>
              <line x1={tick1.x} y1={tick1.y} x2={tick2.x} y2={tick2.y} stroke="#555" strokeWidth="1.5" />
              <text x={lbl.x} y={lbl.y} textAnchor="middle" dominantBaseline="middle" fontSize="11" fontWeight="700" fill="#444">
                J{day}
              </text>
            </g>
          );
        })}

        {/* Emoji in the middle of each arc */}
        {CYCLE_PHASES.map((p) => {
          const midAngle = ((p.startDay - 1) + p.endDay) / 2 * deg;
          const { x, y } = toXY(midAngle, (outerR + innerR) / 2);
          return (
            <text key={p.label + "e"} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="15">
              {p.emoji}
            </text>
          );
        })}

        {/* Center */}
        <circle cx={cx} cy={cy} r={innerR - 3} fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
        <text x={cx} y={cy - 10} textAnchor="middle" dominantBaseline="middle" fontSize="22">🔄</text>
        <text x={cx} y={cy + 10} textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="800" fill="#2D2D2D">28 jours</text>
      </svg>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", justifyContent: "center", marginTop: "10px" }}>
        {CYCLE_PHASES.map((p) => (
          <div key={p.label} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12px" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "2px", backgroundColor: p.color, flexShrink: 0 }} />
            <span style={{ fontWeight: 700, color: p.color }}>{p.emoji} {p.label}</span>
            <span style={{ color: "#666" }}>({p.detail})</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        cursor: "zoom-out",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "90dvh",
          borderRadius: "8px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
          objectFit: "contain",
        }}
      />
      <button
        onClick={onClose}
        aria-label="Fermer"
        style={{
          position: "absolute", top: "16px", right: "16px",
          background: "rgba(255,255,255,0.15)", border: "none",
          color: "white", borderRadius: "50%",
          width: "40px", height: "40px",
          fontSize: "20px", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        ✕
      </button>
    </div>,
    document.body
  );
}

// ─── Main component ──────────────────────────────────────────────────────────

export function SVTPuberteFiche({ quizSlug, level, subject }: Props) {
  const quizHref = `/${level}/${subject}/${quizSlug}`;
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

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
      {/* ── Title ── */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#1A7A52",
            marginBottom: "4px",
          }}
        >
          🌿 Chapitre 6 — SVT 4ème
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
          La puberté et la reproduction humaine
        </h1>
        <p style={{ fontSize: "14px", color: "#666", marginTop: "6px" }}>
          Fiche de révision complète — 7 parties
        </p>
      </div>

      {/* ── Top nav banner ── */}
      <NavBanner quizHref={quizHref} />

      {/* ══════════════════════════════════════════════════
          PARTIE 1 — La puberté
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader index={0} emoji="🌱" title="La puberté" />

        <p style={{ fontSize: "15px", marginBottom: "12px" }}>
          La puberté, c&apos;est la période où le corps change. L&apos;appareil
          reproducteur devient fonctionnel. C&apos;est déclenché par les{" "}
          <strong>hormones</strong>, vers 10–14 ans.
        </p>

        {/* Two-column garçon / fille */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "14px",
            marginBottom: "16px",
          }}
        >
          {/* Garçon */}
          <div
            style={{
              borderLeft: "4px solid #1A5FA8",
              backgroundColor: "#E3EEF9",
              borderRadius: "0 12px 12px 0",
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                color: "#1A5FA8",
                marginBottom: "8px",
                fontSize: "15px",
              }}
            >
              🧒 Garçon
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                fontSize: "14px",
                lineHeight: 2,
                color: "#2D2D2D",
              }}
            >
              <li>Poils, muscles, mue de la voix</li>
              <li>Acné, poussée de croissance</li>
              <li>Testicules et pénis grandissent</li>
              <li>Production de sperme</li>
            </ul>
          </div>
          {/* Fille */}
          <div
            style={{
              borderLeft: "4px solid #1A7A52",
              backgroundColor: "#E2F4EC",
              borderRadius: "0 12px 12px 0",
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                fontWeight: 800,
                color: "#1A7A52",
                marginBottom: "8px",
                fontSize: "15px",
              }}
            >
              👧 Fille
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                fontSize: "14px",
                lineHeight: 2,
                color: "#2D2D2D",
              }}
            >
              <li>Poitrine, hanches s&apos;élargissent</li>
              <li>Poils, acné, poussée de croissance</li>
              <li>Ovaires et utérus grandissent</li>
              <li>Premières règles (ménarche)</li>
            </ul>
          </div>
        </div>

        <Retenir color={SECTION_COLORS[0]}>
          <strong>Puberté = hormones → corps change → appareil reproducteur fonctionnel.</strong>
        </Retenir>

        <ColoredTable
          headerBg={SECTION_COLORS[0].bg}
          headerText={SECTION_COLORS[0].text}
          headers={["Type", "Quand ?", "Exemples"]}
          rows={[
            [
              "<strong>Caractères primaires</strong>",
              "Présents dès la naissance. Grandissent à la puberté.",
              "Pénis, vagin, ovaires, testicules",
            ],
            [
              "<strong>Caractères secondaires</strong>",
              "Absents à la naissance. Apparaissent à la puberté.",
              "Poitrine, pilosité, voix grave",
            ],
          ]}
        />
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 2 — L'appareil reproducteur masculin
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader
          index={1}
          emoji="🔬"
          title="L'appareil reproducteur masculin"
        />

        <p style={{ fontSize: "15px", marginBottom: "12px" }}>
          Les testicules fabriquent des spermatozoïdes toute la vie, à partir de
          la puberté.
        </p>

        {/* Sub-heading with dashed underline */}
        <div
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: SECTION_COLORS[1].text,
            borderBottom: `2px dashed ${SECTION_COLORS[1].border}`,
            paddingBottom: "6px",
            marginBottom: "16px",
          }}
        >
          Trajet des spermatozoïdes
        </div>

        {/* Step-by-step process */}
        <div style={{ marginBottom: "20px" }}>
          {[
            {
              n: 1,
              text: "Fabrication dans les tubes séminifères",
              sub: "testicule",
            },
            {
              n: 2,
              text: "Maturation dans l'épididyme",
              sub: "→ deviennent mobiles",
            },
            { n: 3, text: "Transport dans le canal déférent", sub: "" },
            {
              n: 4,
              text: "Mélange avec le liquide séminal",
              sub: "prostate + vésicules → sperme",
            },
            {
              n: 5,
              text: "Sortie par l'urètre",
              sub: "lors de l'éjaculation",
            },
          ].map((step, i, arr) => (
            <div key={step.n}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E3EEF9",
                  borderRadius: "10px",
                  padding: "12px 14px",
                  boxShadow: "0 1px 4px rgba(26,95,168,0.07)",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: SECTION_COLORS[1].border,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: "15px",
                  }}
                >
                  {step.n}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#2D2D2D",
                    }}
                  >
                    {step.text}
                  </div>
                  {step.sub && (
                    <div
                      style={{
                        fontSize: "13px",
                        color: SECTION_COLORS[1].text,
                        marginTop: "2px",
                      }}
                    >
                      {step.sub}
                    </div>
                  )}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    color: SECTION_COLORS[1].border,
                    margin: "4px 0",
                  }}
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <Retenir color={SECTION_COLORS[1]}>
          <strong>
            Sperme = spermatozoïdes + liquide séminal.
          </strong>{" "}
          Trajet : testicule → épididyme → canal déférent → prostate → urètre.
        </Retenir>

        <ColoredTable
          headerBg={SECTION_COLORS[1].bg}
          headerText={SECTION_COLORS[1].text}
          headers={["Organe", "Rôle"]}
          rows={[
            [
              "<strong>Testicule</strong>",
              "Fabrique les spermatozoïdes (dans les tubes séminifères)",
            ],
            [
              "<strong>Épididyme</strong>",
              "Stockage + les spermatozoïdes deviennent mobiles",
            ],
            [
              "<strong>Canal déférent</strong>",
              "Transporte les spermatozoïdes vers l'urètre",
            ],
            [
              "<strong>Vésicules séminales + Prostate</strong>",
              "Produisent le liquide séminal → forme le sperme",
            ],
            [
              "<strong>Urètre</strong>",
              "Voie de sortie du sperme lors de l'éjaculation",
            ],
          ]}
        />

        {/* Schema images */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E3EEF9",
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(26,95,168,0.08)",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: SECTION_COLORS[1].text,
              fontSize: "14px",
              marginBottom: "12px",
            }}
          >
            Schémas du cours — Appareil reproducteur masculin
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              {
                src: "/images/svt/appareil-reproducteur-masculin-face.jpg",
                caption: "Vue de face",
              },
              {
                src: "/images/svt/appareil-reproducteur-masculin-coupe.jpg",
                caption: "Vue de profil en coupe",
              },
            ].map((img) => (
              <div key={img.src} style={{ textAlign: "center" }}>
                <div
                  onClick={() => setLightbox({ src: img.src, alt: img.caption })}
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4/3",
                    backgroundColor: "#F0F4F8",
                    borderRadius: "8px",
                    overflow: "hidden",
                    cursor: "zoom-in",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: SECTION_COLORS[1].text,
                    fontWeight: 600,
                    marginTop: "6px",
                  }}
                >
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 3 — L'appareil reproducteur féminin
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader
          index={2}
          emoji="🌸"
          title="L'appareil reproducteur féminin"
        />

        <p style={{ fontSize: "15px", marginBottom: "12px" }}>
          À partir de la puberté, un ovule est libéré environ tous les 28 jours :
          c&apos;est l&apos;<strong>ovulation</strong>. Ce fonctionnement
          s&apos;arrête à la ménopause, vers 50 ans.
        </p>

        <Retenir color={SECTION_COLORS[2]}>
          <strong>Fécondation = dans les trompes.</strong> Pas de fécondation →
          endomètre éliminé = règles.
        </Retenir>

        <ColoredTable
          headerBg={SECTION_COLORS[2].bg}
          headerText={SECTION_COLORS[2].text}
          headers={["Organe", "Rôle"]}
          rows={[
            [
              "<strong>Ovaires</strong>",
              "Produisent et libèrent un ovule par cycle (ovulation)",
            ],
            [
              "<strong>Trompes de Fallope</strong>",
              "Conduisent l'ovule vers l'utérus. Lieu de la fécondation.",
            ],
            [
              "<strong>Utérus</strong>",
              "Accueille l'embryon si fécondation. Sinon → règles.",
            ],
            [
              "<strong>Col de l'utérus</strong>",
              "Jonction utérus/vagin. Les spermatozoïdes passent par là.",
            ],
            ["<strong>Vagin</strong>", "Voie de copulation. Reçoit le sperme."],
          ]}
        />

        {/* Schema images */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #E2F4EC",
            borderRadius: "12px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(26,122,82,0.08)",
            marginTop: "16px",
          }}
        >
          <div
            style={{
              fontWeight: 700,
              color: SECTION_COLORS[2].text,
              fontSize: "14px",
              marginBottom: "12px",
            }}
          >
            Schémas du cours — Appareil reproducteur féminin
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "12px",
            }}
          >
            {[
              {
                src: "/images/svt/appareil-reproducteur-feminin-face.jpg",
                caption: "Vue de face",
              },
              {
                src: "/images/svt/appareil-reproducteur-feminin-coupe.jpg",
                caption: "Vue de profil en coupe",
              },
            ].map((img) => (
              <div key={img.src} style={{ textAlign: "center" }}>
                <div
                  onClick={() => setLightbox({ src: img.src, alt: img.caption })}
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4/3",
                    backgroundColor: "#F0F7F3",
                    borderRadius: "8px",
                    overflow: "hidden",
                    cursor: "zoom-in",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    unoptimized
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "12px",
                    color: SECTION_COLORS[2].text,
                    fontWeight: 600,
                    marginTop: "6px",
                  }}
                >
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 4 — Le cycle féminin
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader
          index={3}
          emoji="🔄"
          title="Le cycle féminin (~28 jours)"
        />

        <p style={{ fontSize: "15px", marginBottom: "16px" }}>
          Le cycle commence au <strong>Jour 1</strong> des règles. Il dure 28
          jours en moyenne (entre 21 et 35 jours selon les personnes).
        </p>

        <CycleWheel />

        {/* Cycle phase cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
          {[
            {
              emoji: "🩸",
              days: "Jours 1–5",
              phase: "Règles",
              detail: "Élimination de l'endomètre",
              bg: "#FAEAEA",
              border: "#A62020",
              text: "#A62020",
            },
            {
              emoji: "📈",
              days: "Jours 6–13",
              phase: "Avant ovulation",
              detail: "Endomètre se reforme",
              bg: "#FDF0E3",
              border: "#B85C00",
              text: "#B85C00",
            },
            {
              emoji: "🥚",
              days: "Jour 14 env.",
              phase: "Ovulation",
              detail: "Un ovule est libéré",
              bg: "#E2F4EC",
              border: "#1A7A52",
              text: "#1A7A52",
            },
            {
              emoji: "⏳",
              days: "Jours 15–28",
              phase: "Après ovulation",
              detail: "Attente → règles si pas de fécondation",
              bg: "#E3EEF9",
              border: "#1A5FA8",
              text: "#1A5FA8",
            },
          ].map((p) => (
            <div
              key={p.phase}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                backgroundColor: p.bg,
                border: `2px solid ${p.border}`,
                borderRadius: "12px",
                padding: "12px 16px",
              }}
            >
              <span style={{ fontSize: "22px", flexShrink: 0 }}>{p.emoji}</span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: p.text,
                      fontSize: "13px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.days}
                  </span>
                  <span
                    style={{
                      fontWeight: 800,
                      color: p.text,
                      fontSize: "15px",
                    }}
                  >
                    {p.phase}
                  </span>
                </div>
                <div style={{ fontSize: "13px", color: "#2D2D2D", marginTop: "2px" }}>
                  {p.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alert box */}
        <div
          style={{
            backgroundColor: "#FAEAEA",
            border: "2px solid #A62020",
            borderRadius: "12px",
            padding: "14px 16px",
            marginBottom: "16px",
          }}
        >
          <span style={{ fontWeight: 800, color: "#A62020", fontSize: "14px" }}>
            ⚠️ L&apos;ovulation = 14 jours AVANT les prochaines règles — pas
            14 jours après le début des règles !
          </span>
        </div>

        <Retenir color={SECTION_COLORS[3]}>
          <strong>Cycle = 28 jours. Jour 1 = règles.</strong> Ovulation =
          prochaines règles − 14 jours.
        </Retenir>

        <ColoredTable
          headerBg={SECTION_COLORS[3].bg}
          headerText={SECTION_COLORS[3].text}
          headers={["Durée du cycle", "Calcul", "Date de l'ovulation"]}
          rows={[
            [
              "28 jours",
              "J1 + 28 = J28 → J28 − 14",
              "<strong>Jour 14</strong>",
            ],
            [
              "32 jours",
              "J1 + 32 = J32 → J32 − 14",
              "<strong>Jour 18</strong>",
            ],
            [
              "21 jours",
              "J1 + 21 = J21 → J21 − 14",
              "<strong>Jour 7</strong>",
            ],
          ]}
        />
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 5 — Les émotions à l'adolescence
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader
          index={4}
          emoji="💭"
          title="Les émotions à l'adolescence"
        />

        <p style={{ fontSize: "15px", marginBottom: "12px" }}>
          Les hormones changent aussi les émotions et les comportements. Ce
          n&apos;est pas un choix — c&apos;est biologique.
        </p>

        <Retenir color={SECTION_COLORS[4]}>
          <strong>
            Sautes d&apos;humeur et agressivité à l&apos;ado = causées par les
            hormones.
          </strong>{" "}
          C&apos;est biologique, pas un défaut.
        </Retenir>

        <ColoredTable
          headerBg={SECTION_COLORS[4].bg}
          headerText={SECTION_COLORS[4].text}
          headers={["Ce qu'on ressent", "Ce que ça provoque"]}
          rows={[
            [
              "Gêne / inquiétude par rapport au corps",
              "Importance de l'image de soi. L'opinion des autres compte beaucoup.",
            ],
            [
              "Se sentir différent des autres",
              "Sautes d'humeur, manque de confiance, émotivité.",
            ],
            [
              "Envie d'être plus indépendant",
              "Contestation des adultes, parfois agressivité.",
            ],
            [
              "Peur de ne plus être protégé",
              "Comportements risqués : alcool, conduite sans casque, rapports non protégés.",
            ],
          ]}
        />
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 6 — Les mots-clés
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader index={5} emoji="📚" title="Les mots-clés" />

        <Retenir color={SECTION_COLORS[5]}>
          <strong>Spermatozoïde ≠ sperme. Ovule ≠ ovulation.</strong> Ménarche
          = premières règles. Ménopause = fin des cycles.
        </Retenir>

        <ColoredTable
          headerBg={SECTION_COLORS[5].bg}
          headerText={SECTION_COLORS[5].text}
          headers={["Mot-clé", "Définition"]}
          rows={[
            [
              "<strong>Puberté</strong>",
              "Période déclenchée par les hormones. Le corps change. L'appareil reproducteur devient fonctionnel.",
            ],
            [
              "<strong>Hormone</strong>",
              "Substance chimique produite par une glande. Elle transporte un message dans le sang.",
            ],
            [
              "<strong>Caractères primaires</strong>",
              "Organes reproducteurs présents dès la naissance (pénis, vagin, ovaires…).",
            ],
            [
              "<strong>Caractères secondaires</strong>",
              "Apparaissent seulement à la puberté (poitrine, pilosité, voix grave…).",
            ],
            [
              "<strong>Spermatozoïde</strong>",
              "Cellule reproductrice du garçon. Mobile grâce à un flagelle. Fabriquée dans les testicules.",
            ],
            [
              "<strong>Sperme</strong>",
              "Spermatozoïdes + liquide séminal. ≠ spermatozoïde seul.",
            ],
            [
              "<strong>Épididyme</strong>",
              "Organe sur le testicule. C'est là que les spermatozoïdes deviennent mobiles.",
            ],
            [
              "<strong>Ovule</strong>",
              "Cellule reproductrice de la fille. Libérée lors de l'ovulation.",
            ],
            [
              "<strong>Ovulation</strong>",
              "Libération d'un ovule par un ovaire. Environ 14 jours avant les prochaines règles.",
            ],
            [
              "<strong>Endomètre</strong>",
              "Muqueuse interne de l'utérus. S'épaissit chaque cycle. Si pas de fécondation → éliminée = règles.",
            ],
            [
              "<strong>Fécondation</strong>",
              "Union spermatozoïde + ovule. Se passe dans les trompes de Fallope.",
            ],
            [
              "<strong>Règles (menstruations)</strong>",
              "Élimination de l'endomètre si pas de fécondation. = Jour 1 du nouveau cycle.",
            ],
            [
              "<strong>Ménarche</strong>",
              "Premières règles. Signe que l'appareil féminin fonctionne.",
            ],
            [
              "<strong>Ménopause</strong>",
              "Arrêt définitif des cycles vers 50 ans. Fin de la fertilité.",
            ],
          ]}
        />
      </section>

      {/* ══════════════════════════════════════════════════
          PARTIE 7 — La méthode scientifique
      ══════════════════════════════════════════════════ */}
      <section style={{ marginBottom: "40px" }}>
        <SectionHeader
          index={6}
          emoji="🔭"
          title="La méthode pour analyser un document"
        />

        <p style={{ fontSize: "15px", marginBottom: "16px" }}>
          Quand tu as un graphique ou un tableau, tu suis toujours ces 4 étapes
          dans le même ordre.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            {
              n: 1,
              title: "Présenter le document.",
              detail:
                "Quel type ? Que représente-t-il ? Quelles unités ?",
            },
            {
              n: 2,
              title: "Je vois que…",
              detail:
                'Tu décris ce que tu observes avec des chiffres et des unités. Exemple : "Le volume des testicules passe de 1 mL à 6,5 mL entre 10 et 17 ans."',
            },
            {
              n: 3,
              title: "Or je sais que…",
              detail:
                "Tu rappelles une connaissance du cours qui explique ce que tu observes.",
            },
            {
              n: 4,
              title: "J'en conclus que…",
              detail:
                "Tu donnes ta conclusion en lien avec la question posée.",
            },
          ].map((step) => (
            <div
              key={step.n}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                backgroundColor: "#FFFFFF",
                border: `1px solid ${SECTION_COLORS[6].bg}`,
                borderLeft: `4px solid ${SECTION_COLORS[6].border}`,
                borderRadius: "0 12px 12px 0",
                padding: "12px 16px",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: SECTION_COLORS[6].border,
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "14px",
                }}
              >
                {step.n}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: SECTION_COLORS[6].text,
                  }}
                >
                  {step.title}
                </div>
                <div style={{ fontSize: "13px", color: "#2D2D2D", marginTop: "3px", lineHeight: 1.7 }}>
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Retenir color={SECTION_COLORS[6]}>
          <strong>
            Méthode scientifique : Je vois → Or je sais → J&apos;en conclus.
          </strong>{" "}
          TOUJOURS des chiffres et des unités dans &quot;Je vois que…&quot;.
        </Retenir>
      </section>

      {/* ── Bottom nav banner ── */}
      <NavBanner quizHref={quizHref} />

      {/* Lightbox */}
      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </div>
  );
}
