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
    updatedAt: "2026-04-10T19:30:00Z",
    tags: ["espagnol", "subjonctif", "subjuntivo", "conjugaison", "fiche"],
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

> ⚠️ Réflexe : **déclencheur + que + subjonctif**.

---

## ⚙️ Formation : la méthode en 3 étapes

1. Prendre la forme **yo** au présent de l'indicatif  
2. Enlever le **-o** final  
3. Ajouter les terminaisons du subjonctif

Exemple avec **hablar** : yo habl**o** → habl- → **hable, hables, hable, hablemos, habléis, hablen**

---

## ✨ Les terminaisons à connaître

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

> 🎯 Astuce : au subjonctif, les terminaisons sont **inversées** par rapport au présent.

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

> ⚠️ Lettres à surveiller : **vay-**, **hay-**, **sep-**, **esté/dé**.

---

## 🔄 Verbes à changement de radical

### e → ie (sauf nosotros/vosotros)
**pensar** → piense, pienses, piense, **pensemos**, **penséis**, piensen

### o → ue (sauf nosotros/vosotros)
**dormir** → duerma, duermas, duerma, **durmamos**, **durmáis**, duerman

### e → i (sauf nosotros/vosotros)
**pedir** → pida, pidas, pida, **pidamos**, **pidáis**, pidan

---

## ❌ Erreurs fréquentes

- **Quiero que tú vienes** ❌ → **Quiero que tú vengas** ✅
- **Es importante que estudiamos** ❌ → **Es importante que estudiemos** ✅
- **Dudo que él tiene razón** ❌ → **Dudo que él tenga razón** ✅

---

