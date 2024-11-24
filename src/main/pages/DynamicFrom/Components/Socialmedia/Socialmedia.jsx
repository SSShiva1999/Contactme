import React from "react";
import './Socialmedia.css'; // Import the CSS for styling
import fac from "../../../../images/Facebook.svg";
import Int from "../../../../images/Instagram.svg";
import Inl from "../../../../images/LinkedIn.svg";
import xt from "../../../../images/Twitter.svg";

const Socialmedia = () => {
  return (
    <div className="social-media-container">
      <h2 className="social-media-title">Social Media</h2>
      <div className="social-media-icons">
        <div className="icon-circle">
          <a href="https://www.facebook.com/shiva.s.96742/" target="_blank" rel="noopener noreferrer">
            <img src={fac} alt="Facebook" className="icon-image" />
          </a>
        </div>
        <div className="icon-circle">
          <a href="https://www.instagram.com/siva_svgs/" target="_blank" rel="noopener noreferrer">
            <img src={Int} alt="Instagram" className="icon-image" />
          </a>
        </div>
        <div className="icon-circle">
          <a href="https://www.linkedin.com/in/shiva-ss/" target="_blank" rel="noopener noreferrer">
            <img src={Inl} alt="LinkedIn" className="icon-image" />
          </a>
        </div>
        <div className="icon-circle">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={xt} alt="Twitter" className="icon-image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
