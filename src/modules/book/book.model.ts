import mongoose, { Model, model, Schema } from "mongoose";
import { IBookDoc } from "./book.interface";

// Interface difference IBook vs IBookDoc

// this is the separate model type that includes our static {borrowCopies}
interface BookModelType extends Model<IBookDoc> {
  borrowCopies(bookId: string, quantity: number): Promise<IBookDoc | null>;
}

const bookSchema = new Schema<IBookDoc, BookModelType>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

bookSchema.statics.borrowCopies = async function (
  this: Model<IBookDoc>,
  bookId: string,
  quantity: number
): Promise<IBookDoc | null> {
  if (!mongoose.Types.ObjectId.isValid(bookId)) return null;
  if (!Number.isInteger(quantity) || quantity <= 0) return null;

  const book = await this.findById(bookId);

  if (!book) return null;
  if (book.copies < quantity) return null;

  book.copies = book.copies - quantity;

  if (book.copies === 0) {
    book.available = false;
  }

  await book.save();
  return book;
};

const Book = model<IBookDoc, BookModelType>("book", bookSchema);
export default Book;
