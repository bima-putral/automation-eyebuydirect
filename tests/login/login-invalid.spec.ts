import { expect, test } from "@playwright/test";

test("login-email-invalid", async ({ page }) => {
  await page.goto("https://www.eyebuydirect.com/", {
    waitUntil: "commit",
  });
  await page.getByLabel("Close").click();
  await page.locator("//span[@aria-label='Sign In']").hover();
  await page.getByTestId("loginForm").getByLabel("Email").click();
  await page
    .getByTestId("loginForm")
    .getByLabel("Email")
    .fill("bimaputra@qa..team");
  await page.getByTestId("loginButton").click();
  await expect(page.getByTestId("loginForm").getByRole("alert")).toContainText(
    "Invalid email address"
  );
  await page.screenshot({
    path: `./screenshot/login/login-email-invalid-consecutive-dots.png`,
  });

  await page.getByTestId("loginForm").getByLabel("Email").click();
  await page
    .getByTestId("loginForm")
    .getByLabel("Email")
    .fill("bimaputra@qa.toolongtld");
  await page.getByTestId("loginButton").click();
  await expect(page.getByTestId("loginForm").getByRole("alert")).toContainText(
    "Invalid email address"
  );
  await page.screenshot({
    path: "./screenshot/login/login-email-invalid-toolongid.png",
  });
});