describe("IndexPage", () => {
	it("has no detectable accessibility violations", () => {
		cy.visit("/").get("main").injectAxe();
		cy.checkA11y();
	});
});
