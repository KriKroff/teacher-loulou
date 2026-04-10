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

  // ─── FICHE DE RÉVISION : L'IMPARFAIT ────────────────────────────────────────
  {
    slug: "imparfait-indicatif-fiche",
    title: "L'imparfait de l'indicatif",
    description:
      "Fiche de révision : formation, terminaisons, valeurs et cas particuliers de l'imparfait de l'indicatif.",
    type: "fiche",
    level: "4e",
    subject: "francais",
    chapter: "Conjugaison — L'imparfait de l'indicatif",
    createdAt: "2026-04-10T18:00:00Z",
    updatedAt: "2026-04-10T18:00:00Z",
    tags: ["conjugaison", "imparfait", "verbes", "fiche"],
    content: `
# 📝 L'imparfait de l'indicatif

---

## 🔎 Définition

L'imparfait est un **temps du passé**.

Il présente une action passée **sans préciser ni le début ni la fin**.

Il envisage l'action dans la **durée**, de façon étendue.

> 💡 **À retenir** : Imparfait = action passée qui **dure** ou se **répète**.

---

## 🎯 Les 3 valeurs de l'imparfait

### Valeur 1 — La description 🏞️

L'imparfait sert à **décrire** un lieu, un paysage ou un personnage.

Il **installe le cadre** d'un récit.

> *La maison **était** grande. Le jardin **s'étendait** à perte de vue.*

---

### Valeur 2 — L'habitude ou la répétition 🔁

L'imparfait sert à parler d'**habitudes** du quotidien dans le passé.

On parle aussi de **répétition**, quand une action se répète.

> *Chaque soir, il **fermait** ses volets et **allumait** la lampe.*

Mots-indices : *chaque jour, tous les matins, souvent, d'habitude…*

---

### Valeur 3 — L'arrière-plan du récit 🎬

Dans un récit, l'imparfait pose le **décor** et exprime une action qui dure.

Le **passé simple** peut venir **interrompre** l'action soudainement.

> *Il **pleuvait** (imparfait) quand soudain un coup de tonnerre **retentit** (passé simple).*

| Imparfait (décor qui dure) | Passé simple (action soudaine) |
|---|---|
| Il **pleuvait** | un coup de tonnerre **retentit** |
| Les oiseaux **chantaient** | un cri **déchira** le silence |

---

## ⚙️ Formation de l'imparfait

### La règle d'or 🥇

> 1. On prend le verbe conjugué avec **« nous »** au **présent**
> 2. On enlève la terminaison **-ons**
> 3. On ajoute les terminaisons de l'imparfait

### Les terminaisons à connaître par cœur

| Pronom | Terminaison |
|--------|-------------|
| Je | **-ais** |
| Tu | **-ais** |
| Il / Elle / On | **-ait** |
| Nous | **-ions** |
| Vous | **-iez** |
| Ils / Elles | **-aient** |

> **Astuce** 🧠 : *Je* et *Tu* ont la **même terminaison** (-ais). *Il/Elle* c'est presque pareil (-ait). Retiens : **« ais, ais, ait »** — ça se prononce pareil !

> **Astuce** 🧠 : Au pluriel, pense à **-ions** pour *nous* et **-iez** pour *vous*. On entend bien le son « i » !

---

## 📋 Conjugaisons par groupe

### 1er groupe (-er) : Chanter

Nous chant**ons** au présent → radical = **chant-**

| Pronom | Conjugaison |
|--------|-------------|
| Je | chant**ais** |
| Tu | chant**ais** |
| Il/Elle | chant**ait** |
| Nous | chant**ions** |
| Vous | chant**iez** |
| Ils/Elles | chant**aient** |

---

### 2ème groupe (-ir → -issant) : Finir

Nous fin**issons** au présent → radical = **finiss-**

| Pronom | Conjugaison |
|--------|-------------|
| Je | finiss**ais** |
| Tu | finiss**ais** |
| Il/Elle | finiss**ait** |
| Nous | finiss**ions** |
| Vous | finiss**iez** |
| Ils/Elles | finiss**aient** |

> **Astuce** 💡 : Le **-iss-** du 2ème groupe est toujours là à l'imparfait ! C'est la marque du 2ème groupe.

---

### 3ème groupe : Prendre, Faire, Voir, Pouvoir

| Pronom | Prendre | Faire | Voir | Pouvoir |
|--------|---------|-------|------|---------|
| Je | pren**ais** | fais**ais** | voy**ais** | pouv**ais** |
| Tu | pren**ais** | fais**ais** | voy**ais** | pouv**ais** |
| Il/Elle | pren**ait** | fais**ait** | voy**ait** | pouv**ait** |
| Nous | pren**ions** | fais**ions** | voy**ions** | pouv**ions** |
| Vous | pren**iez** | fais**iez** | voy**iez** | pouv**iez** |
| Ils/Elles | pren**aient** | fais**aient** | voy**aient** | pouv**aient** |

---

### Être et Avoir

| Pronom | Être | Avoir |
|--------|------|-------|
| Je/J' | **étais** | av**ais** |
| Tu | **étais** | av**ais** |
| Il/Elle | **était** | av**ait** |
| Nous | **étions** | av**ions** |
| Vous | **étiez** | av**iez** |
| Ils/Elles | **étaient** | av**aient** |

> ⚠️ **Attention** : **Être** est le seul verbe avec un radical irrégulier à l'imparfait : **ét-** (on ne dit pas « je sommais » !).

> **Avoir** suit la règle normale : nous av**ons** → radical **av-**.

---

## ⚠️ Les pièges à éviter

### Verbes en -ger (manger, nager, voyager…)

On garde le **e** devant **a** pour garder le son « j » :

> Je mang**e**ais, tu mang**e**ais, il mang**e**ait, ils mang**e**aient

> **Mais** : nous mang**ions**, vous mang**iez** *(pas de e car le g devant i est déjà doux)*

---

### Verbes en -cer (placer, commencer, lancer…)

On met un **ç** devant **a** pour garder le son « s » :

> Je pla**ç**ais, tu pla**ç**ais, il pla**ç**ait, ils pla**ç**aient

> **Mais** : nous pla**c**ions, vous pla**c**iez *(pas de ç car le c devant i est déjà doux)*

---

### Verbes en -ier (crier, étudier, oublier…)

Attention au **double i** avec nous et vous !

> Nous cri**ions** (cri + ions), vous cri**iez** (cri + iez)

> **Astuce** 🧠 : Le premier *i* vient du radical, le deuxième de la terminaison. On ne peut pas en supprimer un !

---

## 📝 Pour bien retenir

1. **Lis à voix haute** les conjugaisons — les terminaisons du singulier se prononcent pareil !
2. **Écris** les terminaisons **-ais, -ais, -ait, -ions, -iez, -aient** plusieurs fois
3. **Invente des phrases** à l'imparfait pour chaque personne
4. Fais le **quiz** pour tester tes connaissances !

> 🎯 **Prêt(e) à te tester ?** → [Faire le quiz sur l'imparfait →](/4e/francais/imparfait-indicatif-quiz)
    `,
  },

  // ─── QUIZ : L'IMPARFAIT DE L'INDICATIF (3 niveaux) ─────────────────────────
  {
    slug: "imparfait-indicatif-quiz",
    title: "Quiz — L'imparfait de l'indicatif",
    description:
      "3 niveaux de difficulté : Facile, Intermédiaire, Expert. 10 questions par session tirées d'une banque de 60+ questions sur la conjugaison de l'imparfait.",
    type: "quiz",
    level: "4e",
    subject: "francais",
    chapter: "Conjugaison — L'imparfait de l'indicatif",
    createdAt: "2026-04-10T18:00:00Z",
    updatedAt: "2026-04-10T19:30:00Z",
    tags: ["conjugaison", "imparfait", "verbes", "quiz"],
    quizData: {
      title: "Quiz — L'imparfait de l'indicatif",
      description:
        "Choisis ton niveau pour commencer. Conseil : commence par Facile pour te chauffer !",
      passingScore: 60,
      sessionSize: 10,
      questions: [],
      levels: [
        // ── NIVEAU FACILE ────────────────────────────────────────────────────
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Terminaisons, reconnaissance et conjugaisons simples.",
          questions: [
            {
              id: "f1",
              type: "conjugaison",
              question: "Conjugue « chanter » à l'imparfait (je, tu, il/elle).",
              options: ["je", "tu", "il/elle"],
              correctAnswer: ["chantais", "chantais", "chantait"],
              explanation:
                "Radical « chant- » (nous chantons → chant-) + les terminaisons -ais, -ais, -ait.",
            },
            {
              id: "f2",
              type: "vrai-faux",
              question: "L'imparfait sert à exprimer une action passée qui dure ou se répète.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "L'imparfait présente une action passée dans la durée, sans préciser son début ni sa fin. Il sert aussi à exprimer des habitudes passées.",
            },
            {
              id: "f3",
              type: "conjugaison",
              question: "Conjugue « finir » à l'imparfait (je, nous, ils/elles).",
              options: ["je", "nous", "ils/elles"],
              correctAnswer: ["finissais", "finissions", "finissaient"],
              explanation:
                "Radical « finiss- » (nous finissons → finiss-). Le -iss- est la marque du 2ème groupe, toujours présente à l'imparfait.",
            },
            {
              id: "f4",
              type: "qcm",
              question: "Quelles sont les terminaisons de l'imparfait de l'indicatif ?",
              options: [
                "-ais, -ais, -ait, -ions, -iez, -aient",
                "-e, -es, -e, -ons, -ez, -ent",
                "-ai, -as, -a, -âmes, -âtes, -èrent",
                "-ais, -ais, -ait, -ons, -ez, -aient",
              ],
              correctAnswer: "-ais, -ais, -ait, -ions, -iez, -aient",
              explanation:
                "Les terminaisons de l'imparfait sont toujours : -ais, -ais, -ait, -ions, -iez, -aient. Elles sont les mêmes pour tous les groupes !",
            },
            {
              id: "f5",
              type: "vrai-faux",
              question: "« Il chantais » est correctement conjugué à l'imparfait.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Avec « il/elle/on », la terminaison est -ait (pas -ais). La forme correcte est « il chantait ».",
            },
            {
              id: "f6",
              type: "intrus",
              question: "Quel verbe n'est PAS conjugué à l'imparfait ?",
              options: ["chantait", "finissais", "allons", "prenaient"],
              correctAnswer: "allons",
              explanation:
                "« Allons » est au présent de l'indicatif. Les autres (chantait, finissais, prenaient) sont à l'imparfait.",
            },
            {
              id: "f7",
              type: "conjugaison",
              question: "Conjugue « avoir » à l'imparfait (j', tu, elle).",
              options: ["j'", "tu", "elle"],
              correctAnswer: ["avais", "avais", "avait"],
              explanation:
                "Avoir → nous avons → radical « av- ». J'avais, tu avais, elle avait.",
            },
            {
              id: "f8",
              type: "vrai-faux",
              question: "Pour former l'imparfait, on utilise le radical du verbe conjugué avec « nous » au présent.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "C'est la règle d'or ! On prend la forme « nous » au présent, on enlève -ons, et on ajoute les terminaisons de l'imparfait.",
            },
            {
              id: "f9",
              type: "texte-a-trous",
              question: "Je ___ (parler) avec mon ami hier.",
              options: ["parlais", "parlait", "parlai", "parle"],
              correctAnswer: "parlais",
              explanation:
                "Avec « je », la terminaison de l'imparfait est -ais : je parlais.",
            },
            {
              id: "f10",
              type: "conjugaison",
              question: "Conjugue « être » à l'imparfait (je, il/elle, ils/elles).",
              options: ["je", "il/elle", "ils/elles"],
              correctAnswer: ["étais", "était", "étaient"],
              explanation:
                "« Être » a un radical irrégulier à l'imparfait : « ét- ». C'est le seul verbe irrégulier à l'imparfait.",
            },
            {
              id: "f11",
              type: "vrai-faux",
              question: "À l'imparfait, « je » et « tu » ont la même terminaison (-ais).",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Oui ! Je chantais, tu chantais. La terminaison -ais est identique pour je et tu.",
            },
            {
              id: "f12",
              type: "qcm",
              question: "Quelle est la terminaison de l'imparfait pour « vous » ?",
              options: ["-iez", "-ez", "-ais", "-ions"],
              correctAnswer: "-iez",
              explanation:
                "Avec « vous », la terminaison de l'imparfait est toujours -iez.",
            },
            {
              id: "f13",
              type: "texte-a-trous",
              question: "Elle ___ (avoir) un chat quand elle était petite.",
              options: ["avait", "avais", "avaient", "a"],
              correctAnswer: "avait",
              explanation:
                "Avec « elle », la terminaison est -ait : elle avait.",
            },
            {
              id: "f14",
              type: "conjugaison",
              question: "Conjugue « aller » à l'imparfait (nous, vous, ils/elles).",
              options: ["nous", "vous", "ils/elles"],
              correctAnswer: ["allions", "alliez", "allaient"],
              explanation:
                "Radical « all- » (nous allons → all-). Nous allions, vous alliez, ils allaient.",
            },
            {
              id: "f15",
              type: "intrus",
              question: "Quel verbe est au présent et non à l'imparfait ?",
              options: ["dansait", "courait", "mange", "lisait"],
              correctAnswer: "mange",
              explanation:
                "« Mange » est au présent. Les autres (dansait, courait, lisait) se terminent par -ait, marque de l'imparfait.",
            },
            {
              id: "f16",
              type: "conjugaison",
              question: "Conjugue « faire » à l'imparfait (je, tu, vous).",
              options: ["je", "tu", "vous"],
              correctAnswer: ["faisais", "faisais", "faisiez"],
              explanation:
                "Radical « fais- » (nous faisons → fais-). Je faisais, tu faisais, vous faisiez.",
            },
            {
              id: "f17",
              type: "texte-a-trous",
              question: "Tu ___ (être) en retard ce matin-là.",
              options: ["étais", "était", "étaient", "es"],
              correctAnswer: "étais",
              explanation:
                "Avec « tu », la terminaison est -ais : tu étais. Le radical irrégulier de « être » est « ét- ».",
            },
            {
              id: "f18",
              type: "vrai-faux",
              question: "L'imparfait sert à décrire un lieu ou un personnage dans un récit.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "C'est la valeur de description de l'imparfait. Il sert à installer le cadre, décrire un lieu, un paysage ou un personnage.",
            },
            {
              id: "f19",
              type: "qcm",
              question: "Quel est le radical de « finir » à l'imparfait ?",
              options: ["finiss-", "fin-", "fini-", "finis-"],
              correctAnswer: "finiss-",
              explanation:
                "Nous finissons → on enlève -ons → radical = finiss-. Le -iss- est la marque du 2ème groupe, présente à l'imparfait.",
            },
            {
              id: "f20",
              type: "conjugaison",
              question: "Conjugue « pouvoir » à l'imparfait (je, il/elle, nous).",
              options: ["je", "il/elle", "nous"],
              correctAnswer: ["pouvais", "pouvait", "pouvions"],
              explanation:
                "Radical « pouv- » (nous pouvons → pouv-). Je pouvais, il pouvait, nous pouvions.",
            },
          ],
        },

        // ── NIVEAU INTERMÉDIAIRE ─────────────────────────────────────────────
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Cas particuliers, valeurs de l'imparfait et verbes variés.",
          questions: [
            {
              id: "i1",
              type: "conjugaison",
              question: "Conjugue « manger » à l'imparfait (je, nous, ils/elles).",
              options: ["je", "nous", "ils/elles"],
              correctAnswer: ["mangeais", "mangions", "mangeaient"],
              explanation:
                "Attention ! Je mangeais (e gardé devant a), mais nous mangions (pas de e car g devant i est doux).",
              hint: "Le « e » protège le son doux du « g » devant a.",
            },
            {
              id: "i2",
              type: "texte-a-trous-select",
              question: "Quand j'___ petit, je ___ souvent au parc et je ___ avec mes amis.",
              options: ["étais", "allais", "jouais", "suis", "vais", "joue", "était"],
              correctAnswer: ["étais", "allais", "jouais"],
              explanation:
                "Les trois verbes sont à l'imparfait avec « je » : j'étais, j'allais, je jouais. L'imparfait exprime ici une habitude passée.",
            },
            {
              id: "i3",
              type: "qcm-multiple",
              question: "Lesquelles de ces formes sont correctement conjuguées à l'imparfait ?",
              options: [
                "je chantais",
                "il finissait",
                "nous allons",
                "vous faisiez",
                "tu mangait",
                "ils prenaient",
              ],
              correctAnswer: [
                "je chantais",
                "il finissait",
                "vous faisiez",
                "ils prenaient",
              ],
              explanation:
                "« Nous allons » est au présent, et « tu mangait » est faux (il faut « tu mangeais » avec -ais pour tu).",
            },
            {
              id: "i4",
              type: "conjugaison",
              question: "Conjugue « commencer » à l'imparfait (tu, nous, vous).",
              options: ["tu", "nous", "vous"],
              correctAnswer: ["commençais", "commencions", "commenciez"],
              explanation:
                "Verbe en -cer : tu commençais (ç devant a), mais nous commencions, vous commenciez (c devant i est déjà doux, pas de ç).",
              hint: "Le ç conserve le son « s » devant a, mais devant i il est inutile.",
            },
            {
              id: "i5",
              type: "conjugaison",
              question: "Conjugue « crier » à l'imparfait (nous, vous).",
              options: ["nous", "vous"],
              correctAnswer: ["criions", "criiez"],
              explanation:
                "Verbe en -ier : radical « cri- » + « -ions » = criions, + « -iez » = criiez. Il y a bien deux i : celui du radical et celui de la terminaison !",
              hint: "Attention au double i !",
            },
            {
              id: "i6",
              type: "qcm",
              question: "Quelle est la valeur de l'imparfait dans : « Il pleuvait quand soudain la foudre tomba » ?",
              options: [
                "Arrière-plan du récit",
                "Description",
                "Habitude ou répétition",
                "Action ponctuelle",
              ],
              correctAnswer: "Arrière-plan du récit",
              explanation:
                "L'imparfait (pleuvait) pose le décor. Le passé simple (tomba) marque l'action soudaine qui interrompt.",
            },
            {
              id: "i7",
              type: "association",
              question: "Associe chaque verbe à son radical à l'imparfait.",
              pairs: [
                { left: "Faire", right: "fais-" },
                { left: "Voir", right: "voy-" },
                { left: "Prendre", right: "pren-" },
                { left: "Être", right: "ét-" },
              ],
              options: ["fais-", "voy-", "pren-", "ét-"],
              correctAnswer: ["fais-", "voy-", "pren-", "ét-"],
              explanation:
                "Faire → nous faisons → fais-. Voir → nous voyons → voy-. Prendre → nous prenons → pren-. Être est irrégulier → ét-.",
            },
            {
              id: "i8",
              type: "texte-a-trous",
              question: "Vous ___ (placer) les chaises dans la salle.",
              options: ["placiez", "plaçiez", "placez", "plaçait"],
              correctAnswer: "placiez",
              explanation:
                "Avec « vous » + terminaison « -iez » : le c devant i est naturellement doux, donc pas besoin de ç. On écrit « placiez ».",
            },
            {
              id: "i9",
              type: "conjugaison",
              question: "Conjugue « voir » à l'imparfait (je, tu, ils/elles).",
              options: ["je", "tu", "ils/elles"],
              correctAnswer: ["voyais", "voyais", "voyaient"],
              explanation:
                "Radical « voy- » (nous voyons → voy-). Je voyais, tu voyais, ils voyaient.",
            },
            {
              id: "i10",
              type: "ordre",
              question: "Remets les formes de « finir » à l'imparfait dans l'ordre des pronoms (je, tu, il, nous, vous, ils).",
              options: [
                "finissais (je)",
                "finissais (tu)",
                "finissait (il)",
                "finissions (nous)",
                "finissiez (vous)",
                "finissaient (ils)",
              ],
              correctAnswer: [
                "finissais (je)",
                "finissais (tu)",
                "finissait (il)",
                "finissions (nous)",
                "finissiez (vous)",
                "finissaient (ils)",
              ],
              explanation:
                "L'ordre des pronoms : je, tu, il/elle, nous, vous, ils/elles. Toutes les formes gardent le « finiss- » du 2ème groupe.",
            },
            {
              id: "i11",
              type: "texte-a-trous-select",
              question: "Autrefois, les enfants ___ à l'école à pied et ___ leur repas dans un panier.",
              options: ["allaient", "apportaient", "vont", "apportent", "allait", "iraient"],
              correctAnswer: ["allaient", "apportaient"],
              explanation:
                "Les enfants (ils) → terminaison -aient. Allaient (aller) et apportaient (apporter) sont à l'imparfait, exprimant une habitude passée.",
            },
            {
              id: "i12",
              type: "intrus",
              question: "Laquelle de ces formes est INCORRECTEMENT conjuguée à l'imparfait ?",
              options: ["je voyais", "tu finissais", "il prenais", "nous allions"],
              correctAnswer: "il prenais",
              explanation:
                "« Il prenais » est faux : avec il/elle/on, la terminaison est -ait, pas -ais. La forme correcte est « il prenait ».",
            },
            {
              id: "i13",
              type: "qcm",
              question: "Quelle est la valeur de l'imparfait dans : « Chaque matin, il se levait à 7 heures » ?",
              options: [
                "L'habitude ou la répétition",
                "L'arrière-plan du récit",
                "La description",
                "L'action ponctuelle",
              ],
              correctAnswer: "L'habitude ou la répétition",
              explanation:
                "« Chaque matin » indique une habitude, une action qui se répète dans le passé. C'est la valeur d'habitude de l'imparfait.",
            },
            {
              id: "i14",
              type: "conjugaison",
              question: "Conjugue « prendre » à l'imparfait (je, nous, ils/elles).",
              options: ["je", "nous", "ils/elles"],
              correctAnswer: ["prenais", "prenions", "prenaient"],
              explanation:
                "Radical « pren- » (nous prenons → pren-). Je prenais, nous prenions, ils prenaient.",
            },
            {
              id: "i15",
              type: "qcm-multiple",
              question: "Lesquelles de ces phrases utilisent l'imparfait pour exprimer une description ?",
              options: [
                "La maison était grande et blanche.",
                "Chaque soir, elle lisait un livre.",
                "Le ciel rougeoyait à l'horizon.",
                "Il pleuvait quand soudain il s'arrêta.",
                "Le vieux château dominait la colline.",
              ],
              correctAnswer: [
                "La maison était grande et blanche.",
                "Le ciel rougeoyait à l'horizon.",
                "Le vieux château dominait la colline.",
              ],
              explanation:
                "Les phrases descriptives peignent un tableau : la maison, le ciel, le château. « Chaque soir » indique une habitude, et la dernière phrase montre un arrière-plan.",
            },
            {
              id: "i16",
              type: "association",
              question: "Associe chaque valeur de l'imparfait à la phrase qui l'illustre.",
              pairs: [
                { left: "Description", right: "La forêt était sombre et silencieuse." },
                { left: "Habitude", right: "Tous les étés, nous partions en vacances." },
                { left: "Arrière-plan", right: "Il dormait quand le téléphone sonna." },
              ],
              options: [
                "La forêt était sombre et silencieuse.",
                "Tous les étés, nous partions en vacances.",
                "Il dormait quand le téléphone sonna.",
              ],
              correctAnswer: [
                "La forêt était sombre et silencieuse.",
                "Tous les étés, nous partions en vacances.",
                "Il dormait quand le téléphone sonna.",
              ],
              explanation:
                "Description = décor. Habitude = action répétée (tous les étés). Arrière-plan = action longue interrompue par le passé simple.",
            },
            {
              id: "i17",
              type: "conjugaison",
              question: "Conjugue « nager » à l'imparfait (je, nous, vous).",
              options: ["je", "nous", "vous"],
              correctAnswer: ["nageais", "nagions", "nagiez"],
              explanation:
                "Verbe en -ger : je nageais (e gardé devant a), mais nous nagions, vous nagiez (pas de e car g devant i est doux).",
            },
            {
              id: "i18",
              type: "conjugaison",
              question: "Conjugue « étudier » à l'imparfait (nous, vous).",
              options: ["nous", "vous"],
              correctAnswer: ["étudiions", "étudiiez"],
              explanation:
                "Verbe en -ier : radical « étudi- » + « -ions » = étudiions, + « -iez » = étudiiez. Attention au double i !",
            },
            {
              id: "i19",
              type: "conjugaison",
              question: "Conjugue « vouloir » à l'imparfait (je, il/elle, vous).",
              options: ["je", "il/elle", "vous"],
              correctAnswer: ["voulais", "voulait", "vouliez"],
              explanation:
                "Radical « voul- » (nous voulons → voul-). Je voulais, il voulait, vous vouliez.",
            },
            {
              id: "i20",
              type: "qcm",
              question: "Quel est le radical de « pouvoir » à l'imparfait ?",
              options: ["pouv-", "pouvoi-", "peuv-", "peut-"],
              correctAnswer: "pouv-",
              explanation:
                "Nous pouvons → on enlève -ons → radical = pouv-. Je pouvais, tu pouvais, il pouvait…",
            },
          ],
        },

        // ── NIVEAU EXPERT ────────────────────────────────────────────────────
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Verbes difficiles, pièges, analyse de texte et synthèse.",
          questions: [
            {
              id: "e1",
              type: "conjugaison",
              question: "Conjugue « craindre » à l'imparfait (je, tu, il/elle, nous, vous, ils/elles).",
              options: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
              correctAnswer: ["craignais", "craignais", "craignait", "craignions", "craigniez", "craignaient"],
              explanation:
                "Craindre → nous craignons → radical « craign- ». Les 6 formes suivent les terminaisons régulières de l'imparfait.",
            },
            {
              id: "e2",
              type: "texte-a-trous-select",
              question: "Le soir ___, les étoiles ___ dans le ciel et une brise légère ___ les arbres.",
              options: ["tombait", "brillaient", "agitait", "tombe", "brille", "agite", "tombaient", "brillait"],
              correctAnswer: ["tombait", "brillaient", "agitait"],
              explanation:
                "Le soir tombait (il → -ait), les étoiles brillaient (elles → -aient), une brise agitait (elle → -ait). Trois imparfaits de description.",
            },
            {
              id: "e3",
              type: "qcm-multiple",
              question: "Lesquelles de ces formes sont correctement conjuguées à l'imparfait ?",
              options: [
                "je mangeais",
                "tu commençais",
                "nous criions",
                "vous nagez",
                "il plaçait",
                "ils finissait",
                "nous étudiions",
                "tu voyait",
              ],
              correctAnswer: [
                "je mangeais",
                "tu commençais",
                "nous criions",
                "il plaçait",
                "nous étudiions",
              ],
              explanation:
                "« Vous nagez » est au présent. « Ils finissait » → finissaient. « Tu voyait » → voyais. Les 5 autres sont correctes, y compris les pièges avec double i (criions, étudiions).",
            },
            {
              id: "e4",
              type: "conjugaison",
              question: "Conjugue « peindre » à l'imparfait (je, nous, ils/elles).",
              options: ["je", "nous", "ils/elles"],
              correctAnswer: ["peignais", "peignions", "peignaient"],
              explanation:
                "Peindre → nous peignons → radical « peign- ». Je peignais, nous peignions, ils peignaient.",
            },
            {
              id: "e5",
              type: "intrus",
              question: "Quel verbe est au passé simple et non à l'imparfait ?",
              options: ["chantait", "finissais", "prit", "voyaient"],
              correctAnswer: "prit",
              explanation:
                "« Prit » est le passé simple de « prendre » (il prit). Les autres sont bien à l'imparfait.",
            },
            {
              id: "e6",
              type: "conjugaison",
              question: "Conjugue « résoudre » à l'imparfait (tu, il/elle, nous).",
              options: ["tu", "il/elle", "nous"],
              correctAnswer: ["résolvais", "résolvait", "résolvions"],
              explanation:
                "Résoudre → nous résolvons → radical « résolv- ». Tu résolvais, il résolvait, nous résolvions.",
            },
            {
              id: "e7",
              type: "association",
              question: "Associe chaque phrase à la valeur de l'imparfait qu'elle illustre.",
              pairs: [
                { left: "Le village était calme sous la neige.", right: "Description" },
                { left: "Chaque dimanche, nous rendions visite.", right: "Habitude" },
                { left: "Elle marchait quand un chien surgit.", right: "Arrière-plan" },
                { left: "Les murs étaient couverts de dessins.", right: "Description" },
              ],
              options: ["Description", "Habitude", "Arrière-plan", "Description"],
              correctAnswer: ["Description", "Habitude", "Arrière-plan", "Description"],
              explanation:
                "La 1ère et la 4ème décrivent un lieu. La 2ème montre une habitude (chaque dimanche). La 3ème pose un arrière-plan interrompu par le passé simple.",
            },
            {
              id: "e8",
              type: "conjugaison",
              question: "Conjugue « payer » à l'imparfait (je, nous, vous).",
              options: ["je", "nous", "vous"],
              correctAnswer: ["payais", "payions", "payiez"],
              explanation:
                "Nous payons → radical « pay- ». Je payais, nous payions (le y se maintient devant i), vous payiez.",
            },
            {
              id: "e9",
              type: "qcm",
              question: "Dans « Le soleil brillait quand soudain un orage éclata », quel verbe est à l'imparfait ?",
              options: [
                "Brillait = imparfait, éclata = passé simple",
                "Brillait = passé simple, éclata = imparfait",
                "Les deux sont à l'imparfait",
                "Les deux sont au passé simple",
              ],
              correctAnswer: "Brillait = imparfait, éclata = passé simple",
              explanation:
                "« Brillait » (-ait) est à l'imparfait et pose le décor. « Éclata » (-a) est au passé simple et marque l'action soudaine.",
            },
            {
              id: "e10",
              type: "conjugaison",
              question: "Conjugue « conduire » à l'imparfait (je, tu, ils/elles).",
              options: ["je", "tu", "ils/elles"],
              correctAnswer: ["conduisais", "conduisais", "conduisaient"],
              explanation:
                "Conduire → nous conduisons → radical « conduis- ». Je conduisais, tu conduisais, ils conduisaient.",
            },
            {
              id: "e11",
              type: "qcm-multiple",
              question: "Quels verbes ont une particularité orthographique à l'imparfait ?",
              options: [
                "Manger (e devant a)",
                "Commencer (ç devant a)",
                "Crier (double i avec nous/vous)",
                "Chanter (aucune particularité)",
                "Être (radical irrégulier)",
                "Finir (aucune particularité)",
              ],
              correctAnswer: [
                "Manger (e devant a)",
                "Commencer (ç devant a)",
                "Crier (double i avec nous/vous)",
                "Être (radical irrégulier)",
              ],
              explanation:
                "Les verbes en -ger gardent le e, ceux en -cer gardent le ç, ceux en -ier ont un double i, et « être » a un radical irrégulier (ét-).",
            },
            {
              id: "e12",
              type: "texte-a-trous-select",
              question: "Ma grand-mère ___ des histoires, mon grand-père ___ le feu et nous ___ en silence.",
              options: ["racontait", "attisait", "écoutions", "raconte", "attise", "écoutons", "racontaient", "écoutaient"],
              correctAnswer: ["racontait", "attisait", "écoutions"],
              explanation:
                "Ma grand-mère racontait (elle → -ait), mon grand-père attisait (il → -ait), nous écoutions (nous → -ions).",
            },
            {
              id: "e13",
              type: "vrai-faux",
              question: "« Être » est le seul verbe dont le radical à l'imparfait ne vient pas de « nous » au présent.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Nous sommes → le radical serait « somm- ». Non ! « Être » utilise le radical irrégulier « ét- » : j'étais, tu étais...",
            },
            {
              id: "e14",
              type: "conjugaison",
              question: "Conjugue « éteindre » à l'imparfait (je, nous, ils/elles).",
              options: ["je", "nous", "ils/elles"],
              correctAnswer: ["éteignais", "éteignions", "éteignaient"],
              explanation:
                "Éteindre → nous éteignons → radical « éteign- ». Je éteignais, nous éteignions, ils éteignaient.",
            },
            {
              id: "e15",
              type: "conjugaison",
              question: "Conjugue « balayer » à l'imparfait (je, nous, ils/elles).",
              options: ["je", "nous", "ils/elles"],
              correctAnswer: ["balayais", "balayions", "balayaient"],
              explanation:
                "Nous balayons → radical « balay- ». Je balayais, nous balayions, ils balayaient.",
            },
            {
              id: "e16",
              type: "texte-a-trous-select",
              question: "Avant, les gens ___ à cheval, ils n'___ pas de voitures et les routes ___ en terre.",
              options: ["voyageaient", "avaient", "étaient", "voyage", "ont", "sont", "voyageait", "avait"],
              correctAnswer: ["voyageaient", "avaient", "étaient"],
              explanation:
                "Les gens voyageaient (ils → -aient), ils n'avaient pas (ils → -aient), les routes étaient (elles → -aient).",
            },
            {
              id: "e17",
              type: "qcm-multiple",
              question: "Lesquelles de ces phrases alternent correctement imparfait et passé simple ?",
              options: [
                "Il dormait quand le réveil sonna.",
                "Il dormit quand le réveil sonnait.",
                "Elle lisait quand quelqu'un frappa à la porte.",
                "Nous chantions lorsqu'un bruit retentit.",
                "Il pleuvait et la foudre tombait.",
              ],
              correctAnswer: [
                "Il dormait quand le réveil sonna.",
                "Elle lisait quand quelqu'un frappa à la porte.",
                "Nous chantions lorsqu'un bruit retentit.",
              ],
              explanation:
                "L'imparfait pose le décor (action longue) et le passé simple introduit l'événement soudain.",
            },
            {
              id: "e18",
              type: "intrus",
              question: "Quel verbe est au conditionnel et non à l'imparfait ?",
              options: ["parlait", "chanterais", "voyaient", "finissions"],
              correctAnswer: "chanterais",
              explanation:
                "« Chanterais » est au conditionnel présent (je chanterais). Les terminaisons se ressemblent (-ais/-ais) mais le radical est différent !",
            },
            {
              id: "e19",
              type: "conjugaison",
              question: "Conjugue « connaître » à l'imparfait (je, tu, il/elle, nous, vous, ils/elles).",
              options: ["je", "tu", "il/elle", "nous", "vous", "ils/elles"],
              correctAnswer: ["connaissais", "connaissais", "connaissait", "connaissions", "connaissiez", "connaissaient"],
              explanation:
                "Connaître → nous connaissons → radical « connaiss- ». Les 6 formes suivent les terminaisons régulières.",
            },
            {
              id: "e20",
              type: "conjugaison",
              question: "Conjugue « devoir » à l'imparfait (je, il/elle, ils/elles).",
              options: ["je", "il/elle", "ils/elles"],
              correctAnswer: ["devais", "devait", "devaient"],
              explanation:
                "Devoir → nous devons → radical « dev- ». Je devais, il devait, ils devaient.",
            },
          ],
        },
      ],
    },
  },
];
