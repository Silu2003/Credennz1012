import React from "react";

export default function TrustHero() {
  return (
    <section className="hero-section">
      <div className="hero-section-image-container">
        <img
          src="/img/img7.png"
          alt="Two people discussing technology solutions"
          className="hero-section-image"
        />
      </div>
      <div className="hero-section-content">
        <span className="hero-section-tag">WE BUILD , WE DELIVER</span>
        <h1 className="hero-section-title">
          Developing custom <br/>
          AI and Tech solutions<br/>
           for innovative<br/> companies
        </h1>
        <p className="hero-section-description">
          Our organization is dedicated to providing tailored technology
          solutions, helping forward-thinking businesses transform their
          processes, improve efficiency, and achieve their goals through
          advanced and innovative approaches.
        </p>
        <a href="#" className="hero-section-cta-button">
          Our Services
        </a>
      </div>
    </section>
  );
}
