import type { Resource } from "@/types";

const CHAPTER = "Chapitre 1 — Cri de liberté, résister à l'oppression";

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
  }
];
