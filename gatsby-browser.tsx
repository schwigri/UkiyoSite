import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/700.css";
import "./src/styles/global.css";
import * as layout from "./src/utils/layout";
import type { GatsbyBrowser } from "gatsby";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] =
	layout.wrapPageElement;
