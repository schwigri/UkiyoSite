export enum Strings {
	DefaultTitle,
}

export type StringMap = Record<Strings, string>;

export const strings: StringMap = {
	[Strings.DefaultTitle]: "Untitled",
};
