import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  UserRegisterErrors,
  UserRegisterRequest,
  UserRegisterSuccess,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import apiClient from "../../utility/apiClient";

function Register() {
  const dispatch = useDispatch();

  const [userRegister, setUserRegister] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    bio: "",
    birthdate: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const formvalidation = () => {
    let status = true;
    let localErrors = {};
    if (userRegister.firstname === "") {
      localErrors.firstname = "firstname required !";
      status = false;
    }
    if (userRegister.lastname === "") {
      localErrors.lastname = " lastname required !";
      status = false;
    }
    if (userRegister.email === "") {
      localErrors.email = "Email required !";
      status = false;
    }
    if (userRegister.password === "") {
      localErrors.password = "Password required  and min a 8!";
      status = false;
    }
    if (userRegister.bio === "") {
      localErrors.bio = "Bio required !";
      status = false;
    }

    setErrors(localErrors);
    return status;
  };

  function handelRegister(e) {
    e.preventDefault();
    setErrors({});
    const isValid = formvalidation();

    if (isValid) {
      dispatch(UserRegisterRequest());
      return apiClient
        .post("/users/signup", userRegister)
        .then((result) => {
          dispatch(UserRegisterSuccess(result));
          navigate("/login");
          toast.success(" user created Successfully!");
        })
        .catch((err) => {
          dispatch(UserRegisterErrors(err));
          toast.error(err.response.data.message);
        });
    }
  }

  return (
    <>
      {" "}
      <video
        id="bgvid"
        autoPlay
        loop
        muted
        src="https://videos.pexels.com/video-files/4372788/4372788-uhd_3840_2024_24fps.mp4"
      />
      <div className="register">
        <Toaster />
        <div className="register-cover"></div>
        <div className="register-content">
          <div>
            <h1>MON ESPACE</h1>
          </div>
          <div>
            <form className="form">
              <div className="form-group">
                <label> first name </label>
                <input
                  className="input"
                  type="text"
                  placeholder="type your firstname..."
                  onChange={(e) => {
                    setUserRegister({
                      ...userRegister,
                      firstname: e.target.value,
                    });
                  }}
                />
                {errors.firstname && (
                  <div
                    className="authErrors"
                    style={{ textAlign: "lefet", color: "orangered" }}
                  >
                    {errors.firstname}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label> Last name </label>
                <input
                  className="input"
                  type="text"
                  placeholder="type your lastname..."
                  onChange={(e) => {
                    setUserRegister({
                      ...userRegister,
                      lastname: e.target.value,
                    });
                  }}
                />
                {errors.lastname && (
                  <div
                    className="authErrors"
                    style={{ textAlign: "lefet", color: "orangered" }}
                  >
                    {errors.lastname}
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  className="input"
                  type="email"
                  placeholder="type your email..."
                  onChange={(e) => {
                    setUserRegister({ ...userRegister, email: e.target.value });
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
                    setUserRegister({
                      ...userRegister,
                      password: e.target.value,
                    });
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

              <div className="form-group">
                <label> Bio </label>
                <textarea
                  type=""
                  placeholder="type your Bio..."
                  onChange={(e) => {
                    setUserRegister({ ...userRegister, bio: e.target.value });
                  }}
                ></textarea>
                {errors.bio && (
                  <div
                    className="authErrorsForBio"
                    style={{ textAlign: "lefet", color: "orangered" }}
                  >
                    {errors.bio}
                  </div>
                )}
              </div>
              <p className="auth-linking">
                if you have an acount already{" "}
                <Link to="/login">login here</Link>
              </p>
              <button
                className="authBtn btn sigup"
                onClick={(e) => handelRegister(e)}
              >
                Sign up
              </button>
            </form>
            <Link to={"/"} className="backHomeBtn">
              <b>Back home</b>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
