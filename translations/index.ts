import { ko } from "./ko";
import { en } from "./en";

export type Translations = typeof ko;
export const translations = { ko, en } as const;
export type Language = keyof typeof translations;
