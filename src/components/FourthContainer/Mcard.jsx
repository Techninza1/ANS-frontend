import React from "react";
import LogoImg from "../../assets/logos/LogoImg";
import './Mcard.css';

const Mcard = () => {
  return (
    <div className="mCard">
      <img src={LogoImg.Mlogo1} />
      <h3>Only full-stack platform</h3>
      <p>
        Solutions ranging from brandstore to fulfillment to suit your needs -
        whether you are an old brand or a new DTC
      </p>
    </div>
  );
};

export default Mcard;
