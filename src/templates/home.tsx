import { TranslationString, getTranslatedString } from "src/utils/translation";
import { ContextConsumer } from "../utils/context";
import React from "react";
import { Seo } from "../components";
import { graphql } from "gatsby";

interface IHomeTemplateProps {
	data: {
		mdx: {
			frontmatter: {
				seo?: {
					description?: string;
					title?: string;
				};
				title?: string;
			};
		};
	};
}

class HomeTemplate extends React.Component<IHomeTemplateProps> {
	render(): React.ReactNode {
		const { frontmatter } = this.props.data.mdx;
		const { seo, title } = frontmatter;

		return (
			<ContextConsumer>
				{({ locale }) => (
					<>
						<Seo
							title={
								seo?.title ||
								getTranslatedString(
									locale,
									TranslationString.Untitled
								)
							}
							description={seo?.description}
						/>

						<span>{title}</span>
					</>
				)}
			</ContextConsumer>
		);
	}
}

export default HomeTemplate;

export const query = graphql`
	query HomeTemplateQuery($id: String!) {
		mdx(id: { eq: $id }) {
			frontmatter {
				seo {
					description
					title
				}
				title
			}
		}
	}
`;
