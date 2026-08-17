import{test,expect} from "../Fixture/basetest.js";
import{login,logout} from "../utils/authhelper.js"
test("dropdown", async({authenticatedPage})=>{

await authenticatedPage.getByText("admin").first().click();
await expect(authenticatedPage).toHaveURL(/admin/);
await authenticatedPage.getByText("-- Select --").first().click();
  // await authenticatedPage.getByText("Admin", { exact: true }).click();
   //await authenticatedPage.locator("//div[@class='oxd-select-text-input' and text()='Admin']").first().click();
   //await authenticatedPage.getByText("-- Select --").first().click();
await authenticatedPage
    .locator("//div[@class='oxd-table-filter-area']//div[2]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();

await authenticatedPage
    .getByRole("listbox")
    .getByText("Admin", { exact: true })
    .click();
   await authenticatedPage.pause();

})
