import React from "react";
import { Seo } from "./";

describe("<Seo>", () => {
	it("should set title", () => {
		cy.mount(<Seo title={"Test title"} />)
			.title()
			.should("eq", "Test title");
	});

	it("should set meta description", () => {
		cy.mount(<Seo description={"Test description"} title={"Test title"} />)
			.get("meta[name='description']")
			.should("have.attr", "content", "Test description");
	});
});
