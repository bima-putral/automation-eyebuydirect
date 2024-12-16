import { Page } from "@playwright/test";

export default class HomePage {
  constructor(public page: Page) {}

  async homePage() {
    await this.page.goto("https://www.eyebuydirect.com/", {
      waitUntil: "commit",
    });
  }
}
