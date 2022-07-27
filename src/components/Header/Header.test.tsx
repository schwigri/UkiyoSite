import { render, screen } from "@testing-library/react";
import { ContextProvider } from "../../utils/context";
import { Header } from "./";
import { Locale } from "../../utils/localization";
import React from "react";

describe("<Header>", () => {
	it("should render a header", () => {
		render(
			<ContextProvider value={{ locale: Locale.enUs }}>
				<Header />
			</ContextProvider>
		);
		expect(screen.getByRole("banner")).toBeInTheDocument();
	});
});
