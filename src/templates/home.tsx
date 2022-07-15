import { TranslationString, getTranslatedString } from "src/utils/translation";
import { LocaleContext } from "../utils/localization";
import React from "react";
import { Seo } from "../components";
import { graphql } from "gatsby";

interface IHomeTemplateProps {
	data: {
		markdownRemark: {
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
		const { frontmatter } = this.props.data.markdownRemark;
		const { seo, title } = frontmatter;

		return (
			<LocaleContext.Consumer>
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
			</LocaleContext.Consumer>
		);
	}
}

export default HomeTemplate;

export const query = graphql`
	query HomeTemplateQuery($id: String!) {
		markdownRemark(id: { eq: $id }) {
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
