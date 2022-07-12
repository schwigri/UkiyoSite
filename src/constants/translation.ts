export type Translations = { [key in TranslationString]: string };

export enum TranslationString {
	CloseMenu,
	Copyright,
	LovePeaceReact,
	OpenMenu,
	PageNotFound,
	PageNotFoundMessage,
	Title,
	TitleShort,
	TitleTemplate,
	Untitled,
}

export const enUsTranslations: Translations = {
	[TranslationString.CloseMenu]: "Close menu",
	[TranslationString.Copyright]: "© 2022 Griffen Schwiesow",
	[TranslationString.LovePeaceReact]: "Made with love, peace, and React",
	[TranslationString.OpenMenu]: "Open menu",
	[TranslationString.PageNotFound]: "Page not found",
	[TranslationString.PageNotFoundMessage]:
		"Unfortunately, this page does not seem to exist!",
	[TranslationString.Title]: "Griffen Schwiesow",
	[TranslationString.TitleShort]: "Griffen",
	[TranslationString.TitleTemplate]: "%s — Griffen Schwiesow",
	[TranslationString.Untitled]: "Untitled",
};

