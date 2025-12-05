// vite.config.js
// Purpose: Add React and Tailwind Vite plugins so Tailwind is processed during builds.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Tailwind Vite plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),  // Enables React fast-refresh and JSX support
    tailwindcss(),  // Registers Tailwind plugin
  ],
});
