import React, { useState, useEffect } from "react";
import "./Header.css";
import github from "../../../../images/githublogo.svg";

const HeaderAndCircles = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = !isDarkMode ? "dark-mode" : "light-mode";
  };

  // Apply default theme on initial render
  useEffect(() => {
    document.body.className = "dark-mode";
  }, []);

  return (
    <div className="header-circles-container">
      <header className="fixed-header">
      <a href="https://github.com/SSShiva1999" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="GitHub Logo" className="github-logo" />
        </a>
        <div className="header-content">
          <span className="title">{isDarkMode ? "Dark" : "Light"}</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isDarkMode} // Reflect dark mode as the default
              onChange={toggleTheme}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </header>
    </div>
  );
};

export default HeaderAndCircles;
