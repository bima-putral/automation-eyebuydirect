import { expect, test } from "../../base/pomFixture";
import HomePage from "../../base/pages/homePage";

test("login-valid", async ({ page, homePage }) => {
  await homePage.homePage();
  await page.getByLabel("Close").click();
  await page.locator("//span[@aria-label='Sign In']").hover();
  await page.getByTestId("loginForm").getByLabel("Email").click();
  await page
    .getByTestId("loginForm")
    .getByLabel("Email")
    .fill("bimaputra@qa.team");
  await page.locator('input[type="password"]').click();
  await page.locator('input[type="password"]').fill("lontongbalap123");
  await page.getByTestId("loginButton").click();
  await page.getByTestId("menu-account-link").click();
  await page.getByRole("link", { name: "My Account" }).click();
  await expect(page.getByText("bimaputra@qa.team")).toBeVisible();
  await page.screenshot({ path: "./screenshot/login/login-email-valid.png" });
});
