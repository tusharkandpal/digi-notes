import { useFilter } from "../context/context";
import { sortNotesByDate, sortNotesByPriority } from "../utils/utils";

export const useFilterNotes = (notes) => {
  const {
    filterState: { sortByDate, priorities },
  } = useFilter();

  return sortNotesByDate(
    sortNotesByPriority(notes, priorities),
    sortByDate
  );
};

