import mongoose from "mongoose";

const dbConnection = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/chocolate")
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("Database connection failed:", error);
    });
};

export default dbConnection;
// This code connects to a MongoDB database using Mongoose.
