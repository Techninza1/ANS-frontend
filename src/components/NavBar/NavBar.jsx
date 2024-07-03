import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import "./NavBar.css";
import Product from "./HoverListItem/Product";
import Solution from "./HoverListItem/Solution";
import AgencyService from "./HoverListItem/AgencyService";
import Company from "./HoverListItem/Company";
import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from 'react-router-dom';

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isHamburger, setHamburger] = useState(false);

  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    
    
  };
  

  return (
    <div className="Nav-container">
      <div>
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className={`nav-list-container ${isHamburger ? "open" : ""}`}>
        <ul className="nav-unorderlist">
          <li>
            <button
              className="dropbtn"
              onClick={() => handleDropdownClick("Product")}
            >
              Product
            </button>
            {openDropdown === "Product" && <Product />}
          </li>
          <li>
            <button
              className="dropbtn"
              onClick={() => handleDropdownClick("Solution")}
            >
              Solution
            </button>
            {openDropdown === "Solution" && <Solution />}
          </li>
          <li>
            <button
              className="dropbtn"
              onClick={() => handleDropdownClick("AgencyService")}
            >
              Agency Service
            </button>
            {openDropdown === "AgencyService" && <AgencyService />}
          </li>
          <li>
            <button
              className="dropbtn"
              onClick={() => handleDropdownClick("Company")}
            >
              Company
            </button>
            {openDropdown === "Company" && <Company />}
          </li>
          <li>Contact</li>
        </ul>
        <button className="btn">Request Demo</button>
      </div>
      <div className="GiHamburgerButton" onClick={() => setHamburger(!isHamburger)}>
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default NavBar;
