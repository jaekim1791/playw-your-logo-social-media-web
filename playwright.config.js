const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",

  timeout: 60 * 1000,

  expect: {
    timeout: 5000,
  },
  retries: 1,

  fullyParallel: true,

  use: {
    // launchOptions: {
    //   slowMo: 1000,
    //   args: ["--start-maximized"],
    // },
    headless: false,
    // browserName: "chromium",
    // browserName: "firefox", // Issues on Firefox, social-media-links.spec.js
    // browserName: "webkit",
    // viewport: { width: 1366, height: 768 },
    trace: "retain-on-failure",
  },

  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    // {
    //   name: "firefox", // Issues on Firefox, social-media-links.spec.js
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      name: "Microsoft Edge",
      use: {
        channel: "msedge",
      },
    },
  ],
};

module.exports = config;
