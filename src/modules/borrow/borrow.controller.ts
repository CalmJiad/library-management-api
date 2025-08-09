import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Book from '../book/book.model';
import BorrowBook from './borrow.model';

export const borrowBookById = async (req: Request, res: Response) => {
  try {
    const { book: bookId, quantity, dueDate } = req.body;

    if (!mongoose.Types.ObjectId.isValid(bookId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid book ID format',
      });
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be a positive number',
      });
    }

    const givenDate = new Date(dueDate);

    if (isNaN(givenDate.getTime())) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid date format' });
    }

    const updatedBook = await Book.borrowCopies(bookId, quantity);

    if (!updatedBook) {
      return res.status(400).json({
        success: false,
        message: 'Book not found or not enough available copies',
      });
    }

    const borrowedBook = new BorrowBook(req.body);
    const savedBorrowedBook = await borrowedBook.save();

    res.status(201).json({
      success: true,
      message: 'Book has been borrowed successfully',
      data: savedBorrowedBook,
    });
  } catch (error: unknown) {
    console.error('Failed to create borrowed book data:', error);
    res.status(500).json({
      success: false,
      message: 'Error occurred',
      error: error,
    });
  }
};

export const getBorrowedBookSummary = async (req: Request, res: Response) => {
  try {
    const borrowData = await BorrowBook.aggregate([
      {
        $group: {
          _id: '$book',
          totalQuantity: { $sum: '$quantity' },
        },
      },
      {
        $lookup: {
          from: 'books',
          localField: '_id',
          foreignField: '_id',
          as: 'book',
        },
      },
      { $unwind: '$book' },
      {
        $project: {
          _id: 0,
          book: {
            title: '$book.title',
            isbn: '$book.isbn',
          },
          totalQuantity: 1,
        },
      },
    ]);

    if (!borrowData) {
      return res.status(404).json({
        success: false,
        message: 'No borrowed book data found',
        data: null,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Borrowed book data retrieved successfully',
      data: borrowData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};
