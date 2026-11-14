import type { Resource } from "@/types";
import { resources as controleFerris } from "./controle-ferris";
import { resources as vocabulaireFerris } from "./vocabulaire-ferris";
import { resources as construirePhrase } from "./construire-phrase";
import { resources as temps } from "./temps";
import { resources as liaisonComparatifs } from "./liaison-comparatifs";

export const resources: Resource[] = [
  ...controleFerris,
  ...vocabulaireFerris,
  ...construirePhrase,
  ...temps,
  ...liaisonComparatifs,
];
