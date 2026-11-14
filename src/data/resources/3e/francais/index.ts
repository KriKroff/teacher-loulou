import type { Resource } from "@/types";

const CHAPTER = "Chapitre 1 — Cri de liberté, résister à l'oppression";
const CHAPTER_GR1 = "Grammaire — GR 1 : Les classes grammaticales et les sens d'un mot";
const CHAPTER_EDL = "Étude de la langue — Objectif contrôle (CONJ 1, exercices p. 328)";
const CHAPTER_LEX2 = "Lexique — LEX 2 : Les figures de style";

// Option lists shared by the "nature-mots" questions of the GR 1 quiz
const CLASSES_SIMPLES = [
  "Nom commun",
  "Nom propre",
  "Déterminant",
  "Pronom",
  "Adjectif qualificatif",
  "Verbe",
  "Adverbe",
  "Préposition",
  "Conjonction de coordination",
  "Conjonction de subordination",
];

const CLASSES_FINES = [
  "Article défini",
  "Déterminant possessif",
  "Déterminant démonstratif",
  "Déterminant indéfini",
  "Pronom personnel",
  "Pronom relatif",
  "Pronom indéfini",
  "Pronom démonstratif",
  "Adjectif qualificatif",
  "Adverbe",
  "Préposition",
  "Conjonction de coordination",
  "Conjonction de subordination",
];

