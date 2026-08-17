import{test,expect} from "../Fixture/basetest.js";
import{login,logout} from "../utils/authhelper.js"
test("dropdown", async({authenticatedPage})=>{

await authenticatedPage.getByText("admin").first().click();
await expect(authenticatedPage).toHaveURL(/admin/);
await authenticatedPage.getByText("-- Select --").first().click();
  // await authenticatedPage.getByText("Admin", { exact: true }).click();
   //await authenticatedPage.locator("//div[@class='oxd-select-text-input' and text()='Admin']").first().click();
   //await authenticatedPage.getByText("-- Select --").first().click();


await authenticatedPage.locator("//div[@role='option']//span[text()='Admin']").click();
   

})
