import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import UsernameCard from "../UsernameCard/Usernamecard";
import handleLogout from "../../utility/logoutHandler";

function SideBar({ showSettings, setShowSettings }) {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_menu">
          <UsernameCard />
          <hr />
          <Link to="/" className="sideBarLinks">
            <svg
              className="me-3"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.796 4.136a2.5 2.5 0 0 0-3.592 0L5.405 9.092c-.275.284-.46.644-.532 1.034a28.756 28.756 0 0 0-.127 9.624l.176 1.13c.056.357.364.62.725.62H9a.5.5 0 0 0 .5-.5v-7h5v7a.5.5 0 0 0 .5.5h3.353a.733.733 0 0 0 .724-.62l.177-1.13a28.759 28.759 0 0 0-.127-9.624a2.007 2.007 0 0 0-.533-1.034z"
              />
            </svg>
            <b>Home</b>
          </Link>
          <hr />
          <Link to="/publications" className="sideBarLinks">
            <svg
              className="me-3"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <g fill="currentColor">
                <path d="M5.75 7.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M5 10.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m5.25-2.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-3 .75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0M8 9.5A.75.75 0 1 0 8 11a.75.75 0 0 0 0-1.5" />
                <path
                  fillRule="evenodd"
                  d="M4.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-5V1.75A.75.75 0 0 0 4.75 1M3.5 7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1z"
                  clipRule="evenodd"
                />
              </g>
            </svg>
            <b>Publications</b>
          </Link>
          <hr />
          <Link to="/profile" className="sideBarLinks">
            <svg
              className="me-3"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-5.5-2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12"
                clipRule="evenodd"
              />
            </svg>
            <b>Profile</b>
          </Link>
          <hr />
          <Link
            to="#"
            className="sideBarLinks"
            onClick={() => setShowSettings(!showSettings)}
          >
            <svg
              className="me-3"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.455 1.45A.5.5 0 0 1 6.952 1h2.096a.5.5 0 0 1 .497.45l.186 1.858a4.996 4.996 0 0 1 1.466.848l1.703-.769a.5.5 0 0 1 .639.206l1.047 1.814a.5.5 0 0 1-.14.656l-1.517 1.09a5.026 5.026 0 0 1 0 1.694l1.516 1.09a.5.5 0 0 1 .141.656l-1.047 1.814a.5.5 0 0 1-.639.206l-1.703-.768c-.433.36-.928.649-1.466.847l-.186 1.858a.5.5 0 0 1-.497.45H6.952a.5.5 0 0 1-.497-.45l-.186-1.858a4.993 4.993 0 0 1-1.466-.848l-1.703.769a.5.5 0 0 1-.639-.206l-1.047-1.814a.5.5 0 0 1 .14-.656l1.517-1.09a5.033 5.033 0 0 1 0-1.694l-1.516-1.09a.5.5 0 0 1-.141-.656L2.46 3.593a.5.5 0 0 1 .639-.206l1.703.769c.433-.36.928-.65 1.466-.848zm-.177 7.567l-.022-.037a2 2 0 0 1 3.466-1.997l.022.037a2 2 0 0 1-3.466 1.997"
                clipRule="evenodd"
              />
            </svg>
            <b>setting</b>
          </Link>
          <hr />
          <Link to="/logout" className="sideBarLinks" onClick={handleLogout}>
            <svg
              className="me-3"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
              ></path>
            </svg>
            <b>Logout</b>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideBar;
