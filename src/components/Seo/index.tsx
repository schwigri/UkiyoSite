import { LocaleContext, getLang } from "../../utils/localization";
import { Helmet } from "react-helmet";
import React from "react";

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
			<LocaleContext.Consumer>
				{({ locale }) => (
					<Helmet
						htmlAttributes={{ lang: lang || getLang(locale) }}
						title={title}
						meta={[...optionalMetaItems]}
					/>
				)}
			</LocaleContext.Consumer>
		);
	}
}

export { Seo };
