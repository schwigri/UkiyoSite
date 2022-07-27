import {
	Locale,
	getLang,
	getLocale,
	getLocalizedNodeData,
	getSlugPrefix,
} from "../localization";

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

describe("getLocalizedNodeData()", () => {
	it("should default to english page with uid for a given node", () => {
		const { locale, slug } = getLocalizedNodeData({
			frontmatter: {
				slug: "test-page",
			},
			id: "",
		});

		expect(locale).toBe(Locale.enUs);
		expect(slug).toBe("/test-page/");
	});

	it("should return only the locale prefix for home nodes", () => {
		const { locale, slug } = getLocalizedNodeData({
			frontmatter: {
				locale: "de-CH",
				slug: "test-page",
				template: "home",
			},
			id: "",
		});

		expect(locale).toBe(Locale.deCh);
		expect(slug).toBe(getSlugPrefix(Locale.deCh));
	});

	it("should throw an error if slug is not given for non-home node", () => {
		expect(() =>
			getLocalizedNodeData({ frontmatter: {}, id: "" })
		).toThrowError();
	});
});

describe("getSlugPrefix()", () => {
	const localeCases = [
		{
			locale: Locale.deCh,
			result: "/de/",
		},
		{
			locale: Locale.enUs,
			result: "/",
		},
		{
			locale: Locale.jaJp,
			result: "/ja/",
		},
	];

	it("should return the expected prefix for each locale", () => {
		localeCases.forEach(({ locale, result }) => {
			expect(getSlugPrefix(locale)).toBe(result);
		});
	});
});
