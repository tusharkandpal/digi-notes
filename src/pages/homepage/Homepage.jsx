import "./Homepage.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/context";

export const Homepage = () => {
  const {
    authState: { isLoggedIn },
  } = useAuth();

  return (
    <div className="homepage">
      <div className="homepage-main">
        <div className="homepage-details">
          <h1 className="homepage-header">
            <span className="highlight-text">Digi</span> Notes
          </h1>
          <div className="homepage-sub-headers">
            <h2 className="homepage-sub-header">Meet your modern</h2>
            <h2 className="homepage-sub-header highlight-text">
              Note Taking App
            </h2>
          </div>
          <p className="homepage-text">
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </p>
        </div>
        <div className="homepage-buttons">
          {isLoggedIn ? (
            <Link to="/notes" className="homepage-signup-btn btn btn-sm primary">
              Get Started
            </Link>
          ) : (
            <>
              <Link to="/" className="homepage-signup-btn btn btn-sm primary">
                Join Now
              </Link>
              <Link to="/login" className="homepage-login-btn">
                Already have an account ?
              </Link>
            </>
          )}
        </div>
      </div>
      <img
        className="homepage-img img-responsive"
        src="./assets/homepage-img.svg"
        alt="homepage-img"
      />
    </div>
  );
};
