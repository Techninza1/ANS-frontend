import React from "react";
import LogoImg from "../../assets/logos/LogoImg";
import "./CompanyLogoSlider.css";

const CompnayLogoSlider = () => {
  return (
    <>
    <div className="slider-container">
      <div className="sliderheading">
        <h1>Excellence defines our circle!</h1>
      </div>
      <marquee>
        <div className="logoSlider">
          <ul>
            <li>
              <a href="/">
                <img src={LogoImg.amazon}></img>
              </a>
            </li>

            <li>
              <a href="/">
                <img src={LogoImg.ezilogo}></img>
              </a>
            </li>

            <li>
              <a href="/">
                <img src={LogoImg.flipkart}></img>
              </a>
            </li>

            <li>
              <a href="/">
                <img src={LogoImg.prime}></img>
              </a>
            </li>

            <li>
              <a href="/">
                <img src={LogoImg.rcti}></img>
              </a>
            </li>

            <li>
              <a href="/">
                <img src={LogoImg.scooprs}></img>
              </a>
            </li>

            <li>
              <a href="/">
                <img src={LogoImg.techninza}></img>
              </a>
            </li>

            <li>
              <a href="/">
                <img src={LogoImg.tvone}></img>
              </a>
            </li>
          </ul>
        </div>
      </marquee>
      </div>
      </>
  );
};

export default CompnayLogoSlider;
