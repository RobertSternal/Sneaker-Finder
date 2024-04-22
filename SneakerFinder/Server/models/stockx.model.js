import mongoose from "mongoose";

const stocksSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Stockx = mongoose.model("Stockx", stocksSchema);

export default Stockx;
