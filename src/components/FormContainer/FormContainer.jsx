import React, { forwardRef, useState } from "react";
import "./FormContainer.css";
import Swal from "sweetalert2";

const FormContainer = forwardRef((props,ref) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    brandname: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form data:", formData); // Log form data

    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status); // Log response status

      if (response.ok) {
        setFormData({
          name: "",
          mobile: "",
          email: "",
          brandname: "",
          message: "",
        });
        Swal.fire("Success", "Your form has been submitted!", "success");
      } else {
        const errorData = await response.json();
        console.log("Error response:", errorData); // Log error response
        Swal.fire("Error", "There was an error submitting your form.", "error");
      }
    } catch (error) {
      console.log("Error:", error); // Log error
      Swal.fire("Error", "There was an error submitting your form.", "error");
    }
  };

  return (
    <div className="Form-main-container">
      <div ref={ref} className="Form-sub-container">
        <div className="Form-left-box">
          <h1>Seeing is believing !</h1>
          <p>Book a free demo session to see how we can boost your business</p>
        </div>
        <div className="Form-right-box">
          <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <label>Mobile</label>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Brand Name</label>
            <input
              type="text"
              name="brandname"
              placeholder="Brand Name"
              value={formData.brandname}
              onChange={handleChange}
            />
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default FormContainer;
