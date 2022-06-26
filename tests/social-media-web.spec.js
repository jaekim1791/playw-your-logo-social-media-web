const { test, expect } = require("@playwright/test");
const { SMediaFooterLinks } = require("./pageobject/social-media-links-web.spec.js");
const { SMediaIframeLinks } = require("./pageobject/social-media-links-web.spec.js");
const { SMediaFooter } = require("./pageobject/social-media-footer-web.spec.js");
const { SMediaIFrame } = require("./pageobject/social-media-iframe-web.spec.js");

test.describe("VALIDATE SOCIAL MEDIA LINKS", async () => {
  test("Load website and click social media links", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Id as a selector for iframe will not work. Use class instead.
    // Issue on Firefox. Iframe resolved to hidden. Unable to continue.
    const iframe = page.frameLocator(".fancybox-iframe");

    const socialMediaFooterLinks = new SMediaFooterLinks();
    const socialMediaIframeLinks = new SMediaIframeLinks();
    const socialMediaFooter = new SMediaFooter(page);
    const socialMediaIFrame = new SMediaIFrame(iframe);

    const btn_QuickView = page.locator(".ajax_block_product >> nth=0");

    await page.goto("http://automationpractice.com");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // VALIDATE SOCIAL MEDIA LINKS VIA FOOTER
    // LAUNCH FACEBOOK FOOTER PAGE
    const [socialM_FooterTab01] = await Promise.all([
      context.waitForEvent("page"),
      socialMediaFooter.socialM_Footer01.click(), // Opens a new tab
    ]);
    await socialM_FooterTab01.waitForURL(socialMediaFooterLinks.socialM_FooterLink01);
    expect(socialM_FooterTab01.url().includes(socialMediaFooterLinks.socialM_FooterLink01)).toBeTruthy();
    console.log(socialM_FooterTab01.url());
    await socialM_FooterTab01.close();

    // LAUNCH TWITTER FOOTER PAGE
    const [socialM_FooterTab02] = await Promise.all([
      context.waitForEvent("page"),
      socialMediaFooter.socialM_Footer02.click(), // Opens a new tab
    ]);
    await socialM_FooterTab02.waitForURL(socialMediaFooterLinks.socialM_FooterLink02);
    expect(socialM_FooterTab02.url().includes(socialMediaFooterLinks.socialM_FooterLink02)).toBeTruthy();
    console.log(socialM_FooterTab02.url());
    await socialM_FooterTab02.close();

    // LAUNCH YOUTUBE FOOTER PAGE
    const [socialM_FooterTab03] = await Promise.all([
      context.waitForEvent("page"),
      socialMediaFooter.socialM_Footer03.click(), // Opens a new tab
    ]);
    await socialM_FooterTab03.waitForURL(socialMediaFooterLinks.socialM_FooterLink03);
    expect(socialM_FooterTab03.url().includes(socialMediaFooterLinks.socialM_FooterLink03)).toBeTruthy();
    console.log(socialM_FooterTab03.url());
    await socialM_FooterTab03.close();

    // LAUNCH GOOGLE+ FOOTER PAGE
    const [socialM_FooterTab04] = await Promise.all([
      context.waitForEvent("page"),
      socialMediaFooter.socialM_Footer04.click(), // Opens a new tab
    ]);
    await socialM_FooterTab04.waitForURL(socialMediaFooterLinks.socialM_FooterLink04);
    expect(socialM_FooterTab04.url().includes(socialMediaFooterLinks.socialM_FooterLink04)).toBeTruthy();
    console.log(socialM_FooterTab04.url());
    await socialM_FooterTab04.close();

    // VALIDATE SOCIAL MEDIA LINKS VIA PRODUCT QUICK VIEW
    await btn_QuickView.hover();
    await page.locator(".quick-view >> nth=0").click();

    // LAUNCH TWITTER IFRAME PAGE
    const [socialM_IFrameTab01] = await Promise.all([
      context.waitForEvent("page"),
      socialMediaIFrame.socialM_IFrame01.click(), // Opens a new tab
    ]);
    await socialM_IFrameTab01.waitForURL(socialMediaIframeLinks.socialM_IFrameLink01);
    expect(socialM_IFrameTab01.url().includes(socialMediaIframeLinks.socialM_IFrameLink01)).toBeTruthy();
    console.log(socialM_IFrameTab01.url());
    await socialM_IFrameTab01.close();

    // LAUNCH FACEBOOK IFRAME PAGE
    const [socialM_IFrameTab02] = await Promise.all([
      context.waitForEvent("page"),
      socialMediaIFrame.socialM_IFrame02.click(), // Opens a new tab
    ]);
    await socialM_IFrameTab02.waitForURL(socialMediaIframeLinks.socialM_IFrameLink02);
    expect(socialM_IFrameTab02.url().includes(socialMediaIframeLinks.socialM_IFrameLink02)).toBeTruthy();
    console.log(socialM_IFrameTab02.url());
    await socialM_IFrameTab02.close();

    // LAUNCH GOOGLE+ IFRAME PAGE
    const [socialM_IFrameTab03] = await Promise.all([
      context.waitForEvent("page"),
      socialMediaIFrame.socialM_IFrame03.click(), // Opens a new tab
    ]);
    await socialM_IFrameTab03.waitForURL(socialMediaIframeLinks.socialM_IFrameLink03);
    expect(socialM_IFrameTab03.url().includes(socialMediaIframeLinks.socialM_IFrameLink03)).toBeTruthy();
    console.log(socialM_IFrameTab03.url());
    await socialM_IFrameTab03.close();

    // LAUNCH PINTEREST IFRAME PAGE
    const [socialM_IFrameTab04] = await Promise.all([
      context.waitForEvent("page"),
      socialMediaIFrame.socialM_IFrame04.click(), // Opens a new tab
    ]);
    await socialM_IFrameTab04.waitForURL(socialMediaIframeLinks.socialM_IFrameLink04);
    expect(socialM_IFrameTab04.url().includes(socialMediaIframeLinks.socialM_IFrameLink04)).toBeTruthy();
    console.log(socialM_IFrameTab04.url());
    await socialM_IFrameTab04.close();
  });
});
