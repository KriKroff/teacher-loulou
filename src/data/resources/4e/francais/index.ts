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
    updatedAt: "2026-04-10T18:00:00Z",
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
              question: "Quelles sont les terminaisons de l'imparfait de l'indicatif ?",
              type: "qcm",
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
              id: "f2",
              question: "L'imparfait sert à exprimer une action passée qui dure ou se répète.",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "L'imparfait présente une action passée dans la durée, sans préciser son début ni sa fin. Il sert aussi à exprimer des habitudes passées.",
            },
            {
              id: "f3",
              question: "Comment conjugue-t-on « chanter » avec « je » à l'imparfait ?",
              type: "qcm",
              options: ["Je chantais", "Je chantai", "Je chanté", "Je chantois"],
              correctAnswer: "Je chantais",
              explanation:
                "Radical « chant- » (nous chantons → chant-) + terminaison « -ais » = je chantais.",
            },
            {
              id: "f4",
              question: "Comment conjugue-t-on « finir » avec « tu » à l'imparfait ?",
              type: "qcm",
              options: ["Tu finissais", "Tu finisais", "Tu finais", "Tu finissait"],
              correctAnswer: "Tu finissais",
              explanation:
                "Radical « finiss- » (nous finissons → finiss-) + « -ais » = tu finissais. Le -iss- est la marque du 2ème groupe.",
            },
            {
              id: "f5",
              question: "« Il chantais » est correctement conjugué à l'imparfait.",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Avec « il/elle/on », la terminaison est -ait (pas -ais). La forme correcte est « il chantait ».",
            },
            {
              id: "f6",
              question: "Quel verbe n'est PAS conjugué à l'imparfait ?",
              type: "intrus",
              options: ["chantait", "finissais", "allons", "prenaient"],
              correctAnswer: "allons",
              explanation:
                "« Allons » est au présent de l'indicatif. Les autres (chantait, finissais, prenaient) sont à l'imparfait.",
            },
            {
              id: "f7",
              question: "Comment conjugue-t-on « aller » avec « nous » à l'imparfait ?",
              type: "qcm",
              options: ["Nous allions", "Nous allons", "Nous alliions", "Nous allaient"],
              correctAnswer: "Nous allions",
              explanation:
                "Radical « all- » (nous allons → all-) + « -ions » = nous allions.",
            },
            {
              id: "f8",
              question: "Pour former l'imparfait, on utilise le radical du verbe conjugué avec « nous » au présent.",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "C'est la règle d'or ! On prend la forme « nous » au présent, on enlève -ons, et on ajoute les terminaisons de l'imparfait.",
            },
            {
              id: "f9",
              question: "Je ___ (parler) avec mon ami hier.",
              type: "texte-a-trous",
              options: ["parlais", "parlait", "parlai", "parle"],
              correctAnswer: "parlais",
              explanation:
                "Avec « je », la terminaison de l'imparfait est -ais : je parlais.",
            },
            {
              id: "f10",
              question: "Comment conjugue-t-on « être » avec « ils » à l'imparfait ?",
              type: "qcm",
              options: ["Ils étaient", "Ils étaients", "Ils sommaient", "Ils êtaient"],
              correctAnswer: "Ils étaient",
              explanation:
                "« Être » a un radical irrégulier à l'imparfait : « ét- ». Ils étaient.",
            },
            {
              id: "f11",
              question: "« Nous mangions » est correctement conjugué à l'imparfait.",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Oui ! Manger → nous mangeons → radical « mange- ». Avec nous : mangions (le e disparaît car le g devant i est déjà doux).",
            },
            {
              id: "f12",
              question: "Quelle est la terminaison de l'imparfait pour « vous » ?",
              type: "qcm",
              options: ["-iez", "-ez", "-ais", "-ions"],
              correctAnswer: "-iez",
              explanation:
                "Avec « vous », la terminaison de l'imparfait est toujours -iez.",
            },
            {
              id: "f13",
              question: "Elle ___ (avoir) un chat quand elle était petite.",
              type: "texte-a-trous",
              options: ["avait", "avais", "avaient", "a"],
              correctAnswer: "avait",
              explanation:
                "Avec « elle », la terminaison est -ait : elle avait.",
            },
            {
              id: "f14",
              question: "Quel verbe est au présent et non à l'imparfait ?",
              type: "intrus",
              options: ["dansait", "courait", "mange", "lisait"],
              correctAnswer: "mange",
              explanation:
                "« Mange » est au présent. Les autres (dansait, courait, lisait) se terminent par -ait, marque de l'imparfait.",
            },
            {
              id: "f15",
              question: "Comment conjugue-t-on « pouvoir » avec « il » à l'imparfait ?",
              type: "qcm",
              options: ["Il pouvait", "Il pouvais", "Il pouvai", "Il peuvait"],
              correctAnswer: "Il pouvait",
              explanation:
                "Radical « pouv- » (nous pouvons → pouv-) + « -ait » = il pouvait.",
            },
            {
              id: "f16",
              question: "À l'imparfait, « je » et « tu » ont la même terminaison (-ais).",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Oui ! Je chantais, tu chantais. La terminaison -ais est identique pour je et tu.",
            },
            {
              id: "f17",
              question: "Comment conjugue-t-on « faire » avec « vous » à l'imparfait ?",
              type: "qcm",
              options: ["Vous faisiez", "Vous faisez", "Vous fesiez", "Vous faites"],
              correctAnswer: "Vous faisiez",
              explanation:
                "Radical « fais- » (nous faisons → fais-) + « -iez » = vous faisiez.",
            },
            {
              id: "f18",
              question: "Tu ___ (être) en retard ce matin-là.",
              type: "texte-a-trous",
              options: ["étais", "était", "étaient", "es"],
              correctAnswer: "étais",
              explanation:
                "Avec « tu », la terminaison est -ais : tu étais. Le radical irrégulier de « être » est « ét- ».",
            },
            {
              id: "f19",
              question: "L'imparfait sert à décrire un lieu ou un personnage dans un récit.",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "C'est la valeur de description de l'imparfait. Il sert à installer le cadre, décrire un lieu, un paysage ou un personnage.",
            },
            {
              id: "f20",
              question: "Quel est le radical de « finir » à l'imparfait ?",
              type: "qcm",
              options: ["finiss-", "fin-", "fini-", "finis-"],
              correctAnswer: "finiss-",
              explanation:
                "Nous finissons → on enlève -ons → radical = finiss-. Le -iss- est la marque du 2ème groupe, présente à l'imparfait.",
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
              question: "Associe chaque pronom à la forme correcte de « manger » à l'imparfait.",
              type: "association",
              pairs: [
                { left: "Je", right: "mangeais" },
                { left: "Nous", right: "mangions" },
                { left: "Ils", right: "mangeaient" },
                { left: "Vous", right: "mangiez" },
              ],
              options: ["mangeais", "mangions", "mangeaient", "mangiez"],
              correctAnswer: ["mangeais", "mangions", "mangeaient", "mangiez"],
              explanation:
                "Attention au piège ! Je mangeais (e gardé devant a), mais nous mangions et vous mangiez (pas de e car g devant i est doux).",
            },
            {
              id: "i2",
              question: "Quand j'___ petit, je ___ souvent au parc et je ___ avec mes amis.",
              type: "texte-a-trous-select",
              options: ["étais", "allais", "jouais", "suis", "vais", "joue", "était"],
              correctAnswer: ["étais", "allais", "jouais"],
              explanation:
                "Les trois verbes sont à l'imparfait avec « je » : j'étais (être), j'allais (aller), je jouais (jouer). L'imparfait exprime ici une habitude passée.",
            },
            {
              id: "i3",
              question: "Lesquelles de ces formes sont correctement conjuguées à l'imparfait ?",
              type: "qcm-multiple",
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
              question: "Comment conjugue-t-on « manger » avec « je » à l'imparfait ?",
              type: "qcm",
              options: ["Je mangeais", "Je mangais", "Je mangeai", "Je mangé"],
              correctAnswer: "Je mangeais",
              explanation:
                "Les verbes en -ger gardent le « e » devant « a » pour conserver le son « j » : je mangeais.",
              hint: "Le « e » protège le son doux du « g ».",
            },
            {
              id: "i5",
              question: "Nous ___ (crier) très fort pendant le match.",
              type: "texte-a-trous",
              options: ["criions", "crions", "criais", "criaient"],
              correctAnswer: "criions",
              explanation:
                "Verbe en -ier : radical « cri- » + « -ions » = criions. Il y a bien deux i : celui du radical et celui de la terminaison !",
              hint: "Attention au double i !",
            },
            {
              id: "i6",
              question: "Quelle est la valeur de l'imparfait dans : « Il pleuvait quand soudain la foudre tomba » ?",
              type: "qcm",
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
              question: "Comment conjugue-t-on « commencer » avec « tu » à l'imparfait ?",
              type: "qcm",
              options: ["Tu commençais", "Tu commencais", "Tu commenças", "Tu commencé"],
              correctAnswer: "Tu commençais",
              explanation:
                "Les verbes en -cer gardent le « ç » devant « a » pour conserver le son « s » : tu commençais.",
            },
            {
              id: "i8",
              question: "Vous ___ (placer) les chaises dans la salle.",
              type: "texte-a-trous",
              options: ["placiez", "plaçiez", "placez", "plaçait"],
              correctAnswer: "placiez",
              explanation:
                "Avec « vous » + terminaison « -iez » : le c devant i est naturellement doux, donc pas besoin de ç. On écrit « placiez ».",
            },
            {
              id: "i9",
              question: "Associe chaque verbe à son radical à l'imparfait.",
              type: "association",
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
              id: "i10",
              question: "Remets les formes de « finir » à l'imparfait dans l'ordre des pronoms (je, tu, il, nous, vous, ils).",
              type: "ordre",
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
              question: "Comment conjugue-t-on « voir » avec « tu » à l'imparfait ?",
              type: "qcm",
              options: ["Tu voyais", "Tu voiyais", "Tu vois", "Tu voirait"],
              correctAnswer: "Tu voyais",
              explanation:
                "Radical « voy- » (nous voyons → voy-) + « -ais » = tu voyais.",
            },
            {
              id: "i12",
              question: "Autrefois, les enfants ___ à l'école à pied et ___ leur repas dans un panier.",
              type: "texte-a-trous-select",
              options: ["allaient", "apportaient", "vont", "apportent", "allait", "iraient"],
              correctAnswer: ["allaient", "apportaient"],
              explanation:
                "Les enfants (ils) → terminaison -aient. Allaient (aller) et apportaient (apporter) sont à l'imparfait, exprimant une habitude passée.",
            },
            {
              id: "i13",
              question: "Laquelle de ces formes est INCORRECTEMENT conjuguée à l'imparfait ?",
              type: "intrus",
              options: ["je voyais", "tu finissais", "il prenais", "nous allions"],
              correctAnswer: "il prenais",
              explanation:
                "« Il prenais » est faux : avec il/elle/on, la terminaison est -ait, pas -ais. La forme correcte est « il prenait ».",
            },
            {
              id: "i14",
              question: "Quelle est la valeur de l'imparfait dans : « Chaque matin, il se levait à 7 heures » ?",
              type: "qcm",
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
              id: "i15",
              question: "Ils ___ (prendre) le bus tous les jours.",
              type: "texte-a-trous",
              options: ["prenaient", "prendaient", "prenait", "prennaient"],
              correctAnswer: "prenaient",
              explanation:
                "Radical « pren- » (nous prenons → pren-) + « -aient » = ils prenaient.",
            },
            {
              id: "i16",
              question: "Lesquelles de ces phrases utilisent l'imparfait pour exprimer une description ?",
              type: "qcm-multiple",
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
              id: "i17",
              question: "Associe chaque valeur de l'imparfait à la phrase qui l'illustre.",
              type: "association",
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
              id: "i18",
              question: "Comment conjugue-t-on « nager » avec « je » à l'imparfait ?",
              type: "qcm",
              options: ["Je nageais", "Je nagais", "Je nageai", "Je nagé"],
              correctAnswer: "Je nageais",
              explanation:
                "Comme « manger », les verbes en -ger gardent le « e » devant « a » : je nageais.",
            },
            {
              id: "i19",
              question: "Nous ___ (étudier) le français avec passion.",
              type: "texte-a-trous",
              options: ["étudiions", "étudions", "étudiez", "étudiaient"],
              correctAnswer: "étudiions",
              explanation:
                "Verbe en -ier : radical « étudi- » + « -ions » = étudiions. Attention au double i !",
            },
            {
              id: "i20",
              question: "Quel est le radical de « pouvoir » à l'imparfait ?",
              type: "qcm",
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
              question: "Le soir ___, les étoiles ___ dans le ciel et une brise légère ___ les arbres.",
              type: "texte-a-trous-select",
              options: ["tombait", "brillaient", "agitait", "tombe", "brille", "agite", "tombaient", "brillait"],
              correctAnswer: ["tombait", "brillaient", "agitait"],
              explanation:
                "Le soir tombait (il → -ait), les étoiles brillaient (elles → -aient), une brise agitait (elle → -ait). Trois imparfaits de description.",
            },
            {
              id: "e2",
              question: "Lesquelles de ces formes sont correctement conjuguées à l'imparfait ?",
              type: "qcm-multiple",
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
              id: "e3",
              question: "Associe chaque phrase à la valeur de l'imparfait qu'elle illustre.",
              type: "association",
              pairs: [
                { left: "Le village était calme sous la neige.", right: "Description" },
                { left: "Chaque dimanche, nous rendions visite à nos grands-parents.", right: "Habitude" },
                { left: "Elle marchait tranquillement quand un chien surgit.", right: "Arrière-plan" },
                { left: "Les murs de la classe étaient couverts de dessins.", right: "Description" },
              ],
              options: ["Description", "Habitude", "Arrière-plan", "Description"],
              correctAnswer: ["Description", "Habitude", "Arrière-plan", "Description"],
              explanation:
                "La 1ère et la 4ème décrivent un lieu (description). La 2ème montre une habitude (chaque dimanche). La 3ème pose un arrière-plan interrompu par le passé simple (surgit).",
            },
            {
              id: "e4",
              question: "Comment conjugue-t-on « payer » avec « nous » à l'imparfait ?",
              type: "qcm",
              options: ["Nous payions", "Nous payons", "Nous paiions", "Nous payaient"],
              correctAnswer: "Nous payions",
              explanation:
                "Nous payons → radical « pay- » + « -ions » = nous payions. Le y se maintient devant i.",
            },
            {
              id: "e5",
              question: "Quel verbe est au passé simple et non à l'imparfait ?",
              type: "intrus",
              options: ["chantait", "finissais", "prit", "voyaient"],
              correctAnswer: "prit",
              explanation:
                "« Prit » est le passé simple de « prendre » (il prit). Les autres sont bien à l'imparfait.",
            },
            {
              id: "e6",
              question: "Tu ___ (résoudre) l'exercice de maths.",
              type: "texte-a-trous",
              options: ["résolvais", "résoudais", "résolvait", "résoudrais"],
              correctAnswer: "résolvais",
              explanation:
                "Résoudre → nous résolvons → radical « résolv- » + « -ais » = tu résolvais.",
            },
            {
              id: "e7",
              question: "Remets les mots dans l'ordre pour former une phrase correcte à l'imparfait.",
              type: "ordre",
              options: [
                "Les enfants",
                "jouaient",
                "dans le jardin",
                "pendant que",
                "leurs parents",
                "préparaient",
                "le repas",
              ],
              correctAnswer: [
                "Les enfants",
                "jouaient",
                "dans le jardin",
                "pendant que",
                "leurs parents",
                "préparaient",
                "le repas",
              ],
              explanation:
                "« Les enfants jouaient dans le jardin pendant que leurs parents préparaient le repas. » Deux actions simultanées à l'imparfait.",
            },
            {
              id: "e8",
              question: "Dans la phrase « Le soleil brillait quand soudain un orage éclata », quel verbe est à l'imparfait et quel verbe est au passé simple ?",
              type: "qcm",
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
              id: "e9",
              question: "Quels verbes ont une particularité orthographique à l'imparfait ?",
              type: "qcm-multiple",
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
                "Les verbes en -ger gardent le e, ceux en -cer gardent le ç, ceux en -ier ont un double i, et « être » a un radical irrégulier (ét-). Chanter et finir suivent la règle normale.",
            },
            {
              id: "e10",
              question: "Ma grand-mère ___ des histoires, mon grand-père ___ le feu et nous ___ en silence.",
              type: "texte-a-trous-select",
              options: ["racontait", "attisait", "écoutions", "raconte", "attise", "écoutons", "racontaient", "écoutaient"],
              correctAnswer: ["racontait", "attisait", "écoutions"],
              explanation:
                "Ma grand-mère racontait (elle → -ait), mon grand-père attisait (il → -ait), nous écoutions (nous → -ions). Trois imparfaits d'habitude.",
            },
            {
              id: "e11",
              question: "Associe chaque groupe de verbe à sa règle de formation du radical à l'imparfait.",
              type: "association",
              pairs: [
                { left: "1er groupe (chanter)", right: "Radical simple (chant-)" },
                { left: "2ème groupe (finir)", right: "Radical en -iss- (finiss-)" },
                { left: "3ème groupe (prendre)", right: "Radical de « nous » au présent (pren-)" },
                { left: "Être", right: "Radical irrégulier (ét-)" },
              ],
              options: [
                "Radical simple (chant-)",
                "Radical en -iss- (finiss-)",
                "Radical de « nous » au présent (pren-)",
                "Radical irrégulier (ét-)",
              ],
              correctAnswer: [
                "Radical simple (chant-)",
                "Radical en -iss- (finiss-)",
                "Radical de « nous » au présent (pren-)",
                "Radical irrégulier (ét-)",
              ],
              explanation:
                "Le 1er groupe a un radical simple, le 2ème garde le -iss-, le 3ème suit la règle « nous au présent », et « être » est le seul irrégulier.",
            },
            {
              id: "e12",
              question: "Comment conjugue-t-on « craindre » avec « ils » à l'imparfait ?",
              type: "qcm",
              options: ["Ils craignaient", "Ils craindraient", "Ils craindaient", "Ils craignait"],
              correctAnswer: "Ils craignaient",
              explanation:
                "Craindre → nous craignons → radical « craign- » + « -aient » = ils craignaient.",
            },
            {
              id: "e13",
              question: "« Être » est le seul verbe dont le radical à l'imparfait ne vient pas de la forme « nous » au présent.",
              type: "vrai-faux",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Nous sommes → le radical serait « somm- » (je sommais ?). Non ! « Être » utilise le radical irrégulier « ét- » : j'étais, tu étais...",
            },
            {
              id: "e14",
              question: "Comment conjugue-t-on « nager » avec « vous » à l'imparfait ?",
              type: "qcm",
              options: ["Vous nagiez", "Vous nagetiez", "Vous nageiez", "Vous nagez"],
              correctAnswer: "Vous nagiez",
              explanation:
                "Nager → radical « nage- ». Avec « -iez » : le e disparaît car le g devant i est déjà doux. On écrit : vous nagiez.",
            },
            {
              id: "e15",
              question: "Comment conjugue-t-on « balayer » avec « nous » à l'imparfait ?",
              type: "qcm",
              options: ["Nous balayions", "Nous balayons", "Nous balaiyions", "Nous balaiions"],
              correctAnswer: "Nous balayions",
              explanation:
                "Nous balayons → radical « balay- » + « -ions » = nous balayions.",
            },
            {
              id: "e16",
              question: "Avant, les gens ___ à cheval, ils n'___ pas de voitures et les routes ___ en terre.",
              type: "texte-a-trous-select",
              options: ["voyageaient", "avaient", "étaient", "voyage", "ont", "sont", "voyageait", "avait"],
              correctAnswer: ["voyageaient", "avaient", "étaient"],
              explanation:
                "Les gens voyageaient (ils → -aient), ils n'avaient pas (ils → -aient), les routes étaient (elles → -aient). Trois imparfaits exprimant une époque passée.",
            },
            {
              id: "e17",
              question: "Lesquelles de ces phrases alternent correctement imparfait et passé simple ?",
              type: "qcm-multiple",
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
                "L'imparfait pose le décor (action longue) et le passé simple introduit l'événement soudain. La 2ème inverse les rôles. La 5ème n'a que des imparfaits.",
            },
            {
              id: "e18",
              question: "Remets les formes de « aller » à l'imparfait dans l'ordre des pronoms (je, tu, il, nous, vous, ils).",
              type: "ordre",
              options: [
                "allais (je)",
                "allais (tu)",
                "allait (il)",
                "allions (nous)",
                "alliez (vous)",
                "allaient (ils)",
              ],
              correctAnswer: [
                "allais (je)",
                "allais (tu)",
                "allait (il)",
                "allions (nous)",
                "alliez (vous)",
                "allaient (ils)",
              ],
              explanation:
                "Aller → nous allons → radical « all- ». Les terminaisons sont régulières : -ais, -ais, -ait, -ions, -iez, -aient.",
            },
            {
              id: "e19",
              question: "Quel verbe est au conditionnel et non à l'imparfait ?",
              type: "intrus",
              options: ["parlait", "chanterais", "voyaient", "finissions"],
              correctAnswer: "chanterais",
              explanation:
                "« Chanterais » est au conditionnel présent (je chanterais). Les autres sont bien à l'imparfait. Attention : les terminaisons se ressemblent (-ais/-ais) mais le radical est différent !",
            },
            {
              id: "e20",
              question: "Ils ___ (peindre) le mur en bleu pendant que nous ___ (choisir) les meubles.",
              type: "texte-a-trous-select",
              options: ["peignaient", "choisissions", "peignait", "choisissiez", "peindaient", "choisissaient"],
              correctAnswer: ["peignaient", "choisissions"],
              explanation:
                "Peindre → nous peignons → radical « peign- » + -aient = peignaient. Choisir → nous choisissons → radical « choisiss- » + -ions = choisissions.",
            },
          ],
        },
      ],
    },
  },
];
