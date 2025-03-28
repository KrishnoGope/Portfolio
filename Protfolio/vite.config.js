import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable source maps
    minify: 'terser', // Use Terser for advanced minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs
        drop_debugger: true // Remove debugger statements
      }
    }
  }
});
