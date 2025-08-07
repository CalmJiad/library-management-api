import { Router } from "express";
import validateRequest from "../../middlewares/validateBookRequest";
import { createBook, getAllBooks, getBookById } from "./book.controller";
import { createBookZodSchema } from "./book.validation";

const bookRoute = Router();

bookRoute.post("/api/books", validateRequest(createBookZodSchema), createBook);
bookRoute.get("/api/books", getAllBooks);
bookRoute.get("/api/books/:bookId", getBookById);

export default bookRoute;
