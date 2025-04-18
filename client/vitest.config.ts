import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: './src/setupTests.ts',
    environment: 'jsdom', // 👈 add this line
    globals: true,         // optional but useful for React Testing Library
    // Removed invalid property 'envFile'
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
      exclude: ['node_modules/**'],
      include: ['src/**/*.{ts,tsx}'],
    },
    server: {
      deps: {
        inline: ['firebase'],
      },
    },
  },
});
