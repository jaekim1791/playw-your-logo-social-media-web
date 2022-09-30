// URLS to social medial pages.
class SMediaFooterLinks {
  constructor() {
    this.socialM_FooterLink01 = "https://www.facebook.com/groups/525066904174158/";
    this.socialM_FooterLink02 = "https://twitter.com/seleniumfrmwrk";
    this.socialM_FooterLink03 = "https://www.youtube.com/channel/UCHl59sI3SRjQ-qPcTrgt0tA";
    this.socialM_FooterLink04 = /.*https:\/\/accounts.google.com\/v3\/signin\/identifier.*/;
  }
}

class SMediaIframeLinks {
  constructor() {
    this.socialM_IFrameLink01 =
      "https://twitter.com/intent/tweet?text=Faded%20Short%20Sleeve%20T-shirts%20http://automationpractice.com/index.php?id_product=1&controller=product";
    this.socialM_IFrameLink02 =
      "https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttp%253A%252F%252Fautomationpractice.com%252Findex.php%253Fid_product%253D1%2526controller%253Dproduct%2526content_only%253D1&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_US";
    this.socialM_IFrameLink03 = /.*https:\/\/accounts.google.com\/v3\/signin\/identifier.*/;
    this.socialM_IFrameLink04 =
      "https://www.pinterest.com/pin/create/button/?media=http%3A%2F%2Fautomationpractice.com%2Fimg%2Fp%2F1%2F1-thickbox_default.jpg&url=http%3A%2F%2Fautomationpractice.com%2Findex.php%3Fid_product%3D1%26controller%3Dproduct%26content_only%3D1";
  }
}

module.exports = {
  SMediaFooterLinks: SMediaFooterLinks,
  SMediaIframeLinks: SMediaIframeLinks,
};
