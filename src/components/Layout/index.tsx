import { Footer, Header, Main } from "../";
import React from "react";

interface ILayoutProps {
	children?: React.ReactNode;
	isHome?: boolean;
}

class Layout extends React.Component<ILayoutProps> {
	render(): React.ReactNode {
		const { children, isHome } = this.props;

		return (
			<>
				<Header isHome={isHome} />

				<Main>{children}</Main>

				<Footer />
			</>
		);
	}
}

export { Layout };
