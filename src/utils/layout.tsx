import type { GatsbyBrowser, GatsbySSR } from "gatsby";
import { LocaleContext, getLocale } from "./localization";
import { Layout } from "../components";
import React from "react";

export const wrapPageElement:
	| GatsbyBrowser["wrapPageElement"]
	| GatsbySSR["wrapPageElement"] = ({ element, props }) => (
	<LocaleContext.Provider
		value={{ locale: getLocale(props.pageContext.locale) }}
	>
		<Layout isHome={!!props.pageContext.isHome}>{element}</Layout>
	</LocaleContext.Provider>
);
