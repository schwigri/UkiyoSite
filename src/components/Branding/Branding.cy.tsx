import { Locale, LocaleContext } from "../../utils/localization";
import { Branding } from "./";
import React from "react";

describe("<Branding>", () => {
	it("should show the logo", () => {
		cy.mount(
			<LocaleContext.Provider value={{ locale: Locale.enUs }}>
				<Branding />
			</LocaleContext.Provider>
		)
			.get("img")
			.should("be.visible");
	});

	it("should render an h1 on home pages", () => {
		cy.mount(
			<LocaleContext.Provider value={{ locale: Locale.enUs }}>
				<Branding isHome={true} />
			</LocaleContext.Provider>
		)
			.get("h1")
			.should("be.visible")
			.should("have.text", "Griffen");
	});

	it("should render a span on non-home pages", () => {
		cy.mount(
			<LocaleContext.Provider value={{ locale: Locale.enUs }}>
				<Branding />
			</LocaleContext.Provider>
		)
			.get("span")
			.should("be.visible")
			.should("have.text", "Griffen");
	});
});
