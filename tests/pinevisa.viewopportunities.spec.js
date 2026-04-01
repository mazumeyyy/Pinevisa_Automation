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

        const fullNameInput = page.getByPlaceholder('Enter full name');
        await fullNameInput.fill('Mazum Paudel');

        const emailInput = page.getByPlaceholder('Enter Email');
        await emailInput.fill('mazumpaudel02@gmail.com');


        const ContactNumberInput = page.getByPlaceholder('Enter Contact Number');
        await ContactNumberInput.fill('9813928426');


        const DateofBirth = page.getByPlaceholder('Enter date of birth'); // format DD-MM-YYYY for type="date"
        await DateofBirth.fill('2000-03-30');

        // Using name attribute
        const genderSelect = page.locator('select[name="gender"]');
        await genderSelect.selectOption('Female');

        // First click the dropdown to open it
        await page.locator('div.w-full.h-12.bg-white.border.border-gray-300.rounded-lg').click();

        // Wait for search box to appear, then type Nepal
        await page.getByRole('textbox', { name: 'Search country...' }).fill('Nepal');

        // Click Nepal from the options
        await page.getByText('Nepal', { exact: true }).click();

        





    });
});

