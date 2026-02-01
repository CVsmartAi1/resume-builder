import { test, expect } from '@playwright/test';

test.describe('CV Creation Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to sign-in and authenticate
    await page.goto('/sign-in');
    // Note: Actual auth requires Clerk credentials
    // For testing, we'll use a mock or test account
  });

  test('should create a new CV', async ({ page }) => {
    await page.goto('/cvs/new');
    
    // Fill personal info
    await page.getByLabel(/First Name/i).fill('Test');
    await page.getByLabel(/Last Name/i).fill('User');
    await page.getByLabel(/Email/i).fill('test@example.com');
    await page.getByLabel(/Profession/i).fill('Software Engineer');
    
    // Fill summary
    await page.getByLabel(/Professional Summary/i).fill('Experienced developer with 5+ years...');
    
    // Save CV
    await page.getByRole('button', { name: /Save/i }).click();
    
    // Verify success
    await expect(page.getByText(/Saved/i)).toBeVisible();
  });

  test('should add work experience', async ({ page }) => {
    await page.goto('/cvs/new');
    
    // Navigate to experience tab
    await page.getByRole('tab', { name: /Experience/i }).click();
    
    // Add experience
    await page.getByRole('button', { name: /Add Experience/i }).click();
    await page.getByLabel(/Company/i).fill('Tech Corp');
    await page.getByLabel(/Position/i).fill('Senior Developer');
    await page.getByLabel(/Description/i).fill('Led team of 5 developers...');
    
    // Save
    await page.getByRole('button', { name: /Add/i }).click();
    
    // Verify
    await expect(page.getByText(/Tech Corp/i)).toBeVisible();
  });

  test('should add education', async ({ page }) => {
    await page.goto('/cvs/new');
    
    await page.getByRole('tab', { name: /Education/i }).click();
    
    await page.getByRole('button', { name: /Add Education/i }).click();
    await page.getByLabel(/School/i).fill('University of Test');
    await page.getByLabel(/Degree/i).fill('Bachelor of Science');
    await page.getByLabel(/Field of Study/i).fill('Computer Science');
    
    await page.getByRole('button', { name: /Add/i }).click();
    
    await expect(page.getByText(/University of Test/i)).toBeVisible();
  });

  test('should add skills', async ({ page }) => {
    await page.goto('/cvs/new');
    
    await page.getByRole('tab', { name: /Skills/i }).click();
    
    // Add skill
    await page.getByPlaceholder(/Add a skill/i).fill('JavaScript');
    await page.keyboard.press('Enter');
    
    await page.getByPlaceholder(/Add a skill/i).fill('React');
    await page.keyboard.press('Enter');
    
    // Verify skills appear
    await expect(page.getByText(/JavaScript/i)).toBeVisible();
    await expect(page.getByText(/React/i)).toBeVisible();
  });

  test('should switch templates', async ({ page }) => {
    await page.goto('/cvs/new');
    
    // Select classic template
    await page.getByRole('button', { name: /Classic/i }).click();
    
    // Verify template change (check for specific class or style)
    await expect(page.locator('[data-template="classic"]')).toBeVisible();
  });

  test('should export PDF', async ({ page }) => {
    await page.goto('/cvs/new');
    
    // Fill required fields
    await page.getByLabel(/First Name/i).fill('Test');
    await page.getByLabel(/Last Name/i).fill('User');
    
    // Export PDF
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.getByRole('button', { name: /Download PDF/i }).click(),
    ]);
    
    // Verify download
    expect(download.suggestedFilename()).toContain('.pdf');
  });
});
