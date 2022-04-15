import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { BiHome } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsArchive, BsTrash, BsPersonCircle } from "react-icons/bs";
import { useAuth } from "../../../context/context";

export function Sidebar() {
  const activeStyleHandler = ({ isActive }) => ({
    color: isActive ? "green" : "",
  });

  const {
    authState: { user },
    logoutHandler,
  } = useAuth();

  return (
    <IconContext.Provider value={{ size: 30 }}>
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
          <li className="new-note-item">
            <h3 className="new-note">Create New Note</h3>
          </li>
        </ul>
        <div className="profile-list">
          <p className="profile-item">
            <span className="avatar">
              <BsPersonCircle />
            </span>
            {user.firstName} {user.lastName}
          </p>
          <button className="logout-btn" onClick={logoutHandler}>
            <AiOutlineLogout />
          </button>
        </div>
      </div>
    </IconContext.Provider>
  );
}


