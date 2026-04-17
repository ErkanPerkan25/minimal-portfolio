import { defineConfig } from 'vite'
import basicSsl from "@vitejs/plugin-basic-ssl"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), basicSsl()],
    base: '/',
    server: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:5050",
                 changeOrigin: true
            }
        },
        https: true,
        host: '127.0.0.1',
        port: 5173
    },
})
