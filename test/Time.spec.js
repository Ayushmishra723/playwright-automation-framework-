import{test,expect} from "@playwright/test"

import{login,logout} from "../utils/authhelper.js"



test.beforeEach(async ({page}) => {
   await login(page);
   //await expect(page).toHaveURL(/time/);




});
test.afterEach(async({page})=>{
    await  logout(page);
    

})

test("to test time " ,async({page}) =>{
await page.getByRole('link', { name: 'Time' }).click();

console.log("ayush");
await expect(page).toHaveURL(/time/);
await page.getByRole('button', { name: 'View' }).first().click();




})