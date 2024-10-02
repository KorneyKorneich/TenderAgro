import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'
import vitePluginSvgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSvgr()],
  base: '/TenderAgro/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./src/shared") ,
      "@pages": path.resolve(__dirname, "./src/pages") ,
    }
  }
})
