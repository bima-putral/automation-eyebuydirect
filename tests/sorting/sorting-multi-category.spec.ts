import { test, expect } from "@playwright/test";

test("result-sorting-women-rimless", async ({ page }) => {
  await page.goto("https://www.eyebuydirect.com/", {
    waitUntil: "commit",
  });
  await page.getByLabel("Close").click();
  await page.getByRole("link", { name: "% Off ORDERS $75+" }).click();
  await page.getByLabel("Close").click();
  await page.getByRole("button", { name: "Gender" }).click();
  await page.locator("label").filter({ hasText: "Women(1466)" }).click();
  await page.getByRole("button", { name: "Rim" }).click();
  await page.locator("label").filter({ hasText: "Rimless(45)" }).click();
  await expect(page.getByLabel("Men(25)")).not.toBeChecked();
  await expect(page.getByLabel("Unisex(24)")).not.toBeChecked();
  await expect(page.getByLabel("Full-Rim(1360)")).not.toBeChecked();
  await expect(page.getByLabel("Semi-Rimless(65)")).not.toBeChecked();

  const a = await page.locator("label").allInnerTexts();

  const b = (await page.locator("#main div").allTextContents()).filter((text) =>
    text.match("RESULT")
  );

  const paging = b[b.length - 1].split(" ")[0];
  const filter = a[a.length - 1].match(/(\d+)/).shift();

  await page.screenshot({
    path: "./screenshot/sorting/result-sorting-women-rimless.png",
    fullPage: true,
  });
  expect(paging).toEqual(filter);
  await page.screenshot({
    path: "./screenshot/sorting/result-sorting-women-rimless.png",
    fullPage: true,
  });
});
