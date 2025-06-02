import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { use } from "react";

export function Login() {
  const loginUsernameRef = useRef(null);
  const loginPasswordRef = useRef(null);
  const navigate = useNavigate();

  const validateLogin = async (event) => {
    event.preventDefault();

    const username = loginUsernameRef.current.value;
    const password = loginPasswordRef.current.value;

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("Login successful!");
        navigate("/home");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Server error, please try again later.");
    }
  };

  return (
    <>
      <section className="login__section1">
        <div className="content__containerLogin">
          <div className="login__titleSubheading">
            <div className="login__left">
              <div className="login__title">
                <h1 className="title">Login</h1>
              </div>
              <div className="login__subheading">
                <h1 className="description">
                  Use your Hollowness Account to access premium contents!
                </h1>
              </div>
            </div>
          </div>

          <div className="about__login">
            <div className="login__container" id="loginPage">
              <form className="login-form" onSubmit={validateLogin}>
                <h2 className="form__title">Login</h2>
                <p className="subtext">Enter your credentials to continue</p>

                <div className="input-form">
                  <input
                    type="text"
                    placeholder="Username"
                    ref={loginUsernameRef}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    ref={loginPasswordRef}
                    required
                  />
                  <div className="forgot__container">
                    <a href="#" className="forgot__password">
                      Forgot password?
                    </a>
                  </div>
                </div>

                <button type="submit">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
