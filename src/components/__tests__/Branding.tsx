import { Strings, strings } from "../../constants/strings";
import { render, screen } from "@testing-library/react";
import { Branding } from "../Branding";
import React from "react";

describe("<Branding>", () => {
	it("should render the site title", () => {
		render(<Branding />);
		expect(screen.getByText("Test title")).toBeInTheDocument();
	});

	it("should render a blank title if there is none", () => {
		render(<Branding />);
		expect(
			screen.getByText(strings[Strings.DefaultTitle])
		).toBeInTheDocument();
	});
});
