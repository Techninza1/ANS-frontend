import React from "react";
import './FormContainer.css';
    
const FormContainer = () => {
  return (
    <div className="Form-main-container">
      
      <div className="Form-sub-container">
        <div className="Form-left-box">
          <h1>Seeing is believing !</h1>
          <p>Book a free demo session to see how we can boost your business</p>
        </div>
        <div className="Form-right-box">
          <form>
            <label>Your Name</label>
            <input type="text" placeholder="Name" />
            <label>Mobile</label>

            <input type="text" placeholder="Mobile" />
            <label>Email</label>

            <input type="text" placeholder="Email" />
            <label>Brand Name</label>

            <input type="text" placeholder="Brand Name" />

            <label>Message</label>

            <textarea placeholder="Message"></textarea>
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
