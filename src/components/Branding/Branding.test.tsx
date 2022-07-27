import { render, screen } from "@testing-library/react";
import { Branding } from "./";
import { ContextProvider } from "../../utils/context";
import { Locale } from "../../utils/localization";
import React from "react";

describe("<Branding>", () => {
	it("should render an h1 on home pages", async () => {
		render(
			<ContextProvider value={{ isHome: true, locale: Locale.enUs }}>
				<Branding />
			</ContextProvider>
		);

		const h1s = await screen.getAllByRole("heading", { level: 1 });

		expect(h1s[0]).toBeInTheDocument();
		expect(h1s[1]).toBeInTheDocument();
	});

	it("should render a span on non-home pages", async () => {
		render(<Branding />);

		expect(() => screen.getByRole("heading", { level: 1 })).toThrowError();
		expect(screen.getByText("Griffen")).toBeInTheDocument();
		expect(screen.getByText("Griffen Schwiesow")).toBeInTheDocument();
	});
});
