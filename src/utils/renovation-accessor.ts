import { Renovation } from "@leam-tech/renovation-core";

let renovation: Renovation;
export function setRenovationCoreInstance(renovationCoreInstance: Renovation) {
  renovation = renovationCoreInstance;
}

/**
 * Use this function to access renovation
 */
export function getRenovationCore(): Renovation {
  return renovation;
}
