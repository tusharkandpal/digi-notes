import "./Nav.css";
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
      <h3 className="brand-name">
        <Link to="/notes">
          <span className="brand-first-name">Digi</span> Notes
        </Link>
      </h3>
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

