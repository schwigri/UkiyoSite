import { Locale } from "./localization";
import React from "react";

interface IContext {
	isHome?: boolean;
	locale: Locale;
}

export const defaultContext: IContext = {
	locale: Locale.enUs,
};

const Context = React.createContext<IContext>(defaultContext);

export const ContextConsumer = Context.Consumer;

export const ContextProvider = Context.Provider;
