import { Locale } from "../localization";
import type { TranslationMap } from "./strings";
import { TranslationString } from "./strings";
import deCh from "./strings/deCh";
import enUs from "./strings/enUs";
import jaJp from "./strings/jaJp";

const translations: TranslationMap = {
	[Locale.deCh]: deCh,
	[Locale.enUs]: enUs,
	[Locale.jaJp]: jaJp,
};

export const getTranslatedString = (
	locale: Locale,
	str: TranslationString
): string => translations[locale][str];

export { TranslationString, deCh, enUs, jaJp };
