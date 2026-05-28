import mongoose from "mongoose";

export async function connectMongoDb() {

  const uri = process.env.MONGODB_URI;

  try {
    await mongoose.connect(uri, { dbName: "aaa-omega" });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error", err);
    throw err;
  };

};
