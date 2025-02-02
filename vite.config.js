/* eslint-disable no-undef */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		define: {
			'process.env': env,
		},
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
		server: {
			host: '0.0.0.0',
		},
	};
});
