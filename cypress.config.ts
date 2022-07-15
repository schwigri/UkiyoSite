import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config({
	path: `.env.${process.env.NODE_ENV}`,
});

const config = defineConfig({
	component: {
		devServer: {
			bundler: "webpack",
			framework: "create-react-app",
		},
	},
	e2e: {
		baseUrl: process.env.E2E_BASE_URL || "http://localhost:9000",
	},
});

export default config;
