import { Footer } from "../Footer";
import { Header } from "../Header";
import React from "react";

interface ILayoutProps {
	children?: React.ReactNode;
}

class Layout extends React.Component<ILayoutProps> {
	render(): React.ReactNode {
		const { children } = this.props;

		return (
			<>
				<Header />

				<main>{children}</main>

				<Footer />
			</>
		);
	}
}

export { Layout };
