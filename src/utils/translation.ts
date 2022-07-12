import { Locale, localeStrings } from "../constants/localization";
import { TranslationString } from "../constants/translation";

export const getTranslation = (
	str: TranslationString,
	lang: Locale,
	data?: Record<string, string>
): string => {
	const translations = localeStrings[lang];
	return insertDynamicValues(translations[str], data);
};

export const insertDynamicValues = (
	translatedString: string,
	data?: Record<string, string>
): string =>
	translatedString.replace(/\$?{([^}]+)}/g, (_, match) => {
		const val = data?.[match];
		if (!val) {
			throw new Error(`missing value for ${match}`);
		}
		return val;
	});
