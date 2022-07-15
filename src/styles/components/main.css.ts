import { style } from "@vanilla-extract/css";
import { theme } from "../";

export const main = style({
	backgroundColor: theme.colors.background,
	color: theme.colors.primary,
	overflow: "auto",
});
