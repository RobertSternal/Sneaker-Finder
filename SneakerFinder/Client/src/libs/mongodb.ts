import mongoose from "mongoose";

const connectMongoDB = () => {
  const url = process.env.MONGODB_URL;
  if (!url) {
    console.log("MONGODB_URL is not defined!");
    return;
  }

  try {
    mongoose.connect(url);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
