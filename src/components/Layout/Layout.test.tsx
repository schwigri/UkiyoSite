import { render, screen } from "@testing-library/react";
import { ContextProvider } from "../../utils/context";
import { Layout } from "./";
import { Locale } from "../../utils/localization";
import React from "react";

describe("<Layout>", () => {
	it("should render a main region", () => {
		render(
			<ContextProvider value={{ locale: Locale.enUs }}>
				<Layout />
			</ContextProvider>
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
