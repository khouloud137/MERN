import React from "react";

import "./Cards.css";

function Cards() {
  return (
    <div className="cards-container">
      <div
        className="card"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="card_title">
          <p>
            Trouvez un trajet en covoit'
            <br /> de moins de 80km, <br /> tous les jours et à toute heure.
          </p>
        </div>
        {/* <img
          src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        /> */}
      </div>
      <div
        className="card"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1625959518941-99decaa7d878?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="card_title">
          <p>
            Recherchez un covoitureur
            <br /> en moins de 30 minutes <br /> et jusqu'à 7 jours à l'avance.
          </p>
        </div>
        {/* <img
          src="https://images.unsplash.com/photo-1625959518941-99decaa7d878?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        /> */}
      </div>
      <div
        className="card"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1542242476-5a3565835a38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpZ2h3YXl8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <div className="card_title">
          <p>Payez en espèce ou par carte bancaire.</p>
        </div>
        {/* <img
          src="https://images.unsplash.com/photo-1542242476-5a3565835a38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpZ2h3YXl8ZW58MHx8MHx8fDA%3D"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Cards;
