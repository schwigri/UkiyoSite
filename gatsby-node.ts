import type { GatsbyNode } from "gatsby";
import { Locale } from "./src/utils/localization";
import path from "path";
import slugify from "slugify";

const getLocale = (item: any): Locale => {
	switch (item.frontmatter?.locale) {
		default:
			return Locale.enUs;
	}
};

const getSlugPrefix = (locale: Locale): string => {
	switch (locale) {
		case Locale.deCh:
			return "/de/";

		case Locale.jaJp:
			return "/ja/";

		default:
			return "/";
	}
};

const getSlug = (item: any): string => {
	if (item.frontmatter?.template !== "home" && !item.frontmatter?.id) {
		throw new Error("non-home item is missing id");
	}

	const locale = getLocale(item);
	const prefix = getSlugPrefix(locale);
	const uid = slugify(item.frontmatter?.id, {
		locale: locale.substring(0, 2),
	});

	switch (item.frontmatter?.template) {
		case "home":
			return prefix;

		default:
			return `${prefix}${uid}`;
	}
};

export const createPages: GatsbyNode["createPages"] = async ({
	actions,
	graphql,
}) => {
	const { createPage } = actions;

	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
			) {
				nodes {
					frontmatter {
						date
						template
						id
					}
					id
				}
			}
		}
	`);

	if (result.errors) {
		throw result.errors;
	}

	const all = result.data.allMarkdownRemark.nodes;
	const homes = all.filter((item) => item.frontmatter.template === "home");

	homes.forEach((home) => {
		const slug = getSlug(home);

		createPage({
			component: path.resolve("./src/templates/home.tsx"),
			context: { id: home.id, isHome: true, locale: getLocale(home) },
			path: slug,
		});
	});
};
