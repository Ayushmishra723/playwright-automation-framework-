import { test, expect } from "@playwright/test"
test("validation of login page",async({page})=>
{
    test.setTimeout(60000);
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login" )
    await page.getByPlaceholder("username").type("ayush")
    await page.locator("input[name='password']").type("admin123")
    await page.locator("button[type='submit']").click();
})
