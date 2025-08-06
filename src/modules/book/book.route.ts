import { Router } from "express";
import validateRequest from "../../middlewares/validateBookRequest";
import { createBook, getAllBooks } from "./book.controller";
import { createBookZodSchema } from "./book.validation";

const bookRoute = Router();

bookRoute.post("/api/books", validateRequest(createBookZodSchema), createBook);
bookRoute.get("/api/books", getAllBooks);

export default bookRoute;
