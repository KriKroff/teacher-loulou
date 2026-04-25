import type { Resource } from "@/types";

export const resources: Resource[] = [
  // ─── FICHE DE RÉVISION ─────────────────────────────────────────────────────
  {
    slug: "svt-puberte-reproduction-fiche",
    title: "La puberté et la reproduction humaine",
    description:
      "Fiche de révision complète : puberté, appareils reproducteurs, cycle féminin, émotions et vocabulaire clé.",
    type: "fiche",
    level: "4e",
    subject: "svt",
    chapter: "Chapitre 6 — Puberté et reproduction",
    createdAt: "2026-03-29T10:00:00Z",
    updatedAt: "2026-03-29T10:00:00Z",
    tags: ["puberté", "reproduction", "hormones", "cycle", "fiche"],
    mdxPath: "4e/svt/fiches/svt-puberte-reproduction-fiche.mdx",
  },

  // ─── QUIZ UNIFIÉ (3 niveaux) ────────────────────────────────────────────────
  {
    slug: "svt-puberte-quiz",
    title: "Quiz — Puberté et reproduction",
    description:
      "3 niveaux de difficulté : Facile, Intermédiaire, Expert. Choisis ton niveau et c'est parti !",
    type: "quiz",
    level: "4e",
    subject: "svt",
    chapter: "Chapitre 6 — Puberté et reproduction",
    createdAt: "2026-03-29T11:00:00Z",
    updatedAt: "2026-03-29T11:00:00Z",
    tags: ["puberté", "reproduction", "quiz"],
    quizData: {
      title: "Quiz — Puberté et reproduction",
      description:
        "Choisis ton niveau pour commencer. Conseil : commence par Facile pour te chauffer !",
      passingScore: 60,
      sessionSize: 10,
      questions: [],
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Définitions simples. Vrai ou faux. Questions courtes.",
          questions: [
            {
              id: "f1",
              question:
                "La puberté est déclenchée par les hormones. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Ce sont bien les hormones qui déclenchent tous les changements de la puberté.",
            },
            {
              id: "f2",
              question: "Où sont fabriqués les spermatozoïdes ?",
              type: "qcm",
              options: [
                "Dans l'épididyme",
                "Dans les testicules",
                "Dans la prostate",
                "Dans l'urètre",
              ],
              correctAnswer: "Dans les testicules",
              explanation:
                "Les spermatozoïdes sont fabriqués dans les testicules, plus précisément dans les tubes séminifères. L'épididyme sert à les stocker et les rendre mobiles.",
            },
            {
              id: "f3",
              question:
                "Les caractères sexuels secondaires existent dès la naissance. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Les caractères secondaires (poitrine, pilosité…) apparaissent seulement à la puberté. Ceux présents à la naissance sont les caractères primaires.",
            },
            {
              id: "f4",
              question: "Qu'est-ce que l'ovulation ?",
              type: "qcm",
              options: [
                "Le début des règles",
                "La libération d'un ovule par un ovaire",
                "La fécondation de l'ovule",
                "L'épaississement de la muqueuse",
              ],
              correctAnswer: "La libération d'un ovule par un ovaire",
              explanation:
                "L'ovulation = libération d'un ovule par l'un des ovaires. Ce n'est pas les règles, ni la fécondation.",
            },
            {
              id: "f5",
              question:
                "Les règles marquent le Jour 1 d'un nouveau cycle. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Le Jour 1 du cycle, c'est toujours le premier jour des règles. Le cycle recommence à ce moment-là.",
            },
            {
              id: "f6",
              question: "Quel organe conduit l'ovule vers l'utérus ?",
              type: "qcm",
              options: [
                "Le vagin",
                "Le col de l'utérus",
                "La trompe de Fallope",
                "L'endomètre",
              ],
              correctAnswer: "La trompe de Fallope",
              explanation:
                "Les trompes de Fallope conduisent l'ovule de l'ovaire vers l'utérus. C'est aussi là que peut se passer la fécondation !",
            },
            {
              id: "f7",
              question:
                "Chez l'homme, la production de spermatozoïdes s'arrête vers 50 ans. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Chez l'homme, la production de spermatozoïdes est continue toute la vie à partir de la puberté. C'est différent de la femme.",
            },
            {
              id: "f8",
              question: "Le sperme, c'est :",
              type: "qcm",
              options: [
                "Uniquement les spermatozoïdes",
                "Les spermatozoïdes + le liquide séminal",
                "Le liquide de la prostate seule",
                "Un synonyme de spermatozoïde",
              ],
              correctAnswer: "Les spermatozoïdes + le liquide séminal",
              explanation:
                "Sperme = spermatozoïdes + liquide séminal. Le sperme ≠ le spermatozoïde seul. Ce sont deux choses différentes.",
            },
            // ── Nouvelles questions facile ──────────────────────────────────
            {
              id: "f9",
              question:
                "Les ovaires et les testicules sont des caractères sexuels primaires. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Les caractères primaires sont présents dès la naissance. Les ovaires et les testicules en font partie, contrairement à la poitrine ou la pilosité qui sont des caractères secondaires.",
            },
            {
              id: "f10",
              question: "Qu'est-ce qu'une hormone ?",
              type: "qcm",
              options: [
                "Un muscle du corps",
                "Une substance chimique qui transporte un message dans le sang",
                "Un organe reproducteur",
                "Un type de cellule du cerveau",
              ],
              correctAnswer:
                "Une substance chimique qui transporte un message dans le sang",
              explanation:
                "Une hormone est produite par une glande et circule dans le sang pour envoyer un message à d'autres organes. Ce sont elles qui déclenchent la puberté.",
            },
            {
              id: "f11",
              question:
                "La ménopause, c'est le début des règles chez une jeune fille. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "La ménopause = arrêt définitif des cycles vers 50 ans. Le début des règles s'appelle la ménarche. Ce sont deux événements opposés.",
            },
            {
              id: "f12",
              question: "La fécondation, c'est :",
              type: "qcm",
              options: [
                "Le moment où les règles commencent",
                "L'union d'un spermatozoïde et d'un ovule",
                "La libération d'un ovule",
                "L'épaississement de l'utérus",
              ],
              correctAnswer: "L'union d'un spermatozoïde et d'un ovule",
              explanation:
                "La fécondation = rencontre et fusion d'un spermatozoïde avec un ovule. Elle a lieu dans les trompes de Fallope.",
            },
            {
              id: "f13",
              question:
                "Chez une fille, lequel de ces changements se produit à la puberté ?",
              type: "qcm",
              options: [
                "La voix devient grave",
                "La poitrine se développe",
                "Les testicules grandissent",
                "La production de sperme commence",
              ],
              correctAnswer: "La poitrine se développe",
              explanation:
                "Le développement de la poitrine est un caractère secondaire féminin. Les autres changements (voix grave, testicules, sperme) concernent les garçons.",
              hint: "Les autres réponses concernent les garçons.",
            },
            {
              id: "f14",
              question:
                "Les spermatozoïdes sont fabriqués dans l'épididyme. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Les spermatozoïdes sont fabriqués dans les testicules (tubes séminifères). L'épididyme sert à les stocker et à les rendre mobiles.",
            },
            {
              id: "f15",
              question:
                "L'organe qui libère un ovule environ tous les 28 jours s'appelle ___.",
              type: "texte-a-trous",
              options: ["l'ovaire", "l'utérus", "la trompe", "le vagin"],
              correctAnswer: "l'ovaire",
              explanation:
                "L'ovaire produit et libère un ovule lors de l'ovulation. Ce n'est ni l'utérus (qui accueille l'embryon), ni la trompe (qui conduit l'ovule), ni le vagin.",
            },
            {
              id: "f16",
              question:
                "Les caractères sexuels secondaires apparaissent avant la naissance. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Les caractères secondaires (poitrine, pilosité, voix…) n'apparaissent qu'à la puberté. Ceux présents dès la naissance sont les caractères primaires.",
            },
            {
              id: "f17",
              question: "Lequel de ces éléments est un caractère sexuel SECONDAIRE ?",
              type: "qcm",
              options: [
                "Le pénis",
                "Les ovaires",
                "Les testicules",
                "La pilosité pubienne",
              ],
              correctAnswer: "La pilosité pubienne",
              explanation:
                "La pilosité pubienne apparaît à la puberté : c'est un caractère secondaire. Les autres (pénis, ovaires, testicules) sont des caractères primaires, présents dès la naissance.",
            },
            {
              id: "f18",
              question:
                "La puberté commence généralement vers ___ ans.",
              type: "texte-a-trous",
              options: ["3–5", "10–14", "18–20", "25–30"],
              correctAnswer: "10–14",
              explanation:
                "La puberté commence généralement entre 10 et 14 ans, mais cela peut varier d'une personne à l'autre.",
            },
            {
              id: "f19",
              question:
                "L'utérus accueille l'embryon si une fécondation a eu lieu. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Si la fécondation a eu lieu, l'embryon migre vers l'utérus et s'y implante dans l'endomètre pour se développer.",
            },
            {
              id: "f20",
              question: "Associe chaque organe féminin à son rôle.",
              type: "association",
              pairs: [
                { left: "Ovaire", right: "Produit et libère les ovules" },
                { left: "Utérus", right: "Accueille l'embryon" },
                { left: "Vagin", right: "Voie de copulation" },
                { left: "Trompe de Fallope", right: "Conduit l'ovule + lieu de la fécondation" },
              ],
              correctAnswer: "association",
              explanation:
                "Chaque organe a un rôle précis : l'ovaire libère les ovules, la trompe conduit l'ovule et est le lieu de la fécondation, l'utérus accueille l'embryon, le vagin reçoit le sperme.",
            },
            {
              id: "f21",
              question:
                "Parmi ces éléments, lesquels sont des caractères sexuels SECONDAIRES ?",
              type: "qcm-multiple",
              options: [
                "Poitrine",
                "Pilosité pubienne",
                "Mue de la voix",
                "Testicules",
                "Vagin",
              ],
              correctAnswer: ["Poitrine", "Pilosité pubienne", "Mue de la voix"],
              explanation:
                "Les caractères secondaires apparaissent à la puberté : poitrine, pilosité, mue de la voix. Les testicules et le vagin sont des caractères primaires, présents dès la naissance.",
            },
            {
              id: "f22",
              question: "Remets dans l'ordre le trajet de l'ovule chez la femme.",
              type: "ordre",
              options: ["Trompe de Fallope", "Ovaire", "Utérus"],
              correctAnswer: ["Ovaire", "Trompe de Fallope", "Utérus"],
              explanation:
                "L'ovule est libéré par l'ovaire, puis captée par la trompe de Fallope (où peut avoir lieu la fécondation), puis migre vers l'utérus.",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description:
            "Rôles des organes. Trajet des spermatozoïdes. Cycle.",
          questions: [
            {
              id: "m1",
              question:
                "Quelle est la première étape du trajet des spermatozoïdes ?",
              type: "qcm",
              options: [
                "L'épididyme",
                "Les tubes séminifères (testicule)",
                "Le canal déférent",
                "La prostate",
              ],
              correctAnswer: "Les tubes séminifères (testicule)",
              explanation:
                "Les spermatozoïdes sont d'abord fabriqués dans les tubes séminifères, à l'intérieur du testicule. C'est le point de départ.",
              hint: "C'est là où ils sont fabriqués.",
            },
            {
              id: "m2",
              question:
                "Où les spermatozoïdes deviennent-ils capables de bouger ?",
              type: "qcm",
              options: [
                "Dans les testicules",
                "Dans le canal déférent",
                "Dans l'épididyme",
                "Dans l'urètre",
              ],
              correctAnswer: "Dans l'épididyme",
              explanation:
                "C'est dans l'épididyme que les spermatozoïdes acquièrent leur mobilité. Les testicules ne font que les fabriquer.",
            },
            {
              id: "m3",
              question: "La fécondation se passe dans l'utérus. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "La fécondation se passe dans les trompes de Fallope. C'est ensuite que l'embryon va s'implanter dans l'utérus.",
            },
            {
              id: "m4",
              question:
                "Que se passe-t-il à la fin du cycle si l'ovule n'est pas fécondé ?",
              type: "qcm",
              options: [
                "Un nouvel ovule est libéré immédiatement",
                "La muqueuse utérine est éliminée : ce sont les règles",
                "La muqueuse s'épaissit davantage",
                "L'ovule reste dans les trompes",
              ],
              correctAnswer:
                "La muqueuse utérine est éliminée : ce sont les règles",
              explanation:
                "Sans fécondation, la muqueuse utérine (endomètre) est éliminée. C'est ce qu'on appelle les règles. Et un nouveau cycle commence.",
            },
            {
              id: "m5",
              question: "Quel est le rôle de la prostate ?",
              type: "qcm",
              options: [
                "Fabriquer les spermatozoïdes",
                "Stocker les spermatozoïdes",
                "Produire le liquide séminal",
                "Conduire le sperme vers l'urètre",
              ],
              correctAnswer: "Produire le liquide séminal",
              explanation:
                "La prostate (avec les vésicules séminales) produit le liquide séminal. Ce liquide mélangé aux spermatozoïdes forme le sperme.",
            },
            {
              id: "m6",
              question:
                "Les sautes d'humeur à l'adolescence sont causées par les hormones. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Les changements hormonaux influencent les émotions à l'adolescence. C'est biologique, pas un choix.",
            },
            {
              id: "m7",
              question: "Qu'est-ce que l'endomètre ?",
              type: "qcm",
              options: [
                "Un organe de l'appareil masculin",
                "La muqueuse interne de l'utérus",
                "Un autre nom pour l'ovaire",
                "La paroi externe de l'utérus",
              ],
              correctAnswer: "La muqueuse interne de l'utérus",
              explanation:
                "L'endomètre, c'est la muqueuse qui tapisse l'intérieur de l'utérus. Elle s'épaissit chaque cycle pour accueillir un éventuel embryon.",
            },
            {
              id: "m8",
              question: "La ménarche, c'est :",
              type: "qcm",
              options: [
                "La fin des cycles (vers 50 ans)",
                "Le premier ovule libéré",
                "Les premières règles d'une jeune fille",
                "L'endomètre qui s'épaissit",
              ],
              correctAnswer: "Les premières règles d'une jeune fille",
              explanation:
                "Ménarche = premières règles. C'est le signe que l'appareil reproducteur féminin devient fonctionnel. La ménopause, elle, marque la fin des cycles.",
            },
            // ── Nouvelles questions intermédiaire ───────────────────────────
            {
              id: "m9",
              question:
                "Dans quel ordre les spermatozoïdes passent-ils après le testicule ?",
              type: "qcm",
              options: [
                "Prostate → canal déférent → épididyme → urètre",
                "Épididyme → canal déférent → urètre",
                "Canal déférent → épididyme → prostate",
                "Urètre → canal déférent → épididyme",
              ],
              correctAnswer: "Épididyme → canal déférent → urètre",
              explanation:
                "Trajet complet : testicule → épididyme (mobilité) → canal déférent (transport) → vésicules séminales + prostate (liquide séminal) → urètre (sortie).",
              hint: "Après le testicule, il faut d'abord acquérir la mobilité.",
            },
            {
              id: "m10",
              question:
                "Le canal déférent sert à fabriquer le liquide séminal. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Le canal déférent transporte les spermatozoïdes, il ne fabrique rien. Ce sont les vésicules séminales et la prostate qui produisent le liquide séminal.",
            },
            {
              id: "m11",
              question:
                "Que fait l'endomètre si une fécondation a eu lieu ?",
              type: "qcm",
              options: [
                "Il est éliminé lors des règles",
                "Il reste épais pour accueillir l'embryon",
                "Il produit des ovules",
                "Il se rétracte",
              ],
              correctAnswer: "Il reste épais pour accueillir l'embryon",
              explanation:
                "Si fécondation → l'endomètre reste épais pour nourrir et accueillir l'embryon. Pas de fécondation → il est éliminé = règles.",
            },
            {
              id: "m12",
              question:
                "Un cycle dure 28 jours. Les règles commencent le 1er janvier. Quand commencent les prochaines règles ?",
              type: "qcm",
              options: ["29 janvier", "14 janvier", "7 février", "21 janvier"],
              correctAnswer: "29 janvier",
              explanation:
                "Jour 1 = 1er janvier. On ajoute 28 jours : 1er janvier + 28 jours = 29 janvier. Les prochaines règles arrivent 28 jours plus tard.",
              hint: "Ajoute simplement la durée du cycle au Jour 1.",
            },
            {
              id: "m13",
              question:
                "La fécondation peut avoir lieu dans l'utérus. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "La fécondation se produit dans les trompes de Fallope. C'est ensuite l'embryon qui migre vers l'utérus pour s'y implanter.",
            },
            {
              id: "m14",
              question: "Le sperme = spermatozoïdes + ___.",
              type: "texte-a-trous",
              options: ["sang", "liquide séminal", "ovule", "hormone"],
              correctAnswer: "liquide séminal",
              explanation:
                "Le sperme est un mélange : les spermatozoïdes + le liquide séminal produit par la prostate et les vésicules séminales. Sperme ≠ spermatozoïde.",
            },
            {
              id: "m15",
              question: "Quel est le rôle des vésicules séminales ?",
              type: "qcm",
              options: [
                "Fabriquer les spermatozoïdes",
                "Stocker les spermatozoïdes",
                "Produire une partie du liquide séminal",
                "Transporter les spermatozoïdes vers l'urètre",
              ],
              correctAnswer: "Produire une partie du liquide séminal",
              explanation:
                "Les vésicules séminales (avec la prostate) produisent le liquide séminal. Ce liquide nourrit et protège les spermatozoïdes, formant ainsi le sperme.",
            },
            {
              id: "m16",
              question:
                "Le vagin reçoit le sperme lors de la copulation. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Le vagin est la voie de copulation. Il reçoit le sperme, qui remonte ensuite vers les trompes pour permettre une éventuelle fécondation.",
            },
            {
              id: "m17",
              question:
                "L'ovulation se produit environ ___ jours avant les prochaines règles.",
              type: "texte-a-trous",
              options: ["7", "14", "21", "28"],
              correctAnswer: "14",
              explanation:
                "L'ovulation se produit toujours environ 14 jours AVANT les prochaines règles. Cette règle s'applique quel que soit la durée totale du cycle.",
            },
            {
              id: "m18",
              question:
                "Que provoque l'absence de fécondation à la fin du cycle ?",
              type: "qcm",
              options: [
                "Une nouvelle ovulation immédiate",
                "Les règles (élimination de l'endomètre)",
                "La ménopause",
                "Un épaississement de l'endomètre",
              ],
              correctAnswer: "Les règles (élimination de l'endomètre)",
              explanation:
                "Sans fécondation, l'endomètre n'est plus nécessaire : il est éliminé. C'est ce qu'on appelle les règles. Un nouveau cycle commence alors.",
            },
            {
              id: "m19",
              question:
                "Les émotions intenses à l'adolescence sont entièrement dues à un manque de volonté. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Les émotions intenses à l'ado sont causées par les changements hormonaux. C'est biologique, pas un manque de volonté ou un défaut de caractère.",
            },
            {
              id: "m20",
              question: "Associe chaque organe masculin à son rôle.",
              type: "association",
              pairs: [
                { left: "Testicule", right: "Fabrique les spermatozoïdes" },
                { left: "Épididyme", right: "Stockage et mobilité des spz" },
                { left: "Prostate", right: "Produit le liquide séminal" },
                { left: "Canal déférent", right: "Transporte les spermatozoïdes" },
              ],
              correctAnswer: "association",
              explanation:
                "Chaque organe a un rôle précis dans le trajet des spermatozoïdes : fabrication (testicule), mobilité (épididyme), transport (canal déférent), liquide séminal (prostate).",
            },
            {
              id: "m21",
              question:
                "Quels organes font partie de l'appareil reproducteur féminin ?",
              type: "qcm-multiple",
              options: [
                "Ovaire",
                "Trompe de Fallope",
                "Utérus",
                "Vagin",
                "Épididyme",
                "Prostate",
              ],
              correctAnswer: ["Ovaire", "Trompe de Fallope", "Utérus", "Vagin"],
              explanation:
                "L'appareil féminin comprend les ovaires, les trompes, l'utérus et le vagin. L'épididyme et la prostate sont des organes masculins.",
            },
            {
              id: "m22",
              question: "Remets dans l'ordre le trajet des spermatozoïdes.",
              type: "ordre",
              options: [
                "Épididyme",
                "Canal déférent",
                "Testicule",
                "Prostate + vésicules",
                "Urètre",
              ],
              correctAnswer: [
                "Testicule",
                "Épididyme",
                "Canal déférent",
                "Prostate + vésicules",
                "Urètre",
              ],
              explanation:
                "Trajet complet : Testicule (fabrication) → Épididyme (mobilité) → Canal déférent (transport) → Prostate + vésicules séminales (liquide séminal) → Urètre (sortie).",
            },
            // ── drag-on-image ─────────────────────────────────────────────────
            {
              id: "i-doi-1",
              type: "drag-on-image",
              question: "Place les noms des organes sur le schéma de l'appareil reproducteur féminin (vue de face).",
              imageSrc: "/images/svt/appareil-reproducteur-feminin-face.jpg",
              imageAlt: "Schéma de l'appareil reproducteur féminin, vue de face",
              zones: [
                { id: "zone-ovaire-g", x: 22, y: 42, correctLabel: "Ovaire gauche" },
                { id: "zone-trompe-g", x: 32, y: 30, correctLabel: "Trompe de Fallope" },
                { id: "zone-uterus", x: 50, y: 50, correctLabel: "Utérus" },
                { id: "zone-vagin", x: 50, y: 72, correctLabel: "Vagin" },
                { id: "zone-ovaire-d", x: 78, y: 42, correctLabel: "Ovaire droit" },
              ],
              labels: [
                "Ovaire gauche",
                "Trompe de Fallope",
                "Utérus",
                "Vagin",
                "Ovaire droit",
                "Col de l'utérus",
              ],
              correctAnswer: "drag-on-image",
              explanation:
                "L'appareil féminin comprend deux ovaires (fabrication des ovules), deux trompes de Fallope (transport), l'utérus (gestation) et le vagin (sortie).",
              hint: "L'utérus est l'organe central, en forme de poire.",
            },
            {
              id: "i-doi-2",
              type: "drag-on-image",
              question: "Place les noms des organes sur le schéma de l'appareil reproducteur masculin (vue de face).",
              imageSrc: "/images/svt/appareil-reproducteur-masculin-face.jpg",
              imageAlt: "Schéma de l'appareil reproducteur masculin, vue de face",
              zones: [
                { id: "zone-testicule", x: 40, y: 72, correctLabel: "Testicule" },
                { id: "zone-epididyme", x: 60, y: 68, correctLabel: "Épididyme" },
                { id: "zone-canal-deferent", x: 55, y: 45, correctLabel: "Canal déférent" },
                { id: "zone-prostate", x: 50, y: 35, correctLabel: "Prostate" },
                { id: "zone-uretre", x: 50, y: 58, correctLabel: "Urètre" },
              ],
              labels: [
                "Testicule",
                "Épididyme",
                "Canal déférent",
                "Prostate",
                "Urètre",
                "Vésicule séminale",
              ],
              correctAnswer: "drag-on-image",
              explanation:
                "Les testicules fabriquent les spermatozoïdes. L'épididyme les stocke et les rend mobiles. Le canal déférent les transporte vers la prostate. L'urètre les expulse.",
              hint: "Les testicules sont dans le scrotum, en bas du schéma.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description:
            "Calculs de cycle. Cas cliniques. Méthode scientifique.",
          questions: [
            {
              id: "e1",
              question:
                "Sophie a un cycle de 32 jours. Ses règles ont commencé le 1er juin. Quand a lieu son ovulation ?",
              type: "qcm",
              options: ["15 juin", "19 juin", "20 juin", "17 juin"],
              correctAnswer: "19 juin",
              explanation:
                "Formule : prochaines règles = 1er juin + 32 j = 3 juillet. Ovulation = 3 juillet − 14 j = 19 juin. On soustrait 14 jours des prochaines règles, pas des règles actuelles.",
              hint: "Formule : date des prochaines règles − 14 jours.",
            },
            {
              id: "e2",
              question:
                "Un graphique montre que le volume des testicules augmente entre 12 et 20 ans. Quelle est la bonne conclusion ?",
              type: "qcm",
              options: [
                "Les testicules sont des caractères secondaires",
                "Les caractères primaires changent à la puberté",
                "La puberté commence après 20 ans",
                "Les spermatozoïdes sont produits dès la naissance",
              ],
              correctAnswer: "Les caractères primaires changent à la puberté",
              explanation:
                "Les testicules sont des caractères primaires (présents dès la naissance). Leur évolution montre que les caractères primaires grandissent à la puberté.",
            },
            {
              id: "e3",
              question:
                'Dans la méthode scientifique, l\'étape "Je vois que…" doit toujours contenir des chiffres. Vrai ou Faux ?',
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                'Sans chiffres et sans unités dans "Je vois que…", la description est incomplète. Exemple : "le volume passe de 1 mL à 6,5 mL".',
            },
            {
              id: "e4",
              question:
                "Une femme n'a pas ses règles depuis 2 mois. À l'échographie, ses ovaires sont visibles et fonctionnels. Qu'est-ce que cela suggère ?",
              type: "qcm",
              options: [
                "Elle a une ménopause précoce",
                "Elle est probablement enceinte",
                "Ses règles sont juste en retard",
                "Ses ovaires ne produisent plus d'ovules",
              ],
              correctAnswer: "Elle est probablement enceinte",
              explanation:
                "Si les ovaires sont fonctionnels, ce n'est pas la ménopause. L'absence de règles + ovaires fonctionnels → la muqueuse est maintenue → grossesse probable.",
            },
            {
              id: "e5",
              question:
                "Laquelle de ces phrases est une BONNE description dans la méthode scientifique ?",
              type: "qcm",
              options: [
                "Le volume augmente car c'est la puberté",
                "Il y a un changement",
                "Le volume passe de 1 mL à 6,5 mL entre 10 et 17 ans",
                "Le graphique montre une courbe",
              ],
              correctAnswer:
                "Le volume passe de 1 mL à 6,5 mL entre 10 et 17 ans",
              explanation:
                "Une bonne description scientifique doit toujours contenir des chiffres, des unités et une période. C'est la seule réponse avec ces trois éléments.",
              hint: "Cherche la phrase qui contient des chiffres et des unités.",
            },
            {
              id: "e6",
              question:
                'Dans la méthode, que fait-on dans l\'étape "Or je sais que…" ?',
              type: "qcm",
              options: [
                "On décrit les chiffres du document",
                "On donne une conclusion",
                "On rappelle une connaissance du cours",
                "On présente le type de document",
              ],
              correctAnswer: "On rappelle une connaissance du cours",
              explanation:
                '"Or je sais que…" sert à rappeler une connaissance du cours. C\'est le lien entre l\'observation (Je vois) et la conclusion (J\'en conclus).',
            },
            {
              id: "e7",
              question:
                "La ménopause et la ménarche désignent la même chose. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Ce sont deux choses opposées. Ménarche = premières règles (début). Ménopause = arrêt définitif des cycles vers 50 ans.",
            },
            {
              id: "e8",
              question:
                "Le désir d'indépendance à l'adolescence peut provoquer :",
              type: "qcm",
              options: [
                "Une croissance plus rapide",
                "Des comportements à risque et la contestation des adultes",
                "Une production plus importante de spermatozoïdes",
                "Un arrêt temporaire du cycle féminin",
              ],
              correctAnswer:
                "Des comportements à risque et la contestation des adultes",
              explanation:
                "Le désir d'autonomie peut pousser les ados à contester les adultes ou à adopter des comportements risqués (alcool, conduite sans casque…). C'est lié aux hormones.",
            },
            // ── Nouvelles questions expert ──────────────────────────────────
            {
              id: "e9",
              question:
                "Léa a un cycle de 21 jours. Ses règles ont commencé le 7 mars. Quand a lieu son ovulation ?",
              type: "qcm",
              options: ["14 mars (Jour 7)", "18 mars (Jour 11)", "21 mars (Jour 14)", "10 mars (Jour 3)"],
              correctAnswer: "14 mars (Jour 7)",
              explanation:
                "Prochaines règles = 7 mars + 21 jours = 28 mars. Ovulation = 28 mars − 14 jours = 14 mars = Jour 7 du cycle.",
              hint: "Calcule d'abord les prochaines règles, puis recule de 14 jours.",
            },
            {
              id: "e10",
              question:
                "Un document montre que les règles durent 5 jours et se produisent tous les 30 jours. Quelle affirmation est correcte ?",
              type: "qcm",
              options: [
                "Ce cycle est anormal car il dure plus de 28 jours",
                "Ce cycle est normal car la durée peut varier entre 21 et 35 jours",
                "Ce cycle indique une ménopause précoce",
                "Ce cycle montre que l'ovulation n'a pas lieu",
              ],
              correctAnswer:
                "Ce cycle est normal car la durée peut varier entre 21 et 35 jours",
              explanation:
                "Un cycle de 30 jours est parfaitement normal. La durée moyenne est 28 jours, mais elle peut varier de 21 à 35 jours selon les individus.",
            },
            {
              id: "e11",
              question:
                "Un homme de 70 ans peut encore produire des spermatozoïdes. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Chez l'homme, la production de spermatozoïdes est continue toute la vie à partir de la puberté. Il n'y a pas d'équivalent masculin de la ménopause.",
            },
            {
              id: "e12",
              question:
                "Clara, 13 ans, a ses premières règles. Quel terme médical désigne cet événement ?",
              type: "qcm",
              options: ["La ménopause", "L'ovulation", "La ménarche", "La fécondation"],
              correctAnswer: "La ménarche",
              explanation:
                "Ménarche = premières règles. C'est le signe que l'appareil reproducteur féminin de Clara est devenu fonctionnel. À ne pas confondre avec la ménopause (fin des cycles).",
            },
            {
              id: "e13",
              question:
                "Dans un compte-rendu scientifique, laquelle de ces phrases correspond à l'étape « J'en conclus que… » ?",
              type: "qcm",
              options: [
                "Le volume des testicules passe de 1 à 6 mL entre 10 et 17 ans",
                "Or je sais que la puberté provoque la croissance des organes reproducteurs",
                "J'en conclus que cela confirme que la puberté entraîne la croissance des caractères primaires",
                "Ce document est un graphique représentant l'évolution du volume",
              ],
              correctAnswer:
                "J'en conclus que cela confirme que la puberté entraîne la croissance des caractères primaires",
              explanation:
                "'J'en conclus que…' est la conclusion finale, répondant à la question posée. Les autres phrases correspondent à 'Je vois que', 'Or je sais que', et la présentation du document.",
            },
            {
              id: "e14",
              question:
                "Dans la méthode scientifique, 'Je vois que…' doit toujours contenir des ___.",
              type: "texte-a-trous",
              options: [
                "chiffres et des unités",
                "mots et des images",
                "exemples et des dates",
                "idées et des hypothèses",
              ],
              correctAnswer: "chiffres et des unités",
              explanation:
                "Sans chiffres et sans unités dans 'Je vois que…', la description est incomplète. Exemple : 'le volume passe de 1 mL à 6,5 mL entre 10 et 17 ans'.",
            },
            {
              id: "e15",
              question:
                "Marc a un cycle de 35 jours. Ses règles commencent le 1er avril. À quelle date sera son ovulation ?",
              type: "qcm",
              options: ["15 avril", "21 avril", "22 avril", "14 avril"],
              correctAnswer: "22 avril",
              explanation:
                "Prochaines règles = 1er avril + 35 jours = 6 mai. Ovulation = 6 mai − 14 jours = 22 avril.",
              hint: "Calcule d'abord la date des prochaines règles.",
            },
            {
              id: "e16",
              question:
                "Une femme de 52 ans signale que ses règles ont définitivement cessé depuis 1 an. Quel terme médical correspond ?",
              type: "qcm",
              options: [
                "La ménarche",
                "L'aménorrhée temporaire",
                "La ménopause",
                "L'ovulation tardive",
              ],
              correctAnswer: "La ménopause",
              explanation:
                "La ménopause = arrêt définitif des cycles menstruels, généralement vers 50 ans. C'est la fin de la fertilité féminine.",
            },
            {
              id: "e17",
              question:
                "Un adolescent ressent le besoin de contester les règles familiales et d'être plus autonome. Selon le cours, quelle est l'explication biologique ?",
              type: "qcm",
              options: [
                "C'est un défaut de caractère qui disparaîtra avec l'âge",
                "C'est une réaction normale liée aux changements hormonaux de la puberté",
                "C'est dû à un manque de sommeil",
                "C'est causé par une production insuffisante d'hormones",
              ],
              correctAnswer:
                "C'est une réaction normale liée aux changements hormonaux de la puberté",
              explanation:
                "Le désir d'indépendance et la contestation des adultes à l'adolescence sont des réactions biologiques, causées par les changements hormonaux. C'est normal.",
            },
            {
              id: "e18",
              question:
                "Associe chaque étape de la méthode scientifique à sa description.",
              type: "association",
              pairs: [
                { left: "Présentation", right: "Décrire le type et le sujet du document" },
                { left: "Je vois que…", right: "Décrire avec des chiffres et des unités" },
                { left: "Or je sais que…", right: "Rappeler une connaissance du cours" },
                { left: "J'en conclus que…", right: "Donner la conclusion en lien avec la question" },
              ],
              correctAnswer: "association",
              explanation:
                "La méthode comporte 4 étapes dans l'ordre : présentation → Je vois que (chiffres) → Or je sais que (cours) → J'en conclus que (conclusion).",
            },
            {
              id: "e19",
              question:
                "Parmi ces affirmations, lesquelles sont VRAIES ?",
              type: "qcm-multiple",
              options: [
                "La fécondation a lieu dans les trompes de Fallope",
                "L'ovulation survient 14 jours avant les prochaines règles",
                "Les spermatozoïdes deviennent mobiles dans l'épididyme",
                "La fécondation a lieu dans l'utérus",
                "L'ovulation = le premier jour des règles",
              ],
              correctAnswer: [
                "La fécondation a lieu dans les trompes de Fallope",
                "L'ovulation survient 14 jours avant les prochaines règles",
                "Les spermatozoïdes deviennent mobiles dans l'épididyme",
              ],
              explanation:
                "La fécondation a lieu dans les trompes (pas l'utérus). L'ovulation est 14 jours AVANT les prochaines règles (pas le Jour 1). Les spermatozoïdes acquièrent leur mobilité dans l'épididyme.",
            },
            {
              id: "e20",
              question:
                "Remets dans l'ordre les 4 étapes de la méthode scientifique.",
              type: "ordre",
              options: [
                "Or je sais que…",
                "Présentation du document",
                "J'en conclus que…",
                "Je vois que…",
              ],
              correctAnswer: [
                "Présentation du document",
                "Je vois que…",
                "Or je sais que…",
                "J'en conclus que…",
              ],
              explanation:
                "La méthode suit toujours cet ordre : 1. Présenter le document → 2. Je vois que (observation chiffrée) → 3. Or je sais que (connaissance de cours) → 4. J'en conclus que (conclusion).",
            },
          ],
        },
      ],
    },
  },
];
