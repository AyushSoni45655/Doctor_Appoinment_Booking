import mongoose from "mongoose";

const connectDb = async () => {
  try {
    // ✅ Event Listeners
    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected successfully!");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    // ✅ Connection
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Appointment",
    });

  } catch (error) {
    console.error("⚠️ Something went wrong while connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDb;
