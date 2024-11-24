import React from "react";
import "./Form.css";
import HeaderAndCircles from "./Components/Header/Header";
import DataEntryForm from "./Components/Contact/Contact";
import Socialmedia from "./Components/Socialmedia/Socialmedia";
import GitForm from "./Components/Gif/gif";
import Redirect from "./Components/Redirect/Redirect";

const Form = () => {
  return (
    <>
      <HeaderAndCircles />
      <div className="form-container">
        <div className="contact-grid-entry-container">
          <div className="contact-info">
            <DataEntryForm/>
          </div>
          <div className="additional-details">
            <GitForm/>
          </div>
          <div className="recent-activity">
          <Redirect/>
          </div>
          <div className="final-notes">
            <Socialmedia/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
