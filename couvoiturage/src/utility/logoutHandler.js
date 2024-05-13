const handleLogout = () => {
  localStorage.removeItem("user_data");
  localStorage.removeItem("token");
};
export default handleLogout;
