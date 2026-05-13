import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Concatène des classes conditionnelles et fusionne les classes Tailwind
 * (utilise clsx + tailwind-merge). Retourne la chaîne finale adaptée
 * à l'attribut className.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
