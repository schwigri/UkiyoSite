import type { ICreatePagesQueryDataAllMarkdownRemarkNode } from "../../gatsby-node";

export enum Locale {
	deCh = "de-CH",
	enUs = "en-US",
	jaJp = "ja-JP",
}

export const getLang = (locale: Locale): string => {
	switch (locale) {
		case Locale.deCh:
			return "de";

		case Locale.jaJp:
			return "ja";

		default:
			return "en";
	}
};

export const getLocale = (locale: unknown): Locale => {
	switch (locale) {
		case Locale.deCh:
		case "de-ch":
		case "de":
			return Locale.deCh;

		case Locale.jaJp:
		case "ja-jp":
		case "ja":
			return Locale.jaJp;

		default:
			return Locale.enUs;
	}
};

export const getSlugPrefix = (locale: Locale): string => {
	switch (locale) {
		case Locale.deCh:
			return "/de/";

		case Locale.jaJp:
			return "/ja/";

		default:
			return "/";
	}
};

export interface ILocalizedNodeData {
	locale: Locale;
	slug: string;
}

export const getLocalizedNodeData = (
	node: ICreatePagesQueryDataAllMarkdownRemarkNode
): ILocalizedNodeData => {
	const { locale, slug, template } = node.frontmatter;
	const actualLocale = getLocale(locale);

	const prefix = getSlugPrefix(actualLocale);

	let actualSlug: string;

	switch (template) {
		case "home":
			actualSlug = prefix;
			break;

		default:
			if (!slug) throw new Error("no slug present for non-home node");
			actualSlug = `${prefix}${slug}/`;
	}

	return {
		locale: actualLocale,
		slug: actualSlug,
	};
};
