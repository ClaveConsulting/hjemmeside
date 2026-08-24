import { defineConfig } from 'astro/config';
import svgr from "vite-plugin-svgr";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    vite: {
        plugins: [svgr({
            include: '**/*.svg?react'
        })],
        ssr: {
            noExternal: ["styled-components", "@emotion/*"]
        }
    }
});
