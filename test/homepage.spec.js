import { test, expect } from "@playwright/test";
import { login, logout } from "../utils/authHelper.js";

test.beforeEach(async ({ page }) => {
    await login(page);
});

test("search Leave from homepage", async ({ page }) => {

    await expect(page).toHaveURL(/dashboard/);

    await page.getByPlaceholder("Search").fill("Leave");

    await (
        page.getByText("Leave", { exact: true })
    ).click();
});

test.afterEach(async ({ page }) => {
    await logout(page);
});