import { style } from "@vanilla-extract/css";
import { theme } from "../";

export const header = style({
	alignItems: "center",
	height: theme.sizes.headerHeight,
	display: "flex",
	justifyContent: "space-between",
	left: 0,
	padding: "0 16px",
	position: "fixed",
	top: 0,
	width: "100%",
	zIndex: 3,
});

export const headerBackground = style({
	backgroundColor: theme.colors.background,
	height: theme.sizes.headerHeight,
	position: "sticky",
	top: 0,
	zIndex: 2,
});
