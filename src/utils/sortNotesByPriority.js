export const sortNotesByPriority = (notes, priorities) => {
  if (priorities.length !== 0)
    return priorities.reduce(
      (priorityNotes, priority) => [
        ...priorityNotes,
        ...notes.filter(({note}) => note.priority === priority),
      ],
      []
    );

  return notes;
};


