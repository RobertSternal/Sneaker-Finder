import axios from "axios";
import fs from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import { scrape } from "./scrape.js";

const URL = "https://stockx.com/adidas-yeezy-slide-black-onyx";

const __dirname = dirname(fileURLToPath(import.meta.url));

function saveData(data, filePrefix) {
  const timestamp = +new Date();
  const dirPath = join(__dirname, 'data');

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  const filePath = join(dirPath, `${filePrefix}-${timestamp}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

scrape(URL, saveData);
