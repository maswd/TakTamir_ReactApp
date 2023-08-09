import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
     hmr: {
      // Set the strategy to 'port' for Fast Refresh
      protocol: 'ws',
      host: 'localhost',
      port: 3006,
    },
    port: 3006
  }
})
