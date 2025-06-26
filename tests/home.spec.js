const { test, expect } = require('@playwright/test');

test('homepage shows correct heading', async ({ page }) => {
  await page.goto('/');
  const h1 = await page.locator('h1').innerText();
  expect(h1).toMatch(/Vite \+ React \+ Playwright Starter/);
});