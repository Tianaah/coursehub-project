import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
});
