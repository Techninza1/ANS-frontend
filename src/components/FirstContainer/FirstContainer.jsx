import React from "react";
import "./FirstContainer.css";
const FirstContainer = ({ sliderData, onSlider, setOnSlider,handleForm }) => {
  
  return (
    <div>
    <div className="first-container">
      <div className="first-left-container">
        <h1>{sliderData.text1}</h1>
        <p id="para1">{sliderData.para1}</p>
        <button onClick={handleForm} className="btn">Request Demo</button>
      </div>
      <div className="first-right-container">
        <img src={sliderData.img1} alt="Slider Image" />
      </div>
    </div>
    <div className="slider-dot-play">
        <ul className="slider-dots">
          <li
            onClick={() => setOnSlider(0)}
            className={onSlider === 0 ? "slider-dot orange" : "slider-dot"}
          ></li>
          <li
            onClick={() => setOnSlider(1)}
            className={onSlider === 1 ? "slider-dot orange" : "slider-dot"}
          ></li>
          <li
            onClick={() => setOnSlider(2)}
            className={onSlider === 2 ? "slider-dot orange" : "slider-dot"}
          ></li>
          <li
            onClick={() => setOnSlider(3)}
            className={onSlider === 3 ? "slider-dot orange" : "slider-dot"}
          ></li>
        </ul>
      </div>
    </div>
    
  );
};

export default FirstContainer;
