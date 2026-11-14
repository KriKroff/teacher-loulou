import type { Resource } from "@/types";

const CHAPTER = "Anglais 3e — Grammaire : mots de liaison, adverbes et comparatifs";

export const resources: Resource[] = [
  {
    slug: "anglais-liaison-comparatifs-fiche",
    title: "Mots de liaison, adverbes et comparatifs",
    description:
      "although / whereas, because / so, in order to / so that, adverbes (still, already, quite…) et comparatifs (fresher than, more and more expensive).",
    type: "fiche",
    level: "3e",
    subject: "anglais",
    chapter: CHAPTER,
    createdAt: "2026-11-14T12:00:00Z",
    updatedAt: "2026-11-14T12:00:00Z",
    tags: ["anglais", "although", "whereas", "adverbes", "comparatifs", "fiche"],
    relatedResourceSlug: "anglais-liaison-comparatifs-quiz",
    mdxPath: "3e/anglais/fiches/anglais-liaison-comparatifs-fiche.mdx",
  },
  {
    slug: "anglais-liaison-comparatifs-quiz",
    title: "Quiz — Mots de liaison, adverbes et comparatifs",
    description:
      "Entraîne-toi sur although / whereas, les mots de liaison, les adverbes du cours et les comparatifs.",
    type: "quiz",
    level: "3e",
    subject: "anglais",
    chapter: CHAPTER,
    createdAt: "2026-11-14T12:00:00Z",
    updatedAt: "2026-11-14T12:00:00Z",
    tags: ["anglais", "although", "whereas", "adverbes", "comparatifs", "quiz"],
    relatedResourceSlug: "anglais-liaison-comparatifs-fiche",
    quizData: {
      title: "Mots de liaison, adverbes et comparatifs",
      description: "Choisis ton niveau.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Reconnaître although / whereas, les mots de liaison et les comparatifs.",
          questions: [
            {
              id: "lc-f1",
              type: "qcm",
              question: "Choisis le bon mot : « My sister doesn't like rap ___ I love it. »",
              options: ["although", "whereas", "because", "so that"],
              correctAnswer: "whereas",
              hint: "Moi et ma sœur : on compare deux personnes.",
              explanation:
                "On compare deux personnes (ma sœur / moi) : c'est un contraste, donc whereas (= alors que, tandis que).",
            },
            {
              id: "lc-f2",
              type: "qcm",
              question: "Choisis le bon mot : « It's quite cool ___ earlier this morning it was a little fresh. »",
              options: ["whereas", "although", "so", "in order to"],
              correctAnswer: "although",
              hint: "Un fait un peu surprenant : « bien que… ».",
              explanation:
                "Although = bien que / même si : le fait qui précède pourrait sembler contredit par l'autre. C'est une concession.",
            },
            {
              id: "lc-f3",
              type: "texte-a-trous",
              question: "Complète : « ___ it is cold, Ferris goes out in a T-shirt. »",
              options: ["Although", "Whereas", "Because", "So that"],
              correctAnswer: "Although",
              explanation:
                "Il fait froid et pourtant Ferris sort en T-shirt : c'est surprenant, donc although (bien que).",
            },
            {
              id: "lc-f4",
              type: "texte-a-trous",
              question: "Complète : « Cameron is shy ___ Ferris is confident. »",
              options: ["although", "whereas", "because", "in order to"],
              correctAnswer: "whereas",
              explanation:
                "On oppose deux personnes (Cameron timide / Ferris sûr de lui) : whereas = alors que.",
            },
            {
              id: "lc-f5",
              type: "vrai-faux",
              question: "Vrai ou faux : « although » veut dire « alors que » (contraste entre deux personnes).",
              correctAnswer: "Faux",
              explanation:
                "Although = bien que / même si. C'est whereas qui veut dire alors que / tandis que. Attention, c'était inversé dans ton cahier !",
            },
            {
              id: "lc-f6",
              type: "association",
              question: "Associe chaque mot de liaison à son sens en français.",
              pairs: [
                { left: "although", right: "bien que, même si" },
                { left: "whereas", right: "alors que, tandis que" },
                { left: "because", right: "parce que" },
                { left: "so", right: "donc" },
                { left: "as soon as", right: "dès que" },
                { left: "indeed", right: "en effet" },
              ],
              options: [
                "bien que, même si",
                "alors que, tandis que",
                "parce que",
                "donc",
                "dès que",
                "en effet",
              ],
              correctAnswer: [
                "bien que, même si",
                "alors que, tandis que",
                "parce que",
                "donc",
                "dès que",
                "en effet",
              ],
              explanation:
                "although = bien que ; whereas = alors que ; because = parce que ; so = donc ; as soon as = dès que ; indeed = en effet.",
            },
            {
              id: "lc-f7",
              type: "vrai-faux",
              question: "Vrai ou faux : « actually » veut dire « actuellement ».",
              correctAnswer: "Faux",
              explanation:
                "Actually = en fait (c'est un faux ami). Actuellement se dit now ou at the moment.",
            },
            {
              id: "lc-f8",
              type: "qcm",
              question: "Choisis le bon mot : « The room is ___ ; please do not shout. »",
              options: ["quite", "quiet", "quit", "quick"],
              correctAnswer: "quiet",
              explanation:
                "quiet = calme, silencieux (adjectif). quite = assez, plutôt (adverbe). Ici on veut dire « calme » : quiet.",
            },
            {
              id: "lc-f9",
              type: "qcm",
              question: "Comment dit-on le but « pour, afin de » ? « Ferris lies ___ skip class. »",
              options: ["because", "in order to", "although", "whereas"],
              correctAnswer: "in order to",
              explanation:
                "Pour exprimer le but : (in order) to + verbe. Ne l'écris pas « in other to » !",
            },
            {
              id: "lc-f10",
              type: "texte-a-trous",
              question: "Complète : « Ferris lies ___ he can skip class. »",
              options: ["so that", "because", "whereas", "yet"],
              correctAnswer: "so that",
              explanation:
                "But + sujet : so that + sujet + can/could + verbe. Ici : so that he can skip class.",
            },
            {
              id: "lc-f11",
              type: "tri-categories",
              question: "Trie ces mots de liaison selon leur rôle.",
              items: [
                { id: "although", label: "although" },
                { id: "whereas", label: "whereas" },
                { id: "however", label: "however" },
                { id: "because", label: "because" },
                { id: "so", label: "so" },
                { id: "inorder", label: "in order to" },
                { id: "sothat", label: "so that" },
              ],
              categories: [
                { id: "opposition", label: "Opposition", correctItemIds: ["although", "whereas", "however"] },
                { id: "cause", label: "Cause / conséquence", correctItemIds: ["because", "so"] },
                { id: "but", label: "But", correctItemIds: ["inorder", "sothat"] },
              ],
              explanation:
                "Opposition : although, whereas, however. Cause / conséquence : because, so. But : in order to, so that.",
            },
            {
              id: "lc-f12",
              type: "texte-a-trous-select",
              question: "Today is ___ than yesterday, and tomorrow will be ___ than today.",
              options: ["colder", "sunnier", "more cold", "more sunny"],
              correctAnswer: ["colder", "sunnier"],
              explanation:
                "Adjectifs courts : cold → colder ; sunny → sunnier (y devient ier). On n'ajoute pas « more ».",
            },
            {
              id: "lc-f13",
              type: "qcm",
              question: "Quel est le comparatif de « sunny » (ensoleillé) ?",
              options: ["sunnyer", "more sunny", "sunnier", "sunniest"],
              correctAnswer: "sunnier",
              explanation: "Adjectif court en -y : y devient ier → sunnier (de même : cloudy → cloudier).",
            },
            {
              id: "lc-f14",
              type: "qcm",
              question: "Quel est le comparatif de « expensive » (cher) ?",
              options: ["expensiver", "more expensive", "most expensive", "expensiver than"],
              correctAnswer: "more expensive",
              explanation: "Adjectif long (3 syllabes) : more + adjectif + than → more expensive than.",
            },
            {
              id: "lc-f15",
              type: "intrus",
              question: "Trouve le comparatif mal formé (l'intrus).",
              options: ["colder", "more warm", "bigger", "hotter"],
              correctAnswer: "more warm",
              explanation:
                "warm est un adjectif court : on ajoute -er → warmer. On n'utilise more que pour les adjectifs longs.",
            },
            {
              id: "lc-f16",
              type: "construire-phrase",
              question: "Construis la phrase.",
              sourceText: "Jeanie doit aller à l'école alors que Ferris peut rester à la maison.",
              tiles: [
                "Jeanie", "has", "to", "go", "to", "school", "whereas", "Ferris", "can", "stay", "home", "although",
              ],
              correctAnswer: [
                "Jeanie", "has", "to", "go", "to", "school", "whereas", "Ferris", "can", "stay", "home",
              ],
              explanation:
                "On oppose Jeanie et Ferris : whereas (= alors que). Although voudrait dire « bien que ».",
            },
            {
              id: "lc-f17",
              type: "construire-phrase",
              question: "Construis la phrase.",
              sourceText: "Il fait de plus en plus chaud.",
              tiles: ["It", "is", "getting", "hotter", "and", "hotter", "more", "hot"],
              correctAnswer: ["It", "is", "getting", "hotter", "and", "hotter"],
              explanation:
                "De plus en plus + adjectif court : getting + comparatif en -er répété (hotter and hotter). Hot double sa consonne.",
            },
            {
              id: "lc-f18",
              type: "texte-a-trous",
              question: "Complète : « She cannot put up with his behaviour ___. »",
              options: ["anymore", "yet", "already", "quite"],
              correctAnswer: "anymore",
              explanation: "not … anymore = ne … plus : She cannot put up with his behaviour anymore.",
            },
            {
              id: "lc-f19",
              type: "vrai-faux",
              question: "Vrai ou faux : « as soon as » veut dire « dès que ».",
              correctAnswer: "Vrai",
              explanation: "As soon as = dès que. Ex : As soon as Ferris is a little ill, he can stay home.",
            },
            {
              id: "lc-f20",
              type: "texte-a-trous",
              question: "Complète : « Jeanie is jealous. ___ she is angry. »",
              options: ["That's why", "Although", "Whereas", "In order to"],
              correctAnswer: "That's why",
              explanation: "That's why = c'est pour ça que (conséquence). Jeanie est jalouse, donc elle est en colère.",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Choisir le bon mot, corriger des erreurs et traduire des phrases courtes.",
          questions: [
            {
              id: "lc-i1",
              type: "qcm",
              question: "Choisis le bon mot : « My brother loves football ___ I prefer reading. »",
              options: ["although", "whereas", "because", "in order to"],
              correctAnswer: "whereas",
              explanation: "On compare deux personnes (mon frère / moi) : whereas = alors que, tandis que.",
            },
            {
              id: "lc-i2",
              type: "qcm",
              question: "Choisis le bon mot : « He still goes out ___ he has a cold. »",
              options: ["whereas", "although", "so that", "that's why"],
              correctAnswer: "although",
              explanation:
                "Il a un rhume et pourtant il sort : c'est surprenant, donc although (bien que, même si).",
            },
            {
              id: "lc-i3",
              type: "qcm",
              question: "Quelle phrase traduit « Ma sœur n'aime pas le rap alors que je l'adore » ?",
              options: [
                "My sister doesn't like rap although I love it.",
                "My sister doesn't like rap whereas I love it.",
                "My sister doesn't like rap because I love it.",
                "My sister doesn't like rap so that I love it.",
              ],
              correctAnswer: "My sister doesn't like rap whereas I love it.",
              explanation: "Contraste entre deux personnes : whereas = alors que.",
            },
            {
              id: "lc-i4",
              type: "correction-erreur",
              question: "Trouve l'erreur (1 erreur) et corrige-la.",
              taggedText: "My sister likes tea [although|whereas] I prefer coffee.",
              explanation:
                "On compare deux personnes qui ont des goûts différents : whereas (alors que), pas although (bien que).",
            },
            {
              id: "lc-i5",
              type: "correction-erreur",
              question: "Trouve l'erreur de copie (1 erreur) et corrige-la.",
              taggedText: "Ferris lies [in other to|in order to] skip class.",
              explanation: "On écrit in order to (order = ordre), pas « in other to ».",
            },
            {
              id: "lc-i6",
              type: "correction-erreur",
              question: "Trouve l'erreur (1 erreur) et corrige-la.",
              taggedText: "The sky is [quiet|quite] cloudy today, but it is not cold.",
              explanation:
                "On veut dire « plutôt, assez » : quite. Quiet veut dire calme (The room is quiet).",
            },
            {
              id: "lc-i7",
              type: "correction-erreur",
              question: "Trouve l'erreur (1 erreur) et corrige-la.",
              taggedText: "Today it's [more cold|colder] than yesterday.",
              explanation:
                "Cold est un adjectif court : colder than. On ne met jamais more devant un comparatif en -er.",
            },
            {
              id: "lc-i8",
              type: "texte-a-trous-select",
              question: "Ferris stays in bed ___ he isn't ill. Jeanie goes to school ___ Ferris stays home.",
              options: ["although", "whereas", "because", "so that"],
              correctAnswer: ["although", "whereas"],
              explanation:
                "1) Pas malade mais au lit : fait surprenant → although. 2) Jeanie / Ferris : contraste entre deux personnes → whereas.",
            },
            {
              id: "lc-i9",
              type: "association",
              question: "Associe chaque adverbe ou mot de liaison à son sens.",
              pairs: [
                { left: "nevertheless", right: "pourtant, néanmoins" },
                { left: "still", right: "encore, toujours" },
                { left: "already", right: "déjà" },
                { left: "not … anymore", right: "ne … plus" },
                { left: "quite", right: "assez, plutôt" },
              ],
              options: ["pourtant, néanmoins", "encore, toujours", "déjà", "ne … plus", "assez, plutôt"],
              correctAnswer: ["pourtant, néanmoins", "encore, toujours", "déjà", "ne … plus", "assez, plutôt"],
              explanation:
                "nevertheless = pourtant ; still = encore ; already = déjà ; not … anymore = ne … plus ; quite = assez.",
            },
            {
              id: "lc-i10",
              type: "tri-categories",
              question: "Trie ces mots de liaison selon leur rôle.",
              items: [
                { id: "whereas", label: "whereas" },
                { id: "nevertheless", label: "nevertheless" },
                { id: "because", label: "because" },
                { id: "thatswhy", label: "that's why" },
                { id: "inorder", label: "in order to" },
                { id: "sothat", label: "so that" },
                { id: "indeed", label: "indeed" },
                { id: "infact", label: "in fact" },
              ],
              categories: [
                { id: "opposition", label: "Opposition", correctItemIds: ["whereas", "nevertheless"] },
                { id: "cause", label: "Cause / conséquence", correctItemIds: ["because", "thatswhy"] },
                { id: "but", label: "But", correctItemIds: ["inorder", "sothat"] },
                { id: "ajout", label: "Préciser / confirmer", correctItemIds: ["indeed", "infact"] },
              ],
              explanation:
                "Opposition : whereas, nevertheless. Cause / conséquence : because, that's why. But : in order to, so that. Préciser : indeed (en effet), in fact (en fait).",
            },
            {
              id: "lc-i11",
              type: "completion-tableau",
              question: "Complète le tableau (adjectif → comparatif → « de plus en plus »).",
              table: {
                headers: ["Adjectif", "Comparatif", "De plus en plus"],
                rows: [
                  [{ value: "cold" }, { blank: true, correctAnswer: "colder" }, { blank: true, correctAnswer: "colder and colder" }],
                  [{ value: "hot" }, { blank: true, correctAnswer: "hotter" }, { value: "hotter and hotter" }],
                  [{ value: "sunny" }, { blank: true, correctAnswer: "sunnier" }, { blank: true, correctAnswer: "sunnier and sunnier" }],
                  [{ value: "expensive" }, { value: "more expensive" }, { blank: true, correctAnswer: "more and more expensive" }],
                ],
              },
              explanation:
                "Adjectif court : -er (hot → hotter, consonne doublée ; sunny → sunnier) et on répète pour « de plus en plus ». Adjectif long : more and more + adjectif.",
            },
            {
              id: "lc-i12",
              type: "traduction",
              question: "Traduis en anglais (utilise getting).",
              sourceText: "Il fait de plus en plus chaud.",
              acceptedAnswers: [
                "It's getting hotter and hotter.",
                "It is getting hotter and hotter.",
                "It's getting warmer and warmer.",
                "It is getting warmer and warmer.",
              ],
              keyChunks: ["getting", "hotter and hotter|warmer and warmer"],
              hint: "adjectif court : répète le comparatif en -er",
              explanation:
                "De plus en plus + adjectif court : getting + hotter and hotter (ou warmer and warmer).",
            },
            {
              id: "lc-i13",
              type: "traduction",
              question: "Traduis en anglais. Utilise whereas.",
              sourceText: "Ma sœur n'aime pas le rap alors que je l'adore.",
              acceptedAnswers: [
                "My sister doesn't like rap whereas I love it.",
                "My sister does not like rap whereas I love it.",
                "My sister doesn't like rap music whereas I love it.",
                "My sister does not like rap music whereas I love it.",
              ],
              keyChunks: ["My sister", "doesn't like|does not like", "whereas", "I love it"],
              hint: "alors que = whereas (contraste entre deux personnes)",
              explanation:
                "Contraste entre deux personnes : whereas = alors que. Sister + doesn't (3e personne) + like.",
            },
            {
              id: "lc-i14",
              type: "traduction",
              question: "Traduis en anglais (exprime le but avec so that).",
              sourceText: "Ferris ment pour pouvoir sécher les cours.",
              acceptedAnswers: [
                "Ferris lies so that he can skip class.",
                "Ferris lies so that he can skip classes.",
                "Ferris lies so that he can miss school.",
                "Ferris lies so that he can miss class.",
                "Ferris lies so that he can skip school.",
              ],
              keyChunks: ["lies", "so that he can", "skip|miss"],
              hint: "so that + sujet + can + verbe",
              explanation: "But : so that + sujet + can + verbe. Ferris lies (3e personne : -s).",
            },
            {
              id: "lc-i15",
              type: "construire-phrase",
              question: "Construis la phrase.",
              sourceText: "Dès que Ferris est un peu malade, il peut rester à la maison.",
              tiles: [
                "As", "soon", "as", "Ferris", "is", "a", "little", "ill,", "he", "can", "stay", "home", "when", "stays",
              ],
              correctAnswer: [
                "As", "soon", "as", "Ferris", "is", "a", "little", "ill,", "he", "can", "stay", "home",
              ],
              explanation:
                "Dès que = as soon as. Après can, le verbe reste à l'infinitif sans to ni -s : he can stay.",
            },
            {
              id: "lc-i16",
              type: "construire-phrase",
              question: "Construis la phrase.",
              sourceText: "Il fait bien plus frais qu'hier.",
              tiles: ["It", "is", "much", "fresher", "than", "yesterday", "more", "very", "then"],
              correctAnswer: ["It", "is", "much", "fresher", "than", "yesterday"],
              explanation:
                "Fresh est court : fresher than. Much renforce le comparatif (bien plus). Very ne se met pas devant un comparatif.",
            },
            {
              id: "lc-i17",
              type: "qcm",
              question: "Comment dit-on « Actuellement, il pleut » ?",
              options: [
                "Actually, it is raining.",
                "At the moment, it is raining.",
                "In fact, it is raining.",
                "Indeed, it is raining.",
              ],
              correctAnswer: "At the moment, it is raining.",
              explanation:
                "Actually = en fait (faux ami). Actuellement = at the moment ou now.",
            },
            {
              id: "lc-i18",
              type: "qcm-multiple",
              question: "Quels mots peuvent commencer une phrase pour dire « pourtant, cependant » ?",
              options: ["Nevertheless", "Yet", "Because", "So that"],
              correctAnswer: ["Nevertheless", "Yet"],
              explanation:
                "Nevertheless, however et yet (en début de phrase, suivis d'une virgule) = pourtant, cependant.",
            },
            {
              id: "lc-i19",
              type: "vrai-faux",
              question: "Vrai ou faux : « Ferris lies so that can skip class » est une phrase correcte.",
              correctAnswer: "Faux",
              explanation: "Après so that il faut un sujet : so that he can skip class.",
            },
            {
              id: "lc-i20",
              type: "qcm",
              question: "Comment dit-on « Jeanie est la seule qui voit clair » ?",
              options: [
                "Jeanie is the only one who sees clearly.",
                "Jeanie is the only who sees clearly.",
                "Jeanie is the only one which sees clearly.",
                "Jeanie is the one only who sees clearly.",
              ],
              correctAnswer: "Jeanie is the only one who sees clearly.",
              explanation: "On dit the only one who (la seule qui). Pour une personne : who.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Produire tes propres phrases, sans aide, comme au contrôle.",
          questions: [
            {
              id: "lc-e1",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Jeanie doit aller à l'école alors que Ferris peut rester à la maison.",
              acceptedAnswers: [
                "Jeanie has to go to school whereas Ferris can stay home.",
                "Jeanie has to go to school whereas Ferris can stay at home.",
                "Jeanie must go to school whereas Ferris can stay home.",
                "Jeanie must go to school whereas Ferris can stay at home.",
              ],
              keyChunks: ["has to|must", "whereas", "can stay"],
              explanation:
                "Contraste Jeanie / Ferris : whereas. Jeanie has to (3e personne : has). Après can : verbe sans to.",
            },
            {
              id: "lc-e2",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Il fait frais bien que le soleil brille.",
              acceptedAnswers: [
                "It is cool although the sun is shining.",
                "It is fresh although the sun is shining.",
                "It's cool although the sun is shining.",
                "It's fresh although the sun is shining.",
                "It is cool although the sun shines.",
                "It is fresh although the sun shines.",
              ],
              keyChunks: ["cool|fresh", "although", "the sun is shining|the sun shines"],
              explanation:
                "Fait surprenant (frais malgré le soleil) : although = bien que. On garde sujet + verbe après although.",
            },
            {
              id: "lc-e3",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Dès que Ferris est malade, il reste à la maison.",
              acceptedAnswers: [
                "As soon as Ferris is ill, he stays home.",
                "As soon as Ferris is ill, he stays at home.",
                "As soon as Ferris is sick, he stays home.",
                "As soon as Ferris is sick, he stays at home.",
                "As soon as Ferris is ill, he can stay home.",
                "As soon as Ferris is sick, he can stay home.",
              ],
              keyChunks: ["As soon as", "ill|sick", "stays|can stay"],
              explanation: "Dès que = as soon as. Au présent, 3e personne : he stays.",
            },
            {
              id: "lc-e4",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Elle ne supporte plus son comportement.",
              acceptedAnswers: [
                "She cannot put up with his behaviour anymore.",
                "She can't put up with his behaviour anymore.",
                "She cannot put up with his behaviour any more.",
                "She cannot put up with his behaviour any longer.",
              ],
              keyChunks: ["cannot|can't", "put up with", "behaviour", "anymore|any more|any longer"],
              explanation:
                "put up with = supporter (verbe à particule, un bloc). Ne … plus = not … anymore. Behaviour est indénombrable : pas de a.",
            },
            {
              id: "lc-e5",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "La vie devient de plus en plus chère.",
              acceptedAnswers: [
                "Life is getting more and more expensive.",
                "Life is becoming more and more expensive.",
                "Life gets more and more expensive.",
              ],
              keyChunks: ["Life", "getting|becoming|gets", "more and more expensive"],
              explanation:
                "Adjectif long : getting + more and more + adjectif. Pas de -er pour expensive.",
            },
            {
              id: "lc-e6",
              type: "traduction",
              question: "Traduis en anglais.",
              sourceText: "Il fait bien plus frais qu'il y a deux jours.",
              acceptedAnswers: [
                "It is much fresher than it was two days ago.",
                "It's much fresher than it was two days ago.",
                "It is much fresher than two days ago.",
                "It's much fresher than two days ago.",
                "It is much colder than it was two days ago.",
                "It's much colder than it was two days ago.",
              ],
              keyChunks: ["much", "fresher|colder", "than", "two days ago"],
              explanation:
                "Much + comparatif en -er (fresher) + than. Much = bien plus. Two days ago = il y a deux jours.",
            },
            {
              id: "lc-e7",
              type: "correction-erreur",
              question: "Trouve les 2 erreurs et corrige-les.",
              taggedText: "Ferris is [quiet|quite] happy [although|whereas] Jeanie is angry.",
              explanation:
                "1) quite = plutôt (quiet = calme). 2) Contraste entre deux personnes (Ferris / Jeanie) : whereas, pas although.",
            },
            {
              id: "lc-e8",
              type: "correction-erreur",
              question: "Trouve les 2 erreurs et corrige-les (le sens voulu : « actuellement »).",
              taggedText: "[Actually|At the moment], it is [more and more warm|warmer and warmer] in Paris.",
              explanation:
                "1) Actually = en fait ; actuellement = at the moment. 2) Warm est court : warmer and warmer.",
            },
            {
              id: "lc-e9",
              type: "correction-erreur",
              question: "Trouve l'erreur (1 erreur) et corrige-la.",
              taggedText: "Jeanie is the [only who|only one who] seems to see clearly.",
              explanation: "On dit the only one who (la seule qui). Il manque « one ».",
            },
            {
              id: "lc-e10",
              type: "expression-libre",
              question: "Écris une phrase avec **although** à propos de Ferris ou de Cameron.",
              requiredWords: ["although", "Ferris|Cameron"],
              minWords: 8,
              modelAnswer: "Cameron says he is dying although he is not really sick.",
              explanation:
                "Although + fait surprenant (sujet + verbe). Ex : Ferris stays in bed although he is not ill.",
            },
            {
              id: "lc-e11",
              type: "expression-libre",
              question:
                "Compare-toi à un frère, une sœur ou un ami avec **whereas** (un goût, une habitude…).",
              requiredWords: ["whereas", "I"],
              minWords: 8,
              modelAnswer: "My brother loves football whereas I prefer reading.",
              explanation:
                "Whereas oppose deux personnes : My friend likes X whereas I like Y. Pense au -s à la 3e personne (likes, loves).",
            },
            {
              id: "lc-e12",
              type: "expression-libre",
              question:
                "Écris un mini bulletin météo (1 ou 2 phrases) avec un comparatif (colder, sunnier, more… than). Utilise le mot **today**.",
              requiredWords: ["today", "than|getting"],
              minWords: 8,
              modelAnswer: "Today it is sunnier than yesterday and it is getting warmer and warmer.",
              explanation:
                "Adjectif court : -er than (colder than) ; y → ier (sunnier) ; adjectif long : more … than. Pour « de plus en plus » : getting warmer and warmer.",
            },
            {
              id: "lc-e13",
              type: "etude-texte",
              question: "Lis le texte et repère le rôle de chaque mot de liaison.",
              passage:
                "Ferris pretends to be sick so that he can stay home. Jeanie is jealous because her parents are very gullible. She has to go to school whereas Ferris stays in bed, although he isn't really ill.",
              subQuestions: [
                {
                  question: "Quel mot exprime le BUT de Ferris ?",
                  options: ["so that", "because", "whereas", "although"],
                  correctAnswer: "so that",
                  explanation: "So that he can stay home = pour pouvoir rester à la maison (but).",
                },
                {
                  question: "Que exprime « because » dans la deuxième phrase ?",
                  options: ["La cause", "Le but", "L'opposition", "La concession"],
                  correctAnswer: "La cause",
                  explanation: "Because = parce que : il donne la raison de la jalousie de Jeanie.",
                },
                {
                  question: "Quel mot oppose Jeanie et Ferris ?",
                  options: ["whereas", "although", "because", "so that"],
                  correctAnswer: "whereas",
                  explanation: "Whereas = alors que : Jeanie va à l'école, Ferris reste au lit.",
                },
                {
                  question: "Quel mot introduit un fait surprenant (concession) ?",
                  options: ["although", "whereas", "because", "so that"],
                  correctAnswer: "although",
                  explanation: "Although = bien que : il reste au lit bien qu'il ne soit pas vraiment malade.",
                },
              ],
              explanation:
                "so that = but ; because = cause ; whereas = contraste entre deux personnes ; although = concession.",
            },
            {
              id: "lc-e14",
              type: "completion-tableau",
              question: "Complète le tableau (adjectif → comparatif → « de plus en plus »).",
              table: {
                headers: ["Adjectif", "Comparatif", "De plus en plus"],
                rows: [
                  [{ value: "fresh" }, { blank: true, correctAnswer: "fresher" }, { blank: true, correctAnswer: "fresher and fresher" }],
                  [{ value: "cloudy" }, { blank: true, correctAnswer: "cloudier" }, { value: "cloudier and cloudier" }],
                  [{ value: "big" }, { value: "bigger" }, { blank: true, correctAnswer: "bigger and bigger" }],
                  [{ value: "expensive" }, { blank: true, correctAnswer: "more expensive" }, { blank: true, correctAnswer: "more and more expensive" }],
                  [{ value: "good" }, { blank: true, correctAnswer: "better" }, { blank: true, correctAnswer: "better and better" }],
                ],
              },
              explanation:
                "Court : -er (consonne doublée : big → bigger ; y → ier : cloudy → cloudier). Long : more / more and more. Irrégulier : good → better.",
            },
            {
              id: "lc-e15",
              type: "construire-phrase",
              question: "Construis la phrase.",
              sourceText: "Cameron est celui qui a vraiment besoin d'un jour de congé.",
              tiles: [
                "Cameron", "is", "the", "one", "who", "really", "needs", "a", "day", "off", "which", "need", "an",
              ],
              correctAnswer: ["Cameron", "is", "the", "one", "who", "really", "needs", "a", "day", "off"],
              explanation:
                "the one who = celui qui (personne). Le verbe qui suit s'accorde avec Cameron : needs. Really se place avant le verbe.",
            },
            {
              id: "lc-e16",
              type: "construire-phrase",
              question: "Construis la phrase.",
              sourceText: "Ferris ment afin de sécher les cours.",
              tiles: ["Ferris", "lies", "in", "order", "to", "skip", "class", "other", "skipping", "so", "that"],
              correctAnswer: ["Ferris", "lies", "in", "order", "to", "skip", "class"],
              explanation:
                "But : in order to + verbe à l'infinitif (skip). Pas de -ing, et order (pas other).",
            },
            {
              id: "lc-e17",
              type: "qcm-multiple",
              question: "Quelles phrases sont correctes ?",
              options: [
                "It's getting colder and colder.",
                "It's getting more and more cold.",
                "Life is getting more and more expensive.",
                "Life is getting expensiver and expensiver.",
              ],
              correctAnswer: [
                "It's getting colder and colder.",
                "Life is getting more and more expensive.",
              ],
              explanation:
                "Adjectif court : colder and colder. Adjectif long : more and more expensive. Les mélanges (more … cold, expensiver) sont faux.",
            },
            {
              id: "lc-e18",
              type: "texte-a-trous-select",
              question: "Cameron is ___ tired ___ Ferris is full of energy.",
              options: ["quite", "quiet", "although", "whereas", "because"],
              correctAnswer: ["quite", "whereas"],
              explanation:
                "1) quite = plutôt (quiet = calme). 2) Contraste Cameron / Ferris : whereas.",
            },
            {
              id: "lc-e19",
              type: "intrus",
              question: "Quel mot n'exprime PAS l'opposition ?",
              options: ["however", "nevertheless", "indeed", "yet"],
              correctAnswer: "indeed",
              explanation:
                "Indeed = en effet (il confirme). However, nevertheless et yet (en début de phrase) = pourtant, cependant.",
            },
            {
              id: "lc-e20",
              type: "association",
              question: "Associe chaque mot français à son équivalent anglais.",
              pairs: [
                { left: "actuellement", right: "at the moment" },
                { left: "en fait", right: "actually" },
                { left: "en effet", right: "indeed" },
                { left: "ne … plus", right: "not … anymore" },
                { left: "pas encore", right: "not … yet" },
              ],
              options: ["at the moment", "actually", "indeed", "not … anymore", "not … yet"],
              correctAnswer: ["at the moment", "actually", "indeed", "not … anymore", "not … yet"],
              explanation:
                "actuellement = at the moment ; en fait = actually ; en effet = indeed ; ne … plus = not … anymore ; pas encore = not … yet.",
            },
          ],
        },
      ],
    },
  },
];
