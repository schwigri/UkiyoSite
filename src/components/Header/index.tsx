import { header, headerContent } from "../../styles";
import { Branding } from "../";
import React from "react";

interface IHeaderProps {
	isHome?: boolean;
}

class Header extends React.Component<IHeaderProps> {
	render(): React.ReactNode {
		const { isHome } = this.props;

		return (
			<header className={header}>
				<div className={headerContent}>
					<Branding isHome={isHome} />
				</div>
			</header>
		);
	}
}

export { Header };
