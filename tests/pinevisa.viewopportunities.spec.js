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

        // This handles the entire file upload in one line - no need to click Browse
        await page.locator('input[type="file"][name="passport_front"]').setInputFiles('C:\\Users\\Mazum Paudel\\OneDrive\\Desktop\\pp.jpeg');
        // Wait for the image preview to appear
        await page.waitForSelector('img', { timeout: 5000 });

        // Click Next
        await page.locator('button[type="button"]').filter({ hasText: 'Next' }).click();

        // Select country Nepal
        // Select country Nepal - using nth(1) to target the second dropdown
        // Click the country dropdown using the span text inside it
        await page.locator('div').filter({ hasText: /^Select country\.\.\.$/ }).nth(1).click();
        await page.getByPlaceholder('Search country...').fill('Nepal');
        await page.getByText('Nepal', { exact: true }).click();

        // Street
        await page.locator('input[name="current_street"]').fill('Lazimpat Hotel Wawa');

        // City
        await page.locator('input[name="current_city"]').fill('Kathmandu');

        // State
        await page.locator('input[name="current_state"]').fill('Bagmati');

        // Zip code
        await page.locator('input[name="current_zip_code"]').fill('44600');

        // Toggle - Same as Current address
        await page.locator('div.w-12.h-6.bg-gray-200').click();

        // Click Next
        await page.locator('button[type="button"]').filter({ hasText: 'Next' }).click();


        // Highest Degree - Select Bachelor
        await page.locator('select[name="edu_highest_degree"]').selectOption('Bachelor');

        // Education country
        await page.locator('div').filter({ hasText: /^Select country\.\.\.$/ }).first().click();
        await page.waitForTimeout(500);
        await page.getByPlaceholder('Search country...').fill('Nepal');
        await page.waitForTimeout(500);
        await page.getByText('Nepal', { exact: true }).click();

        // Year of completion
        await page.locator('input[name="edu_year_of_completion"]').fill('2025');

        // School name
        await page.locator('input[name="edu_school_name"]').fill('Vedas College');

        // Major
        await page.locator('input[name="edu_major"]').fill('B.Sc.CSIT');

        // English Proficiency - same page, no Next needed before this!
        await page.locator('select[name="english_writing"]').selectOption('Advance');
        await page.locator('select[name="english_reading"]').selectOption('Advance');
        await page.locator('select[name="english_speaking"]').selectOption('Advance');

        // NOW click Next - after ALL education fields are filled
        await page.locator('button[type="button"]').filter({ hasText: 'Next' }).click();

        







    });
});

