export const UserLoginRequest = () => {
  return {
    type: "USERLOGIN-REQUEST",
  };
};
export const UserLoginErrors = (payload) => {
  return {
    type: "USERLOGIN-Errors",
    payload,
  };
};
export const UserLoginSuccess = (payload) => {
  return {
    type: "USERLOGIN-SUCCESS",
    payload,
  };
};

// export const UserLogin = (payload) => {
//   return (dispatch) => {
//     dispatch(UserLoginRequest());
//     return apiClient
//       .post("/users/signin", payload)
//       .then((result) => {
//         dispatch(UserLoginSuccess(result));
//         // console.log(result);
//         localStorage.setItem("user_data", JSON.stringify(result.data.user));
//         localStorage.setItem("token", result.data.token);
//         // toast.success(" user Login!");
//         dispatch(navigate("/home"));
//       })
//       .catch((err) => {
//         dispatch(UserLoginErrors(err));
//         // toast.error(err.message);
//       });
//   };
// };
export const UserRegisterRequest = () => {
  return {
    type: "USERREGISTER-REQUEST",
  };
};
export const UserRegisterErrors = (payload) => {
  return {
    type: "USERREGISTER-Errors",
    payload,
  };
};
export const UserRegisterSuccess = (payload) => {
  return {
    type: "USERREGISTER-SUCCESS",
    payload,
  };
};
// export const UserRegister = (payload) => {
//   return (dispatch) => {
//     dispatch(UserRegisterRequest());
//     return apiClient
//       .post("/users/signup", payload)
//       .then((result) => {
//         dispatch(UserRegisterSuccess(result));

//         // toast.success(" user created Successfully!");
//       })
//       .catch((err) => {
//         dispatch(UserRegisterErrors(err));
//       });
//   };
// };
