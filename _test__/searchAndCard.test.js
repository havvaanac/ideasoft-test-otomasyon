describe("E-Commerce Site Test on Brave Browser", () => {
  it("Searches for a product, adds to cart, and verifies in the cart", async () => {
    await page.goto("https://qatestcase.myideasoft.com/");
    await page.waitForLoadState("networkidle");

    await page.fill(
      'input[placeholder="Aramak istediğiniz ürünü yazınız"]',
      "ürün"
    );
    await page.keyboard.press("Enter");
    await page.waitForSelector("#results-page");
    await page.waitForLoadState("networkidle");

    await page.click("div.showcase");
    await page.waitForSelector("#qty-input");
    await page.waitForLoadState("networkidle");

    await page.fill("#qty-input", "5");

    await page.waitForSelector("a.add-to-cart-button");
    await page.click('a[data-selector="add-to-cart"]');

    await page.waitForSelector('text="SEPETİNİZE EKLENMİŞTİR"');
    await page.waitForSelector('text="SEPETİNİZE EKLENMİŞTİR"', {
      state: "detached",
    });

    await Promise.all([
      page.click('a[href="/sepet"]'),
      page.waitForNavigation({ waitUntil: "networkidle" }),
    ]);

    expect(page.url()).toBe("https://qatestcase.myideasoft.com/sepet");

    await page.waitForLoadState("networkidle");

    await page.waitForSelector('input[data-selector="qty"]');
    const quantityValue = await page.$eval(
      'input[data-selector="qty"]',
      (el) => el.value
    );
    expect(quantityValue).toBe("5");
  });
});
