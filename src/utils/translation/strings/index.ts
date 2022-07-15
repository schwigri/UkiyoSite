import { Locale } from "../../localization";

export enum TranslationString {
	Title = "title",
	TitleShort = "title-short",
	Untitled = "untitled",
}

export type Translations = Record<TranslationString, string>;
export type TranslationMap = Record<Locale, Translations>;
