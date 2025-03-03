import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPercentFrom2006(year: number) {
  // get number of year between today and 2006
  const elapsedYears = new Date().getFullYear() - 2006 - 1;

  const result = Math.round((100 / elapsedYears) * (year - 2006));

  return result;
}
