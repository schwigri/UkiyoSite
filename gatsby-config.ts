import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: "Griffen Schwiesow",
	},
	graphqlTypegen: true,
	plugins: ["gatsby-plugin-react-helmet"],
};

export default config;
