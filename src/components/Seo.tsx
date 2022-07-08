import { Helmet } from "react-helmet";
import React from "react";

interface ISeoProps {
	lang?: string;
	title: string;
}

class Seo extends React.Component<ISeoProps> {
	render(): React.ReactNode {
		const { lang, title } = this.props;

		return (
			<Helmet htmlAttributes={{ lang: lang || "en" }} title={title} />
		);
	}
}

export { Seo };
