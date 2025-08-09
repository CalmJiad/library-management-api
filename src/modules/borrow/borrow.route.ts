import { Router } from "express";
import { borrowBookById, getBorrowedBookSummary } from "./borrow.controller";

const borrowRoute = Router();

borrowRoute.post("/api/borrow", borrowBookById);
borrowRoute.get("/api/borrow", getBorrowedBookSummary);

export default borrowRoute;
