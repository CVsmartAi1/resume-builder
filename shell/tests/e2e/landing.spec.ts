import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Build Your Perfect CV/i })).toBeVisible();
    await expect(page.getByText(/AI-Powered CV Builder/i)).toBeVisible();
  });

  test('should have CTA buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Get Started Free/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Watch Demo/i })).toBeVisible();
  });

  test('should display features section', async ({ page }) => {
    await expect(page.getByText(/AI-Powered/i)).toBeVisible();
    await expect(page.getByText(/Professional Templates/i)).toBeVisible();
    await expect(page.getByText(/One-Click PDF Export/i)).toBeVisible();
  });

  test('should navigate to sign-up on CTA click', async ({ page }) => {
    await page.getByRole('button', { name: /Get Started Free/i }).click();
    await expect(page).toHaveURL(/.*sign-up/);
  });
});

test.describe('Authentication Flow', () => {
  test('should display sign-in page', async ({ page }) => {
    await page.goto('/sign-in');
    await expect(page.getByText(/Sign in/i)).toBeVisible();
  });

  test('should display sign-up page', async ({ page }) => {
    await page.goto('/sign-up');
    await expect(page.getByText(/Sign up/i)).toBeVisible();
  });
});
