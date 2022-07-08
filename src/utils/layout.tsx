import { Layout } from "../components/Layout";
import React from "react";

interface IWrapPageElementProps {
	element: React.ReactNode;
}

export const wrapPageElement = ({
	element,
}: IWrapPageElementProps): React.ReactElement => <Layout>{element}</Layout>;
