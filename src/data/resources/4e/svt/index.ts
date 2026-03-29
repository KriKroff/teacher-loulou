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
    customComponent: "SVTPuberteFiche",
    createdAt: "2026-03-29T10:00:00Z",
    updatedAt: "2026-03-29T10:00:00Z",
    tags: ["puberté", "reproduction", "hormones", "cycle", "fiche"],
    content: `
# La puberté et la reproduction humaine

---

## Partie 1 — La puberté

La puberté, c'est la période où le corps change. L'appareil reproducteur devient fonctionnel. C'est déclenché par les **hormones**, vers 10–14 ans.

### Changements chez le garçon
- Poils, muscles, mue de la voix
- Acné, poussée de croissance
- Testicules et pénis grandissent
- Production de sperme

### Changements chez la fille
- Poitrine, hanches s'élargissent
- Poils, acné, poussée de croissance
- Ovaires et utérus grandissent
- Premières règles (ménarche)

> **À retenir** : Puberté = hormones → corps change → appareil reproducteur fonctionnel.

| Type | Quand ? | Exemples |
|------|---------|----------|
| Caractères primaires | Présents dès la naissance. Grandissent à la puberté. | Pénis, vagin, ovaires, testicules |
| Caractères secondaires | Absents à la naissance. Apparaissent à la puberté. | Poitrine, pilosité, voix grave |

---

## Partie 2 — L'appareil reproducteur masculin

Les testicules fabriquent des spermatozoïdes toute la vie, à partir de la puberté.

> **À retenir** : Sperme = spermatozoïdes + liquide séminal. Trajet : testicule → épididyme → canal déférent → prostate → urètre.

| Organe | Rôle |
|--------|------|
| Testicule | Fabrique les spermatozoïdes (dans les tubes séminifères) |
| Épididyme | Stockage + les spermatozoïdes deviennent mobiles |
| Canal déférent | Transporte les spermatozoïdes vers l'urètre |
| Vésicules séminales + Prostate | Produisent le liquide séminal → forme le sperme |
| Urètre | Voie de sortie du sperme lors de l'éjaculation |

---

## Partie 3 — L'appareil reproducteur féminin

À partir de la puberté, un ovule est libéré environ tous les 28 jours : c'est l'**ovulation**. Ce fonctionnement s'arrête à la ménopause, vers 50 ans.

> **À retenir** : Fécondation = dans les trompes. Pas de fécondation → endomètre éliminé = règles.

| Organe | Rôle |
|--------|------|
| Ovaires | Produisent et libèrent un ovule par cycle (ovulation) |
| Trompes de Fallope | Conduisent l'ovule vers l'utérus. Lieu de la fécondation. |
| Utérus | Accueille l'embryon si fécondation. Sinon → règles. |
| Col de l'utérus | Jonction utérus/vagin. Les spermatozoïdes passent par là. |
| Vagin | Voie de copulation. Reçoit le sperme. |

---

## Partie 4 — Le cycle féminin (~28 jours)

Le cycle commence au **Jour 1** des règles. Il dure 28 jours en moyenne (entre 21 et 35 jours selon les personnes).

> **À retenir** : Cycle = 28 jours. Jour 1 = règles. Ovulation = prochaines règles − 14 jours.

| Durée du cycle | Calcul | Date de l'ovulation |
|----------------|--------|---------------------|
| 28 jours | J1 + 28 = J28 → J28 − 14 | Jour 14 |
| 32 jours | J1 + 32 = J32 → J32 − 14 | Jour 18 |
| 21 jours | J1 + 21 = J21 → J21 − 14 | Jour 7 |

---

## Partie 5 — Les émotions à l'adolescence

Les hormones changent aussi les émotions et les comportements. Ce n'est pas un choix — c'est biologique.

> **À retenir** : Sautes d'humeur et agressivité à l'ado = causées par les hormones. C'est biologique, pas un défaut.

| Ce qu'on ressent | Ce que ça provoque |
|------------------|--------------------|
| Gêne / inquiétude par rapport au corps | Importance de l'image de soi. L'opinion des autres compte beaucoup. |
| Se sentir différent des autres | Sautes d'humeur, manque de confiance, émotivité. |
| Envie d'être plus indépendant | Contestation des adultes, parfois agressivité. |
| Peur de ne plus être protégé | Comportements risqués : alcool, conduite sans casque, rapports non protégés. |

---

## Partie 6 — Les mots-clés

> **À retenir** : Spermatozoïde ≠ sperme. Ovule ≠ ovulation. Ménarche = premières règles. Ménopause = fin des cycles.

| Mot-clé | Définition |
|---------|-----------|
| Puberté | Période déclenchée par les hormones. Le corps change. L'appareil reproducteur devient fonctionnel. |
| Hormone | Substance chimique produite par une glande. Elle transporte un message dans le sang. |
| Caractères primaires | Organes reproducteurs présents dès la naissance (pénis, vagin, ovaires…). |
| Caractères secondaires | Apparaissent seulement à la puberté (poitrine, pilosité, voix grave…). |
| Spermatozoïde | Cellule reproductrice du garçon. Mobile grâce à un flagelle. Fabriquée dans les testicules. |
| Sperme | Spermatozoïdes + liquide séminal. ≠ spermatozoïde seul. |
| Épididyme | Organe sur le testicule. C'est là que les spermatozoïdes deviennent mobiles. |
| Ovule | Cellule reproductrice de la fille. Libérée lors de l'ovulation. |
| Ovulation | Libération d'un ovule par un ovaire. Environ 14 jours avant les prochaines règles. |
| Endomètre | Muqueuse interne de l'utérus. S'épaissit chaque cycle. Si pas de fécondation → éliminée = règles. |
| Fécondation | Union spermatozoïde + ovule. Se passe dans les trompes de Fallope. |
| Règles (menstruations) | Élimination de l'endomètre si pas de fécondation. = Jour 1 du nouveau cycle. |
| Ménarche | Premières règles. Signe que l'appareil féminin fonctionne. |
| Ménopause | Arrêt définitif des cycles vers 50 ans. Fin de la fertilité. |

---

## Partie 7 — La méthode pour analyser un document

Quand tu as un graphique ou un tableau, tu suis toujours ces 4 étapes dans le même ordre.

**1. Présenter le document.** Quel type ? Que représente-t-il ? Quelles unités ?

**2. Je vois que…** Tu décris ce que tu observes avec des **chiffres et des unités**. Exemple : *"Le volume des testicules passe de 1 mL à 6,5 mL entre 10 et 17 ans."*

**3. Or je sais que…** Tu rappelles une **connaissance du cours** qui explique ce que tu observes.

**4. J'en conclus que…** Tu donnes ta **conclusion** en lien avec la question posée.

> **À retenir** : Méthode scientifique : Je vois → Or je sais → J'en conclus. TOUJOURS des chiffres et des unités dans "Je vois que…".
    `,
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
          ],
        },
      ],
    },
  },
];
