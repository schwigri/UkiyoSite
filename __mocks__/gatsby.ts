/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const gatsby = jest.requireActual("gatsby");

export default {
	...gatsby,
	Link: jest
		.fn()
		.mockImplementation(
			({
				activeClassName,
				activeStyle,
				getProps,
				innerRef,
				partiallyActive,
				ref,
				replace,
				to,
				...rest
			}) => React.createElement("a", { ...rest, href: to })
		),
	StaticQuery: jest.fn(),
	graphql: jest.fn(),
	useStaticQuery: jest.fn(),
};
