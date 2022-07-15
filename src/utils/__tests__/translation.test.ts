import {
	TranslationString,
	enUs,
	getTranslatedString,
	jaJp,
} from "../translation";
import { Locale } from "../localization";

describe("getTranslatedString()", () => {
	it("should return the translated string for the given locale", () => {
		const englishResult = getTranslatedString(
			Locale.enUs,
			TranslationString.Title
		);
		expect(englishResult).toBe(enUs[TranslationString.Title]);

		const japaneseResult = getTranslatedString(
			Locale.jaJp,
			TranslationString.Title
		);
		expect(japaneseResult).toBe(jaJp[TranslationString.Title]);
	});
});
