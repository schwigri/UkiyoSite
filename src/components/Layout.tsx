import { Footer } from "./Footer";
import { Header } from "./Header";
import { Link } from "./Link";
import { Main } from "./Main";
import React from "react";
import { skipToContentLink } from "../styles";

interface ILayoutProps {
	children?: React.ReactNode;
}

class Layout extends React.Component<ILayoutProps> {
	render(): React.ReactNode {
		const { children } = this.props;

		return (
			<>
				<Link className={skipToContentLink} href={"#content"}>
					Skip to content
				</Link>

				<Header>
					Page hero can go here
				</Header>

				<Main>{children}</Main>

				<Footer />
			</>
		);
	}
}

export { Layout };
