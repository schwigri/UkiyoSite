import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

dotenv.config({
	path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
	siteMetadata: {
		tagline: "Per aspera ad astra",
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
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [".md", ".mdx"],
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-tsconfig-paths",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-vanilla-extract",
			options: {
				identifiers:
					process.env.NODE_ENV === "development" ? "debug" : "short",
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				display: "browser",
				icon: "./src/assets/icon.png",
				icons: [
					{
						purpose: "any maskable",
						src: "./src/assets/icon-maskable.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
				lang: "en",
				name: "Griffen Schwiesow",
				short_name: "Griffen",
				start_url: "/",
				localize: [
					{
						lang: "de",
						start_url: "/de/",
					},
					{
						lang: "ja",
						name: "グリフィン・シュヴィーゾー",
						short_name: "グリフィン",
						start_url: "/ja/",
					},
				],
			},
		},
	],
};

export default config;
