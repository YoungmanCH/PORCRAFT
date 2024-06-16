import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  build: { minify: false },
  server: {
    host: true,
    cors: true,
    overlay: false,
    hmr: {
      overlay: false,
    },
  },
  optimizeDeps: {
    include: ["aws-amplify"],
  },
});
