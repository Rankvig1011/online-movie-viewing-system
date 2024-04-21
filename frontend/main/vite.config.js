// vite.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve} from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    optimizeDeps: {
        esbuildOptions: {
            target: 'es2020',
        },
    },
    esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
    },
    plugins: [
        react({
            babel: {
                presets: ['@babel/preset-react'],
                plugins: [
                    'babel-plugin-twin',
                    'babel-plugin-macros',
                    'babel-plugin-styled-components',
                ],
            },
        }),
        svgr(),
    ],
});
