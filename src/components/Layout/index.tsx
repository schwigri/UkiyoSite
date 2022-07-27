import { Footer, Header, Main } from "../";
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

				<Main>{children}</Main>

				<Footer />
			</>
		);
	}
}

export { Layout };
