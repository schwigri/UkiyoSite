import { Breakpoint, breakpoint } from "../utils";
import { style } from "@vanilla-extract/css";
import { theme } from "../global.css";

export const branding = style({
	fontFamily: theme.fontFamilies.heading,
	fontSize: theme.fontSizes.medium,
	fontWeight: 600,
});

export const brandingLink = style({
	alignItems: "center",
	color: "inherit",
	display: "flex",
	gap: "0.25em",
	textDecoration: "none",
});

const brandingTitleShared = style({
	fontSize: "inherit",
	margin: 0,
});

export const brandingTitle = style([
	brandingTitleShared,
	{
		"@media": {
			[breakpoint(Breakpoint.Medium).until]: {
				display: "none",
			},
		},
	},
]);

export const brandingTitleShort = style([
	brandingTitleShared,
	{
		fontSize: "inherit",
		"@media": {
			[breakpoint(Breakpoint.Medium).upon]: {
				display: "none",
			},
		},
	},
]);
