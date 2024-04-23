import axios from "axios";
import { Navigate } from "react-router-dom";


const UserLoginRequest = () => {
  return {
    type: "USERLOGIN-REQUEST",
  };
};
const UserLoginErrors = (payload) => {
  return {
    type: "USERLOGIN-Errors",
    payload,
  };
};
const UserLoginSuccess = (payload) => {
  return {
    type: "USERLOGIN-SUCCESS",
    payload,
  };
};

export const UserLogin = (payload) => {
  return  (dispatch) => {
    dispatch(UserLoginRequest());
    return axios
      .post("http://localhost:8000/users/signin", payload)
      .then((result) => {
        dispatch(UserLoginSuccess(result));
        localStorage.setItem("user_data", JSON.stringify(result.data.user));
        localStorage.setItem("token", result.data.token);
        // toast.success(" user Login!");

navigate('/profile')
       
      })
      .catch((err) => {
        dispatch(UserLoginErrors(err));
        // toast.error(err.message);
      });
  };
};
const UserRegisterRequest = () => {
  return {
    type: "USERREGISTER-REQUEST",
  };
};
const UserRegisterErrors = (payload) => {
  return {
    type: "USERREGISTER-Errors",
    payload,
  };
};
const UserRegisterSuccess = (payload) => {
  return {
    type: "USERREGISTER-SUCCESS",
    payload,
  };
};
export const UserRegister= (payload) => {
  return(dispatch) => {
    dispatch(UserRegisterRequest())
    return axios
      .post("http://localhost:8000/users/signup", payload)
      .then((result) => {
        dispatch(UserRegisterSuccess(result));

        // toast.success(" user created Successfully!");

        //  navigate("/login");
      })
      .catch((err) => {
        dispatch(UserRegisterErrors(err))
      });
  
  };
};

