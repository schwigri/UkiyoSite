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
		screenshotsFolder: process.env.CYPRESS_DARK_MODE
			? "./cypress/screenshots/darkMode/"
			: "./cypress/screenshots",
		setupNodeEvents: (on, config) => {
			on("before:browser:launch", (browser, options) => {
				if (browser.family === "chromium" && config.env.DARK_MODE) {
					options.args.push("--force-dark-mode=true");
					options.args.push("--enable-force-dark=true");
					return options;
				}
			});

			return {
				...config,
				browsers: config.browsers.filter((browser) =>
					config.env.DARK_MODE && config.browsers.length > 1
						? browser.name !== "electron"
						: true
				),
			};
		},
		videosFolder: process.env.CYPRESS_DARK_MODE
			? "./cypress/videos/darkMode/"
			: "./cypress/videos",
	},
});

export default config;
