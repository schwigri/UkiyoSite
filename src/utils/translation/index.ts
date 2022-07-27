import { Locale } from "../localization";
import { TranslationString } from "./strings";
import deCh from "./strings/deCh";
import enUs from "./strings/enUs";
import jaJp from "./strings/jaJp";

export const getTranslatedString = (
	locale: Locale,
	str: TranslationString
): string => {
	switch (locale) {
		case Locale.deCh:
			return deCh[str];

		case Locale.jaJp:
			return jaJp[str];

		default:
			return enUs[str];
	}
};

export { TranslationString, deCh, enUs, jaJp };
