import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
      '@team-member-imges': '/src/assets/team-member-imges',
    },
  },
  build: {
    // Generate source maps for better debugging
    sourcemap: false,
    // Optimize bundle size
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ui: ['tailwindcss']
        }
      }
    },
    // Compress assets
    cssCodeSplit: true,
    // Minimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Performance optimizations
  server: {
    // Enable HTTP/2
    https: false,
    // Configure host and port - use 0.0.0.0 for better Windows compatibility
    host: '0.0.0.0',
    port: 5173, // Use Vite's default port instead of 3000
    strictPort: false, // Allow fallback to other ports if 5173 is unavailable
    // Optimize dev server
    hmr: {
      overlay: false
    },
    // Additional Windows-friendly configurations
    open: true, // Automatically open browser
    cors: true
  },
  // SEO and performance optimization
  define: {
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  }
})