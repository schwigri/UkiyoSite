import React from "react";

interface ILayoutProps {
	children?: React.ReactNode;
}

class Layout extends React.Component<ILayoutProps> {
	render(): React.ReactNode {
		const { children } = this.props;

		return (
			<>
				<main>{children}</main>
			</>
		);
	}
}

export { Layout };
