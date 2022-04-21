export const noteInitialState = {
  content: "",
  color: "",
  tags: [],
  priority: "Low",
  isPinned: false,
};

export const noteReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NOTE":
      return { ...state, content: payload.content, createdDate: new Date() };

    case "SET_COLOR":
      return { ...state, color: payload.color };

    case "SET_TAG":
      return {
        ...state,
        tags: state.tags.some((tag) => tag === payload.tag)
          ? state.tags
          : [...state.tags, payload.tag],
      };

    case "SET_PRIORITY":
      return {
        ...state,
        priority: payload.priority,
      };

    case "SET_EDIT_MODE":
      return payload.note;

    case "REMOVE_TAG":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== payload.tag),
      };

    case "RESET":
      return noteInitialState;

    default:
      return state;
  }
};

