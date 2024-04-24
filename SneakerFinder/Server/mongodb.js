import mongoose from "mongoose";

const connectMongoDB = () => {
  const url = process.env.MONGODB_URL;
  if (!url) {
    console.log("MONGODB_URL is not defined!");
    return;
  }

  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB!"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};

export default connectMongoDB;
