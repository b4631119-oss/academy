import { defineConfig, devices } from '@playwright/test';

/**
 * Local smoke run against the public pages.
 *
 * There is no database seeding and no auth setup: the site has no accounts,
 * so these tests only need a running dev server.
 */
// The dev-server port is configurable so the run never attaches to an unrelated
// app that happens to occupy the default port.
const PORT = process.env.PORT || '3000';
const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  testMatch: '**/public-smoke.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 2,
  reporter: 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: `npm run dev -- -p ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
