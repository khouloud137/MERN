import React, { useState } from "react";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    bio: "",
    birthdate: "",
  });
  const [errors, setErrors] = useState({});
  const formvalidation = () => {
    let status = true;
    let localErrors = {};
    if (user.firstname == "") {
      localErrors.firstname = "firstname required !";
      status = false;
    }
    if (user.lastname == "") {
      localErrors.lastname = " lastname required !";
      status = false;
    }
    if (user.email == "") {
      localErrors.email = "Email required !";
      status = false;
    }
    if (user.password == "") {
      localErrors.password = "Password required  and min a 8!";
      status = false;
    }
    if (user.bio == "") {
      localErrors.bio = "Bio required !";
      status = false;
    }

    setErrors(localErrors);
    return status;
  };
  function handelRegister(e) {
    e.preventDefault();
    setErrors({});
    formvalidation();
    console.log(user);
    if (formvalidation()) {
      axios
        .post("http://localhost:8000/users/signup",user)
        .then((result) => {
          setUser(result);

          toast.success(" user created Successfully!");

          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  }
  return (
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
              <label> firstname </label>
              <input
                className="input"
                type="text"
                placeholder="type your firstname..."
                onChange={(e) => {
                  setUser({ ...user, firstname: e.target.value });
                }}
              />
              {errors.firstname && (
                <div style={{ textAlign: "lefet", color: "orangered" }}>
                  {errors.firstname}
                </div>
              )}
            </div>

            <div className="form-group">
              <label> Lastname </label>
              <input
                className="input"
                type="text"
                placeholder="type your lastname..."
                onChange={(e) => {
                  setUser({ ...user, lastname: e.target.value });
                }}
              />
              {errors.lastname && (
                <div style={{ textAlign: "lefet", color: "orangered" }}>
                  {errors.lastname}
                </div>
              )}
            </div>

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

            <div className="form-group">
              <label> Bio </label>
              <textarea
                type=""
                placeholder="type your Bio..."
                onChange={(e) => {
                  setUser({ ...user, bio: e.target.value });
                }}
              ></textarea>
              {errors.bio && (
                <div style={{ textAlign: "lefet", color: "orangered" }}>
                  {errors.bio}
                </div>
              )}
            </div>
<p>if you acount <Link to='/login'>login here</Link></p>
            <button className="btn sigup" onClick={(e) => handelRegister(e)}>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
