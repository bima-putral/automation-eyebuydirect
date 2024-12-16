import { expect, test } from "../../base/pomFixture";

test("result-sorting-extra-small", async ({ page, homePage, baseURL }) => {
  await homePage.homePage();
  await page.getByLabel("Close").click();
  await page.locator("//span[@aria-label='Eyeglasses']").hover();
  await page.getByTitle("Eyeglasses", { exact: true }).click();
  await page.getByRole("button", { name: "Size" }).click();
  await page
    .getByTestId("filter")
    .locator("div")
    .filter({ hasText: "Size0" })
    .nth(1)
    .click();

  await page.goto(`${baseURL}#attrs=XS/pagesize=30/page=1/sort=relevance`);

  await page.getByLabel("Extra Small", { exact: true }).click();
  await expect(page.getByLabel("Extra Small(46)")).toBeChecked();
  await expect(page.getByLabel("Extra Large(66)")).not.toBeChecked();
  await expect(page.getByLabel("Small(230)")).not.toBeChecked();
  await expect(page.getByLabel("Medium(606)")).not.toBeChecked();
  await expect(page.getByLabel("Large(863)")).not.toBeChecked();
  await expect(page.getByLabel("Extra Large(66)")).not.toBeChecked();
  const a = await page.locator("label").allInnerTexts();
  const b = (await page.locator("#main div").allTextContents()).filter((text) =>
    text.match("RESULT")
  );

  const paging = b[b.length - 1].split(" ")[0];
  const filter = a[8].match(/(\d+)/).shift();

  await page.screenshot({
    path: "./screenshot/sorting/result-sorting-extra-small.png",
    fullPage: true,
  });
  expect(paging).toEqual(filter);
  await page.screenshot({
    path: "./screenshot/sorting/result-sorting-extra-small.png",
    fullPage: true,
  });
});
