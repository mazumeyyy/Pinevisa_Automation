const { test, expect } = require('@playwright/test');

test.describe('Pinevisa Automation', () => {
    test('Fill nationality and select experience', async ({ page }) => {
        await page.goto('https://staging.pinevisa.com/');

        await page.getByRole('link', { name: 'Read Our Story' }).click();
        await page.getByRole('link', { name: 'Start Free Consultation' }).click();

        await page.locator('input[name="full_name"]').fill('Mazum Paudel');
        await page.locator('input[name="email"]').fill('mazumpaudel02@gmail.com');
        await page.locator('input[name="phone"]').fill('9813928426');
        await page.locator('input[name="industry"]').fill('IT');
        await page.locator('textarea[name="message"]').fill('I am interested in your services.');
        await page.locator('button[type="submit"]').click();
        await page.waitForTimeout(1000);

        

    });

});