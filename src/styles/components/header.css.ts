import { alignWide } from "../content.css";
import { style } from "@vanilla-extract/css";
import { theme } from "../global.css";

export const header = style({
	backgroundColor: theme.colors.background,
	color: theme.colors.primary,
	height: theme.global.headerHeight,
});

export const headerContent = style([
	alignWide,
	{
		alignItems: "center",
		display: "flex",
		height: "100%",
		justifyContent: "space-between",
	},
]);
