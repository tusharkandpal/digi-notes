import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { BiHome } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { MdLabelOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsArchive, BsTrash, BsPersonCircle } from "react-icons/bs";

export function Sidebar() {
  return (
    <IconContext.Provider value={{ size: 30 }}>
      <div className="sidebar">
        <ul className="sidebar-list">
          <NavLink to="/note">
            <li className="sidebar-item active-item">
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
          <div className="profile-item">
            <span className="avatar">
              <BsPersonCircle />
            </span>
            Tushar Kandpal
          </div>
          <Link to="/logout">
            <AiOutlineLogout style={{ marginRight: "2rem" }} />
          </Link>
        </div>
      </div>
    </IconContext.Provider>
  );
}


