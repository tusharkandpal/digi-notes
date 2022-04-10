import "./Search.css";
import { FcSearch } from "react-icons/fc";
import { GrSort } from "react-icons/gr";

export function Search() {
  return (
    <span className="search-addon">
      <FcSearch />
      <input type="text" className="search-input" placeholder="Search" />
      <GrSort className="filter-icon" />
    </span>
  );
}

