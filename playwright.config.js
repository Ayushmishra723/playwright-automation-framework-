import { defineConfig } from "@playwright/test";

export default defineConfig({

    testDir: "./test",

    timeout: 30000,

    fullyParallel: true,

    workers: 3,

    use: {
        headless: false,
        screenshot: "only-on-failure",
        trace: "on-first-retry"
    }

});