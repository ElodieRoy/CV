import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    proxy: {
      // Rediriger toutes les requêtes de /api vers http://localhost:3000
      '/api': {
        target: 'http://backend:8000', // URL backend
        changeOrigin: true,
      },
    },
  },
});
