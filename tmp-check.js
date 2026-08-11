const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:3000');
  console.log('loaded');
  await page.getByTestId('login-submit-button').click();
  await page.waitForTimeout(500);
  console.log('username:', await page.locator('[data-testid="username-error"]').textContent());
  console.log('password:', await page.locator('[data-testid="password-error"]').textContent());
  await browser.close();
})();
