import "./Nav.css"
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/notes">
        <h3 className="brand-name">
          <span className="brand-first-name">Digi</span> Notes
        </h3>
      </Link>
    </nav>
  );
};

