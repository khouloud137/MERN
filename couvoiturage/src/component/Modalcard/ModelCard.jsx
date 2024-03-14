import React from "react";
import "./ModelCard.css";
function ModelCard() {
  return (
    <div className="crt_wrapper">
      <div className="crt_lefet">
        <div className="card_one_lefet">
          <div className="card_content">
            <h3 className="card_title">
              Gagnez en liberté de déplacement et économisez en moyenne 200€ par
              mois !
            </h3>
          </div>
          <img
            className="card-svg"
            src="https://images.unsplash.com/photo-1521410843026-323be9ead002?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="card-two-lefet">
          <div className="card_content">
            <h3 className="card_title">Un paiement en</h3>
            <span>cash</span>
            ou en
            <span>carte</span>
            bancaire pour un trajet sur mesure !
          </div>
        </div>
        <div className="card-three-lefet">
          <div className="card_content">
            <h3 className="card_title">
              Une fidélité récompensée pour vous et vos proches avec
            </h3>
          </div>
        </div>
        <div className="card-four-lefet">
          <div className="card_content">
            <h3 className="card_title">
              Voyagez jusqu’à la dernière minute avec une solution automatisée
              et personnalisée !
            </h3>
          </div>
        </div>
      </div>
      <div className="crt_right">
        <div className="card_one_right">
          <div className="card_content">
            <h3 className="card_title">
              Voyagez l’esprit tranquille grâce aux fonctionnalités qui assurent
              votre
            </h3>
          </div>
        </div>
        <div className="card_two_right">
          <div className="card_content">
            <h3 className="card_title">
              Des trajets Women Only pour vous déplacer juste entre femmes
            </h3>
          </div>
          <img
            className="card_bg"
            src="https://i.pinimg.com/564x/ee/48/5c/ee485c291f48840c98157dee40a171a9.jpg"
            // style={{ width: "5%" , loading:"lazy"}}
            alt=""
          />
        </div>
        <div className="card_three_right">
          <div className="card_content">
            <h3 className="card_title">Découvrez nos </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCard;
