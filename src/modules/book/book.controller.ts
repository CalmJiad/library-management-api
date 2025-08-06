import { Request, Response } from "express";
import Book from "./book.model";

export const createBook = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const book = new Book(payload);
    const savedBook = await book.save();

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: savedBook,
    });
  } catch (error: any) {
    console.error("Failed to create book:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred",
      error: error,
    });
  }
};
