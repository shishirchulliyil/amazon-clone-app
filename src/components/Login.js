import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); // to prevent force refresh
    // login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in, redirect to home..
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  const register = (event) => {
    event.preventDefault(); // to prevent force refresh
    // register logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created user, redirect to home
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
          alt="logo"
          className="login__img"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            type="password"
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <p>
          <a href="#">Need help?</a>
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
