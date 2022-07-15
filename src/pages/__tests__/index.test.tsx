import { render, screen } from "@testing-library/react";
import IndexPage from "../";
import React from "react";

describe("IndexPage", () => {
	it("should render", () => {
		render(<IndexPage />);
		expect(screen.getByRole("heading")).toHaveTextContent("Index page");
	});
});
