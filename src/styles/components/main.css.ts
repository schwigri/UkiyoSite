import { style } from "@vanilla-extract/css";
import { theme } from "../";

export const main = style({
	backgroundColor: theme.colors.background,
	height: "200vh",
	overflow: "auto",
});
