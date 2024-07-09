// utils/connectMongoDB.js
import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Database Connected Successfully!");
};

export default connectMongoDB;
