# Teacher Loulou

Site d'apprentissage adapté aux troubles **DYS** (dyslexie, dysphasie, dyspraxie) et au **TDAH**, pensé pour les collégien·nes et lycéen·nes français·es.

Né pour aider Loulou (4ème) à réviser, ouvert à tout·e élève qui en a besoin.

## Fonctionnalités

- **Adaptations DYS** : police OpenDyslexic, espacements ajustables, fond crème, syllabes colorées, règle de lecture
- **Adaptations TDAH** : interface épurée, navigation prévisible, sessions courtes, gamification mesurée
- **Quiz intelligents** : 3 niveaux de difficulté, sélection adaptative qui priorise les questions ratées
- **Mobile-first** : la majorité des élèves consultent depuis un smartphone
- **Pas de compte** : tout est stocké localement dans le navigateur

## Stack

- Next.js 16 (App Router, TypeScript, export statique)
- Tailwind CSS v4
- MDX pour le contenu pédagogique riche
- Déploiement GitHub Pages via GitHub Actions

## Démarrage

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build statique dans out/
npm run lint
```

Pour tester en local avec le `basePath` de production :

```bash
NEXT_PUBLIC_BASE_PATH=/teacher-loulou npm run build
```

## Contribuer

Les conventions du projet (structure, format des ressources, règles d'accessibilité, format des quiz) sont décrites dans [`AGENTS.md`](./AGENTS.md). À lire avant d'ajouter une fiche ou un quiz.

## Licence

Projet personnel, pas de licence formelle pour le moment.
