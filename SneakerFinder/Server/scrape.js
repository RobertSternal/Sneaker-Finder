import { selectors } from "./selectors.js";
import puppeteer from "puppeteer";

export const scrape = async (url, writeDataFn) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url);

  await page.setViewport({ width: 1080, height: 1024 });

  await page.waitForFunction(
    () => !!document.querySelector('[data-component="Header"]')
  );

  const title = await page.$eval('[data-component="Header"]', (el) =>
    el.textContent.trim()
  );

  await browser.close();
  writeDataFn(title, "payload");
};
