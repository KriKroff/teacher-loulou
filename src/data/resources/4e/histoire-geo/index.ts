import type { Resource } from "@/types";

export const resources: Resource[] = [
  // ─── FICHE DE RÉVISION ─────────────────────────────────────────────────────
  {
    slug: "histoire-revolution-industrielle-fiche",
    title: "L'Europe et la révolution industrielle",
    description:
      "Fiche de révision complète : les deux phases de la révolution industrielle, les transformations, les conditions ouvrières, les idéologies et les exemples emblématiques.",
    type: "fiche",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Chapitre — L'Europe et la révolution industrielle",
    createdAt: "2026-04-04T12:00:00Z",
    updatedAt: "2026-04-04T12:00:00Z",
    relatedResourceSlug: "histoire-revolution-industrielle-quiz",
    tags: [
      "révolution industrielle",
      "ouvriers",
      "bourgeoisie",
      "prolétariat",
      "syndicats",
      "idéologies",
      "fiche",
    ],
    mdxPath: "4e/histoire-geo/fiches/histoire-revolution-industrielle-fiche.mdx",
  },

  // ─── QUIZ ──────────────────────────────────────────────────────────────────
  {
    slug: "histoire-revolution-industrielle-quiz",
    title: "Quiz — La révolution industrielle",
    description:
      "Teste tes connaissances sur la révolution industrielle : les dates clés, les conditions ouvrières, les idéologies et les exemples emblématiques. 3 niveaux de difficulté !",
    type: "quiz",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Chapitre — L'Europe et la révolution industrielle",
    createdAt: "2026-04-04T12:00:00Z",
    updatedAt: "2026-04-04T12:00:00Z",
    tags: [
      "révolution industrielle",
      "quiz",
      "ouvriers",
      "idéologies",
      "dates",
    ],
    quizData: {
      title: "La révolution industrielle",
      description:
        "10 questions pour maîtriser la révolution industrielle ! Choisis ton niveau.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Les bases à connaître absolument",
          questions: [
            {
              id: "f1",
              type: "qcm",
              question:
                "Quelle invention marque le début de la révolution industrielle en 1769 ?",
              options: [
                "La locomotive à vapeur",
                "La machine à vapeur de James Watt",
                "L'électricité",
                "Le moteur à pétrole",
              ],
              correctAnswer: "La machine à vapeur de James Watt",
              explanation:
                "James Watt invente une machine à vapeur efficace en 1769. Elle transforme la chaleur du charbon en mouvement mécanique et révolutionne la production industrielle.",
              hint: "C'est une machine qui utilise la vapeur d'eau… et ça date de 1769 !",
            },
            {
              id: "f2",
              type: "vrai-faux",
              question:
                "Au début de la révolution industrielle, les ouvriers avaient de bonnes conditions de travail.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Les ouvriers travaillaient jusqu'à 16 heures par jour, pour des salaires très faibles, dans des conditions dangereuses, sans aucune protection sociale.",
            },
            {
              id: "f3",
              type: "qcm",
              question:
                "Quelle est la principale source d'énergie de la 1ère révolution industrielle ?",
              options: ["Le pétrole", "L'électricité", "Le charbon", "Le gaz"],
              correctAnswer: "Le charbon",
              explanation:
                "Le charbon est indispensable pour alimenter les machines à vapeur pendant la 1ère révolution industrielle (1760–1880).",
              hint: "On le brûle pour produire de la vapeur… c'est une roche noire !",
            },
            {
              id: "f4",
              type: "texte-a-trous",
              question:
                "Un ___ est une organisation qui défend les droits des travailleurs.",
              options: ["syndicat", "parti", "gouvernement", "patronat"],
              correctAnswer: "syndicat",
              explanation:
                "Un syndicat est une organisation créée par des travailleurs pour défendre leurs droits, négocier les salaires et améliorer les conditions de travail.",
              hint: "La CGT et la CFDT en sont des exemples aujourd'hui !",
            },
            {
              id: "f5",
              type: "vrai-faux",
              question:
                "La bourgeoisie est la classe sociale qui possède les usines et le pouvoir économique.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "La bourgeoisie regroupe les patrons, les banquiers et les industriels. Ils possèdent les usines et ont le pouvoir économique et politique.",
            },
            {
              id: "f6",
              type: "qcm",
              question: "Que signifie le terme « prolétariat » ?",
              options: [
                "Les riches propriétaires d'usines",
                "Les personnes qui n'ont que leur travail pour vivre",
                "Les politiciens au pouvoir",
                "Les inventeurs de machines",
              ],
              correctAnswer:
                "Les personnes qui n'ont que leur travail pour vivre",
              explanation:
                "Le prolétariat désigne la classe sociale des ouvriers qui vendent leur force de travail pour survivre, sans posséder de capital ou d'usine.",
              hint: "Pro-létariat vient du latin 'proles' (descendance). Ce sont des gens qui n'ont que leurs enfants comme richesse.",
            },
            {
              id: "f7",
              type: "vrai-faux",
              question:
                "Le train a favorisé le développement du commerce pendant la révolution industrielle.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Le train et les locomotives ont permis de transporter des marchandises plus rapidement et sur de plus longues distances, ce qui a considérablement développé le commerce national et international.",
            },
            {
              id: "f8",
              type: "qcm",
              question:
                "En quelle année le droit de grève a-t-il été reconnu en France ?",
              options: ["1848", "1864", "1884", "1906"],
              correctAnswer: "1864",
              explanation:
                "Le droit de grève est reconnu en France en 1864. C'est une avancée importante pour les ouvriers qui peuvent désormais arrêter légalement le travail pour protester.",
              hint: "C'est la première des trois lois sociales importantes du cours.",
            },
            {
              id: "f9",
              type: "texte-a-trous",
              question:
                "Une ___ est un arrêt collectif du travail pour protester contre de mauvaises conditions.",
              options: ["grève", "révolution", "manifestation", "syndicat"],
              correctAnswer: "grève",
              explanation:
                "Une grève est un arrêt collectif et organisé du travail pour obtenir de meilleures conditions (salaires, horaires, sécurité). C'est un outil de pression utilisé par les ouvriers.",
              hint: "C'est l'action collective des ouvriers pour protester en arrêtant de travailler.",
            },
            {
              id: "f10",
              type: "qcm",
              question:
                "Qu'est-ce que la « consommation de masse » ?",
              options: [
                "La production d'une seule usine géante",
                "L'achat et la production de biens en grande quantité par la population",
                "La consommation de charbon dans les usines",
                "Le transport de marchandises par train",
              ],
              correctAnswer:
                "L'achat et la production de biens en grande quantité par la population",
              explanation:
                "La consommation de masse apparaît grâce à la révolution industrielle : les usines produisent plus vite et en plus grande quantité, ce qui rend les produits moins chers et accessibles à plus de gens.",
              hint: "C'est la conséquence directe de la production plus rapide et en plus grande quantité.",
            },
            {
              id: "f11",
              type: "nombre",
              question: "En quelle année James Watt a-t-il mis au point la machine à vapeur améliorée ?",
              options: [],
              correctAnswer: "1769",
              explanation:
                "James Watt brevète sa machine à vapeur améliorée en 1769. Cette invention est considérée comme le déclencheur de la révolution industrielle en Angleterre.",
              hint: "C'est dans la deuxième moitié du 18e siècle.",
            },
            {
              id: "f12",
              type: "slider",
              question: "La 1ère révolution industrielle a commencé vers quelle année ?",
              options: ["1700", "1850", "10"],
              correctAnswer: "1760",
              tolerance: 10,
              explanation:
                "La 1ère révolution industrielle commence vers 1760 en Angleterre, avec le développement des machines à vapeur et l'essor du textile mécanisé.",
              hint: "C'est juste avant la Révolution française (1789).",
            },
            {
              id: "f13",
              type: "intrus",
              question:
                "Lequel de ces éléments appartient à la 2ème révolution industrielle (1880-1914), et NON à la 1ère ?",
              options: ["Charbon", "Machine à vapeur", "Électricité", "Textile"],
              correctAnswer: "Électricité",
              explanation:
                "L'électricité est caractéristique de la 2ème révolution industrielle. Le charbon, la machine à vapeur et le textile appartiennent à la 1ère révolution (1760-1880).",
              hint: "Quelle énergie NEW apparaît après 1880 ?",
            },
            {
              id: "f14",
              type: "texte-a-trous-select",
              question:
                "La révolution industrielle commence en ___ vers 1760, avant de se répandre en ___.",
              options: ["Angleterre", "France", "Europe continentale", "Allemagne", "Russie"],
              correctAnswer: ["Angleterre", "Europe continentale"],
              explanation:
                "La révolution industrielle débute en Angleterre vers 1760 grâce à ses ressources (charbon, fer) et son avance technologique. Elle se répand ensuite en Europe continentale au 19e siècle.",
            },
            {
              id: "f15",
              type: "vrai-faux",
              question:
                "La machine à vapeur utilise le pétrole comme source d'énergie.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "La machine à vapeur fonctionne au charbon (combustion du charbon chauffe de l'eau, la vapeur produite entraîne un mouvement mécanique). Le pétrole est une énergie de la 2ème révolution industrielle.",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Pour aller plus loin",
          questions: [
            {
              id: "i1",
              type: "association",
              question:
                "Associe chaque date à l'événement correspondant.",
              pairs: [
                { left: "1769", right: "Machine à vapeur (James Watt)" },
                { left: "1864", right: "Droit de grève reconnu" },
                { left: "1884", right: "Syndicats autorisés" },
                { left: "1906", right: "Journée de travail limitée" },
              ],
              options: [
                "Machine à vapeur (James Watt)",
                "Droit de grève reconnu",
                "Syndicats autorisés",
                "Journée de travail limitée",
              ],
              correctAnswer: [
                "Machine à vapeur (James Watt)",
                "Droit de grève reconnu",
                "Syndicats autorisés",
                "Journée de travail limitée",
              ],
              explanation:
                "Ces quatre dates marquent des étapes clés : l'invention de la machine à vapeur (1769) puis les avancées sociales pour les ouvriers (1864, 1884, 1906).",
            },
            {
              id: "i2",
              type: "qcm-multiple",
              question:
                "Quelles sont les caractéristiques de la 2ème révolution industrielle (1880–1914) ? (Plusieurs réponses correctes)",
              options: [
                "Utilisation de l'électricité",
                "Utilisation du charbon uniquement",
                "Développement de l'industrie chimique",
                "Développement de la sidérurgie",
                "Utilisation du pétrole",
                "Invention de la machine à vapeur",
              ],
              correctAnswer: [
                "Utilisation de l'électricité",
                "Développement de l'industrie chimique",
                "Développement de la sidérurgie",
                "Utilisation du pétrole",
              ],
              explanation:
                "La 2ème révolution industrielle (1880–1914) se distingue par de nouvelles énergies (électricité + pétrole) et de nouvelles industries (chimie + sidérurgie). Le charbon et la machine à vapeur, eux, appartiennent à la 1ère révolution.",
            },
            {
              id: "i3",
              type: "texte-a-trous",
              question:
                "Karl Marx publie le ___ en 1848, texte fondateur du mouvement ouvrier.",
              options: [
                "Manifeste du parti communiste",
                "Déclaration des droits de l'homme",
                "Contrat social",
                "Capital et travail",
              ],
              correctAnswer: "Manifeste du parti communiste",
              explanation:
                "Le Manifeste du parti communiste (1848) est écrit par Karl Marx et Friedrich Engels. Il appelle les ouvriers du monde entier à s'unir pour renverser la bourgeoisie.",
              hint: "C'est un texte qui se termine par 'Prolétaires de tous les pays, unissez-vous !'",
            },
            {
              id: "i4",
              type: "qcm",
              question:
                "Pourquoi les usines comme celles du Creusot sont-elles installées près du charbon et du minerai de fer ?",
              options: [
                "Pour avoir une belle vue",
                "Pour être proches des matières premières nécessaires à la production",
                "Parce que c'est obligatoire par la loi",
                "Pour éviter la pollution dans les grandes villes",
              ],
              correctAnswer:
                "Pour être proches des matières premières nécessaires à la production",
              explanation:
                "Les usines s'installent près des ressources naturelles (charbon, minerai de fer) pour réduire les coûts de transport. Le Creusot est un exemple typique : tout est centralisé sur place.",
            },
            {
              id: "i5",
              type: "vrai-faux",
              question:
                "Le libéralisme économique défend l'intervention de l'État pour protéger les ouvriers.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Le libéralisme défend la liberté économique des entreprises SANS intervention de l'État. C'est le contraire : les libéraux refusent les lois sociales qui limitent la liberté des patrons.",
            },
            {
              id: "i6",
              type: "qcm",
              question: "Qui sont les canuts ?",
              options: [
                "Des ingénieurs qui fabriquent des machines à vapeur",
                "Des ouvriers tisserands spécialisés dans la soie, à Lyon",
                "Des syndicats ouvriers du nord de la France",
                "Des patrons de l'industrie textile",
              ],
              correctAnswer:
                "Des ouvriers tisserands spécialisés dans la soie, à Lyon",
              explanation:
                "Les canuts sont des ouvriers tisserands de Lyon qui fabriquent la soie. Ils se révoltent dans les années 1830 face à leurs mauvaises conditions de vie, devenant un symbole des premières luttes ouvrières.",
            },
            {
              id: "i7",
              type: "vrai-faux",
              question:
                "Le Congrès de Vienne en 1815 cherchait à établir un nouvel ordre industriel en Europe.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Non ! Le Congrès de Vienne en 1815 avait pour objectif de restaurer l'ordre politique en Europe après les guerres napoléoniennes : retour des rois au pouvoir et volonté de stabilité. Ce n'est pas lié à l'industrie.",
              hint: "Le Congrès de Vienne concerne la politique, pas l'économie.",
            },
            {
              id: "i8",
              type: "qcm",
              question:
                "Quelles deux industries sont caractéristiques de la 1ère révolution industrielle ?",
              options: [
                "Chimie et sidérurgie",
                "Textile et métallurgie",
                "Pétrole et électronique",
                "Automobile et aéronautique",
              ],
              correctAnswer: "Textile et métallurgie",
              explanation:
                "La 1ère révolution industrielle (1760–1880) se caractérise par le développement du textile (tissage mécanisé) et de la métallurgie (transformation des métaux grâce à la vapeur). La chimie et la sidérurgie appartiennent à la 2ème révolution.",
              hint: "Pense à ce qu'on fabriquait au 18e siècle : des vêtements et des outils en métal.",
            },
            {
              id: "i9",
              type: "qcm-multiple",
              question:
                "Quelles sont les conditions de vie des ouvriers au début de la révolution industrielle ? (Plusieurs réponses correctes)",
              options: [
                "Journées de travail très longues",
                "Salaires élevés",
                "Conditions dangereuses",
                "Bonne protection sociale",
                "Aucune protection en cas de maladie",
                "Travail en plein air",
              ],
              correctAnswer: [
                "Journées de travail très longues",
                "Conditions dangereuses",
                "Aucune protection en cas de maladie",
              ],
              explanation:
                "Au début de la révolution industrielle, les ouvriers travaillent de très longues heures (12–16h/jour), dans des conditions dangereuses, avec des salaires faibles et sans aucune protection sociale (maladie, accidents, chômage). Les syndicats n'existent pas encore.",
            },
            {
              id: "i10",
              type: "association",
              question:
                "Associe chaque terme à sa définition.",
              pairs: [
                { left: "Prolétariat", right: "Classe des ouvriers, n'ont que leur travail" },
                { left: "Bourgeoisie", right: "Patrons et banquiers, pouvoir économique" },
                { left: "Syndicat", right: "Organisation qui défend les travailleurs" },
                { left: "Grève", right: "Arrêt collectif du travail pour protester" },
              ],
              options: [
                "Classe des ouvriers, n'ont que leur travail",
                "Patrons et banquiers, pouvoir économique",
                "Organisation qui défend les travailleurs",
                "Arrêt collectif du travail pour protester",
              ],
              correctAnswer: [
                "Classe des ouvriers, n'ont que leur travail",
                "Patrons et banquiers, pouvoir économique",
                "Organisation qui défend les travailleurs",
                "Arrêt collectif du travail pour protester",
              ],
              explanation:
                "Prolétariat = ouvriers (que leur travail). Bourgeoisie = patrons/banquiers (riches, pouvoir). Syndicat = défend les travailleurs. Grève = arrêt du travail pour protester.",
            },
            {
              id: "i11",
              type: "nombre",
              question:
                "En quelle année Karl Marx publie-t-il le Manifeste du parti communiste ?",
              options: [],
              correctAnswer: "1848",
              explanation:
                "Karl Marx et Friedrich Engels publient le Manifeste du parti communiste en 1848, l'année des grandes révolutions européennes. Ce texte pose les bases de l'idéologie communiste.",
              hint: "C'est l'année des révolutions en Europe.",
            },
            {
              id: "i12",
              type: "slider",
              question: "En quelle année les syndicats ont-ils été autorisés en France ?",
              options: ["1860", "1910", "2"],
              correctAnswer: "1884",
              tolerance: 0,
              explanation:
                "Les syndicats sont autorisés en France en 1884 par la loi Waldeck-Rousseau. C'est une avancée majeure pour le mouvement ouvrier, permettant une organisation collective légale.",
              hint: "C'est 20 ans après le droit de grève (1864) et 22 ans avant la journée limitée (1906).",
            },
            {
              id: "i13",
              type: "intrus",
              question:
                "Laquelle de ces villes N'EST PAS un exemple typique de ville industrielle du 19e siècle en France ?",
              options: ["Le Creusot", "Saint-Étienne", "Versailles", "Lille"],
              correctAnswer: "Versailles",
              explanation:
                "Versailles est une ville royale et administrative, pas industrielle. Le Creusot (acier), Saint-Étienne (charbon, textile) et Lille (textile) sont des exemples typiques de villes industrielles françaises.",
              hint: "L'une de ces villes est surtout connue pour son château royal.",
            },
            {
              id: "i14",
              type: "texte-a-trous-select",
              question:
                "Les canuts sont des ouvriers ___ de Lyon, spécialisés dans le travail de la ___.",
              options: ["tisserands", "mineurs", "soie", "laine", "forgerons", "coton"],
              correctAnswer: ["tisserands", "soie"],
              explanation:
                "Les canuts sont des ouvriers tisserands de Lyon qui fabriquent la soie. Ils sont parmi les premiers à se révolter contre leurs mauvaises conditions de travail, dans les années 1830.",
            },
            {
              id: "i15",
              type: "qcm-multiple",
              question:
                "Quelles sont les principales caractéristiques du libéralisme économique ? (Plusieurs réponses correctes)",
              options: [
                "L'État ne doit pas intervenir dans l'économie",
                "Liberté d'entreprendre",
                "Égalité totale des salaires",
                "Libre concurrence sur le marché",
                "L'État possède toutes les usines",
                "Protection des travailleurs par l'État",
              ],
              correctAnswer: [
                "L'État ne doit pas intervenir dans l'économie",
                "Liberté d'entreprendre",
                "Libre concurrence sur le marché",
              ],
              explanation:
                "Le libéralisme défend la non-intervention de l'État, la liberté d'entreprendre et la libre concurrence. C'est le contraire du socialisme ou du communisme qui veulent l'intervention de l'État pour défendre les travailleurs.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Pour les champions !",
          questions: [
            {
              id: "e1",
              type: "ordre",
              question:
                "Remets ces avancées sociales dans l'ordre chronologique (de la plus ancienne à la plus récente).",
              options: [
                "Syndicats autorisés en France",
                "Journée de travail limitée",
                "Droit de grève reconnu",
                "Publication du Manifeste du parti communiste",
              ],
              correctAnswer: [
                "Publication du Manifeste du parti communiste",
                "Droit de grève reconnu",
                "Syndicats autorisés en France",
                "Journée de travail limitée",
              ],
              explanation:
                "Dans l'ordre : Manifeste (1848) → Droit de grève (1864) → Syndicats autorisés (1884) → Journée limitée (1906). Chaque avancée a été conquise progressivement grâce aux luttes ouvrières.",
            },
            {
              id: "e2",
              type: "association",
              question:
                "Associe chaque idéologie à sa définition principale.",
              pairs: [
                { left: "Libéralisme", right: "Liberté économique, l'État n'intervient pas" },
                { left: "Socialisme", right: "Réduire les inégalités, défendre les ouvriers" },
                { left: "Communisme", right: "Société sans classes, égalitaire, décisions collectives" },
              ],
              options: [
                "Liberté économique, l'État n'intervient pas",
                "Réduire les inégalités, défendre les ouvriers",
                "Société sans classes, égalitaire, décisions collectives",
              ],
              correctAnswer: [
                "Liberté économique, l'État n'intervient pas",
                "Réduire les inégalités, défendre les ouvriers",
                "Société sans classes, égalitaire, décisions collectives",
              ],
              explanation:
                "Le libéralisme défend la liberté des entreprises. Le socialisme veut corriger les inégalités. Le communisme va plus loin en voulant supprimer toutes les classes sociales.",
            },
            {
              id: "e3",
              type: "qcm-multiple",
              question:
                "Quelles sont les raisons de la révolte des canuts dans les années 1830 ? (Plusieurs réponses correctes)",
              options: [
                "Salaires très faibles",
                "Conditions de travail difficiles",
                "Trop de travail imposé",
                "Désaccord avec les idées de Karl Marx",
                "Manque de reconnaissance de leur métier",
              ],
              correctAnswer: [
                "Salaires très faibles",
                "Conditions de travail difficiles",
                "Trop de travail imposé",
              ],
              explanation:
                "Les canuts se révoltent principalement à cause de leurs mauvaises conditions économiques : salaires insuffisants, journées épuisantes et conditions de travail pénibles. Marx n'avait pas encore publié ses idées (Manifeste = 1848) !",
            },
            {
              id: "e4",
              type: "texte-a-trous",
              question:
                "La ___ consiste à fabriquer de l'acier à partir du fer, caractéristique de la 2ème révolution industrielle.",
              options: ["sidérurgie", "métallurgie", "chimie", "mécanique"],
              correctAnswer: "sidérurgie",
              explanation:
                "La sidérurgie est la branche de la métallurgie qui produit de l'acier à partir du fer. Elle se développe massivement lors de la 2ème révolution industrielle (1880–1914) avec de nouveaux procédés de fabrication.",
              hint: "Sidér- vient du grec 'sideros' qui signifie 'fer'.",
            },
            {
              id: "e5",
              type: "ordre",
              question:
                "Remets les étapes du fonctionnement d'une usine comme Le Creusot dans le bon ordre.",
              options: [
                "Transport des produits finis par le train",
                "Extraction des matières premières (charbon, minerai de fer)",
                "Transformation dans l'usine (fabrication du fer et de l'acier)",
                "Vente des produits sur les marchés nationaux et internationaux",
              ],
              correctAnswer: [
                "Extraction des matières premières (charbon, minerai de fer)",
                "Transformation dans l'usine (fabrication du fer et de l'acier)",
                "Transport des produits finis par le train",
                "Vente des produits sur les marchés nationaux et internationaux",
              ],
              explanation:
                "Le processus industriel suit toujours la même logique : extraction → transformation → transport → vente. Le Creusot est l'exemple parfait car tout se passe sur place ou à proximité immédiate.",
            },
            {
              id: "e6",
              type: "qcm",
              question:
                "Quelle est la différence essentielle entre le socialisme et le communisme ?",
              options: [
                "Il n'y a aucune différence, ce sont les mêmes idées",
                "Le socialisme veut réduire les inégalités ; le communisme veut supprimer toutes les classes sociales",
                "Le socialisme est pour les ouvriers ; le communisme est pour les patrons",
                "Le socialisme est une idée française ; le communisme est une idée allemande",
              ],
              correctAnswer:
                "Le socialisme veut réduire les inégalités ; le communisme veut supprimer toutes les classes sociales",
              explanation:
                "Le socialisme cherche à corriger les inégalités dans un système existant. Le communisme est plus radical : il veut créer une société totalement sans classes, où tout appartient à tous et les décisions sont collectives.",
            },
            {
              id: "e7",
              type: "texte-a-trous",
              question:
                "Les canuts, ouvriers de Lyon, se révoltent dans les années ___ pour protester contre leurs mauvaises conditions.",
              options: ["1830", "1848", "1864", "1880"],
              correctAnswer: "1830",
              explanation:
                "Les canuts se révoltent dans les années 1830 (notamment en 1831 et 1834). Ces révoltes sont les premières grandes luttes ouvrières en France, bien avant la reconnaissance légale du droit de grève (1864).",
              hint: "C'est AVANT la publication du Manifeste communiste (1848) et bien avant le droit de grève (1864).",
            },
            {
              id: "e8",
              type: "qcm-multiple",
              question:
                "Quelles sont les caractéristiques d'une société communiste selon le cours ? (Plusieurs réponses correctes)",
              options: [
                "Absence de classes sociales",
                "Société égalitaire",
                "Décisions prises collectivement",
                "L'État possède tout le pouvoir économique",
                "Les patrons dirigent librement",
                "La propriété privée est encouragée",
              ],
              correctAnswer: [
                "Absence de classes sociales",
                "Société égalitaire",
                "Décisions prises collectivement",
              ],
              explanation:
                "Le communisme selon Marx prévoit une société sans classes, égalitaire, où les décisions sont collectives. Ce n'est pas une dictature d'État ni un renforcement du pouvoir des patrons — c'est l'inverse !",
            },
            {
              id: "e9",
              type: "association",
              question:
                "Associe chaque idéologie à sa position sur l'intervention de l'État.",
              pairs: [
                { left: "Libéralisme", right: "L'État ne doit PAS intervenir dans l'économie" },
                { left: "Socialisme", right: "L'État doit intervenir pour réduire les inégalités" },
                { left: "Communisme", right: "L'État disparaît dans une société sans classes" },
              ],
              options: [
                "L'État ne doit PAS intervenir dans l'économie",
                "L'État doit intervenir pour réduire les inégalités",
                "L'État disparaît dans une société sans classes",
              ],
              correctAnswer: [
                "L'État ne doit PAS intervenir dans l'économie",
                "L'État doit intervenir pour réduire les inégalités",
                "L'État disparaît dans une société sans classes",
              ],
              explanation:
                "Le libéralisme défend la non-intervention de l'État. Le socialisme veut que l'État joue un rôle pour corriger les inégalités. Le communisme (théorie de Marx) prévoit à terme une société sans État ni classes.",
            },
            {
              id: "e10",
              type: "ordre",
              question:
                "Remets ces événements dans l'ordre chronologique (du plus ancien au plus récent).",
              options: [
                "Droit de grève reconnu en France",
                "Machine à vapeur de James Watt",
                "Journée de travail limitée",
                "Syndicats autorisés en France",
                "Manifeste du parti communiste",
              ],
              correctAnswer: [
                "Machine à vapeur de James Watt",
                "Manifeste du parti communiste",
                "Droit de grève reconnu en France",
                "Syndicats autorisés en France",
                "Journée de travail limitée",
              ],
              explanation:
                "Dans l'ordre : Machine à vapeur (1769) → Manifeste communiste (1848) → Droit de grève (1864) → Syndicats autorisés (1884) → Journée limitée (1906). C'est la progression de la révolution industrielle vers les droits sociaux.",
            },
            {
              id: "e11",
              type: "nombre",
              question:
                "En quelle année la journée de travail a-t-elle été limitée en France (loi instaurant le repos hebdomadaire et limitant la durée du travail) ?",
              options: [],
              correctAnswer: "1906",
              explanation:
                "La loi de 1906 instaure le repos hebdomadaire obligatoire et commence à limiter la durée du travail. C'est une conquête sociale majeure du mouvement ouvrier après des décennies de luttes.",
              hint: "C'est la dernière des trois grandes lois sociales du cours : 1864, 1884, 19??.",
            },
            {
              id: "e12",
              type: "slider",
              question:
                "Le Congrès de Vienne, qui restaure les monarchies après Napoléon, s'est déroulé en quelle année ?",
              options: ["1800", "1830", "1"],
              correctAnswer: "1815",
              tolerance: 0,
              explanation:
                "Le Congrès de Vienne se tient en 1814-1815. Il redessine la carte de l'Europe après les guerres napoléoniennes et vise à restaurer les monarchies renversées par Napoléon.",
              hint: "C'est l'année de la défaite de Napoléon à Waterloo.",
            },
            {
              id: "e13",
              type: "intrus",
              question:
                "Laquelle de ces idéologies défend les droits des travailleurs contre les patrons ?",
              options: ["Libéralisme", "Socialisme", "Conservatisme", "Capitalisme"],
              correctAnswer: "Socialisme",
              explanation:
                "Le socialisme est la seule idéologie de cette liste qui défend les travailleurs et veut réduire les inégalités. Le libéralisme et le capitalisme défendent la liberté économique des entrepreneurs. Le conservatisme défend l'ordre établi.",
              hint: "L'une de ces idéologies s'oppose directement aux intérêts des patrons.",
            },
            {
              id: "e14",
              type: "texte-a-trous-select",
              question:
                "Selon Karl Marx, la société est divisée en deux classes : la ___ (les patrons) et le ___ (les ouvriers).",
              options: ["bourgeoisie", "aristocratie", "prolétariat", "syndicat", "clergé", "noblesse"],
              correctAnswer: ["bourgeoisie", "prolétariat"],
              explanation:
                "Marx identifie deux classes en conflit : la bourgeoisie (les propriétaires des moyens de production, les patrons) et le prolétariat (les ouvriers qui vendent leur force de travail). Ce conflit de classes est au cœur de sa théorie.",
            },
            {
              id: "e15",
              type: "association",
              question:
                "Associe chaque énergie/invention à sa révolution industrielle.",
              pairs: [
                { left: "Charbon + vapeur", right: "1ère révolution (1760-1880)" },
                { left: "Électricité + pétrole", right: "2ème révolution (1880-1914)" },
                { left: "Textile mécanisé", right: "1ère révolution (1760-1880)" },
                { left: "Sidérurgie + chimie", right: "2ème révolution (1880-1914)" },
              ],
              options: [
                "1ère révolution (1760-1880)",
                "2ème révolution (1880-1914)",
                "1ère révolution (1760-1880)",
                "2ème révolution (1880-1914)",
              ],
              correctAnswer: [
                "1ère révolution (1760-1880)",
                "2ème révolution (1880-1914)",
                "1ère révolution (1760-1880)",
                "2ème révolution (1880-1914)",
              ],
              explanation:
                "1ère révolution : charbon + vapeur + textile mécanisé. 2ème révolution : électricité + pétrole + sidérurgie + chimie. Ce tableau de comparaison est fondamental pour le cours.",
            },
            // ── click-on-image ────────────────────────────────────────────────
            {
              id: "e-coi-1",
              type: "click-on-image",
              question: "Sur cette carte d'Europe, clique sur le berceau de la révolution industrielle (pays où elle a commencé).",
              imageSrc: "/images/histoire/europe-revolution-industrielle.svg",
              imageAlt: "Carte simplifiée de l'Europe au XIXe siècle",
              clickZones: [
                { id: "uk", x: 7.5, y: 13, w: 19, h: 34, isCorrect: true, label: "Royaume-Uni ✓" },
                { id: "france", x: 31, y: 31, w: 22, h: 31, isCorrect: false, label: "France" },
                { id: "belgique", x: 42, y: 23, w: 12, h: 14, isCorrect: false, label: "Belgique" },
                { id: "allemagne", x: 57, y: 21, w: 22, h: 37, isCorrect: false, label: "Allemagne" },
                { id: "italie", x: 56, y: 64, w: 19, h: 29, isCorrect: false, label: "Italie" },
                { id: "espagne", x: 9, y: 67, w: 22, h: 26, isCorrect: false, label: "Espagne" },
              ],
              correctAnswer: "uk",
              explanation:
                "C'est le Royaume-Uni (Angleterre) qui a été le berceau de la révolution industrielle, à partir des années 1760. La machine à vapeur de Watt et les filatures mécanisées y sont nés.",
              hint: "Ce pays est une île dans le nord-ouest de l'Europe.",
            },
            {
              id: "e-coi-2",
              type: "click-on-image",
              question: "Clique sur le pays qui, avec le Royaume-Uni, a été le premier à s'industrialiser en Europe continentale grâce à ses bassins houillers.",
              imageSrc: "/images/histoire/europe-revolution-industrielle.svg",
              imageAlt: "Carte simplifiée de l'Europe au XIXe siècle",
              clickZones: [
                { id: "uk", x: 7.5, y: 13, w: 19, h: 34, isCorrect: false, label: "Royaume-Uni" },
                { id: "france", x: 31, y: 31, w: 22, h: 31, isCorrect: false, label: "France" },
                { id: "belgique", x: 42, y: 23, w: 12, h: 14, isCorrect: true, label: "Belgique ✓" },
                { id: "allemagne", x: 57, y: 21, w: 22, h: 37, isCorrect: false, label: "Allemagne" },
                { id: "italie", x: 56, y: 64, w: 19, h: 29, isCorrect: false, label: "Italie" },
                { id: "espagne", x: 9, y: 67, w: 22, h: 26, isCorrect: false, label: "Espagne" },
              ],
              correctAnswer: "belgique",
              explanation:
                "La Belgique, grâce à ses riches bassins houillers (Liège, Charleroi), a été le premier pays continental à s'industrialiser, dès les années 1820-1830.",
              hint: "C'est un petit pays entre la France et l'Allemagne.",
            },
          ],
        },
      ],
      questions: [],
    },
  },
  {
    slug: "ec-urbanisation-mondialisation-fiche",
    title: "EC — Les espaces et paysages de l'urbanisation",
    description:
      "Fiche de révision sur l'urbanisation mondiale, les métropoles, leurs paysages (CBD, bidonville, skyline) et leur rôle dans la mondialisation. Évaluation commune 4e.",
    type: "fiche",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Géo - EC - Les espaces et paysages de l'urbanisation dans la mondialisation",
    createdAt: "2026-04-26T16:00:00Z",
    updatedAt: "2026-04-26T16:00:00Z",
    tags: ["urbanisation", "mondialisation", "métropole", "CBD", "paysages urbains", "fiche", "évaluation commune"],
    mdxPath: "4e/histoire-geo/fiches/geo-ec-urbanisation-mondialisation-fiche.mdx",
    relatedResourceSlug: "ec-urbanisation-mondialisation-quiz",
  },
  {
    slug: "ec-urbanisation-mondialisation-quiz",
    title: "Quiz EC — L'urbanisation dans la mondialisation",
    description:
      "Quiz 3 niveaux sur les espaces et paysages de l'urbanisation. Évaluation commune 4e histoire-géo.",
    type: "quiz",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Géo - EC - Les espaces et paysages de l'urbanisation dans la mondialisation",
    createdAt: "2026-04-26T16:00:00Z",
    updatedAt: "2026-04-26T16:00:00Z",
    tags: ["urbanisation", "mondialisation", "métropole", "quiz", "évaluation commune"],
    relatedResourceSlug: "ec-urbanisation-mondialisation-fiche",
    quizData: {
      title: "Quiz EC — L'urbanisation dans la mondialisation",
      description:
        "Teste tes connaissances sur les métropoles, les paysages urbains et la mondialisation.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Définitions et notions de base",
          questions: [
            {
              id: "eco-f1",
              type: "vrai-faux",
              question: "Aujourd'hui, plus de la moitié de la population mondiale vit en ville.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation: "En 2024, 58 % de la population mondiale est urbaine.",
            },
            {
              id: "eco-f2",
              type: "qcm",
              question: "Qu'est-ce que l'urbanisation ?",
              options: [
                "La croissance de la population vivant en ville",
                "La construction de gratte-ciels",
                "Le déplacement des habitants vers la campagne",
                "La création de nouvelles routes",
              ],
              correctAnswer: "La croissance de la population vivant en ville",
              explanation:
                "L'urbanisation désigne la croissance de la population urbaine et l'extension des espaces urbains.",
            },
            {
              id: "eco-f3",
              type: "qcm",
              question: "Qu'est-ce qu'une métropole ?",
              options: [
                "Une grande ville connectée aux marchés mondiaux",
                "Un quartier pauvre en périphérie",
                "Un petit village agricole",
                "Un port de commerce",
              ],
              correctAnswer: "Une grande ville connectée aux marchés mondiaux",
              explanation:
                "Une métropole est une grande ville qui concentre des activités importantes et est reliée aux marchés mondiaux.",
            },
            {
              id: "eco-f4",
              type: "texte-a-trous",
              question: "Le quartier d'affaires d'une métropole s'appelle le ___.",
              options: ["CBD", "bidonville", "skyline", "périphérie"],
              correctAnswer: "CBD",
              explanation:
                "CBD signifie Central Business District, le cœur économique de la métropole.",
            },
            {
              id: "eco-f5",
              type: "qcm",
              question: "Que signifie 'CBD' ?",
              options: [
                "Central Business District",
                "Centre-Banlieue Développé",
                "Circuit de Bus Direct",
                "Centre de Banques Dynamiques",
              ],
              correctAnswer: "Central Business District",
              explanation: "CBD = Central Business District, le quartier des affaires.",
            },
            {
              id: "eco-f6",
              type: "vrai-faux",
              question:
                "Les bidonvilles se trouvent généralement au centre des grandes métropoles.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "Les bidonvilles sont en périphérie, là où le foncier est moins cher.",
            },
            {
              id: "eco-f7",
              type: "qcm",
              question: "Quel est l'exemple de CBD cité dans le cours ?",
              options: [
                "The City à Londres",
                "Le Louvre à Paris",
                "Le port de Marseille",
                "La Tour Eiffel",
              ],
              correctAnswer: "The City à Londres",
              explanation:
                "The City de Londres est le quartier d'affaires par excellence, avec banques et sièges sociaux internationaux.",
            },
            {
              id: "eco-f8",
              type: "association",
              question: "Associe chaque paysage urbain à sa définition.",
              pairs: [
                { left: "Skyline", right: "Silhouette formée par les gratte-ciels" },
                { left: "Bidonville", right: "Quartier pauvre avec habitations précaires" },
                {
                  left: "Étalement urbain",
                  right: "Extension de la ville vers les zones rurales",
                },
              ],
              options: [
                "Silhouette formée par les gratte-ciels",
                "Quartier pauvre avec habitations précaires",
                "Extension de la ville vers les zones rurales",
              ],
              correctAnswer: [
                "Silhouette formée par les gratte-ciels",
                "Quartier pauvre avec habitations précaires",
                "Extension de la ville vers les zones rurales",
              ],
              explanation:
                "Trois paysages urbains clés : skyline (gratte-ciels), bidonville (pauvreté), étalement urbain (expansion).",
            },
            {
              id: "eco-f9",
              type: "nombre",
              question:
                "En quelle année la population urbaine mondiale n'était-elle que de 20 % ?",
              options: [],
              correctAnswer: "1900",
              explanation: "En 1900, seulement 20 % de la population mondiale vivait en ville.",
            },
            {
              id: "eco-f10",
              type: "vrai-faux",
              question:
                "Les axes de communication comprennent les routes, les trains et les aéroports.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Les axes de communication incluent toutes les voies de déplacement des personnes et marchandises.",
            },
            {
              id: "eco-f11",
              type: "qcm",
              question: "Qu'est-ce que l'étalement urbain ?",
              options: [
                "L'extension de la ville vers les zones rurales environnantes",
                "La construction de gratte-ciels en centre-ville",
                "La rénovation des bidonvilles",
                "Le dépeuplement des villes",
              ],
              correctAnswer: "L'extension de la ville vers les zones rurales environnantes",
              explanation:
                "L'étalement urbain, c'est quand la ville grandit en gagnant sur les campagnes alentour.",
            },
            {
              id: "eco-f12",
              type: "texte-a-trous",
              question: "Une métropole est une grande ville ouverte sur la ___.",
              options: ["mondialisation", "campagne", "périphérie", "banlieue"],
              correctAnswer: "mondialisation",
              explanation:
                "Une métropole est reliée aux marchés mondiaux et ouverte sur la mondialisation.",
            },
            {
              id: "eco-f13",
              type: "nombre",
              question:
                "Quel pourcentage de la population mondiale est urbaine aujourd'hui (vers 2024) ?",
              options: [],
              correctAnswer: "58",
              tolerance: 3,
              explanation:
                "Environ 58 % de la population mondiale vit en ville, soit 4,5 milliards de personnes.",
            },
            {
              id: "eco-f14",
              type: "intrus",
              question: "Lequel de ces éléments N'EST PAS un axe de communication ?",
              options: ["Bidonville", "Autoroute", "Aéroport", "Ligne de métro"],
              correctAnswer: "Bidonville",
              explanation:
                "Un bidonville est un paysage urbain (quartier pauvre), pas un axe de communication.",
            },
            {
              id: "eco-f15",
              type: "qcm",
              question:
                "Dans quelle zone d'une métropole trouve-t-on les gratte-ciels et les sièges sociaux ?",
              options: ["Le CBD", "Les périphéries", "Les bidonvilles", "L'étalement urbain"],
              correctAnswer: "Le CBD",
              explanation:
                "Le CBD (Central Business District) concentre les banques, sièges sociaux et gratte-ciels.",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Comprendre et analyser",
          questions: [
            {
              id: "eco-i1",
              type: "qcm",
              question:
                "Quelle est la différence principale entre le centre-ville et le CBD ?",
              options: [
                "Le CBD est spécifiquement le quartier d'affaires concentrant banques et sièges sociaux",
                "Le centre-ville est plus petit que le CBD",
                "Le CBD est en périphérie",
                "Il n'y a aucune différence",
              ],
              correctAnswer:
                "Le CBD est spécifiquement le quartier d'affaires concentrant banques et sièges sociaux",
              explanation:
                "Le centre-ville est le cœur de la ville en général ; le CBD en est la partie dédiée aux affaires.",
            },
            {
              id: "eco-i2",
              type: "texte-a-trous-select",
              question:
                "Le CBD concentre les ___ internationales, les ___ et les gratte-ciels.",
              options: ["entreprises", "banques", "bidonvilles", "musées", "aéroports"],
              correctAnswer: ["entreprises", "banques"],
              explanation:
                "Le CBD est le cœur financier et économique : entreprises internationales, banques, tours de bureaux.",
            },
            {
              id: "eco-i3",
              type: "association",
              question: "Associe chaque fonction à son exemple.",
              pairs: [
                { left: "Fonction politique", right: "Sièges du gouvernement" },
                { left: "Fonction économique", right: "Banques et entreprises" },
                { left: "Fonction culturelle", right: "Universités et musées" },
              ],
              options: [
                "Sièges du gouvernement",
                "Banques et entreprises",
                "Universités et musées",
              ],
              correctAnswer: [
                "Sièges du gouvernement",
                "Banques et entreprises",
                "Universités et musées",
              ],
              explanation:
                "Une métropole cumule fonctions politiques, économiques et culturelles.",
            },
            {
              id: "eco-i4",
              type: "qcm",
              question: "Pourquoi les villes s'étendent-elles vers les périphéries ?",
              options: [
                "Pour créer de nouveaux espaces résidentiels et commerciaux face à la croissance urbaine",
                "Parce que les centres-villes sont abandonnés",
                "Pour fuir la mondialisation",
                "Parce que les gratte-ciels sont trop coûteux",
              ],
              correctAnswer:
                "Pour créer de nouveaux espaces résidentiels et commerciaux face à la croissance urbaine",
              explanation:
                "La croissance de la population urbaine pousse à construire en périphérie.",
            },
            {
              id: "eco-i5",
              type: "ordre",
              question:
                "Remets ces chiffres d'urbanisation dans l'ordre chronologique (du plus ancien au plus récent).",
              options: ["58 % (2024)", "20 % (1900)", "66 % (2050 prévision)"],
              correctAnswer: ["20 % (1900)", "58 % (2024)", "66 % (2050 prévision)"],
              explanation:
                "L'urbanisation progresse : 20 % en 1900, 58 % aujourd'hui, 66 % prévus en 2050.",
            },
            {
              id: "eco-i6",
              type: "qcm-multiple",
              question:
                "Quelles sont les fonctions d'une métropole ? (plusieurs réponses correctes)",
              options: [
                "Politique",
                "Économique et financière",
                "Scientifique et culturelle",
                "Agricole",
              ],
              correctAnswer: [
                "Politique",
                "Économique et financière",
                "Scientifique et culturelle",
              ],
              explanation:
                "Une métropole cumule fonctions politiques, économiques/financières et culturelles/scientifiques.",
            },
            {
              id: "eco-i7",
              type: "texte-a-trous",
              question: "L'étalement urbain est l'extension de la ville vers les zones ___.",
              options: ["rurales", "industrielles", "souterraines", "maritimes"],
              correctAnswer: "rurales",
              explanation:
                "L'étalement urbain désigne la croissance des villes qui gagnent sur les campagnes.",
            },
            {
              id: "eco-i8",
              type: "vrai-faux",
              question: "Shanghai possède l'un des plus grands ports du monde.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "Shanghai est une métropole mondiale avec l'un des ports les plus actifs + le CBD de Pudong.",
            },
            {
              id: "eco-i9",
              type: "nombre",
              question:
                "Combien de milliards d'habitants urbains y a-t-il dans le monde (environ) ?",
              options: [],
              correctAnswer: "4.5",
              tolerance: 0.5,
              explanation:
                "Il y a environ 4,5 milliards d'habitants urbains dans le monde en 2024.",
            },
            {
              id: "eco-i10",
              type: "qcm",
              question: "Que crée la mondialisation entre les différents territoires ?",
              options: [
                "Des inégalités",
                "Une égalité parfaite",
                "Des bidonvilles dans chaque ville",
                "Des skylines identiques",
              ],
              correctAnswer: "Des inégalités",
              explanation:
                "La mondialisation ne profite pas à tous : territoires connectés s'enrichissent, les autres restent à l'écart.",
            },
            {
              id: "eco-i11",
              type: "texte-a-trous-select",
              question:
                "Shanghai possède l'un des plus grands ___ du monde et le quartier d'affaires de ___.",
              options: ["ports", "bidonvilles", "Pudong", "Belleville", "aéroports"],
              correctAnswer: ["ports", "Pudong"],
              explanation:
                "Shanghai : port parmi les plus actifs au monde + CBD de Pudong (gratte-ciels, sièges sociaux).",
            },
            {
              id: "eco-i12",
              type: "qcm",
              question: "Par quoi les métropoles échangent-elles avec le reste du monde ?",
              options: [
                "Ports, aéroports et réseaux de transport",
                "Bidonvilles et étalement urbain",
                "Musées et universités uniquement",
                "CBD uniquement",
              ],
              correctAnswer: "Ports, aéroports et réseaux de transport",
              explanation:
                "Les métropoles échangent marchandises, informations et personnes via leurs axes de communication.",
            },
            {
              id: "eco-i13",
              type: "vrai-faux",
              question:
                "Tous les territoires du monde profitent également de la mondialisation.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Faux",
              explanation:
                "La mondialisation crée des inégalités : territoires bien connectés prospèrent, les autres sont marginalisés.",
            },
            {
              id: "eco-i14",
              type: "association",
              question: "Associe chaque paysage à sa localisation dans la métropole.",
              pairs: [
                { left: "Skyline (gratte-ciels)", right: "Centre-ville et CBD" },
                { left: "Bidonville", right: "Périphéries pauvres" },
                { left: "Zones commerciales", right: "Franges urbaines" },
              ],
              options: ["Centre-ville et CBD", "Périphéries pauvres", "Franges urbaines"],
              correctAnswer: [
                "Centre-ville et CBD",
                "Périphéries pauvres",
                "Franges urbaines",
              ],
              explanation:
                "Chaque zone de la métropole a ses paysages caractéristiques.",
            },
            {
              id: "eco-i15",
              type: "qcm",
              question: "Un territoire 'bien connecté' à la mondialisation…",
              options: [
                "Attire des entreprises et crée des emplois",
                "Développe des bidonvilles",
                "Reste à l'écart des flux mondiaux",
                "Perd sa population",
              ],
              correctAnswer: "Attire des entreprises et crée des emplois",
              explanation:
                "Les territoires intégrés à la mondialisation attirent investissements et entreprises, créant richesse et emplois.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Analyser, synthétiser, argumenter",
          questions: [
            {
              id: "eco-e1",
              type: "qcm",
              question:
                "En quoi le CBD constitue-t-il le 'cœur névralgique' d'une métropole mondiale ?",
              options: [
                "Il concentre les décisions économiques mondiales : banques, sièges sociaux, marchés financiers",
                "Il héberge la plus grande population de la ville",
                "Il est le seul espace vert de la métropole",
                "Il regroupe les bidonvilles et quartiers défavorisés",
              ],
              correctAnswer:
                "Il concentre les décisions économiques mondiales : banques, sièges sociaux, marchés financiers",
              explanation:
                "Le CBD est le point de connexion entre la métropole et l'économie mondiale.",
            },
            {
              id: "eco-e2",
              type: "texte-a-trous-select",
              question:
                "Les territoires bien ___ à la mondialisation attirent des ___ et créent des ___.",
              options: [
                "connectés",
                "entreprises",
                "emplois",
                "bidonvilles",
                "déconnectés",
                "monuments",
              ],
              correctAnswer: ["connectés", "entreprises", "emplois"],
              explanation:
                "La connexion aux réseaux mondiaux attire investisseurs et entreprises, générant emplois et développement.",
            },
            {
              id: "eco-e3",
              type: "qcm",
              question:
                "Pourquoi les bidonvilles se trouvent-ils en périphérie et non au centre-ville ?",
              options: [
                "Parce que le foncier est moins cher en périphérie et les populations pauvres sont exclues par les prix du centre",
                "Parce que les gratte-ciels sont en périphérie",
                "Parce que le gouvernement les y impose",
                "Par choix délibéré des habitants",
              ],
              correctAnswer:
                "Parce que le foncier est moins cher en périphérie et les populations pauvres sont exclues par les prix du centre",
              explanation:
                "Les prix immobiliers au centre-ville sont très élevés. Les plus pauvres s'installent donc en périphérie, parfois dans des bidonvilles.",
            },
            {
              id: "eco-e4",
              type: "ordre",
              question:
                "Remets dans l'ordre les zones d'une métropole, du cœur vers l'extérieur.",
              options: ["Centre-ville", "Périphéries", "CBD"],
              correctAnswer: ["CBD", "Centre-ville", "Périphéries"],
              explanation:
                "Le CBD est au cœur, entouré par le centre-ville, lui-même cerné par les périphéries.",
            },
            {
              id: "eco-e5",
              type: "qcm",
              question:
                "Qu'est-ce qui explique que certains territoires restent à l'écart de la mondialisation ?",
              options: [
                "Leur manque de connexion aux réseaux de transport et de communication mondiaux",
                "Leur trop grande population",
                "La présence de nombreuses métropoles",
                "Leur richesse excessive",
              ],
              correctAnswer:
                "Leur manque de connexion aux réseaux de transport et de communication mondiaux",
              explanation:
                "Les territoires sans port, sans aéroport, avec des réseaux insuffisants restent à l'écart des flux.",
            },
            {
              id: "eco-e6",
              type: "qcm-multiple",
              question:
                "Quels éléments font d'une ville une métropole mondiale ? (plusieurs réponses)",
              options: [
                "Une connexion aux marchés mondiaux par ports/aéroports",
                "La concentration d'entreprises et de sièges sociaux",
                "Un CBD développé avec gratte-ciels",
                "Une population inférieure à 100 000 habitants",
              ],
              correctAnswer: [
                "Une connexion aux marchés mondiaux par ports/aéroports",
                "La concentration d'entreprises et de sièges sociaux",
                "Un CBD développé avec gratte-ciels",
              ],
              explanation:
                "Une métropole mondiale : connexion au monde + concentration d'activités + CBD développé.",
            },
            {
              id: "eco-e7",
              type: "texte-a-trous",
              question:
                "La ___ désigne la silhouette formée par les gratte-ciels d'une grande ville.",
              options: ["skyline", "périphérie", "étalement urbain", "mondialisation"],
              correctAnswer: "skyline",
              explanation:
                "La skyline est la silhouette caractéristique que forment les gratte-ciels d'une ville vue de loin.",
            },
            {
              id: "eco-e8",
              type: "qcm",
              question: "Que montre l'exemple de Shanghai dans le cours ?",
              options: [
                "Qu'une métropole peut à la fois être un hub portuaire mondial et un centre financier international",
                "Que les bidonvilles disparaissent grâce à la mondialisation",
                "Que les métropoles asiatiques sont identiques aux métropoles européennes",
                "Que l'urbanisation ne touche que la Chine",
              ],
              correctAnswer:
                "Qu'une métropole peut à la fois être un hub portuaire mondial et un centre financier international",
              explanation:
                "Shanghai illustre la métropole mondiale : port parmi les plus actifs + CBD de Pudong = nœud d'échanges mondial.",
            },
            {
              id: "eco-e9",
              type: "slider",
              question:
                "Quel pourcentage de la population mondiale sera urbaine en 2050 (selon les prévisions) ?",
              options: ["40", "80", "5"],
              correctAnswer: "66",
              tolerance: 5,
              explanation:
                "Les projections prévoient 66 % de population urbaine en 2050, soit les 2/3 de l'humanité.",
            },
            {
              id: "eco-e10",
              type: "qcm",
              question:
                "Quelle est la conséquence pour les territoires peu intégrés à la mondialisation ?",
              options: [
                "Ils restent à l'écart des flux mondiaux et bénéficient moins des échanges économiques",
                "Ils développent plus de bidonvilles que les autres",
                "Ils deviennent automatiquement des métropoles mondiales",
                "Ils abandonnent leurs centres-villes",
              ],
              correctAnswer:
                "Ils restent à l'écart des flux mondiaux et bénéficient moins des échanges économiques",
              explanation:
                "Sans connexion aux réseaux mondiaux, ces territoires ne profitent pas des flux d'investissements et d'emplois.",
            },
            {
              id: "eco-e11",
              type: "association",
              question: "Associe chaque CBD à sa métropole / caractéristique.",
              pairs: [
                { left: "CBD de Londres", right: "The City" },
                { left: "CBD de Shanghai", right: "Pudong" },
                { left: "Connexion mondiale par mer", right: "Port" },
              ],
              options: ["The City", "Pudong", "Port"],
              correctAnswer: ["The City", "Pudong", "Port"],
              explanation:
                "The City = Londres, Pudong = Shanghai, le port = axe de connexion maritime.",
            },
            {
              id: "eco-e12",
              type: "qcm",
              question:
                "Quel est l'argument central pour montrer que les métropoles sont les espaces majeurs de la mondialisation ?",
              options: [
                "Elles concentrent les flux d'échanges (marchandises, personnes, informations) grâce à leurs axes de communication",
                "Elles ont toutes les plus grandes populations mondiales",
                "Elles produisent l'essentiel des ressources agricoles mondiales",
                "Elles éliminent les inégalités économiques",
              ],
              correctAnswer:
                "Elles concentrent les flux d'échanges (marchandises, personnes, informations) grâce à leurs axes de communication",
              explanation:
                "Les métropoles sont les nœuds d'échange de la mondialisation : ports, aéroports, réseaux les connectent au monde entier.",
            },
            {
              id: "eco-e13",
              type: "vrai-faux",
              question:
                "Une métropole peut remplir simultanément des fonctions politiques, économiques et culturelles.",
              options: ["Vrai", "Faux"],
              correctAnswer: "Vrai",
              explanation:
                "C'est une caractéristique des grandes métropoles mondiales : elles cumulent ces trois types de fonctions.",
            },
            {
              id: "eco-e14",
              type: "texte-a-trous-select",
              question:
                "Les grandes métropoles concentrent les ___, les ___ et jouent un rôle ___ dans la mondialisation.",
              options: [
                "entreprises",
                "universités",
                "majeur",
                "mineur",
                "bidonvilles",
                "agriculteurs",
              ],
              correctAnswer: ["entreprises", "universités", "majeur"],
              explanation:
                "Les métropoles concentrent activités économiques (entreprises) et intellectuelles (universités) pour un rôle majeur dans la mondialisation.",
            },
            {
              id: "eco-e15",
              type: "qcm",
              question:
                "En quoi la skyline est-elle révélatrice du rôle mondial d'une métropole ?",
              options: [
                "Les gratte-ciels symbolisent la concentration des activités économiques et financières au cœur de la ville",
                "Les gratte-ciels sont uniquement des bâtiments résidentiels",
                "La skyline indique que la ville est pauvre",
                "La skyline est uniquement un phénomène américain",
              ],
              correctAnswer:
                "Les gratte-ciels symbolisent la concentration des activités économiques et financières au cœur de la ville",
              explanation:
                "La skyline (silhouette de gratte-ciels) est le symbole visuel de la puissance économique d'une métropole mondiale.",
            },
          ],
        },
      ],
      questions: [],
    },
  },

  // ─── EC — L'EUROPE DES LUMIÈRES ───────────────────────────────────────────
  {
    slug: "histoire-ec-lumieres-fiche",
    title: "EC — L'Europe des Lumières",
    description:
      "Fiche de révision complète sur les Lumières au XVIIIᵉ siècle : les 4 grands philosophes (VoMoRuLa), la société d'ordres, la méthode scientifique, la diffusion des idées et les critiques de l'absolutisme.",
    type: "fiche",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Hist - EC - L'Europe des Lumières",
    createdAt: "2026-04-26T17:00:00Z",
    updatedAt: "2026-04-26T17:00:00Z",
    relatedResourceSlug: "histoire-ec-lumieres-quiz",
    tags: [
      "lumières",
      "philosophes",
      "voltaire",
      "montesquieu",
      "rousseau",
      "lavoisier",
      "absolutisme",
      "société d'ordres",
      "encyclopédie",
      "fiche",
    ],
    mdxPath: "4e/histoire-geo/fiches/histoire-ec-lumieres-fiche.mdx",
  },
  {
    slug: "histoire-ec-lumieres-quiz",
    title: "Quiz EC — L'Europe des Lumières",
    description:
      "Teste tes connaissances sur les Lumières : philosophes, société d'ordres, méthode scientifique et diffusion des idées. 3 niveaux de difficulté !",
    type: "quiz",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Hist - EC - L'Europe des Lumières",
    createdAt: "2026-04-26T17:00:00Z",
    updatedAt: "2026-04-26T17:00:00Z",
    relatedResourceSlug: "histoire-ec-lumieres-fiche",
    tags: ["lumières", "philosophes", "absolutisme", "société d'ordres", "quiz"],
    quizData: {
      title: "L'Europe des Lumières",
      description:
        "10 questions pour maîtriser les Lumières ! Choisis ton niveau.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Les bases à connaître absolument",
          questions: [
            {
              id: "lum-f1",
              type: "qcm",
              question: "À quel siècle apparaît le mouvement des Lumières ?",
              options: ["XVIᵉ siècle", "XVIIᵉ siècle", "XVIIIᵉ siècle", "XIXᵉ siècle"],
              correctAnswer: "XVIIIᵉ siècle",
              explanation:
                "Les Lumières se développent principalement au XVIIIᵉ siècle (1700–1799), notamment en France, en Angleterre et en Allemagne.",
              hint: "C'est le siècle qui précède la Révolution française de 1789.",
            },
            {
              id: "lum-f2",
              type: "vrai-faux",
              question:
                "Le mouvement des Lumières défend la raison et la science contre l'obscurantisme.",
              correctAnswer: "Vrai",
              explanation:
                "C'est exactement la définition des Lumières : éclairer la société par la raison, la connaissance et le débat d'idées.",
            },
            {
              id: "lum-f3",
              type: "qcm",
              question:
                "Quel philosophe des Lumières propose la séparation des pouvoirs ?",
              options: ["Voltaire", "Rousseau", "Montesquieu", "Lavoisier"],
              correctAnswer: "Montesquieu",
              explanation:
                "Montesquieu développe l'idée de séparer le pouvoir en trois branches (législatif, exécutif, judiciaire) dans son œuvre 'De l'esprit des lois' (1748).",
              hint: "Mo-… comme Montesquieu dans VoMoRuLa.",
            },
            {
              id: "lum-f4",
              type: "qcm",
              question:
                "Quel ordre représente environ 97 % de la population au XVIIIᵉ siècle ?",
              options: ["Le Clergé", "La Noblesse", "Le Tiers état", "La Bourgeoisie"],
              correctAnswer: "Le Tiers état",
              explanation:
                "Le Tiers état regroupe tous ceux qui ne sont ni nobles ni clercs : paysans, artisans, bourgeois… soit environ 97 % de la population.",
            },
            {
              id: "lum-f5",
              type: "vrai-faux",
              question:
                "Le Clergé et la Noblesse paient des impôts comme le Tiers état.",
              correctAnswer: "Faux",
              explanation:
                "C'est l'injustice dénoncée par Rousseau : le Clergé et la Noblesse sont exemptés d'impôts, alors que le Tiers état les supporte presque entièrement.",
            },
            {
              id: "lum-f6",
              type: "qcm",
              question:
                "Quel philosophe défend l'idée d'égalité naturelle entre les hommes ?",
              options: ["Voltaire", "Montesquieu", "Lavoisier", "Rousseau"],
              correctAnswer: "Rousseau",
              explanation:
                "Rousseau pense que les hommes naissent libres et égaux — c'est la société qui crée les inégalités et les injustices.",
              hint: "Ru-… comme Rousseau dans VoMoRuLa.",
            },
            {
              id: "lum-f7",
              type: "qcm",
              question: "Qu'est-ce que l'absolutisme ?",
              options: [
                "Un régime où le peuple vote les lois",
                "Un régime où le roi détient tous les pouvoirs",
                "Un régime où l'Église gouverne",
                "Un régime où les nobles partagent le pouvoir",
              ],
              correctAnswer: "Un régime où le roi détient tous les pouvoirs",
              explanation:
                "Sous l'absolutisme, le roi fait les lois, les applique et rend la justice — sans contrôle ni limite. Louis XIV l'incarne parfaitement.",
            },
            {
              id: "lum-f8",
              type: "association",
              question: "Associe chaque philosophe à son idée principale.",
              pairs: [
                { left: "Voltaire", right: "Libertés fondamentales" },
                { left: "Montesquieu", right: "Séparation des pouvoirs" },
                { left: "Rousseau", right: "Égalité naturelle" },
                { left: "Lavoisier", right: "Méthode scientifique" },
              ],
              correctAnswer:
                "Libertés fondamentales|Séparation des pouvoirs|Égalité naturelle|Méthode scientifique",
              explanation:
                "Mémo VoMoRuLa : Voltaire (libertés), Montesquieu (séparation des pouvoirs), Rousseau (égalité), Lavoisier (méthode scientifique).",
            },
            {
              id: "lum-f9",
              type: "vrai-faux",
              question:
                "L'Encyclopédie est un grand ouvrage qui diffuse les idées des Lumières.",
              correctAnswer: "Vrai",
              explanation:
                "L'Encyclopédie (28 volumes, 1751–1772), dirigée par Diderot et d'Alembert, rassemble tous les savoirs de l'époque et propage les idées des Lumières à travers l'Europe.",
            },
            {
              id: "lum-f10",
              type: "qcm",
              question: "Qui dirige l'Encyclopédie ?",
              options: [
                "Voltaire et Rousseau",
                "Diderot et d'Alembert",
                "Montesquieu et Lavoisier",
                "Louis XIV et Louis XV",
              ],
              correctAnswer: "Diderot et d'Alembert",
              explanation:
                "L'Encyclopédie est dirigée par Denis Diderot et Jean le Rond d'Alembert. C'est l'un des projets intellectuels les plus ambitieux du XVIIIᵉ siècle.",
            },
            {
              id: "lum-f11",
              type: "texte-a-trous",
              question:
                "La méthode scientifique de Lavoisier suit l'ordre : ___ → expérience → résultat.",
              options: ["Conclusion", "Hypothèse", "Observation", "Théorie"],
              correctAnswer: "Hypothèse",
              explanation:
                "La démarche scientifique part d'une hypothèse (supposition), qu'on teste par une expérience, pour aboutir à un résultat vérifiable.",
            },
            {
              id: "lum-f12",
              type: "qcm",
              question:
                "Quel moyen permettait aux philosophes de diffuser leurs idées malgré la censure ?",
              options: [
                "La radio",
                "Les lettres et correspondances secrètes",
                "Les journaux télévisés",
                "Les affiches dans les rues",
              ],
              correctAnswer: "Les lettres et correspondances secrètes",
              explanation:
                "Les philosophes s'échangeaient des lettres souvent anonymes ou depuis l'étranger pour contourner la censure royale et religieuse.",
            },
            {
              id: "lum-f13",
              type: "vrai-faux",
              question:
                "Voltaire défend les lettres de cachet car elles maintiennent l'ordre.",
              correctAnswer: "Faux",
              explanation:
                "Voltaire dénonce les lettres de cachet : ces ordres royaux permettaient d'emprisonner quelqu'un sans jugement, ce qui va à l'encontre de la liberté individuelle qu'il défend.",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Comprendre les liens et les causes",
          questions: [
            {
              id: "lum-i1",
              type: "qcm",
              question:
                "Pourquoi le Tiers état est-il particulièrement sensible aux idées des Lumières ?",
              options: [
                "Parce qu'il est le plus riche et peut acheter des livres",
                "Parce qu'il supporte seul les impôts alors qu'il n'a aucun privilège",
                "Parce que ses membres sont les plus instruits",
                "Parce que le roi le consulte régulièrement",
              ],
              correctAnswer:
                "Parce qu'il supporte seul les impôts alors qu'il n'a aucun privilège",
              explanation:
                "Le Tiers état représente 97 % de la population, paie tous les impôts, mais n'a aucun privilège. Les idées d'égalité de Rousseau et de libertés de Voltaire résonnent directement avec leur situation.",
            },
            {
              id: "lum-i2",
              type: "texte-a-trous",
              question:
                "Montesquieu veut diviser le pouvoir en trois : le ___, l'exécutif et le judiciaire.",
              options: ["Législatif", "Religieux", "Militaire", "Financier"],
              correctAnswer: "Législatif",
              explanation:
                "La séparation des pouvoirs de Montesquieu distingue : le pouvoir législatif (faire les lois), l'exécutif (les appliquer) et le judiciaire (rendre la justice).",
            },
            {
              id: "lum-i3",
              type: "qcm",
              question:
                "En quoi la méthode scientifique de Lavoisier remet-elle en cause la pensée de l'époque ?",
              options: [
                "Elle prouve que le roi a toujours raison",
                "Elle montre que seules les preuves expérimentales comptent, pas les croyances",
                "Elle démontre que la religion est vraie",
                "Elle justifie la société d'ordres",
              ],
              correctAnswer:
                "Elle montre que seules les preuves expérimentales comptent, pas les croyances",
              explanation:
                "Lavoisier impose une démarche rigoureuse : une affirmation n'est valable que si elle est vérifiable par l'expérience. C'est une rupture avec les savoirs fondés sur la tradition ou la croyance.",
            },
            {
              id: "lum-i4",
              type: "tri-categories",
              question:
                "Classe chaque idée selon le philosophe qui la défend principalement.",
              items: [
                { id: "a", label: "Liberté d'expression" },
                { id: "b", label: "Séparation des pouvoirs" },
                { id: "c", label: "Égalité naturelle" },
                { id: "d", label: "Méthode hypothèse-expérience-résultat" },
                { id: "e", label: "Critique des lettres de cachet" },
                { id: "f", label: "Critique des privilèges nobiliaires" },
              ],
              categories: [
                { id: "voltaire", label: "Voltaire", correctItemIds: ["a", "e"] },
                { id: "montesquieu", label: "Montesquieu", correctItemIds: ["b"] },
                { id: "rousseau", label: "Rousseau", correctItemIds: ["c", "f"] },
                { id: "lavoisier", label: "Lavoisier", correctItemIds: ["d"] },
              ],
              explanation:
                "VoMoRuLa : Voltaire (libertés, lettres de cachet), Montesquieu (séparation des pouvoirs), Rousseau (égalité, privilèges), Lavoisier (méthode scientifique).",
            },
            {
              id: "lum-i5",
              type: "vrai-faux",
              question:
                "Les idées des Lumières se diffusent facilement car il n'y a pas de censure au XVIIIᵉ siècle.",
              correctAnswer: "Faux",
              explanation:
                "La censure royale et religieuse est bien réelle. Les philosophes contournent ces obstacles par des publications anonymes, des correspondances secrètes ou des éditions à l'étranger.",
            },
            {
              id: "lum-i6",
              type: "qcm",
              question:
                "Quel lien direct existe-t-il entre les idées des Lumières et la Révolution française de 1789 ?",
              options: [
                "Aucun, les deux événements sont indépendants",
                "Les Lumières inspirent les révolutionnaires : liberté, égalité, séparation des pouvoirs",
                "Les Lumières défendent la monarchie absolue",
                "Les philosophes des Lumières sont tous des nobles",
              ],
              correctAnswer:
                "Les Lumières inspirent les révolutionnaires : liberté, égalité, séparation des pouvoirs",
              explanation:
                "Les grandes valeurs de la Révolution française (liberté, égalité, fraternité ; séparation des pouvoirs ; Déclaration des droits de l'homme) sont directement issues des idées des philosophes des Lumières.",
            },
            {
              id: "lum-i7",
              type: "ordre",
              question:
                "Remets dans l'ordre la méthode scientifique de Lavoisier.",
              options: [
                "Résultat et conclusion",
                "Hypothèse (supposition)",
                "Expérience (test)",
              ],
              correctAnswer: [
                "Hypothèse (supposition)",
                "Expérience (test)",
                "Résultat et conclusion",
              ],
              explanation:
                "La démarche scientifique : on formule d'abord une hypothèse, on la teste par une expérience, puis on tire un résultat ou une conclusion.",
            },
            {
              id: "lum-i8",
              type: "qcm",
              question:
                "Pourquoi les salons sont-ils un moyen efficace pour diffuser les idées des Lumières ?",
              options: [
                "Car ils sont financés par le roi",
                "Car ils permettent des débats libres entre intellectuels, hors de la censure officielle",
                "Car seuls les nobles y ont accès et ils soutiennent les philosophes",
                "Car ils sont obligatoires pour tous les citoyens",
              ],
              correctAnswer:
                "Car ils permettent des débats libres entre intellectuels, hors de la censure officielle",
              explanation:
                "Les salons sont des réunions privées chez des aristocrates ou bourgeoises éclairées. Ils permettent des échanges libres sans passer par les circuits officiels soumis à la censure.",
            },
            {
              id: "lum-i9",
              type: "association",
              question:
                "Associe chaque moyen de diffusion à sa caractéristique principale.",
              pairs: [
                { left: "Encyclopédie", right: "Rassemble tous les savoirs de l'époque" },
                { left: "Salons", right: "Débats oraux entre intellectuels" },
                { left: "Correspondances", right: "Contourne la censure discrètement" },
                { left: "Théâtre", right: "Critique la société de façon détournée" },
              ],
              correctAnswer:
                "Rassemble tous les savoirs de l'époque|Débats oraux entre intellectuels|Contourne la censure discrètement|Critique la société de façon détournée",
              explanation:
                "Chaque moyen a ses avantages : l'Encyclopédie touche les élites cultivées, les salons permettent le débat direct, les correspondances contournent la censure, le théâtre atteint un public plus large.",
            },
            {
              id: "lum-i10",
              type: "vrai-faux",
              question:
                "La séparation des pouvoirs proposée par Montesquieu vise à empêcher les abus du pouvoir absolu.",
              correctAnswer: "Vrai",
              explanation:
                "En divisant le pouvoir entre trois branches indépendantes, aucune ne peut dominer les autres. C'est une réponse directe à l'absolutisme où le roi cumule tous les pouvoirs.",
            },
            {
              id: "lum-i11",
              type: "qcm",
              question: "Qu'est-ce qu'une lettre de cachet ?",
              options: [
                "Une lettre officielle pour nommer un ministre",
                "Un ordre royal permettant d'emprisonner quelqu'un sans jugement",
                "Une invitation à un salon littéraire",
                "Un acte de noblesse accordé par le roi",
              ],
              correctAnswer:
                "Un ordre royal permettant d'emprisonner quelqu'un sans jugement",
              explanation:
                "Les lettres de cachet sont l'incarnation de l'arbitraire royal dénoncé par Voltaire : le roi peut envoyer n'importe qui en prison, sans procès ni accusation formelle.",
            },
            {
              id: "lum-i12",
              type: "texte-a-trous",
              question: "L'Encyclopédie est dirigée par Diderot et ___.",
              options: ["Rousseau", "d'Alembert", "Voltaire", "Montesquieu"],
              correctAnswer: "d'Alembert",
              explanation:
                "Denis Diderot et Jean le Rond d'Alembert co-dirigent l'Encyclopédie, publiée entre 1751 et 1772 en 28 volumes.",
            },
            {
              id: "lum-i13",
              type: "qcm",
              question:
                "Quel philosophe utilise la science pour s'opposer aux croyances non fondées ?",
              options: ["Voltaire", "Rousseau", "Lavoisier", "Montesquieu"],
              correctAnswer: "Lavoisier",
              explanation:
                "Lavoisier révolutionne la chimie en imposant la méthode expérimentale. Il s'oppose aux savoirs transmis par tradition sans vérification, incarnant ainsi l'esprit scientifique des Lumières.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Analyse, nuance et mise en perspective",
          questions: [
            {
              id: "lum-e1",
              type: "qcm",
              question:
                "En quoi la philosophie de Rousseau est-elle la plus radicale par rapport aux autres philosophes des Lumières ?",
              options: [
                "Il est le seul à s'intéresser à la science",
                "Il remet en cause le fondement même de la société d'ordres en affirmant l'égalité naturelle de tous",
                "Il soutient l'absolutisme éclairé",
                "Il refuse tout débat avec les autres philosophes",
              ],
              correctAnswer:
                "Il remet en cause le fondement même de la société d'ordres en affirmant l'égalité naturelle de tous",
              explanation:
                "Rousseau va plus loin que les autres : il n'est pas juste réformiste, il affirme que les inégalités sociales sont artificielles et injustes par nature.",
            },
            {
              id: "lum-e2",
              type: "tri-categories",
              question:
                "Classe ces affirmations selon qu'elles sont compatibles avec l'absolutisme ou avec les idées des Lumières.",
              items: [
                { id: "a", label: "Le roi fait les lois sans contrôle" },
                { id: "b", label: "Chaque citoyen a le droit d'être jugé" },
                { id: "c", label: "La prison sans jugement est acceptable" },
                { id: "d", label: "Le pouvoir doit être divisé en trois branches" },
                { id: "e", label: "Les nobles sont supérieurs par naissance" },
                { id: "f", label: "Tous les hommes naissent égaux" },
              ],
              categories: [
                {
                  id: "absolutisme",
                  label: "Absolutisme",
                  correctItemIds: ["a", "c", "e"],
                },
                {
                  id: "lumieres",
                  label: "Idées des Lumières",
                  correctItemIds: ["b", "d", "f"],
                },
              ],
              explanation:
                "L'absolutisme justifie la toute-puissance royale et les inégalités de naissance. Les Lumières s'y opposent en défendant les droits individuels, l'égalité et la séparation des pouvoirs.",
            },
            {
              id: "lum-e3",
              type: "qcm",
              question:
                "Pourquoi la diffusion des idées des Lumières est-elle paradoxale au XVIIIᵉ siècle ?",
              options: [
                "Parce qu'elles sont diffusées avec l'aide du roi",
                "Parce qu'elles se répandent malgré une censure active — les philosophes trouvent des moyens détournés",
                "Parce que seuls les nobles y ont accès, ce qui renforce leur domination",
                "Parce que Lavoisier les interdit dans les universités",
              ],
              correctAnswer:
                "Parce qu'elles se répandent malgré une censure active — les philosophes trouvent des moyens détournés",
              explanation:
                "Le paradoxe : la censure existe et est appliquée, mais les idées circulent quand même via les salons, les correspondances anonymes, les publications à l'étranger.",
            },
            {
              id: "lum-e4",
              type: "qcm",
              question:
                "Quelle est la différence entre la critique de Voltaire et celle de Rousseau face à l'injustice sociale ?",
              options: [
                "Voltaire s'attaque aux lois injustes, Rousseau s'attaque à la structure même de la société",
                "Ils ont exactement les mêmes idées",
                "Voltaire veut abolir la monarchie, Rousseau veut la renforcer",
                "Rousseau critique la science, Voltaire la défend",
              ],
              correctAnswer:
                "Voltaire s'attaque aux lois injustes, Rousseau s'attaque à la structure même de la société",
              explanation:
                "Voltaire dénonce des abus précis (lettres de cachet, censure), mais reste réformiste. Rousseau remet en cause les fondements mêmes de la société d'ordres.",
            },
            {
              id: "lum-e5",
              type: "ordre",
              question:
                "Remets dans l'ordre chronologique ces grandes étapes liées aux Lumières.",
              options: [
                "Révolution française (1789)",
                "Début des Lumières et premiers écrits (début XVIIIᵉ)",
                "Publication de l'Encyclopédie (1751–1772)",
                "Mort de Louis XIV — règne de Louis XV (1715)",
              ],
              correctAnswer: [
                "Début des Lumières et premiers écrits (début XVIIIᵉ)",
                "Mort de Louis XIV — règne de Louis XV (1715)",
                "Publication de l'Encyclopédie (1751–1772)",
                "Révolution française (1789)",
              ],
              explanation:
                "Les Lumières naissent au début du XVIIIᵉ siècle, se développent sous Louis XV, s'incarnent dans l'Encyclopédie (1751–1772) et aboutissent à la Révolution française (1789).",
            },
            {
              id: "lum-e6",
              type: "qcm",
              question:
                "En quoi la séparation des pouvoirs de Montesquieu est-elle révolutionnaire pour l'époque ?",
              options: [
                "Elle propose de donner tous les pouvoirs au peuple directement",
                "Elle remet en cause le principe même de l'absolutisme en limitant le pouvoir du roi",
                "Elle donne plus de pouvoir à l'Église",
                "Elle crée un système de vote pour élire le roi",
              ],
              correctAnswer:
                "Elle remet en cause le principe même de l'absolutisme en limitant le pouvoir du roi",
              explanation:
                "Sous l'absolutisme, le roi cumule les pouvoirs législatif, exécutif et judiciaire. Montesquieu propose de les séparer pour qu'aucun ne soit tout-puissant.",
            },
            {
              id: "lum-e7",
              type: "texte-a-trous",
              question:
                "La Déclaration des droits de l'homme de 1789 s'inspire directement des idées des ___ du XVIIIᵉ siècle.",
              options: ["Croisades", "Lumières", "Chevaliers", "Templiers"],
              correctAnswer: "Lumières",
              explanation:
                "La Déclaration des droits de l'homme et du citoyen (1789) traduit en loi les idées des philosophes des Lumières : liberté, égalité, droits naturels, séparation des pouvoirs.",
            },
            {
              id: "lum-e8",
              type: "qcm",
              question:
                "Pourquoi Lavoisier est-il inclus parmi les figures des Lumières, alors qu'il est avant tout un scientifique ?",
              options: [
                "Parce qu'il a écrit des pièces de théâtre satiriques",
                "Parce que sa démarche scientifique incarne l'idéal des Lumières : la raison contre les croyances non fondées",
                "Parce qu'il était l'ami personnel de Voltaire",
                "Parce qu'il a financé l'Encyclopédie",
              ],
              correctAnswer:
                "Parce que sa démarche scientifique incarne l'idéal des Lumières : la raison contre les croyances non fondées",
              explanation:
                "Les Lumières ne sont pas seulement un mouvement politique : elles promeuvent aussi la raison et la science. Lavoisier incarne cet idéal en imposant la preuve expérimentale contre la superstition.",
            },
            {
              id: "lum-e9",
              type: "association",
              question:
                "Associe chaque critique des philosophes à la pratique absolutiste qu'elle vise.",
              pairs: [
                { left: "Voltaire dénonce les lettres de cachet", right: "Prison sans jugement" },
                { left: "Montesquieu propose la séparation des pouvoirs", right: "Roi cumulant tous les pouvoirs" },
                { left: "Rousseau critique la société d'ordres", right: "Privilèges héréditaires injustes" },
                { left: "Lavoisier impose la méthode scientifique", right: "Décisions arbitraires sans preuve" },
              ],
              correctAnswer:
                "Prison sans jugement|Roi cumulant tous les pouvoirs|Privilèges héréditaires injustes|Décisions arbitraires sans preuve",
              explanation:
                "Chaque philosophe s'attaque à une face différente de l'absolutisme : l'arbitraire judiciaire (Voltaire), la concentration du pouvoir (Montesquieu), les inégalités sociales (Rousseau), l'obscurantisme (Lavoisier).",
            },
            {
              id: "lum-e10",
              type: "vrai-faux",
              question:
                "Les idées des Lumières restent confinées à la France et ne touchent pas les autres pays européens.",
              correctAnswer: "Faux",
              explanation:
                "Les Lumières sont un mouvement européen : les philosophes correspondent avec des intellectuels anglais, allemands, italiens… L'Encyclopédie est traduite et diffusée dans toute l'Europe.",
            },
            {
              id: "lum-e11",
              type: "qcm",
              question:
                "Quel est le paradoxe de certains 'despotes éclairés' comme Frédéric II de Prusse ?",
              options: [
                "Ils s'opposent violemment aux philosophes des Lumières",
                "Ils admirent les idées des Lumières mais refusent de réformer leur propre pouvoir absolu",
                "Ils abolissent la monarchie dans leur pays",
                "Ils financent l'Encyclopédie pour renforcer leur autorité",
              ],
              correctAnswer:
                "Ils admirent les idées des Lumières mais refusent de réformer leur propre pouvoir absolu",
              explanation:
                "Des rois comme Frédéric II de Prusse ou Catherine II de Russie correspondent avec les philosophes et adoptent certaines réformes, mais gardent un pouvoir absolu.",
            },
            {
              id: "lum-e12",
              type: "qcm",
              question:
                "Quel est l'apport essentiel des Lumières à la politique moderne ?",
              options: [
                "Le roi doit gouverner seul pour garantir l'ordre et la stabilité",
                "La religion doit guider toutes les décisions politiques",
                "Le pouvoir doit être limité, contrôlé et fondé sur la raison — pas sur la naissance ou la tradition",
                "Seuls les nobles et le clergé sont aptes à gouverner",
              ],
              correctAnswer:
                "Le pouvoir doit être limité, contrôlé et fondé sur la raison — pas sur la naissance ou la tradition",
              explanation:
                "C'est le fil rouge des Lumières : remettre en cause la légitimité héréditaire du pouvoir et lui substituer la raison, le droit et le contrôle. Toutes nos démocraties modernes sont héritières de cette rupture.",
            },
          ],
        },
      ],
    },
  },

  // ─── EC — XVIIIᵉ SIÈCLE : EXPANSIONS ET TRAITE NÉGRIÈRE ──────────────────
  {
    slug: "histoire-ec-expansions-traite-fiche",
    title: "EC — XVIIIᵉ siècle : Expansions et traite négrière",
    description:
      "Fiche de révision complète : commerce triangulaire, traite négrière, économie de plantation, bourgeoisie marchande et contradiction avec les idéaux des Lumières.",
    type: "fiche",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Hist - EC - Le XVIIIᵉ siècle : Expansions, Lumières et révolutions",
    createdAt: "2026-04-26T17:10:00Z",
    updatedAt: "2026-04-26T17:10:00Z",
    relatedResourceSlug: "histoire-ec-expansions-traite-quiz",
    tags: [
      "commerce triangulaire",
      "traite négrière",
      "esclavage",
      "bourgeoisie marchande",
      "Lumières",
      "économie de plantation",
      "fiche",
      "XVIIIe siècle",
    ],
    mdxPath: "4e/histoire-geo/fiches/histoire-ec-expansions-traite-fiche.mdx",
  },
  {
    slug: "histoire-ec-expansions-traite-quiz",
    title: "Quiz EC — XVIIIᵉ siècle : Expansions et traite négrière",
    description:
      "Teste tes connaissances sur le commerce triangulaire, la traite négrière et la bourgeoisie marchande. 3 niveaux de difficulté !",
    type: "quiz",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Hist - EC - Le XVIIIᵉ siècle : Expansions, Lumières et révolutions",
    createdAt: "2026-04-26T17:10:00Z",
    updatedAt: "2026-04-26T17:10:00Z",
    relatedResourceSlug: "histoire-ec-expansions-traite-fiche",
    tags: [
      "commerce triangulaire",
      "traite négrière",
      "esclavage",
      "bourgeoisie marchande",
      "Lumières",
      "quiz",
      "XVIIIe siècle",
    ],
    quizData: {
      title: "XVIIIᵉ siècle : Expansions et traite négrière",
      description:
        "10 questions pour maîtriser le commerce triangulaire et la traite négrière. Choisis ton niveau.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Les bases : identifier les flux et les acteurs du commerce triangulaire",
          questions: [
            {
              id: "exp-f1",
              type: "qcm",
              question: "Quels produits partaient d'Europe vers l'Afrique dans le commerce triangulaire ?",
              options: [
                "Sucre, café et coton",
                "Armes, textiles et alcool",
                "Épices et métaux précieux",
                "Esclaves et bois exotiques",
              ],
              correctAnswer: "Armes, textiles et alcool",
              explanation:
                "Les navires quittaient les ports européens chargés de produits manufacturés (armes, tissus, alcool) qu'ils échangeaient en Afrique contre des esclaves.",
            },
            {
              id: "exp-f2",
              type: "qcm",
              question: "Qu'est-ce que le 'passage du milieu' dans le commerce triangulaire ?",
              options: [
                "Le voyage de l'Europe vers l'Afrique",
                "Le retour des navires vers l'Europe chargés de sucre",
                "La traversée de l'Atlantique par les esclaves africains vers l'Amérique",
                "Le trajet des marchands à l'intérieur de l'Afrique",
              ],
              correctAnswer: "La traversée de l'Atlantique par les esclaves africains vers l'Amérique",
              explanation:
                "Le 'passage du milieu' désigne la deuxième branche du triangle : les esclaves africains entassés dans les cales des navires pour traverser l'Atlantique.",
            },
            {
              id: "exp-f3",
              type: "vrai-faux",
              question: "Le commerce triangulaire relie l'Europe, l'Afrique et l'Amérique.",
              correctAnswer: "Vrai",
              explanation:
                "Oui. Le triangle fait bien le tour de ces 3 continents : Europe → Afrique → Amérique → Europe.",
            },
            {
              id: "exp-f4",
              type: "qcm",
              question: "Quels produits les navires rapportaient-ils d'Amérique vers l'Europe ?",
              options: [
                "Armes et textiles",
                "Esclaves et ivoire",
                "Sucre, café, cacao, coton et tabac",
                "Or et argent uniquement",
              ],
              correctAnswer: "Sucre, café, cacao, coton et tabac",
              explanation:
                "La troisième branche du triangle rapportait en Europe les produits des plantations coloniales : sucre, café, cacao, coton, tabac.",
            },
            {
              id: "exp-f5",
              type: "qcm",
              question: "Quel est le 1er port négrier français au XVIIIᵉ siècle ?",
              options: ["Bordeaux", "Marseille", "Nantes", "Le Havre"],
              correctAnswer: "Nantes",
              explanation:
                "Nantes est le premier port négrier de France au XVIIIᵉ siècle. Les armateurs nantais financent des dizaines d'expéditions.",
            },
            {
              id: "exp-f6",
              type: "vrai-faux",
              question: "Les esclaves travaillaient dans les mines d'or en Europe.",
              correctAnswer: "Faux",
              explanation:
                "Non. Les esclaves étaient envoyés dans les colonies d'Amérique pour travailler dans les plantations (sucre, café, coton…), pas en Europe.",
            },
            {
              id: "exp-f7",
              type: "qcm",
              question: "Combien d'Africains ont été déportés par la traite négrière entre le XVIᵉ et le XIXᵉ siècle ?",
              options: [
                "Environ 1 million",
                "Entre 12 et 15 millions",
                "Plus de 50 millions",
                "Environ 5 millions",
              ],
              correctAnswer: "Entre 12 et 15 millions",
              explanation:
                "Les historiens estiment qu'entre 12 et 15 millions d'Africains ont été déportés et réduits en esclavage.",
            },
            {
              id: "exp-f8",
              type: "association",
              question: "Associe chaque branche du triangle à sa cargaison principale.",
              pairs: [
                { left: "Europe → Afrique", right: "Armes, textiles, alcool" },
                { left: "Afrique → Amérique", right: "Esclaves" },
                { left: "Amérique → Europe", right: "Sucre, café, coton, tabac" },
              ],
              correctAnswer: "Armes, textiles, alcool|Esclaves|Sucre, café, coton, tabac",
              explanation:
                "Les 3 flux du commerce triangulaire : produits manufacturés vers l'Afrique, esclaves vers l'Amérique, produits coloniaux vers l'Europe.",
            },
            {
              id: "exp-f9",
              type: "vrai-faux",
              question: "Le XVIIIᵉ siècle est aussi appelé le 'siècle des Lumières'.",
              correctAnswer: "Vrai",
              explanation:
                "Oui. Le XVIIIᵉ siècle est le siècle des Lumières, un mouvement philosophique (Voltaire, Rousseau, Montesquieu…) qui prône la liberté, l'égalité et la raison.",
            },
            {
              id: "exp-f10",
              type: "qcm",
              question: "Dans une plantation coloniale, qui faisait le travail agricole ?",
              options: [
                "Des paysans européens payés",
                "Des autochtones américains libres",
                "Des esclaves africains",
                "Des ouvriers sous contrat",
              ],
              correctAnswer: "Des esclaves africains",
              explanation:
                "Les plantations coloniales (canne à sucre, café, coton…) fonctionnaient entièrement grâce au travail forcé des esclaves africains.",
            },
            {
              id: "exp-f11",
              type: "qcm",
              question: "Comment appelle-t-on le propriétaire d'un navire de commerce ?",
              options: ["Négociant", "Armateur", "Spéculateur", "Planteur"],
              correctAnswer: "Armateur",
              explanation:
                "L'armateur est le propriétaire ou le financeur d'un navire. Il organise les expéditions commerciales.",
            },
            {
              id: "exp-f12",
              type: "vrai-faux",
              question: "La guerre de Sept Ans (1756-1763) a permis à la France de gagner de nouvelles colonies.",
              correctAnswer: "Faux",
              explanation:
                "Non. La France a au contraire perdu beaucoup de ses colonies au profit du Royaume-Uni à l'issue de la guerre de Sept Ans.",
            },
            {
              id: "exp-f13",
              type: "ordre",
              question: "Remets dans l'ordre les 3 étapes du commerce triangulaire, de l'Europe au départ.",
              options: [
                "Produits coloniaux (sucre, café…) ramenés en Europe",
                "Esclaves transportés d'Afrique vers l'Amérique",
                "Produits manufacturés envoyés d'Europe vers l'Afrique",
              ],
              correctAnswer: [
                "Produits manufacturés envoyés d'Europe vers l'Afrique",
                "Esclaves transportés d'Afrique vers l'Amérique",
                "Produits coloniaux (sucre, café…) ramenés en Europe",
              ],
              explanation:
                "Le triangle se lit dans cet ordre : Europe → Afrique (produits), Afrique → Amérique (esclaves), Amérique → Europe (produits coloniaux).",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Causes et conséquences : économie de plantation, bourgeoisie marchande",
          questions: [
            {
              id: "exp-i1",
              type: "qcm",
              question: "Pourquoi le commerce triangulaire enrichissait-il surtout les ports atlantiques ?",
              options: [
                "Parce que les colonies étaient proches de ces ports",
                "Parce que les navires partaient et arrivaient dans ces ports, y laissant taxes et emplois",
                "Parce que le gouvernement leur versait des subventions",
                "Parce que les esclaves étaient revendus directement dans ces villes",
              ],
              correctAnswer: "Parce que les navires partaient et arrivaient dans ces ports, y laissant taxes et emplois",
              explanation:
                "Les ports atlantiques (Nantes, Bordeaux, Liverpool) concentraient toute l'activité : armement des navires, commerce des produits coloniaux, taxes portuaires.",
            },
            {
              id: "exp-i2",
              type: "qcm",
              question: "Pourquoi la mortalité était-elle très élevée dans les plantations coloniales ?",
              options: [
                "À cause des maladies tropicales et des conditions de travail violentes",
                "Parce que les esclaves refusaient de travailler",
                "En raison des guerres entre colonies",
                "À cause du manque de nourriture importée d'Europe",
              ],
              correctAnswer: "À cause des maladies tropicales et des conditions de travail violentes",
              explanation:
                "Les esclaves étaient soumis à un travail très dur, à des violences régulières, aux maladies tropicales et au manque de soins.",
            },
            {
              id: "exp-i3",
              type: "tri-categories",
              question: "Classe ces éléments selon leur rôle dans le système colonial.",
              items: [
                { id: "a", label: "Armateur" },
                { id: "b", label: "Esclave dans une plantation" },
                { id: "c", label: "Canne à sucre" },
                { id: "d", label: "Négociant" },
                { id: "e", label: "Café" },
                { id: "f", label: "Contremaître" },
              ],
              categories: [
                {
                  id: "bourgeois",
                  label: "Bourgeoisie marchande",
                  correctItemIds: ["a", "d"],
                },
                {
                  id: "exploitation",
                  label: "Main-d'œuvre exploitée",
                  correctItemIds: ["b", "f"],
                },
                {
                  id: "produits",
                  label: "Produits coloniaux",
                  correctItemIds: ["c", "e"],
                },
              ],
              explanation:
                "Armateur et négociant sont des membres de la bourgeoisie marchande. L'esclave et le contremaître représentent l'organisation de l'exploitation. Canne à sucre et café sont les produits coloniaux.",
            },
            {
              id: "exp-i4",
              type: "association",
              question: "Associe chaque puissance coloniale à ses principales colonies.",
              pairs: [
                { left: "Espagne", right: "Amérique du Sud et Centrale" },
                { left: "Portugal", right: "Brésil + Afrique et Asie" },
                { left: "France", right: "Canada et Antilles" },
                { left: "Royaume-Uni", right: "Amérique du Nord et Asie" },
              ],
              correctAnswer:
                "Amérique du Sud et Centrale|Brésil + Afrique et Asie|Canada et Antilles|Amérique du Nord et Asie",
              explanation:
                "Chaque puissance européenne contrôlait des territoires différents : l'Espagne dominait l'Amérique hispanique, le Portugal le Brésil, la France le Canada et les Antilles, le Royaume-Uni l'Amérique du Nord.",
            },
            {
              id: "exp-i5",
              type: "vrai-faux",
              question: "Bordeaux était l'un des grands ports du commerce colonial français au XVIIIᵉ siècle.",
              correctAnswer: "Vrai",
              explanation:
                "Oui. Bordeaux était, avec Nantes, l'un des principaux ports du commerce colonial français. La ville s'est considérablement enrichie grâce aux échanges avec les Antilles.",
            },
            {
              id: "exp-i6",
              type: "qcm",
              question: "Quelle guerre coloniale (1756-1763) a affaibli la position de la France ?",
              options: [
                "La guerre de Trente Ans",
                "La guerre de Sept Ans",
                "La guerre d'Indépendance américaine",
                "La guerre de Succession d'Espagne",
              ],
              correctAnswer: "La guerre de Sept Ans",
              explanation:
                "La guerre de Sept Ans (1756-1763) oppose les grandes puissances européennes dans leurs colonies. La France en sort affaiblie : elle perd notamment le Canada.",
            },
            {
              id: "exp-i7",
              type: "vrai-faux",
              question:
                "Le 'commerce en droiture' désigne les échanges directs entre l'Europe et ses colonies, sans passer par l'Afrique.",
              correctAnswer: "Vrai",
              explanation:
                "Oui. Le commerce en droiture est un circuit direct Europe ↔ Colonies, sans la branche africaine.",
            },
            {
              id: "exp-i8",
              type: "ordre",
              question: "Remets dans l'ordre chronologique ces événements liés à l'esclavage.",
              options: [
                "Publication du témoignage d'Olaudah Equiano (1789)",
                "Début des grandes explorations européennes (XVᵉ siècle)",
                "Apogée de la traite négrière au XVIIIᵉ siècle",
                "Code Noir de Louis XIV (1685)",
              ],
              correctAnswer: [
                "Début des grandes explorations européennes (XVᵉ siècle)",
                "Code Noir de Louis XIV (1685)",
                "Apogée de la traite négrière au XVIIIᵉ siècle",
                "Publication du témoignage d'Olaudah Equiano (1789)",
              ],
              explanation:
                "Les grandes explorations ouvrent la voie à la colonisation (XVᵉ s.), le Code Noir réglemente l'esclavage (1685), la traite atteint son apogée au XVIIIᵉ siècle, et Equiano témoigne en 1789.",
            },
            {
              id: "exp-i9",
              type: "texte-a-trous",
              question:
                "Les armateurs et négociants qui s'enrichissaient grâce au commerce colonial appartenaient à la ___ marchande.",
              options: ["noblesse", "bourgeoisie", "paysannerie", "clergé"],
              correctAnswer: "bourgeoisie",
              explanation:
                "La bourgeoisie marchande désigne cette classe sociale enrichie par le commerce : armateurs (propriétaires de navires) et négociants (marchands à grande échelle).",
            },
            {
              id: "exp-i10",
              type: "vrai-faux",
              question: "Le Portugal possédait des territoires coloniaux en Afrique et en Asie, en plus du Brésil.",
              correctAnswer: "Vrai",
              explanation:
                "Oui. Le Portugal avait un empire colonial étendu : le Brésil, des comptoirs en Afrique (Angola, Mozambique) et en Asie (Goa, Macao).",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Analyse critique : contradiction Lumières/esclavage, enjeux économiques",
          questions: [
            {
              id: "exp-e1",
              type: "qcm",
              question:
                "En quoi la position de certains philosophes des Lumières sur l'esclavage est-elle contradictoire ?",
              options: [
                "Ils prônaient l'esclavage tout en défendant la liberté politique",
                "Ils critiquaient l'esclavage en théorie mais profitaient indirectement des revenus coloniaux",
                "Ils ignoraient complètement l'existence de l'esclavage",
                "Ils défendaient ouvertement le commerce triangulaire",
              ],
              correctAnswer:
                "Ils critiquaient l'esclavage en théorie mais profitaient indirectement des revenus coloniaux",
              explanation:
                "La contradiction majeure des Lumières : les philosophes défendent liberté et égalité, mais vivent dans une société dont une partie de la richesse vient des colonies exploitées par des esclaves.",
            },
            {
              id: "exp-e2",
              type: "qcm",
              question: "Dans quel ouvrage Montesquieu dénonce-t-il l'esclavage ?",
              options: [
                "Du contrat social",
                "L'Encyclopédie",
                "L'Esprit des lois",
                "Candide",
              ],
              correctAnswer: "L'Esprit des lois",
              explanation:
                "Dans L'Esprit des lois (1748), Montesquieu consacre plusieurs chapitres à critiquer l'esclavage, arguant qu'il est contraire à la nature et à la raison.",
            },
            {
              id: "exp-e3",
              type: "tri-categories",
              question: "Classe ces affirmations : sont-elles liées aux idéaux des Lumières ou à la réalité coloniale ?",
              items: [
                { id: "a", label: "Tous les hommes naissent libres et égaux" },
                { id: "b", label: "Des millions d'Africains réduits en esclavage" },
                { id: "c", label: "La raison doit guider les actions humaines" },
                { id: "d", label: "Les esclaves travaillent 12h/jour sous la menace" },
                { id: "e", label: "Liberté, égalité, respect de l'Homme" },
                { id: "f", label: "Les planteurs achètent et revendent des humains" },
              ],
              categories: [
                {
                  id: "lumieres",
                  label: "Idéaux des Lumières",
                  correctItemIds: ["a", "c", "e"],
                },
                {
                  id: "realite",
                  label: "Réalité coloniale",
                  correctItemIds: ["b", "d", "f"],
                },
              ],
              explanation:
                "Les Lumières prônent liberté, raison, égalité. La réalité coloniale est l'opposé exact : esclavage, violence, déshumanisation.",
            },
            {
              id: "exp-e4",
              type: "qcm",
              question:
                "Quel lien peut-on établir entre le développement de l'économie de plantation et l'intensification de la traite négrière ?",
              options: [
                "Plus les plantations se développaient, plus le besoin de main-d'œuvre esclave augmentait",
                "Les plantations ont été créées pour remplacer la traite négrière",
                "La traite négrière ralentissait quand les plantations produisaient beaucoup",
                "Il n'y a pas de lien direct entre les deux",
              ],
              correctAnswer: "Plus les plantations se développaient, plus le besoin de main-d'œuvre esclave augmentait",
              explanation:
                "C'est un cercle vicieux : la demande européenne de sucre, café et coton pousse à agrandir les plantations, ce qui nécessite plus d'esclaves, ce qui intensifie la traite négrière.",
            },
            {
              id: "exp-e5",
              type: "qcm",
              question: "Pourquoi les révoltes des canuts de Lyon sont-elles importantes ?",
              options: [
                "Parce qu'elles ont conduit à l'abolition de l'esclavage",
                "Ce sont parmi les premières grandes luttes ouvrières organisées en France",
                "Parce qu'elles ont provoqué la chute du roi Louis-Philippe",
                "Parce qu'elles ont entraîné la création des syndicats",
              ],
              correctAnswer: "Ce sont parmi les premières grandes luttes ouvrières organisées en France",
              explanation:
                "Les canuts de Lyon sont des ouvriers de la soie dont les révoltes des années 1830 constituent parmi les premières grandes luttes ouvrières organisées en France.",
            },
            {
              id: "exp-e6",
              type: "vrai-faux",
              question:
                "Le témoignage d'Olaudah Equiano prouve que certains esclaves pouvaient être affranchis et écrire sur leur expérience.",
              correctAnswer: "Vrai",
              explanation:
                "Equiano a réussi à se libérer de l'esclavage, à apprendre à lire et à écrire, et a publié son autobiographie en 1789. C'est un cas exceptionnel.",
            },
            {
              id: "exp-e7",
              type: "association",
              question: "Associe chaque philosophe des Lumières à sa position sur l'esclavage.",
              pairs: [
                { left: "Montesquieu", right: "Dénonce l'esclavage dans L'Esprit des lois" },
                { left: "L'abbé Raynal", right: "Critique la traite et l'exploitation coloniale" },
                { left: "Rousseau", right: "Défend l'égalité naturelle des hommes" },
                { left: "Voltaire", right: "Position ambiguë — critique partielle" },
              ],
              correctAnswer:
                "Dénonce l'esclavage dans L'Esprit des lois|Critique la traite et l'exploitation coloniale|Défend l'égalité naturelle des hommes|Position ambiguë — critique partielle",
              explanation:
                "Les Lumières n'avaient pas une position uniforme sur l'esclavage. Montesquieu et Raynal le critiquent clairement. Voltaire reste ambigu.",
            },
            {
              id: "exp-e8",
              type: "vrai-faux",
              question:
                "L'abolition de la traite négrière en France a eu lieu au XVIIIᵉ siècle, sous l'influence des Lumières.",
              correctAnswer: "Faux",
              explanation:
                "Non. Malgré les critiques des Lumières, l'abolition définitive de l'esclavage en France n'arrive qu'en 1848. La Révolution avait aboli l'esclavage en 1794, mais Napoléon l'avait rétabli en 1802.",
            },
            {
              id: "exp-e9",
              type: "qcm",
              question:
                "Quelle est la principale raison pour laquelle l'esclavage a perduré malgré les critiques des Lumières ?",
              options: [
                "Les philosophes des Lumières étaient peu lus et peu influents",
                "Les intérêts économiques considérables de la bourgeoisie marchande freinaient toute réforme",
                "Les esclaves eux-mêmes ne voulaient pas être libérés",
                "Les gouvernements ignoraient totalement la question de l'esclavage",
              ],
              correctAnswer:
                "Les intérêts économiques considérables de la bourgeoisie marchande freinaient toute réforme",
              explanation:
                "L'esclavage générait des profits colossaux pour les armateurs, négociants et planteurs — et des recettes fiscales pour les États.",
            },
            {
              id: "exp-e10",
              type: "qcm",
              question:
                "En quoi le témoignage d'Olaudah Equiano est-il une source historique précieuse ?",
              options: [
                "C'est le seul document qui prouve l'existence de la traite négrière",
                "C'est un témoignage de première main sur la capture, la traversée et la vie en esclavage",
                "C'est le premier texte abolitionniste de l'histoire",
                "Il contient des données statistiques sur le nombre d'esclaves déportés",
              ],
              correctAnswer:
                "C'est un témoignage de première main sur la capture, la traversée et la vie en esclavage",
              explanation:
                "L'autobiographie d'Equiano est précieuse car elle offre un point de vue direct sur chaque étape de la traite : capture, passage du milieu, vente, vie en plantation.",
            },
          ],
        },
      ],
    },
  },

  // ─── EC — LA RÉVOLUTION FRANÇAISE ET L'EMPIRE ─────────────────────────────
  {
    slug: "histoire-ec-revolution-empire-fiche",
    title: "EC — La Révolution française et l'Empire",
    description:
      "Fiche de révision complète : de la prise de la Bastille à la chute de Napoléon — les grandes étapes, les régimes politiques, les réformes et l'héritage de cette période (1789-1815).",
    type: "fiche",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Hist - EC - La Révolution française et l'Empire (1789-1815)",
    createdAt: "2026-04-26T17:20:00Z",
    updatedAt: "2026-04-26T17:20:00Z",
    relatedResourceSlug: "histoire-ec-revolution-empire-quiz",
    tags: [
      "révolution française",
      "empire",
      "napoléon",
      "DDHC",
      "terreur",
      "code civil",
      "fiche",
      "EC",
    ],
    mdxPath: "4e/histoire-geo/fiches/histoire-ec-revolution-empire-fiche.mdx",
  },
  {
    slug: "histoire-ec-revolution-empire-quiz",
    title: "Quiz EC — La Révolution française et l'Empire",
    description:
      "Teste tes connaissances sur la Révolution française et l'Empire napoléonien : dates clés, régimes politiques, réformes et héritage. 3 niveaux de difficulté !",
    type: "quiz",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Hist - EC - La Révolution française et l'Empire (1789-1815)",
    createdAt: "2026-04-26T17:20:00Z",
    updatedAt: "2026-04-26T17:20:00Z",
    relatedResourceSlug: "histoire-ec-revolution-empire-fiche",
    tags: [
      "révolution française",
      "empire",
      "napoléon",
      "quiz",
      "dates",
      "EC",
    ],
    quizData: {
      title: "La Révolution française et l'Empire",
      description:
        "10 questions pour maîtriser la période 1789-1815 ! Choisis ton niveau.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Les dates et événements incontournables",
          questions: [
            {
              id: "rev-f1",
              type: "qcm",
              question: "Quelle prison est prise d'assaut le 14 juillet 1789 ?",
              options: ["Le Louvre", "La Bastille", "Versailles", "Les Tuileries"],
              correctAnswer: "La Bastille",
              explanation:
                "La prise de la Bastille le 14 juillet 1789 est le symbole du début de la Révolution française. Cette date est aujourd'hui la fête nationale.",
            },
            {
              id: "rev-f2",
              type: "vrai-faux",
              question:
                "La DDHC (Déclaration des Droits de l'Homme et du Citoyen) est adoptée le 26 août 1789.",
              correctAnswer: "Vrai",
              explanation:
                "La DDHC est adoptée par l'Assemblée nationale le 26 août 1789. Elle affirme les droits naturels de l'homme : liberté, égalité, propriété.",
            },
            {
              id: "rev-f3",
              type: "qcm",
              question: "À quelle date Louis XVI est-il exécuté ?",
              options: [
                "14 juillet 1789",
                "22 septembre 1792",
                "21 janvier 1793",
                "18 brumaire 1799",
              ],
              correctAnswer: "21 janvier 1793",
              explanation:
                "Louis XVI est guillotiné le 21 janvier 1793, après avoir été jugé et condamné par la Convention nationale.",
            },
            {
              id: "rev-f4",
              type: "qcm",
              question: "Quand Napoléon Bonaparte se fait-il sacrer Empereur ?",
              options: ["1799", "1802", "1804", "1812"],
              correctAnswer: "1804",
              explanation:
                "Napoléon se fait sacrer Empereur le 2 décembre 1804 à Notre-Dame de Paris, en se couronnant lui-même devant le pape Pie VII.",
            },
            {
              id: "rev-f5",
              type: "vrai-faux",
              question:
                "La campagne de Russie en 1812 est une grande victoire pour Napoléon.",
              correctAnswer: "Faux",
              explanation:
                "La campagne de Russie (1812) est un échec catastrophique. La Grande Armée est détruite — c'est le début de la chute de l'Empire.",
            },
            {
              id: "rev-f6",
              type: "qcm",
              question:
                "Comment s'appelle le texte de 1804 qui unifie le droit français et garantit l'égalité devant la loi ?",
              options: [
                "La Constitution",
                "Le Code civil",
                "La DDHC",
                "Le Serment du Jeu de Paume",
              ],
              correctAnswer: "Le Code civil",
              explanation:
                "Le Code civil napoléonien (1804) unifie le droit français : égalité devant la loi, propriété privée protégée, droit de la famille.",
            },
            {
              id: "rev-f7",
              type: "qcm",
              question:
                "Quelle bataille met fin définitivement à l'Empire napoléonien en 1815 ?",
              options: ["Austerlitz", "Iéna", "Waterloo", "Borodino"],
              correctAnswer: "Waterloo",
              explanation:
                "La bataille de Waterloo (18 juin 1815) est la défaite définitive de Napoléon contre la coalition anglo-prussienne.",
            },
            {
              id: "rev-f8",
              type: "texte-a-trous",
              question:
                "La proclamation de la République française a lieu le ___ septembre 1792.",
              options: ["20", "21", "22", "25"],
              correctAnswer: "22",
              explanation:
                "La République est proclamée le 22 septembre 1792, au lendemain de la victoire de Valmy contre les armées prussiennes.",
            },
            {
              id: "rev-f9",
              type: "qcm",
              question:
                "Comment s'appelle la période de violence révolutionnaire (1793-1794) dirigée par Robespierre ?",
              options: [
                "Le Directoire",
                "La Terreur",
                "Le Consulat",
                "La Montagne",
              ],
              correctAnswer: "La Terreur",
              explanation:
                "La Terreur (1793-1794) est une période où les libertés sont suspendues et les opposants exécutés à la guillotine.",
            },
            {
              id: "rev-f10",
              type: "vrai-faux",
              question:
                "Le Serment du Jeu de Paume (20 juin 1789) est un engagement des députés à rédiger une constitution.",
              correctAnswer: "Vrai",
              explanation:
                "Les députés du Tiers état se réunissent dans une salle de jeu de paume et jurent de ne pas se séparer avant d'avoir donné une constitution à la France.",
            },
            {
              id: "rev-f11",
              type: "association",
              question: "Associe chaque date à l'événement correspondant.",
              pairs: [
                { left: "14 juillet 1789", right: "Prise de la Bastille" },
                { left: "21 janvier 1793", right: "Exécution de Louis XVI" },
                { left: "2 décembre 1804", right: "Sacre de Napoléon" },
                { left: "18 juin 1815", right: "Bataille de Waterloo" },
              ],
              correctAnswer:
                "Prise de la Bastille|Exécution de Louis XVI|Sacre de Napoléon|Bataille de Waterloo",
              explanation:
                "Ces quatre dates sont les repères fondamentaux de la période 1789-1815.",
            },
            {
              id: "rev-f12",
              type: "qcm",
              question:
                "Quel régime Napoléon instaure-t-il après le coup d'État du 18 brumaire (1799) ?",
              options: [
                "La Terreur",
                "La monarchie constitutionnelle",
                "Le Consulat",
                "Le Directoire",
              ],
              correctAnswer: "Le Consulat",
              explanation:
                "Après le coup d'État du 18 brumaire an VIII (9 novembre 1799), Napoléon instaure le Consulat. Il en est le Premier consul et concentre les pouvoirs.",
            },
            {
              id: "rev-f13",
              type: "vrai-faux",
              question:
                "En 1791, la France devient une monarchie constitutionnelle : le roi partage le pouvoir avec une assemblée.",
              correctAnswer: "Vrai",
              explanation:
                "La Constitution de 1791 transforme la France en monarchie constitutionnelle. Louis XVI conserve le pouvoir exécutif mais l'Assemblée législative vote les lois.",
            },
            {
              id: "rev-f14",
              type: "ordre",
              question:
                "Remets ces événements dans l'ordre chronologique (du plus ancien au plus récent).",
              options: [
                "Sacre de Napoléon (Empire)",
                "Prise de la Bastille",
                "Proclamation de la République",
                "Bataille de Waterloo",
                "Exécution de Louis XVI",
              ],
              correctAnswer: [
                "Prise de la Bastille",
                "Proclamation de la République",
                "Exécution de Louis XVI",
                "Sacre de Napoléon (Empire)",
                "Bataille de Waterloo",
              ],
              explanation:
                "1789 : Bastille → 1792 : République → 1793 : Louis XVI exécuté → 1804 : Sacre → 1815 : Waterloo.",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Causes, conséquences et réformes napoléoniennes",
          questions: [
            {
              id: "rev-i1",
              type: "qcm",
              question:
                "Pourquoi la Monarchie constitutionnelle (1791) prend-elle fin rapidement ?",
              options: [
                "Parce que le peuple préfère la monarchie absolue",
                "Parce que Louis XVI tente de fuir à l'étranger et trahit la Révolution",
                "Parce que Napoléon renverse le roi",
                "Parce que la DDHC est abolie",
              ],
              correctAnswer:
                "Parce que Louis XVI tente de fuir à l'étranger et trahit la Révolution",
              explanation:
                "En juin 1791, Louis XVI tente de fuir en Autriche (fuite à Varennes). Rattrapé, il perd toute crédibilité. Les tensions conduisent à la fin de la monarchie en août 1792.",
            },
            {
              id: "rev-i2",
              type: "qcm",
              question:
                "Quelle est la principale raison qui pousse les Montagnards à instaurer la Terreur en 1793 ?",
              options: [
                "Punir les nobles qui refusent de payer des impôts",
                "Défendre la République contre la guerre étrangère et les révoltes internes",
                "Rétablir la monarchie de façon déguisée",
                "Préparer l'arrivée au pouvoir de Napoléon",
              ],
              correctAnswer:
                "Défendre la République contre la guerre étrangère et les révoltes internes",
              explanation:
                "En 1793, la France est attaquée par une coalition de monarchies européennes et subit des révoltes internes (Vendée). Les Montagnards justifient la Terreur comme une mesure de survie.",
            },
            {
              id: "rev-i3",
              type: "qcm",
              question:
                "Parmi ces réformes, laquelle Napoléon a-t-il introduite en France ?",
              options: [
                "La DDHC",
                "Les États généraux",
                "Le baccalauréat et les lycées",
                "La Constitution de 1791",
              ],
              correctAnswer: "Le baccalauréat et les lycées",
              explanation:
                "Napoléon crée les lycées (1802) et le baccalauréat pour former les élites de l'État.",
            },
            {
              id: "rev-i4",
              type: "qcm",
              question:
                "Quel est l'impact principal de la campagne de Russie (1812) sur l'Empire napoléonien ?",
              options: [
                "Elle renforce la puissance militaire de la France",
                "Elle conduit à la signature d'un traité de paix avantageux",
                "Elle détruit la Grande Armée et entame la chute de Napoléon",
                "Elle permet à Napoléon de conquérir Moscou durablement",
              ],
              correctAnswer:
                "Elle détruit la Grande Armée et entame la chute de Napoléon",
              explanation:
                "Sur 600 000 soldats partis, moins de 100 000 reviennent. L'échec russe montre la fragilité de l'Empire et encourage les monarchies à former une coalition.",
            },
            {
              id: "rev-i5",
              type: "association",
              question:
                "Associe chaque groupe de la Convention à sa description.",
              pairs: [
                { left: "Montagnards", right: "Radicaux — Robespierre, Marat, Danton" },
                { left: "Girondins", right: "Républicains modérés — moins extrêmes" },
                { left: "Marais", right: "Modérés — cherchent la stabilité" },
                { left: "Comité de salut public", right: "Organe aux pouvoirs exceptionnels pendant la Terreur" },
              ],
              correctAnswer:
                "Radicaux — Robespierre, Marat, Danton|Républicains modérés — moins extrêmes|Modérés — cherchent la stabilité|Organe aux pouvoirs exceptionnels pendant la Terreur",
              explanation:
                "Ces trois groupes s'affrontent à la Convention (1792-1795). Les Montagnards finissent par s'imposer et instaurent la Terreur.",
            },
            {
              id: "rev-i6",
              type: "qcm",
              question:
                "Quel scandale représente le rétablissement de l'esclavage par Napoléon en 1802 ?",
              options: [
                "Il n'a aucune importance car l'esclavage n'avait pas été aboli",
                "C'est une trahison des principes révolutionnaires d'égalité et de liberté",
                "C'est une décision économique sans portée politique",
                "C'est une initiative populaire réclamée par les colons",
              ],
              correctAnswer:
                "C'est une trahison des principes révolutionnaires d'égalité et de liberté",
              explanation:
                "L'esclavage avait été aboli en 1794 par la Convention. Napoléon le rétablit en 1802 — c'est une contradiction directe avec les principes de la DDHC.",
            },
            {
              id: "rev-i7",
              type: "tri-categories",
              question:
                "Classe ces événements selon la période à laquelle ils appartiennent.",
              items: [
                { id: "a", label: "Prise de la Bastille" },
                { id: "b", label: "Exécution de Louis XVI" },
                { id: "c", label: "Sacre de Napoléon" },
                { id: "d", label: "Serment du Jeu de Paume" },
                { id: "e", label: "Bataille de Waterloo" },
                { id: "f", label: "Coup d'État du 18 brumaire" },
              ],
              categories: [
                {
                  id: "revolution",
                  label: "Révolution (1789-1799)",
                  correctItemIds: ["a", "b", "d", "f"],
                },
                {
                  id: "empire",
                  label: "Empire (1804-1815)",
                  correctItemIds: ["c", "e"],
                },
              ],
              explanation:
                "Le coup d'État du 18 brumaire (1799) marque la fin de la Révolution et le début du Consulat, qui précède l'Empire (1804).",
            },
            {
              id: "rev-i8",
              type: "vrai-faux",
              question:
                "Napoléon diffuse les idées révolutionnaires françaises dans les pays européens qu'il conquiert.",
              correctAnswer: "Vrai",
              explanation:
                "Dans les territoires conquis, Napoléon applique le Code civil et abolit les privilèges féodaux — un héritage paradoxal : un conquérant qui répand des idées de liberté.",
            },
            {
              id: "rev-i9",
              type: "qcm",
              question:
                "Quel est l'objectif du Congrès de Vienne (1815) après la chute de Napoléon ?",
              options: [
                "Proclamer une nouvelle République française",
                "Reconstruire l'Europe en rétablissant les monarchies traditionnelles",
                "Juger Napoléon pour crimes de guerre",
                "Créer une alliance militaire franco-anglaise",
              ],
              correctAnswer:
                "Reconstruire l'Europe en rétablissant les monarchies traditionnelles",
              explanation:
                "Le Congrès de Vienne (1814-1815) réunit les grandes puissances européennes pour reconstruire l'ordre monarchique d'avant la Révolution.",
            },
            {
              id: "rev-i10",
              type: "ordre",
              question:
                "Remets dans l'ordre les régimes politiques que traverse la France de 1789 à 1815.",
              options: [
                "Premier Empire",
                "Monarchie absolue (Louis XVI)",
                "Consulat",
                "Monarchie constitutionnelle",
                "République (Convention)",
              ],
              correctAnswer: [
                "Monarchie absolue (Louis XVI)",
                "Monarchie constitutionnelle",
                "République (Convention)",
                "Consulat",
                "Premier Empire",
              ],
              explanation:
                "La France traverse 5 régimes en 26 ans : absolutisme → monarchie constitutionnelle → République → Consulat → Empire.",
            },
            {
              id: "rev-i11",
              type: "qcm",
              question:
                "Pourquoi la Terreur prend-elle fin en juillet 1794 ?",
              options: [
                "Napoléon prend le pouvoir par un coup d'État",
                "La France gagne la guerre contre l'Autriche",
                "Robespierre est arrêté et guillotiné par ses propres alliés",
                "Louis XVII reprend le trône",
              ],
              correctAnswer:
                "Robespierre est arrêté et guillotiné par ses propres alliés",
              explanation:
                "La chute de Robespierre (9 thermidor — 27 juillet 1794) met fin à la Terreur. Ses anciens alliés, craignant d'être les prochaines victimes, le font arrêter et exécuter.",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Nuances, héritage et comparaison des régimes",
          questions: [
            {
              id: "rev-e1",
              type: "qcm",
              question:
                "En quoi le coup d'État du 18 brumaire (1799) est-il à la fois la fin de la Révolution et sa continuité ?",
              options: [
                "Il est uniquement une rupture : Napoléon abandonne tous les acquis révolutionnaires",
                "Il conserve certains acquis (Code civil, égalité civile) mais supprime les idéaux démocratiques",
                "Il est uniquement une continuité : Napoléon radicalise la Révolution",
                "Il est sans lien avec la Révolution, c'est une rupture totale",
              ],
              correctAnswer:
                "Il conserve certains acquis (Code civil, égalité civile) mais supprime les idéaux démocratiques",
              explanation:
                "Napoléon institutionnalise des acquis pratiques de la Révolution (égalité devant la loi, abolition des privilèges) tout en rétablissant un pouvoir personnel autoritaire.",
            },
            {
              id: "rev-e2",
              type: "tri-categories",
              question:
                "Classe ces éléments selon qu'ils représentent un acquis conservé par Napoléon ou un recul par rapport à la Révolution.",
              items: [
                { id: "a", label: "Code civil (égalité devant la loi)" },
                { id: "b", label: "Rétablissement de l'esclavage (1802)" },
                { id: "c", label: "Création des préfets" },
                { id: "d", label: "Censure de la presse" },
                { id: "e", label: "Création des lycées" },
                { id: "f", label: "Pouvoir personnel de l'Empereur" },
              ],
              categories: [
                {
                  id: "acquis",
                  label: "Acquis conservés ✔",
                  correctItemIds: ["a", "c", "e"],
                },
                {
                  id: "reculs",
                  label: "Reculs par rapport à la Révolution ❌",
                  correctItemIds: ["b", "d", "f"],
                },
              ],
              explanation:
                "Napoléon modernise l'État (Code civil, préfets, lycées) mais trahit les idéaux démocratiques : il censure, rétablit l'esclavage et concentre le pouvoir.",
            },
            {
              id: "rev-e3",
              type: "qcm",
              question:
                "En quoi la Terreur (1793-1794) constitue-t-elle une trahison des idéaux de 1789 ?",
              options: [
                "Elle rétablit la monarchie et annule la DDHC",
                "Elle suspend les libertés fondamentales affirmées par la DDHC au nom de la survie de la République",
                "Elle donne trop de pouvoir au peuple contre les élites",
                "Elle renonce à l'égalité des droits en faveur de la noblesse",
              ],
              correctAnswer:
                "Elle suspend les libertés fondamentales affirmées par la DDHC au nom de la survie de la République",
              explanation:
                "La DDHC (1789) affirme les droits naturels inaliénables. La Terreur les suspend au nom de l'urgence révolutionnaire — sauver la Révolution en trahissant ses principes.",
            },
            {
              id: "rev-e4",
              type: "association",
              question: "Associe chaque concept à sa définition précise.",
              pairs: [
                {
                  left: "Monarchie constitutionnelle",
                  right: "Le roi partage le pouvoir avec une assemblée élue",
                },
                {
                  left: "Consulat",
                  right: "Régime autoritaire de Napoléon avant l'Empire (1799-1804)",
                },
                {
                  left: "Terreur",
                  right: "Suspension des libertés et exécutions politiques (1793-1794)",
                },
                {
                  left: "Congrès de Vienne",
                  right: "Reconstruction de l'Europe monarchique après Napoléon (1815)",
                },
              ],
              correctAnswer:
                "Le roi partage le pouvoir avec une assemblée élue|Régime autoritaire de Napoléon avant l'Empire (1799-1804)|Suspension des libertés et exécutions politiques (1793-1794)|Reconstruction de l'Europe monarchique après Napoléon (1815)",
              explanation:
                "Ces quatre concepts balisent les grandes transformations politiques de la période 1789-1815.",
            },
            {
              id: "rev-e5",
              type: "qcm",
              question:
                "Quel est l'impact à long terme de la diffusion des idées révolutionnaires françaises en Europe par les armées napoléoniennes ?",
              options: [
                "Ces idées n'ont eu aucun impact durable hors de France",
                "Elles ont inspiré les mouvements nationalistes et libéraux du XIXᵉ siècle en Europe",
                "Elles ont conduit immédiatement à des révolutions dans tous les pays conquis",
                "Elles ont renforcé les monarchies absolues en Europe",
              ],
              correctAnswer:
                "Elles ont inspiré les mouvements nationalistes et libéraux du XIXᵉ siècle en Europe",
              explanation:
                "Les idées révolutionnaires diffusées par Napoléon ont alimenté les révolutions de 1830 et 1848 en Europe.",
            },
            {
              id: "rev-e6",
              type: "qcm",
              question:
                "Pourquoi le Congrès de Vienne (1815) échoue-t-il à long terme à effacer l'héritage révolutionnaire ?",
              options: [
                "Parce que Napoléon revient au pouvoir après le Congrès",
                "Parce que les idées révolutionnaires (nationalisme, liberté) avaient déjà diffusé dans toute l'Europe",
                "Parce que la France refuse de signer les accords du Congrès",
                "Parce que les monarchies européennes s'accordent insuffisamment entre elles",
              ],
              correctAnswer:
                "Parce que les idées révolutionnaires (nationalisme, liberté) avaient déjà diffusé dans toute l'Europe",
              explanation:
                "Le Congrès de Vienne restaure les monarques, mais ne peut pas effacer 25 ans d'idées révolutionnaires. Les révolutions de 1830 et 1848 montreront que les peuples n'ont pas oublié 1789.",
            },
            {
              id: "rev-e7",
              type: "vrai-faux",
              question:
                "La DDHC de 1789 reconnaît l'égalité politique entre hommes et femmes.",
              correctAnswer: "Faux",
              explanation:
                "La DDHC de 1789 ne reconnaît pas les droits politiques des femmes. Olympe de Gouges rédigera la Déclaration des droits de la femme et de la citoyenne en 1791 pour dénoncer cette exclusion.",
            },
            {
              id: "rev-e8",
              type: "qcm",
              question:
                "Quel bilan peut-on tirer du règne de Napoléon Iᵉʳ pour la France et l'Europe ?",
              options: [
                "Un bilan entièrement positif : la France est plus puissante",
                "Un bilan entièrement négatif : Napoléon détruit les acquis révolutionnaires",
                "Un bilan contrasté : modernisation durable de l'État, mais au prix de millions de morts et de la perte des libertés politiques",
                "Un bilan neutre : Napoléon n'a rien changé à la situation héritée de la Révolution",
              ],
              correctAnswer:
                "Un bilan contrasté : modernisation durable de l'État, mais au prix de millions de morts et de la perte des libertés politiques",
              explanation:
                "Les guerres napoléoniennes ont fait entre 3 et 6 millions de morts. Napoléon laisse une administration modernisée et des idées révolutionnaires diffusées — mais aussi une France épuisée et des libertés politiques détruites.",
            },
          ],
        },
      ],
    },
  },

  // ─── EC — L'EUROPE ET LA RÉVOLUTION INDUSTRIELLE ─────────────────────────
  {
    slug: "histoire-ec-revolution-industrielle-fiche",
    title: "EC — L'Europe et la révolution industrielle",
    description:
      "Fiche de révision pour l'évaluation commune : les 2 phases de la révolution industrielle, les transformations, l'urbanisation, la nouvelle société, les luttes ouvrières et les idéologies.",
    type: "fiche",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Hist - EC - L'Europe et la révolution industrielle",
    createdAt: "2026-04-26T17:30:00Z",
    updatedAt: "2026-04-26T17:30:00Z",
    relatedResourceSlug: "histoire-ec-revolution-industrielle-quiz",
    tags: [
      "révolution industrielle",
      "industrialisation",
      "ouvriers",
      "bourgeoisie",
      "syndicats",
      "idéologies",
      "urbanisation",
      "EC",
      "fiche",
    ],
    mdxPath: "4e/histoire-geo/fiches/histoire-ec-revolution-industrielle-fiche.mdx",
  },
  {
    slug: "histoire-ec-revolution-industrielle-quiz",
    title: "Quiz EC — L'Europe et la révolution industrielle",
    description:
      "Teste tes connaissances pour l'évaluation commune : dates clés, transformations industrielles, conditions ouvrières, urbanisation et idéologies. 3 niveaux.",
    type: "quiz",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Hist - EC - L'Europe et la révolution industrielle",
    createdAt: "2026-04-26T17:30:00Z",
    updatedAt: "2026-04-26T17:30:00Z",
    relatedResourceSlug: "histoire-ec-revolution-industrielle-fiche",
    tags: [
      "révolution industrielle",
      "industrialisation",
      "ouvriers",
      "idéologies",
      "EC",
      "quiz",
    ],
    quizData: {
      title: "L'Europe et la révolution industrielle",
      description: "Choisis ton niveau pour réviser l'évaluation commune.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Dates clés, inventions et définitions de base.",
          questions: [
            {
              id: "ind-f1",
              type: "qcm",
              question: "En quelle année James Watt invente-t-il la machine à vapeur ?",
              options: ["1748", "1769", "1789", "1815"],
              correctAnswer: "1769",
            },
            {
              id: "ind-f2",
              type: "qcm",
              question: "Quelle énergie est la principale source de la 1ère révolution industrielle ?",
              options: ["Le pétrole", "L'électricité", "Le charbon", "Le gaz naturel"],
              correctAnswer: "Le charbon",
            },
            {
              id: "ind-f3",
              type: "vrai-faux",
              question: "La 2ème révolution industrielle commence vers 1880.",
              correctAnswer: "Vrai",
            },
            {
              id: "ind-f4",
              type: "qcm",
              question: "Qu'est-ce que l'industrialisation ?",
              options: [
                "La construction de nouvelles villes",
                "L'augmentation rapide de la production grâce aux machines",
                "La disparition des paysans",
                "Le développement du commerce maritime",
              ],
              correctAnswer: "L'augmentation rapide de la production grâce aux machines",
            },
            {
              id: "ind-f5",
              type: "qcm",
              question: "Quelles industries dominent la 2ème révolution industrielle ?",
              options: [
                "Textile et métallurgie",
                "Chimie et sidérurgie",
                "Agriculture et élevage",
                "Commerce et banque",
              ],
              correctAnswer: "Chimie et sidérurgie",
            },
            {
              id: "ind-f6",
              type: "vrai-faux",
              question: "L'exode rural désigne les citadins qui partent vivre à la campagne.",
              correctAnswer: "Faux",
            },
            {
              id: "ind-f7",
              type: "qcm",
              question: "Qu'est-ce qu'un prolétaire ?",
              options: [
                "Un patron qui possède une usine",
                "Un paysan qui cultive la terre",
                "Un ouvrier pauvre qui n'a que son travail pour vivre",
                "Un banquier de la bourgeoisie",
              ],
              correctAnswer: "Un ouvrier pauvre qui n'a que son travail pour vivre",
            },
            {
              id: "ind-f8",
              type: "qcm",
              question: "Quel événement marque une avancée pour les ouvriers en 1864 ?",
              options: [
                "L'autorisation des syndicats",
                "La limitation de la journée de travail",
                "La reconnaissance du droit de grève",
                "La création de l'assurance maladie",
              ],
              correctAnswer: "La reconnaissance du droit de grève",
            },
            {
              id: "ind-f9",
              type: "vrai-faux",
              question: "Le train est une innovation majeure de la révolution industrielle.",
              correctAnswer: "Vrai",
            },
            {
              id: "ind-f10",
              type: "qcm",
              question: "Quelle ville française est un exemple emblématique de ville industrielle ?",
              options: ["Bordeaux", "Le Creusot", "Marseille", "Strasbourg"],
              correctAnswer: "Le Creusot",
            },
            {
              id: "ind-f11",
              type: "qcm",
              question: "Qu'est-ce qu'un syndicat ?",
              options: [
                "Un parti politique",
                "Une organisation qui défend les droits des travailleurs",
                "Une association de patrons",
                "Un tribunal du travail",
              ],
              correctAnswer: "Une organisation qui défend les droits des travailleurs",
            },
            {
              id: "ind-f12",
              type: "vrai-faux",
              question: "Les canuts étaient des ouvriers du textile à Lyon.",
              correctAnswer: "Vrai",
            },
            {
              id: "ind-f13",
              type: "association",
              question: "Associe chaque révolution industrielle à ses caractéristiques.",
              pairs: [
                { left: "1ère révolution (1760–1880)", right: "Charbon + vapeur" },
                { left: "2ème révolution (1880–1914)", right: "Électricité + pétrole" },
                { left: "Industries textile et métallurgie", right: "1ère révolution" },
                { left: "Industries chimie et sidérurgie", right: "2ème révolution" },
              ],
              correctAnswer:
                "Charbon + vapeur|Électricité + pétrole|1ère révolution|2ème révolution",
              explanation:
                "La 1ère révolution industrielle (1760-1880) utilise le charbon et la vapeur pour le textile et la métallurgie. La 2ème (1880-1914) exploite l'électricité et le pétrole pour la chimie et la sidérurgie.",
            },
            {
              id: "ind-f14",
              type: "qcm",
              question: "En quelle année les syndicats sont-ils autorisés en France ?",
              options: ["1864", "1871", "1884", "1900"],
              correctAnswer: "1884",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Transformations sociales, conditions ouvrières et lois sociales.",
          questions: [
            {
              id: "ind-i1",
              type: "qcm",
              question: "Quelle classe sociale possède les usines et le capital durant la révolution industrielle ?",
              options: ["La noblesse", "Le clergé", "La bourgeoisie", "Les prolétaires"],
              correctAnswer: "La bourgeoisie",
            },
            {
              id: "ind-i2",
              type: "texte-a-trous",
              question: "Les paysans quittent la campagne pour aller travailler en ville : c'est l'___ rural.",
              options: ["exode", "retour", "flux", "mouvement"],
              correctAnswer: "exode",
            },
            {
              id: "ind-i3",
              type: "vrai-faux",
              question: "Au début de la révolution industrielle, les ouvriers bénéficiaient d'une assurance maladie.",
              correctAnswer: "Faux",
            },
            {
              id: "ind-i4",
              type: "qcm",
              question: "Sous quel régime les travaux d'Haussmann transforment-ils Paris ?",
              options: ["La Restauration", "La Monarchie de Juillet", "Le Second Empire (Napoléon III)", "La IIIe République"],
              correctAnswer: "Le Second Empire (Napoléon III)",
            },
            {
              id: "ind-i5",
              type: "ordre",
              question: "Remets ces avancées sociales dans l'ordre chronologique.",
              options: [
                "Syndicats autorisés (1884)",
                "Révolte des canuts à Lyon (1831)",
                "Droit de grève reconnu (1864)",
                "Journée de travail limitée (1906)",
              ],
              correctAnswer: [
                "Révolte des canuts à Lyon (1831)",
                "Droit de grève reconnu (1864)",
                "Syndicats autorisés (1884)",
                "Journée de travail limitée (1906)",
              ],
            },
            {
              id: "ind-i6",
              type: "qcm",
              question: "Quelle est la principale ressource naturelle qui alimente les machines de la 1ère révolution industrielle ?",
              options: ["Le pétrole", "Le gaz", "Le charbon", "L'uranium"],
              correctAnswer: "Le charbon",
            },
            {
              id: "ind-i7",
              type: "association",
              question: "Associe chaque classe sociale à sa description.",
              pairs: [
                { left: "Prolétaires", right: "Travaillent en usine, salaires bas" },
                { left: "Bourgeoisie", right: "Possèdent les usines, pouvoir économique" },
                { left: "Canuts", right: "Ouvriers de la soie à Lyon" },
                { left: "Artisans", right: "Fabrication à la main, avant l'industrialisation" },
              ],
              correctAnswer:
                "Travaillent en usine, salaires bas|Possèdent les usines, pouvoir économique|Ouvriers de la soie à Lyon|Fabrication à la main, avant l'industrialisation",
            },
            {
              id: "ind-i8",
              type: "vrai-faux",
              question: "Les travaux d'Haussmann à Paris améliorent le réseau d'égouts et créent de grandes avenues.",
              correctAnswer: "Vrai",
            },
            {
              id: "ind-i9",
              type: "tri-categories",
              question: "Classe ces éléments dans la bonne catégorie.",
              items: [
                { id: "a", label: "Possèdent les usines" },
                { id: "b", label: "Salaires très bas" },
                { id: "c", label: "Pouvoir économique et politique" },
                { id: "d", label: "N'ont que leur force de travail" },
                { id: "e", label: "Vivent dans de beaux quartiers" },
                { id: "f", label: "Logements surpeuplés" },
              ],
              categories: [
                { id: "bourgeoisie", label: "Bourgeoisie", correctItemIds: ["a", "c", "e"] },
                { id: "ouvriers", label: "Ouvriers (prolétaires)", correctItemIds: ["b", "d", "f"] },
              ],
            },
            {
              id: "ind-i10",
              type: "texte-a-trous",
              question: "Le droit de ___ est reconnu en 1864 : les ouvriers peuvent arrêter le travail collectivement pour protester.",
              options: ["vote", "grève", "syndicat", "réunion"],
              correctAnswer: "grève",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Idéologies, lutte des classes, Le Creusot et les canuts.",
          questions: [
            {
              id: "ind-e1",
              type: "qcm",
              question: "Quelle idéologie prône la liberté économique totale et le refus de l'intervention de l'État ?",
              options: ["Le socialisme", "Le communisme", "Le libéralisme", "L'anarchisme"],
              correctAnswer: "Le libéralisme",
            },
            {
              id: "ind-e2",
              type: "qcm",
              question: "Quel ouvrage Karl Marx publie-t-il en 1848 avec Engels ?",
              options: [
                "Du Contrat social",
                "Le Capital",
                "Manifeste du parti communiste",
                "L'Encyclopédie",
              ],
              correctAnswer: "Manifeste du parti communiste",
            },
            {
              id: "ind-e3",
              type: "association",
              question: "Associe chaque idéologie à sa description.",
              pairs: [
                { left: "Libéralisme", right: "L'État ne doit pas intervenir dans l'économie" },
                { left: "Socialisme", right: "Réduire les inégalités, défendre les ouvriers" },
                { left: "Communisme", right: "Supprimer les classes sociales, société égalitaire" },
                { left: "Karl Marx", right: "Auteur du Manifeste du parti communiste (1848)" },
              ],
              correctAnswer:
                "L'État ne doit pas intervenir dans l'économie|Réduire les inégalités, défendre les ouvriers|Supprimer les classes sociales, société égalitaire|Auteur du Manifeste du parti communiste (1848)",
            },
            {
              id: "ind-e4",
              type: "qcm",
              question: "Quelle est l'idée centrale de Karl Marx ?",
              options: [
                "Les patrons doivent être libres de fixer les salaires",
                "L'État doit contrôler toutes les entreprises",
                "Les ouvriers doivent s'unir, prendre le pouvoir et créer une société sans classes",
                "La noblesse doit reprendre le pouvoir politique",
              ],
              correctAnswer: "Les ouvriers doivent s'unir, prendre le pouvoir et créer une société sans classes",
            },
            {
              id: "ind-e5",
              type: "vrai-faux",
              question: "Le libéralisme est l'idéologie défendue par les patrons et la bourgeoisie industrielle.",
              correctAnswer: "Vrai",
            },
            {
              id: "ind-e6",
              type: "qcm",
              question: "Pourquoi Le Creusot est-il un exemple représentatif de la révolution industrielle ?",
              options: [
                "C'est la capitale financière de la France",
                "C'est une ville industrielle proche du charbon et du minerai de fer, reliée par le train",
                "C'est la ville où Karl Marx a écrit son Manifeste",
                "C'est la ville où les syndicats ont été fondés",
              ],
              correctAnswer: "C'est une ville industrielle proche du charbon et du minerai de fer, reliée par le train",
            },
            {
              id: "ind-e7",
              type: "texte-a-trous",
              question: "Les canuts sont des ouvriers de la ___ à Lyon, connus pour leurs révoltes dans les années 1830.",
              options: ["laine", "soie", "coton", "dentelle"],
              correctAnswer: "soie",
            },
            {
              id: "ind-e8",
              type: "tri-categories",
              question: "Classe ces affirmations dans la bonne idéologie.",
              items: [
                { id: "a", label: "L'État ne doit pas intervenir dans l'économie" },
                { id: "b", label: "Les ouvriers doivent prendre le pouvoir" },
                { id: "c", label: "Réduire les inégalités sociales par des lois" },
                { id: "d", label: "Liberté totale du marché" },
                { id: "e", label: "Supprimer les classes sociales" },
                { id: "f", label: "Défendre les travailleurs contre l'exploitation" },
              ],
              categories: [
                { id: "liberalisme", label: "Libéralisme", correctItemIds: ["a", "d"] },
                { id: "socialisme", label: "Socialisme", correctItemIds: ["c", "f"] },
                { id: "communisme", label: "Communisme", correctItemIds: ["b", "e"] },
              ],
            },
            {
              id: "ind-e9",
              type: "qcm",
              question: "Quelle est la différence principale entre socialisme et communisme ?",
              options: [
                "Le socialisme veut améliorer la situation des ouvriers par des lois ; le communisme veut supprimer toutes les classes sociales",
                "Le socialisme défend la liberté économique ; le communisme défend les ouvriers",
                "Le socialisme est du XIXᵉ siècle ; le communisme est du XXᵉ siècle",
                "Il n'y a aucune différence",
              ],
              correctAnswer:
                "Le socialisme veut améliorer la situation des ouvriers par des lois ; le communisme veut supprimer toutes les classes sociales",
            },
            {
              id: "ind-e10",
              type: "association",
              question: "Associe chaque concept à sa définition.",
              pairs: [
                { left: "Prolétariat", right: "Classe des ouvriers qui n'ont que leur force de travail" },
                { left: "Capital", right: "Richesses (usines, machines, argent) possédées par la bourgeoisie" },
                { left: "Lutte des classes", right: "Conflit entre bourgeoisie et prolétariat selon Marx" },
                { left: "Grève", right: "Arrêt collectif du travail pour protester" },
              ],
              correctAnswer:
                "Classe des ouvriers qui n'ont que leur force de travail|Richesses (usines, machines, argent) possédées par la bourgeoisie|Conflit entre bourgeoisie et prolétariat selon Marx|Arrêt collectif du travail pour protester",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "histoire-ec-synthese-fiche",
    title: "Synthèse EC — Histoire 4e",
    description: "Du XVIIIe au XIXe siècle : Lumières, Révolution française, Empire et révolution industrielle.",
    type: "fiche",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Synthèse EC — Histoire 4e",
    createdAt: "2026-04-26T17:40:00Z",
    updatedAt: "2026-04-26T17:40:00Z",
    tags: ["synthèse", "lumières", "révolution", "empire", "industrialisation", "frise", "fiche"],
    relatedResourceSlug: "histoire-ec-synthese-quiz",
    mdxPath: "4e/histoire-geo/fiches/histoire-ec-synthese-fiche.mdx",
  },
  {
    slug: "histoire-ec-synthese-quiz",
    title: "Quiz Synthèse EC — Histoire 4e",
    description: "Révise les 4 grands chapitres d'histoire 4e : Lumières, traite négrière, Révolution française et révolution industrielle.",
    type: "quiz",
    level: "4e",
    subject: "histoire-geo",
    chapter: "Synthèse EC — Histoire 4e",
    createdAt: "2026-04-26T17:40:00Z",
    updatedAt: "2026-04-26T17:40:00Z",
    tags: ["synthèse", "quiz", "lumières", "révolution", "empire", "industrialisation"],
    relatedResourceSlug: "histoire-ec-synthese-fiche",
    quizData: {
      title: "Synthèse EC — Histoire 4e",
      description: "Choisis ton niveau pour réviser les 4 grands chapitres.",
      passingScore: 60,
      sessionSize: 10,
      levels: [
        {
          id: "facile",
          name: "Facile",
          emoji: "🟢",
          description: "Notions essentielles et dates clés des 4 chapitres.",
          questions: [
            {
              id: "syn-f1",
              type: "qcm",
              question: "Quel philosophe des Lumières a défendu la séparation des pouvoirs ?",
              options: ["Voltaire", "Rousseau", "Montesquieu", "Lavoisier"],
              correctAnswer: "Montesquieu",
            },
            {
              id: "syn-f2",
              type: "vrai-faux",
              question: "Le commerce triangulaire implique 3 continents : Europe, Afrique et Amériques.",
              correctAnswer: "Vrai",
            },
            {
              id: "syn-f3",
              type: "qcm",
              question: "En quelle année a eu lieu la prise de la Bastille ?",
              options: ["1776", "1789", "1804", "1815"],
              correctAnswer: "1789",
            },
            {
              id: "syn-f4",
              type: "vrai-faux",
              question: "Napoléon est devenu Empereur en 1804.",
              correctAnswer: "Vrai",
            },
            {
              id: "syn-f5",
              type: "qcm",
              question: "Quel pays a lancé la première révolution industrielle ?",
              options: ["France", "Allemagne", "Angleterre", "États-Unis"],
              correctAnswer: "Angleterre",
            },
            {
              id: "syn-f6",
              type: "texte-a-trous",
              question: "L'esclavage a été définitivement aboli en France en ___.",
              options: ["1789", "1804", "1848", "1865"],
              correctAnswer: "1848",
            },
            {
              id: "syn-f7",
              type: "qcm",
              question: "Que signifie DDHC ?",
              options: [
                "Déclaration des Droits de l'Homme et du Citoyen",
                "Déclaration des Droits de l'Homme et de la Constitution",
                "Décision des Droits de l'Humanité et du Citoyen",
                "Déclaration des Devoirs de l'Homme et du Citoyen",
              ],
              correctAnswer: "Déclaration des Droits de l'Homme et du Citoyen",
            },
            {
              id: "syn-f8",
              type: "qcm",
              question: "Quel est le principal carburant de la 1ère révolution industrielle ?",
              options: ["Pétrole", "Électricité", "Charbon", "Gaz naturel"],
              correctAnswer: "Charbon",
            },
            {
              id: "syn-f9",
              type: "qcm",
              question: "Comment s'appelait le mouvement intellectuel du XVIIIe siècle ?",
              options: ["La Renaissance", "Les Lumières", "Le Romantisme", "L'Humanisme"],
              correctAnswer: "Les Lumières",
            },
            {
              id: "syn-f10",
              type: "qcm",
              question: "Qu'est-ce qu'un prolétaire ?",
              options: [
                "Un noble qui a perdu ses terres",
                "Un marchand enrichi par le commerce colonial",
                "Un ouvrier qui vend sa force de travail",
                "Un philosophe des Lumières",
              ],
              correctAnswer: "Un ouvrier qui vend sa force de travail",
            },
            {
              id: "syn-f11",
              type: "vrai-faux",
              question: "La prise de la Bastille en 1789 marque la fin de l'Ancien Régime.",
              correctAnswer: "Vrai",
            },
            {
              id: "syn-f12",
              type: "qcm",
              question: "Quelle conquête sociale a été obtenue en 1864 ?",
              options: ["Le droit de vote", "Le droit de grève", "Les syndicats", "La journée de 8 heures"],
              correctAnswer: "Le droit de grève",
            },
          ],
        },
        {
          id: "intermediaire",
          name: "Intermédiaire",
          emoji: "🟡",
          description: "Liens entre les chapitres et compréhension approfondie.",
          questions: [
            {
              id: "syn-i1",
              type: "ordre",
              question: "Remets ces régimes politiques dans l'ordre chronologique.",
              options: [
                "Empire napoléonien",
                "Monarchie absolue (Ancien Régime)",
                "La Terreur (République radicale)",
                "Monarchie constitutionnelle",
              ],
              correctAnswer: [
                "Monarchie absolue (Ancien Régime)",
                "Monarchie constitutionnelle",
                "La Terreur (République radicale)",
                "Empire napoléonien",
              ],
            },
            {
              id: "syn-i2",
              type: "association",
              question: "Associe chaque philosophe à son idée principale.",
              pairs: [
                { left: "Voltaire", right: "Liberté de penser, tolérance religieuse" },
                { left: "Montesquieu", right: "Séparation des pouvoirs législatif / exécutif / judiciaire" },
                { left: "Rousseau", right: "Souveraineté du peuple, contrat social" },
                { left: "Lavoisier", right: "Science et observation contre les dogmes" },
              ],
              correctAnswer:
                "Liberté de penser, tolérance religieuse|Séparation des pouvoirs législatif / exécutif / judiciaire|Souveraineté du peuple, contrat social|Science et observation contre les dogmes",
            },
            {
              id: "syn-i3",
              type: "qcm",
              question: "Dans le commerce triangulaire, que transporte le bateau qui part d'Afrique vers les Amériques ?",
              options: ["Des produits coloniaux (sucre, café)", "Des esclaves africains déportés", "Des armes et de l'alcool", "De l'argent"],
              correctAnswer: "Des esclaves africains déportés",
            },
            {
              id: "syn-i4",
              type: "qcm",
              question: "Quel est le lien entre les Lumières et la Révolution française ?",
              options: [
                "Les philosophes ont financé la Révolution",
                "Les idées de liberté et d'égalité des Lumières ont inspiré les révolutionnaires",
                "La Révolution a eu lieu avant les Lumières",
                "Les philosophes s'opposaient à la Révolution",
              ],
              correctAnswer: "Les idées de liberté et d'égalité des Lumières ont inspiré les révolutionnaires",
            },
            {
              id: "syn-i5",
              type: "tri-categories",
              question: "Classe ces événements dans la bonne période.",
              items: [
                { id: "a", label: "Publication de l'Encyclopédie" },
                { id: "b", label: "Prise de la Bastille" },
                { id: "c", label: "Construction des premières usines en Angleterre" },
                { id: "d", label: "Naissance de la société d'ordres (Clergé/Noblesse/Tiers État)" },
                { id: "e", label: "Proclamation de la République française" },
                { id: "f", label: "Droit de grève (1864)" },
              ],
              categories: [
                { id: "lumieres", label: "Lumières (XVIIIe s.)", correctItemIds: ["a", "d"] },
                { id: "revolution", label: "Révolution (1789-1815)", correctItemIds: ["b", "e"] },
                { id: "industrialisation", label: "Industrialisation (XIXe s.)", correctItemIds: ["c", "f"] },
              ],
            },
            {
              id: "syn-i6",
              type: "qcm",
              question: "Quelle est la contradiction entre les idées des Lumières et la traite négrière ?",
              options: [
                "Les Lumières prônent la liberté et l'égalité, mais coexistent avec l'esclavage de millions d'Africains",
                "Les Lumières défendent la monarchie, mais la traite négrière finance les révolutions",
                "Il n'y a pas de contradiction : les philosophes approuvaient la traite",
                "Les Lumières sont postérieures à la traite négrière",
              ],
              correctAnswer:
                "Les Lumières prônent la liberté et l'égalité, mais coexistent avec l'esclavage de millions d'Africains",
            },
            {
              id: "syn-i7",
              type: "texte-a-trous",
              question: "La 1re abolition de l'esclavage en France date de ___, mais Napoléon l'a annulée en 1802.",
              options: ["1789", "1794", "1804", "1815"],
              correctAnswer: "1794",
            },
            {
              id: "syn-i8",
              type: "qcm",
              question: "Qu'a conservé Napoléon des acquis de la Révolution ?",
              options: [
                "La liberté de la presse et les élections libres",
                "Le Code civil et l'égalité civile",
                "La démocratie directe et les droits syndicaux",
                "La monarchie constitutionnelle",
              ],
              correctAnswer: "Le Code civil et l'égalité civile",
            },
            {
              id: "syn-i9",
              type: "vrai-faux",
              question: "La 2e révolution industrielle (vers 1870-1914) repose principalement sur le charbon et la vapeur.",
              correctAnswer: "Faux",
            },
            {
              id: "syn-i10",
              type: "association",
              question: "Associe chaque date à l'événement correspondant.",
              pairs: [
                { left: "1789", right: "Prise de la Bastille — DDHC" },
                { left: "1804", right: "Napoléon Ier Empereur" },
                { left: "1815", right: "Défaite de Waterloo" },
                { left: "1848", right: "Abolition définitive de l'esclavage en France" },
              ],
              correctAnswer:
                "Prise de la Bastille — DDHC|Napoléon Ier Empereur|Défaite de Waterloo|Abolition définitive de l'esclavage en France",
            },
            {
              id: "syn-i11",
              type: "qcm",
              question: "Pourquoi les ouvriers du XIXe siècle se mettent-ils en grève ?",
              options: [
                "Pour soutenir l'Église catholique",
                "Pour protester contre les conditions de travail : salaires bas, journées longues, travail des enfants",
                "Pour réclamer le droit de vote aux élections locales",
                "Pour obtenir des vacances payées",
              ],
              correctAnswer:
                "Pour protester contre les conditions de travail : salaires bas, journées longues, travail des enfants",
            },
            {
              id: "syn-i12",
              type: "qcm",
              question: "Quel document révolutionnaire pose les bases des libertés civiles modernes ?",
              options: [
                "Le Code Napoléon",
                "La Déclaration des Droits de l'Homme et du Citoyen (1789)",
                "L'Encyclopédie de Diderot",
                "Le Contrat Social de Rousseau",
              ],
              correctAnswer: "La Déclaration des Droits de l'Homme et du Citoyen (1789)",
            },
          ],
        },
        {
          id: "expert",
          name: "Expert",
          emoji: "🔴",
          description: "Analyse et mise en perspective des 4 chapitres.",
          questions: [
            {
              id: "syn-e1",
              type: "ordre",
              question: "Remets ces grandes ruptures dans l'ordre chronologique.",
              options: [
                "Droit syndical légalisé en France (1884)",
                "Début de la 1ère révolution industrielle en Angleterre (~1760)",
                "Publication de l'Encyclopédie (~1750-1772)",
                "Proclamation de l'Empire napoléonien (1804)",
                "Prise de la Bastille (1789)",
              ],
              correctAnswer: [
                "Publication de l'Encyclopédie (~1750-1772)",
                "Début de la 1ère révolution industrielle en Angleterre (~1760)",
                "Prise de la Bastille (1789)",
                "Proclamation de l'Empire napoléonien (1804)",
                "Droit syndical légalisé en France (1884)",
              ],
            },
            {
              id: "syn-e2",
              type: "qcm",
              question: "En quoi l'Empire napoléonien est-il paradoxal par rapport aux idéaux de 1789 ?",
              options: [
                "Il conserve certains acquis (Code civil, égalité civile) mais supprime les libertés politiques et concentre le pouvoir",
                "Il applique parfaitement tous les principes de la DDHC",
                "Il restaure l'Ancien Régime et les privilèges de la noblesse",
                "Il n'y a pas de paradoxe : Napoléon est un héritier fidèle de la Révolution",
              ],
              correctAnswer:
                "Il conserve certains acquis (Code civil, égalité civile) mais supprime les libertés politiques et concentre le pouvoir",
            },
            {
              id: "syn-e3",
              type: "association",
              question: "Associe chaque idéologie à sa définition.",
              pairs: [
                { left: "Libéralisme", right: "L'État ne doit pas intervenir dans l'économie — liberté du marché" },
                { left: "Socialisme", right: "Réduire les inégalités sociales par des lois et des réformes" },
                { left: "Communisme", right: "Supprimer les classes sociales — les ouvriers prennent le pouvoir" },
                { left: "Absolutisme", right: "Le roi détient tout le pouvoir par droit divin, sans partage" },
              ],
              correctAnswer:
                "L'État ne doit pas intervenir dans l'économie — liberté du marché|Réduire les inégalités sociales par des lois et des réformes|Supprimer les classes sociales — les ouvriers prennent le pouvoir|Le roi détient tout le pouvoir par droit divin, sans partage",
            },
            {
              id: "syn-e4",
              type: "texte-a-trous-select",
              question: "La chaîne de causalité : Les ___ ont diffusé des idées de liberté → la ___ a renversé l'Ancien Régime → l'industrialisation a créé une misère ___ qui a engendré des ___.",
              options: ["Lumières", "Révolution française", "ouvrière", "luttes sociales", "guerres", "royales", "nobles"],
              correctAnswer: ["Lumières", "Révolution française", "ouvrière", "luttes sociales"],
            },
            {
              id: "syn-e5",
              type: "tri-categories",
              question: "Classe ces personnages dans la bonne catégorie.",
              items: [
                { id: "a", label: "Montesquieu" },
                { id: "b", label: "Robespierre" },
                { id: "c", label: "Karl Marx" },
                { id: "d", label: "Rousseau" },
                { id: "e", label: "Napoléon Bonaparte" },
                { id: "f", label: "Olaudah Equiano" },
              ],
              categories: [
                { id: "lumieres", label: "Philosophe des Lumières", correctItemIds: ["a", "d"] },
                { id: "revolution", label: "Acteur de la Révolution / Empire", correctItemIds: ["b", "e"] },
                { id: "social", label: "Penseur social / abolitionniste", correctItemIds: ["c", "f"] },
              ],
            },
            {
              id: "syn-e6",
              type: "qcm",
              question: "Pourquoi peut-on dire que la traite négrière contredit les idées des Lumières ?",
              options: [
                "Parce que les philosophes défendaient la liberté universelle, mais l'esclavage niait l'humanité des Africains",
                "Parce que les philosophes étaient eux-mêmes des marchands d'esclaves",
                "Parce que les Lumières avaient lieu après la fin de la traite",
                "Parce que les philosophes ignoraient totalement l'existence de l'esclavage",
              ],
              correctAnswer:
                "Parce que les philosophes défendaient la liberté universelle, mais l'esclavage niait l'humanité des Africains",
            },
            {
              id: "syn-e7",
              type: "ordre",
              question: "Remets ces conquêtes sociales dans l'ordre chronologique.",
              options: [
                "Repos hebdomadaire obligatoire",
                "Droit de grève",
                "Légalisation des syndicats",
                "Journée de travail limitée à 10 h",
              ],
              correctAnswer: [
                "Droit de grève",
                "Légalisation des syndicats",
                "Journée de travail limitée à 10 h",
                "Repos hebdomadaire obligatoire",
              ],
            },
            {
              id: "syn-e8",
              type: "qcm",
              question: "Quelle est la différence entre la 1ère et la 2ème révolution industrielle ?",
              options: [
                "La 1ère repose sur le charbon et la vapeur (textile, fer) ; la 2ème sur l'électricité et le pétrole (acier, chimie)",
                "La 1ère a eu lieu en France ; la 2ème en Angleterre",
                "La 1ère concerne l'agriculture ; la 2ème concerne l'industrie",
                "Il n'y a qu'une seule révolution industrielle",
              ],
              correctAnswer:
                "La 1ère repose sur le charbon et la vapeur (textile, fer) ; la 2ème sur l'électricité et le pétrole (acier, chimie)",
            },
            {
              id: "syn-e9",
              type: "texte-a-trous",
              question: "Marx et Engels publient le Manifeste du Parti ___ en 1848, appelant les travailleurs du monde entier à s'unir.",
              options: ["Libéral", "Socialiste", "Communiste", "Républicain"],
              correctAnswer: "Communiste",
            },
            {
              id: "syn-e10",
              type: "qcm",
              question: "En quoi la société d'ordres de l'Ancien Régime contraste-t-elle avec la société industrielle du XIXe s. ?",
              options: [
                "La société d'ordres est fondée sur la naissance (noble/roturier) ; la société industrielle sur la richesse (bourgeois/ouvrier)",
                "Les deux sociétés sont identiques — seul le nom change",
                "La société industrielle rétablit les privilèges de la noblesse",
                "La société d'ordres était plus inégalitaire que la société industrielle",
              ],
              correctAnswer:
                "La société d'ordres est fondée sur la naissance (noble/roturier) ; la société industrielle sur la richesse (bourgeois/ouvrier)",
            },
            {
              id: "syn-e11",
              type: "association",
              question: "Associe chaque document à son rôle historique.",
              pairs: [
                { left: "DDHC (1789)", right: "Fondement des libertés individuelles et civiles en France" },
                { left: "Code civil (1804)", right: "Loi commune à tous les Français — égalité devant la justice" },
                { left: "Encyclopédie (~1751-1772)", right: "Diffuser les idées nouvelles et combattre les superstitions" },
                { left: "Manifeste communiste (1848)", right: "Appel à la révolution ouvrière et à la fin des classes sociales" },
              ],
              correctAnswer:
                "Fondement des libertés individuelles et civiles en France|Loi commune à tous les Français — égalité devant la justice|Diffuser les idées nouvelles et combattre les superstitions|Appel à la révolution ouvrière et à la fin des classes sociales",
            },
            {
              id: "syn-e12",
              type: "qcm",
              question: "Quel est le fil conducteur qui relie les Lumières, la Révolution française et les luttes ouvrières du XIXe s. ?",
              options: [
                "La conquête progressive de la liberté et de l'égalité contre les pouvoirs établis",
                "La domination de la bourgeoisie sur toute la période",
                "La montée en puissance de la religion dans la société",
                "Le retour à la monarchie absolue comme modèle politique stable",
              ],
              correctAnswer: "La conquête progressive de la liberté et de l'égalité contre les pouvoirs établis",
            },
          ],
        },
      ],
    },
  },
];
