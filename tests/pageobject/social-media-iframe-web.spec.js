// The Iframe that appear when you click on Quick View button.
class SMediaIFrame {
  constructor(iframe) {
    this.socialM_IFrame01 = iframe.locator(".btn.btn-default.btn-twitter");
    this.socialM_IFrame02 = iframe.locator(".btn.btn-default.btn-facebook");
    this.socialM_IFrame03 = iframe.locator(".btn.btn-default.btn-google-plus");
    this.socialM_IFrame04 = iframe.locator(".btn.btn-default.btn-pinterest");
  }
}

module.exports = { SMediaIFrame };
