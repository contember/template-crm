import { contember } from '@contember/vite-plugin'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
	return {
		plugins: [tsconfigPaths(), react(), contember()],
		build: {
			sourcemap: true,
			rollupOptions: {
				input: {
					root: resolve(__dirname, './index.html'),
					app: resolve(__dirname, './app/index.html'),
				},
			},
		},
	}
})
