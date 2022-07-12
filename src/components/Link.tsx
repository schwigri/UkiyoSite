import React, { LinkHTMLAttributes } from "react";
import { externalLink, link } from "../styles";
import { Link as GatsbyLink } from "gatsby";

interface ILinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

class Link extends React.Component<ILinkProps> {
	render(): React.ReactNode {
		const { children, className = "", href, ...rest } = this.props;
		const isExternal = href.startsWith("http");

		if (isExternal) {
			return (
				<a
					className={`${link} ${externalLink} ${className}`}
					href={href}
					{...rest}
				>
					{children}
				</a>
			);
		} else {
			return (
				<GatsbyLink
					className={`${link} ${className}`}
					to={href}
					{...rest}
				>
					{children}
				</GatsbyLink>
			);
		}
	}
}

export { Link };
