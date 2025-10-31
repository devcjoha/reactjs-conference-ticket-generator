import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {copyFileSync} from 'fs';
import { resolve } from 'path';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';


if (isGitHubPages) {
  copyFileSync(resolve(__dirname, '404.html'), resolve(__dirname, 'dist/404.html'))
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHubPages ? '/reactjs-conference-ticket-generator/' : '/',
});
