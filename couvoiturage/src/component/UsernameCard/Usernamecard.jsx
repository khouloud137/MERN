import React from "react";
// import { useSelector } from "react-redux";
import "./Style.css";
import { Link } from "react-router-dom";

function UsernameCard() {
  // const selectedData = useSelector((state) => state.user);
  // console.log(selectedData);
  return (
    <>
      <div className="username_card">
        <div className="username_card_image">
          <img src="https://images.pexels.com/photos/20192525/pexels-photo-20192525/free-photo-of-mode-gens-femme-jeune-fille.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div className="username_card_info">
          <Link to="/profile">
            <h3 className="username"> {} </h3>
          </Link>
          <span className="small">@gouttaikhouloud</span>
        </div>
      </div>
    </>
  );
}

export default UsernameCard;
