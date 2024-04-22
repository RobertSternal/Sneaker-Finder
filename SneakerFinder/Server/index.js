import dotenv from "dotenv";
dotenv.config();
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import Stockx from "./models/stockx.model.js";

import connectMongoDB from "./mongodb.js";

connectMongoDB();

const URL = "https://stockx.com/adidas-yeezy-slide-black-onyx";
const __dirname = dirname(fileURLToPath(import.meta.url));

function saveData(data, filePrefix) {
  const newStockx = new Stockx({ name: data });
  newStockx
    .save()
    .then(() => console.log("Data saved to MongoDB!"))
    .catch((err) => console.error("Error saving data to MongoDB:", err));
}

async function scrape(url, writeDataFn) {
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
}

scrape(URL, saveData);
