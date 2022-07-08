describe("IndexPage", () => {
	beforeEach(() => cy.visit("/").get("main").injectAxe());

	it("has no detectable accessibility violations", () => {
		cy.checkA11y();
	});
});
