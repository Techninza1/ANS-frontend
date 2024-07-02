import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import "./NavBar.css";
import Product from "./HoverListItem/Product";
import Solution from "./HoverListItem/Solution";
import AgencyService from "./HoverListItem/AgencyService";
import Company from "./HoverListItem/Company";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'
const NavBar = () => {
  const [isProduct, setProduct] = useState(false);
  const [isSolution, setSolution] = useState(false);
  const [isAgancy, setAgency] = useState(false);
  const [isCompnay, setCompany] = useState(false);
  const[isHamburger,setHamburger] = useState("");




  return (
    <div className="Nav-container">
      <div>
        <img className="logo" src={logo} />
      </div>
      <div className={`nav-list-container ${isHamburger ? "open" : ""}`}>
        <ul className="nav-unorderlist">
          <li>
            <button
              className="dropbtn"
              onMouseEnter={() => setProduct(true)}
              onMouseLeave={() => setProduct(false)}
            >
              Product
            </button>
            {isProduct && <Product />}
          </li>
          <li>
            <button
              className="dropbtn"
              onMouseEnter={() => setSolution(true)}
              onMouseLeave={() => setSolution(false)}
            >
              Solution
            </button>
            {isSolution && <Solution />}
          </li>
          <li>
            <button
              className="dropbtn"
              onMouseEnter={() => setAgency(true)}
              onMouseLeave={() => setAgency(false)}
            >
              Agency Serive
            </button>
            {isAgancy && <AgencyService />}
          </li>
          <li>
            <button
              className="dropbtn"
              onMouseEnter={() => setCompany(true)}
              onMouseLeave={() => setCompany(false)}
            >
              Company
            </button>
            {isCompnay && <Company />}
          </li>

          <li>Contact</li>
        </ul>
        <button className="btn">Request Demo</button>
      </div>
      <div className="GiHamburgerButton" onClick={()=>setHamburger(!isHamburger)}>
        <GiHamburgerMenu />
      </div>
       
    </div>
  );
};

export default NavBar;
