import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsArchive, BsTrash, BsPersonCircle } from "react-icons/bs";
import { useAuth, useDisplay } from "../../../context/context";

export function Sidebar() {
  const {
    displayState: { sidebarToggle },
    displayDispatch,
  } = useDisplay();
  const activeStyleHandler = ({ isActive }) => ({
    color: isActive ? "green" : "",
  });

  const {
    authState: {
      user: { firstName, lastName },
    },
    logoutHandler,
  } = useAuth();

  return (
    <div
      className="sidebar"
      style={{ display: sidebarToggle ? "flex" : "none" }}
    >
      <ul className="sidebar-list">
        <NavLink
          to="/notes"
          style={activeStyleHandler}
          onClick={() => displayDispatch({ type: "SIDEBAR_TOGGLE" })}
        >
          <li className="sidebar-item">
            <BiHome className="icon-size" />{" "}
            <span className="sidebar-label">Home</span>
          </li>
        </NavLink>
        <NavLink
          to="/labels"
          style={activeStyleHandler}
          onClick={() => displayDispatch({ type: "SIDEBAR_TOGGLE" })}
        >
          <li className="sidebar-item">
            <MdLabelOutline className="icon-size" />{" "}
            <span className="sidebar-label">Labels</span>
          </li>
        </NavLink>
        <NavLink
          to="/archives"
          style={activeStyleHandler}
          onClick={() => displayDispatch({ type: "SIDEBAR_TOGGLE" })}
        >
          <li className="sidebar-item">
            <BsArchive className="icon-size" />{" "}
            <span className="sidebar-label">Archive</span>
          </li>
        </NavLink>
        <NavLink
          to="/trash"
          style={activeStyleHandler}
          onClick={() => displayDispatch({ type: "SIDEBAR_TOGGLE" })}
        >
          <li className="sidebar-item">
            <BsTrash className="icon-size" />{" "}
            <span className="sidebar-label">Trash</span>
          </li>
        </NavLink>
        <NavLink to="/profile" style={activeStyleHandler}>
          <li className="sidebar-item">
            <CgProfile className="icon-size" />{" "}
            <span className="sidebar-label">Profile</span>
          </li>
        </NavLink>
        <li
          className="new-note-item"
          onClick={() => {
            displayDispatch({
              type: "ADD_NOTE_TOGGLE",
              payload: { addNoteToggle: true },
            });
            displayDispatch({ type: "SIDEBAR_TOGGLE" });
          }}
        >
          <h3 className="new-note">Create New Note</h3>
        </li>
      </ul>
      <div className="profile-list">
        <p className="profile-item">
          <span className="avatar">
            <BsPersonCircle className="icon-size" />
          </span>
          {firstName} {lastName}
        </p>
        <button className="logout-btn" onClick={logoutHandler}>
          <AiOutlineLogout className="icon-size" />
        </button>
      </div>
    </div>
  );
}


