import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({ autoCodeSplitting: true }),
		viteReact(),
		tailwindcss(),
		cloudflare(),
		{
			name: "remove-index-html",
			generateBundle(_, bundle) {
				delete bundle["index.html"];
			},
		},
	],
	server: {
		proxy: { "/api": "http://localhost:7000" },
		port: 7070,
		host: true,
	},
	test: {
		globals: true,
		environment: "jsdom",
	},
	build: {
		assetsDir: "assets", // All imported images/fonts/etc go into /assets
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
