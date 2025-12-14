import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load environment variables based on mode (development, production, etc.)
  // Third parameter '' loads all env vars, including non VITE_* prefixed ones, if needed
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],

    // Example: define global constants available in the app
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV || 'development'),
      __API_BASE_URL__: JSON.stringify(env.VITE_API_BASE_URL || 'http://localhost:5000/api'),
    },

    // Example: dev server config, customizable by env
    server: {
      port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
      open: true, // Automatically open browser on start
      // You can add proxy or other dev server options here
    },

    // Build options
    build: {
      sourcemap: mode === 'development', // Enable sourcemaps in dev for debugging
      outDir: 'dist',
      // other build options here
    },

    // Resolve aliases, extend as per your needs
    resolve: {
      alias: {
        '@': '/src',
      },
    },

    // Additional optimized dependencies for faster cold starts
    optimizeDeps: {
      include: ['react', 'react-dom'],
    },

    // ESM or SSR options can be configured if you expand platform
  }
})
