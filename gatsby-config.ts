import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: "Griffen Schwiesow",
	},
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "content",
				path: `${__dirname}/content/src`,
			},
		},
		"gatsby-transformer-remark",
	],
};

export default config;
