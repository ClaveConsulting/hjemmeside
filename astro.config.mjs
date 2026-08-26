import { defineConfig } from 'astro/config';
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [svgr({
            include: '**/*.svg?react'
        })]
    }
});
