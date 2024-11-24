import React from "react";
import "./Gif.css";
import gifImage from "../../../../images/8opi.gif";

const GitForm = () => {
  return (
    <>
      <div className="gif-container">
        <img src={gifImage} alt="Contact Me" className="gif-image" />
      </div>
    </>
  );
};

export default GitForm;
