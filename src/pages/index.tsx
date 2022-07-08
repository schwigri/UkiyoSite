import React from "react";
import { Seo } from "../components/Seo";

class IndexPage extends React.Component {
	render(): React.ReactNode {
		return (
			<>
				<Seo title={"Griffen Schwiesow"} />
				<h1>Index page</h1>
			</>
		);
	}
}

export default IndexPage;
