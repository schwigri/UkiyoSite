import * as layout from "./src/utils/layout";
import type { GatsbyBrowser } from "gatsby";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] =
	layout.wrapPageElement;
