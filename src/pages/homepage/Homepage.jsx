import "./Homepage.css";
import { Link } from "react-router-dom";

export const Homepage = () => {
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
          <Link to="/" className="homepage-signup-btn btn btn-sm primary">
            Join Now
          </Link>
          <Link to="/" className="homepage-login-btn">
            Already have an account ?
          </Link>
        </div>
      </div>
      <img
        class="homepage-img img-responsive"
        src="./assets/homepage-img.svg"
        alt="homepage-img"
      />
    </div>
  );
}


