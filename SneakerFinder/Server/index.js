import dotenv from "dotenv";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import Stockx from "./models/stockx.model.js";
import connectMongoDB from "./mongodb.js";
import { scrape } from "./scrape.js";

dotenv.config();
connectMongoDB();

const URL = "https://grailpoint.com/produkt/yeezy-slides-onyx";
const __dirname = dirname(fileURLToPath(import.meta.url));

function saveData({ name, price }) {
  const newStockx = new Stockx({
    name: name,
    price: price,
  });
  newStockx
    .save()
    .then(() => console.log("Data saved to MongoDB!"))
    .catch((err) => console.error("Error saving data to MongoDB:", err));
}

scrape(URL, saveData);
