import { Locale, LocaleContext } from "../../utils/localization";
import { render, screen } from "@testing-library/react";
import { Layout } from "./";
import React from "react";

describe("<Layout>", () => {
	it("should render a main region", () => {
		render(
			<LocaleContext.Provider value={{ locale: Locale.enUs }}>
				<Layout />
			</LocaleContext.Provider>
		);
		expect(screen.getByRole("main")).toBeInTheDocument();
	});

	it("should render its children", () => {
		render(
			<Layout>
				<article>This is a test</article>
			</Layout>
		);
		expect(screen.getByRole("article")).toHaveTextContent("This is a test");
	});

	it("should render a header", () => {
		render(<Layout />);
		expect(screen.getByRole("banner")).toBeInTheDocument();
	});

	it("should render a footer", () => {
		render(<Layout />);
		expect(screen.getByRole("contentinfo")).toBeInTheDocument();
	});
});
