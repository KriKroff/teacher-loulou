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
    chapter: "EC — Les espaces et paysages de l'urbanisation dans la mondialisation",
    createdAt: "2026-04-26T00:00:00Z",
    updatedAt: "2026-04-26T00:00:00Z",
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
    chapter: "EC — Les espaces et paysages de l'urbanisation dans la mondialisation",
    createdAt: "2026-04-26T00:00:00Z",
    updatedAt: "2026-04-26T00:00:00Z",
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
];
