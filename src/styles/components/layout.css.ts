import { style } from "@vanilla-extract/css";
import { theme } from "../";

export const skipToContentButton = style({
	position: "absolute",
});

export const skipToContentLink = style({
	selectors: {
		["&:focus"]: {
			clipPath: "none",
			height: "auto",
			width: "auto",
		},
	},
	backgroundColor: theme.colors.background,
	borderRadius: "12px",
	boxShadow:
		"rgba(0, 0, 0, 0.02) 0px -5.9px 2.7px, rgba(0, 0, 0, 0.024) 0px -1.2px 6.9px, rgba(0, 0, 0, 0.03) 0px 8px 14.2px, rgba(0, 0, 0, 0.04) 0px 21.9px 29.2px, rgba(0, 0, 0, 0.07) 0px 49px 80px",
	clipPath: "inset(50%)",
	color: theme.colors.primary,
	fontSize: theme.fontSizes.small,
	height: "1px",
	left: "32px",
	overflow: "hidden",
	padding: "16px 24px",
	position: "absolute",
	textDecoration: "underline",
	top: "32px",
	width: "1px",
	zIndex: 999,
});
