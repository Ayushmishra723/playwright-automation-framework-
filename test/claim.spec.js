
import{test,expect} from "../Fixture/basetest.js";

import{login,logout} from "../utils/authhelper.js";

test("claim of page", async({authenticatedPage}) =>{

console.log("tets is running");
await expect(authenticatedPage).toHaveURL(/dashboard/);
await authenticatedPage.getByText("Buzz",{exact:true}).click();
await expect(authenticatedPage).toHaveURL(/buzz/);

})