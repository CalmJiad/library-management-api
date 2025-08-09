import { model, Schema } from "mongoose";
import { IBorrow } from "./borrow.interface";

// Instance work on a specific document we’ve already fetched, whereas Static run directly on the model; we don’t need to fetch the document first.

const borrowSchema = new Schema<IBorrow>(
  {
    book: { type: Schema.Types.ObjectId, ref: "book", required: true },
    quantity: { type: Number, required: true },
    dueDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const BorrowBook = model<IBorrow>("borrowBook", borrowSchema);
export default BorrowBook;
