import { z } from "zod";

export const genreEnum = z.enum([
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
]);

export const createBookZodSchema = z.object({
  title: z.string({
    error: "Title is required",
  }),
  author: z.string({
    error: "Author is required",
  }),
  genre: genreEnum,
  isbn: z.string({
    error: "ISBN is required",
  }),
  description: z.string().optional(),
  copies: z
    .number({
      error: "Copies are required",
    })
    .int("Copies must be an integer")
    .nonnegative("Copies must be a non-negative number"),
  available: z.boolean().optional(),
});

export const UpdateBookSchema = createBookZodSchema.partial();
