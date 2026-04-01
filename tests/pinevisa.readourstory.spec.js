const { test, expect } = require('@playwright/test');

test.describe('Pinevisa Automation', () => {
    test('Fill nationality and select experience', async ({ page }) => {
        await page.goto('https://staging.pinevisa.com/');

        await page.getByRole('link', { name: 'Read Our Story' }).click();
        await page.getByRole('link', { name: 'Start Free Consultation' }).click();
    });

});