// Social media links located in the footer.
class SMediaFooter {
  constructor(page) {
    this.socialM_Footer01 = page.locator("#social_block >> ul >> li[class='facebook']");
    this.socialM_Footer02 = page.locator("#social_block >> ul >> li[class='twitter']");
    this.socialM_Footer03 = page.locator("#social_block >> ul >> li[class='youtube']");
    this.socialM_Footer04 = page.locator("#social_block >> ul >> li[class='google-plus']");
  }
}

module.exports = { SMediaFooter };
