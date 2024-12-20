import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin()],
    server: {
        port: 60615,
    },
    base: '/TestApp/', // nome del repository GitHub
    build: {
        outDir: 'build'
    }
})