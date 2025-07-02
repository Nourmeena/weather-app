import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/weather-app/", // Must match your GitHub repo name exactly
  plugins: [react()],
});
