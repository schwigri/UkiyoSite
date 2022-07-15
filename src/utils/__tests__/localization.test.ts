import { Locale, getLang, getLocale } from "../localization";

describe("getLang()", () => {
	const nonEnglishLocales = [Locale.deCh, Locale.jaJp];

	it("should return english by default", () => {
		expect(getLang(Locale.enUs)).toBe("en");
	});

	it("should return a language for every locale", () => {
		nonEnglishLocales.forEach((locale) =>
			expect(getLang(locale)).not.toBe("en")
		);
	});
});

describe("getLocale()", () => {
	const localeCases = {
		[Locale.deCh]: [Locale.deCh, "de-ch", "de"],
		[Locale.jaJp]: [Locale.jaJp, "ja-jp", "ja"],
	};

	it("should return english by default", () => {
		expect(getLocale("")).toBe(Locale.enUs);
	});

	it("should return expected locales for given cases", () => {
		Object.entries(localeCases).forEach(([locale, cases]) => {
			cases.forEach((value) => expect(getLocale(value)).toBe(locale));
		});
	});
});
