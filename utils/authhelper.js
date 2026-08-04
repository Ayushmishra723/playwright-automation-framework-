export async function login(page)
{
       await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
          { waitUntil: "domcontentloaded" });
    await page.getByPlaceholder("username").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
}

export async function logout(page)
{
     await page.getByAltText("profile picture").click();
    await page.getByText("Logout").click();
}