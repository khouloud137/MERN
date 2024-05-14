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
import { useState } from "react";
import Settings from "./component/Settings/Settings";


function App() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route
            path="/publications"
            element={
              <Publications
                showSettings={showSettings}
                setShowSettings={setShowSettings}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                showSettings={showSettings}
                setShowSettings={setShowSettings}
              />
            }
          />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      {showSettings && (
        <Settings
          showSettings={showSettings}
          setShowSettings={setShowSettings}
        />
      )}
    </div>
  );
}

export default App;
