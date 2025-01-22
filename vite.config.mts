/// <reference types='vitest' />

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
	test: {
		environment: 'jsdom',
		include: ['./**/*.test.ts', './**/*.test.tsx'],
		globals: true,
		setupFiles: ['./setupTests.js'],
		reporters: ['default', 'html'],
		testTimeout: 15000,
		coverage: {
			reporter: ['text', 'html', 'lcov'],
			enabled: true,
			exclude: [
				'.eslintrc.json',
				'.gitignore',
				'.vscode/**',
				'coverage/**',
				'node_modules/**',
				'__tests__/**',
				'postcss.config.js',
				'public/**',
				'html/**',
				'src/providers',
				'src/i18n.ts',
				'tailwind.config.ts',
				'.next/**',
				'README.md',
				'vite.config.mts',
				'next.config.mjs',
				'next-env.d.ts',
				'package.json',
				'package-lock.json',
				'.editorconfig',
				'.env.*',
				'src/styles/**',
				'src/app/page.tsx',
				'src/app/lib/auth.ts',
				'src/app/**/layout.tsx',
				'src/types/**',
				'src/middleware/**',
			],
		},
	},
	plugins: [tsconfigPaths(), react()],
});

// Para exibir a árvore do DOM no console
// console.debug(prettyDOM())
