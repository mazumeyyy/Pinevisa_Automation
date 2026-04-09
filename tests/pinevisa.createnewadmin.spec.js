const { test, expect } = require('@playwright/test');

test.describe('Pinevisa Automation', () => {
    test('Fill nationality and select experience', async ({ page }) => {
        await page.goto('https://staging.pinevisa.com/admin');

        await page.locator('input[id="form.email"]').fill('admin@pinevisa.com');
        await page.locator('input[id="form.password"]').fill('pinevisa#2026');

        // Click Remember Me checkbox
        await page.locator('input[id="form.remember"]').click();

        // Click Sign In button
        await page.getByRole('button', { name: 'Sign in' }).click();

        // Step 1: Click the avatar to open the user dropdown
        await page.getByRole('button', { name: 'Avatar of Admin Kumar' }).click();

        // Step 2: Click "Enable dark theme" from the dropdown
        await page.getByRole('button', { name: 'Enable dark theme' }).click();
    });
});

