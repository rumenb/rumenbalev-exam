const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://rumenbalev-exam.onrender.com/shopping-List');
    const list = await page.$('a[href="/Shopping-List"]');
    expect(list).toBeTruthy();
  });
  