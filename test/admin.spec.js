import { test, expect } from "@playwright/test";
import { login, logout } from "../utils/authHelper.js";

test.beforeEach(async ({ page }) => {

    await login(page);

    await expect(page).toHaveURL(/dashboard/);
});


test("verify ESS user role from dashboard", async ({ page }) => {

    // Admin page
    await page.getByText("Admin", { exact: true }).click();

    await expect(page).toHaveURL(/admin/);


    // User Role dropdown
    const userRoleDropdown = page.locator(".oxd-select-wrapper").first();

    await userRoleDropdown.click();

    await page.getByRole("option", { name: "ESS" }).click();


    // Search
    await page.getByRole("button", { name: "Search" }).click();


    // Locate User Role cells directly
    const roleCells = page.locator(
        ".oxd-table-body .oxd-table-row .oxd-table-cell:nth-child(3)"
    );

    // At least one filtered result should exist
    await expect(roleCells.first()).toHaveText("ESS");


    const count = await roleCells.count();

    console.log("Total ESS records:", count);

    expect(count).toBeGreaterThan(0);


    // Verify every returned role
    for (let i = 0; i < count; i++) {

        const role = roleCells.nth(i);

        await expect(role).toHaveText("ESS");

        console.log(
            "Record " + (i + 1) +
            " User Role: " +
            await role.innerText()
        );
    }
});


test.afterEach(async ({ page }) => {

    await logout(page);

});