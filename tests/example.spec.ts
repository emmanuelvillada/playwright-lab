import { test, expect } from '@playwright/test';



test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('example test with screenshot', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Take a screenshot of the homepage
  await page.screenshot({ path: 'homepage.png' });

  // Verify that the screenshot was taken (file existence check can be added in a real scenario)
  console.log('Screenshot taken: homepage.png');
});
test('example test with console log', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Log a message to the console
  console.log('Navigated to Playwright homepage');

  // Verify the page title
  await expect(page).toHaveTitle(/Playwright/);
});

test(' test failed example', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // This assertion is intended to fail
  await expect(page).toHaveTitle(/Non-Existent Title/);
});