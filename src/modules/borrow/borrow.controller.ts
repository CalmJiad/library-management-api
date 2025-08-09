import { Request, Response } from "express";
import mongoose from "mongoose";
import Book from "../book/book.model";
import BorrowBook from "./borrow.model";

export const borrowBookById = async (req: Request, res: Response) => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid book ID format",
      });
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be a positive integer",
      });
    }

    const givenDate = new Date(dueDate);

    if (isNaN(givenDate.getTime())) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid date format" });
    }

    const updatedBook = await Book.borrowCopies(bookId, quantity);

    if (!updatedBook) {
      return res.status(400).json({
        success: false,
        message: "Book not found or not enough available copies",
      });
    }

    const borrowedBook = new BorrowBook(req.body);
    const savedBorrowedBook = await borrowedBook.save();

    res.status(201).json({
      success: true,
      message: "Book has been borrowed successfully",
      data: savedBorrowedBook,
    });
  } catch (error: any) {
    console.error("Failed to create borrowed book data:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred",
      error: error,
    });
  }
};
