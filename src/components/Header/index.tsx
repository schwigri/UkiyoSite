import { header, headerContent } from "../../styles";
import { Branding } from "../";
import React from "react";

class Header extends React.Component {
	render(): React.ReactNode {
		return (
			<header className={header}>
				<div className={headerContent}>
					<Branding />
				</div>
			</header>
		);
	}
}

export { Header };
