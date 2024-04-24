import mongoose from "mongoose";

const stockxSchema = new mongoose.Schema({
  name: String,
});

export const Stockx =
  mongoose.models.Stockx || mongoose.model("Stockx", stockxSchema, "stockxes");
