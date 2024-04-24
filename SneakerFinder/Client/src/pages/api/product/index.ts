import type { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "../../../libs/mongodb";
import { Stockx } from "../../../models/stockx";

connectMongoDB();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const stockxItems = await Stockx.find({});
      res.status(200).json(stockxItems);
    } catch (error: any) {
      console.error("Error fetching stockx items:", error);
      res
        .status(500)
        .json({ message: "Error fetching stockx items", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
