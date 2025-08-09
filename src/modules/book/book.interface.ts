export type Genre =
  | "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";

export interface IBook {
  title: string;
  author: string;
  genre: Genre;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}

export enum BorrowType {
  GIVE = "give",
  TAKE = "take",
}

export interface IBookDoc extends IBook, Document {
  // instance method comes here if we have any, not any static methods. So as we are using static methods this will be blank and we are extending the existing type to explicitly tell the typescript we need 'Document' access.
}
