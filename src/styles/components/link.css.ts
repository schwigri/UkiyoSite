import { style } from "@vanilla-extract/css";
import { theme } from "../global.css";

export const link = style({
	selectors: {
		["&:focus"]: {
			outline: `5px auto ${theme.colors.accent}`,
		},
	},
	textDecoration: "none",
});

export const externalLink = style({
	textDecoration: "underline",
});
