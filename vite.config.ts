import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		port: 3000
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
             @use '$lib/styles/themes/default/_variables.scss' as *;
        `
			}
		}
	}
});
