import { render, screen } from "@testing-library/react";
import { Header } from "../Header";
import React from "react";

describe("<Header>", () => {
	it("should render a header", () => {
		render(<Header />);
		expect(screen.getByRole("banner")).toBeInTheDocument();
	});
});
