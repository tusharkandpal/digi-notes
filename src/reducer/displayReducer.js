export const displayInitialState = {
  addNoteToggle: false,
  sidebarToggle: false,
  colorToggle: false,
  labelToggle: false,
  filterToggle: false,
};

export const displayReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE_TOGGLE":
      return { ...state, addNoteToggle: payload.addNoteToggle };

    case "SIDEBAR_TOGGLE":
      return { ...state, sidebarToggle: !state.sidebarToggle };

    case "COLOR_TOGGLE":
      return { ...state, colorToggle: payload.colorToggle };

    case "LABEL_TOGGLE":
      return { ...state, labelToggle: payload.labelToggle };

    case "FILTER_TOGGLE":
      return { ...state, filterToggle: payload.filterToggle };

    default:
      return state;
  }
};

