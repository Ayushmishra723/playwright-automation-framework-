import { test, expect } from "@playwright/test";
import { login } from "../utils/authHelper.js";

test.beforeEach(async ({ page }) => {

    await login(page);

    await expect(page).toHaveURL(/dashboard/);
});

test.afterEach(async({apge})=>{
    await  logout(page);
    

})


test("verify Upgrade opens in new tab", async ({ page }) => {

    // STEP 1
    // New page/tab open hone ka wait start karo
    const newPagePromise = page.context().waitForEvent("page");
    const upgradeLink =
    page.locator("a.orangehrm-upgrade-link");


    // STEP 2
    // Upgrade button click
    await upgradeLink.click();


    // STEP 3
    // Jo new tab open hua usko capture karo
    const newPage = await newPagePromise;


    // STEP 4
    // New page load hone ka wait
    await newPage.waitForLoadState();


    // STEP 5
    // New tab URL verify
    await expect(newPage).toHaveURL(/upgrade-to-advanced/);


    // STEP 6
    // Print URL
    console.log("Parent URL:", page.url());

    console.log("Child URL:", newPage.url());


    // STEP 7
    // Total tabs
    const pages = page.context().pages();

    console.log("Total tabs:", pages.length);

//await  page.brintTOFront();
    // STEP 8
    // Child tab close
    await newPage.close();
  

  

    // STEP 9
    // Parent tab still available
   // await expect(page).toHaveURL(/dashboard/);
});