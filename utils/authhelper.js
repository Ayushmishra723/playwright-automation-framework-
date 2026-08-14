export async function login(page)
{
       await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
          { waitUntil: "domcontentloaded", 
         timeout: 60000});
    await page.getByPlaceholder("username").fill("Admin");
    await page.locator("input[name='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
}

export async function logout(page)
{
     await page.locator(".oxd-userdropdown-img").click();
    await page.getByText("Logout").click();
}


//import{chromium} fronm "@Playwright/test";
///const browser = await chromium.launch({
//  headless:false;
//});
//const context= await browser.newcontext();
//const page = await context.newpage();

//await page.goto("");
//