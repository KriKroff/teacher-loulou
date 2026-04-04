import type { Resource } from "@/types";

export const resources: Resource[] = [
  // ─── FICHE DE RÉVISION ─────────────────────────────────────────────────────
  {
    slug: "pc-masse-gaz-fiche",
    title: "La masse d'un gaz",
    description:
      "Fiche de révision complète : états de la matière, composition de l'air, pression atmosphérique, unités de pression, masse volumique et technique du déplacement d'eau.",
    type: "fiche",
    level: "4e",
    subject: "physique-chimie",
    chapter: "Chapitre IV — La masse d'un gaz",
    customComponent: "PCMasseGazFiche",
    createdAt: "2026-04-04T12:00:00Z",
    updatedAt: "2026-04-04T12:00:00Z",
    tags: ["gaz", "masse", "matière", "composition de l'air", "pression", "déplacement d'eau", "fiche"],
    content: "",
  },

  // ─── QUIZ UNIFIÉ (3 niveaux) ────────────────────────────────────────────────
  {
    slug: "pc-masse-gaz-quiz",
    title: "Quiz — La masse d'un gaz",
    description:
      "3 niveaux de difficulté : Facile, Intermédiaire, Expert. 8 questions par session tirées d'une banque de 30 questions sur les gaz, la composition de l'air et la pression.",
    type: "quiz",
    level: "4e",
    subject: "physique-chimie",
    chapter: "Chapitre IV — La masse d'un gaz",
    createdAt: "2026-04-04T12:30:00Z",
    updatedAt: "2026-04-04T12:30:00Z",
    tags: ["gaz", "masse", "matière", "composition de l'air", "pression", "quiz"],
    quizData: {
      title: "Quiz — La masse d'un gaz",
      description:
        "Choisis ton niveau pour commencer. Conseil : commence par Facile pour te chauffer !",
      passingScore: 60,
      sessionSize: 8,
      questions: [],
      levels: [
        // ── NIVEAU FACILE ────────────────────────────────────────────────────
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Vrai ou faux, définitions simples, questions directes.",
          questions: [
            {
              id: "f1",
              question: "L'air a une masse. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Comme toute la matière, l'air est pesant. Il a bien une masse, même si on ne la ressent pas directement.",
            },
            {
              id: "f2",
              question: "Dans les conditions standard (1 bar, 25 °C), la masse d'un litre d'air est environ :",
              type: "qcm",
              options: ["0,13 g", "1,3 g", "13 g", "130 g"],
              correctAnswer: "1,3 g",
              explanation:
                "À 1 bar et 25 °C (conditions standard), 1 litre d'air pèse environ 1,3 g.",
            },
            {
              id: "f3",
              question: "La pression atmosphérique moyenne au niveau de la mer est proche de :",
              type: "qcm",
              options: ["0,1 bar", "1 bar", "10 bar", "100 bar"],
              correctAnswer: "1 bar",
              explanation:
                "Au niveau de la mer, la pression atmosphérique est proche de 1 bar (environ 1013 hPa).",
            },
            {
              id: "f4",
              question: "La température standard est :",
              type: "qcm",
              options: ["0 °C", "100 °C", "25 °C", "37 °C"],
              correctAnswer: "25 °C",
              explanation:
                "Les conditions standard de température correspondent à 25 °C (température ambiante).",
            },
            {
              id: "f5",
              question: "Pour récupérer un gaz produit lors d'une expérience, on utilise la technique du déplacement d'eau. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Le déplacement d'eau est bien la technique utilisée pour collecter un gaz : le gaz chasse l'eau d'un tube retourné rempli d'eau.",
            },
            {
              id: "f6",
              question: "Un gaz est-il compressible ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Les gaz sont facilement compressibles : on peut réduire leur volume en augmentant la pression. C'est une propriété fondamentale des gaz.",
            },
            {
              id: "f7",
              question: "Dans l'air, le gaz le plus abondant est :",
              type: "qcm",
              options: ["Le dioxygène (O₂)", "Le diazote (N₂)", "Le dioxyde de carbone (CO₂)", "La vapeur d'eau"],
              correctAnswer: "Le diazote (N₂)",
              explanation:
                "L'air contient environ 78 % de diazote (N₂), 21 % de dioxygène (O₂) et environ 1 % d'autres gaz.",
            },
            {
              id: "f8",
              question: "Un gaz occupe tout l'espace disponible dans un récipient. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Contrairement aux solides et liquides, un gaz n'a pas de volume propre : il s'étend pour occuper tout le volume du récipient qui le contient.",
            },
            {
              id: "f9",
              question: "1 bar correspond à :",
              type: "qcm",
              options: ["100 Pa", "1 000 Pa", "10 000 Pa", "100 000 Pa"],
              correctAnswer: "100 000 Pa",
              explanation:
                "Le pascal (Pa) est l'unité SI de pression : 1 bar = 100 000 Pa.",
            },
            {
              id: "f10",
              question: "La masse d'un gaz dépend des conditions de température et de pression. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Pour un même gaz, la masse par litre change avec la température et la pression. C'est pourquoi on précise toujours les conditions (ici : conditions standard).",
            },
          ],
        },

        // ── NIVEAU INTERMÉDIAIRE ─────────────────────────────────────────────
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Compréhension, applications et calculs simples.",
          questions: [
            {
              id: "i1",
              question: "Quelle est la masse de 2 litres d'air dans les conditions standard ?",
              type: "qcm",
              options: ["0,65 g", "1,3 g", "2,6 g", "3,9 g"],
              correctAnswer: "2,6 g",
              explanation:
                "1 litre d'air = 1,3 g en conditions standard. Donc 2 litres = 2 × 1,3 g = 2,6 g.",
            },
            {
              id: "i2",
              question: "Dans la technique du déplacement d'eau, qu'est-ce qui chasse l'eau hors du tube ?",
              type: "qcm",
              options: [
                "La chaleur de la réaction",
                "Le gaz produit",
                "L'eau froide ajoutée",
                "La pression atmosphérique seule",
              ],
              correctAnswer: "Le gaz produit",
              explanation:
                "Le gaz produit lors de la réaction est acheminé par un tube jusqu'au tube collecteur rempli d'eau. Le gaz entre par le bas et chasse l'eau, prenant sa place.",
            },
            {
              id: "i3",
              question: "Dans l'air sec, quelle proportion de dioxygène est la plus proche de la réalité ?",
              type: "qcm",
              options: ["2 %", "21 %", "50 %", "78 %"],
              correctAnswer: "21 %",
              explanation:
                "La proportion de dioxygène dans l'air est d'environ 21 % (le diazote représente environ 78 %).",
            },
            {
              id: "i4",
              question: "Que se passe-t-il à la masse d'un gaz si on augmente la quantité de gaz dans un récipient ?",
              type: "qcm",
              options: [
                "La masse augmente",
                "La masse diminue",
                "La masse ne change pas",
                "La masse devient nulle",
              ],
              correctAnswer: "La masse augmente",
              explanation:
                "Plus il y a de gaz (plus grande quantité de matière), plus la masse est grande. La masse est proportionnelle à la quantité de gaz.",
            },
            {
              id: "i5",
              question: "Pourquoi utilise-t-on la technique du déplacement d'eau plutôt que de laisser le gaz se disperser dans l'air ?",
              type: "qcm",
              options: [
                "Pour refroidir le gaz",
                "Pour collecter et mesurer le volume du gaz",
                "Pour transformer le gaz en liquide",
                "Pour augmenter la pression du gaz",
              ],
              correctAnswer: "Pour collecter et mesurer le volume du gaz",
              explanation:
                "Le déplacement d'eau permet de piéger le gaz dans un tube gradué pour le collecter et mesurer son volume précisément, sans qu'il s'échappe dans l'atmosphère.",
            },
            {
              id: "i6",
              question: "Quelle conversion est correcte ?",
              type: "qcm",
              options: [
                "1 bar = 100 hPa",
                "1 bar = 1 000 hPa",
                "1 bar = 10 000 hPa",
                "1 bar = 100 000 hPa",
              ],
              correctAnswer: "1 bar = 1 000 hPa",
              explanation:
                "Les unités de pression à connaître : 1 bar = 100 000 Pa = 1 000 hPa.",
            },
            {
              id: "i7",
              question: "1013 hPa correspond environ à :",
              type: "qcm",
              options: [
                "0,1013 bar",
                "1,013 bar",
                "10,13 bar",
                "101,3 bar",
              ],
              correctAnswer: "1,013 bar",
              explanation:
                "Pour passer des hPa aux bar, on divise par 1000 : 1013 hPa = 1,013 bar.",
            },
            {
              id: "i8",
              question: "On dit qu'un liquide est :",
              type: "qcm",
              options: [
                "Compressible et expansible",
                "Incompressible et prend la forme de son récipient",
                "Incompressible et garde une forme fixe",
                "Compressible et garde une forme fixe",
              ],
              correctAnswer: "Incompressible et prend la forme de son récipient",
              explanation:
                "Un liquide est pratiquement incompressible (son volume ne change presque pas sous pression), mais il n'a pas de forme propre : il prend la forme de son récipient tout en conservant son volume.",
            },
            {
              id: "i9",
              question: "Si 1 litre d'air pèse 1,3 g, quelle est la masse de 5 litres d'air ?",
              type: "qcm",
              options: ["0,26 g", "1,3 g", "5,0 g", "6,5 g"],
              correctAnswer: "6,5 g",
              explanation:
                "Calcul : 5 × 1,3 g = 6,5 g. La masse est proportionnelle au volume en conditions constantes.",
            },
            {
              id: "i10",
              question: "Lors du déplacement d'eau, le tube collecteur est d'abord rempli de :",
              type: "qcm",
              options: ["Air", "Gaz carbonique", "Eau", "Azote"],
              correctAnswer: "Eau",
              explanation:
                "Le tube est d'abord rempli d'eau. Le gaz produit par la réaction entre par le bas du tube et chasse progressivement l'eau, s'accumulant dans la partie haute du tube.",
            },
          ],
        },

        // ── NIVEAU EXPERT ────────────────────────────────────────────────────
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Synthèse, raisonnement scientifique et questions complexes.",
          questions: [
            {
              id: "e1",
              question: "Parmi ces affirmations sur l'air et les gaz, lesquelles sont VRAIES ?",
              type: "qcm-multiple",
              options: [
                "Un gaz est compressible",
                "Un gaz a une masse nulle",
                "Un gaz occupe tout le volume disponible",
                "L'air contient environ 78 % de diazote",
                "La masse d'un gaz dépend des conditions de T et P",
              ],
              correctAnswer: [
                "Un gaz est compressible",
                "Un gaz occupe tout le volume disponible",
                "L'air contient environ 78 % de diazote",
                "La masse d'un gaz dépend des conditions de T et P",
              ],
              explanation:
                "Un gaz est compressible et occupe l'espace disponible. L'air contient majoritairement du diazote (≈ 78 %). La masse volumique dépend de T et P. Les gaz n'ont pas une masse nulle.",
            },
            {
              id: "e2",
              question: "Remets ces étapes de la technique du déplacement d'eau dans le bon ordre.",
              type: "ordre",
              options: [
                "Le gaz pousse l'eau hors du tube collecteur",
                "Retourner le tube rempli d'eau dans la cuve",
                "Déclencher la réaction qui produit le gaz",
                "Amener le gaz jusqu'au tube via un tuyau",
              ],
              correctAnswer: [
                "Retourner le tube rempli d'eau dans la cuve",
                "Déclencher la réaction qui produit le gaz",
                "Amener le gaz jusqu'au tube via un tuyau",
                "Le gaz pousse l'eau hors du tube collecteur",
              ],
              explanation:
                "On commence par préparer le tube collecteur rempli d'eau et retourné dans une cuve d'eau. On déclenche la réaction, le gaz est acheminé par un tuyau jusqu'au tube, et il chasse l'eau en s'y accumulant.",
            },
            {
              id: "e3",
              question: "Un ballon gonflé contient 10 L d'air. Sa masse est d'environ :",
              type: "qcm",
              options: ["0,013 g", "0,13 g", "1,3 g", "13 g"],
              correctAnswer: "13 g",
              explanation:
                "10 L × 1,3 g/L = 13 g. On applique la relation masse = masse volumique × volume.",
            },
            {
              id: "e4",
              question: "On pèse un ballon vide (dégonflé) puis gonflé. La balance indique 5,2 g de plus quand il est gonflé. Quel volume d'air contient-il (en conditions standard) ?",
              type: "qcm",
              options: ["2 L", "4 L", "6,76 L", "10 L"],
              correctAnswer: "4 L",
              explanation:
                "masse = volume × 1,3 g/L → volume = 5,2 g ÷ 1,3 g/L = 4 L. La différence de masse correspond à la masse de l'air enfermé dans le ballon.",
            },
            {
              id: "e5",
              question: "Pourquoi doit-on préciser les conditions de température et de pression quand on mesure la masse d'un gaz ?",
              type: "qcm",
              options: [
                "Par convention uniquement, cela ne change rien",
                "Parce que T et P modifient le volume occupé par une même quantité de gaz",
                "Parce que les atomes des gaz changent de nature avec T et P",
                "Pour faciliter les calculs mathématiques",
              ],
              correctAnswer: "Parce que T et P modifient le volume occupé par une même quantité de gaz",
              explanation:
                "Quand T augmente, le gaz se dilate (occupe plus de volume). Quand P augmente, le gaz se comprime (occupe moins de volume). La masse volumique (g/L) change donc avec T et P.",
            },
            {
              id: "e6",
              question: "Tu lis 950 hPa sur une station météo. Quelle valeur en bar est la plus proche ?",
              type: "qcm",
              options: ["0,95 bar", "9,5 bar", "95 bar", "950 bar"],
              correctAnswer: "0,95 bar",
              explanation:
                "1 bar = 1000 hPa, donc 950 hPa = 950/1000 bar = 0,95 bar.",
            },
            {
              id: "e7",
              question: "Dans quel état physique la matière a-t-elle un volume et une forme fixes ?",
              type: "qcm",
              options: ["Liquide", "Gazeux", "Solide", "Plasma"],
              correctAnswer: "Solide",
              explanation:
                "Un solide a un volume et une forme fixes : ses particules sont très liées entre elles. Un liquide a un volume fixe mais prend la forme de son récipient. Un gaz n'a ni volume ni forme fixes.",
            },
            {
              id: "e8",
              question: "Qu'est-ce que la masse volumique d'un gaz ?",
              type: "qcm",
              options: [
                "La masse totale du gaz dans un récipient",
                "La masse d'un litre de gaz dans des conditions données",
                "Le volume occupé par 1 g de gaz",
                "La pression exercée par le gaz",
              ],
              correctAnswer: "La masse d'un litre de gaz dans des conditions données",
              explanation:
                "La masse volumique (en g/L ou g/cm³) représente la masse d'une unité de volume du gaz. Pour l'air à conditions standard : 1,3 g/L. Elle dépend des conditions de T et P.",
            },
            {
              id: "e9",
              question: "Associe chaque état de la matière à ses propriétés.",
              type: "association",
              pairs: [
                { left: "Solide", right: "Volume et forme fixes" },
                { left: "Liquide", right: "Volume fixe, forme variable" },
                { left: "Gaz", right: "Volume et forme variables" },
              ],
              options: ["Volume et forme fixes", "Volume fixe, forme variable", "Volume et forme variables"],
              correctAnswer: ["Volume et forme fixes", "Volume fixe, forme variable", "Volume et forme variables"],
              explanation:
                "Solide : volume ET forme fixes (particules très serrées et liées). Liquide : volume fixe mais forme qui suit le récipient. Gaz : ni volume ni forme fixes (particules libres et espacées).",
            },
            {
              id: "e10",
              question: "On mesure une pression de 120 000 Pa. Quelle conversion est correcte ?",
              type: "qcm",
              options: [
                "0,12 bar",
                "1,2 bar",
                "12 bar",
                "120 bar",
              ],
              correctAnswer: "1,2 bar",
              explanation:
                "Comme 1 bar = 100 000 Pa, on fait 120 000 ÷ 100 000 = 1,2 bar.",
            },
          ],
        },
      ],
    },
  },
];
