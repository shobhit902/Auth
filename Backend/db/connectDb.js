import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn.connection.readyState === 1) {
      console.log(`MONGODB Coneected: ${conn.connection.readyState}`);
    } else {
      console.log("MONGODB not connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
