import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    rollupOptions: {
      input: {
        main: 'src/index.html',
        login: 'src/login.html',
        dashboard: 'src/dashboard.html',
        forgotPassword: 'src/forgot-password.html',
        // Add other entry points if needed
      },
    }
  }
})
