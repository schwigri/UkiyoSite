import {
	TranslationString,
	deCh,
	enUs,
	getTranslatedString,
	jaJp,
} from "../translation";
import { Locale } from "../localization";

describe("getTranslatedString()", () => {
	it("should return the translated string for the given locale", () => {
		const tests = [
			{
				input: TranslationString.Title,
				locale: Locale.deCh,
				output: deCh[TranslationString.Title],
			},
			{
				input: TranslationString.Title,
				locale: Locale.enUs,
				output: enUs[TranslationString.Title],
			},
			{
				input: TranslationString.Title,
				locale: Locale.jaJp,
				output: jaJp[TranslationString.Title],
			},
		];

		tests.forEach(({ input, locale, output }) =>
			expect(getTranslatedString(locale, input)).toBe(output)
		);
	});
});
