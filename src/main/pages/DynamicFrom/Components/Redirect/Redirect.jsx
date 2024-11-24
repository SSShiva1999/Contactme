import React from "react";
import "./Redirect.css";
import folio from "../../../../images/Linkimg1.svg";
import movie from "../../../../images/Linkimg2.svg";

const Redirect = () => {
  return (
    <div className="redirect-container">
      <div className="icon-circles">
        <a href="https://ssshiva1999.github.io/Folio/" target="_blank" rel="noopener noreferrer">
          <div className="circle-icon">
            <img src={folio} alt="Icon 1" className="icon-image" />
          </div>
        </a>
        <a href="https://ssshiva1999.github.io/movieready" target="_blank" rel="noopener noreferrer">
          <div className="circle-icon">
            <img src={movie} alt="Icon 2" className="icon-image" />
          </div>
        </a>
      </div>
      <div className="go-back-text">
      Just looking around
      </div>
    </div>
  );
};

export default Redirect;
