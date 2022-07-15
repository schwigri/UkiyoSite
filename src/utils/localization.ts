import React from "react";

export enum Locale {
	deCh = "de-CH",
	enUs = "en-US",
	jaJp = "ja-JP",
}

interface ILocaleContext {
	locale: Locale;
}

export const LocaleContext = React.createContext<ILocaleContext>({
	locale: Locale.enUs,
});

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
