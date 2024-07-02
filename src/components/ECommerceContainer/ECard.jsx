import React from 'react';
import './ECard.css';
import LogoImg from '../../assets/logos/LogoImg';

const ECard = () => {
  return (
    <div>
    <div className="E-card">
      <div className="E-sub-card">
        <div className="E-sub-img">
          <img src={LogoImg.cardimg1} alt="Card Image" />
          <h3>
            Kartify
            <br />
             Brandstore
          </h3>
        </div>
        <p>
          Fully customizable, integration-ready proprietary platform to
          power your brandstore
        </p>
      </div>
      <button className="btn">Know More</button>
    </div>
    </div>
  );
};

export default ECard;
