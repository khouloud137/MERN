import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adresseHomeSearchSetter } from "../redux/actions/searchActions";

function Main() {
  const [homeSearch, setHomeSearch] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("user_data");

  return (
    <div className="main-container">
      <h2 className="main-title">
        Voyagez avec votre temps.Profitez du <br />
        <span className="mot-fond-arriere">couvoiturage</span> <br />
        adapté à la ville avec Rakebny.
      </h2>
      <div className="description">
        <h5>
          Rakebny réinvente le covoiturage courte distance en ville et en
          périphérie grâce à une solution intégrée pour conducteurs et
          passagers.
        </h5>
        <h5>
          Embarquez avec nous dans un mode de déplacement plus économique, plus
          écologique et surtout plus convivial.
        </h5>
      </div>
      <form
        className="filter"
        onSubmit={(e) => {
          e.preventDefault();
          if (user) {
            dispatch(adresseHomeSearchSetter(homeSearch));
            navigate("/publications");
          } else {
            navigate("/login");
          }
        }}
      >
        <div className="homeFilterInputs">
          <input
            type="text"
            placeholder="Adresse de depart"
            className="input-filter"
            required
            onChange={(e) =>
              setHomeSearch({ ...homeSearch, adressePart: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="arrivé"
            className="input-filter"
            required
            onChange={(e) =>
              setHomeSearch({ ...homeSearch, adresseArrive: e.target.value })
            }
          />
        </div>
        <button type="submit" id="homeFilterBtn">
          Trouve-moi un trajet &nbsp;
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            viewBox="0 0 15 15"
            id="goFilterIcon"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M2.146 11.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L5.793 7.5zm6 0a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 1 0-.708.708L11.793 7.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default Main;
