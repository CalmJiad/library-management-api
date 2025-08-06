const genres = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
] as const;

export type Genre = (typeof genres)[number];

export function isValidGenre(value: string): value is Genre {
  const upperValue = value.toUpperCase();
  return genres.includes(upperValue as Genre);
}
