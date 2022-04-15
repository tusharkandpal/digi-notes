export const authInitialState = {
  ...(localStorage.getItem("encodedToken") !== null
    ? {
        user: JSON.parse(localStorage.getItem("user")),
        isLoggedIn: true,
      }
    : {
        user: {},
        isLoggedIn: false,
      }),
  error: "",
};

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload.user,
        isLoggedIn: true,
      };

    case "LOGOUT": {
      return {
        user: {},
        isLoggedIn: false,
        error: "",
      };
    }

    case "FAILED":
      return { ...state, error: `${payload.path} failed! Please try again.` };

    default:
      return state;
  }
};


