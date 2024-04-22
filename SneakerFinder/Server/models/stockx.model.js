import mongoose from "mongoose";

const stocksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Stockx = mongoose.model("Stockx", stocksSchema);

export default Stockx;
