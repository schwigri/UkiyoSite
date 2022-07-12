import React from "react";
import { main } from "../styles";

interface IMainProps {
	children?: React.ReactNode;
}

class Main extends React.Component<IMainProps> {
	render(): React.ReactNode {
		const { children } = this.props;

		return <main className={main}>{children}</main>;
	}
}

export { Main };
