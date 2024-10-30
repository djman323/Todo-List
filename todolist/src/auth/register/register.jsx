import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import "./register.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    try {
      await doCreateUserWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <form className="register-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="register-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="register-input"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="register-input"
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="register-button"
        >
          {isSubmitting ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
