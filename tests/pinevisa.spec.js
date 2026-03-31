const { test, expect } = require('@playwright/test');

test.describe('Pinevisa Automation', () => {
    test('Fill nationality and select experience', async ({ page }) => {
        await page.goto('https://staging.pinevisa.com/');

        // Click Check Eligibility
        const button = page.getByRole('button', { name: 'Check Eligibility' });
        await expect(button).toBeVisible();
        await button.click();

        // Fill nationality
        const nationalityInput = page.getByPlaceholder('e.g., Philippines, Mexico, India');
        await nationalityInput.waitFor({ state: 'visible' });
        await nationalityInput.fill('Nepal');

        // Select Years of Experience
        // First open the dropdown (if it’s collapsed)
        await page.locator('svg.lucide-chevron-down').first().click();

        // Then locate the specific option by its text and click
        const experienceOption = page.getByRole('button', { name: '3- 5 Years' });
        await expect(experienceOption).toBeVisible();
        await experienceOption.click();


        // Verify selection
    });
});
