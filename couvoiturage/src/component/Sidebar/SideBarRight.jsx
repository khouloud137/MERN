import React, { useState } from "react";
import "./SideBarRight.css";
import FilterSearch from "../FilterSearch/FilterSearch";
import { AnimatePresence } from "framer-motion";
import { globalSearchSetter } from "../../redux/actions/searchActions";
import { useDispatch } from "react-redux";

function SideBarRight() {
  const [showAdSearch, setShowAdSearch] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="SideBarRight">
      <input
        className="PublicationsInput"
        placeholder="Search..."
        onChange={(e) => dispatch(globalSearchSetter(e.target.value))}
      />
      <button
        type="button"
        id="showAdSearchBtn"
        onClick={() => setShowAdSearch(!showAdSearch)}
      >
        {showAdSearch ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
              <path
                fill="currentColor"
                d="M12 5a1 1 0 0 1 .707.293l5 5a1 1 0 0 1-1.414 1.414L12 7.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5A1 1 0 0 1 12 5m0 6a1 1 0 0 1 .707.293l5 5a1 1 0 0 1-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5A1 1 0 0 1 12 11"
              ></path>
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2rem"
            height="2rem"
            viewBox="0 0 24 24"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
              <path
                fill="currentColor"
                d="M6.293 6.293a1 1 0 0 1 1.414 0L12 10.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414m0 6a1 1 0 0 1 1.414 0L12 16.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414"
              ></path>
            </g>
          </svg>
        )}
      </button>
      <div className="adSearchSecondLayer">
        <AnimatePresence mode="wait">
          {showAdSearch && (
            <FilterSearch  />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SideBarRight;
