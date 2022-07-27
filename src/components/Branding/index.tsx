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
import { ContextConsumer } from "../../utils/context";
import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { getSlugPrefix } from "../../utils/localization";

class Branding extends React.Component {
	render(): React.ReactNode {
		return (
			<ContextConsumer>
				{({ isHome, locale }) => {
					const TitleElement = isHome ? "h1" : "span";

					return (
						<div className={branding}>
							<Link
								aria-label={"Griffen Schwiesow logo"}
								className={brandingLink}
								to={getSlugPrefix(locale)}
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
					);
				}}
			</ContextConsumer>
		);
	}
}

export { Branding };
