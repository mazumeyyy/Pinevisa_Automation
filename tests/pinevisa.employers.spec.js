const { test, expect } = require('@playwright/test');

test.describe('Pinevisa Automation', () => {
    test('Fill employers details', async ({ page }) => {
        await page.goto('https://staging.pinevisa.com/');
        await page.goto('https://staging.pinevisa.com/employers');
        await page.goto('https://staging.pinevisa.com/employer/form');

        await page.locator('input[name="employer_information.company_name"]').fill('AdviseBridge Pvt. Ltd.');
        await page.locator('input[name="employer_information.trade_name"]').fill('AdviseBridge');
        await page.locator('input[name="employer_information.business_phone"]').fill('9813928426');
        await page.locator('input[name="employer_information.business_email"]').fill('teamadvisebridge@gmail.com');
        await page.locator('input[name="employer_information.website"]').fill('https://advisebridge.com');
        await page.locator('input[name="employer_information.federal_ein"]').fill('123456789');
        await page.locator('input[name="employer_information.year_business_est"]').fill('2022');
        await page.locator('input[name="employer_information.business_type"]').fill('Education');
        await page.locator('input[name="employer_information.no_of_employees"]').fill('20');

        //Business Address
        await page.locator('input[name="employer_information.business_address.street_address"]').fill('Lazimpat, Uttardhoka');
        await page.locator('input[name="employer_information.business_address.street_address_2"]').fill('Best Nepal');
        await page.locator('input[name="employer_information.business_address.city"]').fill('Kathmandu');
        await page.locator('input[name="employer_information.business_address.state"]').fill('KTM');
        await page.locator('input[name="employer_information.business_address.zip_code"]').fill('44600');
        await page.locator('button[type="button"]').filter({ hasText: 'Next' }).click();





    });
});
