import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/cv-resume/",
  plugins: [react(), tailwindcss()],
  build: { outDir: "dist" },

  assetsInclude: ["**/*.ttf", "**/*.woff", "**/*.woff2"],
});
