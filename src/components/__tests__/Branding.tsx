import { render, screen } from "@testing-library/react";
import { Branding } from "../Branding";
import React from "react";

describe("<Branding>", () => {
	it("should render the site title", () => {
		render(<Branding />);
		expect(screen.getByText("Test title")).toBeInTheDocument();
	});
});
