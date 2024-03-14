import React from "react";

function Main() {
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
      <div className="filter">
        <input type="text" placeholder="Adresse de depart" className="input-filter" />
        <input type="text" placeholder="arrivé" className="input-filter" />
      </div>
    </div>
  );
}

export default Main;
