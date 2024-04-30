import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Publications from "./pages/publications/Publications";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./utility/PrivateRoute";
import ProtectedRoute from "./utility/ProtectedRoute";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/publications" element={<Publications />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
