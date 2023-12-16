const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('http://localhost:8080/shopping-List');
    const list = await page.$('a[href="/Shopping-List"]');
    expect(list).toBeTruthy();
  });
  