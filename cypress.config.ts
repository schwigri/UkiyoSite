import dotenv from "dotenv";
import { defineConfig } from "cypress";

dotenv.config({
	path: `.env.${process.env.NODE_ENV}`,
})

const config = defineConfig({
	e2e: {
		baseUrl: process.env.E2E_BASE_URL || "http://localhost:9000",
	},
});

export default config;
