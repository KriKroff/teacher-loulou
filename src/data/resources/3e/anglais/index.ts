import type { Resource } from "@/types";
import { resources as controleFerris } from "./controle-ferris";
import { resources as correctionControle1 } from "./correction-controle-1";
import { resources as vocabulaire } from "./vocabulaire";
import { resources as construirePhrase } from "./construire-phrase";
import { resources as temps } from "./temps";
import { resources as liaisonComparatifs } from "./liaison-comparatifs";

export const resources: Resource[] = [
  ...controleFerris,
  ...correctionControle1,
  ...vocabulaire,
  ...construirePhrase,
  ...temps,
  ...liaisonComparatifs,
];
