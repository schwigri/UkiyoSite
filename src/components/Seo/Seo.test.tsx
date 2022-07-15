import { Helmet } from "react-helmet";
import React from "react";
import { Seo } from "./";
import { render } from "@testing-library/react";

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
});
