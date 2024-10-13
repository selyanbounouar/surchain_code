// About.js

import React from "react";
import './css/About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our website! We are a company that specializes in...</p>
      
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>At our company, we are dedicated to...</p>
      </section>
      <section className="our-history">
        <h2>Our History</h2>
        <p>Our company was founded in...</p>
      </section>
    </div>
  );
}

export default About;