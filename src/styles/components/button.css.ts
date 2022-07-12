import { createVar, style } from "@vanilla-extract/css";
import { theme } from "../";

export const button = style({
	alignItems: "center",
	appearance: "none",
	background: "transparent none repeat scroll 0% 0%",
	border: "medium none",
	borderRadius: "4px",
	cursor: "pointer",
	display: "flex",
	font: "inherit",
	fontWeight: theme.fontWeights.bold,
	height: "60px",
	justifyContent: "center",
	margin: 0,
	padding: 0,
	position: "relative",
});

const buttonColor0 = createVar();
const buttonColor1 = createVar();
const buttonColor2 = createVar();

export const buttonNormal = style({
	vars: {
		[buttonColor0]: "hsl(230deg, 100%, 45%)",
		[buttonColor1]: "hsl(240deg, 100%, 45%)",
		[buttonColor2]: "hsl(260deg, 100%, 55%)",
	},
	selectors: {
		["&::after"]: {
			background:
				"rgba(0, 0, 0, 0) linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.17)) repeat scroll 0% 0%",
			borderRadius: "0 0 4px 4px",
			bottom: 0,
			content: "",
			height: "30%",
			left: 0,
			pointerEvents: "none",
			position: "absolute",
			right: 0,
		},
		["&:active::after"]: {
			background:
				"rgba(0, 0, 0, 0) linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3)) repeat scroll 0% 0%",
			borderRadius: "100px 100px 20px 20px / 30px 30px 14px 14px",
			height: "20%",
		},
		["&::before"]: {
			background:
				"rgba(0, 0, 0, 0) linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0)) repeat scroll 0% 0%",
			borderRadius: "20px 20px 100px 100px / 14px 14px 30px 30px",
			content: "",
			height: "20%",
			left: "6px",
			pointerEvents: "none",
			position: "absolute",
			right: "6px",
			top: "2px",
			zIndex: 1,
		},
		["&:active::before"]: {
			background:
				"rgba(0, 0, 0, 0) linear-gradient(rgba(0, 0, 0, 0.17), rgba(0, 0, 0, 0)) repeat scroll 0% 0%",
			borderRadius: "4px 4px 0px 0px",
			height: "30%",
			left: 0,
			right: 0,
			top: 0,
		},
	},
	background: `radial-gradient(circle at top left, ${buttonColor2}, ${buttonColor1}, ${buttonColor0})`,
	color: "#fff",
	textShadow: "rgba(0, 0, 0, 0.15) 1px 1px 1px",
	width: "175px",
});

export const buttonPlain = style({});

export const buttonSpan = style({
	selectors: {
		[`${buttonNormal}:active &`]: {
			transform: "scale(0.9)",
		},
	},
});
