const { test, expect } = require('@playwright/test');

test.describe('Pinevisa Automation', () => {
    test('Fill employers details', async ({ page }) => {
        await page.goto('https://staging.pinevisa.com/');

        await page.getByRole('link', { name: Employers }).click();

        
    });
});