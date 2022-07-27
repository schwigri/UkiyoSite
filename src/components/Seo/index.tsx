import { ContextConsumer } from "../../utils/context";
import { Helmet } from "react-helmet";
import React from "react";
import { getLang } from "../../utils/localization";

interface ISeoProps {
	description?: string;
	lang?: string;
	title: string;
}

class Seo extends React.Component<ISeoProps> {
	render(): React.ReactNode {
		const { description, lang, title } = this.props;

		const optionalMetaItems: React.DetailedHTMLProps<
			React.MetaHTMLAttributes<HTMLMetaElement>,
			HTMLMetaElement
		>[] = [];

		if (description) {
			optionalMetaItems.push({
				content: description,
				name: "description",
			});
		}

		return (
			<ContextConsumer>
				{({ locale }) => (
					<Helmet
						htmlAttributes={{ lang: lang || getLang(locale) }}
						title={title}
						meta={[...optionalMetaItems]}
					/>
				)}
			</ContextConsumer>
		);
	}
}

export { Seo };
