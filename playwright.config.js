import { defineConfig ,devices} from "@playwright/test";
//import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: "./test",

    timeout: 30000,

    fullyParallel: true,

    workers: 3,
    retries:2,

    use: {
        headless: false,
        screenshot: "only-on-failure",
        trace: "on-first-retry"
    },
    projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  {
    name: 'Microsoft Edge',

    use: {
      channel: 'msedge',
    },
  },

   
  ],

});