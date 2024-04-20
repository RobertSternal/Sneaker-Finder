import { selectors } from "./selectors.js";
import puppeteer from "puppeteer";

export const scrape = async (url, writeDataFn) => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto(url);

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  //  Get name of product
  // await page.waitForSelector(selectors.title);
  // const titleEl = await page.$(selectors.title);
  // const title = await page.evaluate((el) => el.textContent, titleEl);
  await page.waitForFunction(
    () => !!document.querySelector('[data-component="Header"]')
  );

  const title = await page.$eval(
    '[data-component="Header"]',
    (el) => el.textContent.trim() // Using trim to remove any excess whitespace
  );

  await browser.close();

  // Output handling callback
  writeDataFn(title, "payload");
};
