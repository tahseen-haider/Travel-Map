import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Mongodb connected!");
    app.listen(PORT, () => {
      console.log("Server running at: ", PORT);
    });
  })
  .catch((err) => {
    console.log("Backend connection error: ", err);
  });
