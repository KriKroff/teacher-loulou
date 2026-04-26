import type { Resource } from "@/types";

export const resources: Resource[] = [
  // ─────────────────────────────────────────
  // EC — Géométrie
  // ─────────────────────────────────────────
  {
    slug: "maths-ec-geometrie-fiche",
    title: "EC Maths — Géométrie",
    description:
      "Périmètre, aire, volumes (cube, pavé, pyramide, cône), patrons, théorème de Pythagore et théorème de Thalès.",
    type: "fiche",
    level: "4e",
    subject: "mathematiques",
    chapter: "EC — Mathématiques",
    createdAt: "2026-04-26T12:00:00Z",
    updatedAt: "2026-04-26T12:00:00Z",
    tags: ["géométrie", "pythagore", "thalès", "volume", "patron", "fiche", "EC"],
    relatedResourceSlug: "maths-ec-geometrie-quiz",
    mdxPath: "4e/mathematiques/fiches/maths-ec-geometrie-fiche.mdx",
  },
  {
    slug: "maths-ec-geometrie-quiz",
    title: "Quiz EC — Géométrie",
    description:
      "3 niveaux : périmètre, aire, volumes, Pythagore, Thalès. 10 questions par session.",
    type: "quiz",
    level: "4e",
    subject: "mathematiques",
    chapter: "EC — Mathématiques",
    createdAt: "2026-04-26T12:00:00Z",
    updatedAt: "2026-04-26T12:00:00Z",
    tags: ["géométrie", "pythagore", "thalès", "volume", "quiz", "EC"],
    relatedResourceSlug: "maths-ec-geometrie-fiche",
    quizData: {
      title: "Quiz EC — Géométrie",
      description: "Choisis ton niveau pour commencer !",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Formules de base, définitions, vrai ou faux.",
          questions: [
            {
              id: "gf1",
              question: "Le périmètre d'un carré de côté 4 cm est 16 cm.",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation: "P = 4 × 4 = 16 cm. Correct !",
            },
            {
              id: "gf2",
              question: "Quelle est la formule de l'aire d'un rectangle de longueur L et largeur l ?",
              type: "qcm",
              options: ["L + l", "2(L + l)", "L × l", "L² × l"],
              correctAnswer: "L × l",
              explanation: "L'aire d'un rectangle = longueur × largeur.",
            },
            {
              id: "gf3",
              question: "L'aire d'un disque de rayon r est :",
              type: "qcm",
              options: ["2πr", "πr²", "πr", "2πr²"],
              correctAnswer: "πr²",
              explanation: "L'aire du disque = π × r². La circonférence, elle, est 2πr.",
            },
            {
              id: "gf4",
              question: "Le périmètre d'un cercle de rayon 5 cm est 10π cm.",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation: "Circonférence = 2πr = 2 × π × 5 = 10π cm. Correct !",
            },
            {
              id: "gf5",
              question: "Un cube possède combien de faces ?",
              type: "qcm",
              options: ["4", "6", "8", "12"],
              correctAnswer: "6",
              explanation: "Un cube a 6 faces carrées : devant, derrière, gauche, droite, haut, bas.",
            },
            {
              id: "gf6",
              question: "Le théorème de Pythagore s'applique à n'importe quel triangle.",
              type: "vrai-faux",
              correctAnswer: "Faux",
              explanation: "Le théorème de Pythagore ne s'applique qu'aux triangles RECTANGLES.",
            },
            {
              id: "gf7",
              question: "Dans un triangle rectangle, l'hypoténuse est :",
              type: "qcm",
              options: [
                "Le côté adjacent à l'angle droit",
                "Le plus petit côté",
                "Le côté opposé à l'angle droit",
                "N'importe quel côté",
              ],
              correctAnswer: "Le côté opposé à l'angle droit",
              explanation: "L'hypoténuse est toujours en face de l'angle droit. C'est le côté le plus long.",
            },
            {
              id: "gf8",
              question: "L'aire d'un triangle de base 8 cm et hauteur 5 cm est :",
              type: "qcm",
              options: ["40 cm²", "20 cm²", "13 cm²", "80 cm²"],
              correctAnswer: "20 cm²",
              explanation: "A = (base × hauteur) / 2 = (8 × 5) / 2 = 40 / 2 = 20 cm².",
            },
            {
              id: "gf9",
              question: "La formule du volume d'un cube de côté a est :",
              type: "qcm",
              options: ["3a", "a²", "a³", "6a²"],
              correctAnswer: "a³",
              explanation: "V = a × a × a = a³. Ex : cube de 3 cm → V = 27 cm³.",
            },
            {
              id: "gf10",
              question: "Un pavé droit a 6 faces rectangulaires.",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation: "Un pavé droit est une boîte rectangulaire : 6 faces toutes rectangulaires.",
            },
            {
              id: "gf11",
              question: "La génératrice d'un cône est :",
              type: "qcm",
              options: [
                "Le rayon de la base",
                "La hauteur du cône",
                "Le segment reliant le sommet à un point du cercle de base",
                "Le périmètre de la base",
              ],
              correctAnswer: "Le segment reliant le sommet à un point du cercle de base",
              explanation:
                "La génératrice g relie le sommet S à un point du cercle de base. On peut la calculer avec Pythagore : g = √(r² + h²).",
            },
            {
              id: "gf12",
              question: "Le volume d'un pavé droit de dimensions 3 cm × 2 cm × 5 cm est :",
              type: "qcm",
              options: ["10 cm³", "30 cm³", "15 cm³", "25 cm³"],
              correctAnswer: "30 cm³",
              explanation: "V = L × l × h = 3 × 2 × 5 = 30 cm³.",
            },
            {
              id: "gf13",
              question: "Quelle formule donne le périmètre d'un rectangle de longueur L et largeur l ?",
              type: "qcm",
              options: ["L × l", "L + l", "2 × (L + l)", "4 × (L + l)"],
              correctAnswer: "2 × (L + l)",
              explanation: "P = 2 × (L + l). On additionne les 4 côtés : L + l + L + l = 2L + 2l = 2(L+l).",
            },
            {
              id: "gf14",
              question: "Le patron d'une pyramide à base carrée contient :",
              type: "qcm",
              options: [
                "1 carré et 4 rectangles",
                "1 carré et 4 triangles",
                "2 carrés et 4 triangles",
                "5 triangles",
              ],
              correctAnswer: "1 carré et 4 triangles",
              explanation:
                "Le patron d'une pyramide carrée : 1 carré (la base) + 4 triangles isocèles (les faces latérales).",
            },
            {
              id: "gf15",
              question: "L'aire d'un carré de côté 7 cm est 49 cm².",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation: "A = a² = 7² = 49 cm². Correct !",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Calculs, application des formules, Pythagore et Thalès.",
          questions: [
            {
              id: "gi1",
              question:
                "Dans un triangle rectangle, les deux cathètes mesurent 3 cm et 4 cm. Quelle est la longueur de l'hypoténuse ?",
              type: "qcm",
              options: ["5 cm", "6 cm", "7 cm", "√7 cm"],
              correctAnswer: "5 cm",
              explanation:
                "BC² = 3² + 4² = 9 + 16 = 25. BC = √25 = 5 cm. C'est le classique triangle 3-4-5 !",
            },
            {
              id: "gi2",
              question: "Calculer le volume d'un pavé droit de dimensions 4 cm × 3 cm × 2 cm.",
              type: "nombre",
              correctAnswer: "24",
              tolerance: 0,
              explanation: "V = 4 × 3 × 2 = 24 cm³.",
            },
            {
              id: "gi3",
              question: "L'aire d'un disque de rayon 5 cm est :",
              type: "qcm",
              options: ["10π cm²", "25π cm²", "5π cm²", "25 cm²"],
              correctAnswer: "25π cm²",
              explanation: "A = π × r² = π × 5² = 25π cm² ≈ 78,5 cm².",
            },
            {
              id: "gi4",
              question:
                "Théorème de Pythagore : dans un triangle rectangle en A, BC² = ___ + AC²",
              type: "texte-a-trous",
              options: ["AB²", "AC²", "BC²", "BC"],
              correctAnswer: "AB²",
              explanation:
                "Dans un triangle rectangle en A : BC² = AB² + AC². BC est l'hypoténuse, AB et AC sont les cathètes.",
            },
            {
              id: "gi5",
              question: "Le volume d'une pyramide de base B = 12 cm² et hauteur h = 6 cm est :",
              type: "qcm",
              options: ["72 cm³", "24 cm³", "36 cm³", "48 cm³"],
              correctAnswer: "24 cm³",
              explanation: "V = (B × h) / 3 = (12 × 6) / 3 = 72 / 3 = 24 cm³.",
            },
            {
              id: "gi6",
              question: "Un triangle a des côtés de 5 cm, 12 cm et 13 cm. Est-il rectangle ?",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation:
                "5² + 12² = 25 + 144 = 169 = 13². Par la réciproque de Pythagore, ce triangle est rectangle.",
            },
            {
              id: "gi7",
              question: "Associer chaque solide à son volume :",
              type: "association",
              pairs: [
                { left: "Cube (côté a)", right: "a³" },
                { left: "Pavé droit", right: "L × l × h" },
                { left: "Pyramide", right: "(B × h) / 3" },
                { left: "Cône", right: "(π × r² × h) / 3" },
              ],
              correctAnswer: "association",
              explanation: "Pyramide et cône ont le facteur 1/3 car ils ont une pointe.",
            },
            {
              id: "gi8",
              question: "Le périmètre d'un rectangle de longueur 8 cm et largeur 3 cm est :",
              type: "nombre",
              correctAnswer: "22",
              tolerance: 0,
              explanation: "P = 2 × (L + l) = 2 × (8 + 3) = 2 × 11 = 22 cm.",
            },
            {
              id: "gi9",
              question:
                "Avec le théorème de Thalès : OA = 3 cm, OM = 6 cm, OB = 4 cm. AB // MN. Trouver ON.",
              type: "nombre",
              correctAnswer: "8",
              tolerance: 0,
              explanation:
                "OA/OM = OB/ON → 3/6 = 4/ON → ON = (4 × 6) / 3 = 24 / 3 = 8 cm.",
            },
            {
              id: "gi10",
              question:
                "La réciproque du théorème de Pythagore permet de démontrer qu'un triangle est rectangle.",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation:
                "Si c² = a² + b² (c étant le plus grand côté), alors le triangle est rectangle. C'est exactement la réciproque.",
            },
            {
              id: "gi11",
              question:
                "Dans le triangle ABC, AB = 6 cm, BC = 8 cm, AC = 10 cm. L'angle droit est en :",
              type: "qcm",
              options: ["A", "B", "C"],
              correctAnswer: "B",
              explanation:
                "Le plus grand côté est AC = 10. AB² + BC² = 36 + 64 = 100 = 10² = AC². Donc l'angle droit est en B.",
            },
            {
              id: "gi12",
              question:
                "Le patron d'une pyramide à base carrée est composé d'un ___ et de 4 ___.",
              type: "texte-a-trous",
              options: ["carré", "triangles", "rectangles", "cercle"],
              correctAnswer: "carré",
              explanation:
                "1 carré = la base. 4 triangles isocèles = les 4 faces latérales.",
            },
            {
              id: "gi13",
              question: "Volume d'un cube de côté 4 cm :",
              type: "nombre",
              correctAnswer: "64",
              tolerance: 0,
              explanation: "V = a³ = 4³ = 64 cm³.",
            },
            {
              id: "gi14",
              question:
                "Pour calculer le volume d'un cône de rayon r = 3 cm et hauteur h = 4 cm, on obtient :",
              type: "qcm",
              options: ["12π cm³", "36π cm³", "48π cm³", "4π cm³"],
              correctAnswer: "12π cm³",
              explanation:
                "V = (π × r² × h) / 3 = (π × 9 × 4) / 3 = 36π / 3 = 12π cm³ ≈ 37,7 cm³.",
            },
            {
              id: "gi15",
              question:
                "Le patron d'un cône est composé d'un secteur angulaire et d'un disque.",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation:
                "Le secteur angulaire représente la face latérale dépliée (son rayon = la génératrice g). Le disque de rayon r est la base.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Raisonnements, calculs complexes, réciproques.",
          questions: [
            {
              id: "ge1",
              question: "Quelles affirmations sur le théorème de Thalès sont correctes ?",
              type: "qcm-multiple",
              options: [
                "OA/OM = OB/ON si AB // MN",
                "AB // MN si OA/OM = OB/ON (réciproque)",
                "Les triangles OAB et OMN sont semblables",
                "AB/MN = OM/OA",
              ],
              correctAnswer: [
                "OA/OM = OB/ON si AB // MN",
                "AB // MN si OA/OM = OB/ON (réciproque)",
                "Les triangles OAB et OMN sont semblables",
              ],
              explanation:
                "AB/MN = OA/OM = OB/ON (et non OM/OA). Les trois premières propositions sont correctes.",
            },
            {
              id: "ge2",
              question:
                "Pour démontrer qu'un triangle est rectangle par la réciproque de Pythagore, remettre dans l'ordre :",
              type: "ordre",
              items: [
                "Calculer le carré du plus grand côté",
                "Calculer la somme des carrés des deux autres côtés",
                "Comparer les deux résultats",
                "Conclure : si égaux → triangle rectangle",
              ],
              correctAnswer: [
                "Calculer le carré du plus grand côté",
                "Calculer la somme des carrés des deux autres côtés",
                "Comparer les deux résultats",
                "Conclure : si égaux → triangle rectangle",
              ],
              explanation:
                "On identifie d'abord le plus grand côté, on calcule son carré, on le compare avec la somme des carrés des autres côtés.",
            },
            {
              id: "ge3",
              question:
                "Dans un triangle rectangle, les cathètes mesurent 5 cm et 12 cm. Calculer l'hypoténuse.",
              type: "nombre",
              correctAnswer: "13",
              tolerance: 0,
              explanation: "c² = 5² + 12² = 25 + 144 = 169 → c = √169 = 13 cm.",
            },
            {
              id: "ge4",
              question:
                "Dans le triangle OAB, OM = 4 cm, OA = 6 cm, OB = 9 cm (M sur OA, N sur OB). Pour que MN // AB, quelle doit être la valeur de ON ?",
              type: "nombre",
              correctAnswer: "6",
              tolerance: 0,
              explanation:
                "Réciproque de Thalès : OA/OM = OB/ON → 6/4 = 9/ON → ON = (9 × 4) / 6 = 36 / 6 = 6 cm.",
            },
            {
              id: "ge5",
              question: "Associer chaque formule à ce qu'elle calcule :",
              type: "association",
              pairs: [
                { left: "Périmètre d'un cercle", right: "2πr" },
                { left: "Aire d'un disque", right: "πr²" },
                { left: "Périmètre d'un carré", right: "4a" },
                { left: "Aire d'un triangle", right: "bh/2" },
              ],
              correctAnswer: "association",
              explanation: "Les formules fondamentales à maîtriser pour l'EC.",
            },
            {
              id: "ge6",
              question: "Théorème de Thalès : OA/OM = OB/ON = ___/MN",
              type: "texte-a-trous",
              options: ["AB", "OA", "OB", "ON"],
              correctAnswer: "AB",
              explanation:
                "Le troisième rapport est le rapport des côtés parallèles AB et MN : OA/OM = OB/ON = AB/MN.",
            },
            {
              id: "ge7",
              question: "Le patron d'un cône est composé de :",
              type: "qcm",
              options: [
                "Deux disques et un rectangle",
                "Un secteur angulaire et un disque",
                "Un carré et quatre triangles",
                "Un rectangle et deux demi-disques",
              ],
              correctAnswer: "Un secteur angulaire et un disque",
              explanation:
                "La face latérale dépliée du cône est un secteur angulaire (dont le rayon = génératrice g). La base est un disque de rayon r.",
            },
            {
              id: "ge8",
              question:
                "Calculer le volume d'une pyramide à base carrée de côté 6 cm et de hauteur 5 cm.",
              type: "nombre",
              correctAnswer: "60",
              tolerance: 0,
              explanation:
                "B = 6² = 36 cm². V = (B × h) / 3 = (36 × 5) / 3 = 180 / 3 = 60 cm³.",
            },
            {
              id: "ge9",
              question: "Un triangle a des côtés 7 cm, 24 cm et 25 cm. Est-il rectangle ?",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation:
                "7² + 24² = 49 + 576 = 625 = 25². Par la réciproque de Pythagore : rectangle !",
            },
            {
              id: "ge10",
              question:
                "Pour calculer la génératrice d'un cône de rayon r = 3 cm et hauteur h = 4 cm, on utilise :",
              type: "qcm",
              options: ["g = r + h", "g = r × h", "g = √(r² + h²)", "g = (r × h) / 2"],
              correctAnswer: "g = √(r² + h²)",
              explanation:
                "La génératrice g est l'hypoténuse du triangle rectangle formé par r et h. Donc g = √(r² + h²) = √(9+16) = √25 = 5 cm.",
            },
            {
              id: "ge11",
              question:
                "Calculer le volume d'un cône de rayon r = 6 cm et hauteur h = 7 cm. Donner la valeur approchée (utiliser π ≈ 3,14).",
              type: "nombre",
              correctAnswer: "264",
              tolerance: 2,
              explanation:
                "V = (π × r² × h) / 3 = (3,14 × 36 × 7) / 3 = (3,14 × 252) / 3 = 791,28 / 3 ≈ 263,8 ≈ 264 cm³.",
            },
            {
              id: "ge12",
              question: "Associer chaque patron à son solide :",
              type: "association",
              pairs: [
                { left: "Secteur + disque", right: "Cône" },
                { left: "Carré + 4 triangles", right: "Pyramide carrée" },
                { left: "6 rectangles", right: "Pavé droit" },
                { left: "6 carrés identiques", right: "Cube" },
              ],
              correctAnswer: "association",
              explanation: "Chaque solide a un patron unique qu'on reconnaît à ses faces.",
            },
            {
              id: "ge13",
              question:
                "Dans le triangle OAB, AB // MN avec M sur OA et N sur OB. OA = 8 cm, OM = 2 cm, ON = 3 cm. Calculer OB.",
              type: "nombre",
              correctAnswer: "12",
              tolerance: 0,
              explanation:
                "Thalès : OA/OM = OB/ON → 8/2 = OB/3 → OB = 3 × 4 = 12 cm.",
            },
            {
              id: "ge14",
              question:
                "Pour utiliser le théorème de Thalès et trouver une longueur inconnue, remettre dans l'ordre :",
              type: "ordre",
              items: [
                "Identifier le point commun O et les droites sécantes",
                "Vérifier ou poser le parallélisme (AB // MN)",
                "Écrire l'égalité des rapports (OA/OM = OB/ON)",
                "Identifier les longueurs connues et l'inconnue",
                "Isoler l'inconnue et calculer",
              ],
              correctAnswer: [
                "Identifier le point commun O et les droites sécantes",
                "Vérifier ou poser le parallélisme (AB // MN)",
                "Écrire l'égalité des rapports (OA/OM = OB/ON)",
                "Identifier les longueurs connues et l'inconnue",
                "Isoler l'inconnue et calculer",
              ],
              explanation: "La méthode en 5 étapes pour appliquer Thalès avec rigueur.",
            },
            {
              id: "ge15",
              question:
                "Dans un triangle rectangle en B, AB = 9 cm et BC = 12 cm. Calculer AC (l'hypoténuse).",
              type: "nombre",
              correctAnswer: "15",
              tolerance: 0,
              explanation:
                "AC² = AB² + BC² = 81 + 144 = 225. AC = √225 = 15 cm. (Triangle 3-4-5 multiplié par 3 !)",
            },
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────
  // EC — Algèbre
  // ─────────────────────────────────────────
  {
    slug: "maths-ec-algebre-fiche",
    title: "EC Maths — Algèbre",
    description:
      "Fractions (simplification, opérations), puissances et préfixes, écriture scientifique, proportionnalité.",
    type: "fiche",
    level: "4e",
    subject: "mathematiques",
    chapter: "EC — Mathématiques",
    createdAt: "2026-04-26T12:00:00Z",
    updatedAt: "2026-04-26T12:00:00Z",
    tags: ["algèbre", "fractions", "puissances", "écriture scientifique", "proportionnalité", "fiche", "EC"],
    relatedResourceSlug: "maths-ec-algebre-quiz",
    mdxPath: "4e/mathematiques/fiches/maths-ec-algebre-fiche.mdx",
  },
  {
    slug: "maths-ec-algebre-quiz",
    title: "Quiz EC — Algèbre",
    description:
      "3 niveaux : fractions, puissances, écriture scientifique, proportionnalité. 10 questions par session.",
    type: "quiz",
    level: "4e",
    subject: "mathematiques",
    chapter: "EC — Mathématiques",
    createdAt: "2026-04-26T12:00:00Z",
    updatedAt: "2026-04-26T12:00:00Z",
    tags: ["algèbre", "fractions", "puissances", "écriture scientifique", "proportionnalité", "quiz", "EC"],
    relatedResourceSlug: "maths-ec-algebre-fiche",
    quizData: {
      title: "Quiz EC — Algèbre",
      description: "Choisis ton niveau pour commencer !",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Définitions, calculs simples, vrai ou faux.",
          questions: [
            {
              id: "af1",
              question: "La fraction 3/4 est simplifiée au maximum.",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation: "3 et 4 ont comme seul diviseur commun 1 : la fraction est irréductible.",
            },
            {
              id: "af2",
              question: "Pour simplifier 12/18, on divise numérateur et dénominateur par :",
              type: "qcm",
              options: ["2", "3", "6", "9"],
              correctAnswer: "6",
              explanation: "PGCD(12, 18) = 6. 12/6 = 2 et 18/6 = 3. Donc 12/18 = 2/3.",
            },
            {
              id: "af3",
              question: "Calculer 1/2 + 1/4.",
              type: "qcm",
              options: ["2/6", "1/3", "3/4", "2/4"],
              correctAnswer: "3/4",
              explanation: "1/2 = 2/4. Donc 2/4 + 1/4 = 3/4.",
            },
            {
              id: "af4",
              question: "10³ = 1 000",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation: "10³ = 10 × 10 × 10 = 1 000. C'est aussi la valeur du préfixe kilo.",
            },
            {
              id: "af5",
              question: "Le préfixe kilo correspond à :",
              type: "qcm",
              options: ["10", "100", "1 000", "1 000 000"],
              correctAnswer: "1 000",
              explanation: "Kilo = 10³ = 1 000. Ex : 1 km = 1 000 m, 1 kg = 1 000 g.",
            },
            {
              id: "af6",
              question: "Le préfixe milli correspond à 10⁻³.",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation: "Milli = 10⁻³ = 0,001. Ex : 1 mm = 0,001 m = 10⁻³ m.",
            },
            {
              id: "af7",
              question: "Calculer 2/3 × 3/4.",
              type: "qcm",
              options: ["5/7", "6/12", "1/2", "2/4"],
              correctAnswer: "1/2",
              explanation: "(2×3)/(3×4) = 6/12 = 1/2.",
            },
            {
              id: "af8",
              question: "L'écriture scientifique d'un nombre est de la forme :",
              type: "qcm",
              options: [
                "a + 10ⁿ avec a entier",
                "a × 10ⁿ avec 1 ≤ a < 10",
                "a × 10ⁿ avec 0 < a < 1",
                "a / 10ⁿ avec a entier",
              ],
              correctAnswer: "a × 10ⁿ avec 1 ≤ a < 10",
              explanation:
                "La partie a doit avoir un seul chiffre avant la virgule, entre 1 et 9 inclus.",
            },
            {
              id: "af9",
              question:
                "Un graphique représentant une situation de proportionnalité est une droite qui passe par l'origine.",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation:
                "Proportionnalité → droite passant par (0 ; 0). Si elle ne passe pas par l'origine, ce n'est pas proportionnel.",
            },
            {
              id: "af10",
              question: "Calculer 1/3 ÷ 1/6.",
              type: "qcm",
              options: ["1/18", "1/2", "2", "6"],
              correctAnswer: "2",
              explanation: "1/3 ÷ 1/6 = 1/3 × 6/1 = 6/3 = 2.",
            },
            {
              id: "af11",
              question: "L'écriture scientifique de 3 500 est :",
              type: "qcm",
              options: ["35 × 10²", "3,5 × 10³", "0,35 × 10⁴", "350 × 10¹"],
              correctAnswer: "3,5 × 10³",
              explanation:
                "3 500 → on place la virgule après le 3 → 3,5. On a avancé 3 fois → 3,5 × 10³.",
            },
            {
              id: "af12",
              question:
                "Pour multiplier des fractions, on additionne les numérateurs et les dénominateurs.",
              type: "vrai-faux",
              correctAnswer: "Faux",
              explanation:
                "Pour multiplier : numérateur × numérateur / dénominateur × dénominateur. On ne fait jamais l'addition des dénominateurs !",
            },
            {
              id: "af13",
              question: "Que vaut 10⁻² ?",
              type: "qcm",
              options: ["−100", "100", "0,01", "0,1"],
              correctAnswer: "0,01",
              explanation: "10⁻² = 1/10² = 1/100 = 0,01.",
            },
            {
              id: "af14",
              question: "Le produit en croix : si a/b = c/d, alors :",
              type: "qcm",
              options: ["a + d = b + c", "a × b = c × d", "a × d = b × c", "a / c = d / b"],
              correctAnswer: "a × d = b × c",
              explanation:
                "Produit en croix : on multiplie en diagonale. a/b = c/d → a × d = b × c.",
            },
            {
              id: "af15",
              question: "Associer chaque préfixe à sa puissance de 10 :",
              type: "association",
              pairs: [
                { left: "kilo", right: "10³" },
                { left: "milli", right: "10⁻³" },
                { left: "méga", right: "10⁶" },
                { left: "micro", right: "10⁻⁶" },
              ],
              correctAnswer: "association",
              explanation:
                "kilo (k) = 10³, milli (m) = 10⁻³, méga (M) = 10⁶, micro (µ) = 10⁻⁶.",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Calculs, conversions, proportionnalité.",
          questions: [
            {
              id: "ai1",
              question: "Quelle est la fraction simplifiée de 24/36 ?",
              type: "qcm",
              options: ["4/6", "2/3", "8/12", "12/18"],
              correctAnswer: "2/3",
              explanation: "PGCD(24, 36) = 12. 24÷12 = 2, 36÷12 = 3. Donc 24/36 = 2/3.",
            },
            {
              id: "ai2",
              question: "Calculer 3/5 + 7/10.",
              type: "qcm",
              options: ["10/15", "13/10", "1", "10/50"],
              correctAnswer: "13/10",
              explanation: "3/5 = 6/10. Donc 6/10 + 7/10 = 13/10 (soit 1,3).",
            },
            {
              id: "ai3",
              question: "L'écriture scientifique de 0,00056 est :",
              type: "qcm",
              options: ["56 × 10⁻⁵", "5,6 × 10⁻⁴", "0,56 × 10⁻³", "5,6 × 10⁴"],
              correctAnswer: "5,6 × 10⁻⁴",
              explanation:
                "On déplace la virgule 4 fois vers la droite pour obtenir 5,6 → exposant −4.",
            },
            {
              id: "ai4",
              question:
                "Dans le tableau suivant, les valeurs sont-elles proportionnelles ? x = 2, 4, 6 → y = 6, 12, 18",
              type: "vrai-faux",
              correctAnswer: "Vrai",
              explanation:
                "6/2 = 3, 12/4 = 3, 18/6 = 3. Tous les quotients y/x valent 3 → proportionnel avec k = 3.",
            },
            {
              id: "ai5",
              question:
                "Dans un tableau de proportionnalité, pour x = 3 on a y = 12. Quel est le coefficient de proportionnalité ?",
              type: "nombre",
              correctAnswer: "4",
              tolerance: 0,
              explanation: "k = y/x = 12/3 = 4.",
            },
            {
              id: "ai6",
              question: "Calculer 5/6 − 1/4.",
              type: "qcm",
              options: ["4/2", "7/12", "2/3", "1/6"],
              correctAnswer: "7/12",
              explanation:
                "Dénominateur commun = 12. 5/6 = 10/12 et 1/4 = 3/12. 10/12 − 3/12 = 7/12.",
            },
            {
              id: "ai7",
              question: "Calculer 2/3 ÷ 4/9.",
              type: "qcm",
              options: ["8/27", "3/2", "2/4", "6/12"],
              correctAnswer: "3/2",
              explanation: "2/3 ÷ 4/9 = 2/3 × 9/4 = 18/12 = 3/2.",
            },
            {
              id: "ai8",
              question: "Que vaut 10² × 10³ ?",
              type: "qcm",
              options: ["10⁵", "10⁶", "20⁵", "10"],
              correctAnswer: "10⁵",
              explanation:
                "Pour multiplier des puissances de même base, on additionne les exposants : 10² × 10³ = 10^(2+3) = 10⁵.",
            },
            {
              id: "ai9",
              question: "Quel est le préfixe pour 10⁶ ?",
              type: "qcm",
              options: ["kilo", "giga", "méga", "hecto"],
              correctAnswer: "méga",
              explanation: "10⁶ = méga (M). Ex : 1 MHz = 1 mégahertz = 10⁶ Hz.",
            },
            {
              id: "ai10",
              question: "3,2 × 10⁻³ en écriture décimale est :",
              type: "qcm",
              options: ["3 200", "32 000", "0,032", "0,0032"],
              correctAnswer: "0,0032",
              explanation:
                "10⁻³ → on déplace la virgule 3 fois vers la gauche : 3,2 → 0,0032.",
            },
            {
              id: "ai11",
              question:
                "L'écriture scientifique de 47 000 : on place la virgule après le premier chiffre → 4,7 × 10___",
              type: "texte-a-trous",
              options: ["3", "4", "5", "−4"],
              correctAnswer: "4",
              explanation:
                "47 000 = 4,7 × 10⁴. On a déplacé la virgule 4 fois vers la gauche.",
            },
            {
              id: "ai12",
              question: "Associer chaque écriture décimale à sa puissance de 10 :",
              type: "association",
              pairs: [
                { left: "0,001", right: "10⁻³" },
                { left: "1 000 000", right: "10⁶" },
                { left: "0,000 001", right: "10⁻⁶" },
                { left: "1 000", right: "10³" },
              ],
              correctAnswer: "association",
              explanation: "Les conversions fondamentales entre décimal et puissance de 10.",
            },
            {
              id: "ai13",
              question:
                "Dans un tableau de proportionnalité : pour x = 5, y = 15. Trouver y pour x = 8.",
              type: "nombre",
              correctAnswer: "24",
              tolerance: 0,
              explanation: "k = 15/5 = 3. Pour x = 8 : y = 3 × 8 = 24.",
            },
            {
              id: "ai14",
              question: "Produit en croix : si x/4 = 3/6, alors x vaut :",
              type: "nombre",
              correctAnswer: "2",
              tolerance: 0,
              explanation: "x × 6 = 4 × 3 → 6x = 12 → x = 2.",
            },
            {
              id: "ai15",
              question: "Remettre dans l'ordre les étapes pour simplifier une fraction :",
              type: "ordre",
              items: [
                "Trouver le PGCD du numérateur et du dénominateur",
                "Diviser le numérateur par le PGCD",
                "Diviser le dénominateur par le PGCD",
                "Vérifier que la nouvelle fraction est irréductible",
              ],
              correctAnswer: [
                "Trouver le PGCD du numérateur et du dénominateur",
                "Diviser le numérateur par le PGCD",
                "Diviser le dénominateur par le PGCD",
                "Vérifier que la nouvelle fraction est irréductible",
              ],
              explanation: "On commence toujours par le PGCD, puis on divise les deux termes.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Calculs complexes, raisonnement, écriture scientifique avancée.",
          questions: [
            {
              id: "ae1",
              question: "Parmi ces affirmations sur les puissances de 10, lesquelles sont vraies ?",
              type: "qcm-multiple",
              options: [
                "10⁰ = 1",
                "10⁻¹ = 0,1",
                "10³ × 10² = 10⁶",
                "(10²)³ = 10⁶",
                "10⁻² = −100",
              ],
              correctAnswer: ["10⁰ = 1", "10⁻¹ = 0,1", "(10²)³ = 10⁶"],
              explanation:
                "10³ × 10² = 10⁵ (on additionne les exposants). 10⁻² = 0,01 (pas −100). (10²)³ = 10^(2×3) = 10⁶ ✓.",
            },
            {
              id: "ae2",
              question: "Quelle est l'écriture scientifique de 0,000 000 45 ?",
              type: "qcm",
              options: ["4,5 × 10⁻⁷", "4,5 × 10⁷", "45 × 10⁻⁸", "0,45 × 10⁻⁶"],
              correctAnswer: "4,5 × 10⁻⁷",
              explanation:
                "On déplace la virgule 7 fois vers la droite pour obtenir 4,5 → exposant −7.",
            },
            {
              id: "ae3",
              question: "Calculer (3 × 10⁴) × (2 × 10³).",
              type: "qcm",
              options: ["5 × 10⁷", "6 × 10⁷", "6 × 10¹²", "6 × 10¹"],
              correctAnswer: "6 × 10⁷",
              explanation: "3 × 2 = 6 et 10⁴ × 10³ = 10⁷. Résultat : 6 × 10⁷.",
            },
            {
              id: "ae4",
              question:
                "Une voiture roule à vitesse constante. En 3 h elle parcourt 210 km. Combien de km en 5 h ?",
              type: "nombre",
              correctAnswer: "350",
              tolerance: 0,
              explanation: "k = 210/3 = 70 km/h. En 5 h : 70 × 5 = 350 km.",
            },
            {
              id: "ae5",
              question: "Calculer 3/4 + 2/5 − 1/2.",
              type: "qcm",
              options: ["13/20", "1/20", "3/20", "7/20"],
              correctAnswer: "13/20",
              explanation:
                "Dénominateur commun = 20. 3/4 = 15/20, 2/5 = 8/20, 1/2 = 10/20. 15/20 + 8/20 − 10/20 = 13/20.",
            },
            {
              id: "ae6",
              question:
                "Pour convertir 0,0047 en écriture scientifique, on déplace la virgule ___ fois vers la droite → 4,7 × 10___",
              type: "texte-a-trous",
              options: ["3", "−3", "4", "−4"],
              correctAnswer: "3",
              explanation:
                "0,0047 → 4,7 : déplacement de 3 rangs vers la droite → exposant −3. Donc 4,7 × 10⁻³.",
            },
            {
              id: "ae7",
              question: "Le nombre 15 × 10² est en écriture scientifique.",
              type: "vrai-faux",
              correctAnswer: "Faux",
              explanation:
                "Non, car 15 ≥ 10. L'écriture scientifique exige 1 ≤ a < 10. Il faut écrire 1,5 × 10³.",
            },
            {
              id: "ae8",
              question: "Associer chaque écriture scientifique à sa valeur :",
              type: "association",
              pairs: [
                { left: "3,5 × 10³", right: "3 500" },
                { left: "1,2 × 10⁻²", right: "0,012" },
                { left: "7 × 10⁶", right: "7 000 000" },
                { left: "5,6 × 10⁻⁴", right: "0,00056" },
              ],
              correctAnswer: "association",
              explanation: "Exposant positif → grand nombre, exposant négatif → petit nombre.",
            },
            {
              id: "ae9",
              question:
                "La taille d'une cellule est environ 2 × 10⁻⁵ m. En micromètres (1 µm = 10⁻⁶ m), c'est :",
              type: "qcm",
              options: ["2 µm", "0,2 µm", "20 µm", "200 µm"],
              correctAnswer: "20 µm",
              explanation:
                "2 × 10⁻⁵ m = 2 × 10⁻⁵ / 10⁻⁶ µm = 2 × 10 µm = 20 µm.",
            },
            {
              id: "ae10",
              question:
                "Pour vérifier la proportionnalité d'un tableau, on peut (plusieurs réponses) :",
              type: "qcm-multiple",
              options: [
                "Vérifier que tous les quotients y/x sont égaux",
                "Vérifier que le graphique est une droite passant par l'origine",
                "Vérifier que les différences y − x sont constantes",
                "Calculer les produits en croix et vérifier l'égalité",
              ],
              correctAnswer: [
                "Vérifier que tous les quotients y/x sont égaux",
                "Vérifier que le graphique est une droite passant par l'origine",
                "Calculer les produits en croix et vérifier l'égalité",
              ],
              explanation:
                "Des différences y − x constantes indiquent une relation affine, pas nécessairement proportionnelle.",
            },
            {
              id: "ae11",
              question:
                "Calculer le coefficient de proportionnalité si pour x = 4 on a y = 10.",
              type: "nombre",
              correctAnswer: "2.5",
              tolerance: 0.05,
              explanation: "k = y/x = 10/4 = 2,5.",
            },
            {
              id: "ae12",
              question: "Calculer (6 × 10⁵) ÷ (2 × 10³).",
              type: "qcm",
              options: ["3 × 10²", "3 × 10⁸", "4 × 10²", "3 × 10⁻²"],
              correctAnswer: "3 × 10²",
              explanation:
                "6÷2 = 3 et 10⁵÷10³ = 10² (on soustrait les exposants). Résultat : 3 × 10².",
            },
            {
              id: "ae13",
              question:
                "Pour calculer a/b ÷ c/d, on multiplie par l'inverse : a/b × d/___",
              type: "texte-a-trous",
              options: ["a", "b", "c", "d"],
              correctAnswer: "c",
              explanation: "L'inverse de c/d est d/c. Donc a/b ÷ c/d = a/b × d/c.",
            },
            {
              id: "ae14",
              question:
                "Prix de 5 cahiers : 8,50 €. Combien coûtent 8 cahiers (proportionnalité) ?",
              type: "nombre",
              correctAnswer: "13.6",
              tolerance: 0.05,
              explanation: "k = 8,50/5 = 1,70 €/cahier. Pour 8 : 1,70 × 8 = 13,60 €.",
            },
            {
              id: "ae15",
              question:
                "Remettre dans l'ordre les étapes pour passer un nombre en écriture scientifique (ex: 0,0047) :",
              type: "ordre",
              items: [
                "Déplacer la virgule pour avoir un chiffre entre 1 et 9 avant la virgule",
                "Compter le nombre de déplacements (= valeur absolue de l'exposant)",
                "Si déplacement vers la droite : exposant négatif",
                "Écrire le résultat sous la forme a × 10ⁿ",
              ],
              correctAnswer: [
                "Déplacer la virgule pour avoir un chiffre entre 1 et 9 avant la virgule",
                "Compter le nombre de déplacements (= valeur absolue de l'exposant)",
                "Si déplacement vers la droite : exposant négatif",
                "Écrire le résultat sous la forme a × 10ⁿ",
              ],
              explanation:
                "Pour 0,0047 : 4,7 (3 rangs vers la droite) → exposant négatif → 4,7 × 10⁻³.",
            },
          ],
        },
      ],
    },
  },
];
