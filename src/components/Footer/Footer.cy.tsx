import { Footer } from "./";
import React from "react";

describe("<Footer />", () => {
	it("should mount", () => {
		cy.mount(<Footer />)
			.get("footer")
			.should("be.visible");
	});
});
