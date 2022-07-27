import type { GatsbyNode } from "gatsby";
import { IPageContextArgs } from "src/utils/layout";
import { getLocalizedNodeData } from "./src/utils/localization";
import path from "path";

export interface ICreatePagesQueryDataAllMarkdownRemarkNode {
	frontmatter: {
		date?: string;
		locale?: string;
		slug?: string;
		template?: string;
		uid?: string;
	};
	id: string;
}

export interface ICreatePagesQueryData {
	allMdx: {
		nodes: Array<ICreatePagesQueryDataAllMarkdownRemarkNode>;
	};
}

export const createPages: GatsbyNode["createPages"] = async ({
	actions,
	graphql,
}) => {
	const { createPage } = actions;

	const result = await graphql<ICreatePagesQueryData>(`
		{
			allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
				nodes {
					frontmatter {
						date
						slug
						template
						uid
					}
					id
				}
			}
		}
	`);

	if (result.errors) {
		throw result.errors;
	}

	const all = result.data?.allMdx.nodes;
	const homes = all?.filter((node) => node.frontmatter.template === "home");

	const createPagesHelper = (
		nodes: Array<ICreatePagesQueryDataAllMarkdownRemarkNode>,
		component: string,
		options?: { isHome?: boolean }
	): void => {
		nodes.forEach((node) => {
			const { locale, slug } = getLocalizedNodeData(node);
			const localizations = all
				?.filter(
					(otherNode) =>
						otherNode.frontmatter.uid === node.frontmatter.uid
				)
				.map(getLocalizedNodeData);

			createPage<IPageContextArgs>({
				component,
				context: {
					id: node.id,
					isHome: options?.isHome,
					locale,
					localizations,
				},
				path: slug,
			});
		});
	};

	if (!homes) throw new Error("there are no homepages");
	createPagesHelper(homes, path.resolve("./src/templates/home.tsx"), {
		isHome: true,
	});
};