> 🎯 **Prêt(e) à te tester ?** → [Faire le quiz sur ce chapitre →](/4e/espagnol/espagnol-subjonctif-present-quiz)
`,
  },
  {
    slug: "espagnol-subjonctif-present-quiz",
    title: "Quiz — Le subjonctif présent (espagnol)",
    description:
      "Révise le subjonctif présent en espagnol avec 3 niveaux progressifs.",
    type: "quiz",
    level: "4e",
    subject: "espagnol",
    chapter: "Chapitre — Le subjonctif présent",
    createdAt: "2026-04-10T18:00:00Z",
    updatedAt: "2026-04-10T19:30:00Z",
    tags: ["espagnol", "subjonctif", "quiz", "conjugaison"],
    quizData: {
      title: "Le subjonctif présent",
      description:
        "10 questions par session pour consolider conjugaison, irréguliers et usages.",
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
              type: "conjugaison",
              question: 'Conjugue "hablar" au subjonctif (yo, tú, él).',
              options: ["yo", "tú", "él/ella"],
              correctAnswer: ["hable", "hables", "hable"],
              explanation: "Pour -AR : e, es, e.",
            },
            {
              id: "f2",
              type: "qcm",
              question: 'Quelle est la forme correcte : "Espero que nosotros..."',
              options: ["hablamos", "hablemos", "hablar", "habléis"],
              correctAnswer: "hablemos",
              explanation: "Pour nosotros avec -AR : -emos.",
            },
            {
              id: "f3",
              type: "vrai-faux",
              question: 'Après "Quiero que...", on utilise le subjonctif.',
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation: "Souhait = subjonctif.",
            },
            {
              id: "f4",
              type: "texte-a-trous",
              question: "Es importante que tú ___ (comer) bien.",
              options: ["comes", "comas", "comerás", "comiste"],
              correctAnswer: "comas",
              explanation: "comer → coma, comas, coma...",
            },
            {
              id: "f5",
              type: "conjugaison",
              question: 'Conjugue "vivir" au subjonctif (yo, nosotros, vosotros).',
              options: ["yo", "nosotros", "vosotros"],
              correctAnswer: ["viva", "vivamos", "viváis"],
              explanation: "Pour -IR : a, as, a, amos, áis, an.",
            },
            {
              id: "f6",
              type: "association",
              question: "Associe les pronoms aux terminaisons du subjonctif pour un verbe en -AR.",
              pairs: [
                { left: "yo", right: "-e" },
                { left: "tú", right: "-es" },
                { left: "él/ella", right: "-e" },
                { left: "nosotros", right: "-emos" },
              ],
              options: ["-e", "-es", "-e", "-emos"],
              correctAnswer: "association",
              explanation: "Attention : -e apparaît deux fois (yo et él/ella).",
            },
            {
              id: "f7",
              type: "texte-a-trous-select",
              question: "Complète : que yo ___, que tú ___, que él ___ (hablar).",
              options: ["hable", "hables", "hable", "habla", "hablo"],
              correctAnswer: ["hable", "hables", "hable"],
              explanation: "yo hable, tú hables, él hable.",
            },
            {
              id: "f8",
              type: "qcm-multiple",
              question:
                "Quelles expressions déclenchent le subjonctif ? (plusieurs réponses)",
              options: [
                "Quiero que...",
                "Dudo que...",
                "Me alegra que...",
                "Hoy es lunes.",
                "Tengo dos gatos.",
              ],
              correctAnswer: ["Quiero que...", "Dudo que...", "Me alegra que..."],
              explanation: "Souhait, doute et émotion déclenchent le subjonctif.",
            },
            {
              id: "f9",
              type: "conjugaison",
              question: 'Conjugue "ser" au subjonctif (yo, tú, nosotros).',
              options: ["yo", "tú", "nosotros"],
              correctAnswer: ["sea", "seas", "seamos"],
              explanation: "Verbe irrégulier : sea, seas, sea, seamos...",
            },
            {
              id: "f10",
              type: "intrus",
              question: "Trouve l'intrus (pas au subjonctif).",
              options: ["coma", "comas", "comes", "comamos"],
              correctAnswer: "comes",
              explanation: "comes est à l'indicatif.",
            },
            {
              id: "f11",
              type: "texte-a-trous",
              question: "No creo que él ___ (tener) razón.",
              options: ["tiene", "tenga", "tenía", "tendrá"],
              correctAnswer: "tenga",
              explanation: "tener → yo tengo → teng- + terminaison.",
            },
            {
              id: "f12",
              type: "conjugaison",
              question: 'Conjugue "ir" au subjonctif (yo, vosotros, ellos).',
              options: ["yo", "vosotros", "ellos/ellas"],
              correctAnswer: ["vaya", "vayáis", "vayan"],
              explanation: "ir : vaya, vayas, vaya, vayamos, vayáis, vayan.",
            },
            {
              id: "f13",
              type: "ordre",
              question: "Remets l'ordre de la structure d'une phrase au subjonctif.",
              options: ["déclencheur", "que", "sujet", "verbe au subjonctif"],
              correctAnswer: ["déclencheur", "que", "sujet", "verbe au subjonctif"],
              explanation: "La structure est très régulière.",
            },
            {
              id: "f14",
              type: "qcm",
              question: "Quelle phrase est correcte ?",
              options: [
                "Quiero que tú vienes.",
                "Quiero que tú vengas.",
                "Quiero que tú vendrás.",
                "Quiero tú que vengas.",
              ],
              correctAnswer: "Quiero que tú vengas.",
              explanation: "Quiero que + subjonctif.",
            },
            {
              id: "f15",
              type: "conjugaison",
              question: 'Conjugue "estar" au subjonctif (yo, tú, ellos).',
              options: ["yo", "tú", "ellos/ellas"],
              correctAnswer: ["esté", "estés", "estén"],
              explanation: "estar est irrégulier avec accent : esté, estés, esté...",
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
              type: "conjugaison",
              question: 'Conjugue "tener" au subjonctif (yo, tú, ellos).',
              options: ["yo", "tú", "ellos/ellas"],
              correctAnswer: ["tenga", "tengas", "tengan"],
              explanation: "Base teng-.",
            },
            {
              id: "i2",
              type: "conjugaison",
              question: 'Conjugue "hacer" au subjonctif (yo, nosotros, vosotros).',
              options: ["yo", "nosotros", "vosotros"],
              correctAnswer: ["haga", "hagamos", "hagáis"],
              explanation: "Base hag-.",
            },
            {
              id: "i3",
              type: "qcm",
              question: 'Quelle forme est correcte pour "dormir" avec nosotros ?',
              options: ["duermamos", "dormamos", "durmamos", "dormimos"],
              correctAnswer: "durmamos",
              explanation: "dormir (o→ue) devient u avec nosotros.",
            },
            {
              id: "i4",
              type: "conjugaison",
              question: 'Conjugue "pedir" au subjonctif (yo, nosotros, vosotros).',
              options: ["yo", "nosotros", "vosotros"],
              correctAnswer: ["pida", "pidamos", "pidáis"],
              explanation: "e→i, puis base particulière avec nosotros/vosotros.",
            },
            {
              id: "i5",
              type: "texte-a-trous-select",
              question: "Complète : Me alegra que tú ___ y que nosotros ___ juntos.",
              options: ["vengas", "pasemos", "vienes", "pasamos", "venga"],
              correctAnswer: ["vengas", "pasemos"],
              explanation: "Me alegra que + subjonctif.",
            },
            {
              id: "i6",
              type: "association",
              question: "Associe chaque verbe irrégulier à sa base de subjonctif.",
              pairs: [
                { left: "tener", right: "teng-" },
                { left: "hacer", right: "hag-" },
                { left: "venir", right: "veng-" },
                { left: "poner", right: "pong-" },
              ],
              options: ["teng-", "hag-", "veng-", "pong-"],
              correctAnswer: "association",
              explanation: "Ces bases viennent de la forme yo du présent.",
            },
            {
              id: "i7",
              type: "conjugaison",
              question: 'Conjugue "venir" au subjonctif (yo, tú, nosotros).',
              options: ["yo", "tú", "nosotros"],
              correctAnswer: ["venga", "vengas", "vengamos"],
              explanation: "venir → vengo → veng-.",
            },
            {
              id: "i8",
              type: "qcm-multiple",
              question: "Choisis toutes les phrases correctes.",
              options: [
                "Dudo que él tenga tiempo.",
                "Es necesario que estudiemos.",
                "Me alegra que vienes.",
                "Ojalá que haga sol.",
                "No creo que podemos ir.",
              ],
              correctAnswer: [
                "Dudo que él tenga tiempo.",
                "Es necesario que estudiemos.",
                "Ojalá que haga sol.",
              ],
              explanation: "Avec doute/nécessité/souhait → subjonctif.",
            },
            {
              id: "i9",
              type: "conjugaison",
              question: 'Conjugue "dar" au subjonctif (yo, él, nosotros).',
              options: ["yo", "él/ella", "nosotros"],
              correctAnswer: ["dé", "dé", "demos"],
              explanation: "Accent à yo/él : dé.",
            },
            {
              id: "i10",
              type: "vrai-faux",
              question:
                "Dans 'No creo que...', on met en général l'indicatif.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation: "No creo que exprime le doute, donc subjonctif.",
            },
            {
              id: "i11",
              type: "texte-a-trous",
              question: "Es mejor que vosotros ___ (estudiar) hoy.",
              options: ["estudiáis", "estudiéis", "estudien", "estudiaran"],
              correctAnswer: "estudiéis",
              explanation: "vosotros en -AR : -éis.",
            },
            {
              id: "i12",
              type: "conjugaison",
              question: 'Conjugue "saber" au subjonctif (yo, tú, ellos).',
              options: ["yo", "tú", "ellos/ellas"],
              correctAnswer: ["sepa", "sepas", "sepan"],
              explanation: "saber est irrégulier : sepa...",
            },
            {
              id: "i13",
              type: "intrus",
              question: "Trouve l'intrus autour du verbe ir.",
              options: ["vaya", "vayas", "vamos", "vayan"],
              correctAnswer: "vamos",
              explanation: "vamos est à l'indicatif.",
            },
            {
              id: "i14",
              type: "conjugaison",
              question: 'Conjugue "pensar" au subjonctif (yo, nosotros, vosotros).',
              options: ["yo", "nosotros", "vosotros"],
              correctAnswer: ["piense", "pensemos", "penséis"],
              explanation: "e→ie sauf nosotros/vosotros.",
            },
            {
              id: "i15",
              type: "ordre",
              question: "Remets les mots dans l'ordre.",
              options: [
                "Es importante",
                "que",
                "nosotros",
                "hagamos",
                "los ejercicios",
              ],
              correctAnswer: [
                "Es importante",
                "que",
                "nosotros",
                "hagamos",
                "los ejercicios",
              ],
              explanation: "La forme correcte est 'hagamos'.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Automatisation et pièges de conjugaison en contexte.",
          questions: [
            {
              id: "e1",
              type: "conjugaison",
              question: 'Conjugue "haber" au subjonctif (yo, tú, nosotros).',
              options: ["yo", "tú", "nosotros"],
              correctAnswer: ["haya", "hayas", "hayamos"],
              explanation: "haber : haya, hayas, haya, hayamos...",
            },
            {
              id: "e2",
              type: "conjugaison",
              question: 'Conjugue "elegir" au subjonctif (yo, nosotros, vosotros).',
              options: ["yo", "nosotros", "vosotros"],
              correctAnswer: ["elija", "elijamos", "elijáis"],
              explanation: "elegir suit la base de yo elijo → elij-.",
            },
            {
              id: "e3",
              type: "qcm",
              question: "Choisis la phrase correcte.",
              options: [
                "No creo que ellos pueden venir.",
                "No creo que ellos puedan venir.",
                "No creo que ellos podrán venir.",
                "No creo ellos que puedan venir.",
              ],
              correctAnswer: "No creo que ellos puedan venir.",
              explanation: "No creo que + subjonctif.",
            },
            {
              id: "e4",
              type: "conjugaison",
              question: 'Conjugue "poner" au subjonctif (yo, tú, ellos).',
              options: ["yo", "tú", "ellos/ellas"],
              correctAnswer: ["ponga", "pongas", "pongan"],
              explanation: "poner → pongo → pong-.",
            },
            {
              id: "e5",
              type: "association",
              question: "Associe ces déclencheurs à leur idée.",
              pairs: [
                { left: "Dudo que...", right: "doute" },
                { left: "Me alegra que...", right: "émotion" },
                { left: "Es necesario que...", right: "obligation" },
                { left: "Ojalá (que)...", right: "souhait" },
              ],
              options: ["doute", "émotion", "obligation", "souhait"],
              correctAnswer: "association",
              explanation: "Identifier la valeur aide à choisir le mode.",
            },
            {
              id: "e6",
              type: "conjugaison",
              question: 'Conjugue "estar" au subjonctif (yo, nosotros, vosotros).',
              options: ["yo", "nosotros", "vosotros"],
              correctAnswer: ["esté", "estemos", "estéis"],
              explanation: "Accent à yo : esté.",
            },
            {
              id: "e7",
              type: "texte-a-trous-select",
              question:
                "Complète : Ojalá que ella ___ y que nosotros también ___ listos.",
              options: ["esté", "estemos", "está", "estamos", "estén"],
              correctAnswer: ["esté", "estemos"],
              explanation: "Ojalá que + subjonctif.",
            },
            {
              id: "e8",
              type: "qcm-multiple",
              question: "Quelles formes sont au subjonctif présent ?",
              options: ["venga", "hagamos", "tengo", "puedan", "estudiáis"],
              correctAnswer: ["venga", "hagamos", "puedan"],
              explanation: "tengo et estudiáis ne sont pas au subjonctif.",
            },
            {
              id: "e9",
              type: "conjugaison",
              question: 'Conjugue "poder" au subjonctif (yo, nosotros, vosotros).',
              options: ["yo", "nosotros", "vosotros"],
              correctAnswer: ["pueda", "podamos", "podáis"],
              explanation: "o→ue sauf nosotros/vosotros.",
            },
            {
              id: "e10",
              type: "intrus",
              question: "Trouve l'intrus.",
              options: ["tenga", "tengas", "tenemos", "tengan"],
              correctAnswer: "tenemos",
              explanation: "tenemos est à l'indicatif.",
            },
            {
              id: "e11",
              type: "conjugaison",
              question: 'Conjugue "salir" au subjonctif (yo, tú, nosotros).',
              options: ["yo", "tú", "nosotros"],
              correctAnswer: ["salga", "salgas", "salgamos"],
              explanation: "salir → yo salgo → salg-.",
            },
            {
              id: "e12",
              type: "texte-a-trous",
              question: "Antes de que nosotros ___ (salir), cerramos la puerta.",
              options: ["salimos", "salgamos", "saldríamos", "saldremos"],
              correctAnswer: "salgamos",
              explanation: "Antes de que déclenche le subjonctif.",
            },
            {
              id: "e13",
              type: "conjugaison",
              question: 'Conjugue "decir" au subjonctif (yo, nosotros, vosotros).',
              options: ["yo", "nosotros", "vosotros"],
              correctAnswer: ["diga", "digamos", "digáis"],
              explanation: "decir → yo digo → dig-.",
            },
            {
              id: "e14",
              type: "vrai-faux",
              question: 'La phrase "Es mejor que tú estudias más" est correcte.',
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation: "On doit dire : Es mejor que tú estudies más.",
            },
            {
              id: "e15",
              type: "ordre",
              question: "Remets la phrase correcte dans l'ordre.",
              options: [
                "Dudo",
                "que",
                "ellos",
                "tengan",
                "razón",
              ],
              correctAnswer: ["Dudo", "que", "ellos", "tengan", "razón"],
              explanation: "Avec dudo que, on met tengan.",
            },
          ],
        },
      ],
      questions: [],
    },
  },
];
