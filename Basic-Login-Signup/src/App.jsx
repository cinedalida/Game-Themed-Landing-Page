import { useState } from "react";

import "./App.css";

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

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
  const validateLogin = (event) => {
    event.preventDefault();
    alert("Login validated!");
  };

  const validateSignup = (event) => {
    event.preventDefault();
    alert("Signup validated!");
  };

  return (
    <>
      <div className="container" id="landingPage">
        <div className="content__container">
          <header className="header__text">
            <h1 className="header__title">Hollow Knights</h1>
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
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
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
              />
              <input
                type="password"
                id="signup-password"
                placeholder="Password"
                required
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

export default App;
