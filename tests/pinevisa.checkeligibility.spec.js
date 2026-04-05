const { test, expect } = require('@playwright/test');

test.describe('Pinevisa Automation', () => {
    test('Fill nationality and select experience', async ({ page }) => {
        await page.goto('https://staging.pinevisa.com/');

        // Click Check Eligibility
        const button = page.getByRole('button', { name: 'Check Eligibility' });
        await expect(button).toBeVisible();
        await button.click();

        // Fill nationality
        const nationalityInput = page.getByPlaceholder('e.g., Philippines, Mexico, India');
        await nationalityInput.waitFor({ state: 'visible' });
        await nationalityInput.fill('Nepal');

        // Select Years of Experience
        // First open the dropdown (if it’s collapsed)
        await page.locator('svg.lucide-chevron-down').first().click();

        // Then locate the specific option by its text and click
        const experienceOption = page.getByRole('button', { name: '3- 5 Years' });
        await expect(experienceOption).toBeVisible();
        await experienceOption.click();

        const continueButton = page.getByRole('button', { name: 'Continue' });
        await expect(continueButton).toBeVisible();
        await continueButton.click();

        //Preferred Visa Program

        // Open the "Select program" dropdown
        const programDropdown = page.getByRole('button', { name: 'Select program' });
        await expect(programDropdown).toBeVisible();
        await programDropdown.click();

        // Click on the "J-1 Visa" option
        const j1VisaOption = page.getByRole('button', { name: 'J-1 Visa' });
        await expect(j1VisaOption).toBeVisible();
        await j1VisaOption.click();

        const continueBtn = page.getByRole('button', { name: 'Continue' });
        await expect(continueBtn).toBeVisible();
        await continueBtn.click();

        const fullNameInput = page.locator('input[name="full_name"]');
        await fullNameInput.fill('Mazum Paudel');

        const emailInput = page.locator('input[name="email"]');
        await emailInput.fill('mazumpaudel02@gmail.com');

        const phoneInput = page.locator('input[name="phone_number"]');
        await phoneInput.fill('+977-9813928426');

        const SubmitButton = page.getByRole('button', { name: 'Submit' });
        await expect(SubmitButton).toBeVisible();
        await SubmitButton.click();

        





     

    });
});
