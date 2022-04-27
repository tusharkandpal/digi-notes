import { createContext, useContext, useReducer } from "react";
import { filterInitialState, filterReducer } from "../reducer/reducer";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );

  return (
    <FilterContext.Provider
      value={{
        filterState,
        filterDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };


