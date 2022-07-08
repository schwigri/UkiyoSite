import { defineConfig } from "cypress";

const config = defineConfig({
	e2e: {
		baseUrl: "http://localhost:8000",
	},
});

export default config;
