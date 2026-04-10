import type { Resource } from "@/types";

export const resources: Resource[] = [
  {
    slug: "espagnol-subjonctif-present-fiche",
    title: "Fiche — Le subjonctif présent (espagnol)",
    description:
      "Fiche de révision sur le subjonctif présent : formation, irréguliers, verbes à diphtongue et emplois en contexte.",
    type: "fiche",
    level: "4e",
    subject: "espagnol",
    chapter: "Chapitre — Le subjonctif présent",
    createdAt: "2026-04-10T18:00:00Z",
    updatedAt: "2026-04-10T18:00:00Z",
    tags: [
      "espagnol",
      "subjonctif",
      "subjuntivo",
      "conjugaison",
      "fiche",
    ],
    content: `
# 🇪🇸 Le subjonctif présent (el presente de subjuntivo)

Le subjonctif sert à exprimer : **le doute, le souhait, l'émotion, la nécessité**.

---

## 🧠 Quand l'utiliser ?

On l'utilise très souvent avec :

- **Quiero que...** (je veux que...)
- **Es importante que...** (il est important que...)
- **Dudo que...** (je doute que...)
- **Me alegra que...** (ça me fait plaisir que...)
- **Ojalá (que)...** (pourvu que...)

> ⚠️ Dans ce chapitre, pense au réflexe : **déclencheur + que + subjonctif**.

---

## ⚙️ Formation : la méthode en 3 étapes

1. Prendre la forme **yo** au présent de l'indicatif  
2. Enlever le **-o** final  
3. Ajouter les terminaisons du subjonctif

Exemple avec **hablar** : yo habl**o** → habl- → **hable, hables, hable, hablemos, habléis, hablen**

---

## ✨ Les terminaisons à connaître par cœur

### Verbes en **-AR**
Terminaisons : **-e, -es, -e, -emos, -éis, -en**

| Pronom | Hablar |
|---|---|
| yo | habl**e** |
| tú | habl**es** |
| él/ella | habl**e** |
| nosotros | habl**emos** |
| vosotros | habl**éis** |
| ellos/ellas | habl**en** |

### Verbes en **-ER / -IR**
Terminaisons : **-a, -as, -a, -amos, -áis, -an**

| Pronom | Comer | Vivir |
|---|---|---|
| yo | com**a** | viv**a** |
| tú | com**as** | viv**as** |
| él/ella | com**a** | viv**a** |
| nosotros | com**amos** | viv**amos** |
| vosotros | com**áis** | viv**áis** |
| ellos/ellas | com**an** | viv**an** |

> 🎯 Astuce : au subjonctif, les terminaisons sont **inversées** par rapport au présent de l'indicatif.

---

## 🔥 Verbes irréguliers indispensables

| Verbe | Formes clés |
|---|---|
| **ser** | s**ea**, s**eas**, s**ea**, s**eamos**, s**eáis**, s**ean** |
| **ir** | v**aya**, v**ayas**, v**aya**, v**ayamos**, v**ayáis**, v**ayan** |
| **haber** | h**aya**, h**ayas**, h**aya**, h**ayamos**, h**ayáis**, h**ayan** |
| **estar** | est**é**, est**és**, est**é**, est**emos**, est**éis**, est**én** |
| **saber** | s**epa**, s**epas**, s**epa**, s**epamos**, s**epáis**, s**epan** |
| **dar** | d**é**, d**es**, d**é**, d**emos**, d**eis**, d**en** |

> ⚠️ Lettres à surveiller : **vay-**, **hay-**, **sep-**, **esté/dé** (accent).

---

## 🔄 Verbes à changement de radical

### e → ie (sauf nosotros/vosotros)
**pensar** → piense, pienses, piense, **pensemos**, **penséis**, piensen

### o → ue (sauf nosotros/vosotros)
**dormir** → duerma, duermas, duerma, **durmamos**, **durmáis**, duerman

### e → i (sauf nosotros/vosotros)
**pedir** → pida, pidas, pida, **pidamos**, **pidáis**, pidan

> ✅ Important : pour **nosotros/vosotros**, on revient souvent à une base différente du radical diphtongué.

---

## 🧩 Exemples prêts à l'emploi

- Quiero que tú **estudies** más.
- Es necesario que nosotros **hagamos** los ejercicios.
- Dudo que ellos **puedan** venir.
- Ojalá que mañana **haga** buen tiempo.

---

## ❌ Erreurs fréquentes

- **Quiero que tú vienes** ❌  
  → **Quiero que tú vengas** ✅
- **Es importante que estudiamos** ❌  
  → **Es importante que estudiemos** ✅
- **Dudo que él tiene razón** ❌  
  → **Dudo que él tenga razón** ✅

---

## ✅ Mini-check avant le contrôle

- Je repère le **déclencheur** (souhait, émotion, doute, obligation)
- Je mets **que**
- Je conjugue au **subjonctif**
- Je vérifie les **terminaisons** et les **changements de radical**

> 🎯 **Prêt(e) à te tester ?** → [Faire le quiz sur ce chapitre →](/4e/espagnol/espagnol-subjonctif-present-quiz)
`,
  },
  {
    slug: "espagnol-subjonctif-present-quiz",
    title: "Quiz — Le subjonctif présent (espagnol)",
    description:
      "Révise le subjonctif présent en espagnol avec 3 niveaux progressifs et des questions variées.",
    type: "quiz",
    level: "4e",
    subject: "espagnol",
    chapter: "Chapitre — Le subjonctif présent",
    createdAt: "2026-04-10T18:00:00Z",
    updatedAt: "2026-04-10T18:00:00Z",
    tags: ["espagnol", "subjonctif", "quiz", "conjugaison"],
    quizData: {
      title: "Le subjonctif présent",
      description:
        "10 questions par session pour consolider conjugaison, irréguliers et usages du subjonctif.",
      passingScore: 70,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Les bases : formation et terminaisons.",
          questions: [
            {
              id: "f1",
              type: "qcm",
              question: 'Comment conjuguer "hablar" avec "nosotros" au subjonctif présent ?',
              options: ["hablamos", "hablemos", "habléis", "hablaremos"],
              correctAnswer: "hablemos",
              explanation:
                'Pour les verbes en -AR, "nosotros" prend la terminaison **-emos** au subjonctif.',
            },
            {
              id: "f2",
              type: "qcm",
              question: 'Comment conjuguer "comer" avec "yo" au subjonctif présent ?',
              options: ["como", "coma", "come", "comaís"],
              correctAnswer: "coma",
              explanation:
                "Pour les verbes en -ER/-IR, on utilise **-a** avec yo : coma.",
            },
            {
              id: "f3",
              type: "vrai-faux",
              question: 'Après "Quiero que...", on met normalement le subjonctif.',
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Quiero que exprime un souhait : cela déclenche le subjonctif.",
            },
            {
              id: "f4",
              type: "texte-a-trous",
              question: 'Espero que tú ___ (llegar) a tiempo.',
              options: ["llegas", "llegues", "llegueses", "llegarás"],
              correctAnswer: "llegues",
              explanation:
                "llegar → yo llego → lleg- + terminaisons du subjonctif (-e, -es...) : tú llegues.",
            },
            {
              id: "f5",
              type: "qcm",
              question: 'Comment conjuguer "ser" avec "nosotros" au subjonctif présent ?',
              options: ["somos", "seamos", "seremos", "seéis"],
              correctAnswer: "seamos",
              explanation: 'Le verbe irrégulier "ser" donne : seamos avec nosotros.',
            },
            {
              id: "f6",
              type: "intrus",
              question:
                "Trouve l'intrus : une seule de ces formes n'est PAS au subjonctif présent.",
              options: ["hable", "comas", "vive", "estudien"],
              correctAnswer: "vive",
              explanation:
                '"vive" est au présent de l\'indicatif, pas au subjonctif (on attendrait "viva").',
            },
            {
              id: "f7",
              type: "nombre",
              question:
                "Combien de personnes grammaticales y a-t-il dans un tableau complet de conjugaison ?",
              options: [],
              correctAnswer: "6",
              explanation:
                "yo, tú, él/ella, nosotros, vosotros, ellos/ellas : cela fait 6 personnes.",
            },
            {
              id: "f8",
              type: "slider",
              question:
                "Déplace le curseur : combien de terminaisons utilise-t-on dans une conjugaison complète au subjonctif ?",
              options: ["0", "6", "1"],
              correctAnswer: "6",
              explanation:
                "Une conjugaison complète contient 6 formes (une par personne).",
            },
            {
              id: "f9",
              type: "texte-a-trous-select",
              question:
                "Complète : que yo ___, que tú ___, que él ___ (hablar).",
              options: [
                "hable",
                "hables",
                "hable",
                "habla",
                "hablo",
                "hablese",
              ],
              correctAnswer: ["hable", "hables", "hable"],
              explanation:
                "Pour -AR : yo hable, tú hables, él/ella hable.",
            },
            {
              id: "f10",
              type: "qcm-multiple",
              question:
                "Quels déclencheurs appellent généralement le subjonctif ? (plusieurs réponses)",
              options: [
                "Quiero que...",
                "Es importante que...",
                "Dudo que...",
                "Ayer fui al cine.",
                "Tengo dos hermanos.",
              ],
              correctAnswer: [
                "Quiero que...",
                "Es importante que...",
                "Dudo que...",
              ],
              explanation:
                "Souhait, nécessité et doute appellent le subjonctif ; les phrases purement factuelles non.",
            },
            {
              id: "f11",
              type: "association",
              question: "Associe les pronoms aux terminaisons des verbes en -AR.",
              pairs: [
                { left: "yo", right: "-e" },
                { left: "tú", right: "-es" },
                { left: "nosotros", right: "-emos" },
                { left: "vosotros", right: "-éis" },
              ],
              options: ["-e", "-es", "-emos", "-éis"],
              correctAnswer: ["-e", "-es", "-emos", "-éis"],
              explanation:
                "Au subjonctif, les verbes en -AR prennent -e, -es, -e, -emos, -éis, -en.",
            },
            {
              id: "f12",
              type: "ordre",
              question:
                "Remets les éléments dans l'ordre pour former le schéma type d'une phrase au subjonctif.",
              options: ["déclencheur", "que", "sujet", "verbe au subjonctif"],
              correctAnswer: [
                "déclencheur",
                "que",
                "sujet",
                "verbe au subjonctif",
              ],
              explanation:
                "Structure classique : déclencheur + que + sujet + verbe au subjonctif.",
            },
            {
              id: "f13",
              type: "vrai-faux",
              question:
                "Avec les verbes à diphtongue, nosotros et vosotros gardent toujours la diphtongue complète.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Souvent, nosotros/vosotros prennent une base différente (ex. dormir → durmamos).",
            },
            {
              id: "f14",
              type: "qcm",
              question: 'Le subjonctif de "tener" à la 3e personne du singulier est :',
              options: ["tiene", "tenga", "tene", "tendrá"],
              correctAnswer: "tenga",
              explanation:
                'Base de "yo tengo" → teng- + terminaisons du subjonctif : él/ella tenga.',
            },
            {
              id: "f15",
              type: "texte-a-trous",
              question: 'Es importante que vosotros ___ (estudiar).',
              options: ["estudiáis", "estudiéis", "estudien", "estudiaran"],
              correctAnswer: "estudiéis",
              explanation:
                'Pour un verbe en -AR avec vosotros au subjonctif : terminaison **-éis**.',
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Irréguliers, changements de radical et contexte.",
          questions: [
            {
              id: "i1",
              type: "qcm",
              question: 'Quelle est la forme de "elegir" avec nosotros au subjonctif ?',
              options: ["elegemos", "elijamos", "eligamos", "elegimos"],
              correctAnswer: "elijamos",
              explanation:
                "elegir suit la base de yo elijo → elij- + -amos : elijamos.",
            },
            {
              id: "i2",
              type: "qcm",
              question: 'Quelle est la forme correcte de "dormir" avec nosotros au subjonctif ?',
              options: ["duermamos", "dormamos", "durmamos", "durmimos"],
              correctAnswer: "durmamos",
              explanation:
                "dormir (o→ue) devient **u** à nosotros/vosotros : durmamos, durmáis.",
            },
            {
              id: "i3",
              type: "association",
              question:
                "Associe chaque infinitif à sa forme yo au présent (utile pour former le subjonctif).",
              pairs: [
                { left: "tener", right: "tengo" },
                { left: "hacer", right: "hago" },
                { left: "poner", right: "pongo" },
                { left: "venir", right: "vengo" },
              ],
              options: ["tengo", "hago", "pongo", "vengo"],
              correctAnswer: ["tengo", "hago", "pongo", "vengo"],
              explanation:
                "Le subjonctif se forme à partir de la 1re personne du présent : yo tengo/hago/pongo/vengo.",
            },
            {
              id: "i4",
              type: "texte-a-trous-select",
              question:
                "Complète : Me alegra que tú ___ y que nosotros ___ más tiempo juntos.",
              options: [
                "vengas",
                "pasemos",
                "vienes",
                "pasamos",
                "venga",
                "paséis",
              ],
              correctAnswer: ["vengas", "pasemos"],
              explanation:
                '"Me alegra que" déclenche le subjonctif : vengas et pasemos.',
            },
            {
              id: "i5",
              type: "qcm-multiple",
              question:
                "Sélectionne les phrases qui expriment une émotion (et peuvent déclencher le subjonctif).",
              options: [
                "Me alegra que estés aquí.",
                "Me molesta que llegues tarde.",
                "Vivo en Madrid.",
                "Siento que no puedas venir.",
                "Tengo un perro.",
              ],
              correctAnswer: [
                "Me alegra que estés aquí.",
                "Me molesta que llegues tarde.",
                "Siento que no puedas venir.",
              ],
              explanation:
                "Les émotions (joie, gêne, regret...) déclenchent le subjonctif.",
            },
            {
              id: "i6",
              type: "intrus",
              question: "Trouve l'intrus dans cette série autour du verbe ir au subjonctif.",
              options: ["vaya", "vayas", "vamos", "vayan"],
              correctAnswer: "vamos",
              explanation:
                '"vamos" est indicatif ; au subjonctif on a vaya, vayas, vayamos, vayáis, vayan.',
            },
            {
              id: "i7",
              type: "ordre",
              question: "Remets dans l'ordre les étapes de formation de " +
                '"tomar" au subjonctif (forme yo).',
              options: [
                "ajouter la terminaison -e",
                "partir de yo tomo",
                "enlever le -o",
                "obtenir tome",
              ],
              correctAnswer: [
                "partir de yo tomo",
                "enlever le -o",
                "ajouter la terminaison -e",
                "obtenir tome",
              ],
              explanation:
                "Méthode standard : yo tomo → tom- → tome.",
            },
            {
              id: "i8",
              type: "nombre",
              question:
                "Combien de verbes totalement irréguliers du subjonctif présent dois-tu connaître dans cette fiche (ser, ir, haber, estar, saber, dar) ?",
              options: [],
              correctAnswer: "6",
              explanation:
                "La fiche en présente 6 : ser, ir, haber, estar, saber, dar.",
            },
            {
              id: "i9",
              type: "slider",
              question:
                "Combien de lettres contient la terminaison " +
                '"-áis" (accent inclus) ?',
              options: ["1", "5", "1"],
              correctAnswer: "3",
              explanation:
                "La terminaison -áis contient 3 lettres : a, í, s.",
            },
            {
              id: "i10",
              type: "vrai-faux",
              question: 'Après "No creo que...", on met généralement le subjonctif.',
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                '"No creo que" exprime le doute/la non-certitude, donc subjonctif.',
            },
            {
              id: "i11",
              type: "texte-a-trous",
              question: 'Dudo que ellos ___ (tener) tiempo.',
              options: ["tienen", "tengan", "tenían", "tendrán"],
              correctAnswer: "tengan",
              explanation:
                "tener → yo tengo → teng- + -an : ellos tengan.",
            },
            {
              id: "i12",
              type: "qcm",
              question: 'Para que nosotros ___ mejor, necesitamos un plan.',
              options: ["podemos", "podamos", "podríamos", "pudimos"],
              correctAnswer: "podamos",
              explanation:
                '"Para que" exprime un but et déclenche le subjonctif : podamos.',
            },
            {
              id: "i13",
              type: "association",
              question: 'Associe les pronoms aux formes de "ir" au subjonctif.',
              pairs: [
                { left: "yo", right: "vaya" },
                { left: "tú", right: "vayas" },
                { left: "nosotros", right: "vayamos" },
                { left: "ellos", right: "vayan" },
              ],
              options: ["vaya", "vayas", "vayamos", "vayan"],
              correctAnswer: ["vaya", "vayas", "vayamos", "vayan"],
              explanation:
                "Conjugaison de ir au subjonctif : vaya, vayas, vaya, vayamos, vayáis, vayan.",
            },
            {
              id: "i14",
              type: "qcm-multiple",
              question: "Quelles formes portent un accent écrit ? (plusieurs réponses)",
              options: ["dé", "esté", "sea", "haya", "sepa"],
              correctAnswer: ["dé", "esté"],
              explanation:
                "Dans cette liste, seules dé et esté portent un accent graphique.",
            },
            {
              id: "i15",
              type: "texte-a-trous-select",
              question:
                "Complète : Ojalá que ella ___ bien y que vosotros también ___ bien.",
              options: [
                "esté",
                "estéis",
                "está",
                "estáis",
                "estén",
                "estemos",
              ],
              correctAnswer: ["esté", "estéis"],
              explanation:
                'Le verbe estar au subjonctif donne "esté" (elle) et "estéis" (vosotros).',
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Nuances, pièges et automatisation en phrase complète.",
          questions: [
            {
              id: "e1",
              type: "qcm",
              question: "Choisis la phrase correcte.",
              options: [
                "Quiero que tú vienes temprano.",
                "Quiero que tú vengas temprano.",
                "Quiero que tú vendrás temprano.",
                "Quiero que tú venir temprano.",
              ],
              correctAnswer: "Quiero que tú vengas temprano.",
              explanation:
                '"Quiero que" appelle le subjonctif : vengas.',
            },
            {
              id: "e2",
              type: "qcm-multiple",
              question:
                "Quels verbes appliquent un changement orthographique pour garder le son ? (plusieurs réponses)",
              options: ["buscar", "llegar", "empezar", "comer", "vivir"],
              correctAnswer: ["buscar", "llegar", "empezar"],
              explanation:
                "Au subjonctif : buscar→busque (c→qu), llegar→llegue (g→gu), empezar→empiece/empiecemos (z→c).",
            },
            {
              id: "e3",
              type: "association",
              question: "Associe chaque déclencheur à son idée dominante.",
              pairs: [
                { left: "Es necesario que...", right: "obligation / nécessité" },
                { left: "Dudo que...", right: "doute" },
                { left: "Me alegra que...", right: "émotion" },
                { left: "Ojalá (que)...", right: "souhait" },
              ],
              options: [
                "obligation / nécessité",
                "doute",
                "émotion",
                "souhait",
              ],
              correctAnswer: [
                "obligation / nécessité",
                "doute",
                "émotion",
                "souhait",
              ],
              explanation:
                "Repérer l'idée portée par le déclencheur aide à choisir vite le subjonctif.",
            },
            {
              id: "e4",
              type: "ordre",
              question: "Remets dans l'ordre cette phrase correcte.",
              options: ["No creo", "que", "ellos", "puedan", "venir hoy"],
              correctAnswer: ["No creo", "que", "ellos", "puedan", "venir hoy"],
              explanation:
                "Structure : déclencheur + que + sujet + verbe au subjonctif + complément.",
            },
            {
              id: "e5",
              type: "intrus",
              question:
                "Trouve l'intrus : une forme n'est pas correcte pour nosotros dans ces verbes à radical changeant.",
              options: ["pensemos", "durmamos", "piensamos", "pidamos"],
              correctAnswer: "piensamos",
              explanation:
                '"piensamos" est incorrect ; on dit "pensemos" (sans ie) avec nosotros.',
            },
            {
              id: "e6",
              type: "nombre",
              question:
                "Combien de niveaux (🟢 🟡 🔴) compose ce quiz de subjonctif ?",
              options: [],
              correctAnswer: "3",
              explanation:
                "Le quiz contient 3 niveaux : facile, intermédiaire et expert.",
            },
            {
              id: "e7",
              type: "slider",
              question:
                "Régle le curseur : quel est le score minimum pour valider ce quiz ?",
              options: ["0", "100", "1"],
              correctAnswer: "70",
              explanation:
                "Le passingScore du quiz est de 70%.",
            },
            {
              id: "e8",
              type: "texte-a-trous",
              question: 'Es mejor que tú ___ (hacer) los deberes ahora.',
              options: ["haces", "hagas", "hacerás", "hiciste"],
              correctAnswer: "hagas",
              explanation:
                "hacer → yo hago → hag- + -as : tú hagas.",
            },
            {
              id: "e9",
              type: "texte-a-trous-select",
              question:
                "Complète la mini-conjugaison de ser : que yo ___, que nosotros ___, que vosotros ___.",
              options: ["sea", "seamos", "seáis", "somos", "sois", "seremos"],
              correctAnswer: ["sea", "seamos", "seáis"],
              explanation:
                "ser au subjonctif : sea, seas, sea, seamos, seáis, sean.",
            },
            {
              id: "e10",
              type: "qcm",
              question: 'Quelle est la forme de "pedir" avec nosotros au subjonctif ?',
              options: ["pedemos", "pidamos", "pidiemos", "pedimos"],
              correctAnswer: "pidamos",
              explanation:
                "pedir (e→i) donne pidamos avec nosotros.",
            },
            {
              id: "e11",
              type: "vrai-faux",
              question: 'La phrase "Quiero que tú vienes" est correcte.',
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                'Après "quiero que", on attend le subjonctif : "vengas".',
            },
            {
              id: "e12",
              type: "qcm-multiple",
              question:
                "Parmi ces expressions, lesquelles peuvent déclencher le subjonctif ? (plusieurs réponses)",
              options: [
                "Es necesario que...",
                "No creo que...",
                "Ojalá (que)...",
                "Mañana es lunes.",
                "Tengo quince años.",
              ],
              correctAnswer: [
                "Es necesario que...",
                "No creo que...",
                "Ojalá (que)...",
              ],
              explanation:
                "Nécessité, doute et souhait déclenchent le subjonctif ; les constats factuels non.",
            },
            {
              id: "e13",
              type: "association",
              question: 'Associe les pronoms aux formes de "dar" au subjonctif.',
              pairs: [
                { left: "yo", right: "dé" },
                { left: "tú", right: "des" },
                { left: "nosotros", right: "demos" },
                { left: "ellos", right: "den" },
              ],
              options: ["dé", "des", "demos", "den"],
              correctAnswer: ["dé", "des", "demos", "den"],
              explanation:
                "dar au subjonctif : dé, des, dé, demos, deis, den.",
            },
            {
              id: "e14",
              type: "qcm",
              question: 'Antes de que nosotros ___, hay que préparer tout.',
              options: ["salimos", "salgamos", "saldríamos", "saldremos"],
              correctAnswer: "salgamos",
              explanation:
                '"Antes de que" appelle le subjonctif : salgamos.',
            },
            {
              id: "e15",
              type: "texte-a-trous-select",
              question:
                "Complète : Dudo que él ___ razón, pero quiero que tú lo ___.",
              options: ["tenga", "entiendas", "tiene", "entiendes", "tenía", "entenderás"],
              correctAnswer: ["tenga", "entiendas"],
              explanation:
                "Dudo que... → tenga ; quiero que... → entiendas : deux subjonctifs dans la même phrase.",
            },
          ],
        },
      ],
      questions: [],
    },
  },
];
