import type { Resource } from "@/types";

export const resources: Resource[] = [
  // ─── FICHE DE RÉVISION ─────────────────────────────────────────────────────
  {
    slug: "pc-air-composition-proprietes-fiche",
    title: "L'air : composition et propriétés",
    description:
      "Fiche de révision complète : atmosphère, pression atmosphérique, combustion, conservation de la masse et masses des gaz.",
    type: "fiche",
    level: "4e",
    subject: "physique-chimie",
    chapter: "Chapitre 3 — L'air : composition et propriétés",
    createdAt: "2026-04-04T10:00:00Z",
    updatedAt: "2026-04-04T10:00:00Z",
    tags: [
      "air",
      "atmosphère",
      "pression",
      "combustion",
      "conservation",
      "masse",
      "gaz",
      "fiche",
    ],
    content: `
# L'air : composition et propriétés

---

## Partie 1 — L'atmosphère

Une **atmosphère** est une couche de gaz qui entoure un astre.

| Astres AVEC atmosphère | Astres SANS atmosphère |
|------------------------|------------------------|
| Vénus | Mercure |
| Saturne | Lune |

L'atmosphère terrestre est composée d'un mélange de gaz appelé **air**.

> **À retenir** : L'air = **78 % de diazote (N₂)** + **21 % de dioxygène (O₂)** + **1 % d'autres gaz** (CO₂, gaz rares…)

---

## Partie 2 — La pression atmosphérique

Les gaz **appuient** sur toutes les surfaces avec lesquelles ils sont en contact : on dit qu'ils exercent une **pression**.

La **pression atmosphérique** est la pression exercée par l'atmosphère sur toutes les surfaces.

L'unité de pression dans le système international (SI) est le **Pascal (Pa)**, ou **hectopascal (hPa)**.

> **Au niveau de la mer** : P_atm = **1 013 hPa** = 1 bar

La pression atmosphérique **varie** avec l'altitude et la température.

### Compressibilité des gaz

Un gaz subit une **compression** lorsque son volume **diminue**. À l'inverse, il subit une **détente** lorsque son volume **augmente**.

| Propriété | Gaz | Liquides |
|-----------|-----|----------|
| Compressible ? | ✅ Oui (volume ↓ si pression ↑) | ❌ Non |
| Extensible ? | ✅ Oui (volume ↑ si pression ↓) | ❌ Non |
| Volume propre ? | ❌ Non (occupe tout l'espace disponible) | ✅ Oui |

> **À retenir** : Les **gaz sont compressibles et extensibles**. Les **liquides ne sont pas compressibles** et ont un volume propre.

---

## Partie 3 — La combustion

La **combustion** est une réaction chimique qui se produit en présence d'un **combustible** et d'un **comburant**, en dégageant de la chaleur et de la lumière.

| Terme | Définition | Exemple |
|-------|------------|---------|
| Combustible | Substance qui **brûle** | Méthane, bois, alcool |
| Comburant | Substance qui **permet** la combustion | Dioxygène (O₂) |

**Bilan de la combustion :**

combustible + comburant → produits + énergie (chaleur + lumière)

### L'équation chimique

Une équation chimique représente une transformation chimique. Les **réactifs** (ce qui disparaît) sont à gauche, les **produits** (ce qui se forme) sont à droite.

**Exemple : combustion du méthane**

CH₄ + 2 O₂ → CO₂ + 2 H₂O

> **À retenir** : Dans une équation chimique, le nombre d'atomes doit être **identique de chaque côté** (principe de conservation des atomes). On dit que l'équation est **équilibrée**.

---

## Partie 4 — La conservation de la masse

### Expérience

On place de la craie et de l'acide chlorhydrique dans un flacon fermé, sur une balance (masse mesurée : 635 g). Après la réaction (la craie se dissout), la balance indique toujours **635 g**.

### Interprétation

Lors d'une transformation chimique, les molécules des réactifs se **réarrangent** pour former de nouvelles molécules (les produits). Les **atomes** sont conservés : ils ne disparaissent pas, ils se réorganisent.

> **Loi de Lavoisier** : *« Rien ne se perd, rien ne se crée, tout se transforme. »*
>
> **Masse des réactifs = Masse des produits**

---

## Partie 5 — Les masses d'un gaz

Comme toute matière, un gaz **a une masse**, même si on ne la ressent pas directement.

Dans les conditions standard (25 °C, 1 atm) :

| Gaz | Masse par litre |
|-----|----------------|
| Air | ≈ 1,3 g/L |
| Dioxygène (O₂) | ≈ 1,4 g/L |
| Diazote (N₂) | ≈ 1,2 g/L |

> **À retenir** : Pour peser un gaz expérimentalement, on utilise la technique du **déplacement d'eau**.

---

## Mots-clés

| Mot-clé | Définition |
|---------|------------|
| Atmosphère | Couche de gaz qui entoure un astre |
| Pression | Force exercée par un gaz sur une surface (unité : Pa) |
| Pascal (Pa) | Unité internationale de la pression |
| Compression | Diminution du volume d'un gaz |
| Détente | Augmentation du volume d'un gaz |
| Combustion | Réaction chimique dégageant chaleur et lumière |
| Combustible | Ce qui brûle lors d'une combustion |
| Comburant | Ce qui permet la combustion (le dioxygène) |
| Réactifs | Espèces chimiques qui disparaissent lors d'une réaction |
| Produits | Espèces chimiques qui apparaissent lors d'une réaction |
| Conservation de la masse | La masse totale ne change pas lors d'une réaction chimique |
`,
  },

  // ─── QUIZ ──────────────────────────────────────────────────────────────────
  {
    slug: "pc-air-composition-proprietes-quiz",
    title: "Quiz — L'air : composition et propriétés",
    description:
      "3 niveaux de difficulté : Facile, Intermédiaire, Expert. Teste tes connaissances sur l'atmosphère, la pression, la combustion et la conservation de la masse !",
    type: "quiz",
    level: "4e",
    subject: "physique-chimie",
    chapter: "Chapitre 3 — L'air : composition et propriétés",
    createdAt: "2026-04-04T11:00:00Z",
    updatedAt: "2026-04-04T11:00:00Z",
    tags: [
      "air",
      "atmosphère",
      "pression",
      "combustion",
      "conservation",
      "masse",
      "quiz",
    ],
    quizData: {
      title: "Quiz — L'air : composition et propriétés",
      description:
        "Choisis ton niveau pour commencer. Conseil : commence par Facile pour te chauffer !",
      passingScore: 60,
      questions: [],
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description:
            "Définitions simples. Vrai ou faux. Questions courtes.",
          questions: [
            {
              id: "f1",
              question:
                "Une atmosphère est une couche de gaz qui entoure un astre. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "C'est exactement la définition d'une atmosphère : une couche de gaz entourant un astre (planète, lune…).",
            },
            {
              id: "f2",
              question: "Quel est le gaz le plus abondant dans l'air ?",
              type: "qcm",
              options: [
                "Le dioxygène (O₂)",
                "Le diazote (N₂)",
                "Le dioxyde de carbone (CO₂)",
                "La vapeur d'eau",
              ],
              correctAnswer: "Le diazote (N₂)",
              explanation:
                "L'air est composé de 78 % de diazote, 21 % de dioxygène et seulement 1 % d'autres gaz.",
            },
            {
              id: "f3",
              question:
                "La Lune possède une atmosphère. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "La Lune n'a pas d'atmosphère. En revanche, Vénus et Saturne en ont une.",
            },
            {
              id: "f4",
              question: "Quelle est l'unité de la pression dans le système international ?",
              type: "qcm",
              options: ["Le newton (N)", "Le pascal (Pa)", "Le joule (J)", "Le bar"],
              correctAnswer: "Le pascal (Pa)",
              explanation:
                "L'unité SI de la pression est le pascal (Pa). On utilise aussi l'hectopascal (hPa) en météorologie.",
            },
            {
              id: "f5",
              question:
                "Lors d'une combustion, le dioxygène est le ___.",
              type: "texte-a-trous",
              options: ["combustible", "comburant", "produit", "réactif unique"],
              correctAnswer: "comburant",
              explanation:
                "Le dioxygène est le comburant : c'est lui qui permet la combustion. Ce qui brûle s'appelle le combustible.",
            },
            {
              id: "f6",
              question:
                "Un gaz est compressible : son volume peut diminuer si on augmente la pression. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Contrairement aux liquides, les gaz sont compressibles : on peut réduire leur volume en augmentant la pression (comme dans une seringue bouchée).",
            },
            {
              id: "f7",
              question: "Lors d'une réaction chimique, la masse totale ___.",
              type: "qcm",
              options: [
                "Augmente",
                "Diminue",
                "Se conserve (reste identique)",
                "Disparaît complètement",
              ],
              correctAnswer: "Se conserve (reste identique)",
              explanation:
                "C'est la loi de Lavoisier : « Rien ne se perd, rien ne se crée, tout se transforme. » La masse des réactifs = la masse des produits.",
            },
            {
              id: "f8",
              question: "Quelle est la composition approximative de l'air ?",
              type: "qcm",
              options: [
                "50 % diazote, 50 % dioxygène",
                "78 % diazote, 21 % dioxygène, 1 % autres gaz",
                "21 % diazote, 78 % dioxygène, 1 % autres gaz",
                "100 % dioxygène",
              ],
              correctAnswer: "78 % diazote, 21 % dioxygène, 1 % autres gaz",
              explanation:
                "L'air est principalement composé de diazote (78 %), puis de dioxygène (21 %), et d'une petite quantité d'autres gaz (1 %).",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description:
            "Questions plus détaillées sur la pression, la combustion et les équations chimiques.",
          questions: [
            {
              id: "m1",
              question:
                "Quelle est la valeur de la pression atmosphérique au niveau de la mer ?",
              type: "qcm",
              options: [
                "100 Pa",
                "1 013 hPa",
                "500 hPa",
                "1 hPa",
              ],
              correctAnswer: "1 013 hPa",
              explanation:
                "Au niveau de la mer, la pression atmosphérique vaut 1 013 hPa, ce qui équivaut à 1 bar.",
            },
            {
              id: "m2",
              question:
                "Qu'est-ce qu'un combustible ?",
              type: "qcm",
              options: [
                "Une substance qui permet la combustion (le dioxygène)",
                "Une substance qui brûle en présence d'un comburant",
                "Un produit formé lors de la combustion",
                "Un gaz qui s'étend dans tout l'espace",
              ],
              correctAnswer: "Une substance qui brûle en présence d'un comburant",
              explanation:
                "Le combustible est ce qui brûle (méthane, bois, alcool…). Le comburant (dioxygène) est ce qui permet la combustion.",
            },
            {
              id: "m3",
              question:
                "Dans l'équation CH₄ + 2 O₂ → CO₂ + 2 H₂O, quels sont les réactifs ?",
              type: "qcm-multiple",
              options: ["CH₄ (méthane)", "O₂ (dioxygène)", "CO₂ (dioxyde de carbone)", "H₂O (eau)"],
              correctAnswer: ["CH₄ (méthane)", "O₂ (dioxygène)"],
              explanation:
                "Les réactifs sont les espèces qui disparaissent : le méthane (CH₄) et le dioxygène (O₂). Le CO₂ et l'H₂O sont les produits formés.",
            },
            {
              id: "m4",
              question:
                "Qu'est-ce qu'une compression pour un gaz ?",
              type: "qcm",
              options: [
                "Le gaz disparaît",
                "Le volume du gaz diminue",
                "Le volume du gaz augmente",
                "La pression du gaz diminue",
              ],
              correctAnswer: "Le volume du gaz diminue",
              explanation:
                "Un gaz subit une compression lorsque son volume diminue. À l'inverse, quand le volume augmente, on parle de détente.",
            },
            {
              id: "m5",
              question:
                "Quelle différence y a-t-il entre un gaz et un liquide concernant la compressibilité ?",
              type: "qcm",
              options: [
                "Les deux sont compressibles",
                "Les deux sont incompressibles",
                "Les gaz sont compressibles, les liquides ne le sont pas",
                "Les liquides sont compressibles, les gaz ne le sont pas",
              ],
              correctAnswer: "Les gaz sont compressibles, les liquides ne le sont pas",
              explanation:
                "Les gaz sont compressibles et extensibles. Les liquides ont un volume propre et ne sont pas compressibles.",
            },
            {
              id: "m6",
              question:
                "Lors de la réaction craie + acide chlorhydrique, on mesure 635 g avant la réaction. Quelle masse trouve-t-on après ?",
              type: "qcm",
              options: ["Moins de 635 g", "635 g", "Plus de 635 g", "0 g"],
              correctAnswer: "635 g",
              explanation:
                "D'après la loi de conservation de la masse (Lavoisier), la masse totale ne change pas lors d'une réaction chimique. On mesure toujours 635 g.",
            },
            {
              id: "m7",
              question:
                "Dans l'équation CH₄ + 2 O₂ → CO₂ + 2 H₂O, quel est le combustible ?",
              type: "qcm",
              options: [
                "O₂",
                "CO₂",
                "H₂O",
                "CH₄",
              ],
              correctAnswer: "CH₄",
              explanation:
                "Le méthane (CH₄) est le combustible : c'est lui qui brûle. Le dioxygène (O₂) est le comburant.",
            },
            {
              id: "m8",
              question:
                "Que se passe-t-il lors d'une transformation chimique au niveau moléculaire ?",
              type: "qcm",
              options: [
                "Les atomes disparaissent complètement",
                "Les molécules se réarrangent, les atomes sont conservés",
                "De nouveaux atomes apparaissent",
                "Rien ne change au niveau moléculaire",
              ],
              correctAnswer: "Les molécules se réarrangent, les atomes sont conservés",
              explanation:
                "Lors d'une transformation chimique, les molécules des réactifs se réarrangent pour former de nouvelles molécules (les produits). Les atomes sont conservés, ce qui explique la conservation de la masse.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description:
            "Équations chimiques, raisonnement scientifique, application des lois.",
          questions: [
            {
              id: "e1",
              question:
                "Remets dans l'ordre les étapes d'une réaction de combustion.",
              type: "ordre",
              options: [
                "Dégagement d'énergie (chaleur et lumière)",
                "Contact entre le combustible et le comburant",
                "Formation des produits",
                "Inflammation (amorçage de la réaction)",
              ],
              correctAnswer: [
                "Contact entre le combustible et le comburant",
                "Inflammation (amorçage de la réaction)",
                "Formation des produits",
                "Dégagement d'énergie (chaleur et lumière)",
              ],
              explanation:
                "La combustion nécessite d'abord le contact entre combustible et comburant, puis une source d'inflammation, ce qui entraîne la formation des produits et le dégagement d'énergie.",
            },
            {
              id: "e2",
              question:
                "La pression atmosphérique varie avec l'altitude. Comment évolue-t-elle quand on monte en altitude ?",
              type: "qcm",
              options: [
                "Elle augmente",
                "Elle diminue",
                "Elle reste constante",
                "Elle devient nulle immédiatement",
              ],
              correctAnswer: "Elle diminue",
              explanation:
                "Plus on monte en altitude, moins il y a de gaz au-dessus de soi, donc la pression atmosphérique diminue. C'est pourquoi il est plus difficile de respirer en haute montagne.",
            },
            {
              id: "e3",
              question:
                "Associe chaque terme à sa définition.",
              type: "association",
              pairs: [
                { left: "Atmosphère", right: "Couche de gaz entourant un astre" },
                { left: "Comburant", right: "Substance permettant la combustion (O₂)" },
                { left: "Compression", right: "Diminution du volume d'un gaz" },
                { left: "Produits", right: "Espèces chimiques formées lors d'une réaction" },
              ],
              correctAnswer: "association",
              explanation:
                "Atmosphère = couche de gaz, comburant = O₂ (ce qui permet la combustion), compression = volume qui diminue, produits = ce qui se forme lors d'une réaction.",
            },
            {
              id: "e4",
              question:
                "Dans l'équation suivante, combien y a-t-il d'atomes de H (hydrogène) au total dans les produits ? CH₄ + 2 O₂ → CO₂ + 2 H₂O",
              type: "qcm",
              options: ["2", "4", "6", "8"],
              correctAnswer: "4",
              explanation:
                "Dans 2 H₂O, il y a 2 × 2 = 4 atomes d'hydrogène. Ce nombre doit correspondre aux 4 atomes H dans CH₄ (côté gauche), ce qui confirme que l'équation est bien équilibrée.",
            },
            {
              id: "e5",
              question:
                "Parmi ces affirmations sur la conservation de la masse, lesquelles sont VRAIES ?",
              type: "qcm-multiple",
              options: [
                "La masse des réactifs est égale à la masse des produits",
                "Les atomes se conservent lors d'une transformation chimique",
                "La masse diminue toujours lors d'une combustion car de la chaleur est dégagée",
                "La loi de Lavoisier s'applique à toutes les réactions chimiques",
                "On peut créer de nouveaux atomes lors d'une réaction chimique",
              ],
              correctAnswer: [
                "La masse des réactifs est égale à la masse des produits",
                "Les atomes se conservent lors d'une transformation chimique",
                "La loi de Lavoisier s'applique à toutes les réactions chimiques",
              ],
              explanation:
                "La masse se conserve toujours (loi de Lavoisier). Les atomes se réarrangent mais ne disparaissent pas. La chaleur dégagée est de l'énergie, pas de la masse perdue. On ne crée jamais de nouveaux atomes lors d'une réaction chimique.",
            },
            {
              id: "e6",
              question:
                "Un flacon contient un gaz. On bouche le flacon et on comprime le gaz avec un piston. Que se passe-t-il ?",
              type: "qcm",
              options: [
                "Le volume du gaz reste identique car les gaz ne sont pas compressibles",
                "Le volume du gaz diminue et la pression augmente",
                "Le volume du gaz augmente et la pression diminue",
                "Le gaz se transforme en liquide instantanément",
              ],
              correctAnswer: "Le volume du gaz diminue et la pression augmente",
              explanation:
                "Un gaz est compressible : quand on réduit le volume disponible (compression), la pression augmente. C'est le principe de la seringue bouchée.",
            },
            {
              id: "e7",
              question:
                "L'air a une masse d'environ 1,3 g par litre. Un ballon contient 10 litres d'air. Quelle est la masse approximative de cet air ?",
              type: "qcm",
              options: ["0,13 g", "1,3 g", "13 g", "130 g"],
              correctAnswer: "13 g",
              explanation:
                "Masse = volume × masse volumique = 10 L × 1,3 g/L = 13 g. L'air a bien une masse, même si on ne la ressent pas facilement au quotidien.",
            },
            {
              id: "e8",
              question:
                "Pourquoi dit-on qu'une équation chimique doit être « équilibrée » ?",
              type: "qcm",
              options: [
                "Pour que la réaction soit plus rapide",
                "Pour respecter la conservation des atomes : même nombre d'atomes de chaque élément de chaque côté",
                "Pour que les produits aient plus de masse que les réactifs",
                "Pour que la réaction dégage plus de chaleur",
              ],
              correctAnswer: "Pour respecter la conservation des atomes : même nombre d'atomes de chaque élément de chaque côté",
              explanation:
                "D'après la loi de conservation de la masse (Lavoisier), les atomes ne se créent ni ne disparaissent. Une équation équilibrée respecte ce principe : le nombre d'atomes de chaque élément est identique à gauche et à droite de la flèche.",
            },
          ],
        },
      ],
    },
  },
];
