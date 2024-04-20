import axios from "axios";
import fs from "fs";

import { scrape } from "./scrape.js";

const URL = "https://stockx.com/adidas-yeezy-slide-black-onyx";

function saveData(data, filePrefix) {
  const timestamp = +new Date();

  fs.writeFileSync(`${filePrefix}-${timestamp}.csv`, data);
}

scrape(URL, saveData);
