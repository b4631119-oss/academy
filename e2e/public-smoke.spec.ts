import { expect, test } from "@playwright/test";

test("public landing page links to the learning catalog", async ({ page }) => {
  const response = await page.goto("/");

  expect(response?.ok()).toBe(true);
  await expect(page.getByRole("heading", { level: 1, name: "PROlab Academy" })).toBeVisible();
  await expect(page.getByRole("link", { name: /обучение/i }).first()).toHaveAttribute("href", "/skills");
});

test("public course catalog is available", async ({ page }) => {
  const response = await page.goto("/skills");

  expect(response?.ok()).toBe(true);
  await expect(page.getByRole("heading", { level: 1, name: "Обучение" })).toBeVisible();
  await expect(page.locator("main")).toBeVisible();
});

test("robots and sitemap are publicly available", async ({ request }) => {
  const [robots, sitemap] = await Promise.all([
    request.get("/robots.txt"),
    request.get("/sitemap.xml"),
  ]);

  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain("sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).toContain("/skills");
});
