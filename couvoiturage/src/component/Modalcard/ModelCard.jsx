import React from "react";
import "./ModelCard.css";
import { motion } from "framer-motion";

function ModelCard() {
  return (
    <div className="crt_wrapper">
      <div className="crt_lefet">
        <motion.div
          initial={{ x: "-30%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card_one_lefet"
        >
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
        </motion.div>
        <motion.div
          initial={{ x: "-90%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-two-lefet"
        >
          <div className="card_content">
            <h3 className="card_title">
              Un paiement en cash ou en carte bancaire pour un trajet sur mesure
              !
            </h3>
          </div>
          <img
            src="https://avatars.mds.yandex.net/get-altay/4565742/2a00000179231e723f9265470eced793364a/XXL_height"
            alt=""
          />
        </motion.div>
        {/* <div className="card-three-lefet">
          <div className="card_content">
            <h3 className="card_title">
              Une fidélité récompensée pour vous et vos proches avec
            </h3>
          </div>
          <img src="" alt="" />
        </div> */}
        <motion.div
          initial={{ x: "-90%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-four-lefet"
        >
          <div className="card_content">
            <h3 className="card_title">
              Voyagez jusqu’à la dernière minute avec une solution automatisée
              et personnalisée !
            </h3>
          </div>
          <img
            src="https://myfaithmedia.org/wp-content/uploads/2015/04/iStock_000032584652_Medium.jpg"
            alt=""
            className="lastOneGrid"
          />
        </motion.div>
      </div>
      <div className="crt_right">
        <motion.div
          initial={{ x: "90%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card_one_right"
        >
          <img
            src="https://www.fubiz.net/wp-content/uploads/2014/08/Chantal-Anderson-Photography10.jpg"
            alt=""
          />
          <div className="card_content">
            <h3 className="card_title">
              Voyagez l’esprit tranquille grâce aux fonctionnalités qui assurent
              votre confort
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "90%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card_two_right"
        >
          <img
            className="card_bg"
            src="https://hdpic.club/uploads/posts/2021-11/1637757075_24-hdpic-club-p-s-podrugoi-s-mashinoi-32.jpg"
            // style={{ width: "5%" , loading:"lazy"}}
            alt=""
          />
          <div className="card_content">
            <h3 className="card_title">
              Des trajets Women Only pour vous déplacer juste entre femmes
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "90%" }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card_three_right"
        >
          <img
            src="https://w.forfun.com/fetch/84/84bbd2212ea73678d047f4eb02173d9b.jpeg"
            alt=""
            className=" lastTwoGrid"
          />
          <div className="card_content">
            <h3 className="card_title">Découvrez nos </h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ModelCard;
