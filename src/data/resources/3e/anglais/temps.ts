import type { Resource } from "@/types";

const CHAPTER = "Grammaire — Les temps essentiels en anglais";

export const resources: Resource[] = [
  {
    slug: "anglais-temps-fiche",
    title: "Les temps essentiels en anglais",
    description:
      "Présent simple, be + -ing, prétérit, present perfect, will, would : quel temps choisir et comment le conjuguer, avec les exemples de Ferris Bueller's Day Off.",
    type: "fiche",
    level: "3e",
    subject: "anglais",
    chapter: CHAPTER,
    createdAt: "2026-11-14T13:00:00Z",
    updatedAt: "2026-11-14T13:00:00Z",
    tags: ["temps", "présent simple", "prétérit", "present perfect", "conditionnel", "grammaire", "fiche"],
    relatedResourceSlug: "anglais-temps-quiz",
    mdxPath: "3e/anglais/fiches/anglais-temps-fiche.mdx",
  },
  {
    slug: "anglais-temps-quiz",
    title: "Quiz — Les temps essentiels en anglais",
    description:
      "Reconnaître, conjuguer et traduire les temps essentiels : présent simple, be + -ing, prétérit, present perfect, futur et conditionnel.",
    type: "quiz",
    level: "3e",
    subject: "anglais",
    chapter: CHAPTER,
    createdAt: "2026-11-14T13:00:00Z",
    updatedAt: "2026-11-14T13:00:00Z",
    tags: ["temps", "prétérit", "present perfect", "conjugaison", "quiz"],
    relatedResourceSlug: "anglais-temps-fiche",
    quizData: {
      title: "Les temps essentiels en anglais",
      description: "Choisis ton niveau : 🟢 reconnaître, 🟡 conjuguer, 🔴 traduire et écrire comme au contrôle.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        // ─────────────────────────────── FACILE ───────────────────────────────
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Reconnaître le bon temps grâce aux mots-repères.",
          questions: [
            {
              id: "tps-f-01",
              type: "qcm",
              question: "Choisis la bonne forme : *Yesterday, Ferris ___ to school.* (hier, Ferris n'est pas allé à l'école)",
              options: ["doesn't go", "didn't go", "isn't going", "didn't went"],
              correctAnswer: "didn't go",
              hint: "*yesterday* = moment passé et terminé.",
              explanation:
                "*yesterday* → prétérit. À la forme négative : **didn't + base verbale** → *didn't go* (jamais *didn't went* : le passé est déjà dans *did*).",
            },
            {
              id: "tps-f-02",
              type: "qcm",
              question: "Choisis la bonne forme : *Look! Cameron ___ in bed.* (Regarde ! Cameron est allongé dans son lit.)",
              options: ["lies", "is lying", "lied", "has lain"],
              correctAnswer: "is lying",
              explanation:
                "*Look!* → on décrit ce qui se passe **en ce moment** → **be + V-ing** : *is lying* (lie → lying).",
            },
            {
              id: "tps-f-03",
              type: "qcm",
              question: "Choisis la bonne forme : *Ferris ___ absent nine times this semester.* (Ferris a déjà été absent neuf fois ce semestre.)",
              options: ["was already", "has already been", "is already being", "already were"],
              correctAnswer: "has already been",
              explanation:
                "*already* + *this semester* (pas fini) → on fait un **bilan** → present perfect : **has + participe passé** (*been*).",
            },
            {
              id: "tps-f-04",
              type: "qcm",
              question: "Choisis la bonne forme : *I hope it ___ sunnier tomorrow.* (J'espère qu'il y aura plus de soleil demain.)",
              options: ["will get", "got", "will gets", "gets"],
              correctAnswer: "will get",
              explanation:
                "*tomorrow* → futur : **will + base verbale** → *will get*. Après *will*, jamais de -s.",
            },
            {
              id: "tps-f-05",
              type: "qcm",
              question: "Choisis le bon mot : *What ___ you do if you had a day off?* (Que ferais-tu si tu avais un jour de congé ?)",
              options: ["will", "would", "did", "do"],
              correctAnswer: "would",
              explanation:
                "« ferais » = situation imaginaire → **would + base verbale**. Structure : *If + prétérit (had), would + base (do)*.",
            },
            {
              id: "tps-f-06",
              type: "qcm",
              question: "Quel est le prétérit de *succeed* (réussir) ?",
              options: ["succeded", "succeeded", "succeedded", "succeed"],
              correctAnswer: "succeeded",
              explanation:
                "*succeed* est régulier : on ajoute **-ed** → *succeeded* (2 c, 2 e, puis -ed).",
            },
            {
              id: "tps-f-07",
              type: "vrai-faux",
              question: "La phrase *Ferris give Cameron a call.* est correcte.",
              correctAnswer: "Faux",
              explanation:
                "Ferris = **he** → au présent simple, on ajoute **-s** : *Ferris **gives** Cameron a call.*",
            },
            {
              id: "tps-f-08",
              type: "vrai-faux",
              question: "Après *didn't*, on met la base verbale : *He didn't go to school.*",
              correctAnswer: "Vrai",
              explanation:
                "*did / didn't* porte déjà le passé → le verbe reste à la **base** : *didn't go*, *Did he go?*",
            },
            {
              id: "tps-f-09",
              type: "vrai-faux",
              question: "« Ferris **a réussi** à pirater l'ordinateur » se traduit toujours avec le present perfect (*has managed*).",
              correctAnswer: "Faux",
              explanation:
                "Le passé composé français n'est pas toujours un present perfect ! Action **terminée** → **prétérit** : *Ferris **managed** to hack the Dean's computer.*",
            },
            {
              id: "tps-f-10",
              type: "association",
              question: "Associe chaque forme au nom de son temps.",
              pairs: [
                { left: "Ferris calls", right: "Présent simple" },
                { left: "Ferris is calling", right: "Présent en be + -ing" },
                { left: "Ferris called", right: "Prétérit" },
                { left: "Ferris has called", right: "Present perfect" },
                { left: "Ferris will call", right: "Futur" },
                { left: "Ferris would call", right: "Conditionnel" },
              ],
              explanation:
                "-s → présent simple ; be + -ing → action en cours ; -ed → prétérit ; have + participe passé → present perfect ; will → futur ; would → conditionnel.",
            },
            {
              id: "tps-f-11",
              type: "association",
              question: "Associe chaque verbe irrégulier de ton cours à son prétérit.",
              pairs: [
                { left: "go (aller)", right: "went" },
                { left: "see (voir)", right: "saw" },
                { left: "think (penser)", right: "thought" },
                { left: "tell (raconter)", right: "told" },
                { left: "feel (ressentir)", right: "felt" },
                { left: "come (venir)", right: "came" },
              ],
              explanation:
                "Les verbes irréguliers ne prennent pas -ed : il faut apprendre la 2e colonne par cœur (go → went, see → saw, think → thought…).",
            },
            {
              id: "tps-f-12",
              type: "texte-a-trous",
              question: "Every day, Jeanie ___ to school. (Tous les jours, Jeanie va à l'école.)",
              options: ["go", "goes", "going", "went"],
              correctAnswer: "goes",
              explanation:
                "*every day* = habitude → présent simple. Jeanie = **she** → **-s** ; après -o on écrit **-es** : *goes*.",
            },
            {
              id: "tps-f-13",
              type: "texte-a-trous",
              question: "Cameron is ___ in bed. (Cameron est allongé dans son lit.)",
              options: ["lieing", "lying", "lyeing", "liing"],
              correctAnswer: "lying",
              explanation:
                "Les verbes en **-ie** font **-ying** : *lie → lying*, *die → dying*.",
            },
            {
              id: "tps-f-14",
              type: "texte-a-trous",
              question: "Ferris ___ to hack the Dean's computer. (Ferris a réussi à pirater l'ordinateur du doyen.)",
              options: ["manages", "managed", "has manage", "managing"],
              correctAnswer: "managed",
              explanation:
                "« a réussi » = action passée **terminée** → **prétérit** : *manage → managed* (verbe en -e : on ajoute juste -d).",
            },
            {
              id: "tps-f-15",
              type: "texte-a-trous",
              question: "Did he ___ to school yesterday? (Est-ce qu'il est allé à l'école hier ?)",
              options: ["go", "went", "goes", "gone"],
              correctAnswer: "go",
              explanation:
                "Question au prétérit : **Did + sujet + base verbale ?** → *Did he **go**…?* Le passé est déjà dans *did*.",
            },
            {
              id: "tps-f-16",
              type: "intrus",
              question: "Trouve l'intrus : 3 de ces mots appellent le prétérit, 1 appelle le present perfect.",
              options: ["yesterday", "last week", "two days ago", "already"],
              correctAnswer: "already",
              explanation:
                "*yesterday, last week, two days ago* = moment **daté et fini** → prétérit. *already* (déjà) = **bilan** → present perfect.",
            },
            {
              id: "tps-f-17",
              type: "tri-categories",
              question: "Range chaque mot-repère : habitude (présent simple) ou action en cours (be + -ing) ?",
              items: [
                { id: "a", label: "every day" },
                { id: "b", label: "usually" },
                { id: "c", label: "often" },
                { id: "d", label: "always" },
                { id: "e", label: "now" },
                { id: "f", label: "right now" },
                { id: "g", label: "at the moment" },
                { id: "h", label: "Look!" },
              ],
              categories: [
                { id: "habitude", label: "🔁 Habitude → présent simple", correctItemIds: ["a", "b", "c", "d"] },
                { id: "en-cours", label: "▶️ En ce moment → be + -ing", correctItemIds: ["e", "f", "g", "h"] },
              ],
              explanation:
                "Ce qui se répète (*every day, usually, often, always*) → présent simple. Ce qui se passe maintenant (*now, right now, at the moment, Look!*) → be + V-ing.",
            },
            {
              id: "tps-f-18",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Ferris fait semblant d'être malade.",
              tiles: ["Ferris", "is", "pretending", "to", "be", "sick", "pretend", "pretends"],
              correctAnswer: ["Ferris", "is", "pretending", "to", "be", "sick"],
              explanation:
                "On décrit la scène → **be + V-ing** : *is pretending*. Puis *pretend + TO + base* : *to be sick*.",
            },
            {
              id: "tps-f-19",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Ferris n'est pas allé à l'école.",
              tiles: ["Ferris", "didn't", "go", "to", "school", "went", "doesn't"],
              correctAnswer: ["Ferris", "didn't", "go", "to", "school"],
              explanation:
                "Action passée terminée → prétérit. Négation : **didn't + base verbale** → *didn't go* (pas *went*).",
            },
            {
              id: "tps-f-20",
              type: "verbe-irregulier",
              question: "Complète le tableau pour ce verbe irrégulier de ton cours.",
              verbData: {
                french: "savoir/connaître",
                base: "know",
                preterite: "knew",
                participle: "known",
                givenField: "base",
              },
              explanation:
                "know → knew → known (savoir, connaître). Dans le cours : *Ferris already **knew** what Cameron was going to say.*",
            },
          ],
        },

        // ──────────────────────────── INTERMÉDIAIRE ───────────────────────────
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Conjuguer, corriger et commencer à traduire.",
          questions: [
            {
              id: "tps-i-01",
              type: "qcm",
              question: "Choisis la bonne forme : *Mr Rooney ___ Ferris's mother yesterday.* (M. Rooney a appelé la mère de Ferris hier.)",
              options: ["called", "has called", "calls", "is calling"],
              correctAnswer: "called",
              explanation:
                "*yesterday* = moment daté et fini → **prétérit** : *called*. Jamais de present perfect avec *yesterday*.",
            },
            {
              id: "tps-i-02",
              type: "qcm",
              question: "Quelle est la bonne traduction de « Ferris savait déjà ce que Cameron allait dire » ?",
              options: [
                "Ferris already knew what Cameron was going to say.",
                "Ferris already knows what Cameron is going to say.",
                "Ferris has already known what Cameron was going to say.",
                "Ferris already knew what Cameron will say.",
              ],
              correctAnswer: "Ferris already knew what Cameron was going to say.",
              explanation:
                "« savait » → prétérit de *know* : **knew**. « allait dire » = futur vu depuis le passé → **was going to + base**.",
            },
            {
              id: "tps-i-03",
              type: "qcm",
              question: "Choisis la phrase correcte.",
              options: [
                "His parents are believing that he is sick.",
                "His parents believe that he is sick.",
                "His parents believes that he is sick.",
                "His parents is believing that he is sick.",
              ],
              correctAnswer: "His parents believe that he is sick.",
              explanation:
                "*believe* est un **verbe d'état** → présent simple, pas de -ing. *His parents* = **they** → pas de -s.",
            },
            {
              id: "tps-i-04",
              type: "texte-a-trous-select",
              question: "Ferris ___ Cameron a call. Cameron ___ lying in bed. He ___ really sick.",
              options: ["gives", "give", "is", "are", "looks", "look", "looking"],
              correctAnswer: ["gives", "is", "looks"],
              explanation:
                "Récit au présent. Ferris / He = 3e personne → **gives**, **looks** (-s). Action en cours → *is lying* (be + V-ing).",
            },
            {
              id: "tps-i-05",
              type: "texte-a-trous-select",
              question: "Earlier this morning, it ___ a little fresh, but now the sun ___ ___.",
              options: ["was", "were", "is", "are", "shining", "shine", "shined"],
              correctAnswer: ["was", "is", "shining"],
              explanation:
                "*earlier this morning* (plus tôt ce matin, c'est fini) → prétérit de *be* : **was** (it). *now* → be + V-ing : **is shining**.",
            },
            {
              id: "tps-i-06",
              type: "texte-a-trous-select",
              question: "If I ___ a day off, I ___ go to see my friends.",
              options: ["had", "have", "would", "will", "went"],
              correctAnswer: ["had", "would"],
              explanation:
                "Hypothèse : **If + prétérit** (*had*), puis **would + base** (*would go*). Jamais *would* juste après *if*.",
            },
            {
              id: "tps-i-07",
              type: "completion-tableau",
              question: "Complète le tableau (écris la forme demandée).",
              table: {
                headers: ["Base verbale", "Prétérit", "V-ing"],
                rows: [
                  [{ value: "hack (pirater)" }, { blank: true, correctAnswer: "hacked" }, { value: "hacking" }],
                  [{ value: "try (essayer)" }, { blank: true, correctAnswer: "tried" }, { value: "trying" }],
                  [{ value: "stop (arrêter)" }, { blank: true, correctAnswer: "stopped" }, { blank: true, correctAnswer: "stopping" }],
                  [{ value: "hope (espérer)" }, { value: "hoped" }, { blank: true, correctAnswer: "hoping" }],
                  [{ value: "swim (nager)" }, { value: "swam" }, { blank: true, correctAnswer: "swimming" }],
                  [{ value: "lie (mentir)" }, { value: "lied" }, { blank: true, correctAnswer: "lying" }],
                ],
              },
              explanation:
                "Prétérit : consonne + y → -ied (*tried*) ; verbe court → on double (*stopped*). -ing : e muet → on l'enlève (*hoping*), verbe court → on double (*swimming*), -ie → -ying (*lying*).",
            },
            {
              id: "tps-i-08",
              type: "completion-tableau",
              question: "Complète : la forme avec *he / she / it* au présent simple, puis le prétérit.",
              table: {
                headers: ["Base verbale", "he / she / it (présent)", "Prétérit"],
                rows: [
                  [{ value: "call" }, { blank: true, correctAnswer: "calls" }, { value: "called" }],
                  [{ value: "try" }, { blank: true, correctAnswer: "tries" }, { value: "tried" }],
                  [{ value: "go" }, { blank: true, correctAnswer: "goes" }, { blank: true, correctAnswer: "went" }],
                  [{ value: "have" }, { blank: true, correctAnswer: "has" }, { blank: true, correctAnswer: "had" }],
                  [{ value: "manage" }, { value: "manages" }, { blank: true, correctAnswer: "managed" }],
                ],
              },
              explanation:
                "Présent : he/she/it + **-s** (*calls*), -es après -o (*goes*), -ies après consonne + y (*tries*), *have → has*. Prétérit : -ed ou forme irrégulière (*went, had*).",
            },
            {
              id: "tps-i-09",
              type: "verbe-irregulier",
              question: "Complète le tableau pour ce verbe irrégulier de ton cours.",
              verbData: {
                french: "penser",
                base: "think",
                preterite: "thought",
                participle: "thought",
                givenField: "french",
              },
              explanation: "think → thought → thought (penser). Prétérit et participe passé sont identiques.",
            },
            {
              id: "tps-i-10",
              type: "verbe-irregulier",
              question: "Complète le tableau pour ce verbe irrégulier de ton cours.",
              verbData: {
                french: "raconter/dire",
                base: "tell",
                preterite: "told",
                participle: "told",
                givenField: "preterite",
              },
              explanation:
                "tell → told → told (raconter, dire). Dans le cours : *Mr Rooney calls Ferris's mother to tell her…*",
            },
            {
              id: "tps-i-11",
              type: "tri-categories",
              question: "Range chaque mot-repère : prétérit ou present perfect ?",
              items: [
                { id: "a", label: "yesterday" },
                { id: "b", label: "last week" },
                { id: "c", label: "two days ago" },
                { id: "d", label: "in 1986" },
                { id: "e", label: "already" },
                { id: "f", label: "never" },
                { id: "g", label: "just" },
                { id: "h", label: "yet" },
              ],
              categories: [
                { id: "preterit", label: "✅ Moment fini → prétérit", correctItemIds: ["a", "b", "c", "d"] },
                { id: "present-perfect", label: "📊 Bilan → present perfect", correctItemIds: ["e", "f", "g", "h"] },
              ],
              explanation:
                "Un moment **daté et fini** (*yesterday, last week, ago, in 1986*) → prétérit. Un **bilan** jusqu'à maintenant (*already, never, just, yet*) → present perfect.",
            },
            {
              id: "tps-i-12",
              type: "correction-erreur",
              question: "Trouve l'erreur (1) et corrige-la.",
              taggedText: "Ferris [give|gives] Cameron a call.",
              explanation:
                "Ferris = **he** → présent simple avec **-s** : *gives*. (C'était une erreur de ton cahier !)",
            },
            {
              id: "tps-i-13",
              type: "correction-erreur",
              question: "Trouve l'erreur (1) et corrige-la.",
              taggedText: "Yesterday, he [succeeds|succeeded] in hacking Mr Rooney's computer.",
              explanation:
                "*Yesterday* → action passée terminée → **prétérit** : *succeeded* (2 c, 2 e, + -ed).",
            },
            {
              id: "tps-i-14",
              type: "correction-erreur",
              question: "Trouve l'erreur (1) et corrige-la.",
              taggedText: "Did he [went|go] to school yesterday?",
              explanation:
                "Question au prétérit : **Did + sujet + base verbale** → *Did he **go**…?* Le passé est déjà dans *did*.",
            },
            {
              id: "tps-i-15",
              type: "traduction",
              question: "Traduis en anglais (fais un **bilan** : present perfect).",
              sourceText: "Ferris a déjà été absent neuf fois.",
              acceptedAnswers: [
                "Ferris has already been absent nine times.",
                "Ferris has been absent nine times already.",
              ],
              keyChunks: ["has already been|has been", "absent", "nine times"],
              hint: "have / has + participe passé de *be* (be → was → **been**). *already* se place entre *has* et *been*.",
              explanation:
                "« déjà… neuf fois » = **bilan** jusqu'à maintenant → present perfect : **has already been**. *already* se place entre l'auxiliaire et le participe passé.",
            },
            {
              id: "tps-i-16",
              type: "traduction",
              question: "Traduis en anglais avec le verbe **manage**.",
              sourceText: "Il a réussi à pirater l'ordinateur du doyen.",
              acceptedAnswers: [
                "He managed to hack the Dean's computer.",
                "He managed to hack the dean's computer.",
              ],
              keyChunks: ["managed to", "hack", "the Dean's computer"],
              hint: "« a réussi » = action terminée → prétérit. *manage* + TO + base verbale.",
              explanation:
                "Action passée terminée → **prétérit** : *managed*. *manage* est suivi de **TO + base** : *to hack*. Génitif : *the Dean's computer*.",
            },
            {
              id: "tps-i-17",
              type: "traduction",
              question: "Traduis en anglais (tu décris la scène du film).",
              sourceText: "Cameron est allongé dans son lit.",
              acceptedAnswers: [
                "Cameron is lying in bed.",
                "Cameron is lying in his bed.",
              ],
              keyChunks: ["is lying", "in bed|in his bed"],
              hint: "Description d'une scène → be + V-ing. *lie* (être allongé) → ly…",
              explanation:
                "On décrit une scène → **be + V-ing** : *is lying*. Orthographe : *lie → lying* (-ie → -ying).",
            },
            {
              id: "tps-i-18",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Jeanie ne veut pas aller à l'école.",
              tiles: ["Jeanie", "doesn't", "want", "to", "go", "to", "school", "wants", "don't", "going", "isn't"],
              correctAnswer: ["Jeanie", "doesn't", "want", "to", "go", "to", "school"],
              explanation:
                "Présent simple négatif : **doesn't + base** → *doesn't want* (le -s est dans *does*, donc pas *wants*). *want* + TO + base : *to go*.",
            },
            {
              id: "tps-i-19",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "J'irais voir mes amis si j'avais un jour de congé.",
              tiles: ["I", "would", "go", "to", "see", "my", "friends", "if", "I", "had", "a", "day", "off", "will", "have", "went"],
              correctAnswer: ["I", "would", "go", "to", "see", "my", "friends", "if", "I", "had", "a", "day", "off"],
              explanation:
                "« irais » → **would + base** (*would go*). Après *if* → **prétérit** (*had*), jamais *would* ni le présent.",
            },
            {
              id: "tps-i-20",
              type: "ordre",
              question: "Range ces phrases dans l'ordre du temps : de la plus ancienne à la plus lointaine dans le futur.",
              options: [
                "In 1986, the film came out.",
                "Earlier this morning, it was a little fresh.",
                "Right now, the sun is shining.",
                "I hope it will get sunnier tomorrow.",
              ],
              correctAnswer: [
                "In 1986, the film came out.",
                "Earlier this morning, it was a little fresh.",
                "Right now, the sun is shining.",
                "I hope it will get sunnier tomorrow.",
              ],
              explanation:
                "Les temps suivent la ligne du temps : prétérit (*came out* en 1986, *was* ce matin) → présent be + -ing (*is shining*, maintenant) → futur (*will get*, demain).",
            },
          ],
        },

        // ─────────────────────────────── EXPERT ───────────────────────────────
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Comme au contrôle : traduire, corriger et écrire sans aide.",
          questions: [
            {
              id: "tps-e-01",
              type: "traduction",
              question: "Traduis en anglais avec le verbe **succeed**.",
              sourceText: "Il a réussi à pirater l'ordinateur de M. Rooney.",
              acceptedAnswers: [
                "He succeeded in hacking Mr Rooney's computer.",
                "He succeeded in hacking Mr. Rooney's computer.",
              ],
              keyChunks: ["succeeded in", "hacking", "Mr Rooney's|Mr. Rooney's"],
              explanation:
                "Action terminée → **prétérit** : *succeeded*. *succeed* + **IN** + **V-ing** (après une préposition, -ING est la seule solution). Génitif : *Mr Rooney's computer*.",
            },
            {
              id: "tps-e-02",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Ferris n'est pas allé à l'école hier.",
              acceptedAnswers: [
                "Ferris didn't go to school yesterday.",
                "Yesterday, Ferris didn't go to school.",
                "Yesterday Ferris didn't go to school.",
              ],
              keyChunks: ["didn't go|did not go", "to school", "yesterday"],
              explanation:
                "*hier* → prétérit. Négation : **didn't + base verbale** → *didn't go* (jamais *didn't went*).",
            },
            {
              id: "tps-e-03",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Est-ce que M. Rooney a appelé la mère de Ferris hier ?",
              acceptedAnswers: [
                "Did Mr Rooney call Ferris's mother yesterday?",
                "Did Mr. Rooney call Ferris's mother yesterday?",
                "Did Mr Rooney call Ferris' mother yesterday?",
              ],
              keyChunks: ["Did", "call", "Ferris's mother|Ferris' mother", "yesterday"],
              explanation:
                "*hier* → prétérit. Question : **Did + sujet + base verbale ?** → *Did Mr Rooney **call**…?* Génitif : *Ferris's mother*.",
            },
            {
              id: "tps-e-04",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Ferris a déjà été absent neuf fois ce semestre.",
              acceptedAnswers: [
                "Ferris has already been absent nine times this semester.",
                "This semester, Ferris has already been absent nine times.",
                "Ferris has been absent nine times already this semester.",
              ],
              keyChunks: ["has already been|has been", "nine times", "this semester"],
              explanation:
                "*déjà* + *ce semestre* (pas fini) = **bilan** → present perfect : **has already been**.",
            },
            {
              id: "tps-e-05",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Si j'avais un jour de congé, j'irais voir mes amis.",
              acceptedAnswers: [
                "If I had a day off, I would go to see my friends.",
                "If I had a day off, I would go and see my friends.",
                "If I had a day off, I would go see my friends.",
                "If I had a day off, I would see my friends.",
                "If I had a day off I would go to see my friends.",
                "I would go to see my friends if I had a day off.",
                "I would go and see my friends if I had a day off.",
                "If I had a day off, I'd go to see my friends.",
                "If I had a day off, I'd go and see my friends.",
              ],
              keyChunks: ["If I had|if I had", "would|I'd", "a day off"],
              explanation:
                "Hypothèse : **If + prétérit** (*had*), **would + base** (*would go*). Jamais *would* juste après *if*.",
            },
            {
              id: "tps-e-06",
              type: "traduction",
              question: "Traduis en anglais (utilise **will**).",
              sourceText: "J'espère que le temps sera plus ensoleillé demain.",
              acceptedAnswers: [
                "I hope it will be sunnier tomorrow.",
                "I hope it will get sunnier tomorrow.",
                "I hope the weather will be sunnier tomorrow.",
                "I hope that it will be sunnier tomorrow.",
                "I hope that it will get sunnier tomorrow.",
                "I hope that the weather will be sunnier tomorrow.",
                "I hope it'll be sunnier tomorrow.",
                "I hope it'll get sunnier tomorrow.",
              ],
              keyChunks: ["hope", "will be|will get|'ll be|'ll get", "sunnier"],
              explanation:
                "*demain* → futur : **will + base** (*will be / will get*). Comparatif d'un adjectif court en -y : *sunny → sunnier*.",
            },
            {
              id: "tps-e-07",
              type: "correction-erreur",
              question: "Trouve les 2 erreurs et corrige-les.",
              taggedText: "Ferris [give|gives] Cameron a call because Cameron [feel|feels] shredded.",
              explanation:
                "Ferris et Cameron = **he** → présent simple avec **-s** : *gives*, *feels*.",
            },
            {
              id: "tps-e-08",
              type: "correction-erreur",
              question: "Trouve les 3 erreurs et corrige-les.",
              taggedText:
                "Yesterday, Ferris [manages|managed] to hack the Dean's computer. He didn't [went|go] to school. Did his parents [knew|know]?",
              explanation:
                "*Yesterday* → prétérit : *managed*. Après *didn't* et *did* → **base verbale** : *didn't go*, *Did his parents know?*",
            },
            {
              id: "tps-e-09",
              type: "correction-erreur",
              question: "Trouve les 2 erreurs et corrige-les.",
              taggedText: "Look! Cameron [lies|is lying] in bed and he says he is [dieing|dying].",
              explanation:
                "*Look!* → action en cours → **be + V-ing** : *is lying*. Orthographe : *die → dying* (-ie → -ying).",
            },
            {
              id: "tps-e-10",
              type: "correction-erreur",
              question: "Trouve les 2 erreurs et corrige-les.",
              taggedText: "Mr Rooney [call|calls] Ferris's mother to tell her that Ferris has already [be|been] absent nine times.",
              explanation:
                "Mr Rooney = **he** → *calls*. Present perfect = **has + participe passé** : *be → was → been*.",
            },
            {
              id: "tps-e-11",
              type: "etude-texte",
              question: "Lis le texte, puis réponds aux questions sur les temps.",
              passage:
                "It is Monday morning. Ferris is lying in bed and he is pretending to be sick. His parents believe him. Last week, he skipped school twice, and he has already been absent nine times this semester. Jeanie is angry: \"If I were bleeding my eyes out, they would still send me to school!\"\n\n(skip school = sécher les cours · bleed = saigner · send = envoyer)",
              subQuestions: [
                {
                  question: "Pourquoi *is lying* et *is pretending* sont-ils en be + -ing ?",
                  options: [
                    "Ce sont des actions en cours : on décrit la scène.",
                    "Ce sont des habitudes.",
                    "Ce sont des actions terminées.",
                  ],
                  correctAnswer: "Ce sont des actions en cours : on décrit la scène.",
                  explanation: "be + V-ing = action en cours, idéal pour décrire une scène de film.",
                },
                {
                  question: "Pourquoi *believe* n'est-il pas à la forme -ing ?",
                  options: [
                    "C'est un verbe d'état.",
                    "C'est un verbe irrégulier.",
                    "C'est un verbe au futur.",
                  ],
                  correctAnswer: "C'est un verbe d'état.",
                  explanation: "*believe, want, know, like, seem* = verbes d'état → présent simple.",
                },
                {
                  question: "*he skipped school twice* : quel temps, et pourquoi ?",
                  options: [
                    "Prétérit : action terminée, datée par « last week ».",
                    "Present perfect : c'est un bilan.",
                    "Présent simple : c'est une habitude.",
                  ],
                  correctAnswer: "Prétérit : action terminée, datée par « last week ».",
                  explanation: "*last week* = moment fini → prétérit (*skip → skipped*, on double le p).",
                },
                {
                  question: "*he has already been absent nine times this semester* exprime…",
                  options: [
                    "un bilan jusqu'à maintenant.",
                    "une action en cours.",
                    "une action future.",
                  ],
                  correctAnswer: "un bilan jusqu'à maintenant.",
                  explanation: "*already* + semestre pas fini → present perfect = bilan.",
                },
                {
                  question: "*If I were…, they would still send me…* exprime…",
                  options: [
                    "une situation imaginaire (une hypothèse).",
                    "un fait réel du passé.",
                    "une habitude.",
                  ],
                  correctAnswer: "une situation imaginaire (une hypothèse).",
                  explanation: "*If + prétérit (were), would + base* = hypothèse : Jeanie n'est pas vraiment en train de saigner des yeux !",
                },
              ],
              explanation:
                "Chaque temps a son sens : be + -ing = en cours ; verbe d'état = présent simple ; prétérit = fini et daté ; present perfect = bilan ; would = hypothèse.",
            },
            {
              id: "tps-e-12",
              type: "completion-tableau",
              question: "Conjugue *succeed* (réussir) avec **he** à chaque temps.",
              table: {
                headers: ["Temps", "Forme avec he"],
                rows: [
                  [{ value: "Présent simple" }, { blank: true, correctAnswer: "succeeds" }],
                  [{ value: "Présent be + -ing" }, { blank: true, correctAnswer: "is succeeding" }],
                  [{ value: "Prétérit" }, { blank: true, correctAnswer: "succeeded" }],
                  [{ value: "Present perfect" }, { blank: true, correctAnswer: "has succeeded" }],
                  [{ value: "Futur (will)" }, { blank: true, correctAnswer: "will succeed" }],
                  [{ value: "Conditionnel" }, { blank: true, correctAnswer: "would succeed" }],
                ],
              },
              explanation:
                "he + -s (*succeeds*) ; is + V-ing ; + -ed (*succeeded*) ; has + participe passé ; will / would + **base verbale** (sans -s).",
            },
            {
              id: "tps-e-13",
              type: "verbe-irregulier",
              question: "Complète le tableau pour ce verbe irrégulier de ton cours.",
              verbData: {
                french: "ressentir/se sentir",
                base: "feel",
                preterite: "felt",
                participle: "felt",
                givenField: "french",
              },
              explanation:
                "feel → felt → felt (ressentir, se sentir). Dans le cours : *Cameron feels shredded* (au présent).",
            },
            {
              id: "tps-e-14",
              type: "verbe-irregulier",
              question: "Complète le tableau pour ce verbe irrégulier de ton cours.",
              verbData: {
                french: "dire",
                base: "say",
                preterite: "said",
                participle: "said",
                givenField: "preterite",
              },
              explanation: "say → said → said (dire). Attention à l'orthographe : s-a-i-d.",
            },
            {
              id: "tps-e-15",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Ferris savait déjà ce que Cameron allait dire.",
              tiles: [
                "Ferris", "already", "knew", "what", "Cameron", "was", "going", "to", "say",
                "knows", "is", "will", "said", "that",
              ],
              correctAnswer: ["Ferris", "already", "knew", "what", "Cameron", "was", "going", "to", "say"],
              explanation:
                "« savait » → prétérit : *knew*. « allait dire » → **was going to + base** : *was going to say*. « ce que » = *what* (pas *that*).",
            },
            {
              id: "tps-e-16",
              type: "qcm-multiple",
              question: "Coche les 3 phrases correctes.",
              options: [
                "Ferris managed to hack the Dean's computer.",
                "Did he went to school?",
                "Mr Rooney called Ferris's mother yesterday.",
                "I will to call you tomorrow.",
                "If I had a day off, I would go to see my friends.",
                "Jeanie have to go to school.",
              ],
              correctAnswer: [
                "Ferris managed to hack the Dean's computer.",
                "Mr Rooney called Ferris's mother yesterday.",
                "If I had a day off, I would go to see my friends.",
              ],
              explanation:
                "Erreurs : *Did he **go**?* (base après did) ; *I will call* (pas de *to* après will) ; *Jeanie **has** to go* (3e personne → has).",
            },
            {
              id: "tps-e-17",
              type: "texte-a-trous-select",
              question: "Yesterday, Ferris ___ to school. Right now, he ___ lying in bed, and he ___ already ___ absent nine times!",
              options: ["didn't go", "didn't went", "is", "was", "has", "have", "been", "be"],
              correctAnswer: ["didn't go", "is", "has", "been"],
              explanation:
                "*Yesterday* → *didn't go* (base après didn't). *Right now* → *is lying*. *already* → bilan : *has been* (has + participe passé).",
            },
            {
              id: "tps-e-18",
              type: "tri-categories",
              question: "Range chaque phrase selon ce qu'elle exprime.",
              items: [
                { id: "a", label: "Jeanie goes to school every day." },
                { id: "b", label: "Ferris often lies to his parents." },
                { id: "c", label: "Cameron is lying in bed." },
                { id: "d", label: "Ferris is doing his best to convince him." },
                { id: "e", label: "Mr Rooney called Ferris's mother yesterday." },
                { id: "f", label: "Ferris hacked the computer last week." },
                { id: "g", label: "Ferris has already been absent nine times." },
                { id: "h", label: "Mr Rooney has never caught Ferris." },
              ],
              categories: [
                { id: "habitude", label: "🔁 Habitude", correctItemIds: ["a", "b"] },
                { id: "en-cours", label: "▶️ Action en cours", correctItemIds: ["c", "d"] },
                { id: "fini", label: "✅ Passé terminé", correctItemIds: ["e", "f"] },
                { id: "bilan", label: "📊 Bilan", correctItemIds: ["g", "h"] },
              ],
              explanation:
                "Présent simple = habitude ; be + V-ing = en cours ; prétérit = passé fini et daté ; present perfect (has + participe passé) = bilan.",
            },
            {
              id: "tps-e-19",
              type: "expression-libre",
              question:
                "Que ferais-tu si tu avais un jour de congé ? Réponds par une phrase complète en anglais avec **if** et **would**.",
              requiredWords: ["would", "if"],
              minWords: 8,
              modelAnswer: "If I had a day off, I would sleep late and go to the cinema with my friends.",
              explanation:
                "Structure : **If + prétérit** (*If I had a day off*), **would + base verbale** (*I would go…*). Jamais *would* juste après *if*.",
            },
            {
              id: "tps-e-20",
              type: "expression-libre",
              question:
                "Écris une phrase **négative au prétérit** sur ce que Ferris n'a pas fait hier. Utilise **yesterday** et **didn't**.",
              requiredWords: ["yesterday", "didn't|did not"],
              minWords: 6,
              modelAnswer: "Yesterday, Ferris didn't go to school because he pretended to be sick.",
              explanation:
                "*yesterday* → prétérit. Négation : **didn't + base verbale** (*didn't go*, pas *didn't went*). Dans une phrase affirmative : verbe en -ed ou irrégulier (*pretended*).",
            },
          ],
        },
      ],
    },
  },
];
