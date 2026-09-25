import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/public-smoke.spec.ts',
  fullyParallel: true,
  workers: 2,
  retries: 0,
  reporter: 'list',
  outputDir: 'test-results/production-smoke',
  use: {
    baseURL: 'https://www.prolab-academy.site',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
