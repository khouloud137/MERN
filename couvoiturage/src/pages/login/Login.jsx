import React, { useEffect, useState } from "react";
//  import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import {
  UserLoginErrors,
  UserLoginRequest,
  UserLoginSuccess,
  unsetEmail,
} from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import apiClient from "../../utility/apiClient";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSentEmail = useSelector((state) => state.users.tempEmail);

  useEffect(() => {
    if (userSentEmail) {
      document.querySelector("#loginEmailInput").value = userSentEmail;
    }
    return () => {
      dispatch(unsetEmail());
    };
  }, [dispatch, userSentEmail]);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const formvalidation = () => {
    let status = true;
    let localErrors = {};
    if (userLogin.email === "") {
      localErrors.email = "Email required !";
      status = false;
    }
    if (userLogin.password === "") {
      localErrors.password = "Password required  and min a 8!";
      status = false;
    }

    setErrors(localErrors);
    return status;
  };

  function handelLogin(e) {
    e.preventDefault();

    setErrors({});
    const isValid = formvalidation();

    if (isValid) {
      dispatch(UserLoginRequest());
      apiClient
        .post("/users/signin", userLogin)
        .then((result) => {
          dispatch(UserLoginSuccess(result));

          localStorage.setItem("user_data", JSON.stringify(result.data.user));
          localStorage.setItem("token", result.data.token);
          navigate("/publications");
        })
        .catch((err) => {
          dispatch(UserLoginErrors(err));
        });
    } else {
      console.log(errors);
    }
  }

  return (
    <div className="login">
      <Toaster />
      <div className="login-cover"></div>
      <div className="login-content">
        <div>
          <h1>MON ESPACE</h1>
        </div>
      </div>
      <form>
        <div className="form-group">
          <label>Email</label>
          <input
            id="loginEmailInput"
            className="input"
            type="email"
            placeholder="type your email..."
            onChange={(e) => {
              setUserLogin({ ...userLogin, email: e.target.value });
            }}
          />
          {errors.email && (
            <div
              className="authErrors"
              style={{ textAlign: "lefet", color: "orangered" }}
            >
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Password </label>
          <input
            className="input"
            type="password"
            placeholder="type your password..."
            onChange={(e) => {
              setUserLogin({ ...userLogin, password: e.target.value });
            }}
          />
          {errors.password && (
            <div
              className="authErrors"
              style={{ textAlign: "lefet", color: "orangered" }}
            >
              {errors.password}
            </div>
          )}
        </div>
        <p className="auth-linking">
          <Link to="/register">Join us here</Link>
        </p>
        <button className="authBtn btn singin" onClick={(e) => handelLogin(e)}>
          Sign In
        </button>
      </form>
      <Link to={"/"} className="backHomeBtn">
        <b>Back home</b>
      </Link>
      {/* {authState.loading && <div>Connexion en cours...</div>}
      {authState.errors && <div>Erreur : {authState.errors}</div>}
      {authState.user && <div>Bienvenue, {authState.user.firstname}</div>} */}
    </div>
  );
}

export default Login;
