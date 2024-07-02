import React from "react";
import "./EcommerceContainer.css";
import ECard from "./ECard";

const EcommerceContainer = () => {
  return (
    <div className="E-main-container">
    <div className="E-sub-container">
      <div className="E-top">
        <h1>Your go-to hub for e-commerce needs</h1>
        <p>Products & solutions to power your brand’s home on the cloud</p>
      </div>
      <div className="E-bottom">
         <ECard />
         <ECard />
         <ECard />
         <ECard />
      </div>
      </div>
    </div>
  );
};

export default EcommerceContainer;