export const resources: Resource[] = [
  {
    slug: "francais-dernier-jour-condamne-fiche",
    title: "Le Dernier Jour d'un condamné — Victor Hugo",
    description: "Séance 1 — L'homme captif : vocabulaire de l'oppression, captivité mentale, procédés de Hugo, synthèse du cours et sujet de rédaction.",
    type: "fiche",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER,
    createdAt: "2026-10-10T10:00:00Z",
    updatedAt: "2026-10-11T10:00:00Z",
    tags: [
      "hugo",
      "peine de mort",
      "captivité",
      "oppression",
      "figures de style",
      "fiche"
    ],
    relatedResourceSlug: "francais-dernier-jour-condamne-quiz",
    mdxPath: "3e/francais/fiches/francais-dernier-jour-condamne-fiche.mdx"
  },
  {
    slug: "francais-dernier-jour-condamne-quiz",
    title: "Quiz — Le Dernier Jour d'un condamné",
    description: "Teste-toi sur le vocabulaire, les idées et les procédés du texte de Hugo vus en classe.",
    type: "quiz",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER,
    createdAt: "2026-10-10T10:05:00Z",
    updatedAt: "2026-10-11T10:05:00Z",
    tags: [
      "hugo",
      "peine de mort",
      "captivité",
      "quiz"
    ],
    relatedResourceSlug: "francais-dernier-jour-condamne-fiche",
    quizData: {
      title: "Le Dernier Jour d'un condamné",
      description: "Choisis ton niveau : commence par 🟢 puis monte jusqu'à 🔴 !",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Le vocabulaire et les idées du texte.",
          questions: [
            {
              id: "hugo-f1",
              type: "qcm",
              question: "Qui a écrit « Le Dernier Jour d'un condamné » ?",
              options: [
                "Jean Anouilh",
                "René Depestre",
                "Victor Hugo",
                "Émile Zola"
              ],
              correctAnswer: "Victor Hugo",
              explanation: "Victor Hugo a écrit ce roman en 1829."
            },
            {
              id: "hugo-f2",
              type: "qcm",
              question: "En quelle année la peine de mort a-t-elle été abolie en France ?",
              options: [
                "1981",
                "1829",
                "1945",
                "1968"
              ],
              correctAnswer: "1981",
              explanation: "1981 : abolition de la peine de mort en France. C'est la date notée au début de la séance."
            },
            {
              id: "hugo-f3",
              type: "qcm",
              question: "Que veut dire « captif » ?",
              options: [
                "Malade, très fatigué",
                "Coupable, jugé",
                "Seul, abandonné",
                "Prisonnier, enfermé"
              ],
              correctAnswer: "Prisonnier, enfermé",
              explanation: "Captif = prisonnier, enfermé."
            },
            {
              id: "hugo-f4",
              type: "qcm",
              question: "Que veut dire « hideux » ?",
              options: [
                "D'une beauté étonnante",
                "D'une laideur effrayante",
                "D'une tristesse profonde",
                "D'une taille immense"
              ],
              correctAnswer: "D'une laideur effrayante",
              explanation: "Hideux, hideuse = dont la laideur est effrayante."
            },
            {
              id: "hugo-f5",
              type: "qcm",
              question: "Que veut dire « implacable » ?",
              options: [
                "Qu'on ne peut pas trouver",
                "Qu'on ne peut pas apaiser",
                "Qu'on ne peut pas porter",
                "Qu'on ne peut pas oublier"
              ],
              correctAnswer: "Qu'on ne peut pas apaiser",
              explanation: "Im- (ne pas) + plac (apaiser) + -able (qu'on peut) : qu'on ne peut pas apaiser."
            },
            {
              id: "hugo-f6",
              type: "association",
              question: "Associe chaque mot à son sens.",
              pairs: [
                {
                  left: "une oppression",
                  right: "Le fait d'enlever la liberté"
                },
                {
                  left: "oppresser",
                  right: "Écraser physiquement"
                },
                {
                  left: "opprimer",
                  right: "Écraser moralement, politiquement"
                }
              ],
              options: [
                "Le fait d'enlever la liberté",
                "Écraser physiquement",
                "Écraser moralement, politiquement"
              ],
              correctAnswer: [
                "Le fait d'enlever la liberté",
                "Écraser physiquement",
                "Écraser moralement, politiquement"
              ],
              explanation: "1 nom et 2 verbes : oppresser = physique, opprimer = moral et politique."
            },
            {
              id: "hugo-f7",
              type: "vrai-faux",
              question: "Le roman est le journal d'un homme condamné à mort, écrit à la 1re personne (« je »).",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Le condamné raconte lui-même ce qu'il vit et ce qu'il ressent."
            },
            {
              id: "hugo-f8",
              type: "texte-a-trous",
              question: "« Mon corps est aux fers dans un cachot, mon esprit est ___ dans une idée. »",
              options: [
                "en voyage",
                "en colère",
                "en sécurité",
                "en prison"
              ],
              correctAnswer: "en prison",
              explanation: "« mon esprit est en prison dans une idée » : c'est la captivité mentale."
            },
            {
              id: "hugo-f9",
              type: "qcm",
              question: "Quelle idée envahit l'esprit du personnage ?",
              options: [
                "Il va mourir",
                "Il va guérir",
                "Il va partir",
                "Il va gagner"
              ],
              correctAnswer: "Il va mourir",
              explanation: "Une seule idée l'obsède : il est condamné à mort."
            },
            {
              id: "hugo-f10",
              type: "vrai-faux",
              question: "Dans le texte, le personnage peut agir librement.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Faux",
              explanation: "Il ne vit plus que dans ses pensées : il ne peut pas agir."
            },
            {
              id: "hugo-f11",
              type: "qcm",
              question: "Que ressent le lecteur pour le personnage ?",
              options: [
                "De la colère",
                "De la jalousie",
                "De la pitié",
                "De l'ennui"
              ],
              correctAnswer: "De la pitié",
              explanation: "On a accès à ses ressentis : on a pitié de lui."
            },
            {
              id: "hugo-f12",
              type: "vrai-faux",
              question: "« horrible », « sanglante », « implacable » sont des adjectifs péjoratifs (négatifs).",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Ces adjectifs donnent une image très négative de l'idée de la mort."
            },
            {
              id: "hugo-f13",
              type: "intrus",
              question: "Trouve l'intrus : quel mot n'est PAS de la même famille que « captif » ?",
              options: [
                "capturer",
                "captiver",
                "cadeau",
                "captivante"
              ],
              correctAnswer: "cadeau",
              explanation: "Capturer, captiver, captivante viennent du même mot latin que captif (saisir, prendre)."
            },
            {
              id: "hugo-f14",
              type: "qcm",
              question: "Quel est l'objectif de la séance 1 ?",
              options: [
                "Comprendre la captivité mentale",
                "Comprendre la vie en prison",
                "Comprendre le rôle des juges",
                "Comprendre la vie de Hugo"
              ],
              correctAnswer: "Comprendre la captivité mentale",
              explanation: "Objectif : comprendre ce que peut être une captivité mentale et le besoin de se libérer."
            },
            {
              id: "hugo-f15",
              type: "vrai-faux",
              question: "« Oppresser » veut dire écraser moralement ou politiquement.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Faux",
              explanation: "Oppresser = physique. C'est « opprimer » qui veut dire moral, politique."
            },
            {
              id: "hugo-f16",
              type: "qcm",
              question: "Quel mot complète la question du chapitre : « Comment les écrivains expriment-ils le désir de ___ face à l'oppression ? »",
              options: [
                "richesse",
                "vengeance",
                "voyage",
                "liberté"
              ],
              correctAnswer: "liberté",
              explanation: "Le chapitre s'appelle « Cri de liberté, résister à l'oppression »."
            }
          ]
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Les figures de style et les procédés.",
          questions: [
            {
              id: "hugo-i1",
              type: "qcm",
              question: "« comme un spectre de plomb » : quelle figure de style ?",
              options: [
                "Une métaphore",
                "Une comparaison",
                "Une personnification",
                "Une répétition"
              ],
              correctAnswer: "Une comparaison",
              explanation: "Il y a le mot de comparaison « comme ».",
              hint: "Cherche le petit mot-outil."
            },
            {
              id: "hugo-i2",
              type: "qcm",
              question: "« mon esprit est en prison dans une idée » : quelle figure de style ?",
              options: [
                "Une comparaison",
                "Une métaphore",
                "Une énumération",
                "Une répétition"
              ],
              correctAnswer: "Une métaphore",
              explanation: "Pas de mot de comparaison : l'esprit est directement présenté comme un prisonnier."
            },
            {
              id: "hugo-i3",
              type: "qcm-multiple",
              question: "D'après le cours, que montre le mot « spectre » (fantôme) ? (2 réponses)",
              options: [
                "L'idée se glisse partout",
                "L'idée est omniprésente",
                "L'idée est très joyeuse",
                "L'idée disparaît vite"
              ],
              correctAnswer: [
                "L'idée se glisse partout",
                "L'idée est omniprésente"
              ],
              explanation: "Comme un fantôme, l'idée est légère, se glisse partout et reste présente tout le temps."
            },
            {
              id: "hugo-i4",
              type: "association",
              question: "Associe chaque morceau du mot « implacable » à son sens.",
              pairs: [
                {
                  left: "im-",
                  right: "ne pas"
                },
                {
                  left: "plac",
                  right: "apaiser"
                },
                {
                  left: "-able",
                  right: "qu'on peut"
                }
              ],
              options: [
                "ne pas",
                "apaiser",
                "qu'on peut"
              ],
              correctAnswer: [
                "ne pas",
                "apaiser",
                "qu'on peut"
              ],
              explanation: "Préfixe im- (ne pas) + radical plac (apaiser) + suffixe -able (qu'on peut)."
            },
            {
              id: "hugo-i5",
              type: "texte-a-trous-select",
              question: "« Mon ___ est aux fers dans un cachot, mon ___ est en prison dans une idée. »",
              options: [
                "corps",
                "esprit",
                "bras",
                "pied"
              ],
              correctAnswer: [
                "corps",
                "esprit"
              ],
              explanation: "Double captivité : le corps (prison physique) et l'esprit (prison mentale)."
            },
            {
              id: "hugo-i6",
              type: "qcm",
              question: "La pensée le secoue « de ses deux mains de glace ». Quelle figure de style ?",
              options: [
                "Une comparaison",
                "Une énumération",
                "Une hyperbole",
                "Une personnification"
              ],
              correctAnswer: "Une personnification",
              explanation: "La pensée a des mains, comme une personne."
            },
            {
              id: "hugo-i7",
              type: "qcm",
              question: "« toujours seul avec elle, toujours glacé [...], toujours courbé [...] » : quel procédé ?",
              options: [
                "Une répétition",
                "Une comparaison",
                "Une personnification",
                "Une métaphore"
              ],
              correctAnswer: "Une répétition",
              explanation: "« toujours » est répété : cela submerge le lecteur, comme l'idée submerge le condamné."
            },
            {
              id: "hugo-i8",
              type: "qcm",
              question: "Que permet le point de vue interne ?",
              options: [
                "De connaître l'avis du juge",
                "De voir la scène de très loin",
                "D'avoir accès à ses ressentis",
                "De savoir la fin à l'avance"
              ],
              correctAnswer: "D'avoir accès à ses ressentis",
              explanation: "On est dans la tête du personnage : on connaît ce qu'il ressent."
            },
            {
              id: "hugo-i9",
              type: "qcm",
              question: "Quel temps Hugo utilise-t-il pour plonger le lecteur dans la situation ?",
              options: [
                "Le futur",
                "Le passé simple",
                "Le présent",
                "Le conditionnel"
              ],
              correctAnswer: "Le présent",
              explanation: "« je suis captif » : le présent fait vivre la scène en même temps que lui."
            },
            {
              id: "hugo-i10",
              type: "vrai-faux",
              question: "Le souvenir des moments joyeux du passé rend l'enfermement encore plus pénible.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "« Autrefois [...] j'étais un homme comme un autre homme » : le contraste accentue la pénibilité."
            },
            {
              id: "hugo-i11",
              type: "tri-categories",
              question: "Classe chaque élément : prison du corps ou prison de l'esprit ?",
              items: [
                {
                  id: "hugo-i11-1",
                  label: "« aux fers »"
                },
                {
                  id: "hugo-i11-3",
                  label: "« en prison dans une idée »"
                },
                {
                  id: "hugo-i11-2",
                  label: "« dans un cachot »"
                },
                {
                  id: "hugo-i11-4",
                  label: "Il ne pense qu'à sa mort"
                }
              ],
              categories: [
                {
                  id: "corps",
                  label: "🔒 Prison du corps",
                  correctItemIds: [
                    "hugo-i11-1",
                    "hugo-i11-2"
                  ]
                },
                {
                  id: "esprit",
                  label: "🧠 Prison de l'esprit",
                  correctItemIds: [
                    "hugo-i11-3",
                    "hugo-i11-4"
                  ]
                }
              ],
              correctAnswer: "tri-categories",
              explanation: "Le condamné subit une double captivité : physique et mentale."
            },
            {
              id: "hugo-i12",
              type: "texte-a-trous",
              question: "« La fumée de l'incendie m'___ : j'ai du mal à respirer. »",
              options: [
                "oppresse",
                "opprime",
                "oppose",
                "opère"
              ],
              correctAnswer: "oppresse",
              explanation: "Une gêne physique : c'est oppresser."
            },
            {
              id: "hugo-i13",
              type: "texte-a-trous",
              question: "« Le tyran ___ son peuple : il lui retire ses libertés. »",
              options: [
                "oppresse",
                "oppose",
                "opère",
                "opprime"
              ],
              correctAnswer: "opprime",
              explanation: "Écraser moralement ou politiquement : c'est opprimer."
            },
            {
              id: "hugo-i14",
              type: "qcm",
              question: "Pourquoi le personnage ne peut-il pas agir ?",
              options: [
                "Il dort pendant toute la journée",
                "Il ne vit que dans ses pensées",
                "Il attend la visite de sa famille",
                "Il écrit une lettre à son juge"
              ],
              correctAnswer: "Il ne vit que dans ses pensées",
              explanation: "L'idée de la mort envahit son esprit : il ne vit plus que dans ses pensées."
            },
            {
              id: "hugo-i15",
              type: "vrai-faux",
              question: "Les adjectifs « horrible, sanglante, implacable » forment un lexique hyperbolique (exagéré).",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Ils montrent la situation extrême du prisonnier."
            },
            {
              id: "hugo-i16",
              type: "intrus",
              question: "Trouve l'intrus : lequel n'est PAS un procédé étudié dans le texte de Hugo ?",
              options: [
                "la comparaison",
                "la didascalie",
                "la répétition",
                "la métaphore"
              ],
              correctAnswer: "la didascalie",
              explanation: "La didascalie appartient au théâtre (séance sur Antigone)."
            }
          ]
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "La synthèse et la rédaction.",
          questions: [
            {
              id: "hugo-e1",
              type: "association",
              question: "Associe chaque procédé à son effet (synthèse du cours).",
              pairs: [
                {
                  left: "Lexique hyperbolique",
                  right: "Montre la situation extrême"
                },
                {
                  left: "Métaphore, personnification",
                  right: "Aide à imaginer la situation"
                },
                {
                  left: "Énumération, répétition",
                  right: "Submerge le lecteur"
                },
                {
                  left: "Souvenirs du passé",
                  right: "Rend l'enfermement plus pénible"
                }
              ],
              options: [
                "Montre la situation extrême",
                "Aide à imaginer la situation",
                "Submerge le lecteur",
                "Rend l'enfermement plus pénible"
              ],
              correctAnswer: [
                "Montre la situation extrême",
                "Aide à imaginer la situation",
                "Submerge le lecteur",
                "Rend l'enfermement plus pénible"
              ],
              explanation: "C'est la synthèse : comment Hugo exprime la cruauté de la captivité mentale."
            },
            {
              id: "hugo-e2",
              type: "texte-a-trous-select",
              question: "« Ce texte montre les effets ___ de la contrainte. Face à la privation de liberté, il est nécessaire d'___. »",
              options: [
                "insupportables",
                "agir",
                "agréables",
                "attendre"
              ],
              correctAnswer: [
                "insupportables",
                "agir"
              ],
              explanation: "Conclusion du cours : la contrainte rend passif, il faut agir et se rebeller."
            },
            {
              id: "hugo-e3",
              type: "qcm",
              question: "Quelle phrase analyse correctement un procédé ?",
              options: [
                "« en prison dans une idée » : cette métaphore est une très jolie phrase du texte.",
                "« en prison dans une idée » : cette phrase se trouve au début de l'extrait étudié.",
                "« en prison dans une idée » : cette métaphore contient en tout six mots différents.",
                "« en prison dans une idée » : cette métaphore montre que son esprit est enfermé."
              ],
              correctAnswer: "« en prison dans une idée » : cette métaphore montre que son esprit est enfermé.",
              explanation: "Une bonne analyse donne la citation, le procédé ET son effet."
            },
            {
              id: "hugo-e4",
              type: "qcm",
              question: "Pourquoi le personnage devient-il passif ?",
              options: [
                "La contrainte l'empêche d'agir",
                "Il a décidé de se reposer",
                "Il est d'accord avec sa peine",
                "Il n'a plus envie de vivre"
              ],
              correctAnswer: "La contrainte l'empêche d'agir",
              explanation: "Le texte montre les effets insupportables de la contrainte, qui ramène le prisonnier à la passivité."
            },
            {
              id: "hugo-e5",
              type: "qcm-multiple",
              question: "Quels procédés Hugo utilise-t-il pour plonger le lecteur dans la situation ? (2 réponses)",
              options: [
                "Le point de vue interne",
                "Le présent",
                "Les didascalies",
                "Le dialogue"
              ],
              correctAnswer: [
                "Le point de vue interne",
                "Le présent"
              ],
              explanation: "Point de vue interne + présent : le lecteur vit la scène avec le personnage."
            },
            {
              id: "hugo-e6",
              type: "qcm",
              question: "Qu'est-ce qu'une captivité mentale ?",
              options: [
                "Être prisonnier d'un cachot",
                "Être prisonnier d'un pays",
                "Être prisonnier d'une pensée",
                "Être prisonnier d'un rêve"
              ],
              correctAnswer: "Être prisonnier d'une pensée",
              explanation: "L'esprit est « en prison dans une idée » : il ne peut penser à rien d'autre."
            },
            {
              id: "hugo-e7",
              type: "texte-a-trous",
              question: "« Il est insupportable pour l'homme de ne plus être ___ de son destin. »",
              options: [
                "témoin",
                "voisin",
                "maître",
                "lecteur"
              ],
              correctAnswer: "maître",
              explanation: "Être maître de son destin = décider de sa vie. Le condamné a perdu ce pouvoir."
            },
            {
              id: "hugo-e8",
              type: "ordre",
              question: "Remets dans l'ordre les phrases de ce paragraphe (méthode I-C-A-C).",
              options: [
                "Hugo montre que l'esprit du condamné est enfermé.",
                "Il écrit : « mon esprit est en prison dans une idée ».",
                "Cette métaphore aide à imaginer une prison dont on ne sort pas.",
                "Ainsi, Hugo fait ressentir la cruauté de la captivité mentale."
              ],
              correctAnswer: [
                "Hugo montre que l'esprit du condamné est enfermé.",
                "Il écrit : « mon esprit est en prison dans une idée ».",
                "Cette métaphore aide à imaginer une prison dont on ne sort pas.",
                "Ainsi, Hugo fait ressentir la cruauté de la captivité mentale."
              ],
              explanation: "Idée → Citation → Analyse → Conclusion."
            },
            {
              id: "hugo-e9",
              type: "qcm",
              question: "Que montre l'adjectif « implacable » à propos de l'idée de la mort ?",
              options: [
                "Rien ne peut la calmer",
                "Elle passe très vite",
                "Elle le rend joyeux",
                "Elle vient la nuit"
              ],
              correctAnswer: "Rien ne peut la calmer",
              explanation: "Implacable = qu'on ne peut pas apaiser : l'idée l'obsède."
            },
            {
              id: "hugo-e10",
              type: "vrai-faux",
              question: "Dans la synthèse du cours, les figures de style permettent au lecteur de mieux imaginer et comprendre la situation.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "La métaphore et la personnification rendent la souffrance concrète."
            },
            {
              id: "hugo-e11",
              type: "qcm",
              question: "Quel est le lien entre ce texte et la question du chapitre ?",
              options: [
                "Il raconte une évasion réussie",
                "Il décrit un procès en détail",
                "Il explique les lois de France",
                "Il montre le besoin de se libérer"
              ],
              correctAnswer: "Il montre le besoin de se libérer",
              explanation: "La captivité est insupportable : elle fait naître le désir de liberté."
            },
            {
              id: "hugo-e12",
              type: "tri-categories",
              question: "Classe chaque citation selon le procédé.",
              items: [
                {
                  id: "hugo-e12-1",
                  label: "« comme un spectre de plomb »"
                },
                {
                  id: "hugo-e12-3",
                  label: "« ses deux mains de glace »"
                },
                {
                  id: "hugo-e12-2",
                  label: "« en prison dans une idée »"
                },
                {
                  id: "hugo-e12-4",
                  label: "« toujours… toujours… toujours »"
                }
              ],
              categories: [
                {
                  id: "comp",
                  label: "Comparaison",
                  correctItemIds: [
                    "hugo-e12-1"
                  ]
                },
                {
                  id: "meta",
                  label: "Métaphore",
                  correctItemIds: [
                    "hugo-e12-2"
                  ]
                },
                {
                  id: "perso",
                  label: "Personnification",
                  correctItemIds: [
                    "hugo-e12-3"
                  ]
                },
                {
                  id: "rep",
                  label: "Répétition",
                  correctItemIds: [
                    "hugo-e12-4"
                  ]
                }
              ],
              correctAnswer: "tri-categories",
              explanation: "Comparaison : « comme ». Métaphore : sans outil. Personnification : la pensée a des mains. Répétition : un mot redit."
            },
            {
              id: "hugo-e13",
              type: "qcm",
              question: "Pourquoi le lecteur a-t-il pitié du personnage ?",
              options: [
                "Il connaît son crime en détail",
                "Il partage ses peurs de l'intérieur",
                "Il le voit souffrir dans un film",
                "Il lit l'avis des autres gardiens"
              ],
              correctAnswer: "Il partage ses peurs de l'intérieur",
              explanation: "Grâce au point de vue interne, on a accès à ses ressentis."
            },
            {
              id: "hugo-e14",
              type: "intrus",
              question: "Trouve l'intrus : quel adjectif n'est PAS péjoratif ?",
              options: [
                "horrible",
                "radieuse",
                "sanglante",
                "implacable"
              ],
              correctAnswer: "radieuse",
              explanation: "Radieuse est positif. Les trois autres viennent du texte et sont négatifs."
            },
            {
              id: "hugo-e15",
              type: "qcm",
              question: "Quel est le meilleur sujet de rédaction pour cette séance ?",
              options: [
                "Comment Hugo décrit-il la vie quotidienne dans les prisons ?",
                "Comment Hugo raconte-t-il le procès du condamné à mort ?",
                "Comment Hugo explique-t-il la loi qui abolit la peine de mort ?",
                "Comment Hugo exprime-t-il la cruauté de la captivité mentale ?"
              ],
              correctAnswer: "Comment Hugo exprime-t-il la cruauté de la captivité mentale ?",
              explanation: "C'est la question de la synthèse du cours."
            },
            {
              id: "hugo-e16",
              type: "vrai-faux",
              question: "D'après le cours, Hugo veut aussi montrer qu'il faut agir face à la privation de liberté.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Face à la privation de liberté, il est nécessaire d'agir, de se rebeller."
            }
          ]
        }
      ]
    }
  },
  {
    slug: "francais-antigone-anouilh-fiche",
    title: "Antigone — Jean Anouilh",
    description: "Séance 2 — La confrontation entre l'individu et le pouvoir : la scène vue en classe, puis un rappel de toute la pièce. Avec sujet de rédaction.",
    type: "fiche",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER,
    createdAt: "2026-10-10T11:00:00Z",
    updatedAt: "2026-10-11T10:00:00Z",
    tags: [
      "antigone",
      "anouilh",
      "théâtre",
      "conflit",
      "fiche"
    ],
    relatedResourceSlug: "francais-antigone-anouilh-quiz",
    mdxPath: "3e/francais/fiches/francais-antigone-anouilh-fiche.mdx"
  },
  {
    slug: "francais-antigone-anouilh-quiz",
    title: "Quiz — Antigone d'Anouilh",
    description: "Teste-toi sur la scène Antigone / Créon vue en classe et sur le rappel de la pièce.",
    type: "quiz",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER,
    createdAt: "2026-10-10T11:05:00Z",
    updatedAt: "2026-10-11T10:05:00Z",
    tags: [
      "antigone",
      "anouilh",
      "théâtre",
      "quiz"
    ],
    relatedResourceSlug: "francais-antigone-anouilh-fiche",
    quizData: {
      title: "Antigone de Jean Anouilh",
      description: "Choisis ton niveau : commence par 🟢 puis monte jusqu'à 🔴 !",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Les personnages et le conflit.",
          questions: [
            {
              id: "anti-f1",
              type: "qcm",
              question: "Qui a écrit la pièce « Antigone » étudiée en classe ?",
              options: [
                "Jean Anouilh",
                "Victor Hugo",
                "René Depestre",
                "Molière"
              ],
              correctAnswer: "Jean Anouilh",
              explanation: "Jean Anouilh. La pièce est jouée en 1944."
            },
            {
              id: "anti-f2",
              type: "qcm",
              question: "Qui est Créon ?",
              options: [
                "Le frère d'Antigone",
                "Le père d'Antigone",
                "Le roi, oncle d'Antigone",
                "Le garde d'Antigone"
              ],
              correctAnswer: "Le roi, oncle d'Antigone",
              explanation: "Créon, roi de Thèbes, est le frère de Jocaste : c'est l'oncle d'Antigone."
            },
            {
              id: "anti-f3",
              type: "qcm",
              question: "Qui est Hémon ?",
              options: [
                "Le frère d'Antigone",
                "Le garde de Créon",
                "Le fiancé d'Antigone",
                "Le père de Créon"
              ],
              correctAnswer: "Le fiancé d'Antigone",
              explanation: "Hémon est le fils de Créon et le fiancé d'Antigone."
            },
            {
              id: "anti-f4",
              type: "vrai-faux",
              question: "Créon interdit d'enterrer Polynice.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Créon donne une tombe à Étéocle, mais pas à Polynice."
            },
            {
              id: "anti-f5",
              type: "vrai-faux",
              question: "Antigone obéit à Créon.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Faux",
              explanation: "Antigone désobéit : elle refuse le compromis."
            },
            {
              id: "anti-f6",
              type: "qcm",
              question: "Quel est l'objectif de la séance ?",
              options: [
                "Repérer les procédés du conflit",
                "Repérer les rimes d'un poème",
                "Repérer le décor d'une pièce",
                "Repérer les dates d'une vie"
              ],
              correctAnswer: "Repérer les procédés du conflit",
              explanation: "Objectif : repérer les procédés d'écriture du conflit dans un dialogue de théâtre."
            },
            {
              id: "anti-f7",
              type: "qcm",
              question: "Qu'est-ce qu'une didascalie ?",
              options: [
                "Une réplique très longue",
                "Un personnage du chœur",
                "Un décor peint à la main",
                "Une indication de l'auteur"
              ],
              correctAnswer: "Une indication de l'auteur",
              explanation: "Elle est en italique et n'est pas dite par les acteurs."
            },
            {
              id: "anti-f8",
              type: "vrai-faux",
              question: "Créon tutoie Antigone, et Antigone vouvoie Créon.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Il prend plus de liberté avec elle : il la domine."
            },
            {
              id: "anti-f9",
              type: "qcm",
              question: "Face à Créon, comment est Antigone ?",
              options: [
                "Violente",
                "Calme",
                "Joyeuse",
                "Peureuse"
              ],
              correctAnswer: "Calme",
              explanation: "Antigone est calme ; c'est Créon qui est violent."
            },
            {
              id: "anti-f10",
              type: "qcm",
              question: "Que défend Antigone ?",
              options: [
                "L'ordre du royaume",
                "L'intérêt familial",
                "La loi de Créon",
                "Le droit des gardes"
              ],
              correctAnswer: "L'intérêt familial",
              explanation: "Elle veut enterrer son frère : elle défend sa famille."
            },
            {
              id: "anti-f11",
              type: "qcm",
              question: "Que défend Créon ?",
              options: [
                "L'intérêt familial",
                "La liberté de tous",
                "Le repos des morts",
                "L'ordre du royaume"
              ],
              correctAnswer: "L'ordre du royaume",
              explanation: "Créon = la responsabilité du royaume et l'ordre à maintenir."
            },
            {
              id: "anti-f12",
              type: "texte-a-trous",
              question: "Antigone refuse le ___ : elle ne veut rien céder.",
              options: [
                "compromis",
                "combat",
                "mariage",
                "silence"
              ],
              correctAnswer: "compromis",
              explanation: "Un compromis = un accord où chacun renonce à une partie de ce qu'il veut."
            },
            {
              id: "anti-f13",
              type: "vrai-faux",
              question: "Antigone et Créon sont têtus : ils ne veulent pas s'écouter.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "C'est ce qu'on retient de la scène."
            },
            {
              id: "anti-f14",
              type: "qcm",
              question: "Que dit Antigone pour montrer qu'elle est plus puissante que Créon ?",
              options: [
                "« moi je suis libre »",
                "« moi je suis forte »",
                "« moi je suis reine »",
                "« moi je suis seule »"
              ],
              correctAnswer: "« moi je suis reine »",
              explanation: "« moi je suis reine » : elle se sent plus puissante car elle respecte ses valeurs."
            },
            {
              id: "anti-f15",
              type: "association",
              question: "Associe chaque personnage à son rôle.",
              pairs: [
                {
                  left: "Antigone",
                  right: "Elle dit non"
                },
                {
                  left: "Créon",
                  right: "Le roi"
                },
                {
                  left: "Ismène",
                  right: "La sœur prudente"
                },
                {
                  left: "Hémon",
                  right: "Le fiancé"
                }
              ],
              options: [
                "Elle dit non",
                "Le roi",
                "La sœur prudente",
                "Le fiancé"
              ],
              correctAnswer: [
                "Elle dit non",
                "Le roi",
                "La sœur prudente",
                "Le fiancé"
              ],
              explanation: "Revois l'arbre généalogique et la liste des personnages."
            },
            {
              id: "anti-f16",
              type: "vrai-faux",
              question: "Antigone essaie de convaincre Créon.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Faux",
              explanation: "Elle n'essaie pas : elle est sûre d'elle."
            },
            {
              id: "anti-f17",
              type: "qcm",
              question: "Qui annonce la mort d'Antigone, d'Hémon et d'Eurydice ?",
              options: [
                "Le Prologue",
                "La Nourrice",
                "Le Messager",
                "Ismène"
              ],
              correctAnswer: "Le Messager",
              explanation: "Partie B : le Messager annonce les morts."
            },
            {
              id: "anti-f18",
              type: "vrai-faux",
              question: "À la fin, Créon se retrouve seul.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Partie B : il a perdu sa nièce, son fils et sa femme."
            }
          ]
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "La détermination d'Antigone et la domination de Créon.",
          questions: [
            {
              id: "anti-i1",
              type: "drag-on-image",
              question: "Place les personnages manquants sur l'arbre généalogique.",
              imageSrc: "/images/francais/antigone-genealogie-vierge.svg",
              imageAlt: "Arbre généalogique d'Antigone avec des cases vides",
              zones: [
                {
                  id: "zone-creon",
                  x: 86.2,
                  y: 14,
                  correctLabel: "Créon"
                },
                {
                  id: "zone-oedipe",
                  x: 27.5,
                  y: 43,
                  correctLabel: "Œdipe"
                },
                {
                  id: "zone-hemon",
                  x: 86.2,
                  y: 43,
                  correctLabel: "Hémon"
                },
                {
                  id: "zone-antigone",
                  x: 31.9,
                  y: 73,
                  correctLabel: "Antigone"
                },
                {
                  id: "zone-polynice",
                  x: 73.1,
                  y: 73,
                  correctLabel: "Polynice"
                }
              ],
              labels: [
                "Créon",
                "Œdipe",
                "Hémon",
                "Antigone",
                "Polynice",
                "Eurydice"
              ],
              correctAnswer: "drag-on-image",
              explanation: "Créon (le roi) est le père d'Hémon. Œdipe est le père d'Ismène, Antigone, Étéocle et Polynice (privé de tombe).",
              hint: "Aide-toi des mots écrits sous les cases."
            },
            {
              id: "anti-i2",
              type: "tri-categories",
              question: "Classe chaque caractéristique : Antigone ou Créon ?",
              items: [
                {
                  id: "anti-i2-1",
                  label: "Défend sa famille"
                },
                {
                  id: "anti-i2-3",
                  label: "Refuse le compromis"
                },
                {
                  id: "anti-i2-5",
                  label: "Devient violent"
                },
                {
                  id: "anti-i2-2",
                  label: "Reste calme"
                },
                {
                  id: "anti-i2-4",
                  label: "Défend le royaume"
                },
                {
                  id: "anti-i2-6",
                  label: "Veut maintenir l'ordre"
                }
              ],
              categories: [
                {
                  id: "antigone",
                  label: "👧 Antigone",
                  correctItemIds: [
                    "anti-i2-1",
                    "anti-i2-2",
                    "anti-i2-3"
                  ]
                },
                {
                  id: "creon",
                  label: "👑 Créon",
                  correctItemIds: [
                    "anti-i2-4",
                    "anti-i2-5",
                    "anti-i2-6"
                  ]
                }
              ],
              correctAnswer: "tri-categories",
              explanation: "Chacun défend ses valeurs, argumentées et légitimes."
            },
            {
              id: "anti-i3",
              type: "qcm",
              question: "Comment se voit d'abord la détermination d'Antigone ?",
              options: [
                "Par ses points d'exclamation",
                "Par ses points de suspension",
                "Par ses longues descriptions",
                "Par ses questions à Créon"
              ],
              correctAnswer: "Par ses points d'exclamation",
              explanation: "Une multitude de points d'exclamation montre sa colère."
            },
            {
              id: "anti-i4",
              type: "qcm",
              question: "« Grossis un peu ! » est une phrase…",
              options: [
                "interrogative",
                "déclarative",
                "négative",
                "injonctive"
              ],
              correctAnswer: "injonctive",
              explanation: "C'est un ordre, à l'impératif : Créon montre son pouvoir."
            },
            {
              id: "anti-i5",
              type: "qcm",
              question: "Que montre la didascalie « il serre le bras d'Antigone » ?",
              options: [
                "Une marque de tendresse",
                "Une domination physique",
                "Une envie de danser",
                "Une peur de tomber"
              ],
              correctAnswer: "Une domination physique",
              explanation: "Créon s'en prend physiquement à Antigone."
            },
            {
              id: "anti-i6",
              type: "association",
              question: "Associe chaque domaine de domination à sa preuve.",
              pairs: [
                {
                  left: "Responsabilité",
                  right: "« rendre l'ordre de ce monde un peu moins absurde »"
                },
                {
                  left: "Parole",
                  right: "Il la tutoie, elle le vouvoie"
                },
                {
                  left: "Physique",
                  right: "« il serre le bras d'Antigone »"
                },
                {
                  left: "Statut",
                  right: "« faire un gros garçon à Hémon »"
                }
              ],
              options: [
                "« rendre l'ordre de ce monde un peu moins absurde »",
                "Il la tutoie, elle le vouvoie",
                "« il serre le bras d'Antigone »",
                "« faire un gros garçon à Hémon »"
              ],
              correctAnswer: [
                "« rendre l'ordre de ce monde un peu moins absurde »",
                "Il la tutoie, elle le vouvoie",
                "« il serre le bras d'Antigone »",
                "« faire un gros garçon à Hémon »"
              ],
              explanation: "R-P-P-S : responsabilité, parole, physique, statut."
            },
            {
              id: "anti-i7",
              type: "texte-a-trous",
              question: "« Quel jeu joues-tu ? » : Créon parle à Antigone comme à une ___.",
              options: [
                "vieille dame",
                "petite fille",
                "reine puissante",
                "ennemie"
              ],
              correctAnswer: "petite fille",
              explanation: "Il ne la prend pas au sérieux. Elle répond : « Je ne joue pas »."
            },
            {
              id: "anti-i8",
              type: "qcm",
              question: "Que fait Créon en disant qu'elle doit « faire un gros garçon à Hémon » ?",
              options: [
                "Il lui donne un rôle politique",
                "Il annonce qu'il la pardonne",
                "Il refuse qu'elle se marie",
                "Il lui retire son rôle politique"
              ],
              correctAnswer: "Il lui retire son rôle politique",
              explanation: "Il la ramène à un rôle d'épouse et de mère : c'est la domination par le statut."
            },
            {
              id: "anti-i9",
              type: "qcm",
              question: "Que montre le tutoiement de Créon ?",
              options: [
                "Il prend plus de liberté avec elle",
                "Il la respecte plus que les autres",
                "Il la connaît depuis très peu",
                "Il veut qu'elle devienne reine"
              ],
              correctAnswer: "Il prend plus de liberté avec elle",
              explanation: "Il la tutoie, elle le vouvoie : la parole montre qui domine."
            },
            {
              id: "anti-i10",
              type: "vrai-faux",
              question: "Antigone écoute les arguments de Créon et change d'avis.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Faux",
              explanation: "Elle fera ce qu'elle a à faire, malgré les interdictions."
            },
            {
              id: "anti-i11",
              type: "qcm",
              question: "Quelle est la grande question de la pièce ?",
              options: [
                "Antigone va-t-elle partir ?",
                "Antigone va-t-elle régner ?",
                "Antigone va-t-elle céder ?",
                "Antigone va-t-elle mentir ?"
              ],
              correctAnswer: "Antigone va-t-elle céder ?",
              explanation: "Antigone va-t-elle céder ou persister ? Créon va-t-il la condamner ?"
            },
            {
              id: "anti-i12",
              type: "qcm",
              question: "Pourquoi Antigone n'essaie-t-elle pas de convaincre Créon ?",
              options: [
                "Elle a peur de lui",
                "Elle est d'accord",
                "Elle est sûre d'elle",
                "Elle est trop fatiguée"
              ],
              correctAnswer: "Elle est sûre d'elle",
              explanation: "Elle est sûre d'elle, cela se voit à son calme."
            },
            {
              id: "anti-i13",
              type: "qcm-multiple",
              question: "Quels procédés montrent le conflit dans la scène ? (3 réponses)",
              options: [
                "Les points d'exclamation",
                "Les phrases injonctives",
                "Les didascalies",
                "Les rimes",
                "Les descriptions de paysage"
              ],
              correctAnswer: [
                "Les points d'exclamation",
                "Les phrases injonctives",
                "Les didascalies"
              ],
              explanation: "Ce sont les procédés repérés en classe dans le dialogue."
            },
            {
              id: "anti-i14",
              type: "qcm",
              question: "Qui a mis en scène la pièce avec Barbara Schulz et Robert Hossein ?",
              options: [
                "Nicolas Briançon",
                "Jean Anouilh",
                "Victor Hugo",
                "Robert Badinter"
              ],
              correctAnswer: "Nicolas Briançon",
              explanation: "La mise en scène de Nicolas Briançon est notée dans le cours."
            },
            {
              id: "anti-i15",
              type: "ordre",
              question: "Remets ces moments de la pièce dans l'ordre (Partie B).",
              options: [
                "Le Prologue annonce qu'Antigone va mourir",
                "Antigone est arrêtée près du corps",
                "Créon et Antigone s'affrontent",
                "Le Messager annonce les morts"
              ],
              correctAnswer: [
                "Le Prologue annonce qu'Antigone va mourir",
                "Antigone est arrêtée près du corps",
                "Créon et Antigone s'affrontent",
                "Le Messager annonce les morts"
              ],
              explanation: "Revois la frise de la Partie B."
            },
            {
              id: "anti-i16",
              type: "vrai-faux",
              question: "Dans la scène, chacun défend des valeurs argumentées et légitimes.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "C'est ce qui rend le conflit si fort."
            },
            {
              id: "anti-i17",
              type: "association",
              question: "Qui dit quoi ? (Partie B)",
              pairs: [
                {
                  left: "« Je suis là pour vous dire non et pour mourir. »",
                  right: "Antigone"
                },
                {
                  left: "« Il faut pourtant qu'il y en ait qui mènent la barque. »",
                  right: "Créon"
                },
                {
                  left: "« Et voilà. »",
                  right: "Le Chœur"
                }
              ],
              options: [
                "Antigone",
                "Créon",
                "Le Chœur"
              ],
              correctAnswer: [
                "Antigone",
                "Créon",
                "Le Chœur"
              ],
              explanation: "Les 3 répliques à reconnaître de la Partie B."
            },
            {
              id: "anti-i18",
              type: "qcm",
              question: "Que veut dire Antigone avec « moi je suis reine » ?",
              options: [
                "Elle veut prendre le trône",
                "Elle est la fille du roi",
                "Elle accepte le mariage",
                "Elle se sent plus puissante"
              ],
              correctAnswer: "Elle se sent plus puissante",
              explanation: "Elle est plus puissante que Créon, car elle fait ce qu'elle croit juste."
            }
          ]
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "La synthèse, l'analyse et la rédaction.",
          questions: [
            {
              id: "anti-e1",
              type: "texte-a-trous-select",
              question: "« Antigone refuse de se ___ aux décisions trop raisonnables des adultes. Elle refuse le ___. »",
              options: [
                "soumettre",
                "compromis",
                "révolter",
                "combat"
              ],
              correctAnswer: [
                "soumettre",
                "compromis"
              ],
              explanation: "C'est la synthèse du cours."
            },
            {
              id: "anti-e2",
              type: "qcm",
              question: "Pourquoi Antigone se sent-elle libre ?",
              options: [
                "Elle échappe à Créon",
                "Elle choisit son destin",
                "Elle devient la reine",
                "Elle quitte la ville"
              ],
              correctAnswer: "Elle choisit son destin",
              explanation: "Elle choisit son destin, quoi qu'il lui en coûte."
            },
            {
              id: "anti-e3",
              type: "tri-categories",
              question: "Classe chaque preuve dans le bon domaine de domination.",
              items: [
                {
                  id: "anti-e3-1",
                  label: "Il veut mettre de l'ordre"
                },
                {
                  id: "anti-e3-3",
                  label: "« Grossis un peu ! »"
                },
                {
                  id: "anti-e3-5",
                  label: "Elle doit être épouse et mère"
                },
                {
                  id: "anti-e3-2",
                  label: "Il la tutoie"
                },
                {
                  id: "anti-e3-4",
                  label: "Il serre son bras"
                }
              ],
              categories: [
                {
                  id: "resp",
                  label: "🏛️ Responsabilité",
                  correctItemIds: [
                    "anti-e3-1"
                  ]
                },
                {
                  id: "parole",
                  label: "🗣️ Parole",
                  correctItemIds: [
                    "anti-e3-2",
                    "anti-e3-3"
                  ]
                },
                {
                  id: "phys",
                  label: "✋ Physique",
                  correctItemIds: [
                    "anti-e3-4"
                  ]
                },
                {
                  id: "statut",
                  label: "👰 Statut",
                  correctItemIds: [
                    "anti-e3-5"
                  ]
                }
              ],
              correctAnswer: "tri-categories",
              explanation: "R-P-P-S : responsabilité, parole, physique, statut."
            },
            {
              id: "anti-e4",
              type: "qcm",
              question: "Pourquoi parle-t-on d'une « situation déséquilibrée » ?",
              options: [
                "Antigone domine Créon",
                "Créon domine de 4 façons",
                "Les deux sont d'accord",
                "Personne ne parle"
              ],
              correctAnswer: "Créon domine de 4 façons",
              explanation: "Responsabilité, parole, physique, statut : Créon a tous les pouvoirs."
            },
            {
              id: "anti-e5",
              type: "qcm",
              question: "Quelle phrase analyse correctement un procédé ?",
              options: [
                "« Grossis un peu ! » : cette phrase injonctive est dite au milieu de la scène.",
                "« Grossis un peu ! » : cette phrase injonctive contient un point d'exclamation.",
                "« Grossis un peu ! » : cette phrase injonctive est écrite par Jean Anouilh.",
                "« Grossis un peu ! » : cette phrase injonctive montre le pouvoir de Créon."
              ],
              correctAnswer: "« Grossis un peu ! » : cette phrase injonctive montre le pouvoir de Créon.",
              explanation: "Une bonne analyse donne la citation, le procédé ET son effet."
            },
            {
              id: "anti-e6",
              type: "ordre",
              question: "Remets dans l'ordre les phrases de ce paragraphe (méthode I-C-A-C).",
              options: [
                "Même dominée par Créon, Antigone reste libre.",
                "Elle affirme : « moi je suis reine ».",
                "Elle se sent plus puissante, car elle fait ce qu'elle croit juste.",
                "Ainsi, elle choisit son destin."
              ],
              correctAnswer: [
                "Même dominée par Créon, Antigone reste libre.",
                "Elle affirme : « moi je suis reine ».",
                "Elle se sent plus puissante, car elle fait ce qu'elle croit juste.",
                "Ainsi, elle choisit son destin."
              ],
              explanation: "Idée → Citation → Analyse → Conclusion."
            },
            {
              id: "anti-e7",
              type: "vrai-faux",
              question: "Même si Créon la domine, c'est Antigone qui se sent libre.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "« moi je suis reine »."
            },
            {
              id: "anti-e8",
              type: "qcm",
              question: "Quelle est la différence de violence entre les deux personnages ?",
              options: [
                "Elle est calme, il est violent",
                "Elle est violente, il est calme",
                "Ils sont calmes tous les deux",
                "Ils sont violents tous les deux"
              ],
              correctAnswer: "Elle est calme, il est violent",
              explanation: "Antigone est calme, sûre d'elle ; Créon devient violent."
            },
            {
              id: "anti-e9",
              type: "qcm-multiple",
              question: "Quels éléments montrent la domination par la parole ? (2 réponses)",
              options: [
                "Le tutoiement",
                "La phrase injonctive",
                "Le bras serré",
                "Le rôle de mère"
              ],
              correctAnswer: [
                "Le tutoiement",
                "La phrase injonctive"
              ],
              explanation: "Le bras serré = physique ; le rôle de mère = statut."
            },
            {
              id: "anti-e10",
              type: "qcm",
              question: "À quelle partie du programme se rattache cette séance ?",
              options: [
                "Se raconter",
                "Voyager loin",
                "Agir dans la cité",
                "Rire de tout"
              ],
              correctAnswer: "Agir dans la cité",
              explanation: "« Agir dans la cité : individu et pouvoir » : Antigone face au roi."
            },
            {
              id: "anti-e11",
              type: "qcm",
              question: "Comment cette séance répond-elle à la question du chapitre ?",
              options: [
                "En montrant qu'il faut obéir",
                "En montrant qu'il faut fuir",
                "En montrant qu'on peut dire non",
                "En montrant qu'il faut mentir"
              ],
              correctAnswer: "En montrant qu'on peut dire non",
              explanation: "Antigone exprime son désir de liberté en disant non au pouvoir."
            },
            {
              id: "anti-e12",
              type: "vrai-faux",
              question: "Pour Créon, la responsabilité du royaume passe avant la famille.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Créon veut maintenir l'ordre ; Antigone défend l'intérêt familial."
            },
            {
              id: "anti-e13",
              type: "qcm",
              question: "Que montre la réponse « Je ne joue pas » d'Antigone ?",
              options: [
                "Elle refuse d'être une enfant",
                "Elle aime les jeux d'enfant",
                "Elle a perdu une partie",
                "Elle veut jouer plus tard"
              ],
              correctAnswer: "Elle refuse d'être une enfant",
              explanation: "Créon la traite comme une petite fille ; elle refuse."
            },
            {
              id: "anti-e14",
              type: "intrus",
              question: "Trouve l'intrus : lequel n'est PAS un domaine où Créon domine Antigone ?",
              options: [
                "La parole",
                "Le physique",
                "Le statut",
                "La richesse"
              ],
              correctAnswer: "La richesse",
              explanation: "R-P-P-S : responsabilité, parole, physique, statut."
            },
            {
              id: "anti-e15",
              type: "qcm",
              question: "« Il faut pourtant qu'il y en ait qui mènent la barque » : que veut dire Créon ?",
              options: [
                "Il faut bien voyager",
                "Il faut bien gouverner",
                "Il faut bien pêcher",
                "Il faut bien se cacher"
              ],
              correctAnswer: "Il faut bien gouverner",
              explanation: "Partie B : la barque = le royaume. Quelqu'un doit gouverner."
            },
            {
              id: "anti-e16",
              type: "qcm-multiple",
              question: "Quels sont les grands thèmes de la pièce ? (3 réponses)",
              options: [
                "Dire non au pouvoir",
                "L'enfance et les adultes",
                "Le destin et la liberté",
                "La guerre des étoiles",
                "Le voyage en mer"
              ],
              correctAnswer: [
                "Dire non au pouvoir",
                "L'enfance et les adultes",
                "Le destin et la liberté"
              ],
              explanation: "Les 3 thèmes de la Partie B."
            },
            {
              id: "anti-e17",
              type: "vrai-faux",
              question: "Dans la pièce, on sait dès le début qu'Antigone va mourir.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Le Prologue l'annonce : c'est une tragédie."
            },
            {
              id: "anti-e18",
              type: "qcm",
              question: "Quelle citation est la meilleure preuve qu'Antigone reste libre ?",
              options: [
                "« Grossis un peu ! »",
                "« moi je suis reine »",
                "« Quel jeu joues-tu ? »",
                "« Et voilà. »"
              ],
              correctAnswer: "« moi je suis reine »",
              explanation: "Dominée, elle se dit pourtant reine."
            }
          ]
        }
      ]
    }
  },
  {
    slug: "francais-depestre-salgado-fiche",
    title: "Minerai noir — René Depestre",
    description: "Séances 3 et 4 — Un poème d'appel à la révolte, puis une photographie engagée (Serra Pelada, Salgado). Avec sujet de rédaction.",
    type: "fiche",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER,
    createdAt: "2026-10-10T12:00:00Z",
    updatedAt: "2026-10-11T10:00:00Z",
    tags: [
      "depestre",
      "salgado",
      "poésie engagée",
      "photographie",
      "esclavage",
      "fiche"
    ],
    relatedResourceSlug: "francais-depestre-salgado-quiz",
    mdxPath: "3e/francais/fiches/francais-depestre-salgado-fiche.mdx"
  },
  {
    slug: "francais-depestre-salgado-quiz",
    title: "Quiz — Minerai noir (et Serra Pelada)",
    description: "Teste-toi sur le poème engagé de Depestre et sur la photographie de Salgado.",
    type: "quiz",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER,
    createdAt: "2026-10-10T12:05:00Z",
    updatedAt: "2026-10-11T10:05:00Z",
    tags: [
      "depestre",
      "salgado",
      "engagement",
      "quiz"
    ],
    relatedResourceSlug: "francais-depestre-salgado-fiche",
    quizData: {
      title: "Minerai noir & Serra Pelada",
      description: "Choisis ton niveau : commence par 🟢 puis monte jusqu'à 🔴 !",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Le poème, la photo et le vocabulaire.",
          questions: [
            {
              id: "dep-f1",
              type: "qcm",
              question: "Qui a écrit le poème « Minerai noir » ?",
              options: [
                "Victor Hugo",
                "Jean Anouilh",
                "Sebastião Salgado",
                "René Depestre"
              ],
              correctAnswer: "René Depestre",
              explanation: "René Depestre, poète haïtien."
            },
            {
              id: "dep-f2",
              type: "qcm",
              question: "Que dénonce le poème ?",
              options: [
                "L'esclavage",
                "La pollution",
                "La guerre",
                "La pauvreté"
              ],
              correctAnswer: "L'esclavage",
              explanation: "Ce poème est engagé car il dénonce l'esclavage."
            },
            {
              id: "dep-f3",
              type: "texte-a-trous",
              question: "Une œuvre ___ dénonce une injustice.",
              options: [
                "comique",
                "policière",
                "engagée",
                "fantastique"
              ],
              correctAnswer: "engagée",
              explanation: "Engagé(e) = qui dénonce une injustice et défend une cause."
            },
            {
              id: "dep-f4",
              type: "qcm",
              question: "« minerai noir », « chair noire » : quelle figure de style ?",
              options: [
                "La comparaison",
                "La répétition",
                "La métaphore",
                "La question"
              ],
              correctAnswer: "La métaphore",
              explanation: "Le peuple est présenté comme un minerai, sans mot de comparaison."
            },
            {
              id: "dep-f5",
              type: "vrai-faux",
              question: "Le poème montre que le peuple africain a été dominé et exploité.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "C'est ce que montrent les expressions du poème."
            },
            {
              id: "dep-f6",
              type: "qcm",
              question: "Que montre « le vacarme des pioches » ?",
              options: [
                "Beaucoup d'esclaves travaillent",
                "Les pioches sont toutes cassées",
                "Les mines sont toutes fermées",
                "Les esclaves se reposent tous"
              ],
              correctAnswer: "Beaucoup d'esclaves travaillent",
              explanation: "Le vacarme montre qu'un grand nombre d'esclaves travaillent."
            },
            {
              id: "dep-f7",
              type: "qcm",
              question: "Que demande Depestre au peuple, à la fin ?",
              options: [
                "De pardonner aux colons",
                "De quitter son pays",
                "De travailler plus fort",
                "De faire exploser sa colère"
              ],
              correctAnswer: "De faire exploser sa colère",
              explanation: "C'est un appel à la révolte."
            },
            {
              id: "dep-f8",
              type: "qcm",
              question: "Qui a pris la photo de la mine de Serra Pelada ?",
              options: [
                "René Depestre",
                "Sebastião Salgado",
                "Victor Hugo",
                "Jean Anouilh"
              ],
              correctAnswer: "Sebastião Salgado",
              explanation: "Sebastião Salgado, en 1986."
            },
            {
              id: "dep-f9",
              type: "qcm",
              question: "Que veut dire « garimpeiros » ?",
              options: [
                "Gardiens de prison",
                "Chercheurs d'or",
                "Marchands d'esclaves",
                "Soldats du roi"
              ],
              correctAnswer: "Chercheurs d'or",
              explanation: "Mot portugais : chercheurs d'or."
            },
            {
              id: "dep-f10",
              type: "vrai-faux",
              question: "« Adeus mamãe » veut dire « Adieu maman ».",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "C'est le surnom des échelles de la mine."
            },
            {
              id: "dep-f11",
              type: "qcm",
              question: "Que portent les garimpeiros sur les échelles ?",
              options: [
                "Des seaux d'eau",
                "Des blocs de glace",
                "Des caisses de fruits",
                "Des sacs de terre"
              ],
              correctAnswer: "Des sacs de terre",
              explanation: "Ils remontent des sacs de pierres et de terre."
            },
            {
              id: "dep-f12",
              type: "vrai-faux",
              question: "Sur la photo, on voit le ciel en haut de l'image.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Faux",
              explanation: "On ne voit ni le ciel, ni le bout des échelles."
            },
            {
              id: "dep-f13",
              type: "qcm",
              question: "À quoi ressemblent les échelles sur la photo ?",
              options: [
                "À des colonnes vertébrales",
                "À des troncs d'arbres",
                "À des rails de train",
                "À des barreaux de cage"
              ],
              correctAnswer: "À des colonnes vertébrales",
              explanation: "Les échelles sont vitales : la vie des grimpeurs en dépend."
            },
            {
              id: "dep-f14",
              type: "association",
              question: "Associe chaque œuvre du chapitre à son auteur.",
              pairs: [
                {
                  left: "Minerai noir",
                  right: "René Depestre"
                },
                {
                  left: "Serra Pelada",
                  right: "Sebastião Salgado"
                },
                {
                  left: "Antigone",
                  right: "Jean Anouilh"
                },
                {
                  left: "Le Dernier Jour d'un condamné",
                  right: "Victor Hugo"
                }
              ],
              options: [
                "René Depestre",
                "Sebastião Salgado",
                "Jean Anouilh",
                "Victor Hugo"
              ],
              correctAnswer: [
                "René Depestre",
                "Sebastião Salgado",
                "Jean Anouilh",
                "Victor Hugo"
              ],
              explanation: "4 œuvres : poème, photo, théâtre, roman."
            },
            {
              id: "dep-f15",
              type: "qcm",
              question: "Qu'est-ce qu'une hyperbole ?",
              options: [
                "Une répétition",
                "Une comparaison",
                "Une exagération",
                "Une question"
              ],
              correctAnswer: "Une exagération",
              explanation: "Hyperbole = exagération pour frapper le lecteur."
            },
            {
              id: "dep-f16",
              type: "qcm",
              question: "À quoi fait penser la file de garimpeiros ?",
              options: [
                "À une ruche",
                "À un troupeau",
                "À une fourmilière",
                "À une armée"
              ],
              correctAnswer: "À une fourmilière",
              explanation: "Comme des fourmis : travail collectif, force, nombre, mais aussi fragilité."
            }
          ]
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Les figures de style et l'analyse de la photo.",
          questions: [
            {
              id: "dep-i1",
              type: "click-on-image",
              question: "Sur ce schéma de la photo, clique sur l'élément qui est à la place du spectateur.",
              imageSrc: "/images/francais/serra-pelada-composition-vierge.svg",
              imageAlt: "Schéma de la photographie de Serra Pelada, sans légendes",
              clickZones: [
                {
                  id: "homme",
                  x: 4,
                  y: 47,
                  w: 33,
                  h: 53,
                  isCorrect: true,
                  label: "Homme de dos"
                },
                {
                  id: "echelles",
                  x: 43,
                  y: 22,
                  w: 56,
                  h: 78,
                  isCorrect: false,
                  label: "Échelles et garimpeiros"
                },
                {
                  id: "haut",
                  x: 0,
                  y: 0,
                  w: 100,
                  h: 20,
                  isCorrect: false,
                  label: "Haut du cadre"
                }
              ],
              correctAnswer: "homme",
              explanation: "L'homme de dos au 1er plan est à la place du spectateur : il oriente notre regard."
            },
            {
              id: "dep-i2",
              type: "click-on-image",
              question: "Sur ce schéma de la photo, clique sur ce qui ressemble à des colonnes vertébrales.",
              imageSrc: "/images/francais/serra-pelada-composition-vierge.svg",
              imageAlt: "Schéma de la photographie de Serra Pelada, sans légendes",
              clickZones: [
                {
                  id: "homme",
                  x: 4,
                  y: 47,
                  w: 33,
                  h: 53,
                  isCorrect: false,
                  label: "Homme de dos"
                },
                {
                  id: "echelles",
                  x: 43,
                  y: 22,
                  w: 56,
                  h: 78,
                  isCorrect: true,
                  label: "Échelles et garimpeiros"
                },
                {
                  id: "haut",
                  x: 0,
                  y: 0,
                  w: 100,
                  h: 20,
                  isCorrect: false,
                  label: "Haut du cadre"
                }
              ],
              correctAnswer: "echelles",
              explanation: "Les échelles ressemblent à des colonnes vertébrales : elles sont vitales."
            },
            {
              id: "dep-i3",
              type: "qcm",
              question: "Dans « le vacarme des pioches », que désignent « les pioches » ?",
              options: [
                "Les esclaves",
                "Les mines",
                "Les colons",
                "Les pierres"
              ],
              correctAnswer: "Les esclaves",
              explanation: "C'est une métonymie : l'outil désigne la personne qui le tient."
            },
            {
              id: "dep-i4",
              type: "qcm",
              question: "Que soulignent les hyperboles du poème ?",
              options: [
                "La beauté de l'Afrique",
                "La fin de l'esclavage",
                "La richesse du poète",
                "L'ampleur de l'exploitation"
              ],
              correctAnswer: "L'ampleur de l'exploitation",
              explanation: "Elles soulignent la puissance collective des Africains et l'ampleur de leur exploitation."
            },
            {
              id: "dep-i5",
              type: "tri-categories",
              question: "Classe chaque exemple : métaphore ou métonymie ?",
              items: [
                {
                  id: "dep-i5-1",
                  label: "« minerai noir »"
                },
                {
                  id: "dep-i5-3",
                  label: "« le vacarme des pioches »"
                },
                {
                  id: "dep-i5-2",
                  label: "« peuple défriché »"
                },
                {
                  id: "dep-i5-4",
                  label: "« boire un verre »"
                }
              ],
              categories: [
                {
                  id: "meta",
                  label: "Métaphore (ressemblance)",
                  correctItemIds: [
                    "dep-i5-1",
                    "dep-i5-2"
                  ]
                },
                {
                  id: "meto",
                  label: "Métonymie (mot proche)",
                  correctItemIds: [
                    "dep-i5-3",
                    "dep-i5-4"
                  ]
                }
              ],
              correctAnswer: "tri-categories",
              explanation: "Métaphore : le peuple ressemble à une mine, à une terre. Métonymie : l'outil pour la personne, le verre pour la boisson."
            },
            {
              id: "dep-i6",
              type: "association",
              question: "Associe chaque observation de la photo à son interprétation.",
              pairs: [
                {
                  left: "Vêtement mouillé, lumière forte",
                  right: "Grande chaleur, travail physique"
                },
                {
                  left: "Échelles = colonnes vertébrales",
                  right: "Les échelles sont vitales"
                },
                {
                  left: "Garimpeiros en file indienne",
                  right: "Une fourmilière"
                },
                {
                  left: "Ni ciel, ni bout des échelles",
                  right: "Aucune issue"
                }
              ],
              options: [
                "Grande chaleur, travail physique",
                "Les échelles sont vitales",
                "Une fourmilière",
                "Aucune issue"
              ],
              correctAnswer: [
                "Grande chaleur, travail physique",
                "Les échelles sont vitales",
                "Une fourmilière",
                "Aucune issue"
              ],
              explanation: "On part de ce qu'on voit pour dire ce qu'on comprend."
            },
            {
              id: "dep-i7",
              type: "texte-a-trous-select",
              question: "Le poète utilise des termes ___ et s'adresse au peuple en répétant le mot « ___ ».",
              options: [
                "dévalorisants",
                "peuple",
                "joyeux",
                "esclave"
              ],
              correctAnswer: [
                "dévalorisants",
                "peuple"
              ],
              explanation: "Il veut marquer le lecteur et lui faire comprendre les souffrances du peuple."
            },
            {
              id: "dep-i8",
              type: "qcm",
              question: "Pourquoi le poète s'adresse-t-il au peuple ?",
              options: [
                "Pour amuser le lecteur",
                "Pour marquer le lecteur",
                "Pour rassurer le lecteur",
                "Pour endormir le lecteur"
              ],
              correctAnswer: "Pour marquer le lecteur",
              explanation: "Il veut marquer le lecteur et lui faire comprendre les souffrances vécues."
            },
            {
              id: "dep-i9",
              type: "qcm",
              question: "Quel est l'objectif de la séance 3 ?",
              options: [
                "Étudier un poème d'amour",
                "Étudier un poème engagé",
                "Étudier un poème drôle",
                "Étudier un poème ancien"
              ],
              correctAnswer: "Étudier un poème engagé",
              explanation: "Étudier la puissance argumentative d'un poème engagé."
            },
            {
              id: "dep-i10",
              type: "qcm",
              question: "L'homme du 1er plan ressemble à…",
              options: [
                "un soldat de plomb",
                "un arbre mort",
                "un géant de pierre",
                "une statue de boue"
              ],
              correctAnswer: "une statue de boue",
              explanation: "Couvert de terre, il ressemble à une statue de boue."
            },
            {
              id: "dep-i11",
              type: "qcm",
              question: "Que ressent le spectateur placé comme l'homme du 1er plan ?",
              options: [
                "Sa propre passivité",
                "Sa propre richesse",
                "Sa propre fatigue",
                "Sa propre colère"
              ],
              correctAnswer: "Sa propre passivité",
              explanation: "Il regarde sans agir : il se retrouve face à sa passivité."
            },
            {
              id: "dep-i12",
              type: "vrai-faux",
              question: "La fourmilière évoque la force et le nombre, mais aussi la fragilité des travailleurs.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Travail collectif + force + nombre + vulnérabilité (fragilité)."
            },
            {
              id: "dep-i13",
              type: "ordre",
              question: "Remets dans l'ordre les étapes pour analyser une photo.",
              options: [
                "J'observe ce que je vois",
                "J'interprète ce que ça veut dire",
                "J'argumente dans un paragraphe"
              ],
              correctAnswer: [
                "J'observe ce que je vois",
                "J'interprète ce que ça veut dire",
                "J'argumente dans un paragraphe"
              ],
              explanation: "Observer → interpréter → argumenter (objectifs de la séance 4)."
            },
            {
              id: "dep-i14",
              type: "qcm-multiple",
              question: "Quels sont les points communs entre le poème et la photo ? (2 réponses)",
              options: [
                "Des corps exploités",
                "Un grand nombre de travailleurs",
                "Des paysages en couleurs",
                "Une histoire d'amour"
              ],
              correctAnswer: [
                "Des corps exploités",
                "Un grand nombre de travailleurs"
              ],
              explanation: "Les deux montrent des corps exploités, en grand nombre, pour faire réagir."
            },
            {
              id: "dep-i15",
              type: "qcm",
              question: "Pourquoi les échelles sont-elles appelées « Adeus mamãe » (« Adieu maman ») ?",
              options: [
                "On y quitte sa mère",
                "On y chante le soir",
                "On risque d'y mourir",
                "On y dort la nuit"
              ],
              correctAnswer: "On risque d'y mourir",
              explanation: "Les échelles sont dangereuses : une chute peut être mortelle."
            },
            {
              id: "dep-i16",
              type: "intrus",
              question: "Trouve l'intrus : quel mot ne fait PAS partie du lexique de la mine ?",
              options: [
                "minerai",
                "pioche",
                "guillotine",
                "garimpeiro"
              ],
              correctAnswer: "guillotine",
              explanation: "La guillotine appartient à la séance sur Hugo."
            }
          ]
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "La synthèse, l'analyse et la rédaction.",
          questions: [
            {
              id: "dep-e1",
              type: "texte-a-trous-select",
              question: "« Ce poème est engagé car il ___ l'esclavage. Il parvient donc à susciter un désir de ___. »",
              options: [
                "dénonce",
                "révolte",
                "célèbre",
                "paix"
              ],
              correctAnswer: [
                "dénonce",
                "révolte"
              ],
              explanation: "C'est la synthèse de la séance 3."
            },
            {
              id: "dep-e2",
              type: "qcm",
              question: "Quelle est la différence entre métaphore et métonymie ?",
              options: [
                "Ressemblance / mot proche",
                "Mot proche / ressemblance",
                "Exagération / ressemblance",
                "Ressemblance / exagération"
              ],
              correctAnswer: "Ressemblance / mot proche",
              explanation: "Métaphore = ressemblance (le peuple est une mine). Métonymie = mot proche (la pioche pour l'esclave)."
            },
            {
              id: "dep-e3",
              type: "qcm",
              question: "Quelle phrase analyse correctement un procédé ?",
              options: [
                "« minerai noir » : cette métaphore est placée au tout début du poème de Depestre.",
                "« minerai noir » : cette métaphore est écrite en deux mots dans le poème étudié en classe.",
                "« minerai noir » : cette métaphore est aussi le titre choisi par le poète pour son texte.",
                "« minerai noir » : cette métaphore montre que les esclaves étaient traités comme une matière."
              ],
              correctAnswer: "« minerai noir » : cette métaphore montre que les esclaves étaient traités comme une matière.",
              explanation: "Une bonne analyse donne la citation, le procédé ET son effet."
            },
            {
              id: "dep-e4",
              type: "ordre",
              question: "Remets dans l'ordre les phrases de ce paragraphe (méthode I-C-A-C).",
              options: [
                "Depestre dénonce l'exploitation des esclaves.",
                "Il les désigne comme un « minerai noir ».",
                "Cette métaphore montre qu'on les traitait comme une matière.",
                "Le poème est donc engagé."
              ],
              correctAnswer: [
                "Depestre dénonce l'exploitation des esclaves.",
                "Il les désigne comme un « minerai noir ».",
                "Cette métaphore montre qu'on les traitait comme une matière.",
                "Le poème est donc engagé."
              ],
              explanation: "Idée → Citation → Analyse → Conclusion."
            },
            {
              id: "dep-e5",
              type: "tri-categories",
              question: "Classe chaque phrase : observation ou interprétation ?",
              items: [
                {
                  id: "dep-e5-1",
                  label: "Le vêtement est mouillé"
                },
                {
                  id: "dep-e5-3",
                  label: "Le travail semble sans fin"
                },
                {
                  id: "dep-e5-2",
                  label: "On ne voit pas le ciel"
                },
                {
                  id: "dep-e5-4",
                  label: "Les échelles sont vitales"
                }
              ],
              categories: [
                {
                  id: "obs",
                  label: "👀 J'observe",
                  correctItemIds: [
                    "dep-e5-1",
                    "dep-e5-2"
                  ]
                },
                {
                  id: "interp",
                  label: "💭 J'interprète",
                  correctItemIds: [
                    "dep-e5-3",
                    "dep-e5-4"
                  ]
                }
              ],
              correctAnswer: "tri-categories",
              explanation: "Observer = décrire ce qu'on voit. Interpréter = expliquer ce que ça veut dire."
            },
            {
              id: "dep-e6",
              type: "click-on-image",
              question: "Sur ce schéma, clique sur l'endroit où l'on devrait voir le ciel, mais où le cadre l'a coupé.",
              imageSrc: "/images/francais/serra-pelada-composition-vierge.svg",
              imageAlt: "Schéma de la photographie de Serra Pelada, sans légendes",
              clickZones: [
                {
                  id: "homme",
                  x: 4,
                  y: 47,
                  w: 33,
                  h: 53,
                  isCorrect: false,
                  label: "Homme de dos"
                },
                {
                  id: "echelles",
                  x: 43,
                  y: 22,
                  w: 56,
                  h: 78,
                  isCorrect: false,
                  label: "Échelles et garimpeiros"
                },
                {
                  id: "haut",
                  x: 0,
                  y: 0,
                  w: 100,
                  h: 20,
                  isCorrect: true,
                  label: "Haut du cadre"
                }
              ],
              correctAnswer: "haut",
              explanation: "En haut, le cadre coupe le ciel et le bout des échelles : le spectateur est enfermé dans la mine, sans issue."
            },
            {
              id: "dep-e7",
              type: "qcm",
              question: "Quel est l'effet du cadre sans ciel ?",
              options: [
                "Le spectateur se sent libre",
                "Le spectateur se sent enfermé",
                "Le spectateur se sent riche",
                "Le spectateur se sent léger"
              ],
              correctAnswer: "Le spectateur se sent enfermé",
              explanation: "Le travail semble sans fin, aucune issue possible."
            },
            {
              id: "dep-e8",
              type: "vrai-faux",
              question: "Une photographie peut être engagée, comme un poème.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Salgado choisit ce qu'il montre pour faire réagir le spectateur."
            },
            {
              id: "dep-e9",
              type: "qcm",
              question: "Pourquoi le poète utilise-t-il des termes dévalorisants ?",
              options: [
                "Pour montrer qu'il n'aime pas son peuple",
                "Pour montrer comment on les traitait",
                "Pour montrer qu'il connaît les mines",
                "Pour montrer qu'il écrit très bien"
              ],
              correctAnswer: "Pour montrer comment on les traitait",
              explanation: "Il reprend la façon dont les esclavagistes voyaient les Africains : comme une matière."
            },
            {
              id: "dep-e10",
              type: "qcm",
              question: "Comment Depestre répond-il à la question du chapitre ?",
              options: [
                "En appelant au pardon",
                "En appelant au départ",
                "En appelant au silence",
                "En appelant à la révolte"
              ],
              correctAnswer: "En appelant à la révolte",
              explanation: "Il exprime le désir de liberté en appelant le peuple à faire exploser sa colère."
            },
            {
              id: "dep-e11",
              type: "qcm-multiple",
              question: "Quels procédés trouve-t-on dans « Minerai noir » ? (3 réponses)",
              options: [
                "La métaphore",
                "La métonymie",
                "L'hyperbole",
                "La didascalie",
                "Le point de vue interne"
              ],
              correctAnswer: [
                "La métaphore",
                "La métonymie",
                "L'hyperbole"
              ],
              explanation: "La didascalie appartient au théâtre ; le point de vue interne au récit (Hugo)."
            },
            {
              id: "dep-e12",
              type: "qcm",
              question: "Que veut dire « susciter un désir de révolte » ?",
              options: [
                "Faire naître l'envie de se révolter",
                "Faire oublier l'envie de se révolter",
                "Faire durer l'envie de se reposer",
                "Faire grandir l'envie de partir"
              ],
              correctAnswer: "Faire naître l'envie de se révolter",
              explanation: "Susciter = faire naître."
            },
            {
              id: "dep-e13",
              type: "qcm",
              question: "Quel est le lien principal entre le poème et la photo ?",
              options: [
                "Ils montrent des paysages d'Afrique",
                "Ils montrent des fêtes populaires",
                "Ils montrent des corps exploités",
                "Ils montrent des familles heureuses"
              ],
              correctAnswer: "Ils montrent des corps exploités",
              explanation: "Les deux montrent des corps exploités, en grand nombre, pour faire réagir."
            },
            {
              id: "dep-e14",
              type: "vrai-faux",
              question: "Les hyperboles du poème soulignent aussi la puissance collective des Africains.",
              options: [
                "Vrai",
                "Faux"
              ],
              correctAnswer: "Vrai",
              explanation: "Puissance collective + ampleur de l'exploitation."
            },
            {
              id: "dep-e15",
              type: "qcm",
              question: "Quelle est la meilleure preuve que la photo est engagée ?",
              options: [
                "La photo est en noir et blanc",
                "La photo date de 1986",
                "Le cadre enferme le spectateur",
                "La photo vient du Brésil"
              ],
              correctAnswer: "Le cadre enferme le spectateur",
              explanation: "Le cadrage fait ressentir l'enfermement des travailleurs : Salgado nous fait réagir."
            },
            {
              id: "dep-e16",
              type: "intrus",
              question: "Trouve l'intrus : lequel n'est PAS un élément de l'analyse de la photo ?",
              options: [
                "la rime",
                "le premier plan",
                "le cadre",
                "la lumière"
              ],
              correctAnswer: "la rime",
              explanation: "La rime appartient à la poésie."
            }
          ]
        }
      ]
    }
  },
  {
    slug: "francais-classes-grammaticales-fiche",
    title: "Les classes grammaticales et les sens d'un mot",
    description: "GR 1 — Les 10 classes de mots (variables / invariables), leurs sous-classes, les pièges d'emploi, puis champ sémantique, sens propre / figuré, dénotation / connotation.",
    type: "fiche",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER_GR1,
    createdAt: "2026-10-11T12:00:00Z",
    updatedAt: "2026-10-11T12:00:00Z",
    tags: ["grammaire", "classes grammaticales", "nature des mots", "sens des mots", "connotation", "fiche"],
    relatedResourceSlug: "francais-classes-grammaticales-quiz",
    mdxPath: "3e/francais/fiches/francais-classes-grammaticales-fiche.mdx",
  },
  {
    slug: "francais-classes-grammaticales-quiz",
    title: "Quiz — Les classes grammaticales et les sens d'un mot",
    description: "Un vrai contrôle de 3e : nature des mots soulignés, mots à repérer, mots à double classe, études de texte façon brevet.",
    type: "quiz",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER_GR1,
    createdAt: "2026-10-11T12:05:00Z",
    updatedAt: "2026-10-11T12:05:00Z",
    tags: ["grammaire", "classes grammaticales", "sens des mots", "brevet", "quiz"],
    relatedResourceSlug: "francais-classes-grammaticales-fiche",
    quizData: {
      title: "Les classes grammaticales et les sens d'un mot",
      description: "Choisis ton niveau : 🟢 les classes, 🟡 les sous-classes et les sens, 🔴 les pièges et l'étude de texte façon brevet.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Reconnaître les 10 classes et les 3 notions de sens.",
          questions: [
            {
              id: "gr1-f1",
              type: "nature-mots",
              question: "Donne la classe grammaticale de chaque mot souligné.",
              taggedText: "Tous les proches [amis|Nom commun] de [Mona|Nom propre] sont arrivés [hier|Adverbe], pour [lui|Pronom] souhaiter [joyeusement|Adverbe] son anniversaire.",
              options: CLASSES_SIMPLES,
              explanation: "amis = nom commun · Mona = nom propre · hier = adverbe de temps · lui = pronom (il remplace Mona) · joyeusement = adverbe de manière.",
            },
            {
              id: "gr1-f2",
              type: "tri-categories",
              question: "Range chaque mot : variable ou invariable ?",
              items: [
                { id: "gr1-f2-1", label: "maison" },
                { id: "gr1-f2-2", label: "lentement" },
                { id: "gr1-f2-3", label: "ils" },
                { id: "gr1-f2-4", label: "sans" },
                { id: "gr1-f2-5", label: "joli" },
                { id: "gr1-f2-6", label: "car" },
                { id: "gr1-f2-7", label: "ces" },
                { id: "gr1-f2-8", label: "hélas" },
                { id: "gr1-f2-9", label: "partir" },
                { id: "gr1-f2-10", label: "quand" },
              ],
              categories: [
                { id: "var", label: "✏️ Variable", correctItemIds: ["gr1-f2-1", "gr1-f2-3", "gr1-f2-5", "gr1-f2-7", "gr1-f2-9"] },
                { id: "inv", label: "🧱 Invariable", correctItemIds: ["gr1-f2-2", "gr1-f2-4", "gr1-f2-6", "gr1-f2-8", "gr1-f2-10"] },
              ],
              hint: "Les mots variables : nom, déterminant, pronom, adjectif, verbe.",
              explanation: "Variables : maison (nom), ils (pronom), joli (adjectif), ces (déterminant), partir (verbe). Invariables : lentement (adverbe), sans (préposition), car et quand (conjonctions), hélas (interjection).",
            },
            {
              id: "gr1-f3",
              type: "qcm",
              question: "« Ce fut une soirée extrêmement chaleureuse. » Quel mot l'adverbe « extrêmement » modifie-t-il ?",
              options: ["Le verbe « fut »", "Le nom « soirée »", "L'adjectif « chaleureuse »", "Toute la phrase"],
              correctAnswer: "L'adjectif « chaleureuse »",
              explanation: "Extrêmement chaleureuse : l'adverbe indique le degré de l'adjectif. Un adverbe ne modifie jamais un nom.",
            },
            {
              id: "gr1-f4",
              type: "association",
              question: "Associe chaque classe à sa définition.",
              pairs: [
                { left: "Le nom", right: "Il désigne les objets, les personnes, les idées." },
                { left: "Le déterminant", right: "Il introduit le nom et prend son genre et son nombre." },
                { left: "Le pronom", right: "Il désigne quelqu'un ou quelque chose sans le nommer." },
                { left: "La préposition", right: "Elle relie un mot à son complément." },
                { left: "La conjonction", right: "Elle relie deux propositions." },
                { left: "L'adverbe", right: "Il modifie le sens d'un autre mot." },
              ],
              explanation: "Ces 6 définitions viennent directement du cours : apprends les verbes-clés (désigner, introduire, relier, modifier).",
            },
            {
              id: "gr1-f5",
              type: "surlignage",
              question: "Surligne TOUS les déterminants de la phrase.",
              taggedText: "[Ce] matin, [mes] [deux] cousins ont apporté [quelques] gâteaux et [une] bouteille de jus.",
              hint: "Un déterminant est toujours suivi d'un nom (ou d'un adjectif + un nom). Attention aux nombres !",
              explanation: "Ce (démonstratif), mes (possessif), deux (numéral cardinal), quelques (indéfini), une (article indéfini). « de » dans « bouteille de jus » est une préposition.",
            },
            {
              id: "gr1-f6",
              type: "vrai-faux",
              question: "Un adverbe s'accorde en genre et en nombre avec le verbe qu'il modifie.",
              correctAnswer: "Faux",
              explanation: "L'adverbe est INVARIABLE : il ne s'accorde jamais. « Il marche lentement » / « Elles marchent lentement ».",
            },
            {
              id: "gr1-f7",
              type: "qcm",
              question: "« Il a réussi grâce à ses efforts. » Quelle est la classe de « grâce à » ?",
              options: ["Une conjonction de coordination", "Une préposition composée", "Un adverbe", "Un nom suivi d'une préposition"],
              correctAnswer: "Une préposition composée",
              explanation: "Grâce à, à cause de, afin de : ce sont des prépositions composées (plusieurs mots). Elles relient « ses efforts » au verbe.",
            },
            {
              id: "gr1-f8",
              type: "completion-tableau",
              question: "Écris la sous-classe de chaque déterminant en gras (un seul mot, au masculin singulier).",
              table: {
                headers: ["Phrase", "Déterminant", "Sous-classe"],
                rows: [
                  [{ value: "Ces élèves travaillent." }, { value: "ces" }, { blank: true, correctAnswer: "démonstratif" }],
                  [{ value: "Ils rangent leurs affaires." }, { value: "leurs" }, { blank: true, correctAnswer: "possessif" }],
                  [{ value: "Quelle belle journée !" }, { value: "quelle" }, { blank: true, correctAnswer: "exclamatif" }],
                  [{ value: "Quel livre préfères-tu ?" }, { value: "quel" }, { blank: true, correctAnswer: "interrogatif" }],
                ],
              },
              hint: "Choisis parmi : démonstratif, possessif, exclamatif, interrogatif.",
              explanation: "ces = démonstratif · leurs = possessif · Quelle… ! = exclamatif · Quel… ? = interrogatif. Regarde la ponctuation pour distinguer les deux derniers !",
            },
            {
              id: "gr1-f9",
              type: "qcm-multiple",
              question: "Parmi ces mots, lesquels sont des conjonctions de coordination ?",
              options: ["mais", "où", "car", "quand", "ni", "puis", "or"],
              correctAnswer: ["mais", "car", "ni", "or"],
              explanation: "Coordination : mais, ou, et, or, ni, car. « où » (avec accent) est un pronom ; « quand » est une conjonction de subordination ; « puis » est un adverbe de temps.",
            },
            {
              id: "gr1-f10",
              type: "intrus",
              question: "Trouve l'intrus : lequel n'est PAS un pronom ?",
              options: ["celui-ci", "le mien", "chacun", "cette", "rien"],
              correctAnswer: "cette",
              explanation: "« cette » est un déterminant démonstratif : il est toujours suivi d'un nom (cette maison). Les autres remplacent un nom.",
            },
            {
              id: "gr1-f11",
              type: "tri-categories",
              question: "Sens propre ou sens figuré ? Classe chaque phrase selon le mot en majuscules.",
              items: [
                { id: "gr1-f11-1", label: "Il a BRISÉ la glace du lac en patinant." },
                { id: "gr1-f11-2", label: "Pour BRISER la glace, elle a raconté une blague." },
                { id: "gr1-f11-3", label: "Le loup a DÉVORÉ l'agneau." },
                { id: "gr1-f11-4", label: "Il est DÉVORÉ par la jalousie." },
                { id: "gr1-f11-5", label: "Elle a un cœur de PIERRE." },
                { id: "gr1-f11-6", label: "Ce mur est en PIERRE." },
              ],
              categories: [
                { id: "propre", label: "🧱 Sens propre", correctItemIds: ["gr1-f11-1", "gr1-f11-3", "gr1-f11-6"] },
                { id: "figure", label: "🎨 Sens figuré", correctItemIds: ["gr1-f11-2", "gr1-f11-4", "gr1-f11-5"] },
              ],
              explanation: "Sens propre = concret (vraie glace, vrai repas, vraie pierre). Sens figuré = imagé (mettre à l'aise, être rongé, être insensible).",
            },
            {
              id: "gr1-f12",
              type: "vrai-faux",
              question: "Le mot « feuille » est polysémique : il peut désigner un élément du feuillage d'un arbre ou un support en papier.",
              correctAnswer: "Vrai",
              explanation: "Un mot polysémique a plusieurs sens. L'ensemble de ces sens forme son champ sémantique.",
            },
            {
              id: "gr1-f13",
              type: "qcm",
              question: "Laquelle de ces réponses est la DÉNOTATION du mot « rouge » ?",
              options: ["Une couleur primaire", "Le danger", "La passion", "L'interdiction"],
              correctAnswer: "Une couleur primaire",
              explanation: "La dénotation = le sens du dictionnaire, reconnu par tous. Danger, passion, interdiction sont des connotations.",
            },
            {
              id: "gr1-f14",
              type: "texte-a-trous",
              question: "« Oh ! Le vase est tombé : boum ! » — « Oh » est une ___, alors que « boum » est une onomatopée.",
              options: ["interjection", "conjonction", "préposition", "adverbe"],
              correctAnswer: "interjection",
              explanation: "L'interjection exprime une émotion (Oh ! Hélas ! Ouf !). L'onomatopée imite un bruit (Boum ! Plouf !).",
            },
            {
              id: "gr1-f15",
              type: "tri-categories",
              question: "Classe ces adverbes selon ce qu'ils expriment.",
              items: [
                { id: "gr1-f15-1", label: "lentement" },
                { id: "gr1-f15-2", label: "mal" },
                { id: "gr1-f15-3", label: "ici" },
                { id: "gr1-f15-4", label: "loin" },
                { id: "gr1-f15-5", label: "demain" },
                { id: "gr1-f15-6", label: "enfin" },
                { id: "gr1-f15-7", label: "peut-être" },
                { id: "gr1-f15-8", label: "sans doute" },
              ],
              categories: [
                { id: "maniere", label: "🖐️ Manière", correctItemIds: ["gr1-f15-1", "gr1-f15-2"] },
                { id: "lieu", label: "📍 Lieu", correctItemIds: ["gr1-f15-3", "gr1-f15-4"] },
                { id: "temps", label: "⏰ Temps", correctItemIds: ["gr1-f15-5", "gr1-f15-6"] },
                { id: "certitude", label: "❓ Certitude", correctItemIds: ["gr1-f15-7", "gr1-f15-8"] },
              ],
              explanation: "Manière : lentement, mal · Lieu : ici, loin · Temps : demain, enfin · Degré de certitude : peut-être, sans doute.",
            },
            {
              id: "gr1-f16",
              type: "qcm",
              question: "« des avalanches de neige » : quelle est la particularité du mot « neige » ?",
              options: ["C'est un nom employé sans déterminant", "C'est un adjectif qualificatif", "C'est un nom propre", "C'est un verbe conjugué"],
              correctAnswer: "C'est un nom employé sans déterminant",
              explanation: "« neige » est un nom commun, mais il n'a pas de déterminant devant lui. C'est l'exemple du cours, comme « des obus de gros calibre ».",
            },
            {
              id: "gr1-f17",
              type: "qcm",
              question: "Lequel de ces mots est un PRONOM possessif ?",
              options: ["mon", "notre", "le nôtre", "leurs"],
              correctAnswer: "le nôtre",
              explanation: "« le nôtre » remplace un nom (notre maison → la nôtre). « mon, notre, leurs » sont des déterminants possessifs : ils sont suivis d'un nom.",
            },
            {
              id: "gr1-f18",
              type: "vrai-faux",
              question: "Dans « Elle est passée très vite », l'adverbe « très » modifie un autre adverbe.",
              correctAnswer: "Vrai",
              explanation: "« très » modifie « vite », qui est lui-même un adverbe (il modifie le verbe « est passée »).",
            },
            {
              id: "gr1-f19",
              type: "etude-texte",
              question: "Lis l'extrait, puis réponds aux 4 questions.",
              passage: "D'abord, nous lui avons offert son cadeau. Elle l'a ouvert lentement.",
              subQuestions: [
                { question: "« D'abord » modifie…", options: ["le verbe « avons offert »", "toute la phrase", "le nom « cadeau »"], correctAnswer: "toute la phrase", explanation: "C'est l'exemple du cours : l'adverbe peut modifier une phrase entière." },
                { question: "« lui » est…", options: ["un déterminant", "un pronom personnel", "une préposition"], correctAnswer: "un pronom personnel" },
                { question: "« son » est…", options: ["un pronom possessif", "un déterminant possessif", "un nom"], correctAnswer: "un déterminant possessif", explanation: "Il est suivi du nom « cadeau »." },
                { question: "« lentement » exprime…", options: ["la manière", "le temps", "le lieu"], correctAnswer: "la manière" },
              ],
              explanation: "Bravo si tu as tout juste : c'est le type de question qu'on trouve au brevet !",
            },
            {
              id: "gr1-f20",
              type: "qcm",
              question: "« Le chien de Paul aboie. » Quel est le rôle de la préposition « de » ?",
              options: [
                "Elle relie « Paul » au nom « chien » (Paul est son complément)",
                "Elle relie deux propositions",
                "Elle introduit le nom « chien »",
                "Elle modifie le sens du verbe « aboie »",
              ],
              correctAnswer: "Elle relie « Paul » au nom « chien » (Paul est son complément)",
              explanation: "La préposition relie un mot à son complément : ici « Paul » complète le nom « chien ».",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Les sous-classes, les mots en contexte et les sens d'un mot.",
          questions: [
            {
              id: "gr1-i1",
              type: "nature-mots",
              question: "Donne la classe PRÉCISE (avec la sous-classe) de chaque mot souligné.",
              taggedText: "[Quelle|Déterminant exclamatif] chance ! [Ces|Déterminant démonstratif] enfants ont retrouvé [leur|Déterminant possessif] chien [que|Pronom relatif] [nous|Pronom personnel] cherchions depuis [trois|Déterminant numéral cardinal] jours.",
              options: [
                "Déterminant démonstratif",
                "Déterminant possessif",
                "Déterminant exclamatif",
                "Déterminant interrogatif",
                "Déterminant numéral cardinal",
                "Pronom personnel",
                "Pronom relatif",
                "Pronom démonstratif",
                "Conjonction de subordination",
              ],
              explanation: "Quelle… ! = exclamatif · Ces = démonstratif · leur + nom = possessif · que reprend « chien » = pronom relatif · nous = pronom personnel · trois = numéral cardinal.",
            },
            {
              id: "gr1-i2",
              type: "qcm",
              question: "« Je leur ai rendu leurs cahiers. » Quelle analyse est juste ?",
              options: [
                "« leur » = pronom personnel ; « leurs » = déterminant possessif",
                "« leur » = déterminant possessif ; « leurs » = pronom personnel",
                "Les deux sont des déterminants possessifs",
                "Les deux sont des pronoms personnels",
              ],
              correctAnswer: "« leur » = pronom personnel ; « leurs » = déterminant possessif",
              explanation: "« leur » devant un verbe = pronom personnel (invariable : je leur parle). « leurs » devant un nom = déterminant possessif (il s'accorde).",
            },
            {
              id: "gr1-i3",
              type: "surlignage",
              question: "Surligne TOUS les adverbes (attention : la négation compte deux mots !).",
              taggedText: "[Hier], ma grand-mère conduisait [très] [prudemment] : elle [ne] roulait [jamais] [vite], mais elle arrivait [toujours] à l'heure.",
              hint: "Cherche le temps, le degré, la manière et la négation.",
              explanation: "Hier (temps), très (degré), prudemment (manière), ne… jamais (négation), vite (manière), toujours (temps). « mais » est une conjonction de coordination.",
            },
            {
              id: "gr1-i4",
              type: "tri-categories",
              question: "Coordination ou subordination ? Classe ces conjonctions.",
              items: [
                { id: "gr1-i4-1", label: "mais" },
                { id: "gr1-i4-2", label: "lorsque" },
                { id: "gr1-i4-3", label: "or" },
                { id: "gr1-i4-4", label: "si" },
                { id: "gr1-i4-5", label: "car" },
                { id: "gr1-i4-6", label: "tandis que" },
                { id: "gr1-i4-7", label: "ni" },
                { id: "gr1-i4-8", label: "parce que" },
              ],
              categories: [
                { id: "coord", label: "⚖️ Coordination", correctItemIds: ["gr1-i4-1", "gr1-i4-3", "gr1-i4-5", "gr1-i4-7"] },
                { id: "sub", label: "🪜 Subordination", correctItemIds: ["gr1-i4-2", "gr1-i4-4", "gr1-i4-6", "gr1-i4-8"] },
              ],
              explanation: "Coordination (mais, ou, et, or, ni, car) : deux propositions indépendantes. Subordination : une principale + une subordonnée.",
            },
            {
              id: "gr1-i5",
              type: "texte-a-trous-select",
              question: "« La fête a commencé rapidement » : l'adverbe modifie un ___. « Une soirée extrêmement chaleureuse » : il modifie un ___. « D'abord, nous lui avons offert son cadeau » : il modifie ___.",
              options: ["verbe", "adjectif", "toute la phrase", "nom", "autre adverbe"],
              correctAnswer: ["verbe", "adjectif", "toute la phrase"],
              explanation: "rapidement → a commencé (verbe) · extrêmement → chaleureuse (adjectif) · D'abord → toute la phrase. Un adverbe ne modifie jamais un nom.",
            },
            {
              id: "gr1-i6",
              type: "qcm",
              question: "« Il parle fort. » / « Il est fort. » Quelle est la classe de « fort » dans chaque phrase ?",
              options: [
                "Adverbe dans la 1re, adjectif qualificatif dans la 2de",
                "Adjectif qualificatif dans les deux",
                "Adjectif dans la 1re, adverbe dans la 2de",
                "Adverbe dans les deux",
              ],
              correctAnswer: "Adverbe dans la 1re, adjectif qualificatif dans la 2de",
              explanation: "Test : mets au féminin. « Elle parle fort » (ne change pas → adverbe, il modifie « parle »). « Elle est forte » (change → adjectif).",
            },
            {
              id: "gr1-i7",
              type: "qcm-multiple",
              question: "« Chacun a pris le sien, puis celui-ci est reparti avec eux. » Coche tous les pronoms.",
              options: ["Chacun", "le sien", "puis", "celui-ci", "avec", "eux"],
              correctAnswer: ["Chacun", "le sien", "celui-ci", "eux"],
              explanation: "Chacun (indéfini), le sien (possessif), celui-ci (démonstratif), eux (personnel). « puis » = adverbe, « avec » = préposition.",
            },
            {
              id: "gr1-i8",
              type: "association",
              question: "Associe chaque déterminant en majuscules à sa sous-classe.",
              pairs: [
                { left: "Je mange DU pain.", right: "Article partitif" },
                { left: "Le jardin DU voisin.", right: "Article défini contracté (de + le)" },
                { left: "TROIS amis sont venus.", right: "Numéral cardinal" },
                { left: "PLUSIEURS élèves sont absents.", right: "Déterminant indéfini" },
                { left: "QUEL film veux-tu voir ?", right: "Déterminant interrogatif" },
              ],
              hint: "« du » partitif = une quantité qu'on ne compte pas. « du » contracté = « de le ».",
              explanation: "DU pain : quantité non comptable (partitif). Le jardin DU voisin = de + le voisin (contracté).",
            },
            {
              id: "gr1-i9",
              type: "vrai-faux",
              question: "Dans « Les enfants sont tout contents », « tout » est un adverbe : il signifie « très ».",
              correctAnswer: "Vrai",
              explanation: "« tout » modifie l'adjectif « contents » et veut dire « très » : c'est un adverbe. Ne confonds pas avec « Tous les enfants » (déterminant).",
            },
            {
              id: "gr1-i10",
              type: "qcm",
              question: "Quelle liste correspond au CHAMP SÉMANTIQUE du mot « pièce » ?",
              options: [
                "Pièce d'une maison / pièce de monnaie / pièce de théâtre",
                "Pièce, chambre, salon, cuisine",
                "Pièce, piécette, rapiécer",
                "Pièce, salle, local",
              ],
              correctAnswer: "Pièce d'une maison / pièce de monnaie / pièce de théâtre",
              explanation: "Le champ sémantique = les différents SENS d'un même mot. La 2e liste est un champ lexical (thème de la maison), la 3e une famille de mots, la 4e des synonymes.",
            },
            {
              id: "gr1-i11",
              type: "tri-categories",
              question: "Ces mots ont parfois la même dénotation. Classe-les selon leur connotation.",
              items: [
                { id: "gr1-i11-1", label: "une demeure" },
                { id: "gr1-i11-2", label: "un taudis" },
                { id: "gr1-i11-3", label: "un destrier" },
                { id: "gr1-i11-4", label: "un canasson" },
                { id: "gr1-i11-5", label: "se régaler" },
                { id: "gr1-i11-6", label: "s'empiffrer" },
                { id: "gr1-i11-7", label: "un visage radieux" },
                { id: "gr1-i11-8", label: "un chauffard" },
              ],
              categories: [
                { id: "melio", label: "😊 Méliorative", correctItemIds: ["gr1-i11-1", "gr1-i11-3", "gr1-i11-5", "gr1-i11-7"] },
                { id: "pejo", label: "😖 Péjorative", correctItemIds: ["gr1-i11-2", "gr1-i11-4", "gr1-i11-6", "gr1-i11-8"] },
              ],
              explanation: "Demeure / taudis = logement · destrier / canasson = cheval · se régaler / s'empiffrer = manger. Même dénotation, connotations opposées.",
            },
            {
              id: "gr1-i12",
              type: "qcm",
              question: "Dans quelle phrase le verbe « dévorer » est-il employé au SENS PROPRE ?",
              options: [
                "Elle dévore les romans policiers.",
                "Le lion dévore sa proie.",
                "Il la dévorait des yeux.",
                "Le feu a dévoré la forêt.",
              ],
              correctAnswer: "Le lion dévore sa proie.",
              explanation: "Sens propre (premier, concret) = manger en déchirant avec les dents. Les autres sont des sens figurés (lire avec passion, regarder intensément, détruire).",
            },
            {
              id: "gr1-i13",
              type: "intrus",
              question: "Trouve l'intrus : lequel n'est PAS un adverbe ?",
              options: ["lentement", "gaiement", "moment", "tellement", "vraiment"],
              correctAnswer: "moment",
              explanation: "« un moment » : c'est un nom (on peut mettre un déterminant devant). Tous les mots en -ment ne sont pas des adverbes !",
            },
            {
              id: "gr1-i14",
              type: "qcm",
              question: "« La maison que j'ai achetée est ancienne. » Quelle est la classe de « que » ?",
              options: ["Pronom relatif", "Conjonction de subordination", "Pronom interrogatif", "Adverbe"],
              correctAnswer: "Pronom relatif",
              hint: "« que » reprend-il un nom placé juste avant ?",
              explanation: "« que » reprend le nom « maison » (son antécédent) : j'ai acheté la maison. C'est donc un pronom relatif.",
            },
            {
              id: "gr1-i15",
              type: "etude-texte",
              question: "Lis l'extrait, puis donne la classe des mots demandés.",
              passage: "Soudain, la porte s'ouvrit. Un vieil homme entra lentement et posa sur la table une lourde valise.",
              subQuestions: [
                { question: "« Soudain » est…", options: ["un adjectif qualificatif", "un adverbe", "une conjonction"], correctAnswer: "un adverbe", explanation: "Adverbe de temps : il modifie toute la phrase." },
                { question: "« vieil » est…", options: ["un nom", "un adjectif qualificatif", "un déterminant"], correctAnswer: "un adjectif qualificatif", explanation: "Il qualifie « homme » (vieux → vieil devant une voyelle)." },
                { question: "« s' » (s'ouvrit) est…", options: ["un pronom personnel", "un déterminant", "une conjonction de subordination"], correctAnswer: "un pronom personnel" },
                { question: "« sur » est…", options: ["un adverbe", "une préposition", "une conjonction de coordination"], correctAnswer: "une préposition", explanation: "Elle relie « la table » au verbe « posa »." },
                { question: "« et » relie…", options: ["deux propositions", "deux noms", "un mot à son complément"], correctAnswer: "deux propositions", explanation: "« Un vieil homme entra » + « posa une lourde valise » : conjonction de coordination." },
              ],
            },
            {
              id: "gr1-i16",
              type: "nombre",
              question: "Combien y a-t-il de PRÉPOSITIONS dans cette phrase ? « Pour lui faire plaisir, Léo est parti à pied vers la gare sans son manteau. »",
              correctAnswer: "4",
              hint: "Une préposition est toujours suivie d'un mot ou d'un groupe de mots qui la complète.",
              explanation: "pour, à, vers, sans = 4 prépositions. « lui » est un pronom, « la » et « son » sont des déterminants.",
            },
            {
              id: "gr1-i17",
              type: "vrai-faux",
              question: "Dans « Il a mangé de la soupe », « de la » est un article partitif.",
              correctAnswer: "Vrai",
              explanation: "« de la » désigne une quantité qu'on ne compte pas (de la soupe, du pain, de l'eau) : c'est un article partitif.",
            },
            {
              id: "gr1-i18",
              type: "qcm",
              question: "Dans quelle phrase un adverbe modifie-t-il un AUTRE ADVERBE ?",
              options: [
                "Son frère l'a très gentiment aidé.",
                "Ce fut une soirée extrêmement chaleureuse.",
                "La fête a commencé rapidement.",
                "Heureusement, il est venu.",
              ],
              correctAnswer: "Son frère l'a très gentiment aidé.",
              explanation: "« très » modifie l'adverbe « gentiment ». Ailleurs : un adjectif (chaleureuse), un verbe (a commencé), toute la phrase (heureusement).",
            },
            {
              id: "gr1-i19",
              type: "qcm-multiple",
              question: "Dans quelles phrases « des » est-il un ARTICLE INDÉFINI (pluriel de « un ») ?",
              options: [
                "J'ai vu des oiseaux.",
                "La cage des oiseaux est ouverte.",
                "Des enfants jouent dehors.",
                "Il parle des vacances.",
              ],
              correctAnswer: ["J'ai vu des oiseaux.", "Des enfants jouent dehors."],
              hint: "Essaie de remplacer « des » par « de les ».",
              explanation: "La cage des oiseaux = de + les oiseaux ; il parle des vacances = de + les vacances : ce sont des articles définis contractés.",
            },
            {
              id: "gr1-i20",
              type: "qcm",
              question: "« Ce garçon est une vraie limace ! » Que fait le mot « limace » ici ?",
              options: [
                "Il a une connotation péjorative : la lenteur, la mollesse",
                "Il a une connotation méliorative : la douceur",
                "Il est employé au sens propre : un animal",
                "Il est employé avec sa dénotation : un gastéropode",
              ],
              correctAnswer: "Il a une connotation péjorative : la lenteur, la mollesse",
              explanation: "Le garçon n'est pas un animal : le mot est au sens figuré et fait penser à la lenteur, c'est péjoratif.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Mots à double classe, analyses fines et études de texte façon brevet.",
          questions: [
            {
              id: "gr1-e1",
              type: "nature-mots",
              question: "« tout », « le », « que »… Donne la classe précise de chaque mot souligné.",
              taggedText: "[Tout|Déterminant indéfini] élève [qui|Pronom relatif] [le|Pronom personnel] souhaite peut entrer, [mais|Conjonction de coordination] [tous|Pronom indéfini] devront rester [tout|Adverbe] silencieux.",
              options: CLASSES_FINES,
              explanation: "Tout + nom = déterminant indéfini · qui reprend « élève » = pronom relatif · le + verbe = pronom personnel · mais = coordination · tous (seul, sujet) = pronom indéfini · tout silencieux (= très) = adverbe.",
            },
            {
              id: "gr1-e2",
              type: "nature-mots",
              question: "Attention aux faux jumeaux ! Donne la classe précise de chaque mot souligné.",
              taggedText: "[Leur|Déterminant possessif] mère [leur|Pronom personnel] a offert [la|Article défini] voiture [dont|Pronom relatif] ils rêvaient, et ils [la|Pronom personnel] conduisent [déjà|Adverbe].",
              options: CLASSES_FINES,
              explanation: "Leur + nom = déterminant possessif · leur + verbe = pronom personnel · la + nom = article défini · dont reprend « voiture » = pronom relatif · la + verbe = pronom personnel · déjà = adverbe de temps.",
            },
            {
              id: "gr1-e3",
              type: "surlignage",
              question: "Surligne TOUS les pronoms (même ceux qui sont élidés, comme m' ou l').",
              taggedText: "[Celui] [qui] [m']a prêté ce livre [me] répète : « [Tu] [le] garderas ; [moi], [je] [l']ai déjà lu. »",
              hint: "Il y en a plus que tu ne penses : démonstratif, relatif, personnels…",
              explanation: "Celui (démonstratif), qui (relatif), m', me, tu, le, moi, je, l' (personnels). « ce » dans « ce livre » est un déterminant : il est suivi d'un nom.",
            },
            {
              id: "gr1-e4",
              type: "surlignage",
              question: "Surligne TOUS les mots invariables de cette phrase.",
              taggedText: "[Hélas], la pluie tombait [toujours] [quand] nous sommes sortis [de] la maison [sans] parapluie [ni] manteau.",
              hint: "Invariables : adverbes, prépositions, conjonctions, interjections, onomatopées.",
              explanation: "Hélas (interjection), toujours (adverbe), quand (conj. de subordination), de et sans (prépositions), ni (conj. de coordination).",
            },
            {
              id: "gr1-e5",
              type: "association",
              question: "Un mot, quatre classes ! Associe chaque emploi de « tout » à sa classe.",
              pairs: [
                { left: "TOUS les invités sont partis.", right: "Déterminant indéfini" },
                { left: "TOUS sont partis.", right: "Pronom indéfini" },
                { left: "Ils sont TOUT heureux.", right: "Adverbe (= très)" },
                { left: "Le TOUT est de commencer.", right: "Nom (précédé d'un déterminant)" },
              ],
              explanation: "C'est la preuve qu'un mot peut appartenir à plusieurs classes selon son emploi : regarde toujours ce qui l'entoure.",
            },
            {
              id: "gr1-e6",
              type: "qcm",
              question: "« Si tu viens, apporte des gâteaux. » / « Il est si gentil ! » Quelle analyse est correcte ?",
              options: [
                "Conjonction de subordination dans la 1re ; adverbe de degré dans la 2de",
                "Adverbe de degré dans les deux",
                "Conjonction de coordination dans la 1re ; adverbe dans la 2de",
                "Conjonction de subordination dans les deux",
              ],
              correctAnswer: "Conjonction de subordination dans la 1re ; adverbe de degré dans la 2de",
              explanation: "1re : « si » introduit la subordonnée « si tu viens ». 2de : « si » modifie l'adjectif « gentil » (= tellement) : adverbe de degré.",
            },
            {
              id: "gr1-e7",
              type: "qcm",
              question: "Dans le tableau du cours, « donc » est rangé parmi les ADVERBES et non parmi les conjonctions de coordination. Quel argument le justifie ?",
              options: [
                "On peut le déplacer dans la phrase et l'ajouter après « et » (« et donc »)",
                "Il exprime toujours le temps",
                "Il est variable",
                "Il relie toujours une principale et une subordonnée",
              ],
              correctAnswer: "On peut le déplacer dans la phrase et l'ajouter après « et » (« et donc »)",
              explanation: "« Donc il part » / « Il part donc » : il est mobile, comme un adverbe. On dit « et donc », mais jamais « et mais » ou « et car ».",
            },
            {
              id: "gr1-e8",
              type: "etude-texte",
              question: "Type brevet — Victor Hugo, Le Dernier Jour d'un condamné (1829). Lis l'extrait puis réponds.",
              passage: "Condamné à mort !\nVoilà cinq semaines que j'habite avec cette pensée, toujours seul avec elle, toujours glacé de sa présence, toujours courbé sous son poids !",
              subQuestions: [
                { question: "« cette » (cette pensée) est…", options: ["un pronom démonstratif", "un déterminant démonstratif", "un adjectif qualificatif", "un article défini"], correctAnswer: "un déterminant démonstratif", explanation: "Il est suivi du nom « pensée »." },
                { question: "« elle » (avec elle) est un pronom personnel qui remplace…", options: ["« la mort »", "« cette pensée »", "« sa présence »", "le narrateur"], correctAnswer: "« cette pensée »" },
                { question: "« toujours » est…", options: ["un adverbe de temps", "un adjectif", "une conjonction de coordination", "une préposition"], correctAnswer: "un adverbe de temps" },
                { question: "« glacé » est ici employé au sens…", options: ["propre : couvert de glace", "figuré : paralysé par la peur"], correctAnswer: "figuré : paralysé par la peur", explanation: "Le condamné n'a pas vraiment froid : c'est la terreur qui le glace." },
                { question: "« sous » (sous son poids) est…", options: ["un adverbe", "une préposition", "une conjonction de subordination", "un nom"], correctAnswer: "une préposition" },
              ],
              explanation: "Les trois « toujours » forment une répétition (anaphore) : la pensée de la mort ne quitte jamais le condamné.",
            },
            {
              id: "gr1-e9",
              type: "etude-texte",
              question: "Type brevet — Jean de La Fontaine, « Le Loup et l'Agneau » (1668). Lis l'extrait puis réponds.",
              passage: "La raison du plus fort est toujours la meilleure :\nNous l'allons montrer tout à l'heure.\nUn Agneau se désaltérait\nDans le courant d'une onde pure.",
              subQuestions: [
                { question: "« du » (la raison du plus fort) est…", options: ["un article partitif", "un article défini contracté (de + le)", "un article indéfini", "une préposition seule"], correctAnswer: "un article défini contracté (de + le)", explanation: "la raison de le plus fort → du." },
                { question: "« l' » (Nous l'allons montrer) est…", options: ["un article défini élidé", "un pronom personnel", "un pronom relatif", "un déterminant possessif"], correctAnswer: "un pronom personnel", explanation: "Il est placé devant un verbe et reprend l'idée du premier vers." },
                { question: "« pure » est…", options: ["un nom", "un adverbe", "un adjectif qualificatif", "un verbe"], correctAnswer: "un adjectif qualificatif", explanation: "Il qualifie « onde » et s'accorde au féminin singulier." },
                { question: "« Dans » est…", options: ["une préposition", "une conjonction de subordination", "un adverbe de lieu", "un déterminant"], correctAnswer: "une préposition" },
              ],
            },
            {
              id: "gr1-e10",
              type: "qcm",
              question: "Un élève écrit : « Le champ sémantique de la mer : vague, plage, sel, marin. » Quelle est son erreur ?",
              options: [
                "Il confond avec le champ lexical : le champ sémantique, ce sont les différents sens d'UN SEUL mot",
                "Il n'y a pas d'erreur",
                "Il faudrait ajouter des adjectifs",
                "Il confond avec la connotation",
              ],
              correctAnswer: "Il confond avec le champ lexical : le champ sémantique, ce sont les différents sens d'UN SEUL mot",
              explanation: "Champ lexical = plusieurs mots autour d'un thème. Champ sémantique = les sens d'un mot (ex. « feuille » : d'arbre / de papier).",
            },
            {
              id: "gr1-e11",
              type: "qcm-multiple",
              question: "« Au sommet de la tour, un drapeau blanc s'est levé. » Coche ce qui relève de la CONNOTATION de « blanc » dans ce contexte.",
              options: ["La paix", "La reddition (on arrête de se battre)", "Une couleur, celle de la neige", "La pureté", "La colère"],
              correctAnswer: ["La paix", "La reddition (on arrête de se battre)", "La pureté"],
              explanation: "« Couleur de la neige » = dénotation (dictionnaire). Paix, reddition, pureté = connotations. La colère n'est pas associée au blanc (plutôt au rouge).",
            },
            {
              id: "gr1-e12",
              type: "tri-categories",
              question: "Classe ces mots : connotation neutre, méliorative ou péjorative ?",
              items: [
                { id: "gr1-e12-1", label: "un conducteur" },
                { id: "gr1-e12-2", label: "un as du volant" },
                { id: "gr1-e12-3", label: "un chauffard" },
                { id: "gr1-e12-4", label: "une maison" },
                { id: "gr1-e12-5", label: "un palais" },
                { id: "gr1-e12-6", label: "une masure" },
                { id: "gr1-e12-7", label: "un enfant" },
                { id: "gr1-e12-8", label: "un chérubin" },
                { id: "gr1-e12-9", label: "un morveux" },
              ],
              categories: [
                { id: "neutre", label: "😐 Neutre", correctItemIds: ["gr1-e12-1", "gr1-e12-4", "gr1-e12-7"] },
                { id: "melio", label: "😊 Méliorative", correctItemIds: ["gr1-e12-2", "gr1-e12-5", "gr1-e12-8"] },
                { id: "pejo", label: "😖 Péjorative", correctItemIds: ["gr1-e12-3", "gr1-e12-6", "gr1-e12-9"] },
              ],
              explanation: "Chaque ligne désigne la même chose (dénotation) : celui qui conduit, un logement, un enfant. Seule l'image donnée change.",
            },
            {
              id: "gr1-e13",
              type: "qcm-multiple",
              question: "Dans quelles phrases « bien » est-il un ADVERBE ?",
              options: [
                "Il travaille bien.",
                "Ce sont des gens bien.",
                "Il a vendu tous ses biens.",
                "Je suis bien content de te voir.",
              ],
              correctAnswer: ["Il travaille bien.", "Je suis bien content de te voir."],
              explanation: "Il modifie le verbe « travaille » (manière) puis l'adjectif « content » (degré). « des gens bien » : il qualifie « gens » (emploi d'adjectif). « ses biens » : nom (avec déterminant, au pluriel).",
            },
            {
              id: "gr1-e14",
              type: "qcm",
              question: "« La belle porte le voile. » Cette phrase a deux sens. Dans le sens « La jolie porte cache quelque chose », quelle analyse est juste ?",
              options: [
                "belle : adjectif · porte : nom · le : pronom personnel · voile : verbe",
                "belle : nom · porte : verbe · le : article défini · voile : nom",
                "belle : adjectif · porte : verbe · le : article défini · voile : nom",
                "belle : nom · porte : nom · le : pronom personnel · voile : verbe",
              ],
              correctAnswer: "belle : adjectif · porte : nom · le : pronom personnel · voile : verbe",
              explanation: "La [belle porte] = adjectif + nom ; [le voile] = la cache → « le » pronom + verbe « voiler ». L'autre sens : la belle (nom) porte (verbe) le voile (article + nom).",
            },
            {
              id: "gr1-e15",
              type: "nombre",
              question: "Combien y a-t-il de DÉTERMINANTS dans la phrase du cours ? « Tous les proches amis de Mona sont arrivés hier, pour lui souhaiter joyeusement son anniversaire. »",
              correctAnswer: "3",
              hint: "« proches » est un adjectif, « lui » un pronom.",
              explanation: "Tous, les, son = 3 déterminants. « Tous les » : deux déterminants qui se suivent devant le nom.",
            },
            {
              id: "gr1-e16",
              type: "vrai-faux",
              question: "« Ils marchent vite » / « Ils sont rapides » : seul « rapides » prend un -s, car « vite » est un adverbe (invariable) et « rapides » un adjectif (variable).",
              correctAnswer: "Vrai",
              explanation: "Même sens, mais pas la même classe : « vite » modifie le verbe, « rapides » qualifie « ils » et s'accorde.",
            },
            {
              id: "gr1-e17",
              type: "completion-tableau",
              question: "Change de classe ! Complète avec le mot de la même famille (sans déterminant).",
              table: {
                headers: ["Nom", "Adjectif", "Adverbe"],
                rows: [
                  [{ value: "joie" }, { value: "joyeux" }, { blank: true, correctAnswer: "joyeusement" }],
                  [{ value: "douceur" }, { blank: true, correctAnswer: "doux" }, { value: "doucement" }],
                  [{ blank: true, correctAnswer: "rapidité" }, { value: "rapide" }, { value: "rapidement" }],
                  [{ value: "gentillesse" }, { value: "gentil" }, { blank: true, correctAnswer: "gentiment" }],
                ],
              },
              hint: "L'adverbe de manière se forme souvent sur l'adjectif au féminin + -ment… sauf exceptions !",
              explanation: "joyeuse → joyeusement · doux (douce → doucement) · rapide → rapidité · gentil → gentiment (exception : pas de « gentillement »).",
            },
            {
              id: "gr1-e18",
              type: "qcm",
              question: "« Il est parti à cause de la pluie. » / « Il est parti parce qu'il pleuvait. » Quelle est la différence ?",
              options: [
                "« à cause de » est une préposition composée (suivie d'un GN) ; « parce que » est une conjonction de subordination (suivie d'une proposition)",
                "Ce sont deux conjonctions de subordination",
                "Ce sont deux prépositions composées",
                "« à cause de » est un adverbe ; « parce que » une conjonction de coordination",
              ],
              correctAnswer: "« à cause de » est une préposition composée (suivie d'un GN) ; « parce que » est une conjonction de subordination (suivie d'une proposition)",
              explanation: "Même sens (la cause), mais pas la même classe : la préposition relie un mot à son complément (la pluie) ; la conjonction relie deux propositions (il pleuvait a un verbe conjugué).",
            },
            {
              id: "gr1-e19",
              type: "association",
              question: "Associe chaque « que » à sa classe.",
              pairs: [
                { left: "Le gâteau QUE tu as fait est délicieux.", right: "Pronom relatif (il reprend « gâteau »)" },
                { left: "Je crois QUE tu as raison.", right: "Conjonction de subordination" },
                { left: "QUE veux-tu ?", right: "Pronom interrogatif" },
              ],
              explanation: "Relatif = il a un antécédent (un nom juste avant). Conjonction = il n'a pas d'antécédent et introduit une subordonnée après un verbe (croire, penser…). Interrogatif = question.",
            },
            {
              id: "gr1-e20",
              type: "etude-texte",
              question: "Type brevet — Lis l'extrait puis réponds.",
              passage: "Le vieux marin avait le cœur lourd. Ce matin-là, la mer était calme, mais la côte disparaissait dans un océan de brume.",
              subQuestions: [
                { question: "« lourd » (le cœur lourd) est employé au sens…", options: ["propre : qui pèse beaucoup", "figuré : triste, accablé"], correctAnswer: "figuré : triste, accablé" },
                { question: "« un océan de brume » : le mot « océan » est employé au sens…", options: ["propre : une vaste étendue d'eau salée", "figuré : une très grande quantité"], correctAnswer: "figuré : une très grande quantité" },
                { question: "« Ce » (Ce matin-là) est…", options: ["un pronom démonstratif", "un déterminant démonstratif", "un adverbe"], correctAnswer: "un déterminant démonstratif", explanation: "Il est suivi du nom « matin »." },
                { question: "« mais » est…", options: ["une conjonction de coordination", "une conjonction de subordination", "un adverbe"], correctAnswer: "une conjonction de coordination", explanation: "Il relie deux propositions indépendantes." },
                { question: "« dans » est…", options: ["un adverbe de lieu", "une préposition", "une conjonction"], correctAnswer: "une préposition" },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    slug: "francais-etude-langue-fiche",
    title: "Étude de la langue — Objectif contrôle",
    description: "Déterminant ou pronom, temps de l'indicatif (CONJ 1), participe passé, propositions, accord sujet-verbe, COD/COI, nature d'une expression. Méthodes + corrigés des exercices 1 à 9 (p. 328).",
    type: "fiche",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER_EDL,
    createdAt: "2026-11-14T18:00:00Z",
    updatedAt: "2026-11-14T21:00:00Z",
    tags: ["étude de la langue", "grammaire", "conjugaison", "pronoms", "participe passé", "propositions", "accord sujet-verbe", "COD", "COI", "nature des mots", "fiche"],
    relatedResourceSlug: "francais-etude-langue-quiz",
    mdxPath: "3e/francais/fiches/francais-etude-langue-fiche.mdx",
  },
  {
    slug: "francais-etude-langue-quiz",
    title: "Quiz — Étude de la langue",
    description: "Déterminants et pronoms, temps de l'indicatif, participes passés, propositions, accords, COD/COI et nature des expressions — sur les phrases des exercices du manuel.",
    type: "quiz",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER_EDL,
    createdAt: "2026-11-14T18:00:00Z",
    updatedAt: "2026-11-14T21:00:00Z",
    tags: ["étude de la langue", "grammaire", "conjugaison", "propositions", "COD", "COI", "nature des mots", "quiz"],
    relatedResourceSlug: "francais-etude-langue-fiche",
    quizData: {
      title: "Étude de la langue — Objectif contrôle",
      description: "Choisis ton niveau : 🟢 reconnaître, 🟡 analyser les phrases du manuel, 🔴 les pièges du contrôle.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Reconnaître : déterminant ou pronom, les temps, les participes, les conjonctions, COD et COI.",
          questions: [
            {
              id: "edl-f01",
              type: "nature-mots",
              question: "Déterminant ou pronom ? Regarde le mot qui suit.",
              taggedText: "[Les|Déterminant] enfants [les|Pronom] attendent ; je [leur|Pronom] parle de [leur|Déterminant] voyage.",
              options: ["Déterminant", "Pronom"],
              explanation: "Devant un nom (*enfants, voyage*) → déterminant. Devant un verbe (*attendent, parle*), il remplace quelqu'un → pronom.",
            },
            {
              id: "edl-f02",
              type: "qcm",
              question: "« Ce bois nous ravissait, nous **y** passions tous nos après-midis. » Quelle est la nature de **y** ?",
              options: ["Pronom personnel", "Adverbe", "Préposition", "Déterminant"],
              correctAnswer: "Pronom personnel",
              explanation: "*y* remplace *dans ce bois* : c'est un pronom personnel (on dit aussi pronom adverbial).",
            },
            {
              id: "edl-f03",
              type: "qcm",
              question: "« Puisque **la nôtre** est en panne, nous prendrons votre voiture. » Quelle est la nature de **la nôtre** ?",
              options: ["Pronom possessif", "Déterminant possessif", "Pronom personnel", "Article défini + nom"],
              correctAnswer: "Pronom possessif",
              explanation: "*la nôtre* remplace *notre voiture* : pronom possessif. *votre*, lui, est suivi d'un nom : déterminant possessif.",
            },
            {
              id: "edl-f04",
              type: "association",
              question: "Associe chaque forme du verbe **écrire** à son temps.",
              pairs: [
                { left: "il écrit", right: "Présent" },
                { left: "il écrivait", right: "Imparfait" },
                { left: "il écrivit", right: "Passé simple" },
                { left: "il écrira", right: "Futur" },
                { left: "il écrirait", right: "Conditionnel présent" },
              ],
              explanation: "-ait = imparfait · -it = passé simple · -ra = futur · -rait = conditionnel (le *r* du futur + la terminaison de l'imparfait).",
            },
            {
              id: "edl-f05",
              type: "association",
              question: "Associe chaque temps composé à son nom.",
              pairs: [
                { left: "elles ont appris", right: "Passé composé" },
                { left: "elles avaient appris", right: "Plus-que-parfait" },
                { left: "elles eurent appris", right: "Passé antérieur" },
                { left: "elles auront appris", right: "Futur antérieur" },
                { left: "elles auraient appris", right: "Conditionnel passé" },
              ],
              explanation: "Regarde le temps de l'auxiliaire : présent → passé composé · imparfait → plus-que-parfait · passé simple → passé antérieur · futur → futur antérieur · conditionnel → conditionnel passé.",
            },
            {
              id: "edl-f06",
              type: "qcm",
              question: "« Il **sortit** du lit. » À quel temps est le verbe ?",
              options: ["Passé simple", "Imparfait", "Présent", "Passé composé"],
              correctAnswer: "Passé simple",
              explanation: "*sortir* (3e groupe) au passé simple : je sortis, tu sortis, il **sortit**. À l'imparfait on aurait *il sortait*.",
            },
            {
              id: "edl-f07",
              type: "surlignage",
              question: "Surligne les **verbes conjugués** (pas les infinitifs).",
              taggedText: "Elle [veut] partir, mais elle [attend] son frère pour lui dire au revoir.",
              explanation: "*veut* et *attend* sont conjugués. *partir* et *dire* sont des infinitifs : ils ne comptent pas.",
            },
            {
              id: "edl-f08",
              type: "surlignage",
              question: "Surligne les participes passés **employés comme adjectifs**.",
              taggedText: "Les enfants avaient ramassé des feuilles [séchées] et des écorces [colorées].",
              explanation: "*séchées* qualifie *feuilles*, *colorées* qualifie *écorces*. *ramassé* a un auxiliaire (*avaient*) : il fait partie d'un verbe conjugué.",
            },
            {
              id: "edl-f09",
              type: "nature-mots",
              question: "Précise l'emploi de chaque participe passé souligné.",
              taggedText: "Avec son crâne [rasé|Employé comme adjectif], cette jeune fille avait [suscité|Partie d'un verbe conjugué] la curiosité.",
              options: ["Employé comme adjectif", "Partie d'un verbe conjugué"],
              explanation: "*rasé* qualifie *crâne*. *suscité* est précédé de l'auxiliaire *avait* : plus-que-parfait.",
            },
            {
              id: "edl-f10",
              type: "qcm",
              question: "« Peu **habitué** à ces jeux, Mathieu s'était renfoncé dans un coin. » Quel mot **habitué** qualifie-t-il ?",
              options: ["Mathieu", "jeux", "coin", "Aucun : il a un auxiliaire"],
              correctAnswer: "Mathieu",
              explanation: "C'est Mathieu qui est peu habitué. Le participe est en début de phrase, loin du nom qu'il qualifie.",
            },
            {
              id: "edl-f11",
              type: "nature-mots",
              question: "Coordination ou subordination ?",
              taggedText: "Je souris [parce que|Conjonction de subordination] tu arrives, [mais|Conjonction de coordination] je reste assise.",
              options: ["Conjonction de coordination", "Conjonction de subordination"],
              explanation: "*mais, ou, et, or, ni, car* = coordination. *parce que* introduit une subordonnée (la cause).",
            },
            {
              id: "edl-f12",
              type: "qcm",
              question: "Quel découpage en propositions est correct ?",
              options: [
                "[Quand tu arrives], [je souris].",
                "[Quand tu arrives, je souris].",
                "Quand [tu arrives], [je souris].",
                "[Quand tu] [arrives], [je souris].",
              ],
              correctAnswer: "[Quand tu arrives], [je souris].",
              explanation: "Deux verbes conjugués (*arrives, souris*) = deux propositions. La conjonction *quand* est **dans** les crochets de la subordonnée.",
            },
            {
              id: "edl-f13",
              type: "vrai-faux",
              question: "Dans « Je pense **que** tu viendras », *que* est un pronom relatif.",
              correctAnswer: "Faux",
              explanation: "*que* ne reprend aucun nom : c'est une conjonction de subordination. Dans *le livre que je lis*, il reprend *livre* : là, c'est un pronom relatif.",
            },
            {
              id: "edl-f14",
              type: "qcm",
              question: "« Chaque objet leur rappelait Mathilde. » Quel est le sujet de **rappelait** ?",
              options: ["Chaque objet", "leur", "Mathilde", "objet leur"],
              correctAnswer: "Chaque objet",
              explanation: "Qu'est-ce qui rappelait Mathilde ? Chaque objet → il rappelait. *leur* est un COI (à eux).",
            },
            {
              id: "edl-f15",
              type: "texte-a-trous",
              question: "Choisis la bonne terminaison : « Les élèves nous racont___ leur voyage. »",
              options: ["-e", "-es", "-ent", "-ons"],
              correctAnswer: "-ent",
              explanation: "Qui est-ce qui raconte ? Les élèves → ils racontent. *nous* est un complément, pas le sujet.",
            },
            {
              id: "edl-f16",
              type: "conjugaison",
              question: "Conjugue à l'imparfait : « Tout le monde (savoir) la vérité. »",
              options: ["Tout le monde…"],
              correctAnswer: ["savait"],
              explanation: "*Tout le monde* est singulier → il savait.",
            },
            {
              id: "edl-f17",
              type: "qcm",
              question: "« Il craint **l'orage**. » Quelle est la fonction de **l'orage** ?",
              options: ["COD de craint", "COI de craint", "Sujet de craint", "Complément de lieu"],
              correctAnswer: "COD de craint",
              explanation: "Il craint quoi ? l'orage. Pas de préposition → COD.",
            },
            {
              id: "edl-f18",
              type: "qcm",
              question: "« Je me méfie **de ce chien**. » Quelle est la fonction de **de ce chien** ?",
              options: ["COI de me méfie", "COD de me méfie", "Sujet", "Complément de lieu"],
              correctAnswer: "COI de me méfie",
              explanation: "On se méfie **de** quelque chose : je me méfie de quoi ? de ce chien → COI.",
            },
            {
              id: "edl-f19",
              type: "qcm",
              question: "« Je **lui** téléphone. » Quelle est la fonction de **lui** ?",
              options: ["COI de téléphone", "COD de téléphone", "Sujet de téléphone", "Déterminant"],
              correctAnswer: "COI de téléphone",
              explanation: "On téléphone **à** quelqu'un. *lui* = à lui / à elle → toujours COI.",
            },
            {
              id: "edl-f20",
              type: "nature-mots",
              question: "Donne la nature de chaque mot souligné.",
              taggedText: "[Très|Adverbe] [sobre|Adjectif qualificatif], le docteur soignait [quelques|Déterminant indéfini] malades [dans|Préposition] sa maison.",
              options: ["Adverbe", "Adjectif qualificatif", "Déterminant indéfini", "Préposition"],
              explanation: "*Très* modifie l'adjectif *sobre* → adverbe. *sobre* qualifie le docteur. *quelques* introduit *malades*. *dans* introduit *sa maison*.",
            },
            {
              id: "edl-f21",
              type: "qcm",
              question: "« Il sut se contenter des quelques **malades** que le hasard lui envoya. » Nature de **malades** ?",
              options: ["Nom commun", "Adjectif qualificatif", "Verbe", "Adverbe"],
              correctAnswer: "Nom commun",
              explanation: "Il désigne des personnes et il est introduit par un déterminant (*quelques*) → nom commun. Dans *des enfants malades*, ce serait un adjectif.",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Analyser les phrases des exercices : sous-classes des pronoms, passé simple, découpage, accords, pronoms compléments.",
          questions: [
            {
              id: "edl-i01",
              type: "nature-mots",
              question: "Exercice 1 — Donne la nature précise des mots soulignés.",
              taggedText: "[Les|Article défini] goûters de la comtesse attiraient de nombreux jeunes talents [qui|Pronom relatif] voulaient se faire connaître, je [les|Pronom personnel] fréquentais moi-même assidûment.",
              options: ["Article défini", "Pronom relatif", "Pronom personnel", "Déterminant possessif"],
              explanation: "*Les* + nom → article défini. *qui* reprend *jeunes talents* → pronom relatif. *les* + verbe, reprend *les jeunes talents* → pronom personnel.",
            },
            {
              id: "edl-i02",
              type: "nature-mots",
              question: "Exercice 1 — Donne la nature précise des mots soulignés.",
              taggedText: "Nous aimions beaucoup [leurs|Déterminant possessif] enfants, et nous [leur|Pronom personnel] rendions visite à chaque fois que nous [le|Pronom personnel] pouvions.",
              options: ["Déterminant possessif", "Pronom personnel", "Pronom possessif", "Article défini"],
              explanation: "*leurs* + nom → déterminant possessif. *leur* + verbe (= à eux) → pronom personnel. *le* reprend l'idée de *leur rendre visite* → pronom personnel.",
            },
            {
              id: "edl-i03",
              type: "tri-categories",
              question: "Exercice 2 (Chateaubriand) — Range ces mots : déterminant ou pronom ?",
              items: [
                { id: "a", label: "ces (gueux-là)" },
                { id: "b", label: "notre (rencontre)" },
                { id: "c", label: "nos (domestiques)" },
                { id: "d", label: "Ceux-ci" },
                { id: "e", label: "leur (crie)" },
                { id: "f", label: "y (arriver)" },
                { id: "g", label: "on" },
                { id: "h", label: "eux-mêmes" },
              ],
              categories: [
                { id: "det", label: "Déterminant", correctItemIds: ["a", "b", "c"] },
                { id: "pro", label: "Pronom", correctItemIds: ["d", "e", "f", "g", "h"] },
              ],
              explanation: "*ces, notre, nos* sont suivis d'un nom → déterminants. *Ceux-ci* (démonstratif), *leur, y, eux-mêmes* (personnels) et *on* (indéfini) sont des pronoms.",
            },
            {
              id: "edl-i04",
              type: "qcm",
              question: "« Nous apercevons à l'extrémité d'**un** de ces ponts deux mousses. » Nature de **un** ?",
              options: ["Pronom indéfini", "Article indéfini", "Déterminant numéral", "Adjectif qualificatif"],
              correctAnswer: "Pronom indéfini",
              explanation: "*un* n'est pas suivi d'un nom : il remplace *un pont*. C'est un pronom indéfini.",
            },
            {
              id: "edl-i05",
              type: "association",
              question: "Exercice 3 (Bradbury) — Associe chaque verbe à son temps.",
              pairs: [
                { left: "j'ai déversé", right: "Passé composé" },
                { left: "il y avait un homme", right: "Imparfait" },
                { left: "un homme qui les avait conçus", right: "Plus-que-parfait" },
                { left: "il sortit du lit", right: "Passé simple" },
                { left: "j'arrive en deux minutes", right: "Présent" },
              ],
              explanation: "*ai* (présent) + participe → passé composé. *avait* + participe → plus-que-parfait. *avait* seul → imparfait du verbe avoir.",
            },
            {
              id: "edl-i06",
              type: "qcm",
              question: "Quelle forme est au **passé simple** ?",
              options: ["je chantai", "je chantais", "je chanterai", "je chanterais"],
              correctAnswer: "je chantai",
              explanation: "Passé simple : je chant**ai**. Imparfait : je chant**ais**. Futur : je chante**rai**. Conditionnel : je chante**rais**.",
            },
            {
              id: "edl-i07",
              type: "conjugaison",
              question: "Écris « nous écrire » au futur, puis au conditionnel présent.",
              options: ["Futur : nous…", "Conditionnel présent : nous…"],
              correctAnswer: ["écrirons", "écririons"],
              explanation: "Futur : écri**rons**. Conditionnel : écri**rions** (avec le *i* de l'imparfait).",
            },
            {
              id: "edl-i08",
              type: "conjugaison",
              question: "Au passé simple : « Antigone (prendre) sa pelle et se (diriger) vers la sortie. »",
              options: ["Antigone…", "…et se…"],
              correctAnswer: ["prit", "dirigea"],
              explanation: "*prendre* (3e groupe) → il prit. *se diriger* (1er groupe) → il se dirigea (terminaison -a).",
            },
            {
              id: "edl-i09",
              type: "completion-tableau",
              question: "Écris chaque verbe au passé simple.",
              table: {
                headers: ["Sujet", "Infinitif", "Passé simple"],
                rows: [
                  [{ value: "ils" }, { value: "frapper" }, { blank: true, correctAnswer: "frappèrent" }],
                  [{ value: "il" }, { value: "savoir" }, { blank: true, correctAnswer: "sut" }],
                  [{ value: "elle" }, { value: "venir" }, { blank: true, correctAnswer: "vint" }],
                  [{ value: "nous" }, { value: "finir" }, { blank: true, correctAnswer: "finîmes" }],
                ],
              },
              explanation: "1er groupe : -èrent · *savoir* : -us, -ut · *venir* : -ins, -int · 2e groupe : -îmes.",
            },
            {
              id: "edl-i10",
              type: "nature-mots",
              question: "Exercice 4 — Précise l'emploi de chaque participe passé.",
              taggedText: "Les enfants avaient [ramassé|Partie d'un verbe conjugué] des feuilles [séchées|Employé comme adjectif]. Mathieu, [intimidé|Employé comme adjectif], s'était [renfoncé|Partie d'un verbe conjugué] dans un coin.",
              options: ["Employé comme adjectif", "Partie d'un verbe conjugué"],
              explanation: "*ramassé* (auxiliaire *avaient*) et *renfoncé* (auxiliaire *était*) font partie d'un verbe conjugué. *séchées* qualifie *feuilles*, *intimidé* qualifie *Mathieu*.",
            },
            {
              id: "edl-i11",
              type: "qcm",
              question: "« Mathieu s'était renfoncé dans un coin. » Quel est l'auxiliaire ?",
              options: ["être (était)", "avoir (avait)", "se (s')", "Il n'y en a pas"],
              correctAnswer: "être (était)",
              explanation: "Les verbes pronominaux se conjuguent avec **être** : *s'était renfoncé* = plus-que-parfait.",
            },
            {
              id: "edl-i12",
              type: "surlignage",
              question: "Surligne seulement les **conjonctions de subordination**.",
              taggedText: "Je sais [que] le livre que tu lis te plaît [quand] tu en parles.",
              explanation: "Le premier *que* ne reprend rien → conjonction. *quand* → conjonction. Le second *que* reprend *livre* → pronom relatif.",
            },
            {
              id: "edl-i13",
              type: "qcm",
              question: "Exercice 5 — Quel découpage est correct ?",
              options: [
                "[Léon serrait les poings en silence], car [il devinait] [que Clara lui mentait].",
                "[Léon serrait les poings en silence, car il devinait] [que Clara lui mentait].",
                "[Léon serrait les poings en silence], [car il devinait que Clara lui mentait].",
                "[Léon serrait] [les poings en silence], car [il devinait que] [Clara lui mentait].",
              ],
              correctAnswer: "[Léon serrait les poings en silence], car [il devinait] [que Clara lui mentait].",
              explanation: "3 verbes conjugués (*serrait, devinait, mentait*) = 3 propositions. *car* coordonne (hors crochets) ; *que* ouvre la subordonnée (dans les crochets).",
            },
            {
              id: "edl-i14",
              type: "qcm",
              question: "Combien de propositions dans « Elle avait fini son devoir et elle espérait que son amie viendrait » ?",
              options: ["2", "3", "4", "5"],
              correctAnswer: "3",
              explanation: "3 verbes conjugués : *avait fini* (un seul verbe au plus-que-parfait), *espérait*, *viendrait*.",
            },
            {
              id: "edl-i15",
              type: "nature-mots",
              question: "Distingue les deux emplois de « que ».",
              taggedText: "Je crois [que|Conjonction de subordination] le roman [que|Pronom relatif] tu lis te plaira.",
              options: ["Conjonction de subordination", "Pronom relatif"],
              explanation: "Le 1er *que* ne reprend rien. Le 2e reprend *roman* (tu lis ce roman) → pronom relatif.",
            },
            {
              id: "edl-i16",
              type: "conjugaison",
              question: "Exercice 6 — À l'imparfait : « Chaque objet leur (rappeler) Mathilde. Tout le monde (savoir) la vérité. »",
              options: ["Chaque objet leur…", "Tout le monde…"],
              correctAnswer: ["rappelait", "savait"],
              explanation: "*Chaque objet* → il ; *leur* est COI. *Tout le monde* est singulier → il savait.",
            },
            {
              id: "edl-i17",
              type: "conjugaison",
              question: "Exercice 6 — Au présent : « Les amis qui nous (rester) fidèles se (compter) sur les doigts de la main. »",
              options: ["qui nous…", "se…"],
              correctAnswer: ["restent", "comptent"],
              explanation: "*qui* reprend *les amis* → ils restent. Sujet de *comptent* : *les amis qui nous restent fidèles* → ils. *nous* n'est pas sujet.",
            },
            {
              id: "edl-i18",
              type: "conjugaison",
              question: "Au présent : « Les histoires que tu nous (raconter) nous (amuser). »",
              options: ["tu nous…", "Les histoires… nous…"],
              correctAnswer: ["racontes", "amusent"],
              explanation: "Sujet de *racontes* : tu. Sujet d'*amusent* : les histoires → elles. Les deux *nous* sont des compléments.",
            },
            {
              id: "edl-i19",
              type: "nature-mots",
              question: "Exercice 8 — Fonction de chaque complément souligné.",
              taggedText: "Si Luc [te|COI] prête [son vélo|COD], tu [le|COD] [lui|COI] rapporteras.",
              options: ["COD", "COI"],
              explanation: "Prêter qqch (son vélo = COD) à qqn (te = à toi = COI). Rapporter qqch (le = le vélo = COD) à qqn (lui = à Luc = COI).",
            },
            {
              id: "edl-i20",
              type: "qcm",
              question: "« Les gendarmes saisirent l'enfant par le bras. » Quel est le complément d'objet de **saisirent** ?",
              options: [
                "l'enfant : COD",
                "l'enfant : COD ; par le bras : COI",
                "par le bras : COD",
                "l'enfant : COI",
              ],
              correctAnswer: "l'enfant : COD",
              explanation: "Ils saisirent qui ? l'enfant → COD. *par le bras* dit comment : ce n'est pas un complément d'objet.",
            },
            {
              id: "edl-i21",
              type: "qcm",
              question: "Exercice 7 — Quelle phrase emploie **pardonner** avec un COD **et** un COI ?",
              options: [
                "Je pardonne son retard à mon frère.",
                "Je pardonne à mon frère.",
                "Je pardonne vite.",
                "Mon frère est pardonné.",
              ],
              correctAnswer: "Je pardonne son retard à mon frère.",
              explanation: "Pardonner qqch (son retard = COD) à qqn (à mon frère = COI).",
            },
            {
              id: "edl-i22",
              type: "nature-mots",
              question: "Exercice 9 — Donne la nature des expressions soulignées.",
              taggedText: "Il habitait une maison [claire|Adjectif qualificatif] [où il travaillait|Proposition subordonnée relative]. [On|Pronom indéfini] savait [qu'|Conjonction de subordination]il lisait [souvent|Adverbe].",
              options: ["Adjectif qualificatif", "Proposition subordonnée relative", "Pronom indéfini", "Conjonction de subordination", "Adverbe"],
              explanation: "*claire* qualifie *maison*. *où il travaillait* contient un verbe conjugué → proposition relative. *On* → pronom indéfini. *qu'* ne reprend rien → conjonction. *souvent* → adverbe.",
            },
            {
              id: "edl-i23",
              type: "nature-mots",
              question: "Le même mot a-t-il toujours la même nature ?",
              taggedText: "Les enfants [malades|Adjectif qualificatif] se reposent ; le médecin soigne les [malades|Nom commun].",
              options: ["Adjectif qualificatif", "Nom commun"],
              explanation: "*les enfants malades* : il qualifie *enfants* → adjectif. *les malades* : il désigne des personnes → nom commun.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Les pièges du contrôle : textes du manuel, sujets inversés, subordonnées, compléments et nature des expressions.",
          questions: [
            {
              id: "edl-e01",
              type: "etude-texte",
              question: "Exercice 2 — Analyse les mots de ce passage de Chateaubriand.",
              passage: "Nous apercevons à l'extrémité d'un de ces ponts deux mousses qui venaient à notre rencontre ; Gesril me dit : « Laisserons-nous passer ces gueux-là ? » et aussitôt il leur crie : « À l'eau, canards ! » Ceux-ci fondent sur nous.",
              subQuestions: [
                {
                  question: "Quel est l'antécédent de « qui » ?",
                  options: ["deux mousses", "ces ponts", "Nous"],
                  correctAnswer: "deux mousses",
                  explanation: "Ce sont les mousses qui venaient à leur rencontre.",
                },
                {
                  question: "Que désigne « leur » ?",
                  options: ["les deux mousses", "Gesril et le narrateur", "les ponts"],
                  correctAnswer: "les deux mousses",
                  explanation: "Gesril crie aux mousses : *il leur crie* = il crie à eux.",
                },
                {
                  question: "Quelle est la nature de « Ceux-ci » ?",
                  options: ["Pronom démonstratif", "Déterminant démonstratif", "Pronom personnel"],
                  correctAnswer: "Pronom démonstratif",
                },
                {
                  question: "Quelle est la nature de « notre » ?",
                  options: ["Déterminant possessif", "Pronom possessif", "Pronom personnel"],
                  correctAnswer: "Déterminant possessif",
                  explanation: "Il est suivi du nom *rencontre*.",
                },
              ],
              explanation: "Pour chaque pronom : sa sous-classe, puis ce qu'il désigne.",
            },
            {
              id: "edl-e02",
              type: "etude-texte",
              question: "Exercice 3 — Analyse le début du texte de Bradbury.",
              passage: "Cette nuit, j'ai pensé à tout le pétrole que j'ai déversé depuis dix ans. Et j'ai pensé aux livres. Et pour la première fois je me suis rendu compte que derrière chacun de ces livres, il y avait un homme.",
              subQuestions: [
                {
                  question: "Combien de propositions dans la 1re phrase ?",
                  options: ["1", "2", "3"],
                  correctAnswer: "2",
                  explanation: "*ai pensé* et *ai déversé* : 2 verbes conjugués.",
                },
                {
                  question: "Comment s'appelle la proposition de la 2e phrase ?",
                  options: ["Indépendante", "Principale", "Subordonnée"],
                  correctAnswer: "Indépendante",
                  explanation: "Un seul verbe conjugué, aucune subordonnée.",
                },
                {
                  question: "Dans la 1re phrase, « que j'ai déversé depuis dix ans » est…",
                  options: ["une subordonnée relative", "une subordonnée conjonctive", "une indépendante"],
                  correctAnswer: "une subordonnée relative",
                  explanation: "*que* reprend *pétrole* : pronom relatif.",
                },
                {
                  question: "Dans la 3e phrase, « que derrière chacun de ces livres, il y avait un homme » est…",
                  options: ["une subordonnée conjonctive", "une subordonnée relative", "une indépendante"],
                  correctAnswer: "une subordonnée conjonctive",
                  explanation: "Ici *que* ne reprend aucun nom : conjonction de subordination.",
                },
              ],
              explanation: "Compte les verbes conjugués, puis regarde ce qui introduit chaque proposition.",
            },
            {
              id: "edl-e03",
              type: "completion-tableau",
              question: "Conjugue **elles apprendre** aux temps composés demandés.",
              table: {
                headers: ["Temps", "Forme à écrire"],
                rows: [
                  [{ value: "Plus-que-parfait" }, { blank: true, correctAnswer: "elles avaient appris" }],
                  [{ value: "Passé antérieur" }, { blank: true, correctAnswer: "elles eurent appris" }],
                  [{ value: "Futur antérieur" }, { blank: true, correctAnswer: "elles auront appris" }],
                  [{ value: "Conditionnel passé" }, { blank: true, correctAnswer: "elles auraient appris" }],
                ],
              },
              explanation: "Auxiliaire à l'imparfait (avaient), au passé simple (eurent), au futur (auront), au conditionnel (auraient) + participe passé *appris*.",
            },
            {
              id: "edl-e04",
              type: "surlignage",
              question: "Surligne **tous** les participes passés.",
              taggedText: "Les promeneurs [perdus] avaient [suivi] un sentier [caché] et cherchaient un abri.",
              explanation: "*perdus* (qualifie *promeneurs*) et *caché* (qualifie *sentier*) sont employés comme adjectifs ; *suivi* fait partie de *avaient suivi*. *cherchaient* est un imparfait.",
            },
            {
              id: "edl-e05",
              type: "nature-mots",
              question: "Exercice 4 — Précise l'emploi de chaque participe passé.",
              taggedText: "On avait [retrouvé|Partie d'un verbe conjugué] le corps [abandonné|Employé comme adjectif] dans une chapelle, un cierge [allumé|Employé comme adjectif] entre les mains.",
              options: ["Employé comme adjectif", "Partie d'un verbe conjugué"],
              explanation: "*retrouvé* : auxiliaire *avait*. *abandonné* qualifie *corps* ; *allumé* qualifie *cierge*.",
            },
            {
              id: "edl-e06",
              type: "qcm",
              question: "Quelle analyse complète de **suscité** est attendue dans « cette jeune fille avait suscité la curiosité » ?",
              options: [
                "Partie du verbe conjugué *avait suscité* (plus-que-parfait), auxiliaire *avoir*",
                "Employé comme adjectif, il qualifie *curiosité*",
                "Employé comme adjectif, il qualifie *jeune fille*",
                "Verbe conjugué au passé simple",
              ],
              correctAnswer: "Partie du verbe conjugué *avait suscité* (plus-que-parfait), auxiliaire *avoir*",
              explanation: "Quand le participe fait partie d'un verbe conjugué, la consigne demande de relever l'auxiliaire.",
            },
            {
              id: "edl-e07",
              type: "etude-texte",
              question: "Exercice 5 — Analyse cette phrase.",
              passage: "Je ne demande pas que vous fassiez l'impossible mais qu'au moins vous essayiez.",
              subQuestions: [
                {
                  question: "Quels sont les verbes conjugués ?",
                  options: ["demande / fassiez / essayiez", "demande / fassiez", "demande / impossible / essayiez"],
                  correctAnswer: "demande / fassiez / essayiez",
                  explanation: "*fassiez* et *essayiez* sont au subjonctif présent.",
                },
                {
                  question: "Quelle est la nature de « mais » ?",
                  options: ["Conjonction de coordination", "Conjonction de subordination", "Adverbe"],
                  correctAnswer: "Conjonction de coordination",
                },
                {
                  question: "Combien y a-t-il de propositions subordonnées ?",
                  options: ["1", "2", "3"],
                  correctAnswer: "2",
                  explanation: "*que vous fassiez l'impossible* et *qu'au moins vous essayiez*, coordonnées par *mais*.",
                },
              ],
              explanation: "[Je ne demande pas] [que vous fassiez l'impossible] mais [qu'au moins vous essayiez].",
            },
            {
              id: "edl-e08",
              type: "qcm",
              question: "Exercice 5 — Quel découpage est correct ?",
              options: [
                "[Bien que la pluie continuât de tomber], [Eurydice sortit à la rencontre de Simon].",
                "Bien que [la pluie continuât de tomber], [Eurydice sortit à la rencontre de Simon].",
                "[Bien que la pluie continuât de tomber, Eurydice sortit à la rencontre de Simon].",
                "[Bien que la pluie continuât] [de tomber], [Eurydice sortit à la rencontre de Simon].",
              ],
              correctAnswer: "[Bien que la pluie continuât de tomber], [Eurydice sortit à la rencontre de Simon].",
              explanation: "2 verbes conjugués (*continuât, sortit*). La subordonnée est au début, et *bien que* est dans ses crochets. *tomber* est un infinitif.",
            },
            {
              id: "edl-e09",
              type: "qcm",
              question: "Exercice 5 — Quel découpage est correct ?",
              options: [
                "[Antigone remercia Créon], [elle prit sa pelle et son seau] et [se dirigea vers la sortie].",
                "[Antigone remercia Créon], [elle prit sa pelle] et [son seau] et [se dirigea vers la sortie].",
                "[Antigone remercia Créon, elle prit sa pelle et son seau] et [se dirigea vers la sortie].",
                "[Antigone remercia Créon], [elle prit sa pelle et son seau et se dirigea vers la sortie].",
              ],
              correctAnswer: "[Antigone remercia Créon], [elle prit sa pelle et son seau] et [se dirigea vers la sortie].",
              explanation: "3 verbes conjugués = 3 propositions indépendantes. Le 1er *et* relie deux noms (*pelle, seau*), pas deux propositions.",
            },
            {
              id: "edl-e10",
              type: "surlignage",
              question: "Surligne la ou les **conjonctions de subordination**.",
              taggedText: "Paul frappa Arthur si violemment [que] celui-ci renversa la chaise que Léa avait apportée.",
              explanation: "Le 1er *que* (avec *si*) introduit la conséquence → conjonction. Le 2e reprend *chaise* (Léa avait apporté la chaise) → pronom relatif.",
            },
            {
              id: "edl-e11",
              type: "conjugaison",
              question: "Exercice 6 — À l'imparfait : « Les personnes qu'(avoir) invitées Mme Duroy (représenter) la meilleure société. »",
              options: ["qu'… invitées Mme Duroy", "Les personnes… la meilleure société"],
              correctAnswer: ["avait", "représentaient"],
              explanation: "Qui avait invité ? **Mme Duroy**, sujet inversé → elle avait. Sujet de *représentaient* : les personnes → elles.",
            },
            {
              id: "edl-e12",
              type: "conjugaison",
              question: "Exercice 6 — À l'imparfait : « Tout le monde savait ce qui se (passer), mais la plupart (préférer) se taire. »",
              options: ["ce qui se…", "la plupart…"],
              correctAnswer: ["passait", "préféraient"],
              explanation: "*qui* reprend *ce* → singulier. *la plupart* → verbe au pluriel.",
            },
            {
              id: "edl-e13",
              type: "conjugaison",
              question: "Au présent : « C'est moi qui (apporter) les livres et c'est toi qui les (ranger). »",
              options: ["moi qui…", "toi qui les…"],
              correctAnswer: ["apporte", "ranges"],
              explanation: "*qui* reprend *moi* → j'apporte ; puis *toi* → tu ranges. *les* est COD, pas sujet.",
            },
            {
              id: "edl-e14",
              type: "conjugaison",
              question: "À l'imparfait : « Les élèves que je (voir) au fond me (sembler) attentifs. »",
              options: ["je…", "Les élèves… me…"],
              correctAnswer: ["voyais", "semblaient"],
              explanation: "Sujet de *voyais* : je. Sujet de *semblaient* : les élèves → ils. *me* est un complément.",
            },
            {
              id: "edl-e15",
              type: "qcm",
              question: "Pourquoi écrit-on « Chacun de mes amis **connaît** cette chanson » ?",
              options: [
                "Le sujet a pour noyau *Chacun*, singulier.",
                "*amis* est pluriel, donc le verbe devrait être au pluriel.",
                "*chanson* est singulier et commande l'accord.",
                "*mes* est le sujet du verbe.",
              ],
              correctAnswer: "Le sujet a pour noyau *Chacun*, singulier.",
              explanation: "Le sujet complet est *Chacun de mes amis* ; son mot principal est *Chacun* → il connaît.",
            },
            {
              id: "edl-e16",
              type: "nature-mots",
              question: "Exercice 8 — Complément d'objet ou pas ? Donne la fonction.",
              taggedText: "Les gendarmes saisirent [l'enfant|COD] [par le bras|Pas un complément d'objet] et [le|COD] ramenèrent [chez ses parents|Pas un complément d'objet].",
              options: ["COD", "COI", "Pas un complément d'objet"],
              explanation: "Ils saisirent qui ? l'enfant (COD). Ils ramenèrent qui ? le (= l'enfant, COD). *par le bras* (manière) et *chez ses parents* (lieu) ne sont pas demandés par le verbe.",
            },
            {
              id: "edl-e17",
              type: "qcm",
              question: "« Il prétendait qu'il était resté chez lui toute la journée. » Quel est le COD de **prétendait** ?",
              options: [
                "qu'il était resté chez lui toute la journée",
                "chez lui",
                "toute la journée",
                "il",
              ],
              correctAnswer: "qu'il était resté chez lui toute la journée",
              explanation: "Il prétendait quoi ? → toute la proposition subordonnée est COD.",
            },
            {
              id: "edl-e18",
              type: "qcm",
              question: "« Ne dis pas des choses pareilles, je **t'**entends parfaitement. » Fonction de **t'** ?",
              options: ["COD de entends", "COI de entends", "Sujet de entends", "Complément de lieu"],
              correctAnswer: "COD de entends",
              explanation: "J'entends qui ? toi → COD. *me, te, nous, vous* peuvent être COD ou COI : pose toujours la question.",
            },
            {
              id: "edl-e19",
              type: "etude-texte",
              question: "Analyse les fonctions dans cette phrase.",
              passage: "Les lettres que tu lui as envoyées lui rappellent que tu reviendras.",
              subQuestions: [
                {
                  question: "Quelle est la fonction du premier « lui » ?",
                  options: ["COI de as envoyées", "COD de as envoyées", "Sujet de rappellent"],
                  correctAnswer: "COI de as envoyées",
                  explanation: "Tu as envoyé les lettres **à** quelqu'un.",
                },
                {
                  question: "Quelle est la nature de « que » dans « que tu lui as envoyées » ?",
                  options: ["Pronom relatif", "Conjonction de subordination", "Pronom personnel"],
                  correctAnswer: "Pronom relatif",
                  explanation: "Il reprend *lettres*.",
                },
                {
                  question: "Quel est le COD de « rappellent » ?",
                  options: ["que tu reviendras", "Les lettres", "le second lui"],
                  correctAnswer: "que tu reviendras",
                  explanation: "Les lettres rappellent quoi ? que tu reviendras.",
                },
              ],
              explanation: "Traite chaque verbe séparément : qui fait l'action, quoi, à qui.",
            },
            {
              id: "edl-e20",
              type: "etude-texte",
              question: "Exercice 9 — Donne la nature des expressions de Zola.",
              passage: "Tout son luxe consista dans une petite maison claire de la ville neuve, où il s'enfermait religieusement, s'occupant avec amour d'histoire naturelle. Il se prit surtout d'une belle passion pour la physiologie. On sut dans la ville qu'il achetait souvent des cadavres.",
              subQuestions: [
                {
                  question: "Nature de « où il s'enfermait religieusement » ?",
                  options: ["Proposition subordonnée relative", "Pronom relatif", "Groupe nominal prépositionnel"],
                  correctAnswer: "Proposition subordonnée relative",
                  explanation: "Toute l'expression, avec le verbe conjugué *s'enfermait*. *où* seul serait un pronom relatif.",
                },
                {
                  question: "Nature de « s'occupant avec amour d'histoire naturelle » ?",
                  options: ["Groupe participial", "Gérondif", "Proposition subordonnée relative"],
                  correctAnswer: "Groupe participial",
                  explanation: "Participe présent *s'occupant* + ses compléments. Pas de *en* → pas un gérondif.",
                },
                {
                  question: "Nature de « la » (la physiologie) ?",
                  options: ["Article défini", "Pronom personnel", "Préposition"],
                  correctAnswer: "Article défini",
                  explanation: "Il est suivi du nom *physiologie*.",
                },
                {
                  question: "Nature de « qu' » (qu'il achetait) ?",
                  options: ["Conjonction de subordination", "Pronom relatif", "Pronom interrogatif"],
                  correctAnswer: "Conjonction de subordination",
                  explanation: "Il ne reprend aucun nom : il introduit ce que l'on sut.",
                },
              ],
              explanation: "Un mot → sa sous-classe. Un groupe → regarde son mot principal (nom, participe, verbe conjugué).",
            },
            {
              id: "edl-e21",
              type: "qcm",
              question: "« Il se souvient **d'une histoire ancienne**. » Quelle analyse est complète ?",
              options: [
                "Nature : groupe nominal prépositionnel ; fonction : COI de se souvient.",
                "Nature : COI ; fonction : groupe nominal prépositionnel.",
                "Nature : groupe nominal prépositionnel ; fonction : COD de se souvient.",
                "Nature : proposition relative ; fonction : sujet.",
              ],
              correctAnswer: "Nature : groupe nominal prépositionnel ; fonction : COI de se souvient.",
              explanation: "Nature = ce qu'est le groupe (*de* + GN). Fonction = son rôle : on se souvient **de** qqch → COI.",
            },
            {
              id: "edl-e22",
              type: "nature-mots",
              question: "Participe présent ou gérondif ?",
              taggedText: "[S'occupant|Participe présent] du jardin, elle chantait. Elle se détendait [en s'occupant|Gérondif] des fleurs.",
              options: ["Participe présent", "Gérondif", "Participe passé"],
              explanation: "Gérondif = **en** + participe présent. Sans *en*, c'est un participe présent.",
            },
            {
              id: "edl-e23",
              type: "nature-mots",
              question: "Le mot seul ou toute l'expression ?",
              taggedText: "Le village [où|Pronom relatif] nous vivons est proche de la forêt [où nous marchons|Proposition subordonnée relative].",
              options: ["Pronom relatif", "Proposition subordonnée relative", "Adverbe"],
              explanation: "*où* seul → pronom relatif. *où nous marchons* (avec un verbe conjugué) → proposition subordonnée relative.",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "francais-figures-de-style-fiche",
    title: "Les figures de style",
    description: "LEX 2 — Comparaison, métaphore, personnification, allégorie, métonymie, périphrase, antithèse, oxymore, antiphrase, chiasme : définitions, exemples et méthode.",
    type: "fiche",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER_LEX2,
    createdAt: "2026-11-14T21:00:00Z",
    updatedAt: "2026-11-14T21:00:00Z",
    tags: ["lexique", "figures de style", "métaphore", "oxymore", "étude de la langue", "fiche"],
    relatedResourceSlug: "francais-figures-de-style-quiz",
    mdxPath: "3e/francais/fiches/francais-figures-de-style-fiche.mdx",
  },
  {
    slug: "francais-figures-de-style-quiz",
    title: "Quiz — Les figures de style",
    description: "Reconnaître et distinguer les figures de substitution et d'opposition, sur les exemples de la fiche LEX 2 et de nouveaux extraits.",
    type: "quiz",
    level: "3e",
    subject: "francais",
    chapter: CHAPTER_LEX2,
    createdAt: "2026-11-14T21:00:00Z",
    updatedAt: "2026-11-14T21:00:00Z",
    tags: ["lexique", "figures de style", "quiz"],
    relatedResourceSlug: "francais-figures-de-style-fiche",
    quizData: {
      title: "Les figures de style",
      description: "Choisis ton niveau : 🟢 les définitions, 🟡 reconnaître dans une phrase, 🔴 les figures proches et les effets.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Les définitions et les exemples de la fiche LEX 2.",
          questions: [
            {
              id: "fds-f01",
              type: "association",
              question: "Associe chaque figure à sa définition.",
              pairs: [
                { left: "Comparaison", right: "Rapproche deux termes avec un outil (comme, semblable à…)" },
                { left: "Métaphore", right: "Rapproche deux termes sans outil" },
                { left: "Personnification", right: "Donne des traits humains à une chose ou un animal" },
                { left: "Périphrase", right: "Désigne un nom par un groupe de mots qui le décrit" },
              ],
              explanation: "Comparaison et métaphore créent une image ; la différence est l'outil de comparaison.",
            },
            {
              id: "fds-f02",
              type: "association",
              question: "Associe chaque figure d'opposition à sa définition.",
              pairs: [
                { left: "Antithèse", right: "Deux mots de sens contraire dans une même phrase" },
                { left: "Oxymore", right: "Deux mots contradictoires dans un même groupe" },
                { left: "Antiphrase", right: "Dire le contraire de ce qu'on pense, avec ironie" },
                { left: "Chiasme", right: "Une double opposition en miroir (AB / BA)" },
              ],
              explanation: "Oxymore = contraires collés ; antithèse = contraires séparés ; chiasme = en miroir ; antiphrase = ironie.",
            },
            {
              id: "fds-f03",
              type: "qcm",
              question: "« Le poète est **semblable au** prince des nuées » (Baudelaire). Quelle figure ?",
              options: ["Comparaison", "Métaphore", "Personnification", "Oxymore"],
              correctAnswer: "Comparaison",
              explanation: "*semblable à* est un outil de comparaison.",
            },
            {
              id: "fds-f04",
              type: "qcm",
              question: "« Les arbres sur ma route **fuyaient** » (Nerval). Quelle figure ?",
              options: ["Personnification", "Comparaison", "Antiphrase", "Périphrase"],
              correctAnswer: "Personnification",
              explanation: "*fuir* est une action d'être vivant, donnée ici à des arbres.",
            },
            {
              id: "fds-f05",
              type: "qcm",
              question: "« le **soleil noir** de la mélancolie » (Nerval). Quelle figure ?",
              options: ["Oxymore", "Antithèse", "Métaphore", "Comparaison"],
              correctAnswer: "Oxymore",
              explanation: "*soleil* (lumière) et *noir* (obscurité) sont contradictoires et collés dans un même groupe nominal.",
            },
            {
              id: "fds-f06",
              type: "qcm",
              question: "Rome, « **la Ville éternelle** ». Quelle figure ?",
              options: ["Périphrase", "Métonymie", "Allégorie", "Antithèse"],
              correctAnswer: "Périphrase",
              explanation: "Un groupe de mots remplace le nom *Rome* en décrivant une de ses caractéristiques.",
            },
            {
              id: "fds-f07",
              type: "qcm",
              question: "« **Quelle belle journée !** » dit-on sous une pluie battante. Quelle figure ?",
              options: ["Antiphrase", "Antithèse", "Oxymore", "Métaphore"],
              correctAnswer: "Antiphrase",
              explanation: "On dit le contraire de ce que l'on pense, avec ironie.",
            },
            {
              id: "fds-f08",
              type: "qcm",
              question: "« **Boire un verre** ». Quelle figure ?",
              options: ["Métonymie", "Métaphore", "Périphrase", "Personnification"],
              correctAnswer: "Métonymie",
              explanation: "On nomme le **contenant** (le verre) pour désigner le **contenu** (la boisson).",
            },
            {
              id: "fds-f09",
              type: "vrai-faux",
              question: "Une métaphore, c'est une comparaison **sans** outil de comparaison.",
              correctAnswer: "Vrai",
              explanation: "Le comparant remplace ou rejoint directement le comparé, sans *comme*.",
            },
            {
              id: "fds-f10",
              type: "vrai-faux",
              question: "L'oxymore et l'antithèse sont des **figures d'opposition**.",
              correctAnswer: "Vrai",
              explanation: "Avec l'antiphrase et le chiasme, elles jouent sur des contraires.",
            },
            {
              id: "fds-f11",
              type: "tri-categories",
              question: "Range ces figures dans leur famille.",
              items: [
                { id: "a", label: "Comparaison" },
                { id: "b", label: "Métaphore" },
                { id: "c", label: "Métonymie" },
                { id: "d", label: "Allégorie" },
                { id: "e", label: "Antithèse" },
                { id: "f", label: "Oxymore" },
                { id: "g", label: "Antiphrase" },
              ],
              categories: [
                { id: "sub", label: "Substitution (analogie)", correctItemIds: ["a", "b", "c", "d"] },
                { id: "opp", label: "Opposition", correctItemIds: ["e", "f", "g"] },
              ],
              explanation: "Substitution : comparaison, métaphore, personnification, métonymie, périphrase, allégorie. Opposition : antithèse, oxymore, antiphrase.",
            },
            {
              id: "fds-f12",
              type: "surlignage",
              question: "Surligne l'**outil de comparaison**.",
              taggedText: "Ses yeux brillaient [comme] deux étoiles dans la nuit.",
              explanation: "*comme* relie le comparé (*ses yeux*) au comparant (*deux étoiles*).",
            },
            {
              id: "fds-f13",
              type: "qcm",
              question: "« Ses yeux brillaient comme deux étoiles. » Quel est le **comparant** ?",
              options: ["deux étoiles", "Ses yeux", "comme", "brillaient"],
              correctAnswer: "deux étoiles",
              explanation: "Le comparé = ce dont on parle (*ses yeux*). Le comparant = l'image (*deux étoiles*). Le point commun = *briller*.",
            },
            {
              id: "fds-f14",
              type: "intrus",
              question: "Trouve l'intrus : lequel n'est **pas** un outil de comparaison ?",
              options: ["comme", "pareil à", "semblable à", "parce que"],
              correctAnswer: "parce que",
              explanation: "*parce que* exprime la cause, pas une comparaison.",
            },
            {
              id: "fds-f15",
              type: "qcm",
              question: "Zola, « **l'auteur de Germinal** ». Quelle figure ?",
              options: ["Périphrase", "Oxymore", "Personnification", "Antiphrase"],
              correctAnswer: "Périphrase",
              explanation: "Un groupe de mots désigne Zola par une de ses caractéristiques.",
            },
            {
              id: "fds-f16",
              type: "vrai-faux",
              question: "Dans une allégorie, une idée **abstraite** (la beauté, la mort…) est représentée par une image **concrète**.",
              correctAnswer: "Vrai",
              explanation: "Ex. : la beauté devient un « monstre énorme » chez Baudelaire.",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Reconnaître la figure dans des phrases nouvelles.",
          questions: [
            {
              id: "fds-i01",
              type: "qcm",
              question: "« La Chine toute entière n'est que poussière, **un océan de poussière** au vent. » Quelle figure ?",
              options: ["Métaphore", "Comparaison", "Oxymore", "Périphrase"],
              correctAnswer: "Métaphore",
              explanation: "La poussière est assimilée à un océan, sans outil de comparaison.",
            },
            {
              id: "fds-i02",
              type: "qcm",
              question: "« Cet homme est **un lion** au combat. » Quelle figure ?",
              options: ["Métaphore", "Comparaison", "Personnification", "Allégorie"],
              correctAnswer: "Métaphore",
              explanation: "Pas d'outil : l'homme **est** un lion (point commun : le courage, la force).",
            },
            {
              id: "fds-i03",
              type: "qcm",
              question: "« Le vent **hurlait sa colère** contre les volets. » Quelle figure ?",
              options: ["Personnification", "Métaphore", "Antithèse", "Métonymie"],
              correctAnswer: "Personnification",
              explanation: "*hurler sa colère* est un comportement humain prêté au vent.",
            },
            {
              id: "fds-i04",
              type: "qcm",
              question: "« Elle se sentait **seule au milieu de la foule**. » Quelle figure ?",
              options: ["Antithèse", "Oxymore", "Antiphrase", "Chiasme"],
              correctAnswer: "Antithèse",
              explanation: "*seule* et *foule* s'opposent, mais ne sont pas dans le même groupe : antithèse.",
            },
            {
              id: "fds-i05",
              type: "qcm",
              question: "« Cette **obscure clarté** qui tombe des étoiles » (Corneille). Quelle figure ?",
              options: ["Oxymore", "Antithèse", "Comparaison", "Périphrase"],
              correctAnswer: "Oxymore",
              explanation: "*obscure* et *clarté* sont contradictoires, dans le même groupe nominal.",
            },
            {
              id: "fds-i06",
              type: "qcm",
              question: "« **L'astre du jour** se levait sur la plaine. » Quelle figure ?",
              options: ["Périphrase", "Métaphore", "Métonymie", "Oxymore"],
              correctAnswer: "Périphrase",
              explanation: "*l'astre du jour* = le soleil, désigné par un groupe de mots.",
            },
            {
              id: "fds-i07",
              type: "qcm",
              question: "« Toute **la salle** applaudit. » Quelle figure ?",
              options: ["Métonymie", "Personnification", "Périphrase", "Allégorie"],
              correctAnswer: "Métonymie",
              explanation: "On nomme le lieu (la salle) pour désigner les personnes qui s'y trouvent.",
            },
            {
              id: "fds-i08",
              type: "qcm",
              question: "« Faire de **la voile** » pour « faire du bateau à voile ». Quelle figure ?",
              options: ["Synecdoque (métonymie de la partie pour le tout)", "Périphrase", "Métaphore", "Antiphrase"],
              correctAnswer: "Synecdoque (métonymie de la partie pour le tout)",
              explanation: "La voile est une **partie** du bateau : la partie désigne le tout.",
            },
            {
              id: "fds-i09",
              type: "qcm",
              question: "« **Bravo**, tu as encore renversé ton verre ! » Quelle figure ?",
              options: ["Antiphrase", "Antithèse", "Oxymore", "Métaphore"],
              correctAnswer: "Antiphrase",
              explanation: "*Bravo* veut dire ici le contraire : c'est un reproche ironique.",
            },
            {
              id: "fds-i10",
              type: "qcm",
              question: "« Il faut **manger** pour **vivre** et non **vivre** pour **manger**. » (Molière). Quelle figure ?",
              options: ["Chiasme", "Oxymore", "Comparaison", "Périphrase"],
              correctAnswer: "Chiasme",
              explanation: "Schéma A (manger) B (vivre) / B (vivre) A (manger) : une construction en miroir.",
            },
            {
              id: "fds-i11",
              type: "qcm",
              question: "« Rodrigue, as-tu du **cœur** ? » (Corneille). Que signifie *cœur* et quelle figure est-ce ?",
              options: [
                "Le courage — métonymie",
                "L'organe — personnification",
                "L'amour — antiphrase",
                "La colère — oxymore",
              ],
              correctAnswer: "Le courage — métonymie",
              explanation: "Le cœur (organe, symbole) désigne le courage, une qualité qui lui est associée.",
            },
            {
              id: "fds-i12",
              type: "qcm",
              question: "« La Mort, **faucheuse au manteau noir**, entra dans le village. » Quelle figure ?",
              options: ["Allégorie", "Comparaison", "Antithèse", "Périphrase"],
              correctAnswer: "Allégorie",
              explanation: "Une idée abstraite (la mort) est représentée par un personnage concret qui agit.",
            },
            {
              id: "fds-i13",
              type: "qcm",
              question: "« Sa voix était **douce comme du miel**. » Quel est le **point commun** entre le comparé et le comparant ?",
              options: ["la douceur", "la couleur", "le bruit", "la taille"],
              correctAnswer: "la douceur",
              explanation: "Comparé : *sa voix* · comparant : *du miel* · outil : *comme* · point commun : *douce*.",
            },
            {
              id: "fds-i14",
              type: "association",
              question: "Associe chaque phrase à sa figure.",
              pairs: [
                { left: "Ses dents sont des perles.", right: "Métaphore" },
                { left: "Ses dents sont blanches comme des perles.", right: "Comparaison" },
                { left: "Le réveil hurlait dans la chambre.", right: "Personnification" },
                { left: "Un silence assourdissant.", right: "Oxymore" },
              ],
              explanation: "Outil (*comme*) → comparaison ; sans outil → métaphore ; action humaine prêtée à un objet → personnification ; contraires collés → oxymore.",
            },
            {
              id: "fds-i15",
              type: "qcm-multiple",
              question: "Quelles phrases contiennent une **comparaison** ? (plusieurs réponses)",
              options: [
                "Il est rusé comme un renard.",
                "Comme il pleuvait, nous sommes rentrés.",
                "Elle ressemble à une fleur fanée.",
                "Ce garçon est un renard.",
              ],
              correctAnswer: ["Il est rusé comme un renard.", "Elle ressemble à une fleur fanée."],
              explanation: "*comme* et *ressembler à* sont des outils. Dans « Comme il pleuvait », *comme* = parce que : pas d'image. « Ce garçon est un renard » est une métaphore.",
            },
            {
              id: "fds-i16",
              type: "vrai-faux",
              question: "« Quelle belle journée ! » est **toujours** une antiphrase.",
              correctAnswer: "Faux",
              explanation: "C'est une antiphrase seulement si le contexte montre le contraire (une journée pluvieuse). Sinon, c'est un vrai compliment.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Distinguer les figures proches, analyser un extrait et dire l'effet.",
          questions: [
            {
              id: "fds-e01",
              type: "qcm",
              question: "« Ô beauté, ton regard, **infernal et divin**, / Verse confusément **le bienfait et le crime** » (Baudelaire). Quelle figure ?",
              options: ["Antithèse", "Oxymore", "Chiasme", "Antiphrase"],
              correctAnswer: "Antithèse",
              explanation: "Des mots de sens contraire (infernal / divin, bienfait / crime) sont rapprochés dans les vers, reliés par *et*.",
            },
            {
              id: "fds-e02",
              type: "qcm",
              question: "« Ô beauté, **monstre énorme**, effrayant, ingénu » (Baudelaire). Pourquoi est-ce une **allégorie** plutôt qu'une simple métaphore ?",
              options: [
                "Le comparé (la beauté) est abstrait et le comparant (un monstre) est concret.",
                "Il y a un outil de comparaison.",
                "Les deux mots sont de sens contraire.",
                "Le poète dit le contraire de ce qu'il pense.",
              ],
              correctAnswer: "Le comparé (la beauté) est abstrait et le comparant (un monstre) est concret.",
              explanation: "L'allégorie donne un corps, une forme concrète à une idée abstraite.",
            },
            {
              id: "fds-e03",
              type: "qcm",
              question: "Quelle est la différence entre **oxymore** et **antithèse** ?",
              options: [
                "Oxymore : contraires dans un même groupe ; antithèse : contraires séparés dans la phrase.",
                "Oxymore : avec ironie ; antithèse : sans ironie.",
                "Oxymore : avec un outil ; antithèse : sans outil.",
                "Il n'y a aucune différence.",
              ],
              correctAnswer: "Oxymore : contraires dans un même groupe ; antithèse : contraires séparés dans la phrase.",
              explanation: "*un soleil noir* (oxymore) / *Il est riche, elle est pauvre* (antithèse).",
            },
            {
              id: "fds-e04",
              type: "etude-texte",
              question: "Analyse ce passage.",
              passage: "La ville dormait sous la neige. Les lampadaires, comme de vieux veilleurs fatigués, clignaient des yeux. Au loin, le clocher, cette aiguille de pierre, perçait un ciel de plomb.",
              subQuestions: [
                {
                  question: "« La ville dormait » est…",
                  options: ["une personnification", "une comparaison", "un oxymore"],
                  correctAnswer: "une personnification",
                  explanation: "*dormir* est une action d'être vivant prêtée à la ville.",
                },
                {
                  question: "« comme de vieux veilleurs fatigués » est…",
                  options: ["une comparaison", "une métaphore", "une périphrase"],
                  correctAnswer: "une comparaison",
                  explanation: "Outil *comme* : les lampadaires sont comparés à des veilleurs.",
                },
                {
                  question: "« cette aiguille de pierre » (pour le clocher) est…",
                  options: ["une métaphore", "une comparaison", "une antiphrase"],
                  correctAnswer: "une métaphore",
                  explanation: "Le clocher est assimilé à une aiguille, sans outil (point commun : la forme pointue).",
                },
                {
                  question: "« un ciel de plomb » est…",
                  options: ["une métaphore", "un oxymore", "une antithèse"],
                  correctAnswer: "une métaphore",
                  explanation: "Le ciel est gris et lourd comme du plomb, sans outil.",
                },
              ],
              explanation: "Cherche d'abord l'outil de comparaison, puis les actions humaines prêtées aux choses.",
            },
            {
              id: "fds-e05",
              type: "qcm",
              question: "« Paris **a voté** contre la réforme. » Quelle figure, et que désigne *Paris* ?",
              options: [
                "Métonymie : les habitants (ou élus) de Paris",
                "Personnification : la ville elle-même",
                "Périphrase : la capitale",
                "Allégorie : l'idée de démocratie",
              ],
              correctAnswer: "Métonymie : les habitants (ou élus) de Paris",
              explanation: "Le lieu désigne les personnes qui y vivent ou le représentent : lien logique lieu / personnes.",
            },
            {
              id: "fds-e06",
              type: "qcm",
              question: "« **Cette horrible petite merveille** » : quelle figure ?",
              options: ["Oxymore", "Antithèse", "Antiphrase", "Chiasme"],
              correctAnswer: "Oxymore",
              explanation: "*horrible* et *merveille* sont contradictoires dans le même groupe nominal.",
            },
            {
              id: "fds-e07",
              type: "qcm",
              question: "Quel est l'**effet** de l'oxymore « le soleil noir de la mélancolie » ?",
              options: [
                "Exprimer une tristesse si profonde qu'elle éteint même la lumière",
                "Décrire précisément la couleur du soleil",
                "Faire rire le lecteur par ironie",
                "Désigner le soleil sans le nommer",
              ],
              correctAnswer: "Exprimer une tristesse si profonde qu'elle éteint même la lumière",
              explanation: "Associer lumière (soleil) et obscurité (noir) montre une souffrance qui assombrit tout.",
            },
            {
              id: "fds-e08",
              type: "qcm",
              question: "« Le poète est semblable au prince des nuées / Qui hante la tempête et se rit de l'archer ». Quel est le **comparé** ?",
              options: ["Le poète", "le prince des nuées", "la tempête", "l'archer"],
              correctAnswer: "Le poète",
              explanation: "Le poète (comparé) est comparé à l'albatros, « prince des nuées » (comparant). Point commun : la liberté, la hauteur.",
            },
            {
              id: "fds-e09",
              type: "qcm",
              question: "« le prince des nuées » (pour l'albatros) : en dehors de la comparaison, quelle figure forme ce groupe ?",
              options: ["Une périphrase", "Un oxymore", "Une antiphrase", "Une antithèse"],
              correctAnswer: "Une périphrase",
              explanation: "Un groupe de mots désigne l'oiseau par une caractéristique (il règne dans les nuages).",
            },
            {
              id: "fds-e10",
              type: "tri-categories",
              question: "Range chaque expression selon sa figure.",
              items: [
                { id: "a", label: "un silence assourdissant" },
                { id: "b", label: "une obscure clarté" },
                { id: "c", label: "le roi des animaux (le lion)" },
                { id: "d", label: "l'astre de la nuit (la lune)" },
                { id: "e", label: "boire un verre" },
                { id: "f", label: "toute la salle applaudit" },
              ],
              categories: [
                { id: "oxy", label: "Oxymore", correctItemIds: ["a", "b"] },
                { id: "peri", label: "Périphrase", correctItemIds: ["c", "d"] },
                { id: "meto", label: "Métonymie", correctItemIds: ["e", "f"] },
              ],
              explanation: "Contraires collés → oxymore. Groupe qui décrit pour nommer → périphrase. Un mot pour un autre lié (contenant, lieu) → métonymie.",
            },
            {
              id: "fds-e11",
              type: "qcm",
              question: "« **Le printemps riait** dans les jardins. » Quel est l'effet de cette personnification ?",
              options: [
                "Rendre la saison vivante et joyeuse",
                "Montrer que le printemps est triste",
                "Comparer le printemps à un jardin",
                "Désigner le printemps sans le nommer",
              ],
              correctAnswer: "Rendre la saison vivante et joyeuse",
              explanation: "Prêter le rire (action humaine) au printemps lui donne vie et transmet la gaieté.",
            },
            {
              id: "fds-e12",
              type: "qcm",
              question: "« Un roi **chantait** **en bas**, **en haut** **mourait** un dieu » (Hugo). Quelle figure ?",
              options: ["Chiasme", "Oxymore", "Périphrase", "Métonymie"],
              correctAnswer: "Chiasme",
              explanation: "Verbe (chantait) + lieu (en bas) / lieu (en haut) + verbe (mourait) : schéma A B / B A en miroir. Il renforce l'opposition roi / dieu, chanter / mourir.",
            },
            {
              id: "fds-e13",
              type: "qcm",
              question: "« Ah ! le **beau travail** ! » dit le professeur devant une copie couverte de taches. Pour reconnaître l'antiphrase, qu'est-ce qui est indispensable ?",
              options: [
                "Le contexte (la copie tachée)",
                "Un outil de comparaison",
                "Deux mots de sens contraire collés",
                "Un mot abstrait",
              ],
              correctAnswer: "Le contexte (la copie tachée)",
              explanation: "Seul le contexte montre que *beau* signifie ici le contraire : c'est de l'ironie.",
            },
            {
              id: "fds-e14",
              type: "association",
              question: "Associe chaque métonymie au lien logique qu'elle utilise.",
              pairs: [
                { left: "boire un verre", right: "Contenant / contenu" },
                { left: "faire de la voile", right: "Partie / tout (synecdoque)" },
                { left: "croiser le fer", right: "Matière / objet" },
                { left: "l'Élysée a annoncé", right: "Lieu / personne ou institution" },
              ],
              explanation: "La métonymie remplace un mot par un autre qui a un lien logique avec lui.",
            },
            {
              id: "fds-e15",
              type: "qcm",
              question: "« La Liberté guidait le peuple, **une femme au drapeau, pieds nus sur les barricades**. » Quelle figure ?",
              options: ["Allégorie", "Comparaison", "Antiphrase", "Oxymore"],
              correctAnswer: "Allégorie",
              explanation: "Une idée abstraite (la liberté) est représentée par une femme concrète, qui agit.",
            },
          ],
        },
      ],
    },
  },
];
