// src/pages/Portfolio.js
import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>My Projects</h2>
      <ul>
        <li>
          <h3>Complaint Management System</h3>
          <p>A system for managing hardware damage complaints at PMI Hospital Bogor.</p>
          <a href="https://github.com/IlhamRipaiD/complaint-system" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </li>
        {/* Add more projects here */}
      </ul>
    </div>
  );
};

export default Portfolio;
