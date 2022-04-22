import "./Filters.css";
import { useFilter, useDisplay } from "../../context/context";

export function Filters() {
  const {
    filterState: { sortByDate, priorities },
    filterDispatch,
  } = useFilter();
  const {
    displayState: { filterToggle },
    displayDispatch,
  } = useDisplay();
  return (
    <div
      className="notes-filters"
      style={{ display: filterToggle ? "block" : " none" }}
    >
      {/* || Filters  */}
      <ul className="filter-list">
        <li className="filter-list-item">
          <span className="list-filter-header">Filters</span>
          <span
            className="list-filter-clear"
            onClick={() =>
              filterDispatch({
                type: "CLEAR_ALL",
              })
            }
          >
            Clear
          </span>
        </li>
        <li className="filter-list-item">
          <span className="list-filter-header">Sort By Priority</span>
          <div className="list-filter-item">
            <label className="item-label">
              <input
                type="checkbox"
                name="category"
                className="item-input"
                onChange={() =>
                  filterDispatch({
                    type: "SET_PRIORITY",
                    payload: { priority: "Low" },
                  })
                }
                checked={priorities.includes("Low")}
              />
              Low
            </label>
            <label className="item-label">
              <input
                type="checkbox"
                name="category"
                className="item-input"
                onChange={() =>
                  filterDispatch({
                    type: "SET_PRIORITY",
                    payload: { priority: "Medium" },
                  })
                }
                checked={priorities.includes("Medium")}
              />
              Medium
            </label>
            <label className="item-label">
              <input
                type="checkbox"
                name="category"
                className="item-input"
                onChange={() =>
                  filterDispatch({
                    type: "SET_PRIORITY",
                    payload: { priority: "High" },
                  })
                }
                checked={priorities.includes("High")}
              />
              High
            </label>
          </div>
        </li>
        <li className="filter-list-item">
          <span className="list-filter-header">Sort By Date</span>
          <div className="list-filter-item">
            <label className="item-label">
              <input
                type="radio"
                name="sort-by"
                className="item-input"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_DATE",
                    payload: { sortBy: "OLD_TO_NEW" },
                  })
                }
                checked={sortByDate === "OLD_TO_NEW"}
              />
              Old to New
            </label>
            <label className="item-label">
              <input
                type="radio"
                name="sort-by"
                className="item-input"
                onChange={() =>
                  filterDispatch({
                    type: "SORT_BY_DATE",
                    payload: { sortBy: "NEW_TO_OLD" },
                  })
                }
                checked={sortByDate === "NEW_TO_OLD"}
              />
              New to Old
            </label>
          </div>
        </li>
        <button
          type="button"
          className="btn btn-sm outline outline-info"
          onClick={() =>
            displayDispatch({
              type: "FILTER_TOGGLE",
              payload: { filterToggle: !filterToggle },
            })
          }
        >
          Hide / Go Back
        </button>
      </ul>
    </div>
  );
}


