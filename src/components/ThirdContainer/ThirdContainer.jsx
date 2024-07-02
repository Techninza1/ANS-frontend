import React from "react";
import LogoImg from "../../assets/logos/LogoImg";
import "./ThirdContainer.css";

const ThirdContainer = () => {
  return (
    <div className="third-main-container">
      <div className="third-sub-container">
        <div className="third-left-box">
          <h1>
            Still confused on the Whys and the Hows?
            <br />
            We can <span className="text-span">Consult</span>:)
          </h1>
          <button className="btn">Know More</button>
        </div>
        <div className="third-right-box">
          <img src={LogoImg.confuse} />
        </div>
      </div>
    </div>
  );
};

export default ThirdContainer;
