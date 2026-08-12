import { test, expect } from "../fixture/baseTest.js";

test("validation of login page", async ({ authenticatedPage }) => {

    console.log("test case is running");

    await expect(authenticatedPage).toHaveURL(/dashboard/);

    console.log("test completed");

});