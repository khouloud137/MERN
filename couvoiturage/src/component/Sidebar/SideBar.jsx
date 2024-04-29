import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_menu">
          <a>
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
            <Link to="/">
              <b>Home</b>
            </Link>
          </a>
          <a>
            <svg
              className="me-3"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M10 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4.51 7.326a.78.78 0 0 1-.358-.442a3 3 0 0 1 4.308-3.516a6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655m14.95.654a4.97 4.97 0 0 0 2.07-.654a.78.78 0 0 0 .357-.442a3 3 0 0 0-4.308-3.517a6.484 6.484 0 0 1 1.907 3.96a2.32 2.32 0 0 1-.026.654M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5.304 16.19a.844.844 0 0 1-.277-.71a5 5 0 0 1 9.947 0a.843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81"
              />
            </svg>
            <b>people</b>
          </a>
          <a>
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
                d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909l.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0zM12 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                clipRule="evenodd"
              />
            </svg>
            <b>photos</b>
          </a>
          <a>
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
            <b>New Feed</b>
          </a>
          <a>
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
            <Link to="/profile">
              {" "}
              <b>Profile</b>
            </Link>
          </a>
          <a>
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
          </a>
        </div>
      </div>
    </>
  );
}

export default SideBar;
