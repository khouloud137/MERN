import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import ModalSearch from "./ModalSearch";
import { useState } from "react";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  }
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/">
            <img src="./assets/LOGO.png" alt="" width={200} />
          </NavLink>
        </div>

        <div className=" link_nav">
          <div className="nav">
            <NavLink to="/" className="nav__NAv">
              {" "}
              Home
            </NavLink>
            <NavLink to="/publications" className="nav__NAv">
              Publications
            </NavLink>

            <NavLink to="/contact" className="nav__NAv">
              CONTACT
            </NavLink>
            <NavLink to="/register" className="nav__NAv">
              Register
            </NavLink>
          </div>
        </div>
        <div className="search-btn">
          <button className="btn-search" type="button" onClick={toggleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="form-input">
          <input
            type="text"
            className="input"
            name="email"
            placeholder=" votre email"
          />
          <NavLink to="/login">
            <button className="form-btn" type="button">
              <svg
                className="btn_icon"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"
                />
              </svg>
            </button>
          </NavLink>

          {showSearch && <ModalSearch toggleSearch={toggleSearch} />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
