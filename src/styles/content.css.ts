import { style } from "@vanilla-extract/css";
import { theme } from "./global.css";

export const alignDefault = style({
	marginLeft: "auto",
	marginRight: "auto",
	maxWidth: theme.responsive.defaultWidth,
});

export const alignWide = style({
	marginLeft: "auto",
	marginRight: "auto",
	maxWidth: theme.responsive.wideWidth,
});

export const alignFull = style({
	marginLeft: "auto",
	marginRight: "auto",
	maxWidth: "100%",
});
