import type { Resource } from "@/types";

export const resources: Resource[] = [
  {
    slug: "conjugaison-present-indicatif",
    title: "Le présent de l'indicatif",
    description:
      "Révise les conjugaisons du présent de l'indicatif pour les trois groupes de verbes.",
    type: "cours",
    level: "4e",
    subject: "francais",
    createdAt: "2026-03-28T10:00:00Z",
    updatedAt: "2026-03-28T10:00:00Z",
    tags: ["conjugaison", "présent", "verbes"],
    content: `
# Le présent de l'indicatif

Le présent de l'indicatif est le temps le plus utilisé en français. Il sert à exprimer :

- Une **action qui se passe maintenant** : *Je mange une pomme.*
- Une **habitude** : *Je me lève à 7h tous les matins.*
- Une **vérité générale** : *La Terre tourne autour du Soleil.*

---

## Les verbes du 1er groupe (-er)

Les terminaisons sont : **-e, -es, -e, -ons, -ez, -ent**

| Pronom | Chanter |
|--------|---------|
| Je | chant**e** |
| Tu | chant**es** |
| Il/Elle | chant**e** |
| Nous | chant**ons** |
| Vous | chant**ez** |
| Ils/Elles | chant**ent** |

> **Astuce DYS** : Remarque que je, tu, il/elle ont presque la même terminaison (e, es, e). Retiens : "e, es, e" comme une petite chanson !

---

## Les verbes du 2ème groupe (-ir → -issant)

Les terminaisons sont : **-is, -is, -it, -issons, -issez, -issent**

| Pronom | Finir |
|--------|-------|
| Je | fin**is** |
| Tu | fin**is** |
| Il/Elle | fin**it** |
| Nous | fin**issons** |
| Vous | fin**issez** |
| Ils/Elles | fin**issent** |

> **Astuce** : Au pluriel, on ajoute toujours **-iss-** avant la terminaison !

---

## Les verbes du 3ème groupe (irréguliers)

Ce sont les verbes "rebelles" ! Chacun a ses propres terminaisons. Voici les plus courants :

### Être
Je **suis**, tu **es**, il **est**, nous **sommes**, vous **êtes**, ils **sont**

### Avoir
J'**ai**, tu **as**, il **a**, nous **avons**, vous **avez**, ils **ont**

### Aller
Je **vais**, tu **vas**, il **va**, nous **allons**, vous **allez**, ils **vont**

---

## Pour bien retenir

1. **Lis à voix haute** les conjugaisons (ça aide beaucoup !)
2. **Écris** chaque verbe 3 fois
3. **Invente une phrase** pour chaque personne
4. Fais le **quiz** associé pour tester tes connaissances !
    `,
  },
  {
    slug: "quiz-present-indicatif",
    title: "Quiz : Le présent de l'indicatif",
    description:
      "Teste tes connaissances sur le présent de l'indicatif avec ce quiz interactif !",
    type: "quiz",
    level: "4e",
    subject: "francais",
    createdAt: "2026-03-28T11:00:00Z",
    updatedAt: "2026-03-28T11:00:00Z",
    tags: ["conjugaison", "présent", "quiz"],
    quizData: {
      title: "Le présent de l'indicatif",
      description: "10 questions pour maîtriser le présent !",
      passingScore: 60,
      questions: [
        {
          id: "q1",
          question: 'Comment conjugue-t-on "chanter" avec "nous" ?',
          type: "qcm",
          options: [
            "Nous chantons",
            "Nous chanteons",
            "Nous chantons",
            "Nous chante",
          ],
          correctAnswer: "Nous chantons",
          explanation:
            "Les verbes du 1er groupe prennent la terminaison -ons avec 'nous'.",
          hint: "La terminaison pour 'nous' est toujours -ons au présent !",
        },
        {
          id: "q2",
          question: '"Je finir" au présent donne :',
          type: "qcm",
          options: ["Je finis", "Je finit", "Je fini", "Je finise"],
          correctAnswer: "Je finis",
          explanation:
            "Les verbes du 2ème groupe prennent -is avec 'je' au présent.",
        },
        {
          id: "q3",
          question: '"Ils être" au présent donne :',
          type: "qcm",
          options: ["Ils sont", "Ils es", "Ils est", "Ils sommes"],
          correctAnswer: "Ils sont",
          explanation: "'Être' est un verbe irrégulier : ils sont.",
        },
        {
          id: "q4",
          question:
            "Vrai ou Faux : Au présent, les verbes du 1er groupe se terminent toujours par -ent avec 'ils'.",
          type: "vrai-faux",
          options: ["Vrai", "Faux"],
          correctAnswer: "Vrai",
          explanation:
            "Oui ! Avec 'ils/elles', les verbes du 1er groupe se terminent par -ent (ils chantent, ils parlent...).",
        },
        {
          id: "q5",
          question: '"Tu avoir" au présent donne :',
          type: "qcm",
          options: ["Tu as", "Tu a", "Tu aies", "Tu avons"],
          correctAnswer: "Tu as",
          explanation:
            "'Avoir' est irrégulier : j'ai, tu as, il a, nous avons, vous avez, ils ont.",
        },
        {
          id: "q6",
          question: 'Quelle est la terminaison de "vous" pour les verbes du 2ème groupe ?',
          type: "qcm",
          options: ["-issez", "-ez", "-issons", "-issiez"],
          correctAnswer: "-issez",
          explanation:
            "Au 2ème groupe, avec 'vous' : fin-issez, chois-issez...",
          hint: "Pense au -iss- qui s'ajoute au pluriel !",
        },
        {
          id: "q7",
          question: '"Nous aller" au présent donne :',
          type: "qcm",
          options: ["Nous allons", "Nous alons", "Nous vont", "Nous allont"],
          correctAnswer: "Nous allons",
          explanation: "'Aller' est irrégulier mais 'nous' prend -ons : nous allons.",
        },
        {
          id: "q8",
          question:
            "Vrai ou Faux : 'Je fini' est une conjugaison correcte au présent.",
          type: "vrai-faux",
          options: ["Vrai", "Faux"],
          correctAnswer: "Faux",
          explanation:
            "C'est 'je finis' avec un -s ! Au présent, 'je' prend toujours -is pour le 2ème groupe.",
        },
      ],
    },
  },
  {
    slug: "figures-de-style",
    title: "Les figures de style",
    description:
      "Découvre les principales figures de style utilisées en littérature.",
    type: "fiche",
    level: "4e",
    subject: "francais",
    createdAt: "2026-03-27T14:00:00Z",
    updatedAt: "2026-03-27T14:00:00Z",
    tags: ["littérature", "figures de style", "fiche"],
    content: `
# Les figures de style

Les figures de style, c'est comme des **super-pouvoirs** de l'écriture. Elles rendent un texte plus vivant, plus beau, plus fort.

---

## La comparaison

On compare deux choses avec un **mot-outil** : *comme, tel que, semblable à, pareil à...*

> *Il est **fort comme** un lion.*

Le mot-outil ici est **"comme"**.

---

## La métaphore

C'est une comparaison **sans mot-outil**. C'est plus direct !

> *Cet homme est **un lion**.*

Pas de "comme" → c'est une métaphore.

> **Truc pour s'en souvenir** : Métaphore = comparaison invisible (pas de "comme")

---

## La personnification

On donne des **qualités humaines** à un objet ou un animal.

> *Le vent **murmure** entre les arbres.*

Le vent ne peut pas vraiment murmurer, c'est une action humaine !

---

## L'hyperbole

On **exagère** pour frapper l'imagination.

> *Je meurs de faim !*
> *Il pleut des cordes !*

Tu ne meurs pas vraiment... c'est une hyperbole !

---

## L'antithèse

On rapproche deux idées **opposées** dans la même phrase.

> *C'est un **petit** pas pour l'homme, un **grand** pas pour l'humanité.*

---

## Pour retenir

| Figure | Mot-clé | Exemple rapide |
|--------|---------|----------------|
| Comparaison | "comme" | Fort **comme** un lion |
| Métaphore | Pas de "comme" | Il **est** un lion |
| Personnification | Objet → humain | Le vent **chante** |
| Hyperbole | Exagération | Je **meurs** de faim |
| Antithèse | Opposés | Petit / Grand |
    `,
  },
];
