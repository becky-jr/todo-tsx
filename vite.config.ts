// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import checkerImport from 'vite-plugin-checker';
const checker = (checkerImport as any).default || checkerImport;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), checker({ typescript: true })],
	esbuild: {
		logOverride: { "this-is-undefined-in-esm": "silent" },
	},
	// включить строгую проверку типов при сборке
	build: {
		target: "esnext",
	},
});
