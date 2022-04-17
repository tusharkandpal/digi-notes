import "./Nav.css"
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDisplay } from "../../../context/context";

export const Nav = () => {
  const { displayDispatch } = useDisplay();
  return (
    <nav className="navbar">
      <GiHamburgerMenu
        className="navbar-icon icon-size"
        onClick={() => displayDispatch({ type: "SIDEBAR_TOGGLE" })}
      />
      <Link to="/notes">
        <h3 className="brand-name">
          <span className="brand-first-name">Digi</span> Notes
        </h3>
      </Link>
      <AiFillPlusCircle
        className="add-note-icon icon-size"
        onClick={() =>
          displayDispatch({
            type: "ADD_NOTE_TOGGLE",
            payload: { addNoteToggle: true },
          })
        }
      />
    </nav>
  );
};

