import type { Resource } from "@/types";

const CHAPTER = "Grammaire — Construire sa phrase : to, -ing, want sb to, génitif";
const CREATED = "2026-11-14T15:00:00Z";
const UPDATED = "2026-11-14T17:00:00Z";

/**
 * Expands "{a|b}" alternatives into every combination.
 * The first combination (first alternative everywhere) comes first = model answer.
 */
function expand(template: string): string[] {
  const match = template.match(/\{([^}]*)\}/);
  if (!match || match.index === undefined) return [template];
  const before = template.slice(0, match.index);
  const after = template.slice(match.index + match[0].length);
  return match[1].split("|").flatMap((alt) => expand(before + alt + after));
}

export const resources: Resource[] = [
  // ── Fiche ──────────────────────────────────────────────────────────────────
  {
    slug: "anglais-construire-phrase-fiche",
    title: "Construire sa phrase en anglais",
    description:
      "TO + verbe ou préposition + -ING, « vouloir que » (want someone to), his / her et le génitif 's. En bref : le but et les phrasal verbs.",
    type: "fiche",
    level: "3e",
    subject: "anglais",
    chapter: CHAPTER,
    createdAt: CREATED,
    updatedAt: UPDATED,
    tags: ["grammaire", "manage to", "succeed in", "-ing", "want someone to", "génitif", "possessifs", "fiche"],
    relatedResourceSlug: "anglais-construire-phrase-quiz",
    mdxPath: "3e/anglais/fiches/anglais-construire-phrase-fiche.mdx",
  },

  // ── Quiz ───────────────────────────────────────────────────────────────────
  {
    slug: "anglais-construire-phrase-quiz",
    title: "Quiz — Construire sa phrase en anglais",
    description:
      "To ou -ing ? want him to, his ou her, the Dean's computer… Reconnais les bonnes structures, puis construis et traduis tes propres phrases.",
    type: "quiz",
    level: "3e",
    subject: "anglais",
    chapter: CHAPTER,
    createdAt: CREATED,
    updatedAt: UPDATED,
    tags: ["grammaire", "manage to", "succeed in", "-ing", "want someone to", "génitif", "possessifs", "quiz"],
    relatedResourceSlug: "anglais-construire-phrase-fiche",
    quizData: {
      title: "Construire sa phrase en anglais",
      description: "Choisis ton niveau. En Expert, tu écris toi-même les phrases !",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        // ════════════════════════════════════════════════════════════════════
        // 🟢 FACILE — reconnaître la bonne structure
        // ════════════════════════════════════════════════════════════════════
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Je reconnais la bonne structure : to ou -ing, him ou he, his ou her, le génitif.",
          questions: [
            {
              id: "cp-f1",
              type: "qcm",
              question: "Choisis la bonne forme : « Ferris managed ___ the Dean's computer. »",
              options: ["to hack", "to hacking", "in hacking", "hacked"],
              correctAnswer: "to hack",
              hint: "Après TO, le verbe reste « tout nu ».",
              explanation:
                "MANAGE est suivi de TO + base verbale : managed to hack. Jamais « to + -ing » !",
            },
            {
              id: "cp-f2",
              type: "texte-a-trous",
              question: "Complète : « He succeeded ___ Mr Rooney's computer. »",
              options: ["in hacking", "to hack", "to hacking", "in hack"],
              correctAnswer: "in hacking",
              hint: "succeed est suivi d'une préposition…",
              explanation:
                "SUCCEED est suivi de la préposition IN. Et « when a verb follows a preposition, -ING is the only solution » : succeeded in hacking.",
            },
            {
              id: "cp-f3",
              type: "tri-categories",
              question: "Range chaque verbe dans sa famille : qu'est-ce qui le suit ?",
              items: [
                { id: "cp-f3-1", label: "manage" },
                { id: "cp-f3-6", label: "succeed" },
                { id: "cp-f3-2", label: "want" },
                { id: "cp-f3-7", label: "dream" },
                { id: "cp-f3-3", label: "decide" },
                { id: "cp-f3-8", label: "care" },
                { id: "cp-f3-4", label: "hope" },
                { id: "cp-f3-5", label: "need" },
                { id: "cp-f3-10", label: "try" },
              ],
              categories: [
                {
                  id: "to",
                  label: "… TO + base verbale",
                  correctItemIds: ["cp-f3-1", "cp-f3-2", "cp-f3-3", "cp-f3-4", "cp-f3-5", "cp-f3-10"],
                },
                {
                  id: "ing",
                  label: "… préposition + V-ING",
                  correctItemIds: ["cp-f3-6", "cp-f3-7", "cp-f3-8"],
                },
              ],
              explanation:
                "manage to, want to, decide to, hope to, need to, try to + base verbale. Mais succeed IN, dream ABOUT, care ABOUT + verbe en -ING (après une préposition, -ING est la seule solution).",
            },
            {
              id: "cp-f4",
              type: "vrai-faux",
              question: "Vrai ou faux ? La phrase « He succeeds to hacking the computer. » est correcte.",
              correctAnswer: "Faux",
              explanation:
                "Jamais TO + -ING ! TO appelle la base verbale, IN appelle -ING. Correct : He succeeded in hacking the computer (ou He managed to hack the computer).",
            },
            {
              id: "cp-f5",
              type: "qcm",
              question: "Pourquoi écrit-on « succeeded in hacking » et pas « succeeded in hack » ?",
              options: [
                "Parce qu'après une préposition (in), -ING est la seule solution.",
                "Parce que hacking est le participe passé de hack.",
                "Parce que l'action se passe dans le passé.",
                "Parce que succeed est un verbe irrégulier.",
              ],
              correctAnswer: "Parce qu'après une préposition (in), -ING est la seule solution.",
              explanation:
                "When a verb follows a preposition, -ING is the only solution. Attention : hacking n'est PAS un participe passé (le participe passé de hack, c'est hacked).",
            },
            {
              id: "cp-f6",
              type: "association",
              question: "Associe chaque expression française à sa traduction (avec le bon petit mot).",
              pairs: [
                { left: "réussir à", right: "manage to" },
                { left: "rêver de", right: "dream about" },
                { left: "se soucier de", right: "care about" },
                { left: "échouer à", right: "fail at" },
                { left: "essayer de", right: "try to" },
                { left: "sans", right: "without" },
              ],
              explanation:
                "Apprends le verbe AVEC son petit mot. Après to : base verbale (manage to hack, try to hack). Après une préposition (about, at, without…) : -ING (dream about having, fail at convincing, without saying).",
            },
            {
              id: "cp-f7",
              type: "texte-a-trous",
              question: "Complète : « Jeanie wants her parents ___ that Ferris is a liar. »",
              options: ["to realise", "realise", "realising", "that realise"],
              correctAnswer: "to realise",
              explanation:
                "« Vouloir que quelqu'un fasse » = WANT + quelqu'un + TO + base verbale. Pas de that, et n'oublie jamais TO.",
            },
            {
              id: "cp-f8",
              type: "texte-a-trous",
              question: "Complète (on parle de Cameron) : « Ferris wants ___ to come over. »",
              options: ["him", "he", "his", "her"],
              correctAnswer: "him",
              explanation:
                "Après want : him / her / them, jamais he / she / they. Cameron est un garçon → wants him to come over (veut qu'il vienne).",
            },
            {
              id: "cp-f9",
              type: "qcm-multiple",
              question: "Chaque personne parle de sa propre famille. Coche les 2 phrases correctes.",
              options: [
                "Jeanie is jealous of her brother.",
                "Jeanie is jealous of his brother.",
                "Ferris tricks his parents.",
                "Ferris tricks her parents.",
              ],
              correctAnswer: ["Jeanie is jealous of her brother.", "Ferris tricks his parents."],
              explanation:
                "Le possessif dépend du POSSESSEUR, pas de la chose : Jeanie (une fille) → her brother ; Ferris (un garçon) → his parents.",
            },
            {
              id: "cp-f10",
              type: "qcm",
              question: "Comment dit-on « l'ordinateur du doyen » ?",
              options: ["the Dean's computer", "the computer of the Dean", "the Dean computer", "the computer's Dean"],
              correctAnswer: "the Dean's computer",
              explanation:
                "Génitif : un possesseur → POSSESSEUR + 's + CHOSE → the Dean's computer. Jamais « the computer of the Dean » pour une personne.",
            },
            {
              id: "cp-f11",
              type: "vrai-faux",
              question:
                "Vrai ou faux ? Dans « her parents' behaviour », on met seulement une apostrophe après le s parce que parents est un pluriel en -s.",
              correctAnswer: "Vrai",
              explanation:
                "Plusieurs possesseurs (pluriel en -s) → ' seul : her parents' behaviour (le comportement de ses parents). Un seul possesseur → 's, même si le mot finit par s (Ferris's school).",
            },
            {
              id: "cp-f12",
              type: "texte-a-trous",
              question: "Complète : « Ferris lies ___ he can skip class. »",
              options: ["so that", "in order", "for", "to"],
              correctAnswer: "so that",
              explanation:
                "« pour pouvoir » = SO THAT + sujet + can / could + verbe : so that he can skip class. (In order) to, lui, est suivi directement du verbe, sans sujet.",
            },
            {
              id: "cp-f13",
              type: "intrus",
              question: "Trouve l'intrus : quel verbe se construit avec TO + base verbale (et pas avec une préposition + -ING) ?",
              options: ["succeed in", "dream about", "care about", "manage"],
              correctAnswer: "manage",
              explanation:
                "manage TO + base verbale (managed to hack). Les autres sont suivis d'une préposition, donc -ING : succeed in hacking, dream about having, care about being.",
            },
            {
              id: "cp-f14",
              type: "vrai-faux",
              question: "Vrai ou faux ? Pour dire « Il n'y a pas de lumière », on écrit « There is not light. »",
              correctAnswer: "Faux",
              explanation:
                "« pas de + nom » = NO + nom : There is no light (ou There isn't any light).",
            },
            {
              id: "cp-f15",
              type: "qcm",
              question: "Comment dit-on « Rooney ne peut pas supporter ça » ?",
              options: [
                "Rooney can't put up with this.",
                "Rooney can't put up this.",
                "Rooney can't put with this.",
                "Rooney can't put this up with.",
              ],
              correctAnswer: "Rooney can't put up with this.",
              explanation:
                "put up with = supporter, tolérer. Un phrasal verb s'apprend en BLOC : si tu oublies with, la phrase est fausse.",
            },
            {
              id: "cp-f16",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Ferris a réussi à pirater l'ordinateur du doyen.",
              tiles: ["Ferris", "managed", "to", "hack", "the", "Dean's", "computer", "hacking", "of"],
              correctAnswer: ["Ferris", "managed", "to", "hack", "the", "Dean's", "computer"],
              explanation:
                "« a réussi » → prétérit : managed. MANAGE + TO + base verbale : to hack. Génitif : the Dean's computer (pas « the computer of the Dean »).",
            },
            {
              id: "cp-f17",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Ferris veut que Cameron vienne chez lui.",
              tiles: ["Ferris", "wants", "Cameron", "to", "come", "over", "that", "comes"],
              correctAnswer: ["Ferris", "wants", "Cameron", "to", "come", "over"],
              explanation:
                "WANT + quelqu'un + TO + base verbale. Pas de that ! Après to, pas de -s : to come. Come over = venir (chez quelqu'un).",
            },
            {
              id: "cp-f18",
              type: "qcm",
              question: "Comment dit-on « l'école de Ferris » ?",
              options: ["Ferris's school", "the school of Ferris", "Ferris school", "Ferris' s school"],
              correctAnswer: "Ferris's school",
              explanation:
                "Un seul possesseur → 's, même si le mot finit déjà par s : Ferris's school. Jamais « the school of Ferris » pour une personne.",
            },
            {
              id: "cp-f19",
              type: "qcm",
              question: "Comment dit-on « C'est Cameron qui a vraiment besoin d'un jour de repos » ?",
              options: [
                "Cameron is the one who really needs a day off.",
                "Cameron is the one which really needs a day off.",
                "Cameron is the ones who really need a day off.",
                "Cameron is the one who really need a day off.",
              ],
              correctAnswer: "Cameron is the one who really needs a day off.",
              explanation:
                "« C'est X qui… » = X is the one who… Pour une personne : who (pas which). Le verbe s'accorde avec the one (singulier) : needs.",
            },
            {
              id: "cp-f20",
              type: "surlignage",
              question: "Surligne les 3 verbes en -ING qui suivent une PRÉPOSITION. Attention au piège !",
              taggedText:
                "Ferris is lying in bed. He dreams about [having] a day off. He is good at [pretending] and he {doesn't} care about [going] to school.",
              hint: "Regarde le petit mot juste AVANT chaque verbe en -ing.",
              explanation:
                "about having, at pretending, about going : préposition + -ING. Le piège : is lying = be + -ing (il est allongé), il n'y a pas de préposition devant.",
            },
          ],
        },

        // ════════════════════════════════════════════════════════════════════
        // 🟡 INTERMÉDIAIRE — corriger, construire, traduire avec un indice
        // ════════════════════════════════════════════════════════════════════
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Je corrige les erreurs, je construis et je traduis des phrases (avec un indice).",
          questions: [
            {
              id: "cp-i1",
              type: "tri-categories",
              question: "Classe chaque morceau de phrase : correct ou incorrect ?",
              items: [
                { id: "cp-i1-1", label: "managed to hack" },
                { id: "cp-i1-6", label: "succeeded to hack" },
                { id: "cp-i1-2", label: "succeeded in hacking" },
                { id: "cp-i1-7", label: "managed to hacking" },
                { id: "cp-i1-3", label: "dreams about having" },
                { id: "cp-i1-8", label: "dreams to having" },
                { id: "cp-i1-4", label: "is good at pretending" },
                { id: "cp-i1-9", label: "is good at pretend" },
                { id: "cp-i1-5", label: "decided to lie" },
                { id: "cp-i1-10", label: "instead of go" },
              ],
              categories: [
                {
                  id: "ok",
                  label: "✅ Correct",
                  correctItemIds: ["cp-i1-1", "cp-i1-2", "cp-i1-3", "cp-i1-4", "cp-i1-5"],
                },
                {
                  id: "ko",
                  label: "❌ Incorrect",
                  correctItemIds: ["cp-i1-6", "cp-i1-7", "cp-i1-8", "cp-i1-9", "cp-i1-10"],
                },
              ],
              explanation:
                "TO + base verbale (managed to hack, decided to lie). Préposition + -ING (succeeded in hacking, dreams about having, good at pretending, instead of going). Succeed ne se construit pas avec to, et « to + -ing » n'existe pas.",
            },
            {
              id: "cp-i2",
              type: "tri-categories",
              question: "Range chaque groupe : un seul possesseur ('s) ou plusieurs possesseurs (pluriel en -s → ' seul) ?",
              items: [
                { id: "cp-i2-1", label: "the Dean ___ computer" },
                { id: "cp-i2-2", label: "Ferris ___ school" },
                { id: "cp-i2-3", label: "Mr Rooney ___ office" },
                { id: "cp-i2-4", label: "Jeanie ___ brother" },
                { id: "cp-i2-5", label: "her parents ___ behaviour" },
                { id: "cp-i2-6", label: "the students ___ teacher" },
                { id: "cp-i2-7", label: "my friends ___ house" },
                { id: "cp-i2-8", label: "the boys ___ room" },
              ],
              categories: [
                {
                  id: "one",
                  label: "Un seul possesseur → 's",
                  correctItemIds: ["cp-i2-1", "cp-i2-2", "cp-i2-3", "cp-i2-4"],
                },
                {
                  id: "many",
                  label: "Pluriel en -s → '",
                  correctItemIds: ["cp-i2-5", "cp-i2-6", "cp-i2-7", "cp-i2-8"],
                },
              ],
              explanation:
                "Un seul possesseur → 's, toujours : the Dean's, Ferris's, Mr Rooney's, Jeanie's. Plusieurs possesseurs (pluriel en -s) → ' seul : her parents', the students', my friends', the boys'.",
            },
            {
              id: "cp-i3",
              type: "traduction",
              question: "Traduis en anglais avec le verbe MANAGE.",
              sourceText: "Ferris a réussi à tromper ses parents.",
              acceptedAnswers: expand("Ferris managed to {trick|fool|deceive} his parents."),
              keyChunks: ["managed to", "trick|fool|deceive", "his parents"],
              hint: "« a réussi » → prétérit. Puis manage + TO + base verbale. Les parents de qui ?",
              explanation:
                "« a réussi » = action terminée → prétérit : managed. MANAGE + TO + base verbale : to trick (ou to fool). Les parents de Ferris (un garçon) → his parents.",
            },
            {
              id: "cp-i4",
              type: "traduction",
              question: "Traduis en anglais avec le verbe SUCCEED.",
              sourceText: "Il a réussi à sécher les cours.",
              acceptedAnswers: expand("He succeeded in skipping {class|classes|school}."),
              keyChunks: ["succeeded in", "skipping"],
              hint: "succeed + IN… et après une préposition : -ING. Orthographe : succeeded, skipping (2 p).",
              explanation:
                "Prétérit : succeeded (double e + ed). SUCCEED + IN + verbe en -ING : succeeded in skipping. Skip → skipping : on double le p.",
            },
            {
              id: "cp-i5",
              type: "traduction",
              question: "Traduis en anglais avec WANT.",
              sourceText: "Ferris veut que Cameron sorte du lit.",
              acceptedAnswers: expand("Ferris wants Cameron to get out of {|his }bed."),
              keyChunks: ["wants Cameron", "to get out of"],
              hint: "want + quelqu'un + TO + verbe. « sortir de » = un phrasal verb en 3 mots.",
              explanation:
                "« vouloir que » = WANT + quelqu'un + TO + base verbale (pas de that). Get out of = sortir de : le bloc entier !",
            },
            {
              id: "cp-i6",
              type: "traduction",
              question: "Traduis en anglais avec WANT.",
              sourceText: "Jeanie veut que ses parents la croient.",
              acceptedAnswers: ["Jeanie wants her parents to believe her."],
              keyChunks: ["wants her parents", "to believe her"],
              hint: "Pas de that ! Jeanie est une fille : « ses » → ? et « la » → ?",
              explanation:
                "WANT + quelqu'un + TO + base verbale : wants her parents to believe. Les parents de Jeanie → her parents. « la » (Jeanie) → her (pas she).",
            },
            {
              id: "cp-i7",
              type: "correction-erreur",
              question: "Trouve les 2 erreurs et corrige-les.",
              taggedText: "Jeanie wants [his|her] parents [realise|to realise] that Ferris is a liar.",
              explanation:
                "Jeanie est une fille → her parents. « vouloir que » = want + quelqu'un + TO + verbe : to realise.",
            },
            {
              id: "cp-i8",
              type: "correction-erreur",
              question: "Trouve les 2 erreurs et corrige-les.",
              taggedText: "He [succeeds|succeeded] in [hack|hacking] Mr Rooney's computer yesterday.",
              explanation:
                "yesterday → action terminée → prétérit : succeeded. Après la préposition in → -ING : hacking.",
            },
            {
              id: "cp-i9",
              type: "correction-erreur",
              question: "Trouve les 2 erreurs et corrige-les.",
              taggedText: "Rooney can't put [up|up with] Ferris's [behaviours|behaviour] anymore.",
              explanation:
                "put up with = supporter : le phrasal verb s'écrit en entier. Behaviour ne prend jamais de -s.",
            },
            {
              id: "cp-i10",
              type: "correction-erreur",
              question: "Trouve les 2 erreurs et corrige-les.",
              taggedText: "Ferris lies in [other|order] to skip class because he is good at [pretend|pretending].",
              explanation:
                "in order to = pour (le but). Be good at + -ING : après la préposition at, -ING est la seule solution.",
            },
            {
              id: "cp-i11",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Il aimerait que ses amis se souviennent de lui.",
              tiles: ["He", "would", "like", "his", "friends", "to", "remember", "him", "that", "he", "her", "remembers"],
              correctAnswer: ["He", "would", "like", "his", "friends", "to", "remember", "him"],
              explanation:
                "WOULD LIKE + quelqu'un + TO + base verbale (pas de that, pas de -s après to). Ses amis (à lui) → his friends. « de lui » → pronom complément him.",
            },
            {
              id: "cp-i12",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Ferris ment pour pouvoir sécher les cours.",
              tiles: ["Ferris", "lies", "so", "that", "he", "can", "skip", "class", "for", "him", "skipping", "could"],
              correctAnswer: ["Ferris", "lies", "so", "that", "he", "can", "skip", "class"],
              explanation:
                "« pour pouvoir » = SO THAT + sujet + CAN + base verbale. La phrase est au présent (lies) → can. « pour + verbe » ne se dit jamais for.",
            },
            {
              id: "cp-i13",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Jeanie ne supporte pas le comportement de son frère.",
              tiles: ["Jeanie", "can't", "put", "up", "with", "her", "brother's", "behaviour", "his", "a", "of", "the"],
              correctAnswer: ["Jeanie", "can't", "put", "up", "with", "her", "brother's", "behaviour"],
              explanation:
                "supporter = put up with (en bloc). Le frère de Jeanie → her brother. Génitif : her brother's behaviour. Behaviour : jamais de a.",
            },
            {
              id: "cp-i14",
              type: "texte-a-trous-select",
              question:
                "Ferris managed ___ ___ the computer, and he succeeded ___ ___ the number of times he was absent.",
              options: ["to", "hack", "in", "changing", "hacking", "change", "at"],
              correctAnswer: ["to", "hack", "in", "changing"],
              explanation:
                "manage + TO + base verbale : managed to hack. succeed + IN + -ING : succeeded in changing.",
            },
            {
              id: "cp-i15",
              type: "texte-a-trous-select",
              question: "Mr Rooney calls Mrs Bueller. He wants ___ ___ open ___ eyes and face the truth.",
              options: ["her", "to", "her", "she", "his", "that"],
              correctAnswer: ["her", "to", "her"],
              explanation:
                "want + quelqu'un + TO + base verbale. Mrs Bueller → pronom complément her (pas she). Ses yeux (à elle) → her eyes.",
            },
            {
              id: "cp-i16",
              type: "qcm",
              question: "Pourquoi écrit-on « Jeanie wants her parents… » et pas « his parents » ?",
              options: [
                "Parce que le possessif dépend du possesseur : Jeanie est une fille.",
                "Parce que parents est au pluriel.",
                "Parce que her est un pronom sujet.",
                "Parce que his ne s'utilise que pour les choses.",
              ],
              correctAnswer: "Parce que le possessif dépend du possesseur : Jeanie est une fille.",
              explanation:
                "En anglais, on regarde À QUI est la chose : à Jeanie → her ; à Ferris → his ; à eux → their. Le piège vient du français « ses », qui ne change pas.",
            },
            {
              id: "cp-i17",
              type: "qcm",
              question: "Pourquoi écrit-on « her parents' behaviour » avec l'apostrophe APRÈS le s ?",
              options: [
                "Parce que parents est un pluriel en -s : on ajoute seulement '.",
                "Parce que behaviour est au singulier.",
                "Parce que c'est la contraction de « is ».",
                "Parce que Jeanie est une fille.",
              ],
              correctAnswer: "Parce que parents est un pluriel en -s : on ajoute seulement '.",
              explanation:
                "Génitif : un possesseur → 's, même si le mot finit par s (the Dean's, Ferris's). Plusieurs possesseurs (pluriel en -s) → ' seul (her parents').",
            },
            {
              id: "cp-i18",
              type: "completion-tableau",
              question: "Complète avec le pronom COMPLÉMENT (celui qu'on met après want).",
              table: {
                headers: ["Pronom sujet", "Pronom complément"],
                rows: [
                  [{ value: "I" }, { blank: true, correctAnswer: "me" }],
                  [{ value: "he" }, { blank: true, correctAnswer: "him" }],
                  [{ value: "she" }, { blank: true, correctAnswer: "her" }],
                  [{ value: "we" }, { blank: true, correctAnswer: "us" }],
                  [{ value: "they" }, { blank: true, correctAnswer: "them" }],
                ],
              },
              explanation:
                "Après want (et après tout verbe), on met le pronom complément : want me / him / her / us / them to… Ex. : Ferris wants him to come over.",
            },
            {
              id: "cp-i19",
              type: "qcm-multiple",
              question: "Coche les 3 phrases correctes.",
              options: [
                "Ferris managed to skip class.",
                "Ferris managed to skipping class.",
                "Jeanie wants her parents to see the truth.",
                "Jeanie wants that her parents see the truth.",
                "Jeanie is the only one who sees clearly.",
                "Jeanie is the only one which see clearly.",
              ],
              correctAnswer: [
                "Ferris managed to skip class.",
                "Jeanie wants her parents to see the truth.",
                "Jeanie is the only one who sees clearly.",
              ],
              explanation:
                "manage TO + base verbale (jamais to + -ing). « vouloir que » = want + quelqu'un + TO, jamais want that. Pour une personne : the only one WHO, et le verbe s'accorde (sees).",
            },
            {
              id: "cp-i20",
              type: "association",
              question: "Associe chaque phrasal verb à sa traduction.",
              pairs: [
                { left: "put up with", right: "supporter, tolérer" },
                { left: "come over", right: "venir (chez quelqu'un)" },
                { left: "pick somebody up", right: "passer prendre quelqu'un" },
                { left: "blow off some steam", right: "se défouler" },
                { left: "be up to no good", right: "mijoter un mauvais coup" },
                { left: "play a trick on somebody", right: "jouer un tour à quelqu'un" },
              ],
              explanation:
                "Un phrasal verb = verbe + petit mot qui change le sens. Apprends-le en bloc : put up WITH, come OVER, pick UP…",
            },
          ],
        },

        // ════════════════════════════════════════════════════════════════════
        // 🔴 EXPERT — produire sans indice
        // ════════════════════════════════════════════════════════════════════
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "J'écris moi-même les phrases, sans indice : traductions, corrections, expression libre.",
          questions: [
            {
              id: "cp-e1",
              type: "traduction",
              question: "Traduis en anglais avec le verbe MANAGE, conjugué.",
              sourceText: "Ferris a réussi à pirater l'ordinateur du doyen.",
              acceptedAnswers: ["Ferris managed to hack the Dean's computer."],
              keyChunks: ["managed", "to hack", "the Dean's computer"],
              explanation:
                "« a réussi » → prétérit : managed. MANAGE + TO + base verbale : to hack. Génitif : POSSESSEUR + 's + CHOSE → the Dean's computer.",
            },
            {
              id: "cp-e2",
              type: "traduction",
              question: "Traduis en anglais avec le verbe SUCCEED, conjugué.",
              sourceText: "Il a réussi à pirater l'ordinateur de M. Rooney.",
              acceptedAnswers: expand("He succeeded in hacking {Mr|Mr.} Rooney's computer."),
              keyChunks: ["succeeded", "in hacking", "Mr Rooney's computer|Mr. Rooney's computer"],
              explanation:
                "Prétérit : succeeded. SUCCEED + IN + -ING (après une préposition, -ING est la seule solution). Génitif : Mr Rooney's computer (Mr = Mister, une seule majuscule).",
            },
            {
              id: "cp-e3",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Jeanie veut que ses parents réalisent que Ferris est un menteur.",
              acceptedAnswers: expand("Jeanie wants her parents to {realise|understand|see} {that |}Ferris is a liar."),
              keyChunks: ["wants her parents", "to realise|to realize|to understand|to see", "a liar"],
              explanation:
                "WANT + quelqu'un + TO + base verbale (pas de « wants that »). Jeanie est une fille → her parents. Un menteur = a liar (nom), pas « is lying ».",
            },
            {
              id: "cp-e4",
              type: "traduction",
              question: "Traduis en anglais. Attention à l'expression idiomatique !",
              sourceText: "Rooney veut que Mrs Bueller ouvre les yeux et regarde la réalité en face.",
              acceptedAnswers: expand(
                "{Rooney|Mr Rooney|Mr. Rooney} wants {Mrs|Mrs.} Bueller to open {|up }her eyes and face {the truth|the facts|reality}."
              ),
              keyChunks: [
                "wants Mrs Bueller to open|wants Mrs. Bueller to open",
                "her eyes",
                "face the truth|face the facts|face reality",
              ],
              explanation:
                "WANT + quelqu'un + TO + base verbale : wants Mrs Bueller to open. Ses yeux (à elle) → her eyes. « regarder la réalité en face » = face the truth / face the facts.",
            },
            {
              id: "cp-e5",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Jeanie est frustrée par le comportement de ses parents.",
              acceptedAnswers: expand("Jeanie is frustrated {at|by|with} her parents' behaviour."),
              keyChunks: ["her parents' behaviour"],
              explanation:
                "Les parents de Jeanie → her parents. Plusieurs possesseurs (pluriel en -s) → ' seul : her parents' behaviour.",
            },
            {
              id: "cp-e6",
              type: "traduction",
              question: "Traduis en anglais avec SO THAT.",
              sourceText: "Ferris a piraté l'ordinateur pour pouvoir modifier ses absences.",
              acceptedAnswers: expand("Ferris hacked the computer so that he could {change|modify|alter} his absences."),
              keyChunks: ["hacked", "so that he could", "his absences"],
              explanation:
                "But : SO THAT + sujet + can / could + base verbale. La phrase est au passé (hacked) → could. Ses absences (à Ferris) → his absences.",
            },
            {
              id: "cp-e7",
              type: "correction-erreur",
              question: "Trouve les 3 erreurs et corrige-les.",
              taggedText:
                "Ferris hacked Mr [Rooney|Rooney's] computer in [other|order] to change the number of [time|times] he was absent.",
              explanation:
                "Génitif : Mr Rooney's computer. But : in ORDER to. « le nombre de fois » → the number of times (pluriel).",
            },
            {
              id: "cp-e8",
              type: "correction-erreur",
              question: "Trouve les 3 erreurs et corrige-les.",
              taggedText:
                "Jeanie can't put [up|up with] her [brother|brother's] behaviour anymore. She wants her parents [see|to see] the truth.",
              explanation:
                "put up WITH = supporter (en bloc). Le comportement de son frère → her brother's behaviour (génitif). Want + quelqu'un + TO + verbe : to see.",
            },
            {
              id: "cp-e9",
              type: "correction-erreur",
              question: "Trouve les 3 erreurs et corrige-les.",
              taggedText:
                "Ferris [give|gives] Cameron a call because he wants [he|him] to come over and [picks|pick] him up.",
              explanation:
                "3ᵉ personne du présent → gives. Après want → pronom complément : him. « to come over and pick » : après to, base verbale pour les deux verbes.",
            },
            {
              id: "cp-e10",
              type: "correction-erreur",
              question: "Trouve les 3 erreurs et corrige-les.",
              taggedText: "In [Ferris|Ferris's] opinion, Cameron is the one [which|who] really [need|needs] a day off.",
              explanation:
                "Selon Ferris = in Ferris's opinion (génitif). Pour une personne : the one WHO. The one est singulier → needs.",
            },
            {
              id: "cp-e11",
              type: "expression-libre",
              question:
                "Écris ce que Mr Rooney veut que Mrs Bueller fasse. Commence par « Mr Rooney wants her to… » (8 mots minimum).",
              requiredWords: ["wants", "her", "to"],
              minWords: 8,
              modelAnswer: "Mr Rooney wants her to open her eyes and face the truth about Ferris.",
              explanation:
                "Structure : WANT + pronom complément (her) + TO + base verbale. Pas de that, pas de she, pas de -s après to.",
            },
            {
              id: "cp-e12",
              type: "expression-libre",
              question:
                "Écris une phrase au passé sur Ferris avec « succeeded in » + un verbe en -ING (6 mots minimum).",
              requiredWords: ["succeeded", "in"],
              minWords: 6,
              modelAnswer: "Ferris succeeded in fooling his parents because they are very gullible.",
              explanation:
                "SUCCEED + IN + verbe en -ING : succeeded in fooling / in skipping / in hacking… Après une préposition, -ING est la seule solution.",
            },
            {
              id: "cp-e13",
              type: "expression-libre",
              question:
                "Écris ce que Jeanie aimerait que ses parents fassent, avec « would like » + quelqu'un + TO (8 mots minimum).",
              requiredWords: ["would", "like", "parents", "to"],
              minWords: 8,
              modelAnswer: "Jeanie would like her parents to realise that Ferris is lying to them.",
              explanation:
                "WOULD LIKE + quelqu'un + TO + base verbale. Les parents de Jeanie → her parents (pas his).",
            },
            {
              id: "cp-e14",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Ferris a réussi à convaincre Cameron de venir chez lui.",
              tiles: [
                "Ferris",
                "managed",
                "to",
                "convince",
                "Cameron",
                "to",
                "come",
                "over",
                "succeeded",
                "in",
                "convincing",
                "coming",
                "that",
              ],
              correctAnswer: ["Ferris", "managed", "to", "convince", "Cameron", "to", "come", "over"],
              acceptedOrders: [["Ferris", "succeeded", "in", "convincing", "Cameron", "to", "come", "over"]],
              explanation:
                "Deux bonnes réponses : managed TO convince ou succeeded IN convincing. Puis convince + quelqu'un + TO + base verbale : convince Cameron to come over.",
            },
            {
              id: "cp-e15",
              type: "construire-phrase",
              question: "Construis la phrase en anglais.",
              sourceText: "Ferris rêve de sécher les cours au lieu d'aller à l'école.",
              tiles: [
                "Ferris",
                "dreams",
                "about",
                "skipping",
                "class",
                "instead",
                "of",
                "going",
                "to",
                "school",
                "skip",
                "go",
                "in",
                "for",
              ],
              correctAnswer: ["Ferris", "dreams", "about", "skipping", "class", "instead", "of", "going", "to", "school"],
              explanation:
                "dream ABOUT + -ING : dreams about skipping. instead OF + -ING : instead of going. Deux prépositions → deux verbes en -ING.",
            },
            {
              id: "cp-e16",
              type: "etude-texte",
              question: "Lis le texte, puis réponds aux questions.",
              passage:
                "Ferris Bueller is pretending to be sick. His parents are very gullible: they want him to stay in bed. But his sister, Jeanie, can't put up with his behaviour anymore. She is the only one who sees that he is lying. Meanwhile, Mr Rooney, the Dean of Ferris's school, is sure that Ferris is up to no good.",
              subQuestions: [
                {
                  question: "« they want him to stay in bed » veut dire :",
                  options: [
                    "Ils veulent qu'il reste au lit.",
                    "Ils veulent rester au lit avec lui.",
                    "Il veut qu'ils restent au lit.",
                  ],
                  correctAnswer: "Ils veulent qu'il reste au lit.",
                  explanation: "want + him + to stay = vouloir qu'il reste.",
                },
                {
                  question: "Pourquoi « his behaviour » et pas « her behaviour » ?",
                  options: [
                    "Parce que c'est le comportement de Ferris (un garçon).",
                    "Parce que Jeanie est le sujet de la phrase.",
                    "Parce que behaviour est un mot masculin.",
                  ],
                  correctAnswer: "Parce que c'est le comportement de Ferris (un garçon).",
                  explanation: "Le possessif dépend du possesseur : le comportement de Ferris → his.",
                },
                {
                  question: "« Ferris's school » veut dire :",
                  options: ["l'école de Ferris", "Ferris est à l'école", "les écoles de Ferris"],
                  correctAnswer: "l'école de Ferris",
                  explanation: "Génitif : Ferris's school = l'école de Ferris.",
                },
                {
                  question: "« She is the only one who sees… » se traduit par :",
                  options: [
                    "C'est la seule qui voit…",
                    "Elle est seule et elle voit…",
                    "Elle est l'une de celles qui voient…",
                  ],
                  correctAnswer: "C'est la seule qui voit…",
                  explanation: "the only one who = le seul / la seule qui.",
                },
                {
                  question: "Quel nom du texte est INDÉNOMBRABLE (jamais de a, jamais de -s) ?",
                  options: ["behaviour", "parents", "sister", "bed"],
                  correctAnswer: "behaviour",
                  explanation: "On ne dit jamais « a behaviour » : behaviour ne prend pas de a.",
                },
              ],
              explanation:
                "Le texte réunit les structures du chapitre : want him to stay, his behaviour, Ferris's school, the only one who, put up with.",
            },
            {
              id: "cp-e17",
              type: "qcm",
              question:
                "« Quelle différence entre manage et succeed ? Expliquez la règle. » Choisis la réponse complète.",
              options: [
                "MANAGE est suivi de TO + base verbale (managed to hack) ; SUCCEED est suivi de la préposition IN, et le verbe qui suit prend -ING (succeeded in hacking).",
                "Avec succeed, on met le verbe au participe passé en -ing.",
                "MANAGE est suivi de -ING et SUCCEED est suivi de TO + base verbale.",
                "Les deux verbes se construisent pareil : TO + verbe en -ING.",
              ],
              correctAnswer:
                "MANAGE est suivi de TO + base verbale (managed to hack) ; SUCCEED est suivi de la préposition IN, et le verbe qui suit prend -ING (succeeded in hacking).",
              explanation:
                "C'est la réponse attendue, avec la règle : « When a verb follows a preposition, -ING is the only solution. » Hacking n'est pas un participe passé (celui de hack, c'est hacked).",
            },
            {
              id: "cp-e18",
              type: "completion-tableau",
              question: "Complète avec le petit mot + la bonne forme du verbe hack (ex. : to hack, in hacking…).",
              table: {
                headers: ["Début de phrase", "Suite avec hack"],
                rows: [
                  [{ value: "Ferris managed …" }, { blank: true, correctAnswer: "to hack" }],
                  [{ value: "He succeeded …" }, { blank: true, correctAnswer: "in hacking" }],
                  [{ value: "He decided …" }, { blank: true, correctAnswer: "to hack" }],
                  [{ value: "He is interested …" }, { blank: true, correctAnswer: "in hacking" }],
                  [{ value: "He is very good …" }, { blank: true, correctAnswer: "at hacking" }],
                  [{ value: "He went out instead …" }, { blank: true, correctAnswer: "of hacking" }],
                ],
              },
              explanation:
                "manage to, decide to + base verbale. succeed IN, be interested IN, be good AT, instead OF + -ING.",
            },
            {
              id: "cp-e19",
              type: "texte-a-trous-select",
              question: "Cameron is ___ ___ who really needs a day off: Ferris wants ___ ___ ___ off some steam.",
              options: ["the", "one", "him", "to", "blow", "ones", "he", "blowing", "which"],
              correctAnswer: ["the", "one", "him", "to", "blow"],
              explanation:
                "C'est Cameron qui… = Cameron is the one who (singulier). want + him (pronom complément) + TO + base verbale. Blow off some steam = se défouler.",
            },
            {
              id: "cp-e20",
              type: "qcm-multiple",
              question: "Coche TOUTES les phrases correctes (il y en a 4).",
              options: [
                "Ferris's parents want him to stay home.",
                "Ferris is interested in to hack computers.",
                "Mrs Bueller's son is a liar.",
                "Jeanie would like that her parents punish Ferris.",
                "Rooney feels that Ferris is up to no good.",
                "Ferris gave a call at Cameron.",
                "Cameron is lying in bed.",
              ],
              correctAnswer: [
                "Ferris's parents want him to stay home.",
                "Mrs Bueller's son is a liar.",
                "Rooney feels that Ferris is up to no good.",
                "Cameron is lying in bed.",
              ],
              explanation:
                "Fausses : « interested in to hack » → interested in hacking ; « would like that her parents punish » → would like her parents to punish ; « gave a call at Cameron » → gave Cameron a call.",
            },
          ],
        },
      ],
    },
  },
];
