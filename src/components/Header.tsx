import { header, headerBackground } from "../styles";
import { Branding } from "./Branding";
import React from "react";

interface IHeaderProps {
	children?: React.ReactNode;
}

class Header extends React.Component<IHeaderProps> {
	render(): React.ReactNode {
		const { children } = this.props;

		return (
			<>
				<header className={header}>
					<Branding />
				</header>

				{children}

				{children && <div className={headerBackground} />}
			</>
		);
	}
}

export { Header };
