import { enUsTranslations } from "./translation";
import type { Translations } from "./translation";

export enum Locale {
	enUs,
}

export type LocaleStrings = { [key in Locale]: Translations };

export const localeStrings: LocaleStrings = {
	[Locale.enUs]: enUsTranslations,
};
