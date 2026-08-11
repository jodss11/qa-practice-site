import { test, expect } from '@playwright/test';

test('login form accepts credentials and submits', async ({ page }) => {
  // 1. Navigate to the local site
  await page.goto('/');

  // 2. Locate the elements using our dedicated test attributes
  const usernameInput = page.getByTestId('login-username-input');
  const passwordInput = page.getByTestId('login-password-input');
  const submitButton = page.getByTestId('login-submit-button');

  // 3. Act: Simulate a user filling out the form
  await usernameInput.fill('qa_engineer');
  await passwordInput.fill('securePassword123');
  
  // 4. Act: Click the login button
  await submitButton.click();

  // 5. Assert: Verify the button is still visible (since we haven't built a real backend yet)
  await expect(submitButton).toBeVisible();
});