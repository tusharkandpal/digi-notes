import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createContext, useContext, useReducer } from "react";
import { authInitialState, authReducer } from "../reducer/reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const navigate = useNavigate();

  const loginHandler = async (email, password) => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      authDispatch({ type: "LOGIN", payload: { user: data.foundUser } });
      localStorage.setItem("encodedToken", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate("/notes", { replace: true });
    } catch (error) {
      authDispatch({ type: "FAILED", payload: { path: "Login" } });
      setTimeout(() => {
        authDispatch({ type: "RESET" });
      }, 1500);
    }
  };

  const signupHandler = async (email, password) => {
    try {
      const { data } = await axios.post("/api/auth/signup", {
        email,
        password,
      });
      authDispatch({ type: "SIGNUP", payload: { user: data.createdUser } });
      localStorage.setItem("encodedToken", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.createdUser));
      navigate("/notes", { replace: true });
    } catch (error) {
      authDispatch({ type: "FAILED", payload: { path: "Signup" } });
      setTimeout(() => {
        authDispatch({ type: "RESET" });
      }, 1500);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("encodedToken");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        loginHandler,
        signupHandler,
        logoutHandler,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
