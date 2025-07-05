import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    port: 3000,
    host: true, // listen on all network interfaces (optional)
    allowedHosts: [
      // NOTE: for testing slack, ensure this matches the latest route from ngrok
      "03a5-2600-1700-561a-f90-b8a6-60cd-a22b-a713.ngrok-free.app",
      "akilaanalytics.com",
    ],
  },
});
