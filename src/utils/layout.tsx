import { ILocalizedNodeData, Locale } from "./localization";
import type {
	PluginOptions,
	WrapPageElementBrowserArgs,
	WrapPageElementNodeArgs,
} from "gatsby";
import { ContextProvider } from "./context";
import { Layout } from "../components";
import React from "react";

export interface IPageContextArgs {
	id: string;
	isHome?: boolean;
	locale: Locale;
	localizations?: Array<ILocalizedNodeData>;
}

interface IWrapPageElementBrowserArgs
	extends WrapPageElementBrowserArgs<
		Record<string, unknown>,
		IPageContextArgs,
		unknown
	> {}

interface IWrapPageElementNodeArgs
	extends WrapPageElementNodeArgs<
		Record<string, unknown>,
		IPageContextArgs
	> {}

type WrapPageElement = {
	(
		args: IWrapPageElementBrowserArgs,
		options: PluginOptions
	): React.ReactElement;
	(
		args: IWrapPageElementNodeArgs,
		options: PluginOptions
	): React.ReactElement;
};

export const wrapPageElement: WrapPageElement = ({ element, props }) => (
	<ContextProvider
		value={{
			isHome: props.pageContext.isHome,
			locale: props.pageContext.locale,
		}}
	>
		<Layout>{element}</Layout>
	</ContextProvider>
);
