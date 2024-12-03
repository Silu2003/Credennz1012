import React from "react";
 
export default function TrustHero() {
  return (
    <section className="ap-hero-section">
      <div className="ap-hero-section-image-container">
        <img
          src="/img/img7.png"
          alt="Two people discussing technology solutions"
          className="ap-hero-section-image"
        />
      </div>
      <div className="ap-hero-section-content">
        <span className="ap-hero-section-tag">About us</span>
        <h1 className="ap-hero-section-title">We Build Tech</h1>
        <p className="ap-hero-section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis
          est sed dolor iaculis iaculis. Etiam venenatis felis et ligula
          hendrerit, at condimentum turpis mattis. Aenean pharetra euismod lorem
          nec cursus.
        </p>
        <a href="#" className="ap-hero-section-cta-button">
          Read More
        </a>
      </div>
    </section>
  );
}
 
