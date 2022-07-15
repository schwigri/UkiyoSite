import { Locale, LocaleContext } from "../../utils/localization";
import { render, screen } from "@testing-library/react";
import { Header } from "./";
import React from "react";

describe("<Header>", () => {
	it("should render a header", () => {
		render(
			<LocaleContext.Provider value={{ locale: Locale.enUs }}>
				<Header />
			</LocaleContext.Provider>
		);
		expect(screen.getByRole("banner")).toBeInTheDocument();
	});
});
