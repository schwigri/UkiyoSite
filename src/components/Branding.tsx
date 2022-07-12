import { StaticQuery, graphql } from "gatsby";
import { Strings, strings } from "../constants/strings";
import PropTypes from "prop-types";
import React from "react";
import { brandingLogo } from "../styles";

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
	static propTypes = {
		data: PropTypes.shape({
			site: PropTypes.shape({
				siteMetadata: PropTypes.shape({
					title: PropTypes.string,
				}),
			}).isRequired,
		}).isRequired,
	};

	render(): React.ReactNode {
		const { data } = this.props;
		const siteTitle =
			data.site.siteMetadata?.title || strings[Strings.DefaultTitle];

		return <span className={brandingLogo}>{siteTitle}</span>;
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
