import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		tagline: "Per aspera ad astra",
		title: "Griffen Schwiesow",
	},
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-vanilla-extract",
			options: {
				identifiers: process.env.NODE_ENV === "development" ? "debug" : "short",
			}
		},
	],
};

export default config;
