import React from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="Main-footer-container">
      <div className="logo-container">
        <img src={logo} />
        <p>
          The Office Pass, 5th Floor, Tower C, Unitech Cyber Park, Sector 39
          Gurugram, Haryana - 122001
        </p>
        <div>Email: que@anscommerce.com</div>
        <div>Phone:+91-9971957977</div>
      </div>
      <div className="product-container">
        <h3>Products</h3>
        <ul className="product-list">
          <li>
            <a href="/">Kartify</a>
          </li>
          <li>
            <a href="/">Kartapult</a>
          </li>
          <li>
            <a href="/">Flipshop</a>
          </li>
        </ul>
      </div>

      <div className="solution-container">
        <h3>Solutions</h3>
        <ul className="solution-list">
          <li>
            <a href="/">Performance Marketing</a>
          </li>
          <li>
            <a href="/">Multi-Channel Fulfillment (MCF)</a>
          </li>
          <li>
            <a href="/">Marketplace Management</a>
          </li>
          <li>
            <a href="/">Warehousing & Fulfillment</a>
          </li>
          <li>
            <a href="/">E-commerce Consulting</a>
          </li>
          <li>
            <a href="/">Free Marketing Audit</a>
          </li>
        </ul>
      </div>

      <div className="Agency-container">
        <h3>Agency Services</h3>
        <ul className="Agency-list">
          <li>
            <a href="/">E-commerce Agency</a>
          </li>
          <li>
            <a href="/">D2C Marketing Agency</a>
          </li>
          <li>
            <a href="/">Facebook Ad Agency</a>
          </li>
          <li>
            <a href="/">Digital Marketing Agency</a>
          </li>
          <li>
            <a href="/">SEO Agency</a>
          </li>
          <li>
            <a href="/">PPC Agency</a>
          </li>
        </ul>
      </div>

      <div className="industry-container">
        <h3>Industry Solutions</h3>
        <ul className="industry-list">
          <li>
            <a href="/">Fashion & Lifestyle</a>
          </li>
          <li>
            <a href="/">Beauty & Personal Care</a>
          </li>
          <li>
            <a href="/">FMCG</a>
          </li>
          <li>
            <a href="/">Direct-to-consumer</a>
          </li>
        </ul>
      </div>

      <div className="company-container">
        <h3>Products</h3>
        <ul className="company-list">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Partners</a>
          </li>
          <li>
            <a href="/">Newsroom</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Integrations</a>
          </li>
          <li>
            <a href="/">Presskit</a>
          </li>
          <li>
            <a href="/">Corporate</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="copyright-container">
      <p> Copyright © ANS Digital Pvt. Ltd</p>
      <p> Hand Crafted with <FaRegHeart />+ in India</p>
    </div>
    
    </>
  );
};

export default Footer;
