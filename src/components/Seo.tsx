import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

interface ISeoProps {
	lang?: string;
	title: string;
}

class Seo extends React.Component<ISeoProps> {
	static propTypes = {
		lang: PropTypes.string,
		title: PropTypes.string.isRequired,
	};

	render(): React.ReactNode {
		const { lang, title } = this.props;

		return <Helmet htmlAttributes={{ lang: lang || "en" }} title={title} />;
	}
}

export { Seo };
