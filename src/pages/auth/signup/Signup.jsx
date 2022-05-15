import "../Auth.css";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import { useAuth } from "../../../context/auth-context";

export const Signup = () => {
  const { authState, signupHandler } = useAuth();
  const { error } = authState;

  const submitHandler = (e) => {
    e.preventDefault();

    const form = e.target;
    const [email, password] = e.target.elements;

    if (!form.checkValidity()) form.classList.add("validate");
    else {
      signupHandler(email.value, password.value);
    }
  };

  return (
    <main className="auth-main">
      <img
        src="./assets/signup-page.svg"
        alt="signup-img"
        className="homepage-img img-responsive"
      />
      <section className="auth-section">
        <form
          noValidate
          className="form-container"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="form-field">
            <h3 className="auth-header">Signup</h3>
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
              <i className="fas fa-info-circle"></i> Please enter an email!
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
              minLength="6"
            />
            <p className="form-invalid-message">
              <i className="fas fa-info-circle"></i> Please enter atleast 6
              characters!
            </p>
            <p className="form-valid-message">
              <i className="fas fa-check-circle"></i> Strong password!
            </p>
          </div>
          <div className="form-field">
            <input
              className="form-checkbox"
              type="checkbox"
              id="terms"
              required
            />
            <label htmlFor="terms" className="form-label required">
              I accept all Terms & Conditions
            </label>
            <p className="form-checkbox-message">
              <i className="fas fa-info-circle"></i> You must agree before
              submitting!
            </p>
          </div>
          <div className="auth-buttons">
            <button className="btn btn-md primary form-btn" type="submit">
              Signup
            </button>
          </div>
          <Link to="/login">
            Already have an account <MdDoubleArrow />
          </Link>
          {error && <p className="form-error-message">{error}</p>}
        </form>
      </section>
    </main>
  );
};
