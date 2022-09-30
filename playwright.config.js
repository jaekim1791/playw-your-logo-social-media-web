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
    launchOptions: {
      // args: ["--start-maximized"], // Only works on chromium
      // slowMo: 5000,
    },
    headless: false,
    // browserName: "chromium",
    // browserName: "firefox", // Issues on Firefox, Iframe resolved to hidden. Unable to continue.
    // browserName: "webkit",
    // viewport: { width: 1366, height: 768 },
    trace: "retain-on-failure",
  },

  // reporter: "allure-playwright",

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
