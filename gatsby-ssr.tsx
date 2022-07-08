import * as layout from "./src/utils/layout";
import type { GatsbySSR } from "gatsby";

export const wrapPageElement: GatsbySSR["wrapPageElement"] =
	layout.wrapPageElement;
