import { Router } from "express";
import validateRequest from "../../middlewares/validateBookRequest";
import { createBook } from "./book.controller";
import { createBookZodSchema } from "./book.validation";

const bookRoute = Router();

bookRoute.post("/api/books", validateRequest(createBookZodSchema), createBook);

export default bookRoute;
