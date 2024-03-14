import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
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
    if (user.email === "") {
      localErrors.email = "Email required !";
      status = false;
    }
    if (user.password === "") {
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
      axios
        .post("http://localhost:8000/users/signin", user)
        .then((result) => {
          setUser(result);

          localStorage.setItem("user_data", JSON.stringify(result.data.user));
          localStorage.setItem("token", result.data.token);
          toast.success(" user Login!");

          navigate("/publications");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
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
          <label> Email</label>
          <input
            className="input"
            type="email"
            placeholder="type your email..."
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
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
              setUser({ ...user, password: e.target.value });
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
    </div>
  );
}

export default Login;
