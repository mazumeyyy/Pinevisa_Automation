const { test, expect } = require('@playwright/test');

test.describe('Pinevisa Automation', () => {
    test('Fill nationality and select experience', async ({ page }) => {
        await page.goto('https://staging.pinevisa.com/');

        const viewOpportunitiesLink = page.getByRole('link', { name: 'View Opportunities' });
        await expect(viewOpportunitiesLink).toBeVisible();
        await viewOpportunitiesLink.click();

        const viewDetailsLink = page.locator('a[href="/job-offer/details/1"]');
        await viewDetailsLink.click();

        const applyNowLink = page.getByRole('link', { name: 'Apply Now' });
        await expect(applyNowLink).toBeVisible();
        await applyNowLink.click();





    });
});

