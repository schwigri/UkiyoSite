import { Breakpoint, breakpoint } from "./utils";
import {
	assignVars,
	createGlobalThemeContract,
	globalStyle,
} from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const theme = createGlobalThemeContract({
	colors: {
		accent: "colors--accent",
		accentCopy: "colors--accent-copy",
		background: "colors--background",
		primary: "colors--primary",
	},
	fontFamilies: {
		copy: "font-family--copy",
		heading: "font-family--heading",
	},
	fontSizes: {
		xSmall: "font-size--x-small",
		small: "font-size--small",
		medium: "font-size--medium",
		large: "font-size--large",
		xLarge: "font-size--x-large",
		base: "font-size--base",
	},
	pixels: {
		12: "pixels--12",
		14: "pixels--14",
		16: "pixels--16",
		18: "pixels--18",
		20: "pixels--20",
		22: "pixels--22",
		32: "pixels--32",
		36: "pixels--36",
		38: "pixels--38",
		42: "pixels--42",
	},
	global: {
		defaultWidth: "global--default-width",
		headerHeight: "global--header-height",
		spacing: "global--spacing",
		wideWidth: "global--wide-width",
	},
	responsive: {
		defaultWidth: "responsive--default-width",
		wideWidth: "responsive--wide-width",
	},
});

globalStyle(":root", {
	vars: assignVars(theme, {
		colors: {
			accent: "hsl(6, 70%, 50%)",
			accentCopy: "#fff",
			background: "hsl(6, 70%, 99%)",
			primary: "#333",
		},
		fontFamilies: {
			copy: '"Atkinson Hyperlegible", sans-serif',
			heading: "Prompt, sans-serif",
		},
		fontSizes: {
			xSmall: theme.pixels["12"],
			small: theme.pixels["14"],
			medium: theme.pixels["22"],
			large: theme.pixels["32"],
			xLarge: theme.pixels["38"],
			base: theme.pixels["18"],
		},
		pixels: {
			12: "0.75rem",
			14: "0.875rem",
			16: "1rem",
			18: "1.125rem",
			20: "1.25rem",
			22: "1.375rem",
			32: "2rem",
			36: "2.25rem",
			38: "2.375rem",
			42: "2.625rem",
		},
		global: {
			defaultWidth: "80ch",
			headerHeight: "72px",
			spacing: "16px",
			wideWidth: "1240px",
		},
		responsive: {
			defaultWidth: calc.subtract("100vw", theme.global.spacing),
			wideWidth: calc.subtract("100vw", theme.global.spacing),
		},
	}),
	"@media": {
		"only screen and (prefers-color-scheme: dark)": {
			vars: assignVars(theme.colors, {
				accent: "hsl(213, 86%, 48%)",
				accentCopy: "#fff",
				background: "hsl(213, 86%, 3%)",
				primary: "#fff",
			}),
		},
		[breakpoint(Breakpoint.Small).upon]: {
			vars: assignVars(theme.responsive, {
				defaultWidth: `min(${calc("100vw")
					.subtract(calc.multiply(theme.global.spacing, 4))
					.toString()}, ${theme.global.defaultWidth}, ${
					theme.global.defaultWidth
				})`,
				wideWidth: calc("100vw")
					.subtract(calc.multiply(theme.global.spacing, 4))
					.toString(),
			}),
		},
		[breakpoint(Breakpoint.Medium).upon]: {
			vars: assignVars(theme.responsive, {
				defaultWidth: `min(${calc("100vw")
					.subtract(calc.multiply(theme.global.spacing, 8))
					.toString()}, ${theme.global.defaultWidth})`,
				wideWidth: `min(${calc("100vw")
					.subtract(calc.multiply(theme.global.spacing, 8))
					.toString()}, ${theme.global.wideWidth})`,
			}),
		},
	},
});

globalStyle("body", {
	backgroundColor: theme.colors.accent,
	color: theme.colors.accentCopy,
	fontFamily: theme.fontFamilies.copy,
	fontSize: theme.fontSizes.base,
	margin: 0,
});
