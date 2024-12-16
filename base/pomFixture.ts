import { test as baseTest } from "@playwright/test";
import HomePage from "./pages/homePage";

type pages = {
  homePage: HomePage;
};

export const test = baseTest.extend<pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export const expect = test.expect;
