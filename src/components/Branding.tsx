import { StaticQuery, graphql } from "gatsby";
import React from "react";

interface IBrandingProps {
	data: {
		site: {
			siteMetadata?: {
				title?: string;
			};
		};
	};
}

class Branding extends React.Component<IBrandingProps> {
	render(): React.ReactNode {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata?.title || "";

		return <span>{siteTitle}</span>;
	}
}

function getBranding(): React.ReactElement {
	const query = graphql`
		query BrandingQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`;

	return (
		<StaticQuery
			query={query}
			render={(data) => <Branding data={data} />}
		/>
	);
}

export { getBranding as Branding };
