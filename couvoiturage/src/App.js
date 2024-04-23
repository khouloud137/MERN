import "./App.css";

import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Publications from "./pages/publications/Publications";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
