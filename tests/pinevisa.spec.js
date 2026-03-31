const { test, expect } = require('@playwright/test');

test.describe('Pinevisa Automation', () => {
  test('Fill nationality and select experience', async ({ page }) => {
    await page.goto('https://staging.pinevisa.com/');

    // Locate the button by its text
    const button = page.getByRole('button', { name: 'Check Eligibility' });

    // Assert button is visible and click it
    await expect(button).toBeVisible();
    await button.click();

    // Now wait for the nationality input to appear
    const nationalityInput = page.getByPlaceholder('e.g., Philippines, Mexico, India');
    await nationalityInput.waitFor({ state: 'visible' });

    // Fill with "Nepal"
    await nationalityInput.fill('Nepal');

    // Dropdown chevron
    const dropdownTrigger = page.locator('svg.lucide-chevron-down').first();
    await dropdownTrigger.click();

    // Select "3-5 Years"
    const option = page.getByText('3-5 Years', { exact: true });

    // Verify selection
    await expect(page.locator('text=3-5 Years')).toBeVisible();
  });
});
