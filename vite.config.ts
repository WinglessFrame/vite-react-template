import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from "@vitejs/plugin-react";
import path from "path"
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [react(), TanStackRouterVite(),],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      }
    },
    base: process.env.VITE_BASE_URL,
  };
})

