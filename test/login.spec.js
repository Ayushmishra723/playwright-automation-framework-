import { test, expect } from "@playwright/test"
import{login,logout} from "../utils/authhelper.js"
test.beforeEach(async({page}) =>{
    console.log("before each started")
 await login(page);


})



test("validation of login page",async({page})=>
{
   console.log("test cases is running")
    await expect(page).toHaveURL(/dashboard/);  
    
})

test.afterEach(async({page})=>{
await logout(page);


})
