import type { Resource } from "@/types";

const CHAPTER = "Objectif contrôle — Ferris Bueller (test n°2)";
const DATE = "2026-11-14T16:00:00Z";

export const resources: Resource[] = [
  // ── Fiche ──────────────────────────────────────────────────────────────────
  {
    slug: "anglais-controle-ferris-fiche",
    title: "Objectif contrôle : Ferris Bueller",
    description:
      "La fiche à relire avant lundi : mon contrôle n°1 corrigé, les règles qui rapportent des points, le vocabulaire et les 2 derniers cours.",
    type: "fiche",
    level: "3e",
    subject: "anglais",
    chapter: CHAPTER,
    createdAt: DATE,
    updatedAt: DATE,
    tags: ["ferris bueller", "contrôle", "manage", "succeed", "want someone to", "although", "whereas", "fiche"],
    relatedResourceSlug: "anglais-controle-ferris-quiz",
    mdxPath: "3e/anglais/fiches/anglais-controle-ferris-fiche.mdx",
  },

  // ── Quiz ───────────────────────────────────────────────────────────────────
  {
    slug: "anglais-controle-ferris-quiz",
    title: "Contrôle blanc — Ferris Bueller",
    description:
      "Un contrôle blanc en 3 niveaux : vocabulaire, traductions avec un verbe imposé, règles de grammaire et phrases avec « want someone to ».",
    type: "quiz",
    level: "3e",
    subject: "anglais",
    chapter: CHAPTER,
    createdAt: DATE,
    updatedAt: DATE,
    tags: ["ferris bueller", "contrôle", "manage", "succeed", "want someone to", "although", "whereas", "quiz"],
    relatedResourceSlug: "anglais-controle-ferris-fiche",
    quizData: {
      title: "Contrôle blanc — Ferris Bueller",
      description: "Choisis ton niveau. Le niveau Expert ressemble au vrai contrôle !",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        // ════════════════════════════════════════════════════════════════════
        // 🟢 FACILE — recognition + re-checking the mistakes of test n°1
        // ════════════════════════════════════════════════════════════════════
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Je revois les erreurs du contrôle n°1 et je reconnais les bonnes formes.",
          questions: [
            {
              id: "cf-f1",
              type: "qcm-multiple",
              question: "Quels mots veulent dire « faire semblant » ? (3 réponses)",
              options: ["pretend", "act", "fake", "skip", "trick"],
              correctAnswer: ["pretend", "act", "fake"],
              explanation:
                "pretend = act = fake → faire semblant. Attention : *skip* = rater (un cours) et *trick* = une farce / duper.",
            },
            {
              id: "cf-f2",
              type: "association",
              question: "Associe chaque mot anglais à sa traduction.",
              pairs: [
                { left: "skip", right: "rater, manquer (un cours)" },
                { left: "gullible", right: "naïf, crédule" },
                { left: "fishy", right: "louche" },
                { left: "sibling", right: "un frère ou une sœur" },
                { left: "attend", right: "assister à" },
                { left: "behaviour", right: "le comportement" },
              ],
              explanation:
                "Ce sont des mots du contrôle n°1 et du cahier. *Behaviour* est indénombrable : jamais de *a* devant.",
            },
            {
              id: "cf-f3",
              type: "association",
              question: "Associe chaque mot anglais à sa traduction.",
              pairs: [
                { left: "shredded", right: "crevé, lessivé" },
                { left: "dead tired", right: "épuisé" },
                { left: "uptight", right: "tendu, coincé" },
                { left: "indeed", right: "en effet" },
                { left: "a liar", right: "un menteur" },
                { left: "a coffin", right: "un cercueil" },
              ],
              explanation:
                "Synonymes à connaître : shredded = devastated (crevé) ; dead tired = exhausted (épuisé).",
            },
            {
              id: "cf-f4",
              type: "texte-a-trous",
              question: "Rooney ne peut pas supporter ça. → Rooney can't put up ___ this.",
              options: ["with", "to", "at", "of"],
              correctAnswer: "with",
              explanation:
                "Le phrasal verb est un bloc : **put up with** = supporter, tolérer. Au contrôle n°1, le *with* manquait.",
            },
            {
              id: "cf-f5",
              type: "texte-a-trous",
              question: "Ferris a réussi à pirater l'ordinateur du doyen. → Ferris ___ to hack the Dean's computer.",
              options: ["managed", "manages", "succeeded", "manage"],
              correctAnswer: "managed",
              explanation:
                "« a réussi » = action terminée → prétérit **managed**. Et c'est *manage* qui va avec **to** (*succeed* va avec *in*).",
            },
            {
              id: "cf-f6",
              type: "texte-a-trous",
              question: "Il a réussi à pirater l'ordinateur de M. Rooney. → He succeeded ___ hacking Mr Rooney's computer.",
              options: ["in", "to", "at", "of"],
              correctAnswer: "in",
              hint: "succeed + préposition…",
              explanation:
                "**succeed IN + V-ING**. *in* est une préposition, donc le verbe qui suit prend -ING : *hacking*. Jamais « to + -ing ».",
            },
            {
              id: "cf-f7",
              type: "qcm",
              question: "Dans « He succeeded in hacking Mr Rooney's computer », pourquoi écrit-on « hacking » ?",
              options: [
                "Parce que « in » est une préposition : après une préposition, le verbe prend -ING.",
                "Parce que « hacking » est le participe passé de « hack ».",
                "Parce que « succeed » est toujours suivi de « to ».",
                "Parce que la phrase est au présent.",
              ],
              correctAnswer:
                "Parce que « in » est une préposition : après une préposition, le verbe prend -ING.",
              explanation:
                "When a verb follows a preposition, -ING is the only solution. Le participe passé de *hack*, c'est *hacked* — pas *hacking*.",
            },
            {
              id: "cf-f8",
              type: "vrai-faux",
              question: "Le participe passé de « hack » est « hacking ».",
              correctAnswer: "Faux",
              explanation:
                "Faux ! *hack* est régulier : prétérit et participe passé = **hacked**. *hacking* est la forme en -ING.",
            },
            {
              id: "cf-f9",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Ferris veut que Cameron vienne chez lui.",
              tiles: ["Ferris", "wants", "Cameron", "to", "come", "over", "that", "comes"],
              correctAnswer: ["Ferris", "wants", "Cameron", "to", "come", "over"],
              explanation:
                "« vouloir que » = **want + quelqu'un + TO + base verbale**. Jamais *want that*. *come over* = venir (chez quelqu'un).",
            },
            {
              id: "cf-f10",
              type: "texte-a-trous",
              question: "Jeanie veut que ses parents voient la vérité. → Jeanie wants ___ parents to see the truth.",
              options: ["her", "his", "its", "she"],
              correctAnswer: "her",
              explanation:
                "Le possessif s'accorde avec le **propriétaire** : les parents de Jeanie (une fille) → **her** parents.",
            },
            {
              id: "cf-f11",
              type: "qcm",
              question: "Comment traduire « un mauvais comportement » ?",
              options: ["bad behaviour", "a bad behaviour", "bad behaviours", "a bad behave"],
              correctAnswer: "bad behaviour",
              explanation:
                "*behaviour* est **indénombrable** : pas de *a*, pas de *-s*. Pareil pour *advice*, *information*, *homework*, *news*.",
            },
            {
              id: "cf-f12",
              type: "qcm",
              question: "Comment traduire « l'ordinateur du doyen » ?",
              options: ["the Dean's computer", "the computer of the Dean", "the Deans computer", "the Dean computer"],
              correctAnswer: "the Dean's computer",
              explanation:
                "Pour une personne, on utilise le **génitif** : propriétaire + **'s** + chose → *the Dean's computer*.",
            },
            {
              id: "cf-f13",
              type: "vrai-faux",
              question: "« although » veut dire « alors que ».",
              correctAnswer: "Faux",
              explanation:
                "Faux (c'était inversé dans le cahier) : **although = bien que, même si** ; **whereas = alors que, tandis que**.",
            },
            {
              id: "cf-f14",
              type: "association",
              question: "Associe chaque mot de liaison à sa traduction.",
              pairs: [
                { left: "although", right: "bien que, même si" },
                { left: "whereas", right: "alors que, tandis que" },
                { left: "actually", right: "en fait" },
                { left: "at the moment", right: "actuellement" },
                { left: "indeed", right: "en effet" },
                { left: "nevertheless", right: "pourtant, cependant" },
              ],
              explanation:
                "Piège : *actually* est un **faux ami**. Il veut dire « en fait ». « Actuellement » = *now* / *at the moment*.",
            },
            {
              id: "cf-f15",
              type: "qcm",
              question: "Comment écrire « Mme Bueller » ?",
              options: ["Mrs Bueller", "Mr Bueller", "MR Bueller", "Mister Bueller"],
              correctAnswer: "Mrs Bueller",
              explanation:
                "**Mr** = monsieur (Mister). **Mrs** = madame (femme mariée). **Ms** = madame sans préciser. Jamais « MR » en majuscules.",
            },
            {
              id: "cf-f16",
              type: "intrus",
              question: "Trouve l'intrus : quel mot ne se prononce PAS avec le son /əʊ/ (comme dans « hope ») ?",
              options: ["know", "slow", "so", "hot"],
              correctAnswer: "hot",
              explanation:
                "*know, no, so, slow, hope* → son /əʊ/. *hot, dog, god, hop* → son /ɒ/ (un « o » court).",
            },
            {
              id: "cf-f17",
              type: "qcm",
              question: "Comment traduire « Ferris est un menteur » ?",
              options: ["Ferris is a liar.", "Ferris is lying.", "Ferris is a lying.", "Ferris is liar."],
              correctAnswer: "Ferris is a liar.",
              explanation:
                "un menteur = **a liar** (nom, avec *a*). *Ferris is lying* = Ferris est en train de mentir (verbe *lie*).",
            },
            {
              id: "cf-f18",
              type: "correction-erreur",
              question:
                "Au contrôle n°1, j'ai traduit « Jeanie veut que ses parents réalisent que Ferris est un menteur » comme ça. Trouve les 3 erreurs et corrige-les.",
              taggedText: "Jeanie wants [his|her] parents [realise|to realise] that Ferris is [lying|a liar].",
              explanation:
                "✅ *Jeanie wants her parents to realise that Ferris is a liar.* Jeanie = une fille → **her** ; vouloir que → want + qqn + **TO** + BV ; un menteur = **a liar** (nom).",
            },
            {
              id: "cf-f19",
              type: "qcm",
              question: "Comment traduire « La vie devient de plus en plus chère » ?",
              options: [
                "Life is getting more and more expensive.",
                "Life is getting expensiver and expensiver.",
                "Life is getting more expensive and expensive.",
                "Life is getting the most expensive.",
              ],
              correctAnswer: "Life is getting more and more expensive.",
              explanation:
                "Adjectif long → **getting more and more + adjectif**. Adjectif court → -er and -er : *getting warmer and warmer*.",
            },
            {
              id: "cf-f20",
              type: "vrai-faux",
              question: "On peut écrire : « It looks like that he is in a coffin. »",
              correctAnswer: "Faux",
              explanation:
                "Pas de *that* après *looks like* : ✅ *It looks like he is in a coffin.* → On dirait qu'il est dans un cercueil.",
            },
          ],
        },

        // ════════════════════════════════════════════════════════════════════
        // 🟡 INTERMÉDIAIRE — mix: guided translations, corrections, sorting
        // ════════════════════════════════════════════════════════════════════
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Je traduis avec un indice, je corrige des phrases et je trie les règles.",
          questions: [
            {
              id: "cf-i1",
              type: "tri-categories",
              question: "Trie les verbes : sont-ils suivis de TO + base verbale ou d'une préposition + V-ING ?",
              items: [
                { id: "cf-i1-manage", label: "manage" },
                { id: "cf-i1-want", label: "want" },
                { id: "cf-i1-try", label: "try" },
                { id: "cf-i1-decide", label: "decide" },
                { id: "cf-i1-hope", label: "hope" },
                { id: "cf-i1-succeed", label: "succeed in" },
                { id: "cf-i1-dream", label: "dream about" },
                { id: "cf-i1-care", label: "care about" },
                { id: "cf-i1-good", label: "be good at" },
                { id: "cf-i1-instead", label: "instead of" },
              ],
              categories: [
                {
                  id: "cf-i1-to",
                  label: "TO + base verbale",
                  correctItemIds: ["cf-i1-manage", "cf-i1-want", "cf-i1-try", "cf-i1-decide", "cf-i1-hope"],
                },
                {
                  id: "cf-i1-ing",
                  label: "Préposition + V-ING",
                  correctItemIds: ["cf-i1-succeed", "cf-i1-dream", "cf-i1-care", "cf-i1-good", "cf-i1-instead"],
                },
              ],
              explanation:
                "manage / want / try / decide / hope + **TO + BV**. Après une **préposition** (in, about, at, of…), **-ING** est la seule solution.",
            },
            {
              id: "cf-i2",
              type: "traduction",
              question: "Traduis en anglais avec le verbe **manage**.",
              sourceText: "Ferris a réussi à tromper ses parents.",
              acceptedAnswers: [
                "Ferris managed to fool his parents.",
                "Ferris managed to trick his parents.",
                "Ferris managed to deceive his parents.",
              ],
              keyChunks: ["managed to", "fool|trick|deceive", "his parents"],
              hint: "« a réussi » = passé → manage + -ed, puis TO + base verbale.",
              explanation:
                "« a réussi » = prétérit **managed** + **TO** + BV. Les parents de Ferris (un garçon) → **his** parents. tromper, duper = *fool* / *trick*.",
            },
            {
              id: "cf-i3",
              type: "traduction",
              question: "Traduis en anglais avec le verbe **succeed**.",
              sourceText: "Cameron a réussi à sortir du lit.",
              acceptedAnswers: [
                "Cameron succeeded in getting out of bed.",
                "Cameron succeeded in getting out of his bed.",
              ],
              keyChunks: ["succeeded in", "getting out of"],
              hint: "succeed + IN → le verbe suivant prend -ING.",
              explanation:
                "Prétérit **succeeded** + préposition **in** + **V-ING** : *getting out of bed* (sortir du lit — on garde tout le bloc *get out of*).",
            },
            {
              id: "cf-i4",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Ferris veut que Cameron vienne chez lui.",
              acceptedAnswers: [
                "Ferris wants Cameron to come over.",
                "Ferris wants Cameron to come over to his house.",
                "Ferris wants Cameron to come to his house.",
                "Ferris wants Cameron to come over to his place.",
                "Ferris wants Cameron to come to his place.",
              ],
              keyChunks: ["wants Cameron to", "come"],
              hint: "vouloir que = want + quelqu'un + TO + base verbale.",
              explanation:
                "**want + quelqu'un + TO + BV** : *Ferris wants Cameron to come over.* N'oublie pas le **-s** de *wants* (Ferris = he).",
            },
            {
              id: "cf-i5",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Mme Bueller veut que son fils reste à la maison.",
              acceptedAnswers: [
                "Mrs Bueller wants her son to stay at home.",
                "Mrs Bueller wants her son to stay home.",
                "Mrs. Bueller wants her son to stay at home.",
                "Mrs. Bueller wants her son to stay home.",
              ],
              keyChunks: ["Mrs Bueller|Mrs. Bueller", "her son", "to stay"],
              hint: "Le fils de qui ? De Mme Bueller → his ou her ?",
              explanation:
                "**Mrs** = madame. Le fils appartient à Mme Bueller (une femme) → **her** son. Puis want + qqn + **TO** + BV.",
            },
            {
              id: "cf-i6",
              type: "correction-erreur",
              question: "« Ferris veut que Cameron vienne chez lui. » Trouve les 2 erreurs et corrige-les.",
              taggedText: "Ferris [want|wants] Cameron [come|to come] over.",
              explanation:
                "Ferris = he → **wants** (-s à la 3e personne). Puis want + qqn + **TO** + BV : *to come over*.",
            },
            {
              id: "cf-i7",
              type: "correction-erreur",
              question: "« Jeanie ne supporte plus le comportement de ses parents. » Trouve les 2 erreurs et corrige-les.",
              taggedText: "Jeanie can't put up with [his|her] [parents's|parents'] behaviour anymore.",
              explanation:
                "Les parents de Jeanie (une fille) → **her**. *parents* finit déjà par -s → on ajoute **juste l'apostrophe** : *her parents' behaviour*.",
            },
            {
              id: "cf-i8",
              type: "correction-erreur",
              question: "« Ferris a réussi à pirater l'ordinateur de M. Rooney la semaine dernière. » Trouve les 2 erreurs et corrige-les.",
              taggedText: "Ferris [succeed|succeeded] [to|in] hacking Mr Rooney's computer last week.",
              explanation:
                "C'est passé (*last week*) → **succeeded**. Et *succeed* va avec la préposition **in** + V-ING. « Si tu mets TO, il n'y a aucune raison de mettre ING. »",
            },
            {
              id: "cf-i9",
              type: "construire-phrase",
              question: "Construis la phrase en anglais. Attention aux pièges !",
              sourceText: "Jeanie veut que ses parents ouvrent les yeux.",
              tiles: ["Jeanie", "wants", "her", "parents", "to", "open", "their", "eyes", "his", "that", "opening", "in"],
              correctAnswer: ["Jeanie", "wants", "her", "parents", "to", "open", "their", "eyes"],
              explanation:
                "want + qqn + **TO** + BV. Les parents de Jeanie → **her** parents. Les yeux des parents → **their** eyes (à eux).",
            },
            {
              id: "cf-i10",
              type: "construire-phrase",
              question: "Construis la phrase avec le verbe **succeed**.",
              sourceText: "Rooney a réussi à appeler la mère de Ferris.",
              tiles: ["Rooney", "succeeded", "in", "calling", "Ferris's", "mother", "to", "call", "the", "of", "Ferris", "succeeds"],
              correctAnswer: ["Rooney", "succeeded", "in", "calling", "Ferris's", "mother"],
              explanation:
                "Passé → **succeeded** + **in** + **V-ING** (*calling*). La mère de Ferris → génitif **Ferris's mother** (pas *the mother of Ferris*).",
            },
            {
              id: "cf-i11",
              type: "texte-a-trous-select",
              question: "My sister doesn't like hot weather ___ I love it. She went out ___ it was raining.",
              options: ["whereas", "although", "because", "so"],
              correctAnswer: ["whereas", "although"],
              explanation:
                "1) On compare 2 personnes → **whereas** (alors que). 2) Elle sort **même si** il pleut → **although** (bien que, même si).",
            },
            {
              id: "cf-i12",
              type: "qcm",
              question: "Comment traduire « Actuellement, Cameron est malade » ?",
              options: [
                "At the moment, Cameron is sick.",
                "Actually, Cameron is sick.",
                "Actual, Cameron is sick.",
                "Indeed, Cameron is sick.",
              ],
              correctAnswer: "At the moment, Cameron is sick.",
              explanation:
                "Faux ami ! *actually* = **en fait**. « Actuellement » = ***now*** ou ***at the moment***. *indeed* = en effet.",
            },
            {
              id: "cf-i13",
              type: "texte-a-trous-select",
              question: "La vie devient de plus en plus chère. → Life is getting ___ and ___ ___.",
              options: ["more", "more", "expensive", "expensiver", "most"],
              correctAnswer: ["more", "more", "expensive"],
              explanation:
                "*expensive* est un adjectif long → **more and more expensive**. Adjectif court : *warmer and warmer*.",
            },
            {
              id: "cf-i14",
              type: "texte-a-trous",
              question: "Ferris espère que Cameron va venir. → Ferris ___ that Cameron will come over.",
              options: ["hopes", "hops", "hope", "hoping"],
              correctAnswer: "hopes",
              explanation:
                "*hope* /əʊ/ = **espérer** ; *hop* /ɒ/ = sauter. Ferris = he → **-s** : *hopes*.",
            },
            {
              id: "cf-i15",
              type: "completion-tableau",
              question: "Complète le tableau en anglais (la 1re lettre est donnée).",
              table: {
                headers: ["Français", "Anglais"],
                rows: [
                  [{ value: "pirater (h…)" }, { blank: true, correctAnswer: "hack" }],
                  [{ value: "assister à (a…)" }, { blank: true, correctAnswer: "attend" }],
                  [{ value: "un cercueil (c…)" }, { blank: true, correctAnswer: "coffin" }],
                  [{ value: "un frère ou une sœur (s…)" }, { blank: true, correctAnswer: "sibling" }],
                  [{ value: "tendu, coincé (u…)" }, { blank: true, correctAnswer: "uptight" }],
                  [{ value: "en effet (i…)" }, { blank: true, correctAnswer: "indeed" }],
                ],
              },
              explanation:
                "hack = pirater · attend = assister à · coffin = cercueil · sibling = frère/sœur · uptight = tendu · indeed = en effet.",
            },
            {
              id: "cf-i16",
              type: "etude-texte",
              question: "Lis le texte puis réponds aux questions.",
              passage:
                "Jeanie has to go to school, whereas Ferris can stay at home. Although Ferris isn't really sick, their parents believe him. Jeanie thinks it is unfair. She can't put up with her brother's behaviour anymore!",
              subQuestions: [
                {
                  question: "Dans la 1re phrase, « whereas » veut dire…",
                  options: ["alors que", "bien que", "parce que", "donc"],
                  correctAnswer: "alors que",
                  explanation: "On compare Jeanie et Ferris : whereas = alors que, tandis que.",
                },
                {
                  question: "Dans la 2e phrase, « Although » veut dire…",
                  options: ["bien que", "alors que", "ensuite", "en effet"],
                  correctAnswer: "bien que",
                  explanation: "Bien que Ferris ne soit pas vraiment malade, ses parents le croient.",
                },
                {
                  question: "« put up with » veut dire…",
                  options: ["supporter", "se lever", "appeler", "passer chercher"],
                  correctAnswer: "supporter",
                },
                {
                  question: "Pourquoi « her brother's behaviour » ?",
                  options: [
                    "her = à Jeanie, et 's = le comportement du frère",
                    "her = à Ferris, et 's = is",
                    "her = à la mère, et 's = un pluriel",
                  ],
                  correctAnswer: "her = à Jeanie, et 's = le comportement du frère",
                  explanation: "Le frère de Jeanie → her brother ; le comportement du frère → her brother's behaviour.",
                },
              ],
              explanation:
                "Traduction : Jeanie doit aller à l'école alors que Ferris peut rester à la maison. Bien que Ferris ne soit pas vraiment malade, leurs parents le croient. Jeanie trouve ça injuste. Elle ne supporte plus le comportement de son frère !",
            },
            {
              id: "cf-i17",
              type: "qcm",
              question: "Comment traduire « Ferris savait déjà ce que Cameron allait dire » ?",
              options: [
                "Ferris already knew what Cameron was going to say.",
                "Ferris already knows what Cameron is going to say.",
                "Ferris already knew what Cameron is going to say.",
                "Ferris already knew that Cameron going to say.",
              ],
              correctAnswer: "Ferris already knew what Cameron was going to say.",
              explanation:
                "Tout est au passé : *knew* (prétérit de *know*) et *was going to say* (« allait dire »). *already* = déjà.",
            },
            {
              id: "cf-i18",
              type: "qcm-multiple",
              question: "Quelles expressions veulent dire « se détendre, se calmer » ? (4 réponses)",
              options: ["relax", "calm down", "take it easy", "blow off some steam", "pick up", "put up with"],
              correctAnswer: ["relax", "calm down", "take it easy", "blow off some steam"],
              explanation:
                "Cameron est *uptight* (tendu) : il doit *relax / calm down / take it easy / blow off some steam* (se défouler). *pick up* = passer chercher ; *put up with* = supporter.",
            },
            {
              id: "cf-i19",
              type: "texte-a-trous",
              question: "C'est Cameron qui a vraiment besoin d'un jour de congé. → Cameron is the one ___ really needs a day off.",
              options: ["who", "whose", "what", "where"],
              correctAnswer: "who",
              explanation:
                "**the one who** = celui qui (pour une personne). Au pluriel : *the ones who* = ceux qui.",
            },
            {
              id: "cf-i20",
              type: "intrus",
              question: "Trouve l'intrus : quel nom est dénombrable (on peut dire « a … ») ?",
              options: ["behaviour", "advice", "homework", "computer"],
              correctAnswer: "computer",
              explanation:
                "*a computer* ✅. Mais *behaviour*, *advice*, *homework* sont **indénombrables** : jamais de *a*, jamais de *-s*.",
            },
          ],
        },

        // ════════════════════════════════════════════════════════════════════
        // 🔴 EXPERT — like the real test: production, no hints
        // ════════════════════════════════════════════════════════════════════
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Comme le vrai contrôle : je traduis et j'écris sans aide.",
          questions: [
            {
              id: "cf-e1",
              type: "completion-tableau",
              question: "Vocabulaire : traduis en anglais (la 1re lettre est donnée).",
              table: {
                headers: ["Français", "Anglais"],
                rows: [
                  [{ value: "faire semblant (p…)" }, { blank: true, correctAnswer: "pretend" }],
                  [{ value: "épuisé (d… t…)" }, { blank: true, correctAnswer: "dead tired" }],
                  [{ value: "crevé (s…)" }, { blank: true, correctAnswer: "shredded" }],
                  [{ value: "supporter, tolérer (p… u… w…)" }, { blank: true, correctAnswer: "put up with" }],
                  [{ value: "louche (f…)" }, { blank: true, correctAnswer: "fishy" }],
                  [{ value: "naïf, crédule (g…)" }, { blank: true, correctAnswer: "gullible" }],
                ],
              },
              explanation:
                "Synonymes à connaître aussi : pretend = act = fake ; dead tired = exhausted ; shredded = devastated.",
            },
            {
              id: "cf-e2",
              type: "traduction",
              question: "Traduis en anglais avec **put up with**.",
              sourceText: "Jeanie ne peut plus supporter le comportement de son frère.",
              acceptedAnswers: [
                "Jeanie can't put up with her brother's behaviour anymore.",
                "Jeanie can't put up with her brother's behaviour any more.",
                "Jeanie can no longer put up with her brother's behaviour.",
              ],
              keyChunks: ["put up with", "her brother's", "behaviour"],
              explanation:
                "*put up **with*** = supporter (bloc complet). Le frère de Jeanie → **her** brother ; le comportement du frère → génitif **her brother's behaviour**. ne… plus = *not… anymore*.",
            },
            {
              id: "cf-e3",
              type: "traduction",
              question: "Traduis en anglais avec le verbe **manage**.",
              sourceText: "Ferris a réussi à convaincre son ami.",
              acceptedAnswers: ["Ferris managed to convince his friend."],
              keyChunks: ["managed to", "convince", "his friend"],
              explanation:
                "« a réussi » = prétérit **managed** + **TO** + BV (*convince*). L'ami de Ferris → **his** friend.",
            },
            {
              id: "cf-e4",
              type: "traduction",
              question: "Traduis en anglais avec le verbe **succeed**.",
              sourceText: "Jeanie a réussi à appeler le proviseur.",
              acceptedAnswers: [
                "Jeanie succeeded in calling the head.",
                "Jeanie succeeded in calling the principal.",
                "Jeanie succeeded in calling the dean.",
                "Jeanie succeeded in calling the headteacher.",
                "Jeanie succeeded in calling the head teacher.",
                "Jeanie succeeded in phoning the head.",
                "Jeanie succeeded in phoning the principal.",
                "Jeanie succeeded in phoning the dean.",
                "Jeanie succeeded in phoning the headteacher.",
                "Jeanie succeeded in phoning the head teacher.",
              ],
              keyChunks: [
                "succeeded in",
                "calling|phoning",
                "the head|the principal|the dean|the headteacher|the head teacher",
              ],
              explanation:
                "Prétérit **succeeded** + préposition **in** + **V-ING** (*calling*). Après une préposition, -ING est la seule solution.",
            },
            {
              id: "cf-e5",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Mme Bueller veut que Jeanie aille à l'école.",
              acceptedAnswers: [
                "Mrs Bueller wants Jeanie to go to school.",
                "Mrs. Bueller wants Jeanie to go to school.",
              ],
              keyChunks: ["Mrs Bueller|Mrs. Bueller", "wants Jeanie to go"],
              explanation:
                "**Mrs** = madame. « vouloir que » = **want + quelqu'un + TO + BV** → *wants Jeanie to go*. Pas de *that*, pas de *goes*.",
            },
            {
              id: "cf-e6",
              type: "traduction",
              question: "Traduis en anglais avec **would like** et l'expression idiomatique du cours.",
              sourceText: "Rooney voudrait que les parents de Ferris regardent la réalité en face.",
              acceptedAnswers: [
                "Rooney would like Ferris's parents to face the truth.",
                "Rooney would like Ferris's parents to face the facts.",
                "Rooney would like Ferris' parents to face the truth.",
                "Rooney would like Ferris' parents to face the facts.",
              ],
              keyChunks: ["would like", "Ferris's parents|Ferris' parents", "to face the truth|to face the facts"],
              explanation:
                "**would like + qqn + TO + BV**, comme *want*. Les parents de Ferris → **Ferris's parents**. regarder la réalité en face = *face the truth* / *face the facts*.",
            },
            {
              id: "cf-e7",
              type: "texte-a-trous-select",
              question: "Cameron is really ___ (tendu). Ferris wants ___ to ___ off some steam.",
              options: ["uptight", "him", "blow", "tight", "he", "blowing"],
              correctAnswer: ["uptight", "him", "blow"],
              explanation:
                "*uptight* = tendu, coincé (*tight* = serré). want + **pronom complément** (*him*, pas *he*) + **TO + BV** (*blow*). *blow off some steam* = se défouler.",
            },
            {
              id: "cf-e8",
              type: "correction-erreur",
              question: "« L'an dernier, Cameron a réussi à convaincre son père. » Trouve les 3 erreurs et corrige-les.",
              taggedText: "Last year, Cameron [succeed|succeeded] [to|in] [convince|convincing] his father.",
              explanation:
                "C'est passé → **succeeded**. succeed + **in** + **V-ING** → *in convincing*. (Avec *manage* : *managed to convince*.)",
            },
            {
              id: "cf-e9",
              type: "correction-erreur",
              question: "« Ferris appelle Cameron parce qu'il veut qu'il vienne chez lui. » Trouve les 3 erreurs et corrige-les.",
              taggedText: "Ferris [give|gives] Cameron a call because he wants [he|him] [come|to come] over.",
              explanation:
                "Ferris = he → **gives** (-s). want + **pronom complément** (*him*) + **TO** + BV → *wants him to come over*.",
            },
            {
              id: "cf-e10",
              type: "correction-erreur",
              question: "« Jeanie est frustrée par le comportement de ses parents. » Trouve les 3 erreurs et corrige-les.",
              taggedText: "Jeanie is frustrated at [his|her] [parents's|parents'] [behaviours|behaviour].",
              explanation:
                "Jeanie → **her**. *parents* finit par -s → **parents'**. *behaviour* est indénombrable → pas de -s.",
            },
            {
              id: "cf-e11",
              type: "construire-phrase",
              question: "Construis la phrase en anglais. Beaucoup de pièges !",
              sourceText: "Rooney veut que Mme Bueller ouvre les yeux.",
              tiles: ["Rooney", "wants", "Mrs", "Bueller", "to", "open", "her", "eyes", "Mr", "that", "opens", "his", "she", "in"],
              correctAnswer: ["Rooney", "wants", "Mrs", "Bueller", "to", "open", "her", "eyes"],
              explanation:
                "**Mrs** (une femme). want + qqn + **TO** + BV (*open*, sans -s). Les yeux de Mme Bueller → **her** eyes.",
            },
            {
              id: "cf-e12",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Ferris appelle Cameron, bien qu'il soit malade.",
              tiles: ["Ferris", "calls", "Cameron", "although", "he", "is", "sick", "whereas", "him", "call", "that"],
              correctAnswer: ["Ferris", "calls", "Cameron", "although", "he", "is", "sick"],
              explanation:
                "bien que = **although** (*whereas* = alors que). « il » est sujet → **he** (pas *him*). Ferris = he → **calls** (-s).",
            },
            {
              id: "cf-e13",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "On dirait qu'il est dans un cercueil.",
              tiles: ["It", "looks", "like", "he", "is", "in", "a", "coffin", "that", "him", "look", "the"],
              correctAnswer: ["It", "looks", "like", "he", "is", "in", "a", "coffin"],
              explanation:
                "On dirait que = **It looks like** + phrase, **sans *that***. *a coffin* = un cercueil.",
            },
            {
              id: "cf-e14",
              type: "qcm",
              question: "Contrôle A.2 : « Quelle différence entre manage et succeed ? Expliquez la règle. » Quelle réponse obtient tous les points ?",
              options: [
                "Manage est suivi de TO + base verbale, alors que succeed est suivi de la préposition IN : le verbe qui suit prend donc -ING.",
                "Manage est suivi de TO + V-ING, alors que succeed est suivi de IN + base verbale.",
                "Avec succeed, on met le verbe au participe passé en -ING.",
                "Manage et succeed sont suivis de TO, mais avec succeed on ajoute -ING.",
              ],
              correctAnswer:
                "Manage est suivi de TO + base verbale, alors que succeed est suivi de la préposition IN : le verbe qui suit prend donc -ING.",
              explanation:
                "À savoir par cœur ! When a verb follows a preposition, -ING is the only solution. Et -ING n'est jamais un participe passé (*hacked* = participe passé).",
            },
            {
              id: "cf-e15",
              type: "qcm-multiple",
              question: "Coche les phrases correctes. (2 réponses)",
              options: [
                "Ferris managed to hack the Dean's computer.",
                "Ferris succeeded to hack the Dean's computer.",
                "Ferris succeeded in hacking the Dean's computer.",
                "Ferris managed hacking the Dean's computer.",
                "Ferris succeeded in hack the computer of the Dean.",
              ],
              correctAnswer: [
                "Ferris managed to hack the Dean's computer.",
                "Ferris succeeded in hacking the Dean's computer.",
              ],
              explanation:
                "**managed to + BV** ou **succeeded in + V-ING**, avec le génitif *the Dean's computer*. Toutes les autres mélangent les deux règles.",
            },
            {
              id: "cf-e16",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Il fait de plus en plus froid.",
              acceptedAnswers: ["It's getting colder and colder.", "It is getting colder and colder."],
              keyChunks: ["getting", "colder and colder"],
              explanation:
                "de plus en plus + adjectif court → **getting + -er and -er** : *colder and colder*. (Adjectif long : *more and more expensive*.)",
            },
            {
              id: "cf-e17",
              type: "etude-texte",
              question: "Lis le texte puis réponds aux questions.",
              passage:
                "Ferris gives Cameron a call. Cameron is lying in bed and says he feels shredded. Actually, he isn't really sick: he is just very uptight. Ferris is doing his best to convince him to come over. In Ferris's opinion, Cameron is the one who really needs a day off.",
              subQuestions: [
                {
                  question: "« Cameron is lying in bed » veut dire…",
                  options: ["Cameron est allongé dans son lit.", "Cameron ment dans son lit.", "Cameron sort de son lit."],
                  correctAnswer: "Cameron est allongé dans son lit.",
                  explanation: "Ici, lie = être allongé. (L'autre sens de lie = mentir.)",
                },
                {
                  question: "Dans le texte, « Actually » veut dire…",
                  options: ["En fait", "Actuellement", "En effet"],
                  correctAnswer: "En fait",
                  explanation: "Faux ami : actually = en fait. Actuellement = now / at the moment.",
                },
                {
                  question: "« uptight » veut dire…",
                  options: ["tendu, coincé", "malade", "en colère"],
                  correctAnswer: "tendu, coincé",
                },
                {
                  question: "« He is doing his best to convince him » veut dire…",
                  options: [
                    "Il fait de son mieux pour le convaincre.",
                    "Il fait son lit pour le convaincre.",
                    "Il est le meilleur pour le convaincre.",
                  ],
                  correctAnswer: "Il fait de son mieux pour le convaincre.",
                  explanation: "do one's best = faire de son mieux (best, pas bed !).",
                },
                {
                  question: "« Cameron is the one who really needs a day off » veut dire…",
                  options: [
                    "C'est Cameron qui a vraiment besoin d'un jour de congé.",
                    "Cameron a un seul jour de congé.",
                    "Cameron est le seul à aller à l'école.",
                  ],
                  correctAnswer: "C'est Cameron qui a vraiment besoin d'un jour de congé.",
                },
              ],
              explanation:
                "C'est le cours du 13 novembre ! Ferris appelle Cameron. Cameron est au lit et dit qu'il se sent crevé. En fait, il n'est pas vraiment malade : il est juste très tendu. Ferris fait de son mieux pour le convaincre de venir.",
            },
            {
              id: "cf-e18",
              type: "expression-libre",
              question: "Écris une phrase sur Cameron avec **although** (bien que, même si).",
              requiredWords: ["although", "Cameron"],
              minWords: 8,
              modelAnswer: "Cameron says he is dying although he is not really sick.",
              explanation:
                "although = bien que, même si : la 2e partie est **surprenante** par rapport à la 1re. Ex. : Cameron dit qu'il est mourant, même s'il n'est pas vraiment malade.",
            },
            {
              id: "cf-e19",
              type: "expression-libre",
              question: "Explique ce que Ferris veut que Cameron fasse. Utilise **wants him to**.",
              requiredWords: ["Ferris", "wants", "him", "to"],
              minWords: 7,
              modelAnswer: "Ferris wants him to get out of bed and come over.",
              explanation:
                "want + **him** (pronom complément) + **TO** + base verbale. Ex. : Ferris veut qu'il sorte du lit et qu'il vienne chez lui.",
            },
            {
              id: "cf-e20",
              type: "expression-libre",
              question: "Compare Jeanie et Ferris dans une phrase avec **whereas** (alors que, tandis que).",
              requiredWords: ["whereas", "Jeanie", "Ferris"],
              minWords: 8,
              modelAnswer: "Jeanie has to go to school whereas Ferris can stay at home.",
              explanation:
                "whereas = alors que : on **oppose deux personnes**. Ex. : Jeanie doit aller à l'école alors que Ferris peut rester à la maison.",
            },
          ],
        },
      ],
    },
  },
];
