import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHubPages ? '/reactjs-conference-ticket-generator/' : '/',
})
