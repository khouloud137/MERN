import React, { useState } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import "./Login.css";
import { UserLogin } from "../../redux/actions";

function Login() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
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
    formvalidation();

    if (formvalidation()) {
       dispatch(UserLogin(userLogin));
      
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
          <label> Email</label>
          <input
            className="input"
            type="email"
            placeholder="type your email..."
            onChange={(e) => {
              setUserLogin({ ...userLogin, email: e.target.value });
            }}
          />
          {errors.email && (
            <div style={{ textAlign: "lefet", color: "orangered" }}>
              {errors.email}
            </div>
          )}
        </div>

        <div className="form-group">
          <label> Password </label>
          <input
            className="input"
            type="password"
            placeholder="type your password..."
            onChange={(e) => {
              setUserLogin({ ...userLogin, password: e.target.value });
            }}
          />
          {errors.password && (
            <div style={{ textAlign: "lefet", color: "orangered" }}>
              {errors.password}
            </div>
          )}
        </div>
        <button className="btn singin" onClick={(e) => handelLogin(e)}>
          Sign In
        </button>
      </form>
      {authState.loading && <div>Connexion en cours...</div>}
      {authState.errors && <div>Erreur : {authState.errors}</div>}
      {authState.user && <div>Bienvenue, {authState.user.firstname}</div>}
    </div>
  );
}

export default Login;
