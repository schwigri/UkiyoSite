import {
	assignVars,
	createGlobalThemeContract,
	globalStyle,
} from "@vanilla-extract/css";

export const theme = createGlobalThemeContract({
	colors: {
		accent: "colors--accent",
		background: "colors--background",
		primary: "colors--primary",
	},
	fonts: {
		copy: "fonts--copy",
	},
	fontSizes: {
		xSmall: "font-size--x-small",
		small: "font-size--small",
		medium: "font-size--medium",
		large: "font-size--large",
		xLarge: "font-size--x-large",
	},
	fontWeights: {
		bold: "font-weight--bold",
		light: "font-weight--light",
		medium: "font-weight--medium",
	},
	pixels: {
		12: "pixels--12",
		14: "pixels--14",
		16: "pixels--16",
		18: "pixels--18",
		20: "pixels--20",
		32: "pixels--32",
		36: "pixels--36",
		38: "pixels--38",
		42: "pixels--42",
	},
	sizes: {
		headerHeight: "sizes--header-height",
	},
});

globalStyle(":root", {
	vars: assignVars(theme, {
		colors: {
			accent: "hsl(215, 85%, 60%)",
			background: "#fff",
			primary: "#333",
		},
		fonts: {
			copy: '"Atkinson Hyperlegible", sans-serif',
		},
		fontSizes: {
			xSmall: theme.pixels["12"],
			small: theme.pixels["14"],
			medium: theme.pixels["18"],
			large: theme.pixels["32"],
			xLarge: theme.pixels["38"],
		},
		fontWeights: {
			bold: "700",
			light: "400",
			medium: "500",
		},
		pixels: {
			12: "0.75rem",
			14: "0.875rem",
			16: "1rem",
			18: "1.125rem",
			20: "1.25rem",
			32: "2rem",
			36: "2.25rem",
			38: "2.375rem",
			42: "2.625rem",
		},
		sizes: {
			headerHeight: "60px",
		},
	}),
	"@media": {
		"only screen and (prefers-color-scheme: dark)": {
			vars: assignVars(theme.colors, {
				accent: "hsl(5, 70%, 55%)",
				background: "#111",
				primary: "#fff",
			}),
		},
		"(min-width: 420px)": {
			vars: assignVars(theme.fontSizes, {
				xSmall: theme.pixels["14"],
				small: theme.pixels["16"],
				medium: theme.pixels["20"],
				large: theme.pixels["36"],
				xLarge: theme.pixels["42"],
			}),
		},
	},
});

globalStyle("body", {
	backgroundColor: theme.colors.accent,
	color: theme.colors.primary,
	fontFamily: theme.fonts.copy,
	fontSize: theme.fontSizes.medium,
	margin: 0,
	marginTop: theme.sizes.headerHeight,
});
