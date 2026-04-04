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
            {
              id: "f9",
              question: "Mercure (la planète) possède une atmosphère. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Mercure n'a pas d'atmosphère, tout comme la Lune. En revanche, Vénus et Saturne en possèdent une.",
            },
            {
              id: "f10",
              question: "Le dioxygène représente environ ___ % de l'air.",
              type: "texte-a-trous",
              options: ["1", "21", "78", "50"],
              correctAnswer: "21",
              explanation:
                "L'air contient 21 % de dioxygène. C'est ce dioxygène que nos poumons utilisent pour respirer.",
            },
            {
              id: "f11",
              question: "Qu'appelle-t-on « détente » pour un gaz ?",
              type: "qcm",
              options: [
                "Le gaz brûle",
                "Le volume du gaz diminue",
                "Le volume du gaz augmente",
                "Le gaz change de couleur",
              ],
              correctAnswer: "Le volume du gaz augmente",
              explanation:
                "La détente, c'est l'inverse de la compression : le volume du gaz augmente quand la pression diminue.",
            },
            {
              id: "f12",
              question:
                "La pression atmosphérique est plus forte en altitude qu'au niveau de la mer. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "C'est l'inverse : plus on monte en altitude, moins il y a de gaz au-dessus de nous, donc la pression atmosphérique diminue.",
            },
            {
              id: "f13",
              question:
                "Dans une combustion, qu'est-ce qui brûle ?",
              type: "qcm",
              options: ["Le comburant", "Le combustible", "Le produit", "Le pascal"],
              correctAnswer: "Le combustible",
              explanation:
                "Le combustible est la substance qui brûle (bois, méthane, alcool…). Le comburant (dioxygène) est ce qui permet la combustion.",
            },
            {
              id: "f14",
              question: "L'air a une masse. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Comme toute matière, l'air a une masse. Un litre d'air pèse environ 1,3 g dans les conditions normales.",
            },
            {
              id: "f15",
              question:
                "Complète la phrase de Lavoisier : « Rien ne se perd, rien ne se crée, ___ ».",
              type: "texte-a-trous",
              options: [
                "tout disparaît",
                "tout se transforme",
                "tout augmente",
                "tout brûle",
              ],
              correctAnswer: "tout se transforme",
              explanation:
                "La formule complète est : « Rien ne se perd, rien ne se crée, tout se transforme. » C'est la loi de conservation de la masse.",
            },
            {
              id: "f16",
              question: "Un liquide est compressible comme un gaz. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Les liquides ne sont pas compressibles et ont un volume propre. Seuls les gaz sont compressibles et extensibles.",
            },
            {
              id: "f17",
              question: "La notation chimique du diazote est ___.",
              type: "texte-a-trous",
              options: ["O₂", "CO₂", "N₂", "H₂O"],
              correctAnswer: "N₂",
              explanation:
                "Le diazote se note N₂ (deux atomes d'azote liés ensemble). C'est le gaz le plus abondant de l'air (78 %).",
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
            {
              id: "m9",
              question:
                "Dans l'équation CH₄ + 2 O₂ → CO₂ + 2 H₂O, quels sont les produits ?",
              type: "qcm-multiple",
              options: ["CH₄ (méthane)", "O₂ (dioxygène)", "CO₂ (dioxyde de carbone)", "H₂O (eau)"],
              correctAnswer: ["CO₂ (dioxyde de carbone)", "H₂O (eau)"],
              explanation:
                "Les produits sont les espèces qui se forment lors de la réaction : le dioxyde de carbone (CO₂) et l'eau (H₂O). Le méthane et le dioxygène sont les réactifs (ce qui disparaît).",
            },
            {
              id: "m10",
              question:
                "Associe chaque terme à sa description.",
              type: "association",
              pairs: [
                { left: "Réactifs", right: "Espèces chimiques qui disparaissent" },
                { left: "Produits", right: "Espèces chimiques qui se forment" },
                { left: "Combustible", right: "Ce qui brûle" },
                { left: "Comburant", right: "Ce qui permet la combustion" },
              ],
              correctAnswer: "association",
              explanation:
                "Réactifs = ce qui disparaît (avant la flèche), Produits = ce qui se forme (après la flèche), Combustible = ce qui brûle, Comburant = le dioxygène qui permet la combustion.",
            },
            {
              id: "m11",
              question:
                "Qu'est-ce qu'un hectopascal (hPa) ?",
              type: "qcm",
              options: [
                "1 000 Pa",
                "100 Pa",
                "0,01 Pa",
                "1 Pa",
              ],
              correctAnswer: "100 Pa",
              explanation:
                "Le préfixe « hecto » signifie 100. Donc 1 hPa = 100 Pa. La pression atmosphérique au niveau de la mer est de 1 013 hPa = 101 300 Pa.",
            },
            {
              id: "m12",
              question:
                "Un alpiniste gravit l'Everest (8 849 m). Que se passe-t-il avec la pression atmosphérique ?",
              type: "qcm",
              options: [
                "Elle est identique à celle au niveau de la mer",
                "Elle est beaucoup plus grande",
                "Elle est beaucoup plus faible",
                "Elle devient négative",
              ],
              correctAnswer: "Elle est beaucoup plus faible",
              explanation:
                "La pression atmosphérique diminue fortement avec l'altitude. Au sommet de l'Everest, elle est environ 3 fois plus faible qu'au niveau de la mer, ce qui explique pourquoi les alpinistes emportent de l'oxygène.",
            },
            {
              id: "m13",
              question:
                "Pourquoi place-t-on le flacon FERMÉ sur la balance lors de l'expérience craie + acide chlorhydrique ?",
              type: "qcm",
              options: [
                "Pour que la réaction soit plus rapide",
                "Pour ne pas perdre les gaz produits et respecter la conservation de la masse",
                "Pour que la balance donne une valeur plus précise",
                "Ce détail n'a aucune importance",
              ],
              correctAnswer: "Pour ne pas perdre les gaz produits et respecter la conservation de la masse",
              explanation:
                "Si le flacon était ouvert, les gaz produits s'échapperaient. La balance mesurerait alors moins de masse. En fermant le flacon, on mesure vraiment tous les produits et on peut vérifier la loi de Lavoisier.",
            },
            {
              id: "m14",
              question:
                "La combustion du méthane produit du dioxyde de carbone et de l'eau. Vrai ou Faux ?",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "D'après l'équation CH₄ + 2 O₂ → CO₂ + 2 H₂O, les produits de la combustion du méthane sont bien le dioxyde de carbone (CO₂) et l'eau (H₂O).",
            },
            {
              id: "m15",
              question:
                "La pression exercée par les gaz dépend de la surface de contact. Quelle est la bonne formulation ?",
              type: "qcm",
              options: [
                "Les gaz exercent une pression uniquement vers le bas",
                "Les gaz exercent une pression sur toutes les surfaces en contact",
                "Les gaz n'exercent aucune pression",
                "Les gaz n'exercent une pression que sur les surfaces horizontales",
              ],
              correctAnswer: "Les gaz exercent une pression sur toutes les surfaces en contact",
              explanation:
                "Les gaz poussent dans toutes les directions sur toutes les surfaces avec lesquelles ils sont en contact. C'est pour cela que la pression atmosphérique s'exerce aussi bien vers le bas, le haut, et les côtés.",
            },
            {
              id: "m16",
              question:
                "Parmi ces substances, lesquelles sont des combustibles ?",
              type: "qcm-multiple",
              options: ["Le bois", "Le dioxygène (O₂)", "L'alcool", "Le méthane (CH₄)", "Le diazote (N₂)"],
              correctAnswer: ["Le bois", "L'alcool", "Le méthane (CH₄)"],
              explanation:
                "Le bois, l'alcool et le méthane sont des combustibles : ils peuvent brûler. Le dioxygène est le comburant (il permet la combustion). Le diazote ne brûle pas et n'entretient pas la combustion.",
            },
            {
              id: "m17",
              question:
                "La notation chimique du dioxygène est ___.",
              type: "texte-a-trous",
              options: ["N₂", "CO₂", "H₂O", "O₂"],
              correctAnswer: "O₂",
              explanation:
                "Le dioxygène se note O₂ : deux atomes d'oxygène (O) liés ensemble. C'est ce gaz qui représente 21 % de l'air et qui est indispensable à la respiration et à la combustion.",
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
            {
              id: "e9",
              question:
                "Dans l'équation CH₄ + 2 O₂ → CO₂ + 2 H₂O, combien y a-t-il d'atomes d'oxygène (O) au total à gauche de la flèche ?",
              type: "qcm",
              options: ["2", "4", "6", "1"],
              correctAnswer: "4",
              explanation:
                "À gauche, on a 2 O₂, soit 2 × 2 = 4 atomes d'oxygène. À droite, CO₂ en contient 2 et 2 H₂O en contient 2 × 1 = 2, soit 4 au total. L'équation est bien équilibrée.",
            },
            {
              id: "e10",
              question:
                "Remets dans l'ordre les étapes permettant de vérifier la loi de conservation de la masse.",
              type: "ordre",
              options: [
                "Comparer les deux masses mesurées",
                "Peser le système avant la réaction",
                "Laisser la réaction avoir lieu dans le système fermé",
                "Peser le système après la réaction",
              ],
              correctAnswer: [
                "Peser le système avant la réaction",
                "Laisser la réaction avoir lieu dans le système fermé",
                "Peser le système après la réaction",
                "Comparer les deux masses mesurées",
              ],
              explanation:
                "Pour vérifier la loi de Lavoisier : 1) mesurer la masse initiale, 2) effectuer la réaction en système fermé (pour ne rien perdre), 3) mesurer la masse finale, 4) constater qu'elles sont identiques.",
            },
            {
              id: "e11",
              question:
                "Associe chaque gaz à sa formule chimique.",
              type: "association",
              pairs: [
                { left: "Diazote", right: "N₂" },
                { left: "Dioxygène", right: "O₂" },
                { left: "Dioxyde de carbone", right: "CO₂" },
                { left: "Eau (vapeur)", right: "H₂O" },
              ],
              correctAnswer: "association",
              explanation:
                "N₂ = diazote (78 % de l'air), O₂ = dioxygène (21 % de l'air, comburant), CO₂ = dioxyde de carbone (produit de la combustion), H₂O = eau (autre produit de la combustion du méthane).",
            },
            {
              id: "e12",
              question:
                "Le dioxygène est à 1,4 g/L. Quelle est la masse de 5 litres de dioxygène ?",
              type: "qcm",
              options: ["0,7 g", "1,4 g", "5 g", "7 g"],
              correctAnswer: "7 g",
              explanation:
                "Masse = volume × masse volumique = 5 L × 1,4 g/L = 7 g. Ce calcul simple montre que même un gaz invisible a une masse non négligeable.",
            },
            {
              id: "e13",
              question:
                "On brûle complètement 10 g de méthane dans un récipient fermé. La masse de CO₂ + H₂O produits vaut :",
              type: "qcm",
              options: [
                "Moins de 10 g car une partie s'est transformée en énergie",
                "Exactement 10 g",
                "Plus de 10 g car le dioxygène de l'air s'est ajouté aux réactifs",
                "0 g car le méthane a entièrement disparu",
              ],
              correctAnswer: "Plus de 10 g car le dioxygène de l'air s'est ajouté aux réactifs",
              explanation:
                "La masse totale des produits = masse du méthane + masse du dioxygène consommé. Les produits pèsent donc plus que le seul méthane. La masse totale (méthane + O₂ consommé) est bien conservée.",
            },
            {
              id: "e14",
              question:
                "Parmi ces phénomènes, lesquels sont des transformations chimiques (et non physiques) ?",
              type: "qcm-multiple",
              options: [
                "La combustion du bois",
                "La fusion de la glace en eau liquide",
                "La dissolution de la craie dans l'acide chlorhydrique",
                "L'ébullition de l'eau",
                "La combustion du méthane",
              ],
              correctAnswer: [
                "La combustion du bois",
                "La dissolution de la craie dans l'acide chlorhydrique",
                "La combustion du méthane",
              ],
              explanation:
                "Une transformation chimique produit de nouvelles espèces chimiques. La fusion et l'ébullition sont des changements d'état (transformations physiques) : l'eau reste de l'eau. La combustion et la dissolution de la craie dans l'acide produisent de nouvelles espèces (CO₂, H₂O, sels…).",
            },
            {
              id: "e15",
              question:
                "Une seringue contient 20 mL d'air. On bouche l'embout et on pousse le piston jusqu'à réduire le volume à 10 mL. La pression :",
              type: "qcm",
              options: [
                "Reste identique car la masse de l'air ne change pas",
                "Diminue de moitié",
                "Double environ",
                "Devient nulle",
              ],
              correctAnswer: "Double environ",
              explanation:
                "Quand on réduit le volume d'un gaz de moitié (compression), la pression double environ. C'est une propriété fondamentale des gaz compressibles. La masse de l'air reste identique, mais elle est concentrée dans un volume deux fois plus petit.",
            },
            {
              id: "e16",
              question:
                "Pourquoi Mercure (la planète) n'a-t-il pas d'atmosphère alors qu'il est proche du Soleil ?",
              type: "qcm",
              options: [
                "Car il est trop loin du Soleil",
                "Car sa gravité est trop faible pour retenir les gaz qui s'échappent dans l'espace",
                "Car il est entièrement recouvert d'eau",
                "Car son atmosphère est uniquement composée de dioxygène",
              ],
              correctAnswer: "Car sa gravité est trop faible pour retenir les gaz qui s'échappent dans l'espace",
              explanation:
                "Une atmosphère se maintient grâce à la gravité de l'astre. Mercure est suffisamment petit pour que sa gravité ne puisse pas retenir les molécules de gaz, qui finissent par s'échapper dans l'espace.",
            },
            {
              id: "e17",
              question:
                "Dans l'équation CH₄ + 2 O₂ → CO₂ + 2 H₂O, vérifie que le nombre d'atomes de carbone (C) est conservé. Quelle affirmation est correcte ?",
              type: "qcm",
              options: [
                "1 atome C à gauche (dans CH₄) et 1 atome C à droite (dans CO₂) : l'équation est équilibrée pour C",
                "1 atome C à gauche et 2 atomes C à droite : l'équation n'est pas équilibrée",
                "4 atomes C à gauche et 1 atome C à droite : l'équation n'est pas équilibrée",
                "Il n'y a pas de carbone dans cette équation",
              ],
              correctAnswer: "1 atome C à gauche (dans CH₄) et 1 atome C à droite (dans CO₂) : l'équation est équilibrée pour C",
              explanation:
                "CH₄ contient 1 atome de carbone (C). CO₂ contient aussi 1 atome de carbone. Le carbone est bien conservé (1 = 1). En appliquant ce raisonnement à tous les éléments (H et O), on vérifie que l'équation est équilibrée.",
            },
          ],
        },
      ],
    },
  },
];
