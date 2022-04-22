import "./Search.css";
import { FcSearch } from "react-icons/fc";
import { GrSort } from "react-icons/gr";
import { useDisplay } from "../../context/context";

export function Search() {
  const {
    displayState: { filterToggle },
    displayDispatch,
  } = useDisplay();

  return (
    <span className="search-addon">
      <FcSearch />
      <input type="text" className="search-input" placeholder="Search" />
      <GrSort
        className="filter-icon"
        onClick={() =>
          displayDispatch({
            type: "FILTER_TOGGLE",
            payload: { filterToggle: !filterToggle },
          })
        }
      />
    </span>
  );
}

