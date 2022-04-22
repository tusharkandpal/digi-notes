import { convertDateToMs } from "./convertDateToMs";

export const sortNotesByDate = (notes, sortByDate) => {
  switch (sortByDate) {
    case "OLD_TO_NEW":
      return [...notes].sort(
        (noteOne, noteTwo) =>
          convertDateToMs(noteOne.note.createdDate) -
          convertDateToMs(noteTwo.note.createdDate)
      );

    case "NEW_TO_OLD":
      return [...notes].sort(
        (noteOne, noteTwo) =>
          convertDateToMs(noteTwo.note.createdDate) -
          convertDateToMs(noteOne.note.createdDate)
      );

    default:
      return notes;
  }
};


