import {
	TranslationString,
	getTranslatedString,
} from "../../utils/translation";
import {
	branding,
	brandingLink,
	brandingTitle,
	brandingTitleShort,
} from "../../styles";
import { Link } from "gatsby";
import { LocaleContext } from "../../utils/localization";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface IBrandingProps {
	isHome?: boolean;
}

class Branding extends React.Component<IBrandingProps> {
	render(): React.ReactNode {
		const { isHome } = this.props;

		const TitleElement = isHome ? "h1" : "span";

		return (
			<LocaleContext.Consumer>
				{({ locale }) => (
					<div className={branding}>
						<Link
							aria-label={"Griffen Schwiesow logo"}
							className={brandingLink}
							to={"/"}
						>
							<StaticImage
								alt={""}
								height={40}
								layout={"fixed"}
								loading={"eager"}
								placeholder={"blurred"}
								src={"../../assets/icon.png"}
							/>

							<TitleElement className={brandingTitle}>
								{getTranslatedString(
									locale,
									TranslationString.Title
								)}
							</TitleElement>

							<TitleElement className={brandingTitleShort}>
								{getTranslatedString(
									locale,
									TranslationString.TitleShort
								)}
							</TitleElement>
						</Link>
					</div>
				)}
			</LocaleContext.Consumer>
		);
	}
}

export { Branding };
