import { Router } from 'express';
import validateRequest from '../../middlewares/validateBookRequest';
import {
  createBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from './book.controller';
import { createBookZodSchema } from './book.validation';

const bookRoute = Router();

bookRoute.post('/api/books', validateRequest(createBookZodSchema), createBook);
bookRoute.get('/api/books', getAllBooks);
bookRoute.get('/api/books/:bookId', getBookById);
bookRoute.put('/api/books/:bookId', updateBookById);
bookRoute.delete('/api/books/:bookId', deleteBookById);

export default bookRoute;
