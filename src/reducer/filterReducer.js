export const filterInitialState = {
  sortByDate: "",
  priorities: [],
};

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_PRIORITY":
      return {
        ...state,
        priorities: state.priorities.includes(payload.priority)
          ? state.priorities.filter((priority) => priority !== payload.priority)
          : [...state.priorities, payload.priority],
      };

    case "SORT_BY_DATE":
      return {
        ...state,
        sortByDate: payload.sortBy,
      };

    case "CLEAR_ALL":
      return filterInitialState;

    default:
      return state;
  }
};
