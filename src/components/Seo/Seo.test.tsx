import { Locale, LocaleContext } from "../../utils/localization";
import { Helmet } from "react-helmet";
import React from "react";
import { Seo } from "./";
import { render as testingLibraryRender } from "@testing-library/react";

const render: typeof testingLibraryRender = (ui: React.ReactElement) =>
	testingLibraryRender(
		<LocaleContext.Provider value={{ locale: Locale.enUs }}>
			{ui}
		</LocaleContext.Provider>
	);

describe("<Seo>", () => {
	it("should set the document title", () => {
		render(<Seo title={"Test title"} />);
		const helmet = Helmet.peek();
		expect(helmet.title).toBe("Test title");
	});

	it("should set the document language to english by default", () => {
		render(<Seo title={"Test title"} />);
		const helmet = Helmet.peek();
		expect(helmet.htmlAttributes?.lang).toBe("en");
	});

	it("should set the document language when given", () => {
		render(<Seo lang={"ja"} title={"テストのタイトル"} />);
		const helmet = Helmet.peek();
		expect(helmet.htmlAttributes?.lang).toBe("ja");
	});

	it("should set the metadata description", () => {
		render(<Seo description={"Test description"} title={"Test title"} />);
		const helmet = Helmet.peek();
		expect(
			helmet.metaTags.find((metaTag) => metaTag.name === "description")
		).toHaveProperty("content", "Test description");
	});
});
