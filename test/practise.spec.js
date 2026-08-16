import { test, expect } from "@playwright/test";

test("live interview", async ({ page, context }) => {

    // Open website
    await page.goto("https://www.sc.com/en");

    // Click Online Banking
    await page
        .getByRole("link", {
            name: "Online banking",
            exact: true
        })
        .first()
        .click();

    // Verify page
    await expect(page).toHaveURL(/sc\.com\/en/);

    // Locate Botswana using its href
    const botswanaLink = page.locator(
        'a[href*="/afr/ibank/bw/foa/login.htm"]'
    ).first();

    // Verify Botswana link is visible
  //  await expect(botswanaLink).toBeVisible();

    // Click and wait for new tab together
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        botswanaLink.click()
    ]);

    // Wait for new page
    await newPage.waitForLoadState();

    // Verify Botswana URL
    await expect(newPage).toHaveURL(/bw/);

});