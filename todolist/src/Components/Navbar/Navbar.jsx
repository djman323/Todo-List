import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";
import "./navbar.css"; // Import the CSS file

const Navbar = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  return (
    <div className="navbar">
      <nav className="navbar-nav">
        {userLoggedIn ? (
          <div className="navbar-logged-in">
            <button
              className="navbar-sign-out-button"
              onClick={() => doSignOut().then(() => navigate("/login"))}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="navbar-logged-out">
            <Link className="navbar-link" to={"/login"}>
              Login
            </Link>
            <Link className="navbar-link" to={"/register"}>
              Register
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
