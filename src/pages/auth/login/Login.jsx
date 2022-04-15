import "./Login.css";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import { BsPersonBadge } from "react-icons/bs";
import { useAuth } from "../../../context/auth-context";

export function Login() {
  const { authState, loginHandler } = useAuth();
  const { error } = authState;

  const submitHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const [email, password] = e.target.elements;

    if (!form.checkValidity()) form.classList.add("validate");
    else {
      loginHandler(email.value, password.value);
    }
  };

  const guestLoginHandler = () => {
    // Implementing guest login
    loginHandler("adarshbalika@gmail.com", "adarshBalika123");
  };

  return (
    <main className="login-main">
      <img
        src="./assets/login-page.svg"
        alt="login-img"
        className="homepage-img img-responsive"
      />
      <section className="login-section">
        <form
          noValidate
          className="form-container"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="form-field">
            <h3 className="login-header">Login</h3>
            <label className="form-label required" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder="abc@xyz.com"
              required
            />
            <p className="form-invalid-message">
              <i className="fas fa-info-circle"></i> Please enter correct email!
            </p>
            <p className="form-valid-message">
              <i className="fas fa-check-circle"></i> That's right!
            </p>
          </div>
          <div className="form-field">
            <label className="form-label required" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              id="password"
              type="password"
              placeholder="************"
              required
            />
            <p className="form-invalid-message">
              <i className="fas fa-info-circle"></i> Please enter your password!
            </p>
          </div>
          <div className="form-field">
            <input className="form-checkbox" type="checkbox" id="terms" />
            <label htmlFor="terms" className="form-label">
              Remember me
            </label>
            <a href="#password-reset" className="form-link">
              Forgot your password ?
            </a>
          </div>
          <div className="login-buttons">
            <button className="btn btn-md primary form-btn" type="submit">
              Login
            </button>
            <button
              type="button"
              className="btn btn-sm outline outline-info guest-btn"
              onClick={guestLoginHandler}
            >
              <BsPersonBadge /> Guest Login
            </button>
          </div>
          <Link to="/signup">
            Create new account <MdDoubleArrow />
          </Link>
          {error && <p className="form-error-message">{error}</p>}
        </form>
      </section>
    </main>
  );
}
