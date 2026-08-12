import { test as base, expect } from "@playwright/test";
import { login, logout } from "../utils/authHelper.js";

export const test = base.extend({

    authenticatedPage: async ({ page }, use) => {

        await login(page);

        await use(page);

        await logout(page);
    }

});

export { expect };