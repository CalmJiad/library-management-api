import { Router } from "express";
import { borrowBookById } from "./borrow.controller";

const borrowRoute = Router();

borrowRoute.post("/api/borrow", borrowBookById);

export default borrowRoute;
