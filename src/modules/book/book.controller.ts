import { Request, Response } from "express";
import mongoose from "mongoose";
import { Genre, isValidGenre } from "../../utils/genreValidator";
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

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const {
      filter: rawGenre,
      sortBy = "createdAt",
      sort = "desc",
      limit,
    } = req.query;

    if (rawGenre && typeof rawGenre === "string" && !isValidGenre(rawGenre)) {
      return res.status(400).json({
        success: false,
        message: "Invalid genre provided",
      });
    }

    const filter =
      rawGenre && typeof rawGenre === "string"
        ? { genre: rawGenre.toUpperCase() as Genre }
        : {};

    const sortField = typeof sortBy === "string" ? sortBy : "createdAt";
    const sortOrder = sort === "asc" ? 1 : -1;
    const resultLimit =
      typeof limit === "string" && !isNaN(Number(limit))
        ? parseInt(limit, 10)
        : 10;

    const books = await Book.find(filter)
      .sort({ [sortField]: sortOrder })
      .limit(resultLimit);

    res.status(200).json({
      success: true,
      message: "Books data retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const id = req.params.bookId;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid book ID format",
      });
    }

    const bookData = await Book.findById(id);

    if (!bookData) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: "Single book data retrieved successfully",
      data: bookData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};
