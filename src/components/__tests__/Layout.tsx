import { render, screen } from "@testing-library/react";
import { Layout } from "../Layout";
import React from "react";

describe("<Layout>", () => {
	it("should render a main region", () => {
		render(<Layout />);
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
});
