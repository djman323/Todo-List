import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await doSignInWithGoogle();
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      {userLoggedIn && <Navigate to={"/"} replace={true} />}
      <form className="login-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" disabled={isSubmitting} className="login-button">
          {isSubmitting ? "Loading..." : "Login"}
        </button>
      </form>
      <button onClick={onGoogleSignIn} className="google-login-button">
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;
