import { render, screen } from "@testing-library/react";
import { Footer } from "./";
import React from "react";

describe("<Footer>", () => {
	it("should render a footer", () => {
		render(<Footer />);
		expect(screen.getByRole("contentinfo")).toBeInTheDocument();
	});
});
