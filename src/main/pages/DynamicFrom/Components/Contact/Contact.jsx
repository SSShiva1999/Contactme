import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./contact.css";

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    queryType: "",
    companyName: "",
    companyLocation: "",
    mobileNumber: "",
    resumeVisible: false,
  });

  const [status, setStatus] = useState("");
  const navigate = useNavigate(); // Use the navigate hook

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log(formData); // Log formData to check if queryType is set properly
  
    try {
      const response = await axios.post("http://localhost:5001/api/contact", formData);
  
      if (response.data.success) {
        setStatus("Message sent successfully!");
        alert("Message sent successfully!");
        navigate("/"); // Navigate to the desired page
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };
  

  return (
    <div className="form-container-entry">
       
      <form className="data-entry-form" onSubmit={handleSubmit}>
      <div className="contact-title">
        <h2>Reach Out</h2>
      </div>
        <div className="form-group">
          <label className="form-group-lable" htmlFor="name">Name:</label>
          <div className="input-wrapper">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-group-lable" htmlFor="email">Email:</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-group-lable" htmlFor="queryType">Query:</label>
          <div className="input-wrapper">
          <select
  id="queryType"
  name="queryType"
  value={formData.queryType}
  onChange={handleChange}
>
  <option value="">Select an option</option>
  <option value="Job Opportunities">Job Opportunities</option>
  <option value="Project Collaboration">Project Collaboration</option>
  <option value="Consultation or Advice">Consultation or Advice</option>
  <option value="General Inquiry">General Inquiry</option>
  <option value="Resume Review or Feedback">Resume Review or Feedback</option>
  <option value="Networking Opportunities">Networking Opportunities</option>
  <option value="Other">Other</option>
</select>

          </div>
        </div>

        {/* Show additional fields if 'Job Opportunities' is selected */}
        {formData.queryType === "Job Opportunities" && (
          <>
            <div className="form-group">
              <label className="form-group-lable" htmlFor="companyName">Company Name:</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-group-lable" htmlFor="companyLocation">Company Location:</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="companyLocation"
                  name="companyLocation"
                  value={formData.companyLocation}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-group-lable" htmlFor="mobileNumber">Company Number:</label>
              <div className="input-wrapper">
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </>
        )}

        <div className="form-group">
          <label className="form-group-lable" htmlFor="message">Message:</label>
          <div className="input-wrapper">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="2"
              cols="50"
              required
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default DataEntryForm;
