import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn = clsx + merge → no duplicate conflicts like px-3 vs px-4
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
