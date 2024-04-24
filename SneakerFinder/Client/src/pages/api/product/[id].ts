import connectMongoDB from "../../../libs/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { Stockx } from "../../../models/stockx";

connectMongoDB();

// GET /api/product/:id
async function getStockx(req: NextApiRequest, res: NextApiResponse) {
  try {
    const stockxItem = await Stockx.findById(req.query.id);
    if (!stockxItem) {
      res.status(404).json({ message: "Item not found" });
    } else {
      res.status(200).json(stockxItem);
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Error fetching item", error: error.message });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return getStockx(req, res);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
