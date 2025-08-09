import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import config from "./config";
import bookRoute from "./modules/book/book.route";
import borrowRoute from "./modules/borrow/borrow.route";

const app = express();

app.use(express.json());
app.use(cors());

app.use(bookRoute);
app.use(borrowRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Library API",
  });
});

const startServer = async () => {
  try {
    await mongoose.connect(config.database_uri!);
    console.log("MongoDB Connected");

    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Failed to connect to DB", error);
    process.exit(1);
  }
};

startServer();
