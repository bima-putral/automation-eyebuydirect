import { expect, test } from "../../base/pomFixture";

test("add-wishlist", async ({ page, homePage }) => {
  await homePage.homePage();
  await page.getByLabel("Close").click();
  await page.locator("//span[@aria-label='Eyeglasses']").hover();
  await page.getByRole("link", { name: "Kids’ Eyeglasses" }).click();
  await page
    .getByLabel("Black Little Bristol - Acetate Eyeglasses", { exact: true })
    .getByLabel("Add to Wishlist")
    .click();
  await page
    .getByLabel("Purple Gizmo - Plastic Eyeglasses", { exact: true })
    .getByLabel("Add to Wishlist")
    .click();
  await expect(
    page
      .getByLabel("Black Little Bristol - Acetate Eyeglasses", { exact: true })
      .getByLabel("Remove from Wishlist")
  ).toBeVisible();
  await expect(
    page
      .getByLabel("Purple Gizmo - Plastic Eyeglasses", { exact: true })
      .getByLabel("Remove from Wishlist")
  ).toBeVisible();
  await page.screenshot({
    path: "./screenshot/wishlist/add-wishlist.png",
  });
});

test("remove-wishlist", async ({ page, homePage }) => {
  await homePage.homePage();
  await page.getByLabel("Close").click();
  await page.locator("//span[@aria-label='Eyeglasses']").hover();
  await page.getByTitle("Men’s Eyeglasses", { exact: true }).click();
  await page
    .getByLabel("Clear Green Romy - Acetate Eyeglasses", { exact: true })
    .click();
  await page.getByLabel("Add to Wishlist").click();
  await page.getByLabel("Remove from Wishlist").click();
  await expect(page.getByLabel("Add to Wishlist")).toBeVisible();
  await page.screenshot({
    path: "./screenshot/wishlist/remove-wishlist.png",
  });
});
