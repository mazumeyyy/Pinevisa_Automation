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

        //Primary Contact Person

        await page.locator('input[name="employer_information.primary_contact_person.first_name"]').fill('Mazum');
        await page.locator('input[name="employer_information.primary_contact_person.last_name"]').fill('Paudel');
        await page.locator('input[name="employer_information.primary_contact_person.position"]').fill('IT Technician');
        await page.locator('input[name="employer_information.primary_contact_person.phone"]').fill('9813928426');
        await page.locator('input[name="employer_information.primary_contact_person.email"]').fill('mazumpaudel02@gmail.com;');
        await page.locator('select[name="employer_information.primary_contact_person.immigration_program_requiested"]').selectOption('H-2B Temporary Worker Program');
        await page.locator('button[type="button"]').filter({ hasText: 'Next' }).click();

        //Position Information

        await page.locator('input[name="employer_information.position_information.job_title"]').fill('Software Engineer');        
        await page.locator('input[name="employer_information.position_information.work_location"]').fill('Hotel Wawa');
        await page.locator('input[name="employer_information.position_information.number_of_workers_requested"]').fill('20');
        await page.locator('textarea[placeholder="Enter brief job description"]').fill('Responsible for maintaining and troubleshooting computer systems and networks.');
        await page.locator('input[placeholder="Enter expected start date"]').fill('2026-05-07');
        await page.locator('button[type="button"]').filter({ hasText: 'Next' }).click();

        // Financial Information

        await page.locator('input[name="employer_information.financial_information.gross_revenue"]').fill('1000000');
        await page.locator('input[name="employer_information.financial_information.net_profit"]').fill('500000');
        await page.locator('input[name="employer_information.financial_information.total_payroll"]').fill('25000');
        await page.locator('textarea[name="employer_information.financial_information.employer_acknowledgment"]').fill('Thankyou for your submission. We will review your application and get back to you shortly.');
        await page.locator('button[type="button"]').filter({ hasText: 'Next' }).click();

        //Employer Representative

        await page.locator('input[name="employer_representative.first_name"]').fill('Mazum');
        await page.locator('input[name="employer_representative.last_name"]').fill('Paudel');
        await page.locator('button[type="button"]').filter({ hasText: 'Next' }).click();

        //Signature Date

        await page.locator('input[name="title"]').fill('Mr');
        await page.locator('input[name="date"]').fill('2026-04-07');
  






        



    



        

       





    });
});
