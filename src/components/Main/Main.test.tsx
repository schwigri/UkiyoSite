import { render, screen } from "@testing-library/react";
import { Main } from "./";
import React from "react";

describe("<Main>", () => {
	it("should render a main region", () => {
		render(<Main />);
		expect(screen.getByRole("main")).toBeInTheDocument();
	});
});
