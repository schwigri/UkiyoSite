/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
const gatsby = jest.requireActual("gatsby");

module.exports = {
	...gatsby,
	Link: jest.fn(
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
