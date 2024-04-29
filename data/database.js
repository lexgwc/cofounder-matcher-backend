import mongoose from "mongoose";   


const connectDB = async () => {
  const db = await mongoose.connect(process.env.DATABASE_URL);
  console.log(`MongoDB connected: ${db.connection.host}`);
};

export default connectDB;
