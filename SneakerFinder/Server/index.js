import fs from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const URL = "https://stockx.com/adidas-yeezy-slide-black-onyx";
const __dirname = dirname(fileURLToPath(import.meta.url));

function saveData(data, filePrefix) {
  const timestamp = +new Date();
  const dirPath = join(__dirname, 'data');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  const filePath = join(dirPath, `${filePrefix}-${timestamp}.json`);
  fs.writeFileSync(filePath, JSON.stringify({ name: data }, null, 2));
}

async function scrape(url, writeDataFn) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url);

  await page.setViewport({ width: 1080, height: 1024 });

  await page.waitForFunction(
    () => !!document.querySelector('[data-component="Header"]')
  );

  const title = await page.$eval('[data-component="Header"]', el => el.textContent.trim());

  await browser.close();
  writeDataFn(title, "payload");
}

scrape(URL, saveData);
