import { useState, useRef } from "react";

import "../styles/Landing.css";

export function Landing() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  // Refs to access infput fields dierectly
  const loginUsernameRef = useRef(null);
  const loginPasswordRef = useRef(null);
  const signupUsernameRef = useRef(null);
  const signupPasswordRef = useRef(null);

  // Toggle Login form visibility
  const showLogin = () => {
    setIsLoginVisible(true);
    setIsSignupVisible(false);
  };

  // Toggle signup form visibility
  const showSignup = () => {
    setIsSignupVisible(true);
    setIsLoginVisible(false);
  };

  // Handle forgot password click
  const forgotPassword = () => {
    alert("Password recovery process initiated.");
  };

  // Validation
  // fetch to backend

  const validateLogin = async (event) => {
    event.preventDefault();

    const username = loginUsernameRef.current.value;
    const password = loginPasswordRef.current.value;

    // try catch:
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const message = await res.text();

      if (res.ok) {
        alert(message);
        window.location.href = "home.html";
      } else {
        alert(message);
      }
    } catch (err) {
      alert("Server error, please try again later.");
    }
  };

  const validateSignup = async (event) => {
    event.preventDefault();

    const username = signupUsernameRef.current.value;
    const password = signupPasswordRef.current.value;

    // try catch:
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const message = await res.text();

      if (res.ok) {
        alert(message);
        showLogin();
      } else {
        alert(message);
      }
    } catch (err) {
      alert("Server error, please try again later.");
    }
  };

  return (
    <>
      {/* Conditionals to control the appearance of each sections */}
      {/* Landing Page */}
      {!isLoginVisible && !isSignupVisible && (
        <div className="container" id="landingPage">
          <div className="content__container">
            <header className="header__text">
              <h1 className="header__title">Hollow Knight</h1>
              <p className="header__subtext">
                Within emptiness, you find purpose. Welcome, Seeker.
              </p>
            </header>
            <div className="button-container">
              <button className="action-btn" onClick={showLogin}>
                Log In
              </button>
              <button className="action-btn" onClick={showSignup}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Login section */}
      {isLoginVisible && (
        <div className="login__container" id="loginPage">
          <form className="login-form" onSubmit={validateLogin}>
            <h2 className="form__title">Login</h2>
            <p className="subtext">Enter your credentials to continue</p>

            <div className="input-form">
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
                ref={loginUsernameRef}
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                ref={loginPasswordRef}
              />
              <div className="forgot__container">
                <a
                  href="#"
                  className="forgot__password"
                  id="forgot-password"
                  onClick={forgotPassword}
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <button type="submit">Log In</button>
            <p id="login-error-message"></p>
          </form>
          <p className="login-link">
            Don't have an account?
            <a href="#" onClick={showSignup}>
              Sign up
            </a>
          </p>
        </div>
      )}

      {/* Signup section */}
      {isSignupVisible && (
        <div className="signup__container" id="signupPage">
          <form className="signup-form" onSubmit={validateSignup}>
            <h2 className="form__title">Sign up</h2>
            <p className="subtext">Fill in the details to create an account</p>
            <div className="input-form">
              <input
                type="text"
                id="signup-username"
                placeholder="Username"
                required
                ref={signupUsernameRef}
              />
              <input
                type="password"
                id="signup-password"
                placeholder="Password"
                required
                ref={signupPasswordRef}
              />
              <button type="submit">Sign up</button>
            </div>
            <p id="signup-error-message"></p>
          </form>
          <p className="signup-link">
            Already have an account?
            <a href="#" onClick={showLogin}>
              Log in
            </a>
          </p>
        </div>
      )}
    </>
  );
}
