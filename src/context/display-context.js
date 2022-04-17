import { createContext, useContext, useReducer } from "react";
import { displayInitialState, displayReducer } from "../reducer/reducer";

const DisplayContext = createContext();

const DisplayProvider = ({ children }) => {
  const [displayState, displayDispatch] = useReducer(
    displayReducer,
    displayInitialState
  );

  return (
    <DisplayContext.Provider
      value={{
        displayState,
        displayDispatch,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

const useDisplay = () => useContext(DisplayContext);

export { DisplayProvider, useDisplay };


