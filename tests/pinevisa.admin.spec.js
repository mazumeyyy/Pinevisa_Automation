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

        // Click on avatar to open menu
        await page.locator('img.fi-avatar.fi-circular.fi-size-md.fi-user-avatar').click();

        // Click Enable dark theme
        await page.locator('button[aria-label="Enable dark theme"]').click();


        // Navigate to Admins
        await page.locator('span.fi-sidebar-item-label', { hasText: 'Admins' }).click();

        // Create new admin
        await page.getByText('New admin').click();

        // Upload a picture using FilePond hidden input
        // Upload the file directly to the hidden input
        await page.locator('input[type="file"]').setInputFiles('C:/Users/Mazum Paudel/OneDrive/Desktop/dpp(1).jpg');

        // Fill in the form fields
        await page.locator('input[name="Name"]').fill('Mazum Paudel');







        

    });
});

