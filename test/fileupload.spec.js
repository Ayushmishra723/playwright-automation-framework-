

import { test, expect } from "@playwright/test";
import { login, logout } from "../utils/authHelper.js";

test.beforeEach(async ({ page }) => {
    await login(page);
});

test("file upload", async ({ page }) => {

    // My Info open karo
    await page.getByRole("link", { name: "My Info" }).click();

    await expect(page).toHaveURL(/viewPersonalDetails/);

    // 1. Add button click
        await page.getByRole("button", { name: "Add" }).click();


    console.log("Add button clicked");

    // 2. Browse button + file chooser handle
    const fileChooserPromise = page.waitForEvent("filechooser");

    await page.getByText("Browse").click();

    const fileChooser = await fileChooserPromise;

    // 3. File select karo
    await fileChooser.setFiles(
        "C:/Users/ayush mishra/Videos/RESUME_AYUSH_MISHRA.pdf"
    );

    console.log("File selected");

    // 4. Upload icon click
    await page.locator("i.oxd-icon.bi-upload.oxd-file-input-icon").click();

    console.log("Upload icon clicked");

      await page
        .locator("i.oxd-icon.bi-upload.oxd-file-input-icon")
        .click();

    console.log("File uploaded successfully");
});