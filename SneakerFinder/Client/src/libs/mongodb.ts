import mongoose from "mongoose";

const connectMongoDB = () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.log("MONGODB_URI is not defined!");
    return;
  }

  try {
    mongoose.connect(uri);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
