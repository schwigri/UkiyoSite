import React, { ButtonHTMLAttributes } from "react";
import { button, buttonNormal, buttonPlain, buttonSpan } from "../styles";

enum ButtonKinds {
	NORMAL,
	PLAIN,
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	kind?: ButtonKinds;
}

class Button extends React.Component<IButtonProps> {
	render(): React.ReactNode {
		const {
			children,
			className = "",
			kind = ButtonKinds.NORMAL,
			...rest
		} = this.props;

		let buttonStyle = buttonNormal;

		switch (kind) {
			case ButtonKinds.PLAIN:
				buttonStyle = buttonPlain;
				break;
		}

		return (
			<button
				className={`${button} ${buttonStyle} ${className}`}
				{...rest}
			>
				<span className={buttonSpan}>{children}</span>
			</button>
		);
	}
}

export { Button };
