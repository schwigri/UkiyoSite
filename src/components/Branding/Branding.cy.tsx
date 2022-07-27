import { Branding } from "./";
import { ContextProvider } from "src/utils/context";
import { Locale } from "../../utils/localization";
import React from "react";

describe("<Branding>", () => {
	it("should show the logo", () => {
		cy.mount(
			<ContextProvider value={{ locale: Locale.enUs }}>
				<Branding />
			</ContextProvider>
		)
			.get("img")
			.should("be.visible");
	});

	it("should render an h1 on home pages", () => {
		cy.mount(
			<ContextProvider value={{ isHome: true, locale: Locale.enUs }}>
				<Branding />
			</ContextProvider>
		)
			.get("h1")
			.should("be.visible")
			.should("have.text", "Griffen");
	});

	it("should render a span on non-home pages", () => {
		cy.mount(
			<ContextProvider value={{ locale: Locale.enUs }}>
				<Branding />
			</ContextProvider>
		)
			.get("span")
			.should("be.visible")
			.should("have.text", "Griffen");
	});
});
