import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsArchive, BsTrash, BsPersonCircle } from "react-icons/bs";
import { useAuth } from "../../../context/context";

export function Sidebar({ setShowAddNote }) {
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
    <div className="sidebar">
      <ul className="sidebar-list">
        <NavLink to="/note" style={activeStyleHandler}>
          <li className="sidebar-item">
            <BiHome /> <span className="sidebar-label">Home</span>
          </li>
        </NavLink>
        <NavLink to="/label">
          <li className="sidebar-item">
            <MdLabelOutline /> <span className="sidebar-label">Labels</span>
          </li>
        </NavLink>
        <NavLink to="/archive">
          <li className="sidebar-item">
            <BsArchive /> <span className="sidebar-label">Archive</span>
          </li>
        </NavLink>
        <NavLink to="/trash">
          <li className="sidebar-item">
            {" "}
            <BsTrash /> <span className="sidebar-label">Trash</span>
          </li>
        </NavLink>
        <NavLink to="/profile">
          <li className="sidebar-item">
            <CgProfile /> <span className="sidebar-label">Profile</span>
          </li>
        </NavLink>
        <li className="new-note-item" onClick={() => setShowAddNote(true)}>
          <h3 className="new-note">Create New Note</h3>
        </li>
      </ul>
      <div className="profile-list">
        <p className="profile-item">
          <span className="avatar">
            <BsPersonCircle />
          </span>
          {firstName} {lastName}
        </p>
        <button className="logout-btn" onClick={logoutHandler}>
          <AiOutlineLogout />
        </button>
      </div>
    </div>
  );
}


