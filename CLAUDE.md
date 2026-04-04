# Teacher Loulou

## Projet

Site web d'apprentissage adapté aux troubles DYS et TDAH, destiné à des collégiens et lycéens français. Le projet est né pour aider Loulou, élève de 4ème, mais vise à être utile à tout élève présentant ces troubles.

## Public cible

**Adolescents (collège/lycée) avec :**

- **Dyslexie** : trouble de la lecture affectant le décodage des mots, la fluence et la compréhension
- **Dysphonie** : trouble affectant la production et le traitement des sons de la parole
- **TDAH** (Trouble Déficit de l'Attention avec ou sans Hyperactivité) : difficultés de concentration, impulsivité, besoin de stimulation

### Implications pour le design

#### Adaptations DYS obligatoires
- Police OpenDyslexic disponible en option (toggle)
- Police par défaut très lisible (Lexend ou Atkinson Hyperlegible)
- Espacement augmenté : lettres (0.05-0.15em), mots (0.1-0.3em), interlignes (1.5-2.5)
- Fond crème/chaud (`#FFF8F0`), **jamais de blanc pur** (`#FFFFFF`)
- Texte gris foncé (`#2D2D2D`), **jamais de noir pur** (`#000000`)
- Paragraphes courts, contenu chunké avec des séparateurs visuels
- Règle de lecture (overlay qui suit la ligne lue)
- Syllabes colorées en alternance pour faciliter le décodage

#### Adaptations TDAH obligatoires
- Interface épurée, pas de distractions visuelles inutiles
- Navigation claire et prévisible
- Progression visuelle (barres de progression, badges, récompenses)
- Sessions courtes avec encouragements réguliers
- Gamification mesurée (engageante sans être envahissante)
- Timer/Pomodoro pour structurer les sessions d'étude

#### Design général
- **Mobile-first** : la majorité des utilisateurs sont sur smartphone
- Responsive : fonctionne aussi bien sur mobile, tablette et desktop
- Visuellement attractif pour des ados (moderne, coloré mais pas agressif)
- **Jamais infantilisant** : le ton et le design doivent être adaptés à des 12-18 ans

## Stack technique

- **Framework** : Next.js 15 (App Router, TypeScript)
- **Export** : Statique (`output: 'export'`) pour GitHub Pages
- **UI** : Tailwind CSS + shadcn/ui
- **Stockage** : localStorage (pas de backend, pas de comptes utilisateurs)
- **CI/CD** : GitHub Actions → GitHub Pages

## Structure du projet

```
src/
  app/                          # Pages (App Router)
    layout.tsx                  # Layout racine
    page.tsx                    # Accueil
    [level]/                    # Pages par niveau (4e, 3e...)
      page.tsx
      [subject]/                # Pages par matière (francais, svt...)
        page.tsx
        [slug]/                 # Pages ressources individuelles
          page.tsx
    reglages/                   # Page réglages accessibilité
      page.tsx
  components/
    layout/                     # Header, MobileNav, Sidebar, Breadcrumb
    home/                       # Composants page d'accueil
    resources/                  # Cards, listes de ressources
    content/                    # QuizPlayer, CourseViewer, etc.
    accessibility/              # Panel réglages, ReadingRuler
    ui/                         # Composants shadcn/ui
  contexts/                     # React Contexts (Accessibility, etc.)
  hooks/                        # Hooks custom (useProgress, useRecentResources)
  data/                         # Contenu et données
    resources/                  # Ressources organisées par niveau/matière
    quizzes/                    # Fichiers JSON des quiz
  lib/                          # Utilitaires
  types/                        # Types TypeScript partagés
public/
  fonts/                        # OpenDyslexic, Lexend
```

## Organisation du contenu

Les ressources sont organisées par **niveau scolaire** → **matière** → **ressource**.

Niveaux : `6e`, `5e`, `4e`, `3e`, `2nde`, `1ere`, `terminale`

Types de ressources : `cours`, `fiche`, `exercice`, `quiz`, `video`, `lien`, `html`

Les quiz sont stockés en JSON dans `src/data/quizzes/` pour faciliter la réutilisation.

## Règles des quiz

- **Minimum 16 questions disponibles par quiz** (au total ou par niveau)
- **Sessions de 8 questions** (`sessionSize: 8` dans `quizData`)
- **Sélection intelligente** : on privilégie d'abord les erreurs précédentes, puis les questions non encore posées, puis les questions déjà réussies — implémenté dans `src/lib/selectQuizQuestions.ts`
- **3 niveaux obligatoires** : Facile 🟢, Intermédiaire 🟡, Expert 🔴
- Le champ `sessionSize` sur l'objet `Quiz` contrôle le nombre de questions par session (défaut : 10)

## Commandes

```bash
npm run dev      # Serveur de développement (http://localhost:3000)
npm run build    # Build statique dans out/
npm run lint     # Linting ESLint
```

## Conventions

- Code et commentaires en **anglais**
- Interface utilisateur et contenu en **français**
- Composants React en PascalCase, fichiers en kebab-case
- Utiliser les composants shadcn/ui autant que possible
- Toujours penser mobile-first
- Toujours vérifier l'accessibilité DYS/TDAH pour tout nouveau composant
